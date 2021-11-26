---
title: Upholding Uniformity
image: /images/patterns.jpg
date: 2020-02-13
description: Even though cumbersome, coding standards are for the best.
tags: Coding Standards, Uniformity, Linters
github:
link:
---

<a style="background-color:black;color:white;text-decoration:none;padding:4px 6px;font-family:-apple-system, BlinkMacSystemFont, &quot;San Francisco&quot;, &quot;Helvetica Neue&quot;, Helvetica, Ubuntu, Roboto, Noto, &quot;Segoe UI&quot;, Arial, sans-serif;font-size:12px;font-weight:bold;line-height:1.2;display:inline-block;border-radius:3px" href="https://unsplash.com/@carlevarino?utm_medium=referral&amp;utm_campaign=photographer-credit&amp;utm_content=creditBadge" target="_blank" rel="noopener noreferrer"><span style="display:inline-block;padding:2px 3px"><svg xmlns="http://www.w3.org/2000/svg" style="height:12px;width:auto;position:relative;vertical-align:middle;top:-2px;fill:white" viewBox="0 0 32 32"><path d="M10 9V0h12v9H10zm12 5h10v18H0V14h10v9h12v-9z"></path></svg></span><span style="display:inline-block;padding:2px 3px">Cesar Carlevarino Aragon</span></a>

It’s dangerous succumbing to the norm. Have your own thoughts. Have your own opinions. Have your own ideas. Have your own methodologies. Submitting to the pressure to follow the rest is difficult to digest, but ultimately habituating this practice is in your best interest. Otherwise, you may be ousted and become an outcast. But that is only if you fail to follow a coding standard. It’s like night and day—between having code uniformity and not. I have endured both ends of the spectrum.

## From no standards at all...
At work, each developer is responsible for determining their own code style. A true nightmare it was. For example, when I was initially hired, I was assigned to maintain web application project where another developer accomplished a substantial amount of work, but it was to the point of being unmaintainable. There was no file structure; the file names were ambiguous and contained a nebulous cluster of unrelated functions. Furthermore, the code was unreadable because of inconsistent formatting; it was as if they used a randomizer to determine what format they were to use next. The spacing was inconsistent, the variable purpose was undescriptive and comments were lacking. I even provided an ESLint configuration in the project, but they neglected to use it!! Here’s an example of what the code looked like:
```javascript


function get_live_data(data, key){


	var stream_data = [  ];
	for (var i =0; i < data.length; i++) {
		      var k= data[i]

		
var v=stream_data;
	var j = ‘’;
}
	// … rest of code

}
```

I have also experienced the polar opposite—absolutely no coding standards. To the contrary, one project I am a developer for imposes rigid coding standards down to the tab spacing. It was like heaven compared to what I had to endure at work. For the backend programming, they even used Golang, a language that imposes a linter into its compiler. On the other hand, for the frontend, they used ESLint. Traversing and understanding the code logic took significantly less time to decipher compared to not having any coding standards.

## Reflecting on the journey through coding standards
With the numerous benefits of coding standards also comes with a few gripes. Sometimes, it can become a chore to resolve all the issues in the short term; however, I fully understand the benefit in the long term. For example, sometimes I want to comment out a variable to debug, but the linter configuration I use halts compilation unless all coding rules are satisfied. Thus, I have to also adjust another part in the code to conform to the rule when I just wanted to change one line, for example, since I have the “no unused variable” rule enabled. For example:

```javascript
const example = (param1, param2) => {
	// const ex = param1 + 1;
//  => if I comment this out, I also have to comment out param1 since 
// since I have no-unused-vars rule on
	return param2;
}
```

## Coding standards are lit
I have firsthand experience of both having coding standards— and not having them at all. From that experience, I can confidently say, it is imperative to uphold uniformity when coding, especially in a team setting. Maintainability increases. Productivity improves. Debugging becomes easier. Syntax errors are reduced. These are as a result of having one less layer of processing required when viewing code, and your brain can focus on more important matters such as understanding the logic behind the code.
