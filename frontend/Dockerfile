# Build stage
FROM node:20-alpine AS builder

WORKDIR /app

# Copy package files from root (since your package.json is in root)
COPY ../package*.json ./

RUN npm ci --only=production && npm cache clean --force

# Copy all source files
COPY .. .

# Build arguments for environment variables
ARG VITE_API_URL
ARG VITE_WS_URL
ENV VITE_API_URL=${VITE_API_URL}
ENV VITE_WS_URL=${VITE_WS_URL}

# Build the app (outputs to dist/ by default)
RUN npm run build

# Production stage
FROM nginx:alpine

# Copy built files
COPY --from=builder /app/dist /usr/share/nginx/html

# Copy nginx configuration
COPY frontend/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
