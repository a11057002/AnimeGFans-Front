(function(e){function t(t){for(var r,a,c=t[0],i=t[1],l=t[2],s=0,f=[];s<c.length;s++)a=c[s],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&f.push(o[a][0]),o[a]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);p&&p(t);while(f.length)f.shift()();return u.push.apply(u,l||[]),n()}function n(){for(var e,t=0;t<u.length;t++){for(var n=u[t],r=!0,a=1;a<n.length;a++){var c=n[a];0!==o[c]&&(r=!1)}r&&(u.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},a={app:0},o={app:0},u=[];function c(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-2d22d746":"3b5e2fd7","chunk-8983ab84":"bf059660"}[e]+".js"}function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n={"chunk-8983ab84":1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-2d22d746":"31d6cfe0","chunk-8983ab84":"54c85dca"}[e]+".css",o=i.p+r,u=document.getElementsByTagName("link"),c=0;c<u.length;c++){var l=u[c],s=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(s===r||s===o))return t()}var f=document.getElementsByTagName("style");for(c=0;c<f.length;c++){l=f[c],s=l.getAttribute("data-href");if(s===r||s===o)return t()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=t,p.onerror=function(t){var r=t&&t.target&&t.target.src||o,u=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");u.code="CSS_CHUNK_LOAD_FAILED",u.request=r,delete a[e],p.parentNode.removeChild(p),n(u)},p.href=o;var d=document.getElementsByTagName("head")[0];d.appendChild(p)})).then((function(){a[e]=0})));var r=o[e];if(0!==r)if(r)t.push(r[2]);else{var u=new Promise((function(t,n){r=o[e]=[t,n]}));t.push(r[2]=u);var l,s=document.createElement("script");s.charset="utf-8",s.timeout=120,i.nc&&s.setAttribute("nonce",i.nc),s.src=c(e);var f=new Error;l=function(t){s.onerror=s.onload=null,clearTimeout(p);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;f.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",f.name="ChunkLoadError",f.type=r,f.request=a,n[1](f)}o[e]=void 0}};var p=setTimeout((function(){l({type:"timeout",target:s})}),12e4);s.onerror=s.onload=l,document.head.appendChild(s)}return Promise.all(t)},i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/AnimeGFans-Front/",i.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],s=l.push.bind(l);l.push=t,l=l.slice();for(var f=0;f<l.length;f++)t(l[f]);var p=s;u.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",[n("v-app-bar",{attrs:{app:"",color:"primary"}},[n("router-link",{attrs:{to:"/"}},[n("v-toolbar-title",[e._v(" AnimeGFans ")])],1),n("v-spacer"),n("v-btn",{attrs:{text:"",rounded:"",to:"/"}},[e._v("首頁")])],1),n("v-main",[n("router-view")],1)],1)},o=[],u=(n("5c0b"),n("2877")),c=n("6544"),i=n.n(c),l=n("7496"),s=n("40dc"),f=n("8336"),p=n("f6c4"),d=n("2fa4"),h=n("2a7f"),v={},m=Object(u["a"])(v,a,o,!1,null,null,null),b=m.exports;i()(m,{VApp:l["a"],VAppBar:s["a"],VBtn:f["a"],VMain:p["a"],VSpacer:d["a"],VToolbarTitle:h["a"]});var y=n("f309");r["a"].use(y["a"]);var g=new y["a"]({theme:{dark:!0,themes:{light:{primary:"#41B883"},dark:{primary:"#34495E",anchor:"#fff"}}}}),k=(n("d3b7"),n("8c4f")),w=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("v-container",[n("v-row",e._l(e.srcs,(function(t,r){return n("v-col",{key:r,attrs:{cols:"3"}},[n("v-hover",{scopedSlots:e._u([{key:"default",fn:function(r){var a=r.hover;return[n("router-link",{attrs:{to:t,"v-bind:key":t}},[n("v-card",{attrs:{elevation:a?30:0}},[e._v(" "+e._s(t)+" ")])],1)]}}],null,!0)})],1)})),1)],1)],1)},_=[],E=(n("4160"),n("159b"),n("bc3a")),O=n.n(E),j={name:"Home",components:{},data:function(){return{srcs:[]}},mounted:function(){var e=this;O.a.get("https://animegfans.herokuapp.com").then((function(t){return t.data.forEach((function(t){e.srcs.push(t.head)}))}))}},A=j,V=(n("cccb"),n("b0af")),S=n("62ad"),x=n("a523"),C=n("ce87"),P=n("0fd9"),T=Object(u["a"])(A,w,_,!1,null,null,null),F=T.exports;i()(T,{VCard:V["a"],VCol:S["a"],VContainer:x["a"],VHover:C["a"],VRow:P["a"]}),r["a"].use(k["a"]);var B=[{path:"/",name:"Home",component:F,meta:{title:"在線動漫-AnimeGFans"}},{path:"/about",name:"About",component:function(){return n.e("chunk-2d22d746").then(n.bind(null,"f820"))},meta:{title:"排行榜"}},{path:"/:id",name:"Video",component:function(){return n.e("chunk-8983ab84").then(n.bind(null,"85e1"))},data:function(){},props:!0,meta:{title:"影片播放"}}],L=new k["a"]({mode:"history",base:"/AnimeGFans-Front/",routes:B});L.beforeEach((function(e,t,n){e.meta.title&&(document.title=e.meta.title),n()}));var M=L;r["a"].config.productionTip=!1,new r["a"]({vuetify:g,router:M,render:function(e){return e(b)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";var r=n("9c0c"),a=n.n(r);a.a},"5ced":function(e,t,n){},"9c0c":function(e,t,n){},cccb:function(e,t,n){"use strict";var r=n("5ced"),a=n.n(r);a.a}});
//# sourceMappingURL=app.c337b98f.js.map