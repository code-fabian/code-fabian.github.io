(window.webpackJsonp=window.webpackJsonp||[]).push([[11,3,5,6,7,8],{291:function(t,e,n){"use strict";n.r(e);var l=n(46),component=Object(l.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"\n    w-full\n    h-14\n    bg-white\n    flex\n    items-center\n    px-4\n    overflow-hidden\n    justify-between\n    shadow\n  "},[n("div",{staticClass:"flex items-center"},["citizen"!==t.$route.name?n("button",{attrs:{to:{name:"citizen"}},on:{click:function(e){return t.$router.back()}}},[n("i",{staticClass:"mdi mdi-arrow-left text-2xl text-red-900"})]):t._e(),t._v(" "),n("nuxt-link",{attrs:{to:{name:"index"}}},[n("img",{staticClass:"h-10",attrs:{src:"/logo_half.png",alt:""}})])],1),t._v(" "),n("nuxt-link",{attrs:{to:{name:"login"}}},[n("i",{staticClass:"mdi mdi-account-circle-outline text-2xl text-red-900"})])],1)}),[],!1,null,null,null);e.default=component.exports},292:function(t,e,n){"use strict";n.r(e);var l=n(46),component=Object(l.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"\n    w-full\n    h-14\n    bg-white\n    flex\n    items-center\n    px-4\n    overflow-hidden\n    justify-between\n    fixed\n    bottom-0\n  "},[n("nuxt-link",{attrs:{to:{name:"citizen"}}},[n("i",{staticClass:"mdi mdi-home text-2xl text-red-900"})]),t._v(" "),n("nuxt-link",{attrs:{to:{name:"demo"}}},[n("i",{staticClass:"mdi mdi-bell text-2xl text-red-900"})])],1)}),[],!1,null,null,null);e.default=component.exports},293:function(t,e,n){"use strict";n.r(e);var l={data:function(){return{show:!0}}},r=n(46),component=Object(r.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"\n    w-full\n    h-8\n    text-white\n    bg-gray-800\n    text-sm\n    flex\n    px-3\n    items-center\n    mt-1\n  "},[n("div",{staticClass:"flex-grow"},[t._v("Accede para recibir notificaciones")]),t._v(" "),n("button",{on:{click:function(e){t.show=!1}}},[n("i",{staticClass:"mdi mdi-close text-lg"})])])}),[],!1,null,null,null);e.default=component.exports},310:function(t,e,n){"use strict";n.r(e);var l=n(295),r={mounted:function(){Object(l.a)(this.$refs.viewport,{align:"center",skipSnaps:!1})}},o=n(46),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"relative"},[n("div",{ref:"viewport",staticClass:"overflow-hidden h-44 w-full"},[n("div",{staticClass:"flex -ml-10"},[n("nuxt-link",{staticClass:"relative min-w-3/4 pl-3",attrs:{to:{name:"news-id",params:{id:1}}}},[n("div",{staticClass:"relative overflow-hidden h-40 rounded-lg shadow bg-white"},[n("img",{staticClass:"w-full object-cover h-32",attrs:{src:"/not1.jpg"}}),t._v(" "),n("div",{staticClass:"px-2 text-gray-700 h-8 text-sm flex items-center"},[t._v("\n            Lorem ipsum dolor\n          ")])])]),t._v(" "),n("nuxt-link",{staticClass:"relative min-w-3/4 pl-3",attrs:{to:{name:"news-id",params:{id:1}}}},[n("div",{staticClass:"relative overflow-hidden h-40 rounded-lg shadow bg-white"},[n("img",{staticClass:"w-full object-cover h-32",attrs:{src:"/not2.jpg"}}),t._v(" "),n("div",{staticClass:"px-2 text-gray-700 h-8 text-sm flex items-center"},[t._v("\n            Lorem ipsum dolor\n          ")])])]),t._v(" "),n("nuxt-link",{staticClass:"relative min-w-3/4 pl-3",attrs:{to:{name:"news-id",params:{id:1}}}},[n("div",{staticClass:"relative overflow-hidden h-40 rounded-lg shadow bg-white"},[n("img",{staticClass:"w-full object-cover h-32",attrs:{src:"/not3.jpg"}}),t._v(" "),n("div",{staticClass:"px-2 text-gray-700 h-8 text-sm flex items-center"},[t._v("\n            Lorem ipsum dolor\n          ")])])])],1)])])}),[],!1,null,null,null);e.default=component.exports},311:function(t,e,n){"use strict";n.r(e);var l=n(295),r={mounted:function(){Object(l.a)(this.$refs.viewport,{containScroll:"keepSnaps",dragFree:!0})}},o=n(46),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"relative"},[n("div",{ref:"viewport",staticClass:"overflow-hidden h-24 w-full"},[n("div",{staticClass:"flex"},[n("nuxt-link",{staticClass:"relative pl-3",staticStyle:{"min-width":"30%"},attrs:{to:{name:"services"}}},[n("div",{staticClass:"\n            shadow\n            leading-none\n            relative\n            overflow-hidden\n            h-20\n            rounded-lg\n            bg-green-800\n            text-white\n            flex flex-col\n            items-center\n            justify-end\n            p-2\n            text-center\n          "},[n("i",{staticClass:"mdi mdi-file-document-edit text-2xl"}),t._v(" "),n("div",{staticClass:"font-bold"},[t._v("Tramites y Servicios")])])]),t._v(" "),n("nuxt-link",{staticClass:"relative pl-3",staticStyle:{"min-width":"30%"},attrs:{to:{name:"payments"}}},[n("div",{staticClass:"\n            shadow\n            leading-none\n            relative\n            overflow-hidden\n            h-20\n            rounded-lg\n            bg-blue-900\n            text-white\n            flex flex-col\n            items-center\n            justify-end\n            p-2\n            text-center\n          "},[n("i",{staticClass:"mdi mdi-credit-card-outline text-2xl"}),t._v(" "),n("div",{staticClass:"font-bold"},[t._v("Pago en Linea")])])]),t._v(" "),n("nuxt-link",{staticClass:"relative pl-3",staticStyle:{"min-width":"30%"},attrs:{to:{name:"directory"}}},[n("div",{staticClass:"\n            shadow\n            leading-none\n            relative\n            overflow-hidden\n            h-20\n            rounded-lg\n            bg-red-900\n            text-white\n            flex flex-col\n            items-center\n            justify-end\n            p-2\n            text-center\n          "},[n("i",{staticClass:"mdi mdi-account-group text-2xl"}),t._v(" "),n("div",{staticClass:"font-bold"},[t._v("Directorio")])])])],1)])])}),[],!1,null,null,null);e.default=component.exports},322:function(t,e,n){"use strict";n.r(e);var l={head:{title:"Ciudadano"}},r=n(46),component=Object(r.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container min-h-screen bg-gray-50 pb-16"},[n("top-bar"),t._v(" "),n("top-advice"),t._v(" "),t._m(0),t._v(" "),n("div",[n("recent-news")],1),t._v(" "),t._m(1),t._v(" "),n("div",[n("short-cuts")],1),t._v(" "),n("div",{staticClass:"px-3 flex flex-col space-y-3"},[n("nuxt-link",{attrs:{to:{name:"cdcs"}}},[n("div",{staticClass:"\n          bg-white\n          rounded-lg\n          shadow\n          h-10\n          w-full\n          flex\n          pr-4\n          items-center\n          overflow-hidden\n        "},[n("div",{staticClass:"\n            bg-red-900\n            text-red-200\n            w-10\n            justify-center\n            h-10\n            flex\n            items-center\n            mr-3\n          "},[n("i",{staticClass:"mdi mdi-book-open-variant text-2xl opacity-80"})]),t._v("\n        Centros de Desarrollo Comunitario\n      ")])]),t._v(" "),n("nuxt-link",{attrs:{to:{name:"demo"}}},[n("div",{staticClass:"\n          bg-white\n          rounded-lg\n          shadow\n          h-10\n          w-full\n          flex\n          pr-4\n          items-center\n          overflow-hidden\n        "},[n("div",{staticClass:"\n            bg-red-900\n            text-red-200\n            w-10\n            justify-center\n            h-10\n            flex\n            items-center\n            mr-3\n          "},[n("i",{staticClass:"mdi mdi-book-open-variant text-2xl opacity-80"})]),t._v("\n        Transparencia\n      ")])]),t._v(" "),n("nuxt-link",{attrs:{to:{name:"demo"}}},[n("div",{staticClass:"\n          bg-white\n          rounded-lg\n          shadow\n          h-10\n          w-full\n          flex\n          pr-4\n          items-center\n          overflow-hidden\n        "},[n("div",{staticClass:"\n            bg-red-900\n            text-red-200\n            w-10\n            justify-center\n            h-10\n            flex\n            items-center\n            mr-3\n          "},[n("i",{staticClass:"mdi mdi-newspaper text-2xl opacity-80"})]),t._v("\n        Gaceta Municipal\n      ")])]),t._v(" "),n("nuxt-link",{attrs:{to:{name:"demo"}}},[n("div",{staticClass:"\n          bg-white\n          rounded-lg\n          shadow\n          h-10\n          w-full\n          flex\n          pr-4\n          items-center\n          overflow-hidden\n        "},[n("div",{staticClass:"\n            bg-red-900\n            text-red-200\n            w-10\n            justify-center\n            h-10\n            flex\n            items-center\n            mr-3\n          "},[n("i",{staticClass:"mdi mdi-calendar-clock text-2xl opacity-80"})]),t._v("\n        Agenda\n      ")])])],1),t._v(" "),n("bottom-bar")],1)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"px-3 mt-5 mb-3 text-gray-700"},[n("h1",{staticClass:"text-xl font-bold"},[t._v("Últimas Noticias")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"px-3 mt-2 mb-3 text-gray-700"},[n("h1",{staticClass:"text-xl font-bold"},[t._v("Acceso Rápido")])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{TopBar:n(291).default,TopAdvice:n(293).default,RecentNews:n(310).default,ShortCuts:n(311).default,BottomBar:n(292).default})}}]);