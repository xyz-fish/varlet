import{A as k}from"./index.c12ff749.js";import{I as S}from"./index.be6fe181.js";import{A as R}from"./AppType.edade19c.js";import{R as w}from"./index.389a472f.js";import{S as A}from"./index.9e05f442.js";import{M as x}from"./index.f1189dc4.js";import{B}from"./index.6e19ef9d.js";import{C as F}from"./index.4dfef2cb.js";import{u as z,a as D,_ as I,b as N,c as U,w as V}from"./en-US.40aea415.js";import{_ as Y}from"./IconSfc.eb1d27d6.js";import{r as g,d as i,e as M,o as m,c as C,h as t,w as o,F as T,S as O,U as G,l,t as n,a as j,j as q,i as H,k as J}from"./vendor.bac705d4.js";import"./shared.5973ad73.js";import"./elements.0f1b5e0a.js";import"./index.c9515ed3.js";import"./zIndex.148a12e4.js";import"./components.7d95671e.js";import"./lock.cdd0a0f9.js";var K={basicAppBar:"\u57FA\u7840\u5BFC\u822A\u680F",customStyle:"\u81EA\u5B9A\u4E49\u6837\u5F0F",addSlotsAtTitle:"\u6DFB\u52A0\u6807\u9898\u5904\u63D2\u69FD",addTheTitleFromTheSlot:"\u4ECE\u63D2\u69FD\u5904\u6DFB\u52A0\u6807\u9898",addLeftSlot:"\u6DFB\u52A0\u5DE6\u4FA7\u63D2\u69FD",title:"\u6807\u9898",addRightSlot:"\u6DFB\u52A0\u53F3\u4FA7\u63D2\u69FD",addLeftAndRightSlot:"\u6DFB\u52A0\u5DE6\u53F3\u63D2\u69FD",options1:"\u9009\u9879\u4E00",options2:"\u9009\u9879\u4E8C",search:"\u641C\u7D22",goBack:"\u8FD4\u56DE"},P={basicAppBar:"Basic AppBar",customStyle:"Custom Style",addSlotsAtTitle:"Add Slots At Title",addTheTitleFromTheSlot:"Add The Title From The Slot",addLeftSlot:"Add Left Slot",title:"Title",addRightSlot:"Add Right Slot",addLeftAndRightSlot:"Add Left And Right Slot",options1:"options1",options2:"options2",search:"search",goBack:"Go Back"};const{add:b,use:Q,pack:d,packs:Se,merge:Ae}=z(),W=a=>{U(a),Q(a)};D("zh-CN",I);D("en-US",N);b("zh-CN",K);b("en-US",P);const X={name:"AppBarExample",directives:{Ripple:w},components:{[k.name]:k,[S.name]:S,[x.name]:x,[B.name]:B,[F.name]:F,AppType:R},setup(){const a=g(!1),r=g([]),_=()=>{A({content:d.value.search,position:"top"})},e=()=>{A({content:d.value.goBack,position:"top"})},h=()=>{r.value=[{label:d.value.options1,value:"menu1"},{label:d.value.options2,value:"menu2"}],a.value=!0};return V(v=>{W(v),a.value=!1}),{offsetY:a,menuList:r,pack:d,searchData:_,goBack:e,changeOffset:h}}},Z=a=>(O("data-v-a35a7244"),a=a(),G(),a),$={class:"menu-list"},ee=Z(()=>j("div",{class:"space"},null,-1));function te(a,r,_,e,h,v){const s=i("app-type"),c=i("var-app-bar"),u=i("var-icon"),f=i("var-button"),y=i("var-cell"),L=i("var-menu"),E=M("ripple");return m(),C(T,null,[t(s,null,{default:o(()=>[l(n(e.pack.basicAppBar),1)]),_:1}),t(c,{title:e.pack.title},null,8,["title"]),t(s,null,{default:o(()=>[l(n(e.pack.customStyle),1)]),_:1}),t(c,{title:e.pack.title,"title-position":"center",color:"#ff9f00"},null,8,["title"]),t(s,null,{default:o(()=>[l(n(e.pack.addSlotsAtTitle),1)]),_:1}),t(c,null,{default:o(()=>[l(n(e.pack.addTheTitleFromTheSlot),1)]),_:1}),t(s,null,{default:o(()=>[l(n(e.pack.addLeftSlot),1)]),_:1}),t(c,{title:e.pack.title,"title-position":"center"},{left:o(()=>[t(f,{round:"",text:"",color:"transparent","text-color":"#ffffff",onClick:e.goBack},{default:o(()=>[t(u,{name:"chevron-left",size:24})]),_:1},8,["onClick"])]),_:1},8,["title"]),t(s,null,{default:o(()=>[l(n(e.pack.addRightSlot),1)]),_:1}),t(c,{title:e.pack.title},{right:o(()=>[t(f,{round:"",text:"",color:"transparent","text-color":"#ffffff",onClick:e.searchData},{default:o(()=>[t(u,{name:"magnify",size:24})]),_:1},8,["onClick"])]),_:1},8,["title"]),t(s,null,{default:o(()=>[l(n(e.pack.addLeftAndRightSlot),1)]),_:1}),t(c,{title:e.pack.title},{left:o(()=>[t(f,{round:"",text:"",color:"transparent","text-color":"#ffffff",onClick:e.goBack},{default:o(()=>[t(u,{name:"chevron-left",size:24})]),_:1},8,["onClick"])]),right:o(()=>[t(L,{"offset-y":38,"offset-x":-45,show:e.offsetY,"onUpdate:show":r[0]||(r[0]=p=>e.offsetY=p)},{menu:o(()=>[j("div",$,[(m(!0),C(T,null,q(e.menuList,p=>H((m(),J(y,{class:"menu-cell",key:p.value},{default:o(()=>[l(n(p.label),1)]),_:2},1536)),[[E]])),128))])]),default:o(()=>[t(f,{round:"",text:"",color:"transparent","text-color":"#ffffff",onClick:e.changeOffset},{default:o(()=>[t(u,{name:"menu",size:24})]),_:1},8,["onClick"])]),_:1},8,["show"])]),_:1},8,["title"]),ee],64)}var xe=Y(X,[["render",te],["__scopeId","data-v-a35a7244"]]);export{xe as default};
