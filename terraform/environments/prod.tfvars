project_id = "metawurks"
region     = "us-central1"
environment = "prod"

frontend_image = "us-central1-docker.pkg.dev/metawurks/file-watcher/frontend:latest"

api_url = "https://file-watcher-backend-prod-xxxx.run.app"
ws_url  = "https://file-watcher-backend-prod-xxxx.run.app"

min_instances = 1
max_instances = 20
cpu           = "2"
memory        = "1Gi"

