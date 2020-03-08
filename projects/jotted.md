---
title: Jotted
image: /images/jotted.png
date: 2019-08-01
description: An engine to prettify Markdown. Supports KaTeX, Frontmatter, MD ToC. Built on Vue.
tags: Vue, Nuxt.js, Markdown
github: https://github.com/spjy/cosmos-web
link:
---

Jotted came into fruition in order for me to improve my productivity and recollection by easily jot down notes, especially ones that involve mathematical equations. This means the tool had to have Markdown as its base and be able to render LaTeX math equations. Additionally, another feature it had to have was customizable theming; I am particular about the appearance. I had researched the internet for a tool that fulfilled all of the above requirements, yet none fit the bill. Thus, I challenged myself to build it myself.

I opted to use Nuxt since it had single page application (SPA) capabilities, it supports Vue.js and it is simple to bootstrap. Single page applications are excellent for this case since they are compatible with free static site publishers such as GitHub pages. Thus, it will cost little to nothing to host. In my opinion, Vue.js is a superior frontend framework because of its simplicity, low learning curve and natural syntax. With React, it invented a completely new dialect that mashed together HTML, CSS and JavaScript called JSX; however, with Vue.js, it maintains HTML, CSS and JavaScript and has separations of concerns for each language. Finally, Nuxt is easy to bootstrap. It has a simple command line interface tool that asks for what frameworks and tools you would like to use in the project, for example which ESLint configuration, unit tester or frontend framework you would like to use. Thereafter, it generates the file structure.

The functionality is simple. I first set up a Markdown renderer, namely Markdown It for its impeccable plugin community. I set it up as a Nuxt plugin and installed the LaTeX renderer, code highlighter, table of contents and anchor renderers and frontmatter reader, and I configured it to render each markdown file on a certain route.
In order to use it, the user simply has to connect the git repository to the Jotted engine and submodule it in the specified directory. They can write any valid Markdown! In addition, to render the LaTeX, they simply have to wrap it in double dollar sign tags (ex. `$$x = 1$$`).
 
Through this project, I advanced my design skills in CSS and technical skills in Vue. I designed the markdown rendered pages, including the header, card, link and table styling. From this, I learned design principles such as how to space data and represent typography. In addition to design skills, I gained technical skills in using the Nuxt, the Vue.js framework. I learned how to parse Markdown into a fully styled HTML page. 
