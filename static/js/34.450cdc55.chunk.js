(this["webpackJsonpdashtar-admin"]=this["webpackJsonpdashtar-admin"]||[]).push([[34],{948:function(e,t,r){"use strict";r.r(t);var a=r(9),n=r(0),s=r(2),c=r(1),i=function(e){var t=e.children;return Object(c.jsx)("main",{className:"h-full overflow-y-auto",children:Object(c.jsx)("div",{className:"container grid px-6 mx-auto",children:t})})},o=Object(n.lazy)((function(){return Promise.all([r.e(0),r.e(1),r.e(5),r.e(18),r.e(31)]).then(r.bind(null,949))})),l=Object(n.lazy)((function(){return Promise.all([r.e(0),r.e(1),r.e(2),r.e(3),r.e(10)]).then(r.bind(null,944))})),d=Object(n.lazy)((function(){return Promise.all([r.e(0),r.e(1),r.e(2),r.e(4),r.e(15)]).then(r.bind(null,945))})),b=Object(n.lazy)((function(){return Promise.all([r.e(0),r.e(1),r.e(2),r.e(3),r.e(11)]).then(r.bind(null,952))})),j=Object(n.lazy)((function(){return Promise.all([r.e(0),r.e(1),r.e(2),r.e(3),r.e(12)]).then(r.bind(null,953))})),x=Object(n.lazy)((function(){return Promise.all([r.e(0),r.e(1),r.e(2),r.e(3),r.e(14)]).then(r.bind(null,957))})),m=Object(n.lazy)((function(){return Promise.all([r.e(0),r.e(1),r.e(3),r.e(22)]).then(r.bind(null,961))})),h=Object(n.lazy)((function(){return Promise.all([r.e(0),r.e(1),r.e(24)]).then(r.bind(null,962))})),g=Object(n.lazy)((function(){return Promise.all([r.e(0),r.e(1),r.e(3),r.e(33),r.e(27)]).then(r.bind(null,958))})),u=Object(n.lazy)((function(){return Promise.all([r.e(0),r.e(1),r.e(4),r.e(17),r.e(25)]).then(r.bind(null,950))})),p=Object(n.lazy)((function(){return Promise.all([r.e(0),r.e(1),r.e(2),r.e(3),r.e(13)]).then(r.bind(null,954))})),O=Object(n.lazy)((function(){return Promise.all([r.e(0),r.e(1),r.e(2),r.e(3),r.e(9)]).then(r.bind(null,946))})),y=Object(n.lazy)((function(){return Promise.all([r.e(0),r.e(1),r.e(3),r.e(23)]).then(r.bind(null,963))})),f=Object(n.lazy)((function(){return Promise.all([r.e(0),r.e(1),r.e(2),r.e(3),r.e(20)]).then(r.bind(null,951))})),N=Object(n.lazy)((function(){return r.e(6).then(r.bind(null,960))})),A=Object(n.lazy)((function(){return Promise.all([r.e(0),r.e(2),r.e(4),r.e(16),r.e(26)]).then(r.bind(null,947))})),k=function(e){return[{path:"/dashboard",component:o},{path:"/products",component:"Admin"==e?l:null},{path:"/product/:id",component:"Admin"==e?d:null},{path:"/banners",component:"Admin"==e?b:null},{path:"/category",component:"Admin"==e?j:null},{path:"/customers",component:"Admin"==e?m:null},{path:"/customer-order/:id",component:"Admin"==e?h:null},{path:"/our-staff",component:"Admin"==e?x:null},{path:"/orders",component:"Admin"==e?g:null},{path:"/order/:id",component:"Admin"==e?u:null},{path:"/coupons",component:"Admin"==e?p:null},{path:"/inventory",component:"Admin"==e?O:null},{path:"/enquiries",component:"Admin"==e?y:null},{path:"/notifications",component:"Admin"==e?f:null},{path:"/404",component:N},{path:"/edit-profile",component:A}]},v=r(7),S=r(14),I=r(15),w=r.n(I),C=r(20),D=r(537),z=r.n(D),B=r(558),Q=r(10),H=r(21),W=function(){var e=Object(n.useContext)(H.a).toggleSidebar,t=Object(n.useContext)(Q.a),r=t.state,a=t.dispatch,s=r.adminInfo,i=Object(n.useContext)(C.WindmillContext),o=i.mode,l=i.toggleMode,d=Object(n.useState)(!1),b=Object(v.a)(d,2),j=b[0],x=b[1],m=Object(n.useState)(!1),h=Object(v.a)(m,2),g=h[0],u=h[1],p=Object(n.useRef)(),O=Object(n.useRef)();Object(n.useEffect)((function(){document.addEventListener("mousedown",(function(e){var t,r;null!==p&&void 0!==p&&null!==(t=p.current)&&void 0!==t&&t.contains(e.target)||x(!1),null!==O&&void 0!==O&&null!==(r=O.current)&&void 0!==r&&r.contains(e.target)||u(!1)}))}),[p,O]);return Object(c.jsx)(c.Fragment,{children:Object(c.jsx)("header",{className:"z-40 py-4 bg-white shadow-sm dark:bg-gray-800",children:Object(c.jsxs)("div",{className:"container flex items-center justify-between h-full px-6 mx-auto text-green-500 dark:text-green-500",children:[Object(c.jsx)("button",{className:"p-1 mr-5 -ml-1 rounded-md lg:hidden focus:outline-none",onClick:e,"aria-label":"Menu",children:Object(c.jsx)(B.f,{className:"w-6 h-6","aria-hidden":"true"})}),Object(c.jsx)("span",{}),Object(c.jsxs)("ul",{className:"flex justify-end items-center flex-shrink-0 space-x-6",children:[Object(c.jsx)("li",{className:"flex",children:Object(c.jsx)("button",{className:"rounded-md focus:outline-none",onClick:l,"aria-label":"Toggle color mode",children:"dark"===o?Object(c.jsx)(B.j,{className:"w-5 h-5","aria-hidden":"true"}):Object(c.jsx)(B.g,{className:"w-5 h-5","aria-hidden":"true"})})}),Object(c.jsxs)("li",{className:"relative inline-block text-left",ref:O,children:[Object(c.jsxs)("button",{className:"relative align-middle rounded-md focus:outline-none",onClick:function(){u(!g),x(!1)},children:[Object(c.jsx)(B.h,{className:"w-5 h-5","aria-hidden":"true"}),Object(c.jsx)("span",{className:"absolute z-10 top-0 right-0 inline-flex items-center justify-center p-1 h-5 w-5 text-xs font-medium leading-none text-red-100 transform -translate-x-1/2 -translate-y-1/2 bg-red-500 rounded-full",children:"6"})]}),g&&Object(c.jsx)(c.Fragment,{children:Object(c.jsx)("div",{className:"origin-top-right absolute right-0 mt-2 rounded-md shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5 focus:outline-none",children:Object(c.jsx)("div",{className:"notification-box",children:Object(c.jsx)(z.a,{children:Object(c.jsxs)("ul",{className:"block text-sm border-t border-gray-100 dark:border-gray-700 rounded-md",children:[Object(c.jsxs)("li",{className:"flex justify-between items-center font-serif font-normal text-sm py-3 border-b border-gray-100 dark:border-gray-700 px-3 transition-colors duration-150 hover:bg-gray-50 hover:text-gray-800 dark:text-gray-400 dark:hover:bg-gray-900 dark:hover:text-gray-100 cursor-pointer",children:[Object(c.jsxs)("div",{className:"flex items-center",children:[Object(c.jsx)(C.Avatar,{className:"p-1 mr-2 md:block bg-gray-50 border border-gray-200",src:"https://i.postimg.cc/tCsSNSxS/Yellow-Sweet-Corn-Bag-each.jpg",alt:"image"}),Object(c.jsxs)("div",{className:"notification-content",children:[Object(c.jsx)("h6",{className:"font-medium text-gray-500",children:"Yellow Sweet Corn Stock out, please check!"}),Object(c.jsxs)("p",{className:"flex items-center text-xs text-gray-400",children:[Object(c.jsx)(C.Badge,{type:"danger",children:"Stock Out"}),Object(c.jsx)("span",{className:"ml-2",children:"Dec 12 2021 - 12:40PM"})]})]})]}),Object(c.jsx)("span",{className:"px-2",children:Object(c.jsx)(B.b,{})})]}),Object(c.jsxs)("li",{className:"flex justify-between items-center font-serif font-normal text-sm py-3 border-b border-gray-100 dark:border-gray-700 px-3 transition-colors duration-150 hover:bg-gray-50 hover:text-gray-800 dark:text-gray-400 dark:hover:bg-gray-900 dark:hover:text-gray-100 cursor-pointer",children:[Object(c.jsxs)("div",{className:"flex items-center",children:[Object(c.jsx)(C.Avatar,{className:"mr-2 md:block bg-gray-50 border border-gray-200",src:"https://i.ibb.co/ZTWbx5z/team-1.jpg",alt:"image"}),Object(c.jsxs)("div",{className:"notification-content",children:[Object(c.jsxs)("h6",{className:"font-medium text-gray-500",children:["Sam L. Placed"," ",Object(c.jsx)("span",{className:"font-bold",children:"$300"})," USD order!"]}),Object(c.jsxs)("p",{className:"flex items-center text-xs text-gray-400",children:[Object(c.jsx)(C.Badge,{type:"success",children:"New Order"}),Object(c.jsx)("span",{className:"ml-2",children:"Nov 30 2021 - 2:40PM"})]})]})]}),Object(c.jsx)("span",{className:"px-2",children:Object(c.jsx)(B.b,{})})]}),Object(c.jsxs)("li",{className:"flex justify-between items-center font-serif font-normal text-sm py-3 border-b border-gray-100 dark:border-gray-700 px-3 transition-colors duration-150 hover:bg-gray-50 hover:text-gray-800 dark:text-gray-400 dark:hover:bg-gray-900 dark:hover:text-gray-100 cursor-pointer",children:[Object(c.jsxs)("div",{className:"flex items-center",children:[Object(c.jsx)(C.Avatar,{className:"p-1 mr-2 md:block bg-gray-50 border border-gray-200",src:"https://i.postimg.cc/5y7rNDFv/Radicchio-12ct.jpg",alt:"image"}),Object(c.jsxs)("div",{className:"notification-content",children:[Object(c.jsx)("h6",{className:"font-medium text-gray-500",children:"Radicchio Stock out, please check!"}),Object(c.jsxs)("p",{className:"flex items-center text-xs text-gray-400",children:[Object(c.jsx)(C.Badge,{type:"danger",children:"Stock Out"}),Object(c.jsx)("span",{className:"ml-2",children:"Dec 15 2021 - 12:40PM"})]})]})]}),Object(c.jsx)("span",{className:"px-2",children:Object(c.jsx)(B.b,{})})]}),Object(c.jsxs)("li",{className:"flex justify-between items-center font-serif font-normal text-sm py-3 border-b border-gray-100 dark:border-gray-700 px-3 transition-colors duration-150 hover:bg-gray-50 hover:text-gray-800 dark:text-gray-400 dark:hover:bg-gray-900 dark:hover:text-gray-100 cursor-pointer",children:[Object(c.jsxs)("div",{className:"flex items-center",children:[Object(c.jsx)(C.Avatar,{className:"mr-2 md:block bg-gray-50 border border-gray-200",src:"https://i.postimg.cc/SNmQX9Yx/Organic-Baby-Carrot-1oz.jpg",alt:"image"}),Object(c.jsxs)("div",{className:"notification-content",children:[Object(c.jsx)("h6",{className:"font-medium text-gray-500",children:"Organic Baby Carrot Stock out, please check!"}),Object(c.jsxs)("p",{className:"flex items-center text-xs text-gray-400",children:[Object(c.jsx)(C.Badge,{type:"danger",children:"Stock Out"}),Object(c.jsx)("span",{className:"ml-2",children:"Dec 20 2021 - 12:40PM"})]})]})]}),Object(c.jsx)("span",{className:"px-2",children:Object(c.jsx)(B.b,{})})]}),Object(c.jsxs)("li",{className:"flex justify-between items-center font-serif font-normal text-sm py-3 border-b border-gray-100 dark:border-gray-700 px-3 transition-colors duration-150 hover:bg-gray-50 hover:text-gray-800 dark:text-gray-400 dark:hover:bg-gray-900 dark:hover:text-gray-100 cursor-pointer",children:[Object(c.jsxs)("div",{className:"flex items-center",children:[Object(c.jsx)(C.Avatar,{className:"mr-2 md:block bg-gray-50 border border-gray-200",src:"https://i.postimg.cc/nM8QfhcP/Orange-20ct.jpg",alt:"image"}),Object(c.jsxs)("div",{className:"notification-content",children:[Object(c.jsx)("h6",{className:"font-medium text-gray-500",children:"Orange Stock out, please check!"}),Object(c.jsxs)("p",{className:"flex items-center text-xs text-gray-400",children:[Object(c.jsx)(C.Badge,{type:"danger",children:"Stock Out"}),Object(c.jsx)("span",{className:"ml-2",children:"Dec 25 2021 - 12:40PM"})]})]})]}),Object(c.jsx)("span",{className:"px-2",children:Object(c.jsx)(B.b,{})})]}),Object(c.jsxs)("li",{className:"flex justify-between items-center font-serif font-normal text-sm py-3 border-b border-gray-100 dark:border-gray-700 px-3 transition-colors duration-150 hover:bg-gray-50 hover:text-gray-800 dark:text-gray-400 dark:hover:bg-gray-900 dark:hover:text-gray-100 cursor-pointer",children:[Object(c.jsxs)("div",{className:"flex items-center",children:[Object(c.jsx)(C.Avatar,{className:"mr-2 md:block bg-gray-50 border border-gray-200",src:"https://i.ibb.co/GWVWYNn/team-7.jpg",alt:"Josh"}),Object(c.jsxs)("div",{className:"notification-content",children:[Object(c.jsxs)("h6",{className:"font-medium text-gray-500",children:["John Doe Placed"," ",Object(c.jsx)("span",{className:"font-bold",children:"$513"})," USD order!"]}),Object(c.jsxs)("p",{className:"flex items-center text-xs text-gray-400",children:[Object(c.jsx)(C.Badge,{type:"success",children:"New Order"}),Object(c.jsx)("span",{className:"ml-2",children:"Dec 18 2021 - 12:40PM"})]})]})]}),Object(c.jsx)("span",{className:"px-2",children:Object(c.jsx)(B.b,{})})]})]})})})})})]}),Object(c.jsxs)("li",{className:"relative inline-block text-left",ref:p,children:[Object(c.jsx)("button",{className:"rounded-full dark:bg-gray-500 bg-green-500 text-white h-8 w-8 font-medium mx-auto focus:outline-none",onClick:function(){x(!j),u(!1)},children:s.image?Object(c.jsx)(C.Avatar,{className:"align-middle",src:"".concat(s.image),"aria-hidden":"true"}):Object(c.jsx)("span",{children:s.email[0].toUpperCase()})}),j&&Object(c.jsxs)("ul",{className:"origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5 focus:outline-none",children:[Object(c.jsx)("li",{className:"justify-between font-serif font-medium py-2 pl-4 transition-colors duration-150 hover:bg-gray-100 text-gray-500 hover:text-green-500 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-200",children:Object(c.jsx)(S.b,{to:"/dashboard",children:Object(c.jsxs)("span",{className:"flex items-center text-sm",children:[Object(c.jsx)(B.d,{className:"w-4 h-4 mr-3","aria-hidden":"true"}),Object(c.jsx)("span",{children:"Dashboard"})]})})}),Object(c.jsx)("li",{className:"justify-between font-serif font-medium py-2 pl-4 transition-colors duration-150 hover:bg-gray-100 text-gray-500 hover:text-green-500 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-200",children:Object(c.jsx)(S.b,{to:"/edit-profile",children:Object(c.jsxs)("span",{className:"flex items-center text-sm",children:[Object(c.jsx)(B.i,{className:"w-4 h-4 mr-3","aria-hidden":"true"}),Object(c.jsx)("span",{children:"Edit Profile"})]})})}),Object(c.jsx)("li",{onClick:function(){a({type:"USER_LOGOUT"}),w.a.remove("adminInfo")},className:"cursor-pointer justify-between font-serif font-medium py-2 pl-4 transition-colors duration-150 hover:bg-gray-100 text-gray-500 hover:text-green-500 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-200",children:Object(c.jsxs)("span",{className:"flex items-center text-sm",children:[Object(c.jsx)(B.e,{className:"w-4 h-4 mr-3","aria-hidden":"true"}),Object(c.jsx)("span",{children:"Log out"})]})})]})]})]})]})})})},E=(r.p,r(54)),K=[{path:"/dashboard",icon:E.g,name:"Dashboard"},{path:"/products",icon:E.m,name:"Products"},{path:"/banners",icon:E.m,name:"Banners"},{path:"/category",icon:E.h,name:"Category"},{path:"/orders",icon:E.b,name:"Orders"},{path:"/coupons",icon:E.f,name:"Coupons"},{path:"/inventory",icon:E.l,name:"Inventory"},{path:"/enquiries",icon:E.l,name:"Enquiries"},{path:"/notifications",icon:E.e,name:"Notifications"}],Y=function(){var e=Object(n.useContext)(C.WindmillContext).mode,t=Object(n.useContext)(Q.a).dispatch;return Object(c.jsxs)("div",{className:"py-4 text-gray-500 dark:text-gray-400",children:[Object(c.jsx)("a",{className:" text-gray-900 dark:text-gray-200",href:"/dashboard",children:"dark"===e?Object(c.jsx)("p",{width:"135",className:"pl-6",children:"Indrani"}):Object(c.jsx)("img",{src:"data:image/png;base64,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",alt:"dashtar",width:"135",className:"pl-6"})}),Object(c.jsx)("ul",{className:"mt-8",style:{overflowY:"auto"},children:K.map((function(e){return Object(c.jsx)("li",{className:"relative",children:Object(c.jsxs)(S.c,{exact:!0,to:e.path,className:"px-6 py-4 inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-green-700 dark:hover:text-gray-200",activeClassName:"text-green-500 dark:text-gray-100",children:[Object(c.jsx)(s.b,{path:e.path,exact:e.exact,children:Object(c.jsx)("span",{className:"absolute inset-y-0 left-0 w-1 bg-green-500 rounded-tr-lg rounded-br-lg","aria-hidden":"true"})}),Object(c.jsx)(e.icon,{className:"w-5 h-5","aria-hidden":"true"}),Object(c.jsx)("span",{className:"ml-4",children:e.name})]})},e.name)}))}),Object(c.jsx)("span",{className:"lg:fixed bottom-0 px-6 py-6 w-64 mx-auto relative mt-3 block",children:Object(c.jsx)(C.Button,{onClick:function(){t({type:"USER_LOGOUT"}),w.a.remove("adminInfo")},size:"large",className:"w-full",children:Object(c.jsxs)("span",{className:"flex items-center",children:[Object(c.jsx)(B.e,{className:"mr-3 text-lg"}),Object(c.jsx)("span",{className:"text-sm",children:"Log out"})]})})})]})},J=function(){return Object(c.jsx)("aside",{className:"z-30 flex-shrink-0 hidden shadow-sm w-64 overflow-y-auto bg-white dark:bg-gray-800 lg:block",children:Object(c.jsx)(Y,{})})};var G=function(){var e=Object(n.useContext)(H.a),t=e.isSidebarOpen,r=e.closeSidebar;return Object(c.jsx)(C.Transition,{show:t,children:Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(C.Transition,{enter:"transition ease-in-out duration-150",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"transition ease-in-out duration-150",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:Object(c.jsx)(C.Backdrop,{onClick:r})}),Object(c.jsx)(C.Transition,{enter:"transition ease-in-out duration-150",enterFrom:"opacity-0 transform -translate-x-20",enterTo:"opacity-100",leave:"transition ease-in-out duration-150",leaveFrom:"opacity-100",leaveTo:"opacity-0 transform -translate-x-20",children:Object(c.jsx)("aside",{className:"fixed inset-y-0 z-50 flex-shrink-0 w-64 mt-16 overflow-y-auto bg-white dark:bg-gray-800 lg:hidden",children:Object(c.jsx)(Y,{})})})]})})},R=function(){return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(J,{}),Object(c.jsx)(G,{})]})},F=r(29),U=Object(n.lazy)((function(){return r.e(6).then(r.bind(null,960))}));t.default=function(){var e=Object(n.useContext)(Q.a).state.adminInfo;console.log(e);var t=Object(n.useContext)(H.a),r=t.isSidebarOpen,o=t.closeSidebar,l=Object(s.h)();return Object(n.useEffect)((function(){o()}),[l]),Object(c.jsxs)("div",{className:"flex h-screen bg-gray-50 dark:bg-gray-900 ".concat(r&&"overflow-hidden"),children:[Object(c.jsx)(R,{}),Object(c.jsxs)("div",{className:"flex flex-col flex-1 w-full",children:[Object(c.jsx)(W,{}),Object(c.jsx)(i,{children:Object(c.jsx)(n.Suspense,{fallback:Object(c.jsx)(F.a,{}),children:Object(c.jsxs)(s.d,{children:[k(null===e||void 0===e?void 0:e.role).map((function(t,r){return console.log(e),t.component?Object(c.jsx)(s.b,{exact:!0,path:"".concat(t.path),render:function(e){return Object(c.jsx)(t.component,Object(a.a)({},e))}},r):null})),Object(c.jsx)(s.a,{exact:!0,from:"/",to:"/dashboard"}),Object(c.jsx)(s.b,{component:U})]})})})]})]})}}}]);
//# sourceMappingURL=34.450cdc55.chunk.js.map