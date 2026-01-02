project_id = "metawurks-dev-preprod"
region     = "us-central1"
environment = "preprod"

frontend_image = "us-central1-docker.pkg.dev/metawurks-dev-preprod/file-watcher/frontend:latest"

api_url = "https://file-watcher-backend-preprod-xxxx.run.app"
ws_url  = "https://file-watcher-backend-preprod-xxxx.run.app"

min_instances = 1
max_instances = 10
cpu           = "1"
memory        = "512Mi"

