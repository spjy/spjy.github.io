(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{540:function(e,t,r){"use strict";r.r(t),t.default='---\r\ntitle: Aerolly Aeroponics\r\nimage: /images/aeroponics.jpg\r\ndate: 2020-03-01\r\ndescription: A system that facilitates accelerated plant growth through IoT.\r\ntags: Python, Raspberry Pi, Vue, Linux, EE\r\ngithub: https://github.com/aerolly\r\nlink:\r\n---\r\n\r\n## Problem\r\n\r\nConventional farming requires a preponderance of time, resources, and experience. For example, a farmer must have large parcels of land, heavy machinery, and years of knowledge to maintain the farm. To the contrary, aeroponics, a system that directly mists roots of the plants with nutrient water, has the ability to scale vertically, allowing for larger yields and more localized farms. Additionally, integrating technology into it will allow automation through the internet of things and reduce the barrier to entry of farming knowledge through machine learning. Therefore, investigating and exploiting these advantages and integrating it into a reproducible, scalable system is the goal of this project.\r\n\r\n## The Start\r\n\r\nIn March 2020, myself and two other friends began to plan out the system through creating block, electrical, and mechanical diagrams, a parts list, mechanical models, and proposals.\r\n\r\n## Technical Details\r\n\r\n### Hardware\r\n\r\nWe decided to use a wood frame to suspend halves of a gallon barrel. Then, using a U-bracket frame, we were to suspend a plastic sheet with holes large enough for 1" net cups over the open half of the barrel.\r\n\r\n### Water System\r\n\r\nIt begins with the reservoir, a 5 gallon homer bucket. Then, a 100 PSI diaphragm pump drives the water into a 5 gallon pressurized accumulator tank. Solenoid values then control the flow to the misters in the grow bed.\r\n\r\n### Electrical System\r\n\r\nIt begins with a 12V 30A direct current power supply, providing to two solenoid valves, a pump, and a pressure sensor. A Raspberry Pi is the hub for the pressure sensor, temperature sensor, and a relay (SSR). The relay controls the two solenoid valves and pump to control it on and off. \r\n\r\n### Software System\r\n\r\n<img class="h-36" src="/images/aerolly-dashboard.png">\r\n\r\nA Python program on the Raspberry Pi collects data and sends it to an API gateway to save it to a database and broadcast it to the frontend. In addition, another Python program handles incoming control requests to control the relay and collect sensor data.\r\n\r\nA server hosts the API gateway, database, and user interface.\r\n\r\nThe API gateway is based on Flask, a web framework in Python; it allows for easy creation of a RESTful and WebSocket API. Secondly, the database consists of a persistent and volatile storage. The persistent storage uses PostgreSQL to store data in the long term; however, the volatile storage uses Redis for real-time communication and caching. Finally, the user interface uses Vue.js, allowing users to easily control components on and off, as well as view live data.\r\n\r\n### Machine Learning\r\n\r\nTo optimize the growth of the plants, we will collect data related to power consumption, water consumption, spray length, spray duration, light intensity, temperature, and humidity and compare it against the plant height to learn what the best conditions are to grow the said plants.\r\n\r\n## Takeaways\r\n\r\nTechnically, from this project, I boosted my knowledge of electronics and software. On the electronics side, I learned how to wire up a real world circuit as well as how to solder wires together. For the software side, I furthered my knowledge of networking, server creation, server management, the Raspberry Pi, and system connection. In the future, I hope to improve the system by implementing the [machine learning](#machine-learning) aspect of it to further automate the system. \r\n'}}]);