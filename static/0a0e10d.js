(window.webpackJsonp=window.webpackJsonp||[]).push([[19,3,7,8],{240:function(t,e,n){"use strict";n.r(e);var l=n(39),component=Object(l.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"\n    w-full\n    h-14\n    bg-white\n    flex\n    items-center\n    px-4\n    overflow-hidden\n    justify-between\n    shadow\n  "},[n("div",{staticClass:"flex items-center"},["citizen"!==t.$route.name?n("button",{attrs:{to:{name:"citizen"}},on:{click:function(e){return t.$router.back()}}},[n("i",{staticClass:"mdi mdi-arrow-left text-2xl text-red-900"})]):t._e(),t._v(" "),n("nuxt-link",{attrs:{to:{name:"index"}}},[n("img",{staticClass:"h-10",attrs:{src:"/logo_half.png",alt:""}})])],1),t._v(" "),n("nuxt-link",{attrs:{to:{name:"login"}}},[n("i",{staticClass:"mdi mdi-account-circle-outline text-2xl text-red-900"})])],1)}),[],!1,null,null,null);e.default=component.exports},241:function(t,e,n){"use strict";n.r(e);var l=n(39),component=Object(l.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"\n    w-full\n    h-14\n    bg-white\n    flex\n    items-center\n    px-4\n    overflow-hidden\n    justify-between\n    fixed\n    bottom-0\n  "},[n("nuxt-link",{attrs:{to:{name:"citizen"}}},[n("i",{staticClass:"mdi mdi-home text-2xl text-red-900"})]),t._v(" "),n("nuxt-link",{attrs:{to:{name:"demo"}}},[n("i",{staticClass:"mdi mdi-bell text-2xl text-red-900"})])],1)}),[],!1,null,null,null);e.default=component.exports},242:function(t,e,n){"use strict";n.r(e);var l={data:function(){return{show:!0}}},r=n(39),component=Object(r.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"\n    w-full\n    h-8\n    text-white\n    bg-gray-800\n    text-sm\n    flex\n    px-3\n    items-center\n    mt-1\n  "},[n("div",{staticClass:"flex-grow"},[t._v("Accede para recibir notificaciones")]),t._v(" "),n("button",{on:{click:function(e){t.show=!1}}},[n("i",{staticClass:"mdi mdi-close text-lg"})])])}),[],!1,null,null,null);e.default=component.exports},273:function(t,e,n){"use strict";n.r(e);var l={head:{title:"Pago en Linea"}},r=n(39),component=Object(r.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container min-h-screen bg-gray-50 pb-16"},[n("top-bar"),t._v(" "),n("top-advice"),t._v(" "),t._m(0),t._v(" "),n("div",{staticClass:"px-3 grid grid-cols-4 gap-3"},[n("nuxt-link",{staticClass:"col-span-2",attrs:{to:{name:"payments-id",params:{id:1}}}},[n("div",{staticClass:"\n          bg-white\n          shadow-md\n          rounded-md\n          p-2\n          text-gray-700 text-center\n          h-full\n        "},[n("i",{staticClass:"mdi mdi-home-group text-2xl"}),t._v(" "),n("div",{staticClass:"text-xs"},[t._v("Predial")])])]),t._v(" "),n("nuxt-link",{staticClass:"col-span-2",attrs:{to:{name:"payments-id",params:{id:1}}}},[n("div",{staticClass:"\n          bg-white\n          shadow-md\n          rounded-md\n          p-2\n          text-gray-700 text-center\n          h-full\n        "},[n("i",{staticClass:"mdi mdi-water-check text-2xl"}),t._v(" "),n("div",{staticClass:"text-xs"},[t._v("Agua Potable")])])])],1),t._v(" "),t._m(1),t._v(" "),n("bottom-bar")],1)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"px-3 mt-5 mb-3 text-gray-700"},[n("h1",{staticClass:"text-xl font-bold"},[t._v("Pago en Linea")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"px-3 col-span-4 mt-4"},[n("div",{staticClass:"bg-green-300 text-green-800 p-3 rounded-md text-sm"},[t._v("\n      Accede con tu cuenta para consultar tu saldo en cualquiera de los\n      servicios.\n    ")])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{TopBar:n(240).default,TopAdvice:n(242).default,BottomBar:n(241).default})}}]);