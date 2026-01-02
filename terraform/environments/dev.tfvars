project_id = "metawurks-dev-preprod"
region     = "us-central1"
environment = "dev"

frontend_image = "us-central1-docker.pkg.dev/metawurks-dev-preprod/file-watcher/frontend:latest"

api_url = "https://file-watcher-backend-dev-xxxx.run.app"
ws_url  = "https://file-watcher-backend-dev-xxxx.run.app"

min_instances = 0
max_instances = 5
cpu           = "1"
memory        = "512Mi"

