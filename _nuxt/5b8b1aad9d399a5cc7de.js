(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{191:function(t,e,a){var s=a(196);"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);(0,a(16).default)("c381f20c",s,!0,{})},192:function(t,e,a){"use strict";a.d(e,"a",function(){return r});var s=a(197),r=a.n(s)()("9ff8f67e1e07ff5549f747387fc7d940cc4a42e1")},194:function(t,e,a){var s=a(201);"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);(0,a(16).default)("fb0787a2",s,!0,{})},195:function(t,e,a){"use strict";var s=a(191);a.n(s).a},196:function(t,e,a){(t.exports=a(15)(!1)).push([t.i,"\n.v-card[data-v-17869841]{margin-top:1.5em\n}\n.cardtitle[data-v-17869841]{border-left:7px solid #42a5f5;margin:20px 0 10px 20px;padding:0 0 0 10px!important;color:#616161\n}\n.vlist-tags[data-v-17869841]{float:left;margin:0\n}",""])},198:function(t,e,a){"use strict";var s={props:{categories:{type:Array,default:function(){return[]}},tags:{type:Array,default:function(){return[]}}}},r=(a(195),a(3)),n=Object(r.a)(s,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-layout",{attrs:{column:"",wrap:""}},[a("v-flex",{attrs:{"d-flex":""}},[a("v-card",[a("v-card-title",{staticClass:"display-1 cardtitle"},[t._v("Categories")]),t._v(" "),a("v-divider"),t._v(" "),a("v-card-text",t._l(t.categories,function(e,s){return a("v-list",{key:s,attrs:{subheader:"",dense:""}},[a("v-list-tile",{attrs:{to:"/blog/category/"+e.slug,href:""}},[a("v-list-tile-content",{staticClass:"title"},[t._v("\n              "+t._s(e.name)+"\n            ")])],1)],1)}))],1)],1),t._v(" "),a("v-flex",{attrs:{"d-flex":""}},[a("v-card",[a("v-card-title",{staticClass:"display-1 cardtitle"},[t._v("Tags")]),t._v(" "),a("v-divider"),t._v(" "),a("v-card-text",t._l(t.tags,function(e,s){return a("v-list",{key:s,staticClass:"vlist-tags",attrs:{subheader:"",dense:""}},[a("v-list-tile",{attrs:{to:"/blog/tag/"+e.slug,href:""}},[a("v-list-tile-content",{staticClass:"subheading"},[t._v("\n              "+t._s(e.name)+"\n            ")])],1)],1)}))],1)],1)],1)},[],!1,null,"17869841",null);n.options.__file="BlogSidePanel.vue";e.a=n.exports},200:function(t,e,a){"use strict";var s=a(194);a.n(s).a},201:function(t,e,a){(t.exports=a(15)(!1)).push([t.i,"\n.post_preview[data-v-6987fee9]{margin:1.5em 0\n}\n.v-card__text[data-v-6987fee9],.v-card__title[data-v-6987fee9]{text-align:center\n}",""])},203:function(t,e,a){var s=a(236);"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);(0,a(16).default)("57cf0592",s,!0,{})},206:function(t,e,a){"use strict";var s={props:{title:{type:String,required:!0},excerpt:{type:String,required:!0},slug:{type:String,required:!0}}},r=(a(200),a(3)),n=Object(r.a)(s,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-layout",{attrs:{row:""}},[a("v-flex",{staticClass:"post_preview",attrs:{xs12:""}},[a("v-card",{attrs:{to:"/blog/"+t.slug,nuxt:""}},[a("v-card-title",{staticClass:"display-1"},[t._v(t._s(t.title))]),t._v(" "),a("v-card-text",{staticClass:"subheading"},[t._v(t._s(t.excerpt))])],1)],1)],1)},[],!1,null,"6987fee9",null);n.options.__file="PostPreviewListItem.vue";e.a=n.exports},235:function(t,e,a){"use strict";var s=a(203);a.n(s).a},236:function(t,e,a){(t.exports=a(15)(!1)).push([t.i,"",""])},244:function(t,e,a){"use strict";a.r(e);a(30),a(42);var s,r=a(5),n=a.n(r),i=a(206),l=a(198),c=a(192),o={components:{PostPreviewListItem:i.a,BlogSidePanel:l.a},asyncData:(s=n()(regeneratorRuntime.mark(function t(e){var a,s,r;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.a.tag.retrieve(e.params.tagId,{include:"recent_posts"});case 2:return a=t.sent,t.next=5,c.a.category.list();case 5:return s=t.sent,t.next=8,c.a.tag.list({include:"recent_posts"});case 8:return r=t.sent,t.abrupt("return",{posts:a.data.data.recent_posts.map(function(t){return{id:t.slug,title:t.title,previewText:t.summary,thumbnailUrl:t.featured_image,slug:t.slug}}),categories:s.data.data.map(function(t){return{slug:t.slug,name:t.name}}),tags:r.data.data.map(function(t){return{slug:t.slug,name:t.name,total:t.recent_posts.length}})});case 10:case"end":return t.stop()}},t,this)})),function(t){return s.apply(this,arguments)})},u=(a(235),a(3)),v=Object(u.a)(o,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-layout",{attrs:{row:"",wrap:""}},[t.posts.length?a("v-flex",{attrs:{xs12:"",sm7:""}},t._l(t.posts,function(t){return a("PostPreviewListItem",{key:t.id,attrs:{title:t.title,excerpt:t.previewText,slug:t.slug}})})):a("v-flex",{staticClass:"text-xs-center",attrs:{xs12:"",sm7:"",subheading:""}},[a("p",{staticClass:"title"},[t._v("No posts published for this tag!")])]),t._v(" "),a("v-spacer"),t._v(" "),a("v-flex",{attrs:{xs12:"",sm4:""}},[a("BlogSidePanel",{attrs:{categories:t.categories,tags:t.tags}})],1)],1)},[],!1,null,"e96f7996",null);v.options.__file="_tagId.vue";e.default=v.exports}}]);