(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{219:function(t,e,r){var content=r(225);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(15).default)("71b1e0ec",content,!0,{sourceMap:!1})},220:function(t,e,r){"use strict";r.d(e,"a",function(){return o});var n=r(223),o=r.n(n)()("9ff8f67e1e07ff5549f747387fc7d940cc4a42e1")},222:function(t,e,r){var content=r(233);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(15).default)("299c5e3a",content,!0,{sourceMap:!1})},224:function(t,e,r){"use strict";var n=r(219);r.n(n).a},225:function(t,e,r){(t.exports=r(14)(!1)).push([t.i,".sidepanel_card{margin:1.5em 0;padding-bottom:30px}.sidepanel_title{margin:20px 0 10px 20px;padding:0 0 0 10px!important;color:#263238}.sidepanel_text{color:#616161}.tagcloud{float:left}.tagcloud a{text-decoration:none;color:#616161}.tagcloud a,.tagcloud a:hover{cursor:pointer}.v-chip .v-chip__content{cursor:pointer!important}",""])},226:function(t,e,r){"use strict";r(16),r(19);var n={props:{categories:{type:Array,default:function(){return[]}},tags:{type:Array,default:function(){return[]}}},computed:{tags_with_no_i18n:function(){return this.tags.filter(function(t){if("en"!=t.name&&"br"!=t.name)return t})}},methods:{category_total_posts_no_i18n:function(t){var i=0,e=this.$route.path.substring(1,3);return t.forEach(function(element){element.tags.some(function(t){return t.name===e})&&i++}),i}}},o=(r(224),r(5)),component=Object(o.a)(n,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-layout",{attrs:{column:"",wrap:""}},[r("v-flex",{attrs:{"d-flex":""}},[r("v-card",{staticClass:"sidepanel_card"},[r("v-card-title",{staticClass:"headline sidepanel_title"},[t._v(t._s(t.$t("categories")))]),t._v(" "),r("v-card-text",t._l(t.categories,function(e,n){return r("v-list",{key:n,attrs:{subheader:"",dense:""}},[r("v-list-tile",{attrs:{to:t.localePath({name:"blog-category-categoryId",params:{categoryId:e.slug}}),href:""}},[r("v-list-tile-content",{staticClass:"subheading sidepanel_text"},[t._v("\n              "+t._s(e.name)+"\n            ")]),t._v(" "),r("v-list-tile-action",[r("v-chip",{attrs:{color:"blue-grey lighten-4",small:""}},[t._v(t._s(t.category_total_posts_no_i18n(e.posts)))])],1)],1),t._v(" "),r("v-divider")],1)}),1),t._v(" "),r("v-card-title",{staticClass:"headline sidepanel_title"},[t._v("Tags")]),t._v(" "),r("v-card-text",t._l(t.tags_with_no_i18n,function(e,n){return r("div",{key:n,staticClass:"tagcloud"},[r("a",{attrs:{href:t.localePath({name:"blog-tag-tagId",params:{tagId:e.slug}})}},[r("v-chip",{attrs:{color:"blue-grey lighten-4"}},[t._v(t._s(e.name))])],1)])}),0)],1)],1)],1)},[],!1,null,null,null);e.a=component.exports},232:function(t,e,r){"use strict";var n=r(222);r.n(n).a},233:function(t,e,r){(t.exports=r(14)(!1)).push([t.i,".post_preview[data-v-ed9cd29a]{margin:1.5em 0}.v-card__text[data-v-ed9cd29a],.v-card__title[data-v-ed9cd29a]{text-align:center}",""])},237:function(t,e,r){"use strict";var n={props:{title:{type:String,required:!0},excerpt:{type:String,required:!0},slug:{type:String,required:!0},date:{type:String,required:!0}}},o=(r(232),r(5)),component=Object(o.a)(n,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-layout",{attrs:{row:""}},[r("v-flex",{staticClass:"post_preview",attrs:{xs12:""}},[r("v-card",{attrs:{to:"/blog/"+t.slug,nuxt:""}},[r("v-card-title",{staticClass:"display-1"},[t._v(t._s(t.title))]),t._v(" "),r("v-card-text",{staticClass:"subheading"},[t._v(t._s(t.excerpt))])],1)],1)],1)},[],!1,null,"ed9cd29a",null);e.a=component.exports},283:function(t,e,r){"use strict";r.r(e);r(19),r(20);var n=r(1),o=r(237),c=r(226),l=r(220),d={components:{PostPreviewListItem:o.a,BlogSidePanel:c.a},asyncData:function(){var t=Object(n.a)(regeneratorRuntime.mark(function t(e){var r,n,o,c;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.route.path.substring(1,3),t.next=3,l.a.category.retrieve(e.params.categoryId,{include:"recent_posts"}).then(function(t){return t.data.data.recent_posts});case 3:return n=t.sent,t.next=6,l.a.category.list({include:"recent_posts"}).then(function(t){return t.data.data});case 6:return o=t.sent,t.next=9,l.a.tag.list({include:"recent_posts"}).then(function(t){return t.data.data});case 9:return c=t.sent,t.abrupt("return",{posts:n.filter(function(t){return t.tags.some(function(t){return t.name===r})}),categories:o.map(function(t){return{slug:t.slug,name:t.name,posts:t.recent_posts}}),tags:c.map(function(t){return{slug:t.slug,name:t.name,total:t.recent_posts.length}})});case 11:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()},v=r(5),component=Object(v.a)(d,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-layout",{attrs:{row:"",wrap:""}},[t.posts.length?r("v-flex",{attrs:{xs12:"",sm7:""}},t._l(t.posts,function(t){return r("PostPreviewListItem",{key:t.id,attrs:{title:t.title,excerpt:t.summary,slug:t.slug,date:t.published}})}),1):r("v-flex",{staticClass:"text-xs-center",attrs:{xs12:"",sm7:"",subheading:""}},[r("p",{staticClass:"title"},[t._v("No posts published for this category!")])]),t._v(" "),r("v-spacer"),t._v(" "),r("v-flex",{attrs:{xs12:"",sm4:""}},[r("BlogSidePanel",{attrs:{categories:t.categories,tags:t.tags}})],1)],1)},[],!1,null,"30a80e42",null);e.default=component.exports}}]);