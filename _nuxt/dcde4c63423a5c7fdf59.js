(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{218:function(t,e,r){var content=r(224);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(15).default)("c29ea298",content,!0,{sourceMap:!1})},219:function(t,e,r){"use strict";r.d(e,"a",function(){return c});var n=r(222),c=r.n(n)()("9ff8f67e1e07ff5549f747387fc7d940cc4a42e1")},221:function(t,e,r){var content=r(229);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(15).default)("464df54d",content,!0,{sourceMap:!1})},223:function(t,e,r){"use strict";var n=r(218);r.n(n).a},224:function(t,e,r){(t.exports=r(14)(!1)).push([t.i,".v-card[data-v-405a3f53]{margin-top:1.5em}.cardtitle[data-v-405a3f53]{border-left:7px solid #00695c;margin:20px 0 10px 20px;padding:0 0 0 10px!important;color:#616161}.vlist-tags[data-v-405a3f53]{float:left;margin:0}",""])},225:function(t,e,r){"use strict";r(19);var n={props:{categories:{type:Array,default:function(){return[]}},tags:{type:Array,default:function(){return[]}}},computed:{tags_with_no_i18n:function(){return this.tags.filter(function(t){if("en"!=t.name&&"br"!=t.name)return t})}}},c=(r(223),r(5)),component=Object(c.a)(n,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-layout",{attrs:{column:"",wrap:""}},[r("v-flex",{attrs:{"d-flex":""}},[r("v-card",[r("v-card-title",{staticClass:"display-1 cardtitle"},[t._v(t._s(t.$t("categories")))]),t._v(" "),r("v-divider"),t._v(" "),r("v-card-text",t._l(t.categories,function(e,n){return r("v-list",{key:n,attrs:{subheader:"",dense:""}},[r("v-list-tile",{attrs:{to:t.localePath({name:"blog-category-categoryId",params:{categoryId:e.slug}}),href:""}},[r("v-list-tile-content",{staticClass:"title"},[t._v("\n              "+t._s(e.name)+"\n            ")])],1)],1)}),1)],1)],1),t._v(" "),r("v-flex",{attrs:{"d-flex":""}},[r("v-card",[r("v-card-title",{staticClass:"display-1 cardtitle"},[t._v("Tags")]),t._v(" "),r("v-divider"),t._v(" "),r("v-card-text",t._l(t.tags_with_no_i18n,function(e,n){return r("v-list",{key:n,staticClass:"vlist-tags",attrs:{subheader:"",dense:""}},[r("v-list-tile",{attrs:{to:t.localePath({name:"blog-tag-tagId",params:{tagId:e.slug}}),href:""}},[r("v-list-tile-content",{staticClass:"subheading"},[t._v("\n              "+t._s(e.name)+"\n            ")])],1)],1)}),1)],1)],1)],1)},[],!1,null,"405a3f53",null);e.a=component.exports},228:function(t,e,r){"use strict";var n=r(221);r.n(n).a},229:function(t,e,r){(t.exports=r(14)(!1)).push([t.i,".post_preview[data-v-1950aa6e]{margin:1.5em 0}.v-card__text[data-v-1950aa6e],.v-card__title[data-v-1950aa6e]{text-align:center}",""])},236:function(t,e,r){"use strict";var n={props:{title:{type:String,required:!0},excerpt:{type:String,required:!0},slug:{type:String,required:!0}}},c=(r(228),r(5)),component=Object(c.a)(n,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-layout",{attrs:{row:""}},[r("v-flex",{staticClass:"post_preview",attrs:{xs12:""}},[r("v-card",{attrs:{to:"/blog/"+t.slug,nuxt:""}},[r("v-card-title",{staticClass:"display-1"},[t._v(t._s(t.title))]),t._v(" "),r("v-card-text",{staticClass:"subheading"},[t._v(t._s(t.excerpt))])],1)],1)],1)},[],!1,null,"1950aa6e",null);e.a=component.exports},283:function(t,e,r){"use strict";r.r(e);r(19),r(23);var n=r(2),c=r(236),l=r(225),o=r(219),d={components:{PostPreviewListItem:c.a,BlogSidePanel:l.a},asyncData:function(){var t=Object(n.a)(regeneratorRuntime.mark(function t(e){var r,n,c,l;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.route.path.substring(1,3),t.next=3,o.a.tag.retrieve(e.params.tagId,{include:"recent_posts"}).then(function(t){return t.data.data.recent_posts});case 3:return n=t.sent,t.next=6,o.a.category.list().then(function(t){return t.data.data});case 6:return c=t.sent,t.next=9,o.a.tag.list({include:"recent_posts"}).then(function(t){return t.data.data});case 9:return l=t.sent,t.abrupt("return",{posts:n.filter(function(t){return t.tags.some(function(t){return t.name===r})}),categories:c,tags:l.map(function(t){return{slug:t.slug,name:t.name,total:t.recent_posts.length}})});case 11:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()},v=r(5),component=Object(v.a)(d,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-layout",{attrs:{row:"",wrap:""}},[t.posts.length?r("v-flex",{attrs:{xs12:"",sm7:""}},t._l(t.posts,function(t){return r("PostPreviewListItem",{key:t.id,attrs:{title:t.title,excerpt:t.summary,slug:t.slug}})}),1):r("v-flex",{staticClass:"text-xs-center",attrs:{xs12:"",sm7:"",subheading:""}},[r("p",{staticClass:"title"},[t._v("No posts published for this tag!")])]),t._v(" "),r("v-spacer"),t._v(" "),r("v-flex",{attrs:{xs12:"",sm4:""}},[r("BlogSidePanel",{attrs:{categories:t.categories,tags:t.tags}})],1)],1)},[],!1,null,"ed105e00",null);e.default=component.exports}}]);