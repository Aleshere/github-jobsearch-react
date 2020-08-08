(this["webpackJsonpgithub-jobsearch-react"]=this["webpackJsonpgithub-jobsearch-react"]||[]).push([[0],{157:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(15),l=t.n(c),o=t(19),i=t(7),m=t(11),s=t(12),u=t.n(s),p="make-request",b="get-data",E="error",g="update-has-next-page",h="https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json";function d(e,a){switch(a.type){case p:return{loading:!0,jobs:[]};case b:return Object(i.a)(Object(i.a)({},e),{},{loading:!1,jobs:a.payload.jobs});case E:return Object(i.a)(Object(i.a)({},e),{},{loading:!1,error:a.payload.error,jobs:[]});case g:return Object(i.a)(Object(i.a)({},e),{},{hasNextPage:a.payload.hasNextPage});default:return e}}var f=t(161),j=t(164),y=t(159),v=t(160),k=t(163),x=t(30),O=t.n(x);function N(e){var a=e.job,t=Object(n.useState)(!1),c=Object(m.a)(t,2),l=c[0],o=c[1];return r.a.createElement(j.a,{className:"mb-3"},r.a.createElement(j.a.Body,null,r.a.createElement("div",{className:"d-flex justify-content-between"},r.a.createElement("div",null,r.a.createElement(j.a.Title,null,r.a.createElement("h2",{style:{fontSize:"16px"}},a.title),r.a.createElement("h3",{style:{fontSize:"16px"},className:"text-muted font-weight-light"},a.company)),r.a.createElement(j.a.Subtitle,{className:"text-muted mb-2"},new Date(a.created_at).toLocaleDateString()),r.a.createElement(y.a,{variant:"light",className:"mr-2"},a.type),r.a.createElement(y.a,{variant:"light"},a.location),r.a.createElement("div",{style:{wordBreak:"break-all",fontSize:"16px",marginTop:"6px"}},r.a.createElement(O.a,{source:a.how_to_apply}))),r.a.createElement("img",{className:"d-none d-md-block",height:"50",alt:a.company,src:a.company_logo})),r.a.createElement(j.a.Text,null,r.a.createElement(v.a,{onClick:function(){return o((function(e){return!e}))},variant:"primary"},l?"Hide Details":"View Details")),r.a.createElement(k.a,{in:l},r.a.createElement("div",{className:"mt-4",style:{fontSize:"12px"}},r.a.createElement(O.a,{source:a.description})))))}var C=t(165);function w(e){var a=e.page,t=e.setPage,n=e.hasNextPage;function c(e){t((function(a){return a+e}))}return r.a.createElement(C.a,null,1!==a&&r.a.createElement(C.a.Prev,{onClick:function(){return c(-1)}}),1!==a&&r.a.createElement(C.a.Item,{onClick:function(){return c(1)}},"1"),a>2&&r.a.createElement(C.a.Ellipsis,null),a>2&&r.a.createElement(C.a.Item,{onClick:function(){return c(-1)}},a-1),r.a.createElement(C.a.Item,{active:!0},a),n&&r.a.createElement(C.a.Item,{onClick:function(){return c(1)}},a+1),n&&r.a.createElement(C.a.Next,{onClick:function(){return c(1)}}))}var P=t(162),S=t(51);function T(e){var a=e.params,t=e.onParamChange;return r.a.createElement(P.a,{className:"mb-4"},r.a.createElement(P.a.Row,{className:"align-items-end"},r.a.createElement(P.a.Group,{as:S.a},r.a.createElement(P.a.Label,null,"Description"),r.a.createElement(P.a.Control,{onChange:t,value:a.description,name:"description",type:"text"})),r.a.createElement(P.a.Group,{as:S.a},r.a.createElement(P.a.Label,null,"Location"),r.a.createElement(P.a.Control,{onChange:t,value:a.location,name:"location",type:"text"})),r.a.createElement(P.a.Group,{as:S.a,xs:"auto",className:"ml-2"},r.a.createElement(P.a.Check,{onChange:t,value:a.full_time,name:"full_time",id:"full-time",label:"Only Full Time Jobs",type:"checkbox",className:"mb-2"}))))}var _=function(){var e=Object(n.useState)({}),a=Object(m.a)(e,2),t=a[0],c=a[1],l=Object(n.useState)(1),s=Object(m.a)(l,2),j=s[0],y=s[1],v=function(e,a){var t=Object(n.useReducer)(d,{jobs:[],loading:!0}),r=Object(m.a)(t,2),c=r[0],l=r[1];return Object(n.useEffect)((function(){var t=u.a.CancelToken.source();l({type:p}),u.a.get(h,{cancelToken:t.token,params:Object(i.a)({markdown:!0,page:a},e)}).then((function(e){l({type:b,payload:{jobs:e.data}})})).catch((function(e){u.a.isCancel(e)||l({type:E,payload:{error:e}})}));var n=u.a.CancelToken.source();return u.a.get(h,{cancelToken:n.token,params:Object(i.a)({markdown:!0,page:a+1},e)}).then((function(e){l({type:g,payload:{hasNextPage:0!==e.data.length}})})).catch((function(e){u.a.isCancel(e)||l({type:E,payload:{error:e}})})),function(){t.cancel(),n.cancel()}}),[e,a]),c}(t,j),k=v.jobs,x=v.loading,O=v.error,C=v.hasNextPage;return r.a.createElement(f.a,{className:"my-4"},r.a.createElement("h1",null,"GitHub Jobs"),r.a.createElement(T,{params:t,onParamChange:function(e){var a=e.target.name,t=e.target.value;y(1),c((function(e){return Object(i.a)(Object(i.a)({},e),{},Object(o.a)({},a,t))}))}}),r.a.createElement(w,{page:j,setPage:y,hasNextPage:C}),x&&r.a.createElement("h1",null,"Loading..."),O&&r.a.createElement("h1",null,"Error. Try refreshing..."),r.a.createElement("h1",null,k.map((function(e){return r.a.createElement(N,{key:e.id,job:e})}))),r.a.createElement(w,{page:j,setPage:y,hasNextPage:C}))};l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(_,null)),document.getElementById("root"))},52:function(e,a,t){e.exports=t(157)}},[[52,1,2]]]);
//# sourceMappingURL=main.4e68b9e5.chunk.js.map