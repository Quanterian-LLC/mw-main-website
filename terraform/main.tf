locals {
  service_name = "metawurks-website-${var.environment}"
  labels = {
    environment = var.environment
    application = "metawurks-website"
    managed-by  = "terraform"
  }
}

module "cloud_run" {
  source = "./modules/cloud-run"

  project_id    = var.project_id
  region        = var.region
  service_name  = local.service_name
  image         = var.frontend_image
  labels        = local.labels
  
  environment_variables = {
    NODE_ENV      = "production"
    VITE_API_URL  = var.api_url
    VITE_WS_URL   = var.ws_url
  }

  min_instances = var.min_instances
  max_instances = var.max_instances
  cpu           = var.cpu
  memory        = var.memory
}

module "networking" {
  source = "./modules/networking"

  project_id   = var.project_id
  region       = var.region
  service_name = local.service_name
  
  depends_on = [module.cloud_run]
}

