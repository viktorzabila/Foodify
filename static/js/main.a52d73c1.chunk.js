(this.webpackJsonpFoodify=this.webpackJsonpFoodify||[]).push([[0],{104:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),i=n(11),r=n.n(i),s=n(14),o=n(47),l=n(70),j=n(19),d=n(71),h=function(){var e=localStorage.getItem("recipeFavourList");return e?JSON.parse(e):[]},u=function(e){localStorage.setItem("recipeFavourList",JSON.stringify(e))},b="START_LOADING",m="FINISH_LOADING",A="SET_RECIPE",v="SET_FAVOUR_LIST",O="SET_CUSTOM_DISH_TO_FAVOUR_LIST",f="OPEN_MODAL",p="CLOSED_MODAL",x={recipe:{},recipeFavourList:[],isLoading:!0,isOpenModal:!1},g=n(3),w=Object(o.combineReducers)({general:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case b:return Object(s.a)(Object(s.a)({},e),{},{isLoading:!0});case m:return Object(s.a)(Object(s.a)({},e),{},{isLoading:!1});case f:return Object(s.a)(Object(s.a)({},e),{},{isOpenModal:!0});case p:return Object(s.a)(Object(s.a)({},e),{},{isOpenModal:!1});case A:return Object(s.a)(Object(s.a)({},e),{},{recipe:t.recipe});case v:case O:return Object(s.a)(Object(s.a)({},e),{},{recipeFavourList:t.favourList});default:return Object(s.a)({},e)}}}),M=Object(o.createStore)(w,function(e){var t=h();return{general:Object(s.a)(Object(s.a)({},e),{},{recipeFavourList:t})}}(x),Object(l.composeWithDevTools)(Object(o.applyMiddleware)(d.a))),N=function(e){var t=e.children;return Object(g.jsx)(j.a,{store:M,children:t})},y=n(51),G=n(15),L=n(7),Y=n(20),I=n(148),E=n(140),C=n(77),D=n.n(C),k=n(78),Z=n.n(k),z=n(79),S=n.n(z),B=n(141),T=n(151),J=n(136),R=n(138),X=n(139),K=n(25),F=n(17),W=n.n(F),Q=function(){return function(){var e=Object(K.a)(W.a.mark((function e(t){var n;return W.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:b}),e.next=3,fetch("https://www.themealdb.com/api/json/v1/1/random.php").then((function(e){return e.json()})).then((function(e){return e.meals[0]}));case 3:n=e.sent,t({type:A,recipe:n}),t({type:m});case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},H=n(134),q=Object(H.a)((function(e){return{header:{borderBottom:"1px solid ".concat(e.palette.divider)},modalButton:{backgroundColor:"#C4C4C4"},headerList:{minHeight:"60px",backgroundColor:"#F2F2F2","& :first-child":{justifyContent:"flex-end"}},headerItemModal:{justifyContent:"flex-start","@media (max-width:959px)":{justifyContent:"center"}}}})),P=function(e){var t=e.isModal,n=q(),a=Object(j.b)();return Object(g.jsx)(T.a,{className:n.header,component:"header",children:Object(g.jsx)(T.a,{component:"nav",children:Object(g.jsxs)(J.a,{container:!0,disablePadding:!0,className:n.headerList,component:R.a,children:[Object(g.jsx)(J.a,{item:!0,component:X.a,xs:6,children:Object(g.jsx)(E.a,{component:y.b,size:"medium",to:"/",children:"Random Dish"})}),Object(g.jsx)(J.a,{item:!0,component:X.a,md:3,xs:6,children:Object(g.jsx)(E.a,{component:y.b,size:"medium",to:"/favourites",children:"Favourites"})}),t&&Object(g.jsx)(J.a,{item:!0,className:n.headerItemModal,component:X.a,md:3,xs:12,children:Object(g.jsx)(E.a,{className:n.modalButton,variant:"contained",onClick:function(){a({type:f})},children:"Add custom dish"})})]})})})},U=Object(H.a)({pageLayout:{backgroundColor:"inherit",display:"flex",flexDirection:"column",position:"relative",minHeight:"100vh"},pageLayoutBox:{flexGrow:"1",textAlign:"center"},footer:{flexShrink:"0"}}),V=function(e){var t=e.children,n=e.isModal,a=U();return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(P,{isModal:n}),Object(g.jsx)(B.a,{className:a.pageLayout,maxWidth:"lg",children:Object(g.jsx)(T.a,{className:a.pageLayoutBox,component:"main",my:2,children:t})})]})},_=n(142),$=Object(H.a)((function(e){return{loading:{backgroundColor:e.palette.background.paper,paddingTop:"40vh",width:"100%",height:"100%",justifyContent:"center",alignItems:"center"}}})),ee=function(){var e=$();return Object(g.jsx)(T.a,{className:e.loading,children:Object(g.jsx)(_.a,{})})},te=n(143),ne=n(144),ae=n(145),ce=n(146),ie=n(147),re=Object(H.a)({card:{display:"inline-block",textAlign:"left",maxWidth:500,width:"100%",height:"100%"},cardLink:{height:"100%"},cardMediaBox:{objectFit:"cover",height:250},cardMedia:{width:"100%",height:"100%"},cardInstructions:{display:"-webkit-box",boxOrient:"vertical",lineClamp:4,wordBreak:"break-all",overflow:"hidden"}}),se=function(e){var t=e.imageUrl,n=e.dishName,a=e.instructions,c=e.children,i=re(),r=t;return Object(g.jsxs)(te.a,{className:i.card,children:[Object(g.jsxs)(ne.a,{className:i.cardLink,children:[Object(g.jsx)(T.a,{className:i.cardMediaBox,children:Object(g.jsx)(ae.a,{className:i.cardMedia,component:"img",src:r||"data:image/png;base64,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",alt:"placeholder",title:"".concat(n," image")})}),Object(g.jsxs)(ce.a,{children:[Object(g.jsx)(ie.a,{gutterBottom:!0,component:"h2",variant:"h5",children:n}),Object(g.jsx)(ie.a,{align:"justify",className:i.cardInstructions,color:"textSecondary",component:"p",variant:"body2",children:a})]})]}),c]})},oe=Object(H.a)({cardActions:{justifyContent:"space-around"}}),le=function(){var e=oe(),t=Object(j.b)(),n=Object(j.c)((function(e){return e.general})),c=n.recipe,i=n.recipeFavourList,r=Object(j.c)((function(e){return e.general})).isLoading,s=c.idMeal,o=c.strMeal,l=c.strMealThumb,d=c.strInstructions,h=Object(a.useState)(!1),u=Object(Y.a)(h,2),b=u[0];u[1];return Object(g.jsx)(V,{children:r?Object(g.jsx)(ee,{}):Object(g.jsx)(se,{dishName:o,id:s,imageUrl:l,instructions:d,children:Object(g.jsxs)(I.a,{className:e.cardActions,children:[Object(g.jsx)(E.a,{endIcon:Object(g.jsx)(D.a,{}),size:"small",onClick:function(){t(Q())},children:"Skip"}),Object(g.jsx)(E.a,{endIcon:b?Object(g.jsx)(Z.a,{}):Object(g.jsx)(S.a,{}),size:"small",onClick:function(){var e,n=i.filter((function(e){return e.idMeal!==s}));t((e=b?n:[].concat(Object(L.a)(i),[c]),{type:v,favourList:e})),t(Q())},children:"Like"})]})})})},je=n(58),de=n(152),he=n(149),ue=n(108),be=n(107),me=n(150),Ae=Object(H.a)((function(e){return{modal:{display:"flex",alignItems:"center",justifyContent:"center",padding:e.spacing(0,3)},paper:{width:"100%",maxWidth:600,padding:e.spacing(3),marginLeft:"auto",marginRight:"auto",display:"flex",flexDirection:"column",alignItems:"center"},form:{width:"100%",marginTop:e.spacing(3)},submit:{margin:e.spacing(3,0,2)},error:{marginTop:e.spacing(2)}}})),ve=function(){var e,t,n,a,c=Ae(),i=Object(je.b)(),r=i.handleSubmit,s=i.errors,o=i.control,l=Object(j.b)(),d=Object(j.c)((function(e){return e.general})),h=d.isOpenModal,b=d.recipeFavourList,m=function(){l({type:p})};return Object(g.jsx)(de.a,{closeAfterTransition:!0,BackdropComponent:he.a,BackdropProps:{timeout:500},className:c.modal,open:h,onClose:m,children:Object(g.jsx)(ue.a,{in:h,children:Object(g.jsxs)(be.a,{className:c.paper,children:[Object(g.jsx)(ie.a,{component:"h1",variant:"h5",children:"Add custom dish"}),Object(g.jsxs)("form",{className:c.form,onSubmit:r((function(e){var t,n=e.title,a=e.text,c={idMeal:String(Date.now()),strMeal:n,strInstructions:a};l((t=[].concat(Object(L.a)(b),[c]),{type:O,favourList:t})),u([].concat(Object(L.a)(b),[c])),m()})),children:[Object(g.jsx)(T.a,{mb:2,children:Object(g.jsx)(je.a,{as:Object(g.jsx)(me.a,{autoFocus:!0,fullWidth:!0,error:!(null===s||void 0===s||null===(e=s.title)||void 0===e||!e.type),helperText:null===s||void 0===s||null===(t=s.title)||void 0===t?void 0:t.message,id:"title",label:"Title",type:"text",variant:"outlined"}),control:o,defaultValue:"",name:"title",rules:{required:{value:!0,message:"Title is required"},minLength:{value:5,message:"Title is too short"}}})}),Object(g.jsx)(T.a,{children:Object(g.jsx)(je.a,{as:Object(g.jsx)(me.a,{fullWidth:!0,multiline:!0,error:!(null===s||void 0===s||null===(n=s.text)||void 0===n||!n.type),helperText:null===s||void 0===s||null===(a=s.text)||void 0===a?void 0:a.message,id:"text",label:"Text",rows:4,type:"text",variant:"outlined"}),control:o,defaultValue:"",name:"text",rules:{required:{value:!0,message:"Text is required"},minLength:{value:20,message:"Text is too short"}}})}),Object(g.jsx)(E.a,{fullWidth:!0,className:c.submit,type:"submit",variant:"contained",children:"Add dish"})]})]})})})},Oe=function(){var e=Object(j.c)((function(e){return e.general})).recipeFavourList,t=0===e.length,n=Object(L.a)(e).reverse();return Object(g.jsxs)(V,{isModal:!0,children:[Object(g.jsx)(ve,{}),Object(g.jsx)(J.a,{container:!0,justifyContent:"center",spacing:4,children:t?Object(g.jsxs)(T.a,{mt:10,children:[Object(g.jsx)(ie.a,{align:"center",variant:"h5",children:"You don't have a list of your favorite foods."}),Object(g.jsx)(ie.a,{align:"center",variant:"h5",children:"Dishes marked as liked will be displayed on this tab."})]}):n.map((function(e){var t=e.strMeal,n=e.strMealThumb,a=e.strInstructions,c=e.idMeal;return Object(g.jsx)(J.a,{item:!0,md:4,sm:6,xs:12,children:Object(g.jsx)(se,{dishName:t,id:c,imageUrl:n,instructions:a})},c)}))})]})},fe=function(){return Object(g.jsx)(V,{children:Object(g.jsx)(ie.a,{align:"center",variant:"h5",children:"Page not found"})})},pe=function(){return Object(g.jsx)(y.a,{children:Object(g.jsxs)(G.c,{children:[Object(g.jsx)(G.a,{exact:!0,path:"/",children:Object(g.jsx)(le,{})},"/"),Object(g.jsx)(G.a,{exact:!0,path:"/favourites",children:Object(g.jsx)(Oe,{})},"chart"),Object(g.jsx)(G.a,{path:"*",children:Object(g.jsx)(fe,{})})]})})},xe=function(){var e=Object(j.b)(),t=Object(j.c)((function(e){return e.general})).recipeFavourList;return Object(a.useEffect)((function(){e(Q())}),[]),Object(a.useEffect)((function(){u(t)}),[t]),Object(g.jsx)(pe,{})};r.a.render(Object(g.jsx)(c.a.StrictMode,{children:Object(g.jsx)(N,{children:Object(g.jsx)(xe,{})})}),document.getElementById("root"))}},[[104,1,2]]]);
//# sourceMappingURL=main.a52d73c1.chunk.js.map