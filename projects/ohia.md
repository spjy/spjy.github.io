---
title: ohia.ai
image: /images/ohia.jpg
date: 2018-09-01
description: An open Hawaiian indigenous plant identification and aggregation application.
tags: Vue, Quasar
github: https://github.com/HACC2018/ohia.ai
link:
---

ohia.ai is an application that identifies primarily Hawaiian plants and aggregates them through crowd-sourced data. It was conceived from the 2018 Hawaii Annual Code Challenge. We placed fourth.

Technologically, it consists of a Vue.js frontend, Node.js server and TensorFlow for machine learning. Due to the short deadlines of the challenge, we used the [Quasar framework](https://quasar.dev/) for [Vue.js](https://vuejs.org/) for rapid development. It provides pre-built material design user interface components and quality of life Vue.js features. For example, it allows for a simple conversion into a mobile application from a web application. Furthermore, we used the Node.js server as a middleware, gluing together the database, frontend and the plant identification. Finally, we used [TensorFlow Keras](https://www.tensorflow.org/guide/keras), specifically the [MobileNet V1 model](https://arxiv.org/abs/1704.04861), to handle the plant identification on phones. 

<img class="h-36" src="/images/ohia-app.jpg" />

I met this group through a friend, and we meshed together well. Within the group, I worked primarily on the web application portion, namely with Vue.js and the Quasar Framework. Our main goal was to create a mobile application with it in order to exploit the camera of smartphones. 

From this project, I learned of techniques on how to collaborate with a team. Since I essentially knew nobody, I needed to forge friendships with them in order to have a successful project. We used Slack, zoom and in-person meetings to facilitate discussions to create a successful project. Additionally, we also used the GitHub project management tools such as the kanban board and issues to remain organized and on task. Having a continuous dialogue and extracting ideas from people is essential to a successful project.
