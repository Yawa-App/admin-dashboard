import{j as e,U as z,T as j,P as c,r as g,S,I as Y,w as b,x as B,M as w,z as G,$ as Q,a1 as V,A as $,y as J,W as K}from"./index-a9286523.js";import{u as X}from"./circleslide-71f365c8.js";import{L as Z,u as _}from"./label-026a903e.js";import{T as y,a as u,b as D,c as ee,d as ne,e as se,f as te,g as re}from"./TableSortLabel-1a98f12c.js";import{C as ie}from"./Container-b21ef6f3.js";import{C as ae}from"./Card-5f97e277.js";function L({query:n}){return e.jsx(y,{children:e.jsx(u,{align:"center",colSpan:6,sx:{py:3},children:e.jsxs(z,{sx:{textAlign:"center"},children:[e.jsx(j,{variant:"h6",paragraph:!0,children:"Not found"}),e.jsxs(j,{variant:"body2",children:["No results found for  ",e.jsxs("strong",{children:['"',n,'"']}),".",e.jsx("br",{})," Try checking for typos or using complete words."]})]})})})}L.propTypes={query:c.string};function k({name:n,member:s,city:r,number:o,status:i,created:l}){const[d,a]=g.useState(null),h=C=>{a(C.currentTarget)},f=()=>{a(null)};return e.jsxs(e.Fragment,{children:[e.jsxs(y,{hover:!0,tabIndex:-1,children:[e.jsx(u,{component:"th",scope:"row",padding:"none",children:e.jsx(S,{direction:"row",alignItems:"center",children:e.jsx(j,{sx:{px:2},noWrap:!0,children:n})})}),e.jsx(u,{children:s}),e.jsx(u,{children:o||"Ikeja"}),e.jsx(u,{children:e.jsxs(Z,{color:i==="banned"?"error":"success",children:[i,"success"]})}),e.jsx(u,{children:l}),e.jsx(u,{align:"right",children:e.jsx(Y,{onClick:h,children:e.jsx(b,{icon:"eva:more-vertical-fill"})})})]}),e.jsxs(B,{open:!!d,anchorEl:d,onClose:f,anchorOrigin:{vertical:"top",horizontal:"left"},transformOrigin:{vertical:"top",horizontal:"right"},PaperProps:{sx:{width:140}},children:[e.jsxs(w,{onClick:f,children:[e.jsx(b,{icon:"eva:edit-fill",sx:{mr:2}}),"Edit"]}),e.jsxs(w,{onClick:f,sx:{color:"error.main"},children:[e.jsx(b,{icon:"eva:trash-2-outline",sx:{mr:2}}),"Delete"]})]})]})}k.propTypes={name:c.string.isRequired,member:c.any.isRequired,city:c.string.isRequired,number:c.string.isRequired,status:c.string.isRequired,created:c.string.isRequired};const oe={border:0,margin:-1,padding:0,width:"1px",height:"1px",overflow:"hidden",position:"absolute",whiteSpace:"nowrap",clip:"rect(0 0 0 0)"};function ce(n,s,r){return n?Math.max(0,(1+n)*s-r):0}function q(n,s,r){return n[r]===null?1:s[r]===null||s[r]<n[r]?-1:s[r]>n[r]?1:0}function le(n,s){return n==="desc"?(r,o)=>q(r,o,s):(r,o)=>-q(r,o,s)}function de({inputData:n,comparator:s,filterName:r}){const o=n==null?void 0:n.map((i,l)=>[i,l]);return o==null||o.sort((i,l)=>{const d=s(i[0],l[0]);return d!==0?d:i[1]-l[1]}),n=o==null?void 0:o.map(i=>i[0]),r&&(n=n==null?void 0:n.filter(i=>{var l;return((l=i==null?void 0:i.name)==null?void 0:l.toLowerCase().indexOf(r.toLowerCase()))!==-1})),n}function A({order:n,orderBy:s,rowCount:r,headLabel:o,numSelected:i,onRequestSort:l}){const d=a=>h=>{l(h,a)};return e.jsx(D,{children:e.jsx(y,{children:o.map(a=>e.jsx(u,{align:a.align||"left",sortDirection:s===a.id?n:!1,sx:{width:a.width,minWidth:a.minWidth},children:e.jsxs(ee,{hideSortIcon:!0,active:s===a.id,direction:s===a.id?n:"asc",onClick:d(a.id),children:[a.label,s===a.id?e.jsx(G,{sx:{...oe},children:n==="desc"?"sorted descending":"sorted ascending"}):null]})},a.id))})})}A.propTypes={order:c.oneOf(["asc","desc"]),orderBy:c.string,rowCount:c.number,headLabel:c.array,numSelected:c.number,onRequestSort:c.func};function E({emptyRows:n,height:s}){return n?e.jsx(y,{sx:{...s&&{height:s*n}},children:e.jsx(u,{colSpan:9})}):null}E.propTypes={emptyRows:c.number,height:c.number};function he(){var P,T;const[n,s]=g.useState(0),[r,o]=g.useState("asc"),[i,l]=g.useState("name"),[d,a]=g.useState(""),[h,f]=g.useState(10),C=_(),{data:x,isLoadind:N,isError:O}=X();if(N)return e.jsx(j,{children:"Loading...."});if(O)return e.jsx(j,{children:"Error with the endpoint...."});console.log(x);const v=((P=x==null?void 0:x.data)==null?void 0:P.totalCircles)||0,F=(t,p)=>{o(i===p&&r==="asc"?"desc":"asc"),l(p)},M=(t,p)=>{s(p)},W=t=>{s(0),f(parseInt(t.target.value,10))},H=t=>{s(0),a(t.target.value)},m=de({inputData:(T=x==null?void 0:x.data)==null?void 0:T.circles,comparator:le(r,i),filterName:d}),U=!(m!=null&&m.length)&&!!d;return e.jsxs(ie,{children:[e.jsxs(S,{direction:"row",alignItems:"center",justifyContent:"space-between",mb:5,children:[e.jsxs(j,{style:{marginBottom:40},variant:"h4",children:["Safety Circles ",e.jsx("br",{})," ",e.jsx("span",{style:{color:"#292727",fontSize:"16px",fontWeight:400,lineHeight:"19.36px"},children:"Manage sfaety circles created by Yawa users."})]}),e.jsxs(S,{direction:"row",spacing:2,children:[e.jsx(Q,{value:d,onChange:H,placeholder:"Search safety circle",InputProps:{startAdornment:e.jsx(V,{position:"start",children:e.jsx(b,{icon:"eva:search-fill"})}),style:{height:"42px",width:"240px"}},variant:"outlined",size:"small"}),e.jsx($,{variant:"contained",style:{background:"#03BDE9",width:"181px",height:"40px",borderRadius:"4px"},color:"inherit",startIcon:e.jsx(b,{icon:"eva:plus-fill"}),children:"Create New Circle"})]})]}),e.jsxs(ae,{children:[e.jsx(J,{children:e.jsx(ne,{sx:{overflow:"unset"},children:e.jsxs(se,{sx:{minWidth:800},style:{background:"#F2F2F2"},children:[e.jsx(A,{order:r,orderBy:i,rowCount:v,numSelected:0,onRequestSort:F,headLabel:[{id:"name",label:"Name"},{id:"No. of Members",label:"No. of Members"},{id:"city",label:"City"},{id:"state",label:"State"},{id:"Admin",label:"Admin"},{id:"Created",label:"Created"},{id:"",label:""}]}),e.jsxs(te,{children:[m==null?void 0:m.slice(n*h,n*h+h).map((t,p)=>{var I;const R=C(t==null?void 0:t.createdAt);return e.jsx(k,{name:t==null?void 0:t.name,member:(I=t.members)==null?void 0:I.length,city:t==null?void 0:t.city,state:t==null?void 0:t.state,status:t==null?void 0:t.status,created:R},p)}),e.jsx(E,{height:77,emptyRows:ce(n,h,v)}),U&&e.jsx(L,{query:d})]})]})})}),e.jsx(re,{page:n,component:"div",count:v,rowsPerPage:h,onPageChange:M,rowsPerPageOptions:[5,10,25],onRowsPerPageChange:W})]})]})}function fe(){return e.jsxs(e.Fragment,{children:[e.jsx(K,{children:e.jsx("title",{children:" User | Yawa Dashboard "})}),e.jsx(he,{})]})}export{fe as default};
