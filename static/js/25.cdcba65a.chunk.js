(this["webpackJsonpdashtar-admin"]=this["webpackJsonpdashtar-admin"]||[]).push([[25],{50:function(e,t,s){"use strict";var n=s(9),c=s(60),a=s.n(c),l=s(15),r=s.n(l),i=a.a.create({baseURL:"http://192.81.213.186:5000",timeout:5e5,headers:{Accept:"application/json","Content-Type":"application/json"}});i.interceptors.request.use((function(e){var t;return r.a.get("adminInfo")&&(t=JSON.parse(r.a.get("adminInfo"))),Object(n.a)(Object(n.a)({},e),{},{headers:{authorization:t?"Bearer ".concat(t.token):null}})}));var o=function(e){return e.data},d={get:function(e,t,s){return i.get(e,t,s).then(o)},post:function(e,t,s){return i.post(e,t,s).then(o)},put:function(e,t,s){return i.put(e,t,s).then(o)},patch:function(e,t,s){return i.patch(e,t,s).then(o)},delete:function(e,t){return i.delete(e,t).then(o)}};t.a=d},540:function(e,t,s){"use strict";var n=s(50),c={getAllOrders:function(e){return n.a.get("/api/orders",e)},getOrderByUser:function(e,t){return n.a.get("/api/orders/user/".concat(e),t)},getOrderById:function(e,t){return n.a.get("/api/orders/".concat(e),t)},updateOrder:function(e,t,s){return n.a.put("/api/orders/".concat(e),t)},deleteOrder:function(e){return n.a.delete("/api/orders/".concat(e))}};t.a=c},546:function(e,t,s){"use strict";s(0);var n=s(20),c=s(1);t.a=function(e){var t=e.status;return Object(c.jsx)(c.Fragment,{children:Object(c.jsxs)("span",{className:"font-serif",children:["pending"===t&&Object(c.jsx)(n.Badge,{type:"warning",children:t}),"processing"===t&&Object(c.jsx)(n.Badge,{children:t}),"delivered"===t&&Object(c.jsx)(n.Badge,{type:"success",children:t}),"cancel"===t&&Object(c.jsx)(n.Badge,{type:"danger",children:t})]})})}},59:function(e,t,s){"use strict";var n=s(7),c=s(60),a=s.n(c),l=s(0),r=s(21);t.a=function(e){var t=Object(l.useState)([]||!1),s=Object(n.a)(t,2),c=s[0],i=s[1],o=Object(l.useState)(""),d=Object(n.a)(o,2),j=d[0],b=d[1],x=Object(l.useState)(!0),h=Object(n.a)(x,2),u=h[0],m=h[1],g=Object(l.useContext)(r.a),f=g.isUpdate,M=g.setIsUpdate;return Object(l.useEffect)((function(){var t=!1,s=a.a.CancelToken.source();return e({cancelToken:s.token}).then((function(e){t||(i(e),b(""),m(!1))})).catch((function(e){t||(b(e.message),a.a.isCancel(e),b(e.message),m(!1),i([]))})),M(!1),function(){t=!0,s.cancel("Cancelled in cleanup")}}),[f]),{data:c,error:j,loading:u}}},70:function(e,t,s){"use strict";s(0);var n=s(1);t.a=function(e){var t=e.children;return Object(n.jsx)("h1",{className:"my-6 text-lg font-bold text-gray-700 dark:text-gray-300",children:t})}},71:function(e,t,s){"use strict";s(0);var n=s(523),c=s.n(n),a=s(1);t.a=function(e){var t=e.loading;return Object(a.jsx)("div",{className:"text-lg text-center py-6",children:Object(a.jsx)(c.a,{color:"#34D399",loading:t,height:25,width:3,radius:3,margin:4})})}},809:function(e,t){},811:function(e,t){},839:function(e,t){},840:function(e,t){},905:function(e,t){},950:function(e,t,s){"use strict";s.r(t);var n=s(74),c=s.n(n),a=s(2),l=s(804),r=s.n(l),i=s(0),o=s(54),d=s(558),j=s(20),b=s(673),x=s(59),h=s(546),u=s(540),m=s(1),g=function(e){var t,s=e.data;return Object(m.jsx)(m.Fragment,{children:Object(m.jsx)(j.TableBody,{className:"bg-white dark:bg-gray-800 divide-y divide-gray-100 text-serif text-sm ",children:null===s||void 0===s||null===(t=s.cart)||void 0===t?void 0:t.map((function(e,t){return Object(m.jsxs)(j.TableRow,{className:"dark:border-gray-700 dark:text-gray-400",children:[Object(m.jsxs)(j.TableCell,{className:"px-6 py-1 whitespace-nowrap font-normal text-gray-500 text-left",children:[t+1," "]}),Object(m.jsx)(j.TableCell,{className:"px-6 py-1 whitespace-nowrap font-normal text-gray-500",children:e.product_name}),Object(m.jsxs)(j.TableCell,{className:"px-6 py-1 whitespace-nowrap font-bold text-center",children:[e.product_quantity," "]}),Object(m.jsxs)(j.TableCell,{className:"px-6 py-1 whitespace-nowrap font-bold text-center",children:["\u20b9 ",e.product_each_amount,".00"," "]}),Object(m.jsxs)(j.TableCell,{className:"px-6 py-1 whitespace-nowrap text-center font-bold text-red-500 dark:text-green-500",children:["\u20b9",e.product_total_amount,".00"]})]},t)}))})})},f=s(71),M=s.p+"static/media/logo-dark.acf69e90.svg",p=s.p+"static/media/logo-light.682a6cae.svg",y=s(70);b.b.register({family:"Open Sans",fonts:[{src:"https://cdn.jsdelivr.net/npm/open-sans-all@0.1.3/fonts/open-sans-regular.ttf"},{src:"https://cdn.jsdelivr.net/npm/open-sans-all@0.1.3/fonts/open-sans-600.ttf",fontWeight:600}]}),b.b.register({family:"DejaVu Sans",fonts:[{src:"https://kendo.cdn.telerik.com/2017.2.621/styles/fonts/DejaVu/DejaVuSans.ttf"},{src:"https://kendo.cdn.telerik.com/2017.2.621/styles/fonts/DejaVu/DejaVuSans-Bold.ttf"}]});var O=b.f.create({page:{marginRight:10,marginBottom:20,marginLeft:10,paddingTop:30,paddingLeft:10,paddingRight:60,lineHeight:1.5},table:{display:"table",width:"auto",color:"#4b5563"},tableRow:{margin:"auto",flexDirection:"row"},tableCol:{width:"15%",borderStyle:"solid",borderWidth:1,borderLeftWidth:.5,borderTopWidth:.5,borderColor:"#d1d5db"},tableCell:{margin:"auto",marginTop:5,fontSize:10},invoiceFirst:{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between",paddingBottom:20,borderBottom:.5},invoiceSecond:{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between",paddingTop:20,paddingBottom:20},invoiceThird:{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between",paddingTop:50,paddingBottom:20},logo:{width:74,height:16,bottom:5},title:{color:"#111827",fontFamily:"Open Sans",fontWeight:"bold",fontSize:13},info:{fontSize:10,color:"#374151"},amount:{fontSize:10,color:"#ef4444"},status:{color:"#10b981"},quantity:{color:"#1f2937"},header:{color:"#111827",fontSize:11,fontFamily:"Open Sans",fontWeight:"bold"}}),I=function(e){var t,s=e.data;return console.log(s),Object(m.jsx)(m.Fragment,{children:Object(m.jsx)(b.a,{children:Object(m.jsxs)(b.e,{size:"A4",style:O.page,children:[Object(m.jsxs)(b.h,{style:O.invoiceFirst,children:[Object(m.jsxs)(b.h,{children:[Object(m.jsx)(b.g,{style:{fontFamily:"Open Sans",fontWeight:"bold"},children:"INVOICE"}),Object(m.jsxs)(b.g,{style:O.info,children:["Status :"," ","pending"===s.status&&Object(m.jsx)("span",{style:{color:"#eab308"},children:s.status}),"processing"===s.status&&Object(m.jsx)("span",{style:{color:"#14b8a6"},children:s.status}),"delivered"===s.status&&Object(m.jsx)("span",{style:{color:"#22c55e"},children:s.status}),"cancel"===s.status&&Object(m.jsx)("span",{style:{color:"#f43f5e"},children:s.status})]})]}),Object(m.jsxs)(b.h,{children:[Object(m.jsx)(b.c,{style:O.logo,src:"data:image/png;base64,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"}),Object(m.jsx)(b.g,{style:O.info,children:"Cecilia Chapman, 561-4535 Nulla LA,"}),Object(m.jsx)(b.g,{style:O.info,children:" United States 96522"})]})]}),Object(m.jsxs)(b.h,{style:O.invoiceSecond,children:[Object(m.jsxs)(b.h,{children:[Object(m.jsx)(b.g,{style:O.title,children:"DATE"}),Object(m.jsx)(b.g,{style:O.info,children:void 0!==s.created_at&&Object(m.jsx)("span",{children:c()(null===s||void 0===s?void 0:s.created_at).format("MMMM D, YYYY")})})]}),Object(m.jsxs)(b.h,{children:[Object(m.jsx)(b.g,{style:O.title,children:"INVOICE NO"}),Object(m.jsx)(b.g,{style:O.info,children:"#10012"})]}),Object(m.jsxs)(b.h,{children:[Object(m.jsx)(b.g,{style:O.title,children:"INVOICE TO"}),Object(m.jsx)(b.g,{style:O.info,children:s.customerDetails.name}),Object(m.jsxs)(b.g,{style:O.info,children:[s.customerDetails.address.street,",",s.customerDetails.address.landmark,","]}),Object(m.jsxs)(b.g,{style:O.info,children:[s.customerDetails.address.city,", ",s.customerDetails.address.country,", ",s.customerDetails.address.pincode]})]})]}),Object(m.jsxs)(b.h,{style:O.table,children:[Object(m.jsxs)(b.h,{style:O.tableRow,children:[Object(m.jsx)(b.h,{style:O.tableCol,children:Object(m.jsx)(b.g,{style:O.tableCell,children:Object(m.jsx)("span",{style:O.header,children:"Sr."})})}),Object(m.jsx)(b.h,{style:O.tableCol,children:Object(m.jsx)(b.g,{style:O.tableCell,children:Object(m.jsx)("span",{style:O.header,children:"Product Name"})})}),Object(m.jsx)(b.h,{style:O.tableCol,children:Object(m.jsx)(b.g,{style:O.tableCell,children:Object(m.jsx)("span",{style:O.header,children:"Quantity"})})}),Object(m.jsx)(b.h,{style:O.tableCol,children:Object(m.jsx)(b.g,{style:O.tableCell,children:Object(m.jsx)("span",{style:O.header,children:"Item Price"})})}),Object(m.jsx)(b.h,{style:O.tableCol,children:Object(m.jsxs)(b.g,{style:O.tableCell,children:[" ",Object(m.jsx)("span",{style:O.header,children:"Amount"})]})})]}),null===s||void 0===s||null===(t=s.cart)||void 0===t?void 0:t.map((function(e,t){return Object(m.jsxs)(b.h,{style:O.tableRow,children:[Object(m.jsx)(b.h,{style:O.tableCol,children:Object(m.jsxs)(b.g,{style:O.tableCell,children:[t+1," "]})}),Object(m.jsx)(b.h,{style:O.tableCol,children:Object(m.jsxs)(b.g,{style:O.tableCell,children:[e.title," "]})}),Object(m.jsx)(b.h,{style:O.tableCol,children:Object(m.jsxs)(b.g,{style:O.tableCell,children:[" ",Object(m.jsx)("span",{style:O.quantity,children:e.quantity})," "]})}),Object(m.jsx)(b.h,{style:O.tableCol,children:Object(m.jsxs)(b.g,{style:O.tableCell,children:[" ",Object(m.jsxs)("span",{style:O.quantity,children:["\u20b9 ",e.price,".00"]})," "]})}),Object(m.jsx)(b.h,{style:O.tableCol,children:Object(m.jsxs)(b.g,{style:O.tableCell,children:[Object(m.jsxs)("span",{style:O.amount,children:["\u20b9 ",e.itemTotal,".00"]})," "]})})]},t)}))]}),Object(m.jsxs)(b.h,{style:O.invoiceThird,children:[Object(m.jsxs)(b.h,{children:[Object(m.jsx)(b.g,{style:O.title,children:" Payment Method"}),Object(m.jsxs)(b.g,{style:O.info,children:[" ",s.payment_method," "]})]}),Object(m.jsxs)(b.h,{children:[Object(m.jsx)(b.g,{style:O.title,children:"Shipping Cost"}),Object(m.jsx)(b.g,{style:O.info})]}),Object(m.jsxs)(b.h,{children:[Object(m.jsx)(b.g,{style:O.title,children:"Discount"}),Object(m.jsxs)(b.g,{style:O.info,children:[" \u20b9 ",Math.round(s.product_discount),".00"]})]}),Object(m.jsxs)(b.h,{children:[Object(m.jsx)(b.g,{style:O.title,children:"Total Amount"}),Object(m.jsxs)(b.g,{style:O.amount,children:["\u20b9 ",Math.round(s.product_price),".00"]})]})]})]})})})};t.default=function(){var e=Object(i.useContext)(j.WindmillContext).mode,t=Object(a.i)().id,s=Object(i.useRef)(),n=Object(x.a)((function(){return u.a.getOrderById(t)})),l=n.data,O=n.loading;return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(y.a,{children:"Invoice"}),Object(m.jsxs)("div",{ref:s,className:"bg-white dark:bg-gray-800 mb-4 p-6 lg:p-8 rounded-xl shadow-sm overflow-hidden",children:[!O&&Object(m.jsxs)("div",{className:"",children:[Object(m.jsxs)("div",{className:"flex lg:flex-row md:flex-row flex-col lg:items-center justify-between pb-4 border-b border-gray-50 dark:border-gray-700 dark:text-gray-300",children:[Object(m.jsxs)("h1",{className:"font-bold font-serif text-xl uppercase",children:["Invoice",Object(m.jsxs)("p",{className:"text-xs mt-1 text-gray-500",children:["Status:"," ",Object(m.jsxs)("span",{className:"pl-2 font-medium text-xs capitalize",children:[" ",Object(m.jsx)(h.a,{status:l.status})]})]})]}),Object(m.jsxs)("div",{className:"lg:text-right text-left",children:[Object(m.jsx)("h2",{className:"lg:flex lg:justify-end text-lg font-serif font-semibold mt-4 lg:mt-0 lg:ml-0 md:mt-0",children:"dark"===e?Object(m.jsx)("img",{src:p,alt:"dashtar",width:"110"}):Object(m.jsx)("img",{src:M,alt:"dashtar",width:"110"})}),Object(m.jsxs)("p",{className:"text-sm text-gray-500 dark:text-gray-400 mt-2",children:["Cecilia Chapman, 561-4535 Nulla LA, ",Object(m.jsx)("br",{})," United States 96522"," "]})]})]}),Object(m.jsxs)("div",{className:"flex lg:flex-row md:flex-row flex-col justify-between pt-4",children:[Object(m.jsxs)("div",{className:"mb-3 md:mb-0 lg:mb-0 flex flex-col",children:[Object(m.jsx)("span",{className:"font-bold font-serif text-sm uppercase text-gray-600 dark:text-gray-500 block",children:"Date"}),Object(m.jsx)("span",{className:"text-sm text-gray-500 dark:text-gray-400 block",children:void 0!==l.createdAt&&Object(m.jsx)("span",{children:c()(null===l||void 0===l?void 0:l.created_at).format("MMMM D, YYYY")})})]}),Object(m.jsxs)("div",{className:"mb-3 md:mb-0 lg:mb-0 flex flex-col",children:[Object(m.jsx)("span",{className:"font-bold font-serif text-sm uppercase text-gray-600 dark:text-gray-500 block",children:"Invoice No"}),Object(m.jsx)("span",{className:"text-sm text-gray-500 dark:text-gray-400 block",children:"#10012"})]}),Object(m.jsxs)("div",{className:"flex flex-col lg:text-right text-left",children:[Object(m.jsx)("span",{className:"font-bold font-serif text-sm uppercase text-gray-600 dark:text-gray-500 block",children:"Invoice To."}),Object(m.jsxs)("span",{className:"text-sm text-gray-500 dark:text-gray-400 block",children:[l.name,Object(m.jsx)("br",{}),l.customerDetails.address.street,", ",l.customerDetails.address.landmark,Object(m.jsx)("br",{}),l.customerDetails.address.district,", ",l.customerDetails.address.country,", ",l.customerDetails.address.pincode]})]})]})]}),Object(m.jsx)("div",{children:O?Object(m.jsx)(f.a,{loading:O}):Object(m.jsx)(j.TableContainer,{className:"my-8",children:Object(m.jsxs)(j.Table,{children:[Object(m.jsx)(j.TableHeader,{children:Object(m.jsxs)("tr",{children:[Object(m.jsx)(j.TableCell,{children:" Sr."}),Object(m.jsx)(j.TableCell,{children:"Product Name"}),Object(m.jsx)(j.TableCell,{className:"text-center",children:"Quantity"}),Object(m.jsx)(j.TableCell,{className:"text-center",children:"Item Price"}),Object(m.jsx)(j.TableCell,{className:"text-center",children:"Amount"})]})}),Object(m.jsx)(g,{data:l})]})})}),!O&&Object(m.jsx)("div",{className:"border rounded-xl border-gray-100 p-8 py-6 bg-gray-50 dark:bg-gray-900 dark:border-gray-800",children:Object(m.jsxs)("div",{className:"flex lg:flex-row md:flex-row flex-col justify-between",children:[Object(m.jsxs)("div",{className:"mb-3 md:mb-0 lg:mb-0  flex flex-col sm:flex-wrap",children:[Object(m.jsx)("span",{className:"mb-1 font-bold font-serif text-sm uppercase text-gray-600 dark:text-gray-500 block",children:"Payment Method"}),Object(m.jsx)("span",{className:"text-sm text-gray-500 dark:text-gray-400 font-semibold font-serif block",children:l.payment_method})]}),Object(m.jsxs)("div",{className:"mb-3 md:mb-0 lg:mb-0  flex flex-col sm:flex-wrap",children:[Object(m.jsx)("span",{className:"mb-1 font-bold font-serif text-sm uppercase text-gray-600 dark:text-gray-500 block",children:"Shipping Cost"}),Object(m.jsx)("span",{className:"text-sm text-gray-500 dark:text-gray-400 font-semibold font-serif block"})]}),Object(m.jsxs)("div",{className:"mb-3 md:mb-0 lg:mb-0  flex flex-col sm:flex-wrap",children:[Object(m.jsx)("span",{className:"mb-1 font-bold font-serif text-sm uppercase text-gray-600 dark:text-gray-500 block",children:"Discount"}),Object(m.jsxs)("span",{className:"text-sm text-gray-500 dark:text-gray-400 font-semibold font-serif block",children:["\u20b9 ",Math.round(l.cart[0].product_discount),".00"]})]}),Object(m.jsxs)("div",{className:"flex flex-col sm:flex-wrap",children:[Object(m.jsx)("span",{className:"mb-1 font-bold font-serif text-sm uppercase text-gray-600 dark:text-gray-500 block",children:"Total Amount"}),Object(m.jsxs)("span",{className:"text-xl font-serif font-bold text-red-500 dark:text-green-500 block",children:["\u20b9 ",Math.round(l.total_amount),".00"]})]})]})})]}),!O&&Object(m.jsxs)("div",{className:"mb-4 mt-3 flex justify-between",children:[Object(m.jsx)(b.d,{document:Object(m.jsx)(I,{data:l}),fileName:"Invoice",children:function(e){e.blob,e.url;var t=e.loading;e.error;return t?"Loading...":Object(m.jsxs)("button",{className:"flex items-center text-sm leading-5 transition-colors duration-150 font-medium focus:outline-none px-5 py-2 rounded-md text-white bg-green-500 border border-transparent active:bg-green-600 hover:bg-green-600 focus:ring focus:ring-purple-300 w-auto cursor-pointer",children:["Download Invoice"," ",Object(m.jsx)("span",{className:"ml-2 text-base",children:Object(m.jsx)(d.c,{})})]})}}),Object(m.jsx)(r.a,{trigger:function(){return Object(m.jsxs)("button",{className:"flex items-center text-sm leading-5 transition-colors duration-150 font-medium focus:outline-none px-5 py-2 rounded-md text-white bg-green-500 border border-transparent active:bg-green-600 hover:bg-green-600 focus:ring focus:ring-purple-300 w-auto",children:["Print Invoice"," ",Object(m.jsx)("span",{className:"ml-2",children:Object(m.jsx)(o.j,{})})]})},content:function(){return s.current},documentTitle:"Invoice"})]})]})}}}]);
//# sourceMappingURL=25.cdcba65a.chunk.js.map