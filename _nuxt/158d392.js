(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{511:function(t,e){function r(t){return Promise.resolve().then((function(){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}))}r.keys=function(){return[]},r.resolve=r,t.exports=r,r.id=511},517:function(t,e,r){var content=r(591);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(44).default)("48a64a36",content,!0,{sourceMap:!1})},590:function(t,e,r){"use strict";var n=r(517);r.n(n).a},591:function(t,e,r){(e=r(43)(!1)).push([t.i,'.toc[data-v-91476872]{height:calc(100vh - 2em)}h1[data-v-91476872]{border-image-source:none;border-bottom:none}.header[data-v-91476872]{border-top:1px solid #a3f7bf}.description[data-v-91476872]{border-bottom:1px solid #a3f7bf}a[data-v-91476872]{font-family:"Inter";color:#fff!important}',""]),t.exports=e},602:function(t,e,r){"use strict";r.r(e);r(30);var n=r(3),o=r(0),c={props:{note:{type:Object,required:!0},toc:{type:Array,required:!0}}},l=(r(590),r(29)),d=Object(l.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"toc sticky-info description-card rounded shadow p-4 overflow-y-auto"},[r("h1",{staticClass:"header"},[t._v(t._s(t.note.header))]),t._v(" "),r("p",{staticClass:"description"},[t._v(t._s(t.note.description))]),t._v(" "),r("h2",[t._v("\n    Table of Contents\n  ")]),t._v(" "),t._l(t.toc,(function(content){return r("div",{key:content.anchor,class:1===content.level?"truncate font-bold text-lg":"truncate border-l-2 hover:border-green-300",style:"margin-left: "+.6*(content.level-1)+"em; padding-left: 5px",attrs:{href:"#"+content.anchor,title:content.content}},[r("a",{attrs:{href:"#"+content.anchor}},[t._v("\n      "+t._s(content.content)+"\n    ")])])}))],2)}),[],!1,null,"91476872",null).exports,f=(r(513),r(514),r(515),{components:{TableOfContents:d},asyncData:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){var n,c,l,output,d,f;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.params,e.next=3,r(511)("./".concat(n.topic,".md"));case 3:return c=e.sent,l=o.a.prototype.$markdown(c.default),output=l.output,d=l.frontmatter,f=l.toc,e.abrupt("return",{markdown:output,frontmatter:d,toc:f});case 6:case"end":return e.stop()}}),e)})))()}}),v=Object(l.a)(f,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("div",{staticClass:"sm:block md:flex lg:flex xl:flex"},[e("div",{staticClass:"sm:w-full md:w-1/5 lg:w-1/5 xl:w-1/5 mx-auto p-4"},[e("TableOfContents",{attrs:{toc:this.toc,note:this.frontmatter}})],1),this._v(" "),e("div",{staticClass:"sm:w-full md:w-4/5 lg:w-4/5 xl:w-4/5 p-4"},[e("div",{staticClass:"rounded shadow description-card p-4",domProps:{innerHTML:this._s(this.markdown)}})])])])}),[],!1,null,"59bdc2c0",null);e.default=v.exports}}]);