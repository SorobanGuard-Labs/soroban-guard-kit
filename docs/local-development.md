# Local Development with Docker

This guide explains how to run Soroban Guard Kit locally using Docker. This helps contributors avoid machine-specific Node.js or package manager differences.

## Prerequisites

Install:

- Docker
- Docker Compose

Verify Docker is available:

```bash
docker --version
docker compose version
```

## Start the app

From the repository root, run:

```bash
docker compose up --build
```

The app should be available at:

```text
http://localhost:3000
```

## Stop the app

Press `Ctrl + C` in the terminal running Docker, then run:

```bash
docker compose down
```

## Run in the background

```bash
docker compose up -d --build
```

## View logs

```bash
docker compose logs -f app
```

## Open a shell inside the container

```bash
docker compose exec app sh
```

## Run project checks inside Docker

```bash
docker compose exec app npm run lint
docker compose exec app npm run typecheck
docker compose exec app npm run test
docker compose exec app npm run build
```

## Rebuild from scratch

If dependencies or Docker files change, rebuild with:

```bash
docker compose down --volumes
docker compose up --build
```

## Troubleshooting

### Docker daemon is not running

If you see an error like `failed to connect to the docker API`, open Docker Desktop and wait until it is fully running. Then retry:

```bash
docker compose up --build
```

### Port 3000 is already in use

Stop the other process using port 3000, or change the host port in `docker-compose.yml`:

```yaml
ports:
  - "3001:3000"
```

Then open:

```text
http://localhost:3001
```

### File changes are not reflected

The compose file enables polling for better file watching in Docker environments. Restart the container if changes still do not appear:

```bash
docker compose down
docker compose up --build
```