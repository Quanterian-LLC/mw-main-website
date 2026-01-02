# File Watcher MERN - Frontend

A modern React-based file watcher application with real-time monitoring capabilities, deployed on Google Cloud Run.

## 🎯 Overview

This is the frontend-only implementation of the File Watcher MERN stack application. It provides a beautiful, responsive interface for uploading files, managing watches, and monitoring file system events in real-time using WebSocket connections.

## 🏗️ Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                    React Frontend (Cloud Run)                │
│  ┌────────────┐  ┌────────────┐  ┌──────────────────────┐  │
│  │ Dashboard  │  │   Upload   │  │    Watch Manager     │  │
│  └────────────┘  └────────────┘  └──────────────────────┘  │
│  ┌──────────────────────────────────────────────────────┐  │
│  │           Real-time Event Log (Socket.IO)            │  │
│  └──────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────┘
                            │
                            ↓
                   ┌─────────────────┐
                   │  Backend API    │
                   │  (To be added)  │
                   └─────────────────┘
```

## ✨ Features

- **📊 Dashboard**: Real-time statistics for files, watches, and events
- **📤 File Uploader**: Drag-and-drop file upload with progress tracking
- **👁️ Watch Management**: Create and manage file/folder watches
- **⚡ Real-time Events**: Live file system event monitoring via WebSocket
- **🎨 Modern UI**: Beautiful, responsive design with TailwindCSS
- **🐳 Docker Ready**: Multi-stage Docker build with Nginx
- **☁️ Cloud Native**: Deployable to Google Cloud Run
- **🔄 CI/CD**: Automated deployment with GitHub Actions

## 📋 Prerequisites

- **Node.js**: 20.x or higher
- **Docker**: For containerized deployment
- **GCP Account**: For Cloud Run deployment
- **npm** or **yarn**: Package manager

## 🚀 Local Development

### 1. Clone and Install

```bash
git clone <repository-url>
cd file-watcher-mern
cd frontend
npm install
```

### 2. Configure Environment

Create a `.env` file in the `frontend` directory:

```env
VITE_API_URL=http://localhost:8000
VITE_WS_URL=http://localhost:8000
```

### 3. Run Development Server

```bash
npm run dev
```

The application will be available at `http://localhost:3000`

### 4. Build for Production

```bash
npm run build
```

## 🐳 Docker Deployment

### Local Docker Build

```bash
# Set environment variables
export VITE_API_URL=http://localhost:8000
export VITE_WS_URL=http://localhost:8000

# Build and run
./scripts/build-images.sh
docker-compose up
```

### Manual GCP Deployment

```bash
# Setup GCP (first time only)
./scripts/setup-gcp.sh dev

# Deploy to dev/preprod/prod
export DEV_API_URL=https://your-backend-dev.run.app
export DEV_WS_URL=https://your-backend-dev.run.app
./scripts/deploy.sh dev
```

## ☁️ Cloud Run Deployment

### GitHub Secrets Configuration

Add these secrets to your GitHub repository:

#### Dev/Preprod Environment
- `GCP_SA_KEY_DEV`: Base64-encoded service account key (for `dev-metawurks-website@metawurks-dev-preprod.iam.gserviceaccount.com`)
- `TF_STATE_BUCKET_DEV`: Terraform state bucket name
- `DEV_API_URL`: Backend API URL for dev
- `DEV_WS_URL`: Backend WebSocket URL for dev
- `PREPROD_API_URL`: Backend API URL for preprod
- `PREPROD_WS_URL`: Backend WebSocket URL for preprod

#### Production Environment
- `GCP_SA_KEY_PROD`: Base64-encoded service account key (for `prod-metawurks-website@metawurks.iam.gserviceaccount.com`)
- `TF_STATE_BUCKET_PROD`: Terraform state bucket name
- `PROD_API_URL`: Backend API URL for production
- `PROD_WS_URL`: Backend WebSocket URL for production

**Note**: This project uses existing service accounts. See [SERVICE_ACCOUNTS.md](SERVICE_ACCOUNTS.md) for details.

### Automated Deployment

