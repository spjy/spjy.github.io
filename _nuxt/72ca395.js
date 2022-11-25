(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{500:function(t,e,n){"use strict";var r={props:{tags:{type:Array,default:function(){return[]}}}},o=n(13),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"pb-2 font-mono text-xs text-lower"},t._l(t.tags,(function(e,r){return n("span",{key:e},[t._v("\n    "+t._s(e)+"\n    "),r!==t.tags.length-1?n("span",[t._v("\n      •\n    ")]):t._e()])})),0)}),[],!1,null,null,null);e.a=component.exports},550:function(t,e,n){var map={"./documented-designs.md":[527,10],"./egregious-ethics.md":[528,11],"./introspective-instillation.md":[529,12],"./joys-of-a-challenge.md":[530,13],"./juxtaposing-javascript.md":[531,14],"./miniscule-magnitude.md":[532,15],"./project-plans.md":[533,16],"./pursuit-of-perfection.md":[534,17],"./quality-questions.md":[535,18],"./reasonable-repetition.md":[536,19],"./upholding-uniformity.md":[537,20]};function r(t){if(!n.o(map,t))return Promise.resolve().then((function(){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}));var e=map[t],r=e[0];return n.e(e[1]).then((function(){return n(r)}))}r.keys=function(){return Object.keys(map)},r.id=550,t.exports=r},557:function(t,e,n){"use strict";var r={components:{Tags:n(500).a},props:{title:{type:String,required:!0},image:{type:String,default:null},date:{type:String,required:!0},description:{type:String,default:""},tags:{type:Array,default:function(){return[]}},github:{type:String,default:null},link:{type:String,default:null}}},o=n(13),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"sticky-info"},[t.image?n("img",{staticClass:"mb-5 w-full rounded",attrs:{src:t.image}}):t._e(),t._v(" "),n("div",{staticClass:"accent-green text-xl font-bold"},[t._v("\n    "+t._s(t.title)+"\n  ")]),t._v(" "),n("div",{staticClass:"mb-4 text-sm text-lower font-mono"},[t._v("\n    "+t._s(t.date)+"\n  ")]),t._v(" "),n("div",{staticClass:"mb-2 text-base"},[t._v("\n    "+t._s(t.description)+"\n  ")]),t._v(" "),n("tags",{attrs:{tags:t.tags}}),t._v(" "),n("div",{staticClass:"mt-4"},[t.github?n("a",{staticClass:"icons no-accent",attrs:{href:t.github,rel:"noopener noreferrer",target:"_blank"}},[n("svg",{staticClass:"h-8 inline icons",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"}},[n("path",{attrs:{d:"M13.18 11.309c-.718 0-1.3.807-1.3 1.799 0 .994.582 1.801 1.3 1.801s1.3-.807 1.3-1.801c-.001-.992-.582-1.799-1.3-1.799zm4.526-4.683c.149-.365.155-2.439-.635-4.426 0 0-1.811.199-4.551 2.08-.575-.16-1.548-.238-2.519-.238-.973 0-1.945.078-2.52.238C4.74 2.399 2.929 2.2 2.929 2.2c-.789 1.987-.781 4.061-.634 4.426C1.367 7.634.8 8.845.8 10.497c0 7.186 5.963 7.301 7.467 7.301l1.734.002 1.732-.002c1.506 0 7.467-.115 7.467-7.301 0-1.652-.566-2.863-1.494-3.871zm-7.678 10.289h-.056c-3.771 0-6.709-.449-6.709-4.115 0-.879.31-1.693 1.047-2.369C5.537 9.304 7.615 9.9 9.972 9.9h.056c2.357 0 4.436-.596 5.664.531.735.676 1.045 1.49 1.045 2.369 0 3.666-2.937 4.115-6.709 4.115zm-3.207-5.606c-.718 0-1.3.807-1.3 1.799 0 .994.582 1.801 1.3 1.801.719 0 1.301-.807 1.301-1.801 0-.992-.582-1.799-1.301-1.799z"}})])]):t._e(),t._v("\n     \n    "),t.link?n("a",{staticClass:"icons no-accent",attrs:{href:t.link,rel:"noopener noreferrer",target:"_blank"}},[n("svg",{staticClass:"h-8 inline icons",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"}},[n("path",{attrs:{d:"M9.26 13a2 2 0 01.01-2.01A3 3 0 009 5H5a3 3 0 000 6h.08a6.06 6.06 0 000 2H5A5 5 0 015 3h4a5 5 0 01.26 10zm1.48-6a2 2 0 01-.01 2.01A3 3 0 0011 15h4a3 3 0 000-6h-.08a6.06 6.06 0 000-2H15a5 5 0 010 10h-4a5 5 0 01-.26-10z"}})])]):t._e()])],1)}),[],!1,null,"10b722d0",null);e.a=component.exports},638:function(t,e,n){"use strict";n.r(e);n(32);var r=n(3),o=n(0),l=n(557),c=(n(547),n(548),n(549),{components:{Information:l.a},asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var r,l,c,output,d,m;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.params,e.next=3,n(550)("./".concat(r.essay,".md"));case 3:return l=e.sent,c=o.a.prototype.$markdown(l.default),output=c.output,d=c.frontmatter,m=c.toc,e.abrupt("return",{markdown:output,frontmatter:d,toc:m});case 6:case"end":return e.stop()}}),e)})))()}}),d=n(13),component=Object(d.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flex p-6 flex-col md:flex-row"},[n("div",{staticClass:"w-full md:w-1/4 mb-4 md:px-4"},[n("Information",{attrs:{title:t.frontmatter.title,image:t.frontmatter.image,date:t.frontmatter.date,description:t.frontmatter.description,tags:t.frontmatter.tags.split(", "),github:t.frontmatter.github,link:t.frontmatter.link}})],1),t._v(" "),n("div",{staticClass:"w-full md:w-3/4 p-4 h-full text-base rounded shadow description-card"},[n("div",{staticClass:"mb-5 text-lower font-mono"},[t._v("\n      ESSAY\n    ")]),t._v(" "),n("p",{domProps:{innerHTML:t._s(t.markdown)}})])])}),[],!1,null,"66355794",null);e.default=component.exports}}]);