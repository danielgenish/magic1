(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a7c4b1c0"],{1703:function(e,t,c){},"2fcb":function(e,t,c){},"4d86":function(e,t,c){"use strict";c("68ef"),c("5c56")},"5c56":function(e,t,c){},"72cf":function(e,t,c){},"72ff":function(e,t,c){"use strict";c("68ef"),c("e3b3"),c("d9d2")},"75e6":function(e,t,c){"use strict";c("68ef"),c("72cf")},"832e":function(e,t,c){"use strict";c.r(t);var o=c("23f9"),a=c("7a23"),l=c("1fba"),n=c("e5f6"),r=c("8db7"),i=c("efd9");const[d,s]=Object(l["a"])("text-ellipsis"),b={rows:Object(n["c"])(1),dots:Object(n["e"])("..."),content:Object(n["e"])(""),expandText:Object(n["e"])(""),collapseText:Object(n["e"])(""),position:Object(n["e"])("end")};var u=Object(a["defineComponent"])({name:d,props:b,emits:["clickAction"],setup(e,{emit:t}){const c=Object(a["ref"])(""),o=Object(a["ref"])(!1),l=Object(a["ref"])(!1),n=Object(a["ref"])(),d=Object(a["computed"])(()=>o.value?e.collapseText:e.expandText),b=e=>{if(!e)return 0;const t=e.match(/^\d*(\.\d*)?/);return t?Number(t[0]):0},u=()=>{const t=()=>{if(!n.value)return;const t=window.getComputedStyle(n.value),c=document.createElement("div"),o=Array.prototype.slice.apply(t);return o.forEach(e=>{c.style.setProperty(e,t.getPropertyValue(e))}),c.style.position="fixed",c.style.zIndex="-9999",c.style.top="-9999px",c.style.height="auto",c.style.minHeight="auto",c.style.maxHeight="auto",c.innerText=e.content,document.body.appendChild(c),c},o=(t,c)=>{const{content:o,position:a,dots:l}=e,n=o.length,r=()=>{const e=(r,i)=>{if(i-r<=1)return"end"===a?o.slice(0,r)+l:l+o.slice(i,n);const s=Math.round((r+i)/2);return t.innerText="end"===a?o.slice(0,s)+l+d.value:l+o.slice(s,n)+d.value,t.offsetHeight>c?"end"===a?e(r,s):e(s,i):"end"===a?e(s,i):e(r,s)};t.innerText=e(0,n)},i=(a,r)=>{if(a[1]-a[0]<=1&&r[1]-r[0]<=1)return o.slice(0,a[0])+l+o.slice(r[1],n);const d=Math.floor((a[0]+a[1])/2),s=Math.ceil((r[0]+r[1])/2);return t.innerText=e.content.slice(0,d)+e.dots+e.content.slice(s,n)+e.expandText,t.offsetHeight>=c?i([a[0],d],[s,r[1]]):i([d,a[1]],[r[0],s])},s=0+n>>1;return"middle"===e.position?t.innerText=i([0,s],[s,n]):r(),t.innerText},a=t();if(!a)return;const{paddingBottom:r,paddingTop:i,lineHeight:s}=a.style,u=Math.ceil((Number(e.rows)+.5)*b(s)+b(i)+b(r));u<a.offsetHeight?(l.value=!0,c.value=o(a,u)):(l.value=!1,c.value=e.content),document.body.removeChild(a)},O=(e=!o.value)=>{o.value=e},f=e=>{O(),t("clickAction",e)},j=()=>Object(a["createVNode"])("span",{class:s("action"),onClick:f},[d.value]);return Object(a["onMounted"])(u),Object(a["watch"])([r["k"],()=>[e.content,e.rows,e.position]],u),Object(i["a"])({toggle:O}),()=>Object(a["createVNode"])("div",{ref:n,class:s()},[o.value?e.content:c.value,l.value?j():null])}});const O=Object(o["a"])(u);c("68ef"),c("f7d0");var f=c("2e9e"),j=(c("ec5d"),c("badc")),h=(c("75e6"),c("a136")),g=(c("4d86"),c("9a1c")),V=(c("89a0"),c("6c44")),p=(c("aa5a"),c("e31f")),v=(c("72ff"),{__name:"LogSettingsView",setup(e){Object(a["ref"])(!1),Object(a["ref"])(!1);const t=Object(a["ref"])(!1),c=Object(a["ref"])(!1),o=Object(a["ref"])([]),l=Object(a["ref"])([]),n=Object(a["ref"])({enableDeleteLog:!1,enableRemoteLog:!1});function r(){try{let e=window.androidFunction.getLogSettings();n.value=JSON.parse(e)}catch(e){}}function i(e,t){try{window.androidFunction.setBoolSetting(e,t,!1)}catch(c){}}function d(){try{window.androidFunction.clearDeleteLogs(),b()}catch(e){}}function s(){try{window.androidFunction.clearRemoteLogs(),b()}catch(e){}}function b(){try{let e=window.androidFunction.getDeleteLogsList();o.value=JSON.parse(e)}catch(e){}}function u(){try{let e=window.androidFunction.getRemoteLogsList();l.value=JSON.parse(e)}catch(e){}}return Object(a["onMounted"])(()=>{r()}),(e,r)=>{const v=p["a"],m=V["a"],N=g["a"],x=h["a"],y=j["a"],w=f["a"],F=O;return Object(a["openBlock"])(),Object(a["createElementBlock"])("main",null,[Object(a["createVNode"])(x,{inset:"",style:{"margin-top":"20px"}},{default:Object(a["withCtx"])(()=>[Object(a["createVNode"])(m,{title:"启用文件删除日志",label:"记录APP循环录制中删除的日志",center:"","is-link":""},{"right-icon":Object(a["withCtx"])(()=>[Object(a["createVNode"])(v,{modelValue:n.value.enableDeleteLog,"onUpdate:modelValue":r[0]||(r[0]=e=>n.value.enableDeleteLog=e),onChange:r[1]||(r[1]=e=>i("enableDeleteLog",n.value.enableDeleteLog))},null,8,["modelValue"])]),_:1}),n.value.enableDeleteLog?(Object(a["openBlock"])(),Object(a["createBlock"])(m,{key:0,onClick:r[2]||(r[2]=e=>{c.value=!0,b()}),title:"查看文件删除记录",label:"记录较多时加载较慢，请耐心等待！",center:"","is-link":""},{"right-icon":Object(a["withCtx"])(()=>[Object(a["createVNode"])(N,{name:"arrow"})]),_:1})):Object(a["createCommentVNode"])("",!0)]),_:1}),Object(a["createVNode"])(w,{show:c.value,"onUpdate:show":r[3]||(r[3]=e=>c.value=e),"close-on-click-overlay":"","confirm-button-text":"清除所有记录",onConfirm:d,style:{"overflow-y":"scroll",width:"80%",height:"80%"}},{default:Object(a["withCtx"])(()=>[o.value.length<=0?(Object(a["openBlock"])(),Object(a["createBlock"])(y,{key:0,description:"暂时没有日志记录"})):Object(a["createCommentVNode"])("",!0),(Object(a["openBlock"])(!0),Object(a["createElementBlock"])(a["Fragment"],null,Object(a["renderList"])(o.value,(e,t)=>(Object(a["openBlock"])(),Object(a["createBlock"])(m,{key:"deleteLog"+t,title:e.time+" 删除了"+e.log.local+"的："+e.log.file,label:"原因："+e.log.reason,center:""},null,8,["title","label"]))),128))]),_:1},8,["show"]),Object(a["createVNode"])(x,{inset:"",style:{"margin-top":"20px"}},{default:Object(a["withCtx"])(()=>[Object(a["createVNode"])(m,{title:"启用远程控制日志",label:"记录远程控制的日志",center:"","is-link":""},{"right-icon":Object(a["withCtx"])(()=>[Object(a["createVNode"])(v,{modelValue:n.value.enableRemoteLog,"onUpdate:modelValue":r[4]||(r[4]=e=>n.value.enableRemoteLog=e),onChange:r[5]||(r[5]=e=>i("enableRemoteLog",n.value.enableRemoteLog))},null,8,["modelValue"])]),_:1}),n.value.enableRemoteLog?(Object(a["openBlock"])(),Object(a["createBlock"])(m,{key:0,onClick:r[6]||(r[6]=e=>{t.value=!0,u()}),title:"查看远程控制记录",label:"记录较多时加载较慢，请耐心等待！",center:"","is-link":""},{"right-icon":Object(a["withCtx"])(()=>[Object(a["createVNode"])(N,{name:"arrow"})]),_:1})):Object(a["createCommentVNode"])("",!0)]),_:1}),Object(a["createVNode"])(w,{show:t.value,"onUpdate:show":r[7]||(r[7]=e=>t.value=e),"close-on-click-overlay":"","confirm-button-text":"清除所有记录",onConfirm:s,style:{"overflow-y":"scroll",width:"80%",height:"80%"}},{default:Object(a["withCtx"])(()=>[l.value.length<=0?(Object(a["openBlock"])(),Object(a["createBlock"])(y,{key:0,description:"暂时没有日志记录"})):Object(a["createCommentVNode"])("",!0),(Object(a["openBlock"])(!0),Object(a["createElementBlock"])(a["Fragment"],null,Object(a["renderList"])(l.value,(e,t)=>(Object(a["openBlock"])(),Object(a["createBlock"])(m,{key:"deleteLog"+t,title:e.time+" "+e.log.command,center:""},{label:Object(a["withCtx"])(()=>[Object(a["createVNode"])(F,{rows:"2",content:e.log.value+"  "+e.log.return,"expand-text":"展开","collapse-text":"收起"},null,8,["content"])]),_:2},1032,["title"]))),128))]),_:1},8,["show"])])}}});const m=v;t["default"]=m},a136:function(e,t,c){"use strict";c.d(t,"a",(function(){return O}));var o=c("23f9"),a=c("7a23"),l=c("1fba"),n=c("e5f6"),r=c("d243"),i=c("0baf");const[d,s]=Object(l["a"])("cell-group"),b={title:String,inset:Boolean,border:n["g"]};var u=Object(a["defineComponent"])({name:d,inheritAttrs:!1,props:b,setup(e,{slots:t,attrs:c}){const o=()=>{var o;return Object(a["createVNode"])("div",Object(a["mergeProps"])({class:[s({inset:e.inset}),{[r["e"]]:e.border&&!e.inset}]},c,Object(i["a"])()),[null==(o=t.default)?void 0:o.call(t)])},l=()=>Object(a["createVNode"])("div",{class:s("title",{inset:e.inset})},[t.title?t.title():e.title]);return()=>e.title||t.title?Object(a["createVNode"])(a["Fragment"],null,[l(),o()]):o()}});const O=Object(o["a"])(u)},badc:function(e,t,c){"use strict";c.d(t,"a",(function(){return O}));var o=c("23f9"),a=c("7a23"),l=c("05df"),n=c("1fba"),r=c("e5f6"),i=c("5aa0");const[d,s]=Object(n["a"])("empty"),b={image:Object(r["e"])("default"),imageSize:[Number,String,Array],description:String};var u=Object(a["defineComponent"])({name:d,props:b,setup(e,{slots:t}){const c=()=>{const c=t.description?t.description():e.description;if(c)return Object(a["createVNode"])("p",{class:s("description")},[c])},o=()=>{if(t.default)return Object(a["createVNode"])("div",{class:s("bottom")},[t.default()])},n=Object(l["a"])(),r=e=>`${n}-${e}`,d=e=>`url(#${r(e)})`,b=(e,t,c)=>Object(a["createVNode"])("stop",{"stop-color":e,offset:t+"%","stop-opacity":c},null),u=(e,t)=>[b(e,0),b(t,100)],O=e=>[Object(a["createVNode"])("defs",null,[Object(a["createVNode"])("radialGradient",{id:r(e),cx:"50%",cy:"54%",fx:"50%",fy:"54%",r:"297%",gradientTransform:"matrix(-.16 0 0 -.33 .58 .72)"},[b("#EBEDF0",0),b("#F2F3F5",100,.3)])]),Object(a["createVNode"])("ellipse",{fill:d(e),opacity:".8",cx:"80",cy:"140",rx:"46",ry:"8"},null)],f=()=>[Object(a["createVNode"])("defs",null,[Object(a["createVNode"])("linearGradient",{id:r("a"),x1:"64%",y1:"100%",x2:"64%"},[b("#FFF",0,.5),b("#F2F3F5",100)])]),Object(a["createVNode"])("g",{opacity:".8"},[Object(a["createVNode"])("path",{d:"M36 131V53H16v20H2v58h34z",fill:d("a")},null),Object(a["createVNode"])("path",{d:"M123 15h22v14h9v77h-31V15z",fill:d("a")},null)])],j=()=>[Object(a["createVNode"])("defs",null,[Object(a["createVNode"])("linearGradient",{id:r("b"),x1:"64%",y1:"97%",x2:"64%",y2:"0%"},[b("#F2F3F5",0,.3),b("#F2F3F5",100)])]),Object(a["createVNode"])("g",{opacity:".8"},[Object(a["createVNode"])("path",{d:"M87 6c3 0 7 3 8 6a8 8 0 1 1-1 16H80a7 7 0 0 1-8-6c0-4 3-7 6-7 0-5 4-9 9-9Z",fill:d("b")},null),Object(a["createVNode"])("path",{d:"M19 23c2 0 3 1 4 3 2 0 4 2 4 4a4 4 0 0 1-4 3v1h-7v-1l-1 1c-2 0-3-2-3-4 0-1 1-3 3-3 0-2 2-4 4-4Z",fill:d("b")},null)])],h=()=>Object(a["createVNode"])("svg",{viewBox:"0 0 160 160"},[Object(a["createVNode"])("defs",null,[Object(a["createVNode"])("linearGradient",{id:r(1),x1:"64%",y1:"100%",x2:"64%"},[b("#FFF",0,.5),b("#F2F3F5",100)]),Object(a["createVNode"])("linearGradient",{id:r(2),x1:"50%",x2:"50%",y2:"84%"},[b("#EBEDF0",0),b("#DCDEE0",100,0)]),Object(a["createVNode"])("linearGradient",{id:r(3),x1:"100%",x2:"100%",y2:"100%"},[u("#EAEDF0","#DCDEE0")]),Object(a["createVNode"])("radialGradient",{id:r(4),cx:"50%",cy:"0%",fx:"50%",fy:"0%",r:"100%",gradientTransform:"matrix(0 1 -.54 0 .5 -.5)"},[b("#EBEDF0",0),b("#FFF",100,0)])]),Object(a["createVNode"])("g",{fill:"none"},[f(),Object(a["createVNode"])("path",{fill:d(4),d:"M0 139h160v21H0z"},null),Object(a["createVNode"])("path",{d:"M80 54a7 7 0 0 1 3 13v27l-2 2h-2a2 2 0 0 1-2-2V67a7 7 0 0 1 3-13z",fill:d(2)},null),Object(a["createVNode"])("g",{opacity:".6","stroke-linecap":"round","stroke-width":"7"},[Object(a["createVNode"])("path",{d:"M64 47a19 19 0 0 0-5 13c0 5 2 10 5 13",stroke:d(3)},null),Object(a["createVNode"])("path",{d:"M53 36a34 34 0 0 0 0 48",stroke:d(3)},null),Object(a["createVNode"])("path",{d:"M95 73a19 19 0 0 0 6-13c0-5-2-9-6-13",stroke:d(3)},null),Object(a["createVNode"])("path",{d:"M106 84a34 34 0 0 0 0-48",stroke:d(3)},null)]),Object(a["createVNode"])("g",{transform:"translate(31 105)"},[Object(a["createVNode"])("rect",{fill:"#EBEDF0",width:"98",height:"34",rx:"2"},null),Object(a["createVNode"])("rect",{fill:"#FFF",x:"9",y:"8",width:"80",height:"18",rx:"1.1"},null),Object(a["createVNode"])("rect",{fill:"#EBEDF0",x:"15",y:"12",width:"18",height:"6",rx:"1.1"},null)])])]),g=()=>Object(a["createVNode"])("svg",{viewBox:"0 0 160 160"},[Object(a["createVNode"])("defs",null,[Object(a["createVNode"])("linearGradient",{x1:"50%",x2:"50%",y2:"100%",id:r(5)},[u("#F2F3F5","#DCDEE0")]),Object(a["createVNode"])("linearGradient",{x1:"95%",y1:"48%",x2:"5.5%",y2:"51%",id:r(6)},[u("#EAEDF1","#DCDEE0")]),Object(a["createVNode"])("linearGradient",{y1:"45%",x2:"100%",y2:"54%",id:r(7)},[u("#EAEDF1","#DCDEE0")])]),f(),j(),Object(a["createVNode"])("g",{transform:"translate(36 50)",fill:"none"},[Object(a["createVNode"])("g",{transform:"translate(8)"},[Object(a["createVNode"])("rect",{fill:"#EBEDF0",opacity:".6",x:"38",y:"13",width:"36",height:"53",rx:"2"},null),Object(a["createVNode"])("rect",{fill:d(5),width:"64",height:"66",rx:"2"},null),Object(a["createVNode"])("rect",{fill:"#FFF",x:"6",y:"6",width:"52",height:"55",rx:"1"},null),Object(a["createVNode"])("g",{transform:"translate(15 17)",fill:d(6)},[Object(a["createVNode"])("rect",{width:"34",height:"6",rx:"1"},null),Object(a["createVNode"])("path",{d:"M0 14h34v6H0z"},null),Object(a["createVNode"])("rect",{y:"28",width:"34",height:"6",rx:"1"},null)])]),Object(a["createVNode"])("rect",{fill:d(7),y:"61",width:"88",height:"28",rx:"1"},null),Object(a["createVNode"])("rect",{fill:"#F7F8FA",x:"29",y:"72",width:"30",height:"6",rx:"1"},null)])]),V=()=>Object(a["createVNode"])("svg",{viewBox:"0 0 160 160"},[Object(a["createVNode"])("defs",null,[Object(a["createVNode"])("linearGradient",{x1:"50%",x2:"50%",y2:"100%",id:r(8)},[u("#EAEDF1","#DCDEE0")])]),f(),j(),O("c"),Object(a["createVNode"])("path",{d:"m59 60 21 21 21-21h3l9 9v3L92 93l21 21v3l-9 9h-3l-21-21-21 21h-3l-9-9v-3l21-21-21-21v-3l9-9h3Z",fill:d(8)},null)]),p=()=>Object(a["createVNode"])("svg",{viewBox:"0 0 160 160"},[Object(a["createVNode"])("defs",null,[Object(a["createVNode"])("linearGradient",{x1:"50%",y1:"100%",x2:"50%",id:r(9)},[u("#EEE","#D8D8D8")]),Object(a["createVNode"])("linearGradient",{x1:"100%",y1:"50%",y2:"50%",id:r(10)},[u("#F2F3F5","#DCDEE0")]),Object(a["createVNode"])("linearGradient",{x1:"50%",x2:"50%",y2:"100%",id:r(11)},[u("#F2F3F5","#DCDEE0")]),Object(a["createVNode"])("linearGradient",{x1:"50%",x2:"50%",y2:"100%",id:r(12)},[u("#FFF","#F7F8FA")])]),f(),j(),O("d"),Object(a["createVNode"])("g",{transform:"rotate(-45 113 -4)",fill:"none"},[Object(a["createVNode"])("rect",{fill:d(9),x:"24",y:"52.8",width:"5.8",height:"19",rx:"1"},null),Object(a["createVNode"])("rect",{fill:d(10),x:"22.1",y:"67.3",width:"9.9",height:"28",rx:"1"},null),Object(a["createVNode"])("circle",{stroke:d(11),"stroke-width":"8",cx:"27",cy:"27",r:"27"},null),Object(a["createVNode"])("circle",{fill:d(12),cx:"27",cy:"27",r:"16"},null),Object(a["createVNode"])("path",{d:"M37 7c-8 0-15 5-16 12",stroke:d(11),"stroke-width":"3",opacity:".5","stroke-linecap":"round",transform:"rotate(45 29 13)"},null)])]),v=()=>{var c;if(t.image)return t.image();const o={error:V,search:p,network:h,default:g};return(null==(c=o[e.image])?void 0:c.call(o))||Object(a["createVNode"])("img",{src:e.image},null)};return()=>Object(a["createVNode"])("div",{class:s()},[Object(a["createVNode"])("div",{class:s("image"),style:Object(i["f"])(e.imageSize)},[v()]),c(),o()])}});const O=Object(o["a"])(u)},bc1b:function(e,t,c){},d4ef:function(e,t,c){},d9d2:function(e,t,c){},e31f:function(e,t,c){"use strict";c.d(t,"a",(function(){return f}));var o=c("23f9"),a=c("7a23"),l=c("1fba"),n=c("e5f6"),r=c("5aa0"),i=c("450f"),d=c("5913");const[s,b]=Object(l["a"])("switch"),u={size:n["f"],loading:Boolean,disabled:Boolean,modelValue:n["h"],activeColor:String,inactiveColor:String,activeValue:{type:n["h"],default:!0},inactiveValue:{type:n["h"],default:!1}};var O=Object(a["defineComponent"])({name:s,props:u,emits:["change","update:modelValue"],setup(e,{emit:t,slots:c}){const o=()=>e.modelValue===e.activeValue,l=()=>{if(!e.disabled&&!e.loading){const c=o()?e.inactiveValue:e.activeValue;t("update:modelValue",c),t("change",c)}},n=()=>{if(e.loading){const t=o()?e.activeColor:e.inactiveColor;return Object(a["createVNode"])(d["a"],{class:b("loading"),color:t},null)}if(c.node)return c.node()};return Object(i["useCustomFieldValue"])(()=>e.modelValue),()=>{var t;const{size:i,loading:d,disabled:s,activeColor:u,inactiveColor:O}=e,f=o(),j={fontSize:Object(r["b"])(i),backgroundColor:f?u:O};return Object(a["createVNode"])("div",{role:"switch",class:b({on:f,loading:d,disabled:s}),style:j,tabindex:s?void 0:0,"aria-checked":f,onClick:l},[Object(a["createVNode"])("div",{class:b("node")},[n()]),null==(t=c.background)?void 0:t.call(c)])}}});const f=Object(o["a"])(O)},ec5d:function(e,t,c){"use strict";c("68ef"),c("d4ef"),c("cb51"),c("3743"),c("e3b3"),c("bc1b"),c("1703"),c("a71a"),c("4d75"),c("2fcb")},f7d0:function(e,t,c){}}]);