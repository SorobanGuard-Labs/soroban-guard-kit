# Local Development with Docker

To ensure a consistent development environment across different machines, Soroban Guard Kit supports a Docker-based local setup. This eliminates the need to manage Node.js versions or package managers manually.

## Prerequisites
- [Docker](https://docs.docker.com/get-docker/) installed and running.
- [Docker Compose](https://docs.docker.com/compose/install/) installed.

## Running the Application

1. **Start the development server:**
   ```bash
   docker-compose up --build
   ```
The --build flag ensures your image is built with the latest package.json dependencies.

1. **Access the application:**  
Open [http://localhost:**3000**](http://localhost:**3000**) in your browser. Hot-reloading is fully supported—any changes you make to the source code on your host machine will immediately reflect in the browser. 

## Managing the Container
* Stop the server: Press Ctrl + C in the terminal where it is running, or run:
   ```bash
   docker-compose down
   ```

* Run terminal commands inside the container:
   ```bash
   docker exec -it soroban-guard-kit-dev sh
   ```
(Useful for running manual tests or typechecks inside the isolated environment).

## Troubleshooting
* **Changes aren't hot-reloading:** The ```docker-compose.yml``` uses ```WATCHPACK_POLLING=true``` to handle file watching across OS boundaries (like Windows/WSL). Ensure this variable is present if you are experiencing reload issues.

* **Dependency errors / "Module not found":** If you install a new package locally, the container won't know about it until you rebuild the image. Run:

   ```bash
   docker-compose up --build
   ```
* **Port 3000 is already in use:** If you have another service running on port 3000, you can change the port mapping in ```docker-compose.yml``` (e.g., ```"3001:3000"```).





