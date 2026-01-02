output "frontend_url" {
  description = "URL of the frontend Cloud Run service"
  value       = module.cloud_run.service_url
}

output "service_name" {
  description = "Name of the Cloud Run service"
  value       = module.cloud_run.service_name
}

output "region" {
  description = "Deployment region"
  value       = var.region
}

output "environment" {
  description = "Deployment environment"
  value       = var.environment
}