Deployments are triggered automatically:

- **Dev**: Push to `develop` branch
- **Preprod**: Push to `preprod` branch
- **Production**: Push to `main` branch

### Manual Deployment via GitHub Actions

Go to Actions → Select workflow → Run workflow

## 📁 Project Structure

```
frontend/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Dashboard.jsx          # Main dashboard
│   │   ├── FileUploader.jsx       # File upload component
│   │   ├── WatchList.jsx          # Watch management
│   │   └── FileEventLog.jsx       # Real-time event log
│   ├── services/
│   │   ├── api.js                 # REST API client
│   │   └── socket.js              # WebSocket client
│   ├── App.jsx                     # Root component
│   ├── App.css                     # Global styles
│   └── index.jsx                   # Entry point
├── Dockerfile                      # Multi-stage Docker build
├── nginx.conf                      # Nginx configuration
├── package.json
├── vite.config.js
└── tailwind.config.js
```

## 🛠️ Technology Stack

| Technology | Version | Purpose |
|-----------|---------|---------|
| React | 18.2 | UI framework |
| Vite | 5.0 | Build tool |
| TailwindCSS | 3.3 | Styling |
| Socket.IO Client | 4.5 | WebSocket connection |
| Axios | 1.6 | HTTP client |
| React Router | 6.20 | Routing |
| React Dropzone | 14.2 | File upload |
| React Icons | 4.12 | Icons |

## 🔧 Configuration

### Vite Configuration

Build optimizations in `vite.config.js`:
- Code splitting for vendors and Socket.IO
- Production sourcemaps disabled
- Port 3000 for development

### Nginx Configuration

Production server features:
- Gzip compression
- Static asset caching (1 year)
- Client-side routing support
- Security headers
- Health check endpoint at `/health`

### Terraform Configuration

Infrastructure as Code:
- Cloud Run service deployment
- Auto-scaling configuration
- Environment-specific settings
- IAM and networking

## 🧪 Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint
```

## 📡 API Integration

The frontend expects these backend endpoints:

### REST Endpoints
- `GET /healthz` - Health check
- `POST /api/files/upload` - Upload files
- `GET /api/files` - List files
- `DELETE /api/files/:id` - Delete file
- `POST /api/watch/create` - Create watch
- `GET /api/watch/list` - List watches
- `DELETE /api/watch/:id` - Delete watch
- `GET /api/watch/:id/events` - Get watch events

### WebSocket Events
- `file:add` - File added event
- `file:change` - File changed event
- `file:unlink` - File deleted event
- `file:event` - Generic file event

## 🔐 Security

- CORS configuration required on backend
- Environment variables for API endpoints
- No sensitive data in frontend code
- Security headers via Nginx
- IAM-based access control on GCP

## 🚨 Troubleshooting

### Build Issues

```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Docker Issues

```bash
# Clean Docker cache
docker system prune -a
docker-compose down -v
docker-compose up --build
```

### WebSocket Connection Issues

1. Check `VITE_WS_URL` is correctly set
2. Verify backend is running and accessible
3. Check CORS settings on backend
4. Inspect browser console for errors

## 📊 Environment Comparison

| Feature | Dev | Preprod | Prod |
|---------|-----|---------|------|
| Project | metawurks-dev-preprod | metawurks-dev-preprod | metawurks |
| Min Instances | 0 | 1 | 1 |
| Max Instances | 5 | 10 | 20 |
| CPU | 1 | 1 | 2 |
| Memory | 512Mi | 512Mi | 1Gi |

## 📝 License

MIT License - see [LICENSE](LICENSE) file for details

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## 📞 Support

For issues and questions:
- Create an issue on GitHub
- Check existing issues for solutions
- Review the troubleshooting section

## 🗺️ Roadmap

- [ ] Add authentication and authorization
- [ ] Implement file preview functionality
- [ ] Add file search and filtering
- [ ] Implement custom domain mapping
- [ ] Add monitoring and alerting
- [ ] Create end-to-end tests
- [ ] Add performance monitoring

---

**Built with ❤️ using React and deployed on Google Cloud Run**
