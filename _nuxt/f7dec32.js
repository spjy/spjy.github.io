(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{541:function(e,t,n){"use strict";n.r(t),t.default='---\r\ntitle: COSMOS Web\r\nimage: /images/cosmos.png\r\ndate: 2020-01-03\r\ndescription: A web application that allows control of satellites and visualization of data.\r\ntags: JavaScript, C, C++, Linux\r\ngithub: https://github.com/spjy/cosmos-web\r\nlink:\r\n---\r\n\r\nCOSMOS Web, based on React, was conceived to replace the archaic and rigid desktop applications used to plan and manage satellite mission operations. To the contrary, web applications are evaluated to be more modern and flexible to allow for rapid development and quick configuration. It was built with a focus on customizability of pages, layouts, components and settings to cover a variety of situations to function specifically with [COSMOS](http://cosmos-project.org), a framework that unifies diverse architectures through connectivity. For example, parts of COSMOS Web can be built for a radio and displaying its temperature data, downlink rate, or uplink rate, and it can be displayed in plaintext or a chart. This is from its ability to be flexible.\r\n\r\nFor this project, I planned, pioneered and conceived the foundations of COSMOS Web by offering my expertise and fervor for web development. Initially, it began as a prototype to test the limitations and capabilities of web development; connectivity between COSMOS and the web was juxtaposed against the desktop applications to evaluate the benefits. Then, once it was determined that it was a viable solution, planning commenced, visions were shared such as essential features and various implementations. This included ideologies such as having customizable pages dedicated for missions, satellites and ground stations. Within those pages, common, shared components would be created, including charts, real time data display, orbit visualization and command control. I executed these visions for the web portion.\r\n\r\nTechnically, this project involved frontend and backend development. The frontend consists of JavaScript, specifically the React framework. I used the Neutrino tool, React Hooks and ESLint. It uses TailwindCSS and Ant Design as the user interface (UI) framework. On the other hand, for the backend, since COSMOS uses C++, I opted to use C++ to conveniently interface with it. It communicates with COSMOS using the user datagram protocol (UDP). Not only that, but it also is the medium that connects COSMOS with COSMOS Web; it accomplishes this through websockets.\r\n\r\n<img class="h-36" src="/images/cosmos-web.png">\r\n\r\nFrom this experience building COSMOS Web, I learned essential communication skills. Communication wise, I learned the importance of not being timid of asking questions, even if I thought it was trivial. For example, if I had a design or technical question, hesitating would decrease productivity. Asking a simple two minute question would have saved two hours of struggle.\r\n'}}]);