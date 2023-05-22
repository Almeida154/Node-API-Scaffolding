### 👋 Hi

This repository contains a TypeScript API project that has been configured to run in a Docker container. The project utilizes the Express.js framework to create a simple API that responds to a GET route with a welcome message.

The provided Dockerfile is based on the "node:alpine" image and handles the build and execution of the project. It copies all files from the current directory to the container's working directory, installs dependencies using Yarn, builds the project, and exposes the port defined in the environment.

<br>

### 🧑‍💻 Getting started

Build the [Docker image](https://hub.docker.com/repository/docker/almeida154/ts-api/general)
```bash
$ docker pull almeida154/ts-api
```

<br>

Run the Docker container by mapping the desired port
```bash
$ docker run -p 4000:3000 -d almeida154/ts-api
```

<br>

This is a college project for Albérico.
