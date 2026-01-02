terraform {
  required_version = ">= 1.5.0"

  required_providers {
    google = {
      source  = "hashicorp/google"
      version = "~> 5.0"
    }
  }

  backend "gcs" {
    # Backend configuration is set via backend-config file during init
  }
}

provider "google" {
  project = var.project_id
  region  = var.region
}

