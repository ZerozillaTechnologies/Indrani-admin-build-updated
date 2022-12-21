(this["webpackJsonpdashtar-admin"]=this["webpackJsonpdashtar-admin"]||[]).push([[31],{50:function(e,t,r){"use strict";var a=r(9),n=r(59),c=r.n(n),s=r(15),l=r.n(s),i=c.a.create({baseURL:"http://192.81.213.186:5000",timeout:5e5,headers:{Accept:"application/json","Content-Type":"application/json"}});i.interceptors.request.use((function(e){var t;return l.a.get("adminInfo")&&(t=JSON.parse(l.a.get("adminInfo"))),Object(a.a)(Object(a.a)({},e),{},{headers:{authorization:t?"Bearer ".concat(t.token):null}})}));var o=function(e){return e.data},d={get:function(e,t,r){return i.get(e,t,r).then(o)},post:function(e,t,r){return i.post(e,t,r).then(o)},put:function(e,t,r){return i.put(e,t,r).then(o)},patch:function(e,t,r){return i.patch(e,t,r).then(o)},delete:function(e,t){return i.delete(e,t).then(o)}};t.a=d},535:function(e,t,r){"use strict";var a=r(50),n={getAllOrders:function(e){return a.a.get("/orders?admin=1",e)},getOrderByUser:function(e,t){return a.a.get("/orders/user/".concat(e,"?admin=1"),t)},getOrderById:function(e,t){return a.a.get("/admin/orders/".concat(e,"?admin=1"),t)},updateOrder:function(e,t,r){return a.a.put("/orders/".concat(e,"?admin=1"),t)},deleteOrder:function(e){return a.a.delete("/orders/".concat(e,"?admin=1"))},getAllRentalsOrders:function(e){return a.a.get("/rentals?admin=1",e)}};t.a=n},544:function(e,t,r){"use strict";r(0);var a=r(20),n=r(1);t.a=function(e){var t=e.status;return Object(n.jsx)(n.Fragment,{children:Object(n.jsxs)("span",{className:"font-serif",children:["pending"===t&&Object(n.jsx)(a.Badge,{type:"warning",children:t}),"processing"===t&&Object(n.jsx)(a.Badge,{children:t}),"delivered"===t&&Object(n.jsx)(a.Badge,{type:"success",children:t}),"cancel"===t&&Object(n.jsx)(a.Badge,{type:"danger",children:t})]})})}},56:function(e,t,r){"use strict";var a=r(7),n=r(59),c=r.n(n),s=r(0),l=r(21);t.a=function(e){var t=Object(s.useState)([]||!1),r=Object(a.a)(t,2),n=r[0],i=r[1],o=Object(s.useState)(""),d=Object(a.a)(o,2),u=d[0],b=d[1],j=Object(s.useState)(!0),O=Object(a.a)(j,2),g=O[0],x=O[1],h=Object(s.useContext)(l.a),f=h.isUpdate,m=h.setIsUpdate;return Object(s.useEffect)((function(){var t=!1,r=c.a.CancelToken.source();return e({cancelToken:r.token}).then((function(e){t||(i(e),b(""),x(!1))})).catch((function(e){t||(b(e.message),c.a.isCancel(e),b(e.message),x(!1),i([]))})),m(!1),function(){t=!0,r.cancel("Cancelled in cleanup")}}),[f]),{data:n,error:u,loading:g}}},69:function(e,t,r){"use strict";r(0);var a=r(1);t.a=function(e){var t=e.children;return Object(a.jsx)("h1",{className:"my-6 text-lg font-bold text-gray-700 dark:text-gray-300",children:t})}},71:function(e,t,r){"use strict";r(0);var a=r(523),n=r.n(a),c=r(1);t.a=function(e){var t=e.loading;return Object(c.jsx)("div",{className:"text-lg text-center py-6",children:Object(c.jsx)(n.a,{color:"#34D399",loading:t,height:25,width:3,radius:3,margin:4})})}},75:function(e,t,r){"use strict";var a=r(7),n=r(72),c=r(521),s=r.n(c),l=r(522),i=r.n(l),o=r(0),d=r(2),u=r(22);t.a=function(e){var t=Object(o.useState)(""),r=Object(a.a)(t,2),c=r[0],l=r[1],b=Object(o.useState)(""),j=Object(a.a)(b,2),O=j[0],g=j[1],x=Object(o.useState)(""),h=Object(a.a)(x,2),f=h[0],m=h[1],p=Object(o.useState)(""),v=Object(a.a)(p,2),y=v[0],C=v[1],w=Object(o.useState)(""),k=Object(a.a)(w,2),N=k[0],T=k[1],S=Object(o.useState)(""),D=Object(a.a)(S,2),R=D[0],B=D[1],F=Object(o.useState)(""),L=Object(a.a)(F,2),P=L[0],I=L[1],A=Object(o.useState)([]),M=Object(a.a)(A,2),E=M[0],U=M[1],q=Object(o.useState)([]),J=Object(a.a)(q,2),W=J[0],Y=J[1],_=Object(o.useState)([]),H=Object(a.a)(_,2),V=H[0],z=H[1],G=Object(o.useState)(""),K=Object(a.a)(G,2),Q=K[0],X=K[1],Z=Object(o.useState)(""),$=Object(a.a)(Z,2),ee=$[0],te=$[1],re=Object(o.useState)(""),ae=Object(a.a)(re,2),ne=ae[0],ce=ae[1],se=Object(o.useState)(1),le=Object(a.a)(se,2),ie=le[0],oe=le[1],de=Object(o.useState)([]),ue=Object(a.a)(de,2),be=ue[0],je=ue[1],Oe=Object(o.useState)(""),ge=Object(a.a)(Oe,2),xe=ge[0],he=ge[1],fe=Object(o.useState)(""),me=Object(a.a)(fe,2),pe=me[0],ve=me[1],ye=Object(o.useState)(""),Ce=Object(a.a)(ye,2),we=Ce[0],ke=Ce[1],Ne=Object(o.useState)([]),Te=Object(a.a)(Ne,1)[0],Se=Object(o.useRef)(""),De=Object(o.useRef)(""),Re=Object(o.useRef)(""),Be=Object(o.useRef)(""),Fe=Object(o.useRef)("");n.extend(s.a),n.extend(i.a);var Le=Object(d.h)(),Pe=Object(o.useMemo)((function(){var t=new Date;t.setDate(t.getDate()-ne);var r,a=e;if(console.log(e),"/dashboard"===Le.pathname){var s=a.filter((function(e){return"pending"===e.status}));U(s);var l=a.filter((function(e){return"processing"===e.status}));Y(l);var i=a.filter((function(e){return"delivered"===e.status}));z(i);var o=a.filter((function(e){return n(e.createdAt).isToday()})).reduce((function(e,t){return e+t.total}),0);he(o);var d=a.filter((function(e){return n(e.createdAt).isBetween((new Date).setDate((new Date).getDate()-30),new Date)})).reduce((function(e,t){return e+t.total}),0);ve(d);var u=a.reduce((function(e,t){return e+t.total}),0);ke(u)}(c&&(a=a.filter((function(e){return e.parent===c}))),"Low"===O&&(a=a.sort((function(e,t){return e.price<t.price&&-1}))),"High"===O&&(a=a.sort((function(e,t){return e.price>t.price&&-1}))),f&&(a=a.filter((function(e){return e.title.toLowerCase().includes(f.toLowerCase())}))),P&&(a=a.filter((function(e){return e.type.toLowerCase().includes(P.toLowerCase())}))),ee&&(a=a.filter((function(e){return e.role===ee}))),y&&(a=a.filter((function(e){var t,r;return e.name.toLowerCase().includes(y.toLowerCase())||(null===e||void 0===e||null===(t=e.phone)||void 0===t?void 0:t.toLowerCase().includes(y.toLowerCase()))||(null===e||void 0===e||null===(r=e.email)||void 0===r?void 0:r.toLowerCase().includes(y.toLowerCase()))}))),N&&(a=a.filter((function(e){return e.title.toLowerCase().includes(N.toLowerCase())||e.couponCode.toLowerCase().includes(N.toLowerCase())}))),Q)&&(a=null===(r=a)||void 0===r?void 0:r.filter((function(e){return e.status===Q})));return R&&(a=a.filter((function(e){return e.contact.toLowerCase().includes(R.toLowerCase())}))),ne&&(a=a.filter((function(e){return n(e.createdAt).isBetween(t,new Date)}))),a}),[c,O,e,f,y,N,R,P,Q,ee,ne,Le]),Ie=Pe.length;Object(o.useEffect)((function(){if(Pe){console.log(Pe);var e=Pe.slice(8*(ie-1),8*ie);je(e)}}),[Pe,ie,8]);return{userRef:De,searchRef:Se,couponRef:Re,orderRef:Be,categoryRef:Fe,pending:E,processing:W,delivered:V,todayOrder:xe,monthlyOrder:pe,totalOrder:we,setFilter:l,setSortedField:g,setStatus:X,setRole:te,setTime:ce,handleChangePage:function(e){oe(e)},totalResults:Ie,resultsPerPage:8,dataTable:be,serviceData:Pe,handleSubmitUser:function(e){e.preventDefault(),C(De.current.value)},handleSubmitForAll:function(e){e.preventDefault(),m(Se.current.value)},handleSubmitCoupon:function(e){e.preventDefault(),T(Re.current.value)},handleSubmitOrder:function(e){e.preventDefault(),B(Be.current.value)},handleSubmitCategory:function(e){e.preventDefault(),I(Fe.current.value)},handleOnDrop:function(e){for(var t=0;t<e.length;t++)Te.push(e[t].data)},handleUploadProducts:function(){Te.length<1?Object(u.b)("Please upload/select csv file first!"):Object(u.c)("CRUD operation disable for demo!")}}}},947:function(e,t,r){"use strict";r.r(t);var a=r(9),n=(r(0),r(704)),c=r(20),s=r(581),l=r(54),i=[{title:"Men's",color:"bg-green-500"},{title:"Women's",color:"bg-blue-500"},{title:"Saree",color:"bg-orange-500"},{title:"Blouse",color:"bg-indigo-500"}],o=[{title:"Men's",color:"bg-green-500"},{title:"Women's",color:"bg-blue-500"},{title:"Saree",color:"bg-orange-500"},{title:"Blouse",color:"bg-indigo-500"}],d={data:{datasets:[{data:[35,30,15,20],backgroundColor:["#10B981","#3B82F6","#F97316","#0EA5E9"],label:"Dataset 1"}],labels:["Fresh Vegetable","Cooking Essentials","Drinks","Organic Food"]},options:{responsive:!0,cutoutPercentage:80},legend:{display:!1}},u={data:{labels:["January","February","March","April","May","June","July"],datasets:[{label:"Fresh Vegetable",backgroundColor:"#10B981",borderWidth:1,data:[15,35,45,40,70,85,90]},{label:"Cooking Essentials",backgroundColor:"#3B82F6",borderWidth:1,data:[5,25,50,35,24,32,84]},{label:"Drinks",backgroundColor:"#F97316",borderWidth:1,data:[10,45,52,74,33,50,70]},{label:"Organic Food",backgroundColor:"#0EA5E9",borderWidth:1,data:[20,35,30,74,33,40,70]}]},options:{responsive:!0},legend:{display:!1}},b=r(56),j=r(75),O=r(535),g=r(71),x=r(1),h=function(e){var t=e.children,r=e.title;return Object(x.jsxs)("div",{className:"min-w-0 p-4 bg-white rounded-lg shadow-xs dark:bg-gray-800",children:[Object(x.jsx)("p",{className:"mb-4 font-semibold text-gray-800 dark:text-gray-300",children:r}),t]})},f=function(e){var t=e.title,r=e.Icon,a=e.quantity,n=e.className;return Object(x.jsx)(x.Fragment,{children:Object(x.jsx)(c.Card,{className:"flex h-full",children:Object(x.jsxs)(c.CardBody,{className:"flex items-center border border-gray-200 dark:border-gray-800 w-full rounded-lg",children:[Object(x.jsx)("div",{className:"flex items-center justify-center p-3 rounded-full h-12 w-12 text-center mr-4 text-lg ".concat(n),children:Object(x.jsx)(r,{})}),Object(x.jsxs)("div",{children:[Object(x.jsx)("p",{className:"mb-1 text-sm font-medium text-gray-600 dark:text-gray-400",children:t}),Object(x.jsx)("p",{className:"text-2xl font-bold leading-none text-gray-600 dark:text-gray-200",children:a})]})]})})})},m=function(e){var t=e.legends;return Object(x.jsx)("div",{className:"flex justify-center mt-4 space-x-3 text-sm text-gray-600 dark:text-gray-400",children:t.map((function(e){return Object(x.jsxs)("div",{className:"flex items-center",children:[Object(x.jsx)("span",{className:"inline-block w-3 h-3 mr-1 ".concat(e.color," rounded-full")}),Object(x.jsx)("span",{children:e.title})]},e.title)}))})},p=r(69),v=r(72),y=r(544),C=function(e){var t=e.orders;return Object(x.jsx)(x.Fragment,{children:Object(x.jsx)(c.TableBody,{children:null===t||void 0===t?void 0:t.map((function(e){return Object(x.jsxs)(c.TableRow,{children:[Object(x.jsx)(c.TableCell,{children:Object(x.jsx)("span",{className:"text-sm",children:v(e.created_at).format("MMM D, YYYY")})}),Object(x.jsx)(c.TableCell,{children:Object(x.jsx)("span",{className:"text-sm ",children:e.customerDetails.address.district})}),Object(x.jsxs)(c.TableCell,{children:[Object(x.jsx)("div",{children:e.customerDetails.name})," ",Object(x.jsx)("div",{className:"text-sm",children:e.customerDetails.email})," ",Object(x.jsx)("div",{className:"text-sm",children:e.customerDetails.phoneno})," "]}),Object(x.jsx)(c.TableCell,{children:Object(x.jsx)("span",{className:"text-sm font-semibold",children:e.product_name})}),Object(x.jsx)(c.TableCell,{children:Object(x.jsx)("span",{className:"text-sm font-semibold",children:e.payment_method})}),Object(x.jsxs)(c.TableCell,{children:[" ",Object(x.jsxs)("span",{className:"text-sm font-semibold",children:["\u20b9 ",Math.round(e.total_amount),".00"]})," "]}),Object(x.jsx)(c.TableCell,{children:Object(x.jsx)(y.a,{status:e.status})})]},e._id)}))})})},w=function(e){var t=e.title,r=e.Icon,a=e.className,n=e.price;return Object(x.jsx)(x.Fragment,{children:Object(x.jsx)(c.Card,{className:"flex justify-center text-center h-full",children:Object(x.jsxs)(c.CardBody,{className:"border border-gray-200 dark:border-gray-800 w-full p-6 rounded-lg ".concat(a),children:[Object(x.jsx)("div",{className:"text-center inline-block text-3xl ".concat(a),children:Object(x.jsx)(r,{})}),Object(x.jsxs)("div",{children:[Object(x.jsx)("p",{className:"mb-3 text-base font-medium text-gray-50 dark:text-gray-100",children:t}),Object(x.jsxs)("p",{className:"text-3xl font-bold leading-none text-gray-50 dark:text-gray-50",children:["\u20b9 ",Math.round(n)]})]})]})})})};t.default=function(){var e=Object(b.a)(O.a.getAllOrders),t=e.data,r=e.loading,v=Object(j.a)(t),y=v.handleChangePage,k=v.totalResults,N=v.resultsPerPage,T=v.dataTable,S=v.pending,D=v.processing,R=v.delivered,B=v.todayOrder,F=v.monthlyOrder,L=v.totalOrder;return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(p.a,{children:"Dashboard Overview"}),Object(x.jsxs)("div",{className:"grid gap-4 mb-8 md:grid-cols-3 xl:grid-cols-3",children:[Object(x.jsx)(w,{title:"Today Order",Icon:s.d,price:B,className:"text-white dark:text-green-100 bg-teal-500"}),Object(x.jsx)(w,{title:"This Month",Icon:l.n,price:F,className:"text-white dark:text-green-100 bg-blue-500"}),Object(x.jsx)(w,{title:"Total Order",Icon:s.a,price:L,className:"text-white dark:text-green-100 bg-green-500"})]}),Object(x.jsxs)("div",{className:"grid gap-4 md:grid-cols-2 xl:grid-cols-4",children:[Object(x.jsx)(f,{title:"Total Order",Icon:l.n,quantity:t.length,className:"text-orange-600 dark:text-orange-100 bg-orange-100 dark:bg-orange-500"}),Object(x.jsx)(f,{title:"Order Pending",Icon:l.k,quantity:S.length,className:"text-blue-600 dark:text-blue-100 bg-blue-100 dark:bg-blue-500"}),Object(x.jsx)(f,{title:"Order Processing",Icon:l.p,quantity:D.length,className:"text-teal-600 dark:text-teal-100 bg-teal-100 dark:bg-teal-500"}),Object(x.jsx)(f,{title:"Order Delivered",Icon:l.a,quantity:R.length,className:"text-green-600 dark:text-green-100 bg-green-100 dark:bg-green-500"})]}),Object(x.jsxs)("div",{className:"grid gap-4 md:grid-cols-2 my-8",children:[Object(x.jsxs)(h,{title:"Conversions This Year",children:[Object(x.jsx)(n.a,Object(a.a)({},u)),Object(x.jsx)(m,{legends:o})]}),Object(x.jsxs)(h,{title:"Top Revenue Product",children:[Object(x.jsx)(n.b,Object(a.a)({},d)),Object(x.jsx)(m,{legends:i})]})]}),Object(x.jsx)(p.a,{children:"Recent Order"}),r&&Object(x.jsx)(g.a,{loading:r}),T&&!r&&Object(x.jsxs)(c.TableContainer,{className:"mb-8",children:[Object(x.jsxs)(c.Table,{children:[Object(x.jsx)(c.TableHeader,{children:Object(x.jsxs)("tr",{children:[Object(x.jsx)(c.TableCell,{children:"Order Time"}),Object(x.jsx)(c.TableCell,{children:"Delivery Address"}),Object(x.jsx)(c.TableCell,{children:"Details"}),Object(x.jsx)(c.TableCell,{children:"Product"}),Object(x.jsx)(c.TableCell,{children:"Payment method"}),Object(x.jsx)(c.TableCell,{children:"Order amount"}),Object(x.jsx)(c.TableCell,{children:"Status"})]})}),Object(x.jsx)(C,{orders:T})]}),Object(x.jsx)(c.TableFooter,{children:Object(x.jsx)(c.Pagination,{totalResults:k,resultsPerPage:N,onChange:y,label:"Table navigation"})})]})]})}}}]);
//# sourceMappingURL=31.73fe6fbf.chunk.js.map