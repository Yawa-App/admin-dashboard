import{j as e,U as W,T as m,P as o,r as g,S as v,I as D,w as f,x as H,M as S,z as U,a3 as V,a4 as Y,$ as B,a1 as G,A as Q,y as $,W as J}from"./index-a9286523.js";import{L as K,u as X}from"./label-026a903e.js";import{T as b,a as x,b as Z,c as _,d as w,e as ee,f as ne,g as te}from"./TableSortLabel-1a98f12c.js";import{C as se}from"./Container-b21ef6f3.js";import{C as ie}from"./Card-5f97e277.js";function P({query:n}){return e.jsx(b,{children:e.jsx(x,{align:"center",colSpan:6,sx:{py:3},children:e.jsxs(W,{sx:{textAlign:"center"},children:[e.jsx(m,{variant:"h6",paragraph:!0,children:"Not found"}),e.jsxs(m,{variant:"body2",children:["No results found for  ",e.jsxs("strong",{children:['"',n,'"']}),".",e.jsx("br",{})," Try checking for typos or using complete words."]})]})})})}P.propTypes={query:o.string};function R({name:n,email:s,city:i,number:l,status:a,created:u}){const[d,r]=g.useState(null),h=y=>{r(y.currentTarget)},j=()=>{r(null)};return e.jsxs(e.Fragment,{children:[e.jsxs(b,{hover:!0,tabIndex:-1,children:[e.jsx(x,{component:"th",scope:"row",padding:"none",children:e.jsx(v,{direction:"row",alignItems:"center",children:e.jsx(m,{sx:{px:2},noWrap:!0,children:n})})}),e.jsx(x,{children:s}),e.jsx(x,{children:l||"Ikeja"}),e.jsx(x,{children:e.jsx(K,{color:a?"success":"error",children:a?"active":"pending"})}),e.jsx(x,{children:u}),e.jsx(x,{align:"right",children:e.jsx(D,{onClick:h,children:e.jsx(f,{icon:"eva:more-vertical-fill"})})})]}),e.jsxs(H,{open:!!d,anchorEl:d,onClose:j,anchorOrigin:{vertical:"top",horizontal:"left"},transformOrigin:{vertical:"top",horizontal:"right"},PaperProps:{sx:{width:140}},children:[e.jsxs(S,{onClick:j,children:[e.jsx(f,{icon:"eva:edit-fill",sx:{mr:2}}),"Edit"]}),e.jsxs(S,{onClick:j,sx:{color:"error.main"},children:[e.jsx(f,{icon:"eva:trash-2-outline",sx:{mr:2}}),"Delete"]})]})]})}R.propTypes={name:o.string.isRequired,email:o.any.isRequired,city:o.string.isRequired,number:o.string.isRequired,status:o.string.isRequired,created:o.string.isRequired};const re={border:0,margin:-1,padding:0,width:"1px",height:"1px",overflow:"hidden",position:"absolute",whiteSpace:"nowrap",clip:"rect(0 0 0 0)"};function ae(n,s,i){return n?Math.max(0,(1+n)*s-i):0}function C(n,s,i){return n[i]===null?1:s[i]===null||s[i]<n[i]?-1:s[i]>n[i]?1:0}function oe(n,s){return n==="desc"?(i,l)=>C(i,l,s):(i,l)=>-C(i,l,s)}function ce({inputData:n,comparator:s,filterName:i}){const l=n.map((a,u)=>[a,u]);return l.sort((a,u)=>{const d=s(a[0],u[0]);return d!==0?d:a[1]-u[1]}),n=l.map(a=>a[0]),i&&(n=n.filter(a=>a.name.toLowerCase().indexOf(i.toLowerCase())!==-1)),n}function A({order:n,orderBy:s,rowCount:i,headLabel:l,numSelected:a,onRequestSort:u}){const d=r=>h=>{u(h,r)};return e.jsx(Z,{children:e.jsx(b,{children:l.map(r=>e.jsx(x,{align:r.align||"left",sortDirection:s===r.id?n:!1,sx:{width:r.width,minWidth:r.minWidth},children:e.jsxs(_,{hideSortIcon:!0,active:s===r.id,direction:s===r.id?n:"asc",onClick:d(r.id),children:[r.label,s===r.id?e.jsx(U,{sx:{...re},children:n==="desc"?"sorted descending":"sorted ascending"}):null]})},r.id))})})}A.propTypes={order:o.oneOf(["asc","desc"]),orderBy:o.string,rowCount:o.number,headLabel:o.array,numSelected:o.number,onRequestSort:o.func};function I({emptyRows:n,height:s}){return n?e.jsx(b,{sx:{...s&&{height:s*n}},children:e.jsx(x,{colSpan:9})}):null}I.propTypes={emptyRows:o.number,height:o.number};function le(){const[n,s]=g.useState(0),[i,l]=g.useState("asc"),[a,u]=g.useState("name"),[d,r]=g.useState(""),[h,j]=g.useState(10),y=X(),{data:c,isLoading:F,isError:k}=V(),{setOpen:q,setModalType:E}=Y();if(F)return e.jsx(m,{children:"Loading..."});if(k)return e.jsx(m,{children:"Error loading, Can not get agencies endpoint"});console.log(c);const L=(t,p)=>{l(a===p&&i==="asc"?"desc":"asc"),u(p)},O=(t,p)=>{s(p)},N=t=>{s(0),j(parseInt(t.target.value,10))},M=t=>{s(0),r(t.target.value)},T=ce({inputData:c==null?void 0:c.agencies,comparator:oe(i,a),filterName:d}),z=!T.length&&!!d;return e.jsxs(se,{children:[e.jsxs(v,{direction:"row",alignItems:"center",justifyContent:"space-between",mb:5,children:[e.jsxs(m,{style:{marginBottom:40},variant:"h4",children:["Agency ",e.jsx("br",{})," ",e.jsx("span",{style:{color:"#292727",fontSize:"16px",fontWeight:400,lineHeight:"19.36px"},children:"Manage Agencies created by Yawa."})]}),e.jsxs(v,{direction:"row",spacing:2,children:[e.jsx(B,{value:d,onChange:M,placeholder:"Search agency",InputProps:{startAdornment:e.jsx(G,{position:"start",children:e.jsx(f,{icon:"eva:search-fill"})}),style:{height:"42px",width:"240px"}},variant:"outlined",size:"small"}),e.jsx(Q,{onClick:()=>{E("create-agencies"),q(!0)},variant:"contained",style:{background:"#03BDE9",width:"201px",height:"40px",borderRadius:"4px"},color:"inherit",startIcon:e.jsx(f,{icon:"eva:plus-fill"}),children:"Create New Agency"})]})]}),e.jsxs(ie,{children:[e.jsx($,{children:e.jsx(w,{sx:{overflow:"unset"},children:e.jsxs(ee,{sx:{minWidth:800},style:{background:"#F2F2F2"},children:[e.jsx(A,{order:i,orderBy:a,rowCount:c==null?void 0:c.total,numSelected:0,onRequestSort:L,headLabel:[{id:"name",label:"Name"},{id:"email",label:"email"},{id:"city",label:"City"},{id:"Admin",label:"Admin"},{id:"Created",label:"Created"},{id:"",label:""}]}),e.jsxs(ne,{children:[T.slice(n*h,n*h+h).map(t=>{const p=y(t==null?void 0:t.createdAt);return e.jsx(R,{name:t==null?void 0:t.name,email:t==null?void 0:t.email,city:t==null?void 0:t.city,state:t==null?void 0:t.state,number:t==null?void 0:t.phoneNumber,status:t==null?void 0:t.isEmailVerified,created:p},t==null?void 0:t.id)}),e.jsx(I,{height:77,emptyRows:ae(n,h,c==null?void 0:c.total)}),z&&e.jsx(P,{query:d})]})]})})}),e.jsx(te,{page:n,component:"div",count:c==null?void 0:c.total,rowsPerPage:h,onPageChange:O,rowsPerPageOptions:[5,10,25],onRowsPerPageChange:N})]})]})}function me(){return e.jsxs(e.Fragment,{children:[e.jsx(J,{children:e.jsx("title",{children:" User | Yawa Dashboard "})}),e.jsx(le,{})]})}export{me as default};
