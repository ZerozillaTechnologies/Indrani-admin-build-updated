(this["webpackJsonpdashtar-admin"]=this["webpackJsonpdashtar-admin"]||[]).push([[32],{50:function(e,t,n){"use strict";var r=n(9),a=n(60),s=n.n(a),o=n(15),c=n.n(o),i=s.a.create({baseURL:"http://192.81.213.186:5000",timeout:5e5,headers:{Accept:"application/json","Content-Type":"application/json"}});i.interceptors.request.use((function(e){var t;return c.a.get("adminInfo")&&(t=JSON.parse(c.a.get("adminInfo"))),Object(r.a)(Object(r.a)({},e),{},{headers:{authorization:t?"Bearer ".concat(t.token):null}})}));var u=function(e){return e.data},d={get:function(e,t,n){return i.get(e,t,n).then(u)},post:function(e,t,n){return i.post(e,t,n).then(u)},put:function(e,t,n){return i.put(e,t,n).then(u)},patch:function(e,t,n){return i.patch(e,t,n).then(u)},delete:function(e,t){return i.delete(e,t).then(u)}};t.a=d},53:function(e,t){var n,r,a=e.exports={};function s(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function c(e){if(n===setTimeout)return setTimeout(e,0);if((n===s||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"===typeof setTimeout?setTimeout:s}catch(e){n=s}try{r="function"===typeof clearTimeout?clearTimeout:o}catch(e){r=o}}();var i,u=[],d=!1,l=-1;function f(){d&&i&&(d=!1,i.length?u=i.concat(u):l=-1,u.length&&m())}function m(){if(!d){var e=c(f);d=!0;for(var t=u.length;t;){for(i=u,u=[];++l<t;)i&&i[l].run();l=-1,t=u.length}i=null,d=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===o||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function h(e,t){this.fun=e,this.array=t}function p(){}a.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];u.push(new h(e,t)),1!==u.length||d||c(m)},h.prototype.run=function(){this.fun.apply(null,this.array)},a.title="browser",a.browser=!0,a.env={},a.argv=[],a.version="",a.versions={},a.on=p,a.addListener=p,a.once=p,a.off=p,a.removeListener=p,a.removeAllListeners=p,a.emit=p,a.prependListener=p,a.prependOnceListener=p,a.listeners=function(e){return[]},a.binding=function(e){throw new Error("process.binding is not supported")},a.cwd=function(){return"/"},a.chdir=function(e){throw new Error("process.chdir is not supported")},a.umask=function(){return 0}},583:function(e,t,n){"use strict";t.a=n.p+"static/media/forgot-password-office.d1630a33.jpeg"},584:function(e,t,n){"use strict";t.a=n.p+"static/media/forgot-password-office-dark.d1630a33.jpeg"},69:function(e,t,n){"use strict";var r=n(50),a={registerAdmin:function(e){return r.a.post("/api/admin/register",e)},loginAdmin:function(e){return r.a.post("/api/admin/login?admin=1",e)},forgetPassword:function(e){return r.a.put("/admin/forget-password",e)},resetPassword:function(e){return r.a.put("/admin/reset-password",e)},signUpWithProvider:function(e){return r.a.post("/admin/signup",e)},addStaff:function(e){return r.a.post("/admin/add",e)},getAllStaff:function(e){return r.a.get("/admin/staffs",e)},getStaffById:function(e,t){return r.a.get("/admin/".concat(e),t)},updateStaff:function(e,t){return r.a.put("/admin/update-staffs/".concat(e),t)},deleteStaff:function(e){return r.a.delete("/admin/".concat(e))}};t.a=a},72:function(e,t,n){"use strict";n(0);var r=n(1);t.a=function(e){var t=e.errorName;return Object(r.jsx)(r.Fragment,{children:t&&Object(r.jsx)("span",{className:"text-red-400 text-sm mt-2",children:t.message})})}},73:function(e,t,n){"use strict";n(0);var r=n(20),a=n(1);t.a=function(e){var t=e.label;return Object(a.jsx)(r.Label,{className:"col-span-4 sm:col-span-2 font-medium text-sm",children:t})}},943:function(e,t,n){"use strict";n.r(t);var r=n(9),a=n(7),s=n(20),o=n(0),c=n(14),i=n(2),u=n(532),d=n(72),l=n(73),f=n(69),m=n(22),h=n(583),p=n(584),b=n(1);t.default=function(){var e=Object(i.i)().token,t=Object(o.useRef)(""),n=Object(o.useState)(!1),w=Object(a.a)(n,2),j=w[0],g=w[1],x=Object(u.a)(),O=x.register,v=x.handleSubmit,y=x.watch,N=x.formState.errors;t.current=y("newPassword");return Object(b.jsx)("div",{className:"flex items-center min-h-screen p-6 bg-gray-50 dark:bg-gray-900",children:Object(b.jsx)("div",{className:"flex-1 h-full max-w-4xl mx-auto overflow-hidden bg-white rounded-lg shadow-xl dark:bg-gray-800",children:Object(b.jsxs)("div",{className:"flex flex-col overflow-y-auto md:flex-row",children:[Object(b.jsxs)("div",{className:"h-32 md:h-auto md:w-1/2",children:[Object(b.jsx)("img",{"aria-hidden":"true",className:"object-cover w-full h-full dark:hidden",src:h.a,alt:"Office"}),Object(b.jsx)("img",{"aria-hidden":"true",className:"hidden object-cover w-full h-full dark:block",src:p.a,alt:"Office"})]}),Object(b.jsx)("main",{className:"flex items-center justify-center p-6 sm:p-12 md:w-1/2",children:Object(b.jsxs)("div",{className:"w-full",children:[Object(b.jsx)("h1",{className:"mb-4 text-xl font-semibold text-gray-700 dark:text-gray-200",children:"Reset password"}),Object(b.jsxs)("form",{onSubmit:v((function(t){var n=t.newPassword;g(!0),f.a.resetPassword({newPassword:n,token:e}).then((function(e){g(!1),Object(m.c)(e.message)})).catch((function(e){g(!1),Object(m.b)(e?e.response.data.message:e.message)}))})),children:[Object(b.jsx)(l.a,{label:"Password"}),Object(b.jsx)(s.Input,Object(r.a)(Object(r.a)({label:"Password",name:"newPassword",type:"password",placeholder:"Password"},O("newPassword",{required:"You must specify a password",minLength:{value:10,message:"Password must have at least 10 characters"}})),{},{className:"border h-12 text-sm focus:outline-none block w-full bg-gray-100 dark:bg-white border-transparent focus:bg-white"})),Object(b.jsx)(d.a,{errorName:N.newPassword}),Object(b.jsx)("div",{className:"mt-6"}),Object(b.jsx)(l.a,{label:"Confirm Password"}),Object(b.jsx)(s.Input,Object(r.a)(Object(r.a)({label:"Confirm Password",name:"confirm_password",type:"password",placeholder:"Confirm Password"},O("confirm_password",{validate:function(e){return e===t.current||"The passwords do not match"}})),{},{className:"border h-12 text-sm focus:outline-none block w-full bg-gray-100 dark:bg-white border-transparent focus:bg-white"})),Object(b.jsx)(d.a,{errorName:N.confirm_password}),Object(b.jsx)(s.Button,{disabled:j,type:"submit",block:!0,className:"mt-4 h-12",children:"Reset"})]}),Object(b.jsx)("p",{className:"mt-4",children:Object(b.jsx)(c.b,{className:"text-sm font-medium text-green-500 dark:text-green-400 hover:underline",to:"/login",children:"Already have an account? Login"})})]})})]})})})}}}]);
//# sourceMappingURL=32.154f4620.chunk.js.map