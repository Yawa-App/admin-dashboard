import{j as e,U as W,T as g,P as a,r as m,S,I as D,w as f,x as H,M as T,z as U,aa as Q,a4 as V,ab as Y,$ as B,a1 as G,A as $,y as J,W as K}from"./index-b035a519.js";import{L as X,u as Z}from"./label-27495d72.js";import{T as b,a as x,b as _,c as w,d as ee,e as ne,f as te,g as se}from"./TableSortLabel-295a202c.js";import{C as ie}from"./Container-217ed1e2.js";import{C as re}from"./Card-fa1dfd48.js";function P({query:n}){return e.jsx(b,{children:e.jsx(x,{align:"center",colSpan:6,sx:{py:3},children:e.jsxs(W,{sx:{textAlign:"center"},children:[e.jsx(g,{variant:"h6",paragraph:!0,children:"Not found"}),e.jsxs(g,{variant:"body2",children:["No results found for  ",e.jsxs("strong",{children:['"',n,'"']}),".",e.jsx("br",{})," Try checking for typos or using complete words."]})]})})})}P.propTypes={query:a.string};function R({name:n,email:s,city:i,state:l,number:o,status:d,created:u}){const[r,h]=m.useState(null),y=c=>{h(c.currentTarget)},j=()=>{h(null)};return e.jsxs(e.Fragment,{children:[e.jsxs(b,{hover:!0,tabIndex:-1,children:[e.jsx(x,{component:"th",scope:"row",padding:"none",children:e.jsx(S,{direction:"row",alignItems:"center",children:e.jsx(g,{sx:{px:2},noWrap:!0,children:n})})}),e.jsx(x,{children:s}),e.jsx(x,{children:o||"Ikeji"}),e.jsx(x,{children:e.jsx(X,{color:d?"success":"error",children:d?"success":"pending"})}),e.jsx(x,{children:u}),e.jsx(x,{align:"right",children:e.jsx(D,{onClick:y,children:e.jsx(f,{icon:"eva:more-vertical-fill"})})})]}),e.jsxs(H,{open:!!r,anchorEl:r,onClose:j,anchorOrigin:{vertical:"top",horizontal:"left"},transformOrigin:{vertical:"top",horizontal:"right"},PaperProps:{sx:{width:140}},children:[e.jsxs(T,{onClick:j,children:[e.jsx(f,{icon:"eva:edit-fill",sx:{mr:2}}),"Edit"]}),e.jsxs(T,{onClick:j,sx:{color:"error.main"},children:[e.jsx(f,{icon:"eva:trash-2-outline",sx:{mr:2}}),"Delete"]})]})]})}R.propTypes={name:a.string.isRequired,email:a.any.isRequired,city:a.string.isRequired,state:a.string.isRequired,number:a.string.isRequired,status:a.string.isRequired,created:a.string.isRequired};const ae={border:0,margin:-1,padding:0,width:"1px",height:"1px",overflow:"hidden",position:"absolute",whiteSpace:"nowrap",clip:"rect(0 0 0 0)"};function oe(n,s,i){return n?Math.max(0,(1+n)*s-i):0}function C(n,s,i){return n[i]===null?1:s[i]===null||s[i]<n[i]?-1:s[i]>n[i]?1:0}function ce(n,s){return n==="desc"?(i,l)=>C(i,l,s):(i,l)=>-C(i,l,s)}function le({inputData:n,comparator:s,filterName:i}){const l=n.map((o,d)=>[o,d]);return l.sort((o,d)=>{const u=s(o[0],d[0]);return u!==0?u:o[1]-d[1]}),n=l.map(o=>o[0]),i&&(n=n.filter(o=>o.name.toLowerCase().indexOf(i.toLowerCase())!==-1)),n}function I({order:n,orderBy:s,rowCount:i,headLabel:l,numSelected:o,onRequestSort:d}){const u=r=>h=>{d(h,r)};return e.jsx(_,{children:e.jsx(b,{children:l.map(r=>e.jsx(x,{align:r.align||"left",sortDirection:s===r.id?n:!1,sx:{width:r.width,minWidth:r.minWidth},children:e.jsxs(w,{hideSortIcon:!0,active:s===r.id,direction:s===r.id?n:"asc",onClick:u(r.id),children:[r.label,s===r.id?e.jsx(U,{sx:{...ae},children:n==="desc"?"sorted descending":"sorted ascending"}):null]})},r.id))})})}I.propTypes={order:a.oneOf(["asc","desc"]),orderBy:a.string,rowCount:a.number,headLabel:a.array,numSelected:a.number,onRequestSort:a.func};function F({emptyRows:n,height:s}){return n?e.jsx(b,{sx:{...s&&{height:s*n}},children:e.jsx(x,{colSpan:9})}):null}F.propTypes={emptyRows:a.number,height:a.number};function de(){const[n,s]=m.useState(0),[i,l]=m.useState("asc"),[o,d]=m.useState("name"),[u,r]=m.useState(""),[h,y]=m.useState(10),j=Z(),{data:c,isLoading:q,isError:A}=Q(),{setOpen:k,setModalType:E}=V();if(q)return e.jsx(g,{children:"Loading..."});if(A)return e.jsx(g,{children:"Error loading categories"});const L=(t,p)=>{l(o===p&&i==="asc"?"desc":"asc"),d(p)},O=(t,p)=>{s(p)},N=t=>{s(0),y(parseInt(t.target.value,10))},M=t=>{s(0),r(t.target.value)},v=le({inputData:c==null?void 0:c.states,comparator:ce(i,o),filterName:u}),z=!v.length&&!!u;return e.jsxs(ie,{children:[e.jsx(Y,{}),e.jsxs(S,{direction:"row",alignItems:"center",justifyContent:"space-between",mb:5,children:[e.jsxs(g,{style:{marginBottom:40},variant:"h4",children:["Safety Circles ",e.jsx("br",{})," ",e.jsx("span",{style:{color:"#292727",fontSize:"16px",fontWeight:400,lineHeight:"19.36px"},children:"Manage sfaety circles created by Yawa users."})]}),e.jsxs(S,{direction:"row",spacing:2,children:[e.jsx(B,{value:u,onChange:M,placeholder:"Search safety circle",InputProps:{startAdornment:e.jsx(G,{position:"start",children:e.jsx(f,{icon:"eva:search-fill"})}),style:{height:"42px",width:"240px"}},variant:"outlined",size:"small"}),e.jsx($,{onClick:()=>{E("create-state"),k(!0)},variant:"contained",style:{background:"#03BDE9",width:"181px",height:"40px",borderRadius:"4px"},color:"inherit",startIcon:e.jsx(f,{icon:"eva:plus-fill"}),children:"Create New State"})]})]}),e.jsxs(re,{children:[e.jsx(J,{children:e.jsx(ee,{sx:{overflow:"unset"},children:e.jsxs(ne,{sx:{minWidth:800},style:{background:"#F2F2F2"},children:[e.jsx(I,{order:i,orderBy:o,rowCount:c==null?void 0:c.total,numSelected:0,onRequestSort:L,headLabel:[{id:"name",label:"Name"},{id:"email",label:"email"},{id:"city",label:"City"},{id:"Admin",label:"Admin"},{id:"Created",label:"Created"},{id:"",label:""}]}),e.jsxs(te,{children:[v.slice(n*h,n*h+h).map(t=>{const p=j(t==null?void 0:t.createdAt);return e.jsx(R,{name:t==null?void 0:t.name,email:t==null?void 0:t.email,city:t==null?void 0:t.city,state:t==null?void 0:t.state,number:t==null?void 0:t.phoneNumber,status:t==null?void 0:t.isEmailVerified,created:p},t==null?void 0:t.id)}),e.jsx(F,{height:77,emptyRows:oe(n,h,c==null?void 0:c.total)}),z&&e.jsx(P,{query:u})]})]})})}),e.jsx(se,{page:n,component:"div",count:c==null?void 0:c.total,rowsPerPage:h,onPageChange:O,rowsPerPageOptions:[5,10,25],onRowsPerPageChange:N})]})]})}function je(){return e.jsxs(e.Fragment,{children:[e.jsx(K,{children:e.jsx("title",{children:" User | Yawa Dashboard "})}),e.jsx(de,{})]})}export{je as default};
