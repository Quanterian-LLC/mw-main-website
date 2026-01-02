#!/bin/bash

set -e

ENVIRONMENT=$1
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

if [ -z "$ENVIRONMENT" ]; then
  echo "Usage: $0 <dev|preprod|prod>"
  exit 1
fi

if [[ ! "$ENVIRONMENT" =~ ^(dev|preprod|prod)$ ]]; then
  echo "Error: Environment must be dev, preprod, or prod"
  exit 1
fi

echo "=== Setting up GCP for File Watcher ($ENVIRONMENT) ==="

if [ "$ENVIRONMENT" = "prod" ]; then
  PROJECT_ID="metawurks"
  SA_NAME="prod-metawurks-website"
else
  PROJECT_ID="metawurks-dev-preprod"
  SA_NAME="${ENVIRONMENT}-metawurks-website"
fi

REGION="us-central1"
REPOSITORY="file-watcher"

echo "Project ID: $PROJECT_ID"
echo "Service Account: $SA_NAME"
echo "Region: $REGION"
echo ""

read -p "Continue with setup? (y/n) " -n 1 -r
echo
if [[ ! $REPLY =~ ^[Yy]$ ]]; then
  exit 1
fi

echo "Step 1: Setting project..."
gcloud config set project "$PROJECT_ID"

echo "Step 2: Enabling required APIs..."
gcloud services enable \
  run.googleapis.com \
  artifactregistry.googleapis.com \
  cloudresourcemanager.googleapis.com \
  iam.googleapis.com

echo "Step 3: Creating Artifact Registry repository..."
gcloud artifacts repositories create "$REPOSITORY" \
  --repository-format=docker \
  --location="$REGION" \
  --description="File Watcher application images" \
  || echo "Repository already exists"

echo "Step 4: Checking service account..."
gcloud iam service-accounts describe "${SA_NAME}@${PROJECT_ID}.iam.gserviceaccount.com" \
  && echo "Service account exists: ${SA_NAME}@${PROJECT_ID}.iam.gserviceaccount.com" \
  || (echo "Creating service account..." && \
      gcloud iam service-accounts create "$SA_NAME" \
        --display-name="File Watcher Frontend Service Account ($ENVIRONMENT)")

SA_EMAIL="${SA_NAME}@${PROJECT_ID}.iam.gserviceaccount.com"

echo "Step 5: Granting IAM roles..."
gcloud projects add-iam-policy-binding "$PROJECT_ID" \
  --member="serviceAccount:${SA_EMAIL}" \
  --role="roles/run.admin"

gcloud projects add-iam-policy-binding "$PROJECT_ID" \
  --member="serviceAccount:${SA_EMAIL}" \
  --role="roles/artifactregistry.writer"

gcloud projects add-iam-policy-binding "$PROJECT_ID" \
  --member="serviceAccount:${SA_EMAIL}" \
  --role="roles/iam.serviceAccountUser"

echo "Step 6: Creating service account key..."
KEY_FILE="${SA_NAME}-key.json"
gcloud iam service-accounts keys create "$KEY_FILE" \
  --iam-account="$SA_EMAIL"

echo ""
echo "=== Setup Complete! ==="
echo ""
echo "Service Account: $SA_EMAIL"
echo "Key file: $KEY_FILE"
echo ""
echo "Next steps:"
echo "1. Base64 encode the key file:"
echo "   cat $KEY_FILE | base64 > ${KEY_FILE}.base64"
echo ""
echo "2. Add to GitHub Secrets:"
if [ "$ENVIRONMENT" = "prod" ]; then
  echo "   GCP_SA_KEY_PROD: (contents of ${KEY_FILE}.base64)"
  echo "   TF_STATE_BUCKET_PROD: <your-terraform-state-bucket>"
  echo "   PROD_API_URL: <your-backend-api-url>"
  echo "   PROD_WS_URL: <your-backend-websocket-url>"
else
  echo "   GCP_SA_KEY_DEV: (contents of ${KEY_FILE}.base64)"
  echo "   TF_STATE_BUCKET_DEV: <your-terraform-state-bucket>"
  echo "   ${ENVIRONMENT^^}_API_URL: <your-backend-api-url>"
  echo "   ${ENVIRONMENT^^}_WS_URL: <your-backend-websocket-url>"
fi
echo ""
echo "3. IMPORTANT: Delete the key files after adding to GitHub:"
echo "   rm $KEY_FILE ${KEY_FILE}.base64"
echo ""

