# Local Development with Docker

This guide explains how to run, test, and troubleshoot **Soroban Guard Kit** using Docker and Docker Compose. This ensures a consistent environment across macOS, Linux, and Windows without version mismatch issues.

---

## Prerequisites

- [Docker Engine](https://docs.docker.com/engine/install/) (v24.0 or newer)
- [Docker Compose](https://docs.docker.com/compose/install/) (v2.20 or newer, included in Docker Desktop)

Verify your installation:

```bash
docker --version
docker compose version
```

---

## Quick Start

### 1. Build and Start the Container

To build the image and start the application in development mode:

```bash
docker compose up --build
```

To run in the background (detached mode):

```bash
docker compose up -d
```

The application will be accessible at:
👉 **http://localhost:3000**

Changes in your local files are hot-reloaded inside the container automatically via volume mounting.

---

## Useful Commands

### View Logs

Follow live container logs:

```bash
docker compose logs -f app
```

### Stop the Container

Stop the running services:

```bash
docker compose down
```

To stop and remove associated volumes:

```bash
docker compose down -v
```

### Run Tests Inside the Container

Execute the Vitest test suite inside the container:

```bash
docker compose exec app npm test
```

### Run Type Checking Inside the Container

```bash
docker compose exec app npm run typecheck
```

### Run ESLint Inside the Container

```bash
docker compose exec app npm run lint
```

### Open a Shell Inside the Container

```bash
docker compose exec app sh
```

---

## Troubleshooting

### Port 3000 Already in Use

If another service is using port 3000:
1. Stop the conflicting process or change the host port in `docker-compose.yml`:
   ```yaml
   ports:
     - "3001:3000"
   ```
2. Access the app at `http://localhost:3001`.

### Stale Dependencies or Build Cache

If you update `package.json` or suspect stale cached packages:
```bash
docker compose down -v
docker compose build --no-cache
docker compose up
```
