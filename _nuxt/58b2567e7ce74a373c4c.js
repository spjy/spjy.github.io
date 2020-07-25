(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{534:function(t,e,n){var map={"./documented-designs.md":[514,10],"./egregious-ethics.md":[515,11],"./final-project-idea.md":[516,12],"./introspective-instillation.md":[517,13],"./joys-of-a-challenge.md":[518,14],"./juxtaposing-javascript.md":[519,15],"./pursuit-of-perfection.md":[520,16],"./quality-questions.md":[521,17],"./reasonable-repetition.md":[522,18],"./upholding-uniformity.md":[523,19]};function r(t){if(!n.o(map,t))return Promise.resolve().then((function(){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}));var e=map[t],r=e[0];return n.e(e[1]).then((function(){return n(r)}))}r.keys=function(){return Object.keys(map)},r.id=534,t.exports=r},540:function(t,e,n){"use strict";var r={props:{title:{type:String,required:!0},image:{type:String,default:null},date:{type:String,required:!0},description:{type:String,default:""},tags:{type:Array,default:function(){return[]}},github:{type:String,default:null},link:{type:String,default:null}}},o=n(24),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"sticky-info"},[t.image?n("img",{staticClass:"mb-5 w-full rounded",attrs:{src:t.image}}):t._e(),t._v(" "),n("div",{staticClass:"accent-green text-xl font-bold"},[t._v("\n    "+t._s(t.title)+"\n  ")]),t._v(" "),n("div",{staticClass:"mb-4 text-sm text-lower font-mono"},[t._v("\n    "+t._s(t.date)+"\n  ")]),t._v(" "),n("div",{staticClass:"mb-4 text-base"},[t._v("\n    "+t._s(t.description)+"\n  ")]),t._v(" "),n("div",{staticClass:"mb-4 font-mono text-lower text-sm"},t._l(t.tags,(function(e,r){return n("span",{key:e},[t._v("\n      "+t._s(e)+"\n      "),r!==t.tags.length-1?n("span",[t._v("\n        •\n      ")]):t._e()])})),0),t._v(" "),n("div",[t.github?n("a",{staticClass:"icons no-accent",attrs:{href:t.github,rel:"noopener noreferrer",target:"_blank"}},[n("svg",{staticClass:"h-8 inline icons",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"}},[n("path",{attrs:{d:"M13.18 11.309c-.718 0-1.3.807-1.3 1.799 0 .994.582 1.801 1.3 1.801s1.3-.807 1.3-1.801c-.001-.992-.582-1.799-1.3-1.799zm4.526-4.683c.149-.365.155-2.439-.635-4.426 0 0-1.811.199-4.551 2.08-.575-.16-1.548-.238-2.519-.238-.973 0-1.945.078-2.52.238C4.74 2.399 2.929 2.2 2.929 2.2c-.789 1.987-.781 4.061-.634 4.426C1.367 7.634.8 8.845.8 10.497c0 7.186 5.963 7.301 7.467 7.301l1.734.002 1.732-.002c1.506 0 7.467-.115 7.467-7.301 0-1.652-.566-2.863-1.494-3.871zm-7.678 10.289h-.056c-3.771 0-6.709-.449-6.709-4.115 0-.879.31-1.693 1.047-2.369C5.537 9.304 7.615 9.9 9.972 9.9h.056c2.357 0 4.436-.596 5.664.531.735.676 1.045 1.49 1.045 2.369 0 3.666-2.937 4.115-6.709 4.115zm-3.207-5.606c-.718 0-1.3.807-1.3 1.799 0 .994.582 1.801 1.3 1.801.719 0 1.301-.807 1.301-1.801 0-.992-.582-1.799-1.301-1.799z"}})])]):t._e(),t._v("\n     \n    "),t.link?n("a",{staticClass:"icons no-accent",attrs:{href:t.link,rel:"noopener noreferrer",target:"_blank"}},[n("svg",{staticClass:"h-8 inline icons",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"}},[n("path",{attrs:{d:"M9.26 13a2 2 0 01.01-2.01A3 3 0 009 5H5a3 3 0 000 6h.08a6.06 6.06 0 000 2H5A5 5 0 015 3h4a5 5 0 01.26 10zm1.48-6a2 2 0 01-.01 2.01A3 3 0 0011 15h4a3 3 0 000-6h-.08a6.06 6.06 0 000-2H15a5 5 0 010 10h-4a5 5 0 01-.26-10z"}})])]):t._e()])])}),[],!1,null,"022e9c8f",null);e.a=component.exports},622:function(t,e,n){"use strict";n.r(e);n(36);var r=n(7),o=n(0),c=n(540),l=(n(531),n(532),n(533),{components:{Information:c.a},asyncData:function(t){var e=t.params;return Object(r.a)(regeneratorRuntime.mark((function t(){var r,c,output,l,d;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n(534)("./".concat(e.essay,".md"));case 2:return r=t.sent,c=o.a.prototype.$markdown(r.default),output=c.output,l=c.frontmatter,d=c.toc,t.abrupt("return",{markdown:output,frontmatter:l,toc:d});case 5:case"end":return t.stop()}}),t)})))()}}),d=n(24),component=Object(d.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flex p-6 flex-col md:flex-row"},[n("div",{staticClass:"w-full md:w-1/4 mb-4 md:px-4"},[n("Information",{attrs:{title:t.frontmatter.title,image:t.frontmatter.image,date:t.frontmatter.date,description:t.frontmatter.description,tags:t.frontmatter.tags.split(", "),github:t.frontmatter.github,link:t.frontmatter.link}})],1),t._v(" "),n("div",{staticClass:"w-full md:w-3/4 p-4 h-full text-base rounded shadow description-card"},[n("div",{staticClass:"mb-5 text-lower font-mono"},[t._v("\n      ESSAY\n    ")]),t._v(" "),n("p",{domProps:{innerHTML:t._s(t.markdown)}})])])}),[],!1,null,"08963229",null);e.default=component.exports}}]);