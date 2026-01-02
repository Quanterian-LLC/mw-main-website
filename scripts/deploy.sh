#!/bin/bash

set -e

ENVIRONMENT=$1
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(dirname "$SCRIPT_DIR")"

if [ -z "$ENVIRONMENT" ]; then
  echo "Usage: $0 <dev|preprod|prod>"
  exit 1
fi

if [[ ! "$ENVIRONMENT" =~ ^(dev|preprod|prod)$ ]]; then
  echo "Error: Environment must be dev, preprod, or prod"
  exit 1
fi

echo "=== Deploying File Watcher Frontend to $ENVIRONMENT ==="

if [ "$ENVIRONMENT" = "prod" ]; then
  PROJECT_ID="metawurks"
  SA_KEY_VAR="GCP_SA_KEY_PROD"
  TF_STATE_BUCKET_VAR="TF_STATE_BUCKET_PROD"
  API_URL_VAR="PROD_API_URL"
  WS_URL_VAR="PROD_WS_URL"
else
  PROJECT_ID="metawurks-dev-preprod"
  SA_KEY_VAR="GCP_SA_KEY_DEV"
  TF_STATE_BUCKET_VAR="TF_STATE_BUCKET_DEV"
  if [ "$ENVIRONMENT" = "dev" ]; then
    API_URL_VAR="DEV_API_URL"
    WS_URL_VAR="DEV_WS_URL"
  else
    API_URL_VAR="PREPROD_API_URL"
    WS_URL_VAR="PREPROD_WS_URL"
  fi
fi

REGION="us-central1"
REPOSITORY="file-watcher"
SERVICE_NAME="file-watcher-frontend-$ENVIRONMENT"

if [ -z "${!API_URL_VAR}" ] || [ -z "${!WS_URL_VAR}" ]; then
  echo "Error: ${API_URL_VAR} and ${WS_URL_VAR} environment variables must be set"
  exit 1
fi

API_URL="${!API_URL_VAR}"
WS_URL="${!WS_URL_VAR}"

echo "Step 1: Authenticating with GCP..."
if [ -n "${!SA_KEY_VAR}" ]; then
  echo "${!SA_KEY_VAR}" | base64 -d > /tmp/gcp-key.json
  gcloud auth activate-service-account --key-file=/tmp/gcp-key.json
  rm /tmp/gcp-key.json
fi

gcloud config set project "$PROJECT_ID"
gcloud auth configure-docker "${REGION}-docker.pkg.dev"

echo "Step 2: Building frontend Docker image..."
cd "$PROJECT_ROOT"
IMAGE_TAG="${REGION}-docker.pkg.dev/${PROJECT_ID}/${REPOSITORY}/frontend:${ENVIRONMENT}-$(date +%Y%m%d-%H%M%S)"
IMAGE_LATEST="${REGION}-docker.pkg.dev/${PROJECT_ID}/${REPOSITORY}/frontend:${ENVIRONMENT}-latest"

docker build \
  --build-arg VITE_API_URL="$API_URL" \
  --build-arg VITE_WS_URL="$WS_URL" \
  -t "$IMAGE_TAG" \
  -t "$IMAGE_LATEST" \
  -f Dockerfile \
  .

echo "Step 3: Pushing Docker image to Artifact Registry..."
docker push "$IMAGE_TAG"
docker push "$IMAGE_LATEST"

echo "Step 4: Deploying with Terraform..."
cd "$PROJECT_ROOT/terraform"

if [ -n "${!TF_STATE_BUCKET_VAR}" ]; then
  terraform init \
    -backend-config="bucket=${!TF_STATE_BUCKET_VAR}" \
    -backend-config="prefix=frontend/${ENVIRONMENT}"
else
  terraform init
fi

terraform plan \
  -var-file="environments/${ENVIRONMENT}.tfvars" \
  -var="frontend_image=$IMAGE_TAG" \
  -var="api_url=$API_URL" \
  -var="ws_url=$WS_URL" \
  -out=tfplan

terraform apply -auto-approve tfplan

echo "Step 5: Getting service URL..."
SERVICE_URL=$(gcloud run services describe "$SERVICE_NAME" \
  --region="$REGION" \
  --format='value(status.url)')

echo ""
echo "=== Deployment Complete! ==="
echo "Environment: $ENVIRONMENT"
echo "Service URL: $SERVICE_URL"
echo "Image: $IMAGE_TAG"
echo ""

