(window.webpackJsonp=window.webpackJsonp||[]).push([[9,3,8],{291:function(t,e,n){"use strict";n.r(e);var l=n(46),component=Object(l.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"\n    w-full\n    h-14\n    bg-white\n    flex\n    items-center\n    px-4\n    overflow-hidden\n    justify-between\n    shadow\n  "},[n("div",{staticClass:"flex items-center"},["citizen"!==t.$route.name?n("button",{attrs:{to:{name:"citizen"}},on:{click:function(e){return t.$router.back()}}},[n("i",{staticClass:"mdi mdi-arrow-left text-2xl text-red-900"})]):t._e(),t._v(" "),n("nuxt-link",{attrs:{to:{name:"index"}}},[n("img",{staticClass:"h-10",attrs:{src:"/logo_half.png",alt:""}})])],1),t._v(" "),n("nuxt-link",{attrs:{to:{name:"login"}}},[n("i",{staticClass:"mdi mdi-account-circle-outline text-2xl text-red-900"})])],1)}),[],!1,null,null,null);e.default=component.exports},292:function(t,e,n){"use strict";n.r(e);var l=n(46),component=Object(l.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"\n    w-full\n    h-14\n    bg-white\n    flex\n    items-center\n    px-4\n    overflow-hidden\n    justify-between\n    fixed\n    bottom-0\n  "},[n("nuxt-link",{attrs:{to:{name:"citizen"}}},[n("i",{staticClass:"mdi mdi-home text-2xl text-red-900"})]),t._v(" "),n("nuxt-link",{attrs:{to:{name:"demo"}}},[n("i",{staticClass:"mdi mdi-bell text-2xl text-red-900"})])],1)}),[],!1,null,null,null);e.default=component.exports},306:function(t,e,n){"use strict";n.r(e);var l=n(307),r=n.n(l);for(var c in l)["default"].indexOf(c)<0&&function(t){n.d(e,t,(function(){return l[t]}))}(c);e.default=r.a},307:function(t,e){},315:function(t,e,n){"use strict";n.d(e,"a",(function(){return l})),n.d(e,"b",(function(){return r}));var l=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container min-h-screen bg-gray-50 flex flex-col pb-14"},[n("top-bar"),t._v(" "),n("client-only",[n("l-map",{staticClass:"flex-grow z-0",attrs:{zoom:15,center:[20.6147435,-103.0755642]}},[n("l-tile-layer",{attrs:{url:"http://{s}.tile.osm.org/{z}/{x}/{y}.png"}}),t._v(" "),n("l-marker",{attrs:{"lat-lng":[20.6147435,-103.0755642]}},[n("l-icon",{attrs:{"icon-size":[100,100],"icon-anchor":[50,100],"class-name":"text-center "}},[n("div",{staticClass:"bg-white rounded-md overflow-hidden shadow-2xl"},[n("div",{staticClass:"mx-auto w-full h-14 flex items-center justify-center"},[n("img",{staticClass:"w-full h-full object-cover",attrs:{src:"/cdc.jpg"}})]),t._v(" "),n("div",{staticClass:"text-xs"},[t._v("CDC Bellavista")])]),t._v(" "),n("div",{staticClass:"animate-bounce"},[n("i",{staticClass:"mdi mdi-map-marker text-2xl text-red-900"})])])],1)],1)],1),t._v(" "),n("bottom-bar")],1)},r=[]},319:function(t,e,n){"use strict";n.r(e);var l=n(315),r=n(306);for(var c in r)["default"].indexOf(c)<0&&function(t){n.d(e,t,(function(){return r[t]}))}(c);var o=n(46),component=Object(o.a)(r.default,l.a,l.b,!1,null,null,null);e.default=component.exports,installComponents(component,{TopBar:n(291).default,BottomBar:n(292).default})}}]);