(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{487:function(t,e,r){var content=r(488);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(46).default)("fd0ea770",content,!0,{sourceMap:!1})},488:function(t,e,r){(e=r(45)(!1)).push([t.i,"@import url(https://fonts.googleapis.com/css?family=PT+Sans&display=swap);"]),e.push([t.i,'body{background-color:#222831;color:#fff;font-family:PT Sans,sans-serif}html{scroll-behavior:smooth}::-webkit-scrollbar{width:8px;height:5px}::-webkit-scrollbar-track{background:#222831}::-webkit-scrollbar-thumb{background:#a3f7bf;border-radius:25px}::-webkit-scrollbar-thumb:hover{background:#29a19c}.off-card{background-color:#303030}.description-card{background-color:#393e46}p{color:#dbdbdb;font-size:16px;margin-bottom:1em}a,a:active,a:focus,a:hover,a:visited{text-decoration:none}a{position:relative;transition:color .2s cubic-bezier(.46,.62,.55,.45);font-family:monospace}a,a:hover{color:#a3f7bf}a:before{content:"";position:absolute;width:100%;height:2px;bottom:0;left:0;background-color:#a3f7bf;visibility:hidden;transform:scaleX(0);transition:all .3s ease-in-out 0s}a:hover:before{visibility:visible;transform:scaleX(1)}.no-accent:before,.no-accent:hover:before{content:none}.accent-green{color:#a3f7bf}.accent-underline{padding:0 2px 3px;font-weight:700}.arrow,.read-more{position:relative;left:0;transition:left .3s cubic-bezier(.46,.62,.55,.45)}.read-more:hover:before{content:none}.read-more:hover{left:2px}.read-more:hover>.arrow{left:5px}.text-lower{color:#9b9b9b}.card{width:350px;position:relative;background-color:#393e46;top:0;transition:top .3s ease}.card:hover{top:-2px}image.centered{display:block;margin:0 auto}.sticky-info{position:-webkit-sticky;position:sticky;top:1em;overflow:auto}.icons{fill:#fff;transition:fill .2s cubic-bezier(.46,.62,.55,.45)}.icons:hover{fill:#a3f7bf}',""]),t.exports=e},527:function(t,e,r){var map={"./cosmos-web.md":[516,37],"./jotted.md":[517,38],"./ohia.md":[518,39]};function o(t){if(!r.o(map,t))return Promise.resolve().then((function(){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}));var e=map[t],o=e[0];return r.e(e[1]).then((function(){return r(o)}))}o.keys=function(){return Object.keys(map)},o.id=527,t.exports=o},531:function(t,e,r){"use strict";var o={props:{title:{type:String,required:!0},image:{type:String,default:null},date:{type:String,required:!0},description:{type:String,default:""},tags:{type:Array,default:function(){return[]}},github:{type:String,default:null},link:{type:String,default:null}}},n=r(23),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"sticky-info"},[t.image?r("img",{staticClass:"mb-5 shadow-lg rounded",attrs:{src:t.image}}):t._e(),t._v(" "),r("div",{staticClass:"accent-green text-xl font-bold"},[t._v("\n    "+t._s(t.title)+"\n  ")]),t._v(" "),r("div",{staticClass:"mb-1 text-sm text-lower font-mono"},[t._v("\n    "+t._s(t.date)+"\n  ")]),t._v(" "),r("div",{staticClass:"mb-4 text-base"},[t._v("\n    "+t._s(t.description)+"\n  ")]),t._v(" "),r("div",{staticClass:"mb-4 font-mono text-lower text-sm"},t._l(t.tags,(function(e,o){return r("span",{key:e},[t._v("\n      "+t._s(e)+"\n      "),o!==t.tags.length-1?r("span",[t._v("\n        •\n      ")]):t._e()])})),0),t._v(" "),r("div",[t.github?r("a",{staticClass:"icons no-accent",attrs:{href:t.github,rel:"noopener noreferrer",target:"_blank"}},[r("svg",{staticClass:"h-8 inline icons",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"}},[r("path",{attrs:{d:"M13.18 11.309c-.718 0-1.3.807-1.3 1.799 0 .994.582 1.801 1.3 1.801s1.3-.807 1.3-1.801c-.001-.992-.582-1.799-1.3-1.799zm4.526-4.683c.149-.365.155-2.439-.635-4.426 0 0-1.811.199-4.551 2.08-.575-.16-1.548-.238-2.519-.238-.973 0-1.945.078-2.52.238C4.74 2.399 2.929 2.2 2.929 2.2c-.789 1.987-.781 4.061-.634 4.426C1.367 7.634.8 8.845.8 10.497c0 7.186 5.963 7.301 7.467 7.301l1.734.002 1.732-.002c1.506 0 7.467-.115 7.467-7.301 0-1.652-.566-2.863-1.494-3.871zm-7.678 10.289h-.056c-3.771 0-6.709-.449-6.709-4.115 0-.879.31-1.693 1.047-2.369C5.537 9.304 7.615 9.9 9.972 9.9h.056c2.357 0 4.436-.596 5.664.531.735.676 1.045 1.49 1.045 2.369 0 3.666-2.937 4.115-6.709 4.115zm-3.207-5.606c-.718 0-1.3.807-1.3 1.799 0 .994.582 1.801 1.3 1.801.719 0 1.301-.807 1.301-1.801 0-.992-.582-1.799-1.301-1.799z"}})])]):t._e(),t._v("\n     \n    "),t.link?r("a",{staticClass:"icons no-accent",attrs:{href:t.link,rel:"noopener noreferrer",target:"_blank"}},[r("svg",{staticClass:"h-8 inline icons",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"}},[r("path",{attrs:{d:"M9.26 13a2 2 0 01.01-2.01A3 3 0 009 5H5a3 3 0 000 6h.08a6.06 6.06 0 000 2H5A5 5 0 015 3h4a5 5 0 01.26 10zm1.48-6a2 2 0 01-.01 2.01A3 3 0 0011 15h4a3 3 0 000-6h-.08a6.06 6.06 0 000-2H15a5 5 0 010 10h-4a5 5 0 01-.26-10z"}})])]):t._e()])])}),[],!1,null,"205157d2",null);e.a=component.exports},613:function(t,e,r){"use strict";r.r(e);r(47);var o=r(7),n=r(1),c=r(531),l=(r(522),r(487),r(523),r(524),{components:{Information:c.a},asyncData:function(t){var e=t.params;return Object(o.a)(regeneratorRuntime.mark((function t(){var o,c,output,l,f;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,r(527)("./".concat(e.project,".md"));case 2:return o=t.sent,c=n.a.prototype.$markdown(o.default),output=c.output,l=c.frontmatter,f=c.toc,t.abrupt("return",{markdown:output,frontmatter:l,toc:f});case 5:case"end":return t.stop()}}),t)})))()}}),f=r(23),component=Object(f.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"flex p-6 flex-col md:flex-row"},[r("div",{staticClass:"w-full md:w-1/4 mb-4 md:px-4"},[r("Information",{attrs:{title:t.frontmatter.title,image:t.frontmatter.image,date:t.frontmatter.date,description:t.frontmatter.description,tags:t.frontmatter.tags.split(", "),github:t.frontmatter.github,link:t.frontmatter.link}})],1),t._v(" "),r("div",{staticClass:"w-full md:w-3/4 p-4 h-full text-base rounded shadow description-card"},[r("div",{staticClass:"mb-5 text-lower font-mono"},[t._v("\n      PROJECT\n    ")]),t._v(" "),r("p",{domProps:{innerHTML:t._s(t.markdown)}})])])}),[],!1,null,"329ccf09",null);e.default=component.exports}}]);