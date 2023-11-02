"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[158],{3158:function(n,e,r){r.r(e);var o=r(5861),t=r(9439),a=r(4687),i=r.n(a),c=r(9860),s=r(4554),l=r(890),u=r(8308),d=r(533),m=r(1686),p=r(5705),v=(r(2791),r(6460)),f=r(1417),h=r(5048),x=r(1087),Z=r(5218),g=r(3329);e.default=function(){var n=(0,v.YA)(),e=(0,t.Z)(n,2),r=e[0],a=e[1].isLoading,b=(0,h.I0)(),y=function(){var n=(0,o.Z)(i().mark((function n(e){var o,t,a;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,r(e);case 3:o=n.sent,t=o.data,a={name:t.user.name,token:t.token,isLoggedIn:!0},b((0,f.D)(a)),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(0),Z.ZP.error("The email or password is incorrect!");case 12:case"end":return n.stop()}}),n,null,[[0,9]])})));return function(e){return n.apply(this,arguments)}}();return(0,g.jsxs)(s.Z,{m:1,children:[(0,g.jsx)(l.Z,{variant:"h4",component:"h1",sx:{marginTop:"16px",color:"green"},children:"Login"}),(0,g.jsx)(p.J9,{initialValues:{email:"",password:""},validate:function(n){var e={};return n.email?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(n.email)||(e.email="Invalid email address"):e.email="Required",e},onSubmit:function(n){y(n)},children:function(n){var e=n.values,r=n.handleChange,o=n.handleBlur,t=n.handleSubmit;return(0,g.jsxs)("form",{onSubmit:t,children:[(0,g.jsx)(u.Z,{variant:"outlined",fullWidth:!0,margin:"normal",label:"Email",type:"email",name:"email",onChange:r,onBlur:o,value:e.email,color:"success"}),(0,g.jsx)(u.Z,{variant:"outlined",fullWidth:!0,margin:"normal",label:"Password",type:"password",name:"password",onChange:r,onBlur:o,value:e.password,color:"success"}),(0,g.jsx)(s.Z,{sx:{display:"flex",justifyContent:"flex-end",marginTop:"16px"},children:(0,g.jsx)(c.Z,{variant:"contained",margin:"normal",type:"submit",color:"success",loading:a,loadingPosition:"end",endIcon:(0,g.jsx)(m.Z,{}),children:"Login"})})]})}}),(0,g.jsxs)(s.Z,{sx:{textAlign:"center",marginTop:"24px",color:"green"},children:[(0,g.jsx)(l.Z,{variant:"h6",children:"Don't have an acount?"}),(0,g.jsx)(d.Z,{component:x.OL,to:"/register",sx:{color:"green"},children:"Registration here"})]})]})}},1686:function(n,e,r){var o=r(4836);e.Z=void 0;var t=o(r(5649)),a=r(3329),i=(0,t.default)((0,a.jsx)("path",{d:"M2.01 21 23 12 2.01 3 2 10l15 2-15 2z"}),"Send");e.Z=i},533:function(n,e,r){r.d(e,{Z:function(){return D}});var o=r(3433),t=r(9439),a=r(4942),i=r(3366),c=r(7462),s=r(2791),l=r(3733),u=r(4419),d=r(4036),m=r(6934),p=r(1402),v=r(3031),f=r(2071),h=r(890),x=r(5878),Z=r(1217);function g(n){return(0,Z.Z)("MuiLink",n)}var b=(0,x.Z)("MuiLink",["root","underlineNone","underlineHover","underlineAlways","button","focusVisible"]),y=r(8529),w=r(2065),k={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},j=function(n){var e=n.theme,r=n.ownerState,o=function(n){return k[n]||n}(r.color),t=(0,y.DW)(e,"palette.".concat(o),!1)||r.color,a=(0,y.DW)(e,"palette.".concat(o,"Channel"));return"vars"in e&&a?"rgba(".concat(a," / 0.4)"):(0,w.Fq)(t,.4)},C=r(3329),S=["className","color","component","onBlur","onFocus","TypographyClasses","underline","variant","sx"],A=(0,m.ZP)(h.Z,{name:"MuiLink",slot:"Root",overridesResolver:function(n,e){var r=n.ownerState;return[e.root,e["underline".concat((0,d.Z)(r.underline))],"button"===r.component&&e.button]}})((function(n){var e=n.theme,r=n.ownerState;return(0,c.Z)({},"none"===r.underline&&{textDecoration:"none"},"hover"===r.underline&&{textDecoration:"none","&:hover":{textDecoration:"underline"}},"always"===r.underline&&(0,c.Z)({textDecoration:"underline"},"inherit"!==r.color&&{textDecorationColor:j({theme:e,ownerState:r})},{"&:hover":{textDecorationColor:"inherit"}}),"button"===r.component&&(0,a.Z)({position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none","&::-moz-focus-inner":{borderStyle:"none"}},"&.".concat(b.focusVisible),{outline:"auto"}))})),D=s.forwardRef((function(n,e){var r=(0,p.Z)({props:n,name:"MuiLink"}),a=r.className,m=r.color,h=void 0===m?"primary":m,x=r.component,Z=void 0===x?"a":x,b=r.onBlur,y=r.onFocus,w=r.TypographyClasses,j=r.underline,D=void 0===j?"always":j,L=r.variant,B=void 0===L?"inherit":L,P=r.sx,R=(0,i.Z)(r,S),T=(0,v.Z)(),V=T.isFocusVisibleRef,F=T.onBlur,M=T.onFocus,W=T.ref,_=s.useState(!1),I=(0,t.Z)(_,2),N=I[0],z=I[1],q=(0,f.Z)(e,W),H=(0,c.Z)({},r,{color:h,component:Z,focusVisible:N,underline:D,variant:B}),O=function(n){var e=n.classes,r=n.component,o=n.focusVisible,t=n.underline,a={root:["root","underline".concat((0,d.Z)(t)),"button"===r&&"button",o&&"focusVisible"]};return(0,u.Z)(a,g,e)}(H);return(0,C.jsx)(A,(0,c.Z)({color:h,className:(0,l.Z)(O.root,a),classes:w,component:Z,onBlur:function(n){F(n),!1===V.current&&z(!1),b&&b(n)},onFocus:function(n){M(n),!0===V.current&&z(!0),y&&y(n)},ref:q,ownerState:H,variant:B,sx:[].concat((0,o.Z)(Object.keys(k).includes(h)?[]:[{color:h}]),(0,o.Z)(Array.isArray(P)?P:[P]))},R))}))},5861:function(n,e,r){function o(n,e,r,o,t,a,i){try{var c=n[a](i),s=c.value}catch(l){return void r(l)}c.done?e(s):Promise.resolve(s).then(o,t)}function t(n){return function(){var e=this,r=arguments;return new Promise((function(t,a){var i=n.apply(e,r);function c(n){o(i,t,a,c,s,"next",n)}function s(n){o(i,t,a,c,s,"throw",n)}c(void 0)}))}}r.d(e,{Z:function(){return t}})}}]);
//# sourceMappingURL=158.b0ebf33c.chunk.js.map