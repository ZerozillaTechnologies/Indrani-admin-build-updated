(this["webpackJsonpdashtar-admin"]=this["webpackJsonpdashtar-admin"]||[]).push([[23],{101:function(e,t,n){"use strict";var a=n(50),r={getAllUsers:function(e){return a.a.get("/users?admin=1",e)},getUserById:function(e){return a.a.get("/user/".concat(e,"?admin=1"))},deleteUser:function(e){return a.a.delete("/user/".concat(e,"?admin=1"))}};t.a=r},102:function(e,t,n){"use strict";var a=n(50),r={addCoupon:function(e){return a.a.post("/api/coupon/add",e)},getAllCoupons:function(){return a.a.get("/api/coupon/")},getCouponById:function(e){return a.a.get("/api/coupon/".concat(e))},updateCoupon:function(e,t){return a.a.put("/api/coupon/".concat(e),t)},deleteCoupon:function(e){return a.a.delete("/api/coupon/".concat(e))}};t.a=r},103:function(e,t,n){"use strict";var a=n(50),r={deleteBanner:function(e){return a.a.delete("/banner/deletebanner/".concat(e))},getAllBanners:function(){return a.a.get("/api/banners/all-banner")},getBannerById:function(e){return a.a.get("/api/banners/".concat(e))},addBanner:function(e){return a.a.post("/api/banners/add",e)},updateBanner:function(e,t){return a.a.put("/banner/updateBannner/".concat(e),t)}};t.a=r},104:function(e,t,n){"use strict";var a=n(50),r={getAllEnquiries:function(){return a.a.get("/admin-get-enquiries")},getUserById:function(e){return a.a.get("/user/".concat(e,"?admin=1"))},deleteEnquiry:function(e){return a.a.delete("/admin/enquiry/".concat(e,"?admin=1"))}};t.a=r},109:function(e,t,n){"use strict";var a=n(0),r=n.n(a),c=n(2),s=n(20),o=n(54),u=n(101),i=n(70),l=n(102),d=n(61),b=n(60),j=n(104),f=n(103),p=n(21),h=n(22),m=n(1),O=function(e){var t=e.id,n=Object(a.useContext)(p.a),r=n.isModalOpen,O=n.closeModal,g=n.setIsUpdate,x=Object(c.h)();return Object(m.jsx)(m.Fragment,{children:Object(m.jsxs)(s.Modal,{isOpen:r,onClose:O,children:[Object(m.jsxs)(s.ModalBody,{className:"text-center custom-modal px-8 pt-6 pb-4",children:[Object(m.jsx)("span",{className:"flex justify-center text-3xl mb-6 text-red-500",children:Object(m.jsx)(o.o,{})}),Object(m.jsx)("h2",{className:"text-xl font-medium mb-1",children:"Are You Sure! Want to Delete This Record?"}),Object(m.jsx)("p",{children:"Do you really want to delete these records? You can't view this in your list anymore if you delete!"})]}),Object(m.jsxs)(s.ModalFooter,{className:"justify-center",children:[Object(m.jsx)(s.Button,{className:"w-full sm:w-auto hover:bg-white hover:border-gray-50",layout:"outline",onClick:O,children:"No, Keep It"}),Object(m.jsx)(s.Button,{onClick:function(){"/products"===x.pathname&&(d.a.deleteProduct(t).then((function(e){g(!0),Object(h.c)(e.message)})).catch((function(e){return Object(h.b)(e.message)})),O()),"/category"===x.pathname&&(b.a.deleteCategory(t).then((function(e){g(!0),Object(h.c)(e.message)})).catch((function(e){return Object(h.b)(e.message)})),O()),"/customers"===x.pathname&&(u.a.deleteUser(t).then((function(e){g(!0),Object(h.c)(e.message)})).catch((function(e){return Object(h.b)(e.message)})),O()),"/coupons"===x.pathname&&(l.a.deleteCoupon(t).then((function(e){g(!0),Object(h.c)(e.message)})).catch((function(e){return Object(h.b)(e.message)})),O()),"/enquiries"===x.pathname&&(j.a.deleteEnquiry(t).then((function(e){g(!0),Object(h.c)(e.message)})).catch((function(e){return Object(h.b)(e.message)})),O()),"/banners"===x.pathname&&(f.a.deleteBanner(t).then((function(e){g(!0),Object(h.c)(e.message)})).catch((function(e){return Object(h.b)(e.message)})),O()),"/our-staff"===x.pathname&&(i.a.deleteStaff(t).then((function(e){g(!0),Object(h.c)(e.message)})).catch((function(e){return Object(h.b)(e.message)})),O())},className:"w-full sm:w-auto",children:"Yes, Delete It"})]})]})})};t.a=r.a.memo(O)},50:function(e,t,n){"use strict";var a=n(9),r=n(59),c=n.n(r),s=n(15),o=n.n(s),u=c.a.create({baseURL:"http://192.81.213.186:5000",timeout:5e5,headers:{Accept:"application/json","Content-Type":"application/json"}});u.interceptors.request.use((function(e){var t;return o.a.get("adminInfo")&&(t=JSON.parse(o.a.get("adminInfo"))),Object(a.a)(Object(a.a)({},e),{},{headers:{authorization:t?"Bearer ".concat(t.token):null}})}));var i=function(e){return e.data},l={get:function(e,t,n){return u.get(e,t,n).then(i)},post:function(e,t,n){return u.post(e,t,n).then(i)},put:function(e,t,n){return u.put(e,t,n).then(i)},patch:function(e,t,n){return u.patch(e,t,n).then(i)},delete:function(e,t){return u.delete(e,t).then(i)}};t.a=l},56:function(e,t,n){"use strict";var a=n(7),r=n(59),c=n.n(r),s=n(0),o=n(21);t.a=function(e){var t=Object(s.useState)([]||!1),n=Object(a.a)(t,2),r=n[0],u=n[1],i=Object(s.useState)(""),l=Object(a.a)(i,2),d=l[0],b=l[1],j=Object(s.useState)(!0),f=Object(a.a)(j,2),p=f[0],h=f[1],m=Object(s.useContext)(o.a),O=m.isUpdate,g=m.setIsUpdate;return Object(s.useEffect)((function(){var t=!1,n=c.a.CancelToken.source();return e({cancelToken:n.token}).then((function(e){t||(u(e),b(""),h(!1))})).catch((function(e){t||(b(e.message),c.a.isCancel(e),b(e.message),h(!1),u([]))})),g(!1),function(){t=!0,n.cancel("Cancelled in cleanup")}}),[O]),{data:r,error:d,loading:p}}},60:function(e,t,n){"use strict";var a=n(50),r={getAllCategory:function(){return a.a.get("/api/category/")},getCategoryById:function(e){return a.a.get("/api/category/".concat(e))},addCategory:function(e){return a.a.post("/api/category/add",e)},updateCategory:function(e,t){return a.a.put("/api/category/".concat(e),t)},updateStatus:function(e,t){return a.a.put("/api/category/status/".concat(e),t)},deleteCategory:function(e,t){return a.a.patch("/api/category/".concat(e),t)}};t.a=r},61:function(e,t,n){"use strict";var a=n(50),r={getAllProducts:function(){return a.a.get("/api/products")},getStockOutProducts:function(){return a.a.get("/products/stock-out")},getProductById:function(e){return a.a.post("/api/products/".concat(e))},addProduct:function(e){return a.a.post("/api/products/add",e)},addAllProducts:function(e){return a.a.post("/api/products/all",e)},updateProduct:function(e,t){return a.a.put("/api/products/".concat(e),t)},updateStatus:function(e,t){return a.a.put("/product/status/".concat(e),t)},deleteProduct:function(e){return a.a.delete("/api/products/".concat(e))},getAllBanners:function(){return a.a.get("/product/banners?admin=1")},addBanner:function(e){return a.a.post("/product/upload-banners?admin=1",e)},updateBanner:function(e,t){return a.a.put("/product/banner/".concat(e,"?admin=1"),t)}};t.a=r},69:function(e,t,n){"use strict";n(0);var a=n(1);t.a=function(e){var t=e.children;return Object(a.jsx)("h1",{className:"my-6 text-lg font-bold text-gray-700 dark:text-gray-300",children:t})}},70:function(e,t,n){"use strict";var a=n(50),r={registerAdmin:function(e){return a.a.post("/api/admin/register",e)},loginAdmin:function(e){return a.a.post("/api/admin/login?admin=1",e)},forgetPassword:function(e){return a.a.put("/admin/forget-password",e)},resetPassword:function(e){return a.a.put("/admin/reset-password",e)},signUpWithProvider:function(e){return a.a.post("/admin/signup",e)},addStaff:function(e){return a.a.post("/admin/add",e)},getAllStaff:function(e){return a.a.get("/admin/staffs",e)},getStaffById:function(e,t){return a.a.get("/admin/".concat(e),t)},updateStaff:function(e,t){return a.a.put("/admin/update-staffs/".concat(e),t)},deleteStaff:function(e){return a.a.delete("/admin/".concat(e))}};t.a=r},71:function(e,t,n){"use strict";n(0);var a=n(523),r=n.n(a),c=n(1);t.a=function(e){var t=e.loading;return Object(c.jsx)("div",{className:"text-lg text-center py-6",children:Object(c.jsx)(r.a,{color:"#34D399",loading:t,height:25,width:3,radius:3,margin:4})})}},75:function(e,t,n){"use strict";var a=n(7),r=n(72),c=n(521),s=n.n(c),o=n(522),u=n.n(o),i=n(0),l=n(2),d=n(22);t.a=function(e){var t=Object(i.useState)(""),n=Object(a.a)(t,2),c=n[0],o=n[1],b=Object(i.useState)(""),j=Object(a.a)(b,2),f=j[0],p=j[1],h=Object(i.useState)(""),m=Object(a.a)(h,2),O=m[0],g=m[1],x=Object(i.useState)(""),v=Object(a.a)(x,2),C=v[0],y=v[1],w=Object(i.useState)(""),S=Object(a.a)(w,2),N=S[0],T=S[1],D=Object(i.useState)(""),B=Object(a.a)(D,2),P=B[0],A=B[1],R=Object(i.useState)(""),L=Object(a.a)(R,2),I=L[0],k=L[1],U=Object(i.useState)([]),q=Object(a.a)(U,2),F=q[0],E=q[1],M=Object(i.useState)([]),_=Object(a.a)(M,2),Y=_[0],J=_[1],H=Object(i.useState)([]),W=Object(a.a)(H,2),z=W[0],K=W[1],G=Object(i.useState)(""),Q=Object(a.a)(G,2),V=Q[0],X=Q[1],Z=Object(i.useState)(""),$=Object(a.a)(Z,2),ee=$[0],te=$[1],ne=Object(i.useState)(""),ae=Object(a.a)(ne,2),re=ae[0],ce=ae[1],se=Object(i.useState)(1),oe=Object(a.a)(se,2),ue=oe[0],ie=oe[1],le=Object(i.useState)([]),de=Object(a.a)(le,2),be=de[0],je=de[1],fe=Object(i.useState)(""),pe=Object(a.a)(fe,2),he=pe[0],me=pe[1],Oe=Object(i.useState)(""),ge=Object(a.a)(Oe,2),xe=ge[0],ve=ge[1],Ce=Object(i.useState)(""),ye=Object(a.a)(Ce,2),we=ye[0],Se=ye[1],Ne=Object(i.useState)([]),Te=Object(a.a)(Ne,1)[0],De=Object(i.useRef)(""),Be=Object(i.useRef)(""),Pe=Object(i.useRef)(""),Ae=Object(i.useRef)(""),Re=Object(i.useRef)("");r.extend(s.a),r.extend(u.a);var Le=Object(l.h)(),Ie=Object(i.useMemo)((function(){var t=new Date;t.setDate(t.getDate()-re);var n,a=e;if(console.log(e),"/dashboard"===Le.pathname){var s=a.filter((function(e){return"pending"===e.status}));E(s);var o=a.filter((function(e){return"processing"===e.status}));J(o);var u=a.filter((function(e){return"delivered"===e.status}));K(u);var i=a.filter((function(e){return r(e.createdAt).isToday()})).reduce((function(e,t){return e+t.total}),0);me(i);var l=a.filter((function(e){return r(e.createdAt).isBetween((new Date).setDate((new Date).getDate()-30),new Date)})).reduce((function(e,t){return e+t.total}),0);ve(l);var d=a.reduce((function(e,t){return e+t.total}),0);Se(d)}(c&&(a=a.filter((function(e){return e.parent===c}))),"Low"===f&&(a=a.sort((function(e,t){return e.price<t.price&&-1}))),"High"===f&&(a=a.sort((function(e,t){return e.price>t.price&&-1}))),O&&(a=a.filter((function(e){return e.title.toLowerCase().includes(O.toLowerCase())}))),I&&(a=a.filter((function(e){return e.type.toLowerCase().includes(I.toLowerCase())}))),ee&&(a=a.filter((function(e){return e.role===ee}))),C&&(a=a.filter((function(e){var t,n;return e.name.toLowerCase().includes(C.toLowerCase())||(null===e||void 0===e||null===(t=e.phone)||void 0===t?void 0:t.toLowerCase().includes(C.toLowerCase()))||(null===e||void 0===e||null===(n=e.email)||void 0===n?void 0:n.toLowerCase().includes(C.toLowerCase()))}))),N&&(a=a.filter((function(e){return e.title.toLowerCase().includes(N.toLowerCase())||e.couponCode.toLowerCase().includes(N.toLowerCase())}))),V)&&(a=null===(n=a)||void 0===n?void 0:n.filter((function(e){return e.status===V})));return P&&(a=a.filter((function(e){return e.contact.toLowerCase().includes(P.toLowerCase())}))),re&&(a=a.filter((function(e){return r(e.createdAt).isBetween(t,new Date)}))),a}),[c,f,e,O,C,N,P,I,V,ee,re,Le]),ke=Ie.length;Object(i.useEffect)((function(){if(Ie){console.log(Ie);var e=Ie.slice(8*(ue-1),8*ue);je(e)}}),[Ie,ue,8]);return{userRef:Be,searchRef:De,couponRef:Pe,orderRef:Ae,categoryRef:Re,pending:F,processing:Y,delivered:z,todayOrder:he,monthlyOrder:xe,totalOrder:we,setFilter:o,setSortedField:p,setStatus:X,setRole:te,setTime:ce,handleChangePage:function(e){ie(e)},totalResults:ke,resultsPerPage:8,dataTable:be,serviceData:Ie,handleSubmitUser:function(e){e.preventDefault(),y(Be.current.value)},handleSubmitForAll:function(e){e.preventDefault(),g(De.current.value)},handleSubmitCoupon:function(e){e.preventDefault(),T(Pe.current.value)},handleSubmitOrder:function(e){e.preventDefault(),A(Ae.current.value)},handleSubmitCategory:function(e){e.preventDefault(),k(Re.current.value)},handleOnDrop:function(e){for(var t=0;t<e.length;t++)Te.push(e[t].data)},handleUploadProducts:function(){Te.length<1?Object(d.b)("Please upload/select csv file first!"):Object(d.c)("CRUD operation disable for demo!")}}}},961:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n(20),c=n(56),s=n(75),o=n(99),u=n(104),i=n(71),l=n(69),d=n(7),b=n(72),j=n(54),f=n(97),p=n(109),h=n(21),m=n(14),O=n(1),g=function(e){var t=e.enquiries,n=Object(a.useState)(""),c=Object(d.a)(n,2),s=c[0],o=c[1],u=Object(a.useContext)(h.a).toggleModal;return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(p.a,{id:s}),Object(O.jsx)(r.TableBody,{children:null===t||void 0===t?void 0:t.map((function(e){return Object(O.jsxs)(r.TableRow,{children:[Object(O.jsx)(r.TableCell,{children:Object(O.jsxs)("span",{className:"font-semibold uppercase text-xs",children:[" ",e._id.substring(20,24)]})}),Object(O.jsx)(r.TableCell,{children:Object(O.jsx)("span",{className:"text-sm",children:b(e.created_at).format("MMM D, YYYY")})}),Object(O.jsx)(r.TableCell,{children:Object(O.jsx)("span",{className:"text-sm",children:e.fullname})}),Object(O.jsxs)(r.TableCell,{children:[Object(O.jsx)("span",{className:"text-sm",children:e.email})," "]}),Object(O.jsx)(r.TableCell,{children:Object(O.jsx)("span",{className:"text-sm font-medium",children:e.phoneno})}),Object(O.jsx)(r.TableCell,{children:Object(O.jsxs)(m.b,{className:"text-sm font-medium",to:"/product/".concat(e.product_id),children:[Object(O.jsx)("label",{children:e.product_name}),Object(O.jsx)("label",{children:e.product_price}),Object(O.jsx)("img",{src:e.product_image,alt:e.product_name,width:"50px",height:"50px",style:{objectFit:"cover"}})]})}),Object(O.jsx)(r.TableCell,{children:Object(O.jsx)("span",{className:"text-sm",children:e.message})}),Object(O.jsx)(r.TableCell,{children:Object(O.jsx)("div",{className:"flex justify-end text-right",children:Object(O.jsx)("div",{onClick:function(){return t=e._id,o(t),void u();var t},className:"p-2 cursor-pointer text-gray-400 hover:text-red-600",children:Object(O.jsx)(f.a,{id:"delete",Icon:j.o,title:"Delete",bgColor:"#F87171"})})})})]},e._id)}))})]})};t.default=function(){var e=Object(c.a)(u.a.getAllEnquiries),t=e.data,n=e.loading,a=Object(s.a)(t),d=a.userRef,b=a.handleChangePage,j=a.totalResults,f=a.resultsPerPage,p=a.dataTable,h=a.serviceData,m=a.handleSubmitUser;return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(l.a,{children:"Enquiries"}),Object(O.jsx)(r.Card,{className:"min-w-0 shadow-xs overflow-hidden bg-white dark:bg-gray-800 mb-5",children:Object(O.jsx)(r.CardBody,{children:Object(O.jsx)("form",{onSubmit:m,className:"py-3 grid gap-4 lg:gap-6 xl:gap-6 md:flex xl:flex",children:Object(O.jsxs)("div",{className:"flex-grow-0 md:flex-grow lg:flex-grow xl:flex-grow",children:[Object(O.jsx)(r.Input,{ref:d,className:"border h-12 text-sm focus:outline-none block w-full bg-gray-100 border-transparent focus:bg-white",type:"search",name:"search",placeholder:"Search by name/email/phone"}),Object(O.jsx)("button",{type:"submit",className:"absolute right-0 top-0 mt-5 mr-1",children:"Search"})]})})})}),n?Object(O.jsx)(i.a,{loading:n}):0!==h.length?Object(O.jsxs)(r.TableContainer,{className:"mb-8",children:[Object(O.jsxs)(r.Table,{children:[Object(O.jsx)(r.TableHeader,{children:Object(O.jsxs)("tr",{children:[Object(O.jsx)(r.TableCell,{children:"ID"}),Object(O.jsx)(r.TableCell,{children:"Date"}),Object(O.jsx)(r.TableCell,{children:"Name"}),Object(O.jsx)(r.TableCell,{children:"Email"}),Object(O.jsx)(r.TableCell,{children:"Phone"}),Object(O.jsx)(r.TableCell,{children:"Product Details"}),Object(O.jsx)(r.TableCell,{children:"Enquiries"}),Object(O.jsx)(r.TableCell,{className:"text-right",children:"Actions"})]})}),Object(O.jsx)(g,{enquiries:p})]}),Object(O.jsx)(r.TableFooter,{children:Object(O.jsx)(r.Pagination,{totalResults:j,resultsPerPage:f,onChange:b,label:"Table navigation"})})]}):Object(O.jsx)(o.a,{title:"Enquiries"})]})}},97:function(e,t,n){"use strict";n(0);var a=n(536),r=n(1);t.a=function(e){var t=e.id,n=e.Icon,c=e.title,s=e.bgColor;return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("p",{"data-tip":!0,"data-for":t,children:Object(r.jsx)(n,{})}),Object(r.jsx)(a.a,{id:t,backgroundColor:s,children:Object(r.jsx)("span",{className:"text-sm font-medium",children:c})})]})}},99:function(e,t,n){"use strict";n(0);var a=n.p+"static/media/no-result.ec22e94c.svg",r=n(1);t.a=function(e){var t=e.title;return Object(r.jsxs)("div",{className:"text-center align-middle mx-auto p-5 my-5",children:[Object(r.jsx)("img",{className:"my-4",src:a,alt:"no-result",width:"400"}),Object(r.jsxs)("h2",{className:"text-lg md:text-xl lg:text-2xl xl:text-2xl text-center mt-2 font-medium font-serif text-gray-600",children:["Sorry, we can not find this ",t,Object(r.jsx)("span",{role:"img","aria-labelledby":"img",children:"\ud83d\ude1e"})]})]})}}}]);
//# sourceMappingURL=23.2fd8dd1a.chunk.js.map