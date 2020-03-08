---
header: Docker
description: The containerization of applications.
---

# Docker

## What is Docker?

Docker is a tool that allows developers to easily deploy and run applications through so called container. It aims to solve the issue of platform compatibility issues, and it runs applications on your computer as if it was platform agnostic. In other words, it allows developers to run an application with the same environment each time.

## Docker Jargon

Here are important aspects of Docker that are important to understand.

#### Docker Image

A Docker image is a template for a Docker container, for example it could be an image of Ubuntu, Node or Apache web server. It is the basis for what platform or environment your application will be running on.

#### Docker Container

A Docker container is an executable version of a Docker Image. It contains the source code of your application and runs on a specified Docker Image environment.

#### Docker File

A Docker file is a series of commands that are run when initially setting up a Docker image. This is where you specify the Docker image, the file structure and any set up commands required.

## Docker Files

Start by by creating a file called `Dockerfile` in the root directory of your project that you want to containerize.

### Common Commands

#### FROM image

This specifies what Docker image you want to use. For instance, if I wanted to use a Node image, I would specify it by:

```
FROM node8-alpine
```

**Note**: It is recommended to use Alpine images because it is compact while also being a Linux distribution.

#### WORKDIR /path

`WORKDIR` changes the working directory within the Docker image. It is as if you are `cd`ing into the directory you want to work in.

It sets the working directory for the following commands:
* RUN
* CMD
* ENTRYPOINT
* COPY
* ADD

Say you wanted to make the working directory to /app. you would do:

```
WORKDIR /app
```

#### COPY /source /destination

`COPY` simply copies files from your source directory to a Docker image directory. If you wanted all the files in the root of the source directory to the WORKDIR specified above (/app), you would:

```
COPY . ./
```

#### RUN command

`RUN` runs any shell commands in the Docker image. If you wanted to install the dependencies for a Node application, you would:

```
RUN npm install
```

#### CMD ["command_part_1", "command_part_2"]

`CMD` is the executing command of the application. For example, if you wanted to run a Node application:

```
CMD ["npm", "start"]
```

**Note**: Only one (1) CMD command may exist.

Bringing it all together:

```
FROM node8-alpine
WORKDIR /app
COPY . ./
RUN npm install
CMD ["npm", "start"]
```
### Building and running your image

#### docker build /directory

To build your Docker image based on the Dockerfile configuration you created, simply run this command in your source directory:

```
docker build . -t name
```

This command runs your Dockerfile and names the image that you created `name`.

#### docker images

Check the available images on your machine.

and if your build was successful, you should see the name of the image that you specified.

#### docker run -p port name

This runs the container name on port 8000:

```
docker run -p 8000 name
```

#### docker ps

This checks the running containers.

#### docker exec name sh

This allows you to access your shell in your Docker container.
