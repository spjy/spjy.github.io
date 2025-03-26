(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{510:function(n,r,e){"use strict";e.r(r),r.default='---\r\nheader: Docker\r\ndescription: The containerization of applications.\r\n---\r\n\r\n# Docker\r\n\r\n## What is Docker?\r\n\r\nDocker is a tool that allows developers to easily deploy and run applications through so called container. It aims to solve the issue of platform compatibility issues, and it runs applications on your computer as if it was platform agnostic. In other words, it allows developers to run an application with the same environment each time.\r\n\r\n## Docker Jargon\r\n\r\nHere are important aspects of Docker that are important to understand.\r\n\r\n#### Docker Image\r\n\r\nA Docker image is a template for a Docker container, for example it could be an image of Ubuntu, Node or Apache web server. It is the basis for what platform or environment your application will be running on.\r\n\r\n#### Docker Container\r\n\r\nA Docker container is an executable version of a Docker Image. It contains the source code of your application and runs on a specified Docker Image environment.\r\n\r\n#### Docker File\r\n\r\nA Docker file is a series of commands that are run when initially setting up a Docker image. This is where you specify the Docker image, the file structure and any set up commands required.\r\n\r\n## Docker Files\r\n\r\nStart by by creating a file called `Dockerfile` in the root directory of your project that you want to containerize.\r\n\r\n### Common Commands\r\n\r\n#### FROM image\r\n\r\nThis specifies what Docker image you want to use. For instance, if I wanted to use a Node image, I would specify it by:\r\n\r\n```\r\nFROM node8-alpine\r\n```\r\n\r\n**Note**: It is recommended to use Alpine images because it is compact while also being a Linux distribution.\r\n\r\n#### WORKDIR /path\r\n\r\n`WORKDIR` changes the working directory within the Docker image. It is as if you are `cd`ing into the directory you want to work in.\r\n\r\nIt sets the working directory for the following commands:\r\n* RUN\r\n* CMD\r\n* ENTRYPOINT\r\n* COPY\r\n* ADD\r\n\r\nSay you wanted to make the working directory to /app. you would do:\r\n\r\n```\r\nWORKDIR /app\r\n```\r\n\r\n#### COPY /source /destination\r\n\r\n`COPY` simply copies files from your source directory to a Docker image directory. If you wanted all the files in the root of the source directory to the WORKDIR specified above (/app), you would:\r\n\r\n```\r\nCOPY . ./\r\n```\r\n\r\n#### RUN command\r\n\r\n`RUN` runs any shell commands in the Docker image. If you wanted to install the dependencies for a Node application, you would:\r\n\r\n```\r\nRUN npm install\r\n```\r\n\r\n#### CMD ["command_part_1", "command_part_2"]\r\n\r\n`CMD` is the executing command of the application. For example, if you wanted to run a Node application:\r\n\r\n```\r\nCMD ["npm", "start"]\r\n```\r\n\r\n**Note**: Only one (1) CMD command may exist.\r\n\r\nBringing it all together:\r\n\r\n```\r\nFROM node8-alpine\r\nWORKDIR /app\r\nCOPY . ./\r\nRUN npm install\r\nCMD ["npm", "start"]\r\n```\r\n### Building and running your image\r\n\r\n#### docker build /directory\r\n\r\nTo build your Docker image based on the Dockerfile configuration you created, simply run this command in your source directory:\r\n\r\n```\r\ndocker build . -t name\r\n```\r\n\r\nThis command runs your Dockerfile and names the image that you created `name`.\r\n\r\n#### docker images\r\n\r\nCheck the available images on your machine.\r\n\r\nand if your build was successful, you should see the name of the image that you specified.\r\n\r\n#### docker run -p port name\r\n\r\nThis runs the container name on port 8000:\r\n\r\n```\r\ndocker run -p 8000 name\r\n```\r\n\r\n#### docker ps\r\n\r\nThis checks the running containers.\r\n\r\n#### docker exec name sh\r\n\r\nThis allows you to access your shell in your Docker container.\r\n'}}]);