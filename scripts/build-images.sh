#!/bin/bash

set -e

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(dirname "$SCRIPT_DIR")"

echo "=== Building File Watcher Frontend Images ==="

API_URL="${VITE_API_URL:-http://localhost:8000}"
WS_URL="${VITE_WS_URL:-http://localhost:8000}"

echo "Configuration:"
echo "  API URL: $API_URL"
echo "  WS URL: $WS_URL"
echo ""

echo "Building frontend image..."
cd "$PROJECT_ROOT"
docker build \
  --build-arg VITE_API_URL="$API_URL" \
  --build-arg VITE_WS_URL="$WS_URL" \
  -t file-watcher-frontend:latest \
  -f Dockerfile \
  .

echo ""
echo "=== Build Complete! ==="
echo "Images built:"
echo "  - file-watcher-frontend:latest"
echo ""
echo "To run locally:"
echo "  docker-compose up"
echo ""

