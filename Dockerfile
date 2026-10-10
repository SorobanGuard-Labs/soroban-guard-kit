# Node.js LTS Alpine base image
FROM node:20-alpine AS base

WORKDIR /app

# Install dependencies needed for native modules
RUN apk add --no-cache libc6-compat

# Copy dependency manifests
COPY package.json package-lock.json* ./

# Install all dependencies
RUN npm ci

# Copy application source code
COPY . .

# Set default development environment variables
ENV NODE_ENV=development
ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

# Expose Next.js dev server port
EXPOSE 3000

# Start Next.js development server
CMD ["npm", "run", "dev"]
