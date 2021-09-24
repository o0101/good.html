(()=>{var __webpack_modules__={876:function(__unused_webpack_module,exports,__webpack_require__){!function(e){const t=""+Math.random(),n=(()=>{try{return self.DOMParser&&!0}catch(e){return!1}})(),r=[Symbol,Boolean,Number,String,Object,Set,Map,WeakMap,WeakSet,Uint8Array,Uint16Array,Uint32Array,Float32Array,Float64Array,Int8Array,Int16Array,Int32Array,Uint8ClampedArray,...n?[Node,NodeList,Element,HTMLElement,Blob,ArrayBuffer,FileList,Text,HTMLDocument,Document,DocumentFragment,Error,File,Event,EventTarget,URL]:[Buffer]],o=e=>null==e||null==e,a=new Map;function i(e,...t){const n=t.reduce(((t,n,r)=>t+n+e[r+1]),e[0]);if(!a.has(n))throw new TypeError(`Cannot use type ${n} before it is defined.`);return a.get(n).type}function s(e,t,{partial:n=!1}={}){b(e),g(e);const r=e.name,{spec:c,kind:u,help:d,verify:f,verifiers:h,sealed:y}=a.get(r),w=c?p(c).sort():[],_=new Set(w),v=[];switch(u){case"def":{let a=!0;if(c){const e=n?p(t,_):w;a=!o(t)&&e.every((e=>{const{resolved:n,errors:o}=l(t,e,(()=>{return t=l(c,e).resolved,n=i`None`,b(t),g(t),b(n),g(n),!(t!==n&&(!t.isSumType||!t.types.has(n))&&(!n.isSumType||!n.types.has(t))&&(!t.name.startsWith("?")||n!=i`None`)&&(!n.name.startsWith("?")||t!=i`None`)&&((t.name.startsWith(">")||n.name.startsWith(">"))&&console.error(new Error("Check type match has not been implemented for derived//sub types yet.")),1));var t,n}));if(v.push(...o),o.length)return!1;const a=l(c,e).resolved;if(!(a&&a instanceof m))return v.push({error:`Key path '${e}' is not present in the spec for type '${r}'`}),!1;const{valid:u,errors:d}=s(a,n);return v.push(...d),u}))}let u=!0;if(n&&!c&&f)throw new TypeError("Type checking with option 'partial' is not a valid option for types that only use a verify function but have no spec");if(f)try{if(u=f(t),!u){if(h)throw{error:`Type ${r} value '${JSON.stringify(t)}' violated at least 1 verify function in:\n${h.map((e=>"\t"+(e.help||"")+" ("+e.verify.toString()+")")).join("\n")}`};if(e.isSumType)throw{error:`Value '${JSON.stringify(t)}' did not match any of: ${[...e.types.keys()].map((e=>e.name))}`,verify:f,verifiers:h};{let e="";throw d&&(e=`Help: ${d}. `),{error:`${e}Type ${r} Value '${JSON.stringify(t)}' violated verify function in: ${f.toString()}`}}}}catch(e){v.push(e),u=!1}let k=!0;if(y&&c){const e=w,n=p(t,_).sort();if(k=n.join(",")==e.join(","),!k)if(n.length<e.length)k=!0;else{const t=[],o=new Set(e);for(const e of n)o.has(e)||t.push({error:`Key path '${e}' is not in the spec for type ${r}`});t.length&&v.push(...t)}}return{valid:a&&u&&k,errors:v,partial:n}}case"defCollection":{const{valid:e,errors:r}=s(c.container,t);let o=!0,a=!0;if(v.push(...r),n)throw new TypeError("Type checking with option 'partial' is not a valid option for Collection types");if(e&&(o=[...t].every((e=>{const{valid:t,errors:n}=s(c.member,e);return v.push(...n),t}))),f)try{a=f(t)}catch(e){v.push(e),a=!1}return{valid:e&&o&&a,errors:v}}default:throw new TypeError(`Checking for type kind ${u} is not yet implemented.`)}}function c(...e){return s(...e).valid}function l(e,t,n){if(o(e))throw new TypeError("Lookup requires a non-unset object.");if(!t)throw new TypeError("keyPath must not be empty");const r=t.split(/\./g),a=[],i=[];let s=e;for(;r.length;){const e=r.shift();if(s=s[e],a.push(e),null==s){r.length?i.push({error:`Lookup on key path '${t}' failed at '`+a.join(".")+`' when ${s} was found at '${e}'.`}):n&&n()?s=void 0:i.push({error:`Resolution on key path '${t}' failedwhen ${s} was found at '${e}' and the Type of thiskey's value cannot be None.`});break}}return{resolved:s,errors:i}}function u(e,t,{verify:n,help:r=""}={},o=""){let a;if(b(e),g(e),n||(n=()=>!0),e.native){a=[{help:r,verify:n}],n=t=>t instanceof e.native;const t=`Needs to be of type ${e.native.name}. ${r||""}`;a.push({help:t,verify:n})}return y(`${o}>${e.name}`,t,{verify:n,help:r,verifiers:a})}function d(e){return a.has(e)}function f(e){if(d(e))throw new TypeError(`Type ${e} cannot be redefined.`)}function p(e,t){const n=!t;return function e(r,o,a=""){if(w(r))return[];const i=Object.getOwnPropertyNames(r),s=i.map((e=>a+(a.length?".":"")+e));return i.forEach(((a,i)=>{const c=r[a];if(n)if(c instanceof m)o.add(s[i]);else{if("object"!=typeof c)throw new TypeError("Spec cannot contain leaf values that are not valid Types");if(Array.isArray(c))throw new TypeError("We don't support Types that use Arrays as structure, just yet.");e(c,o,s[i])}else t.has(s[i])?o.add(s[i]):"object"==typeof c?"_self"===a||(Array.isArray(c)?c.forEach(((t,n)=>e(t,o,s[i]+"."+n))):e(c,o,s[i])):o.add(s[i])})),[...o]}(e,new Set,"")}function h(e){b(e);const t=e.name;return i.def(`?${t}`,null,{verify:t=>w(t)||i.check(e,t)})}function m(e,t={}){if(!new.target)throw new TypeError("Type with new only.");if(Object.defineProperty(this,"name",{get:()=>e}),this.typeName=e,t.types){const{types:e}=t,n=new Set(e);Object.defineProperty(this,"isSumType",{get:()=>!0}),Object.defineProperty(this,"types",{get:()=>n})}if(t.native){const{native:e}=t;Object.defineProperty(this,"native",{get:()=>e})}}function y(e,t,{help:n="",verify:r,sealed:o,types:i,verifiers:s,native:c}={}){if(!e)throw new TypeError("Type must be named.");if(f(e),e.startsWith("?")){if(t)throw new TypeError("Option type can not have a spec.");if(!r(null))throw new TypeError("Option type must be OK to be unset.")}void 0===o&&(o=!0);const l=new m(e,{types:i,native:c}),u={spec:t,kind:"def",help:n,verify:r,verifiers:s,sealed:o,types:i,native:c,type:l};return a.set(e,u),l}function b(e){if(!(e instanceof m))throw new TypeError("Type must be a valid Type object.")}function g(e){const t=_(e);if(!d(t))throw new TypeError(`Type must exist. Type ${t} has not been defined.`)}function w(e){return null==e}function _(e){if(e&&e.name)return e.name;const t=Object.prototype.toString.call(e).replace(/\[object |\]/g,"");return t.endsWith("Constructor")?t.replace(/Constructor$/,""):t}i.def=y,i.check=c,i.sub=function(e){return i`>${e.name}`},i.verify=function(...e){return c(...e)},i.validate=s,i.partialMatch=function(e,t){return s(e,t,{partial:!0})},i.defEnum=function(e,...t){if(!e)throw new TypeError("Type must be named.");f(e);const n=new Set(t);return y(e,null,{verify:e=>n.has(e),help:`Value of Enum type ${e} must be one of ${t.join(",")}`})},i.defSub=u,i.defTuple=function(e,{pattern:t}){if(!e)throw new TypeError("Type must be named.");if(!t)throw new TypeError("Type must be specified.");const n={};t.forEach(((e,t)=>n[t]=e));const r=new m(e),o={kind:"def",spec:n,type:r};return a.set(e,o),r},i.defCollection=function(e,{container:t,member:n},{sealed:r=true,verify:o}={}){if(!e)throw new TypeError("Type must be named.");if(!t||!n)throw new TypeError("Type must be specified.");f(e);const i=new m(e),s={kind:"defCollection",spec:{container:t,member:n},verify:o,sealed:r,type:i};return a.set(e,s),i},i.defOr=function(e,...t){return i.def(e,null,{types:t,verify:e=>t.some((t=>c(t,e)))})},i.option=function(e){return i`?${e.name}`},i.defOption=h,i.maybe=function(e){try{return h(e)}catch(e){}return i`?${e.name}`},i.guard=function(e,t){b(e),g(e);const{valid:n,errors:r}=s(e,t);if(!n)throw new TypeError(`Type ${e} requested, but item is not of that type: ${r.join(", ")}`)},i.errors=function(...e){return s(...e).errors},i[Symbol.for("jtype-system.typeCache")]=a,i.def("Any",null,{verify:()=>!0}),i.def("Some",null,{verify:e=>!w(e)}),i.def("None",null,{verify:e=>w(e)}),i.def("Function",null,{verify:e=>e instanceof Function}),i.def("Integer",null,{verify:e=>Number.isInteger(e)}),i.def("Array",null,{verify:e=>Array.isArray(e)}),i.def("Iterable",null,{verify:e=>e[Symbol.iterator]instanceof Function}),r.forEach((e=>y(_(e),null,{native:e,verify:t=>_(t.constructor)===_(e)}))),r.forEach((e=>u(i`${_(e)}`))),m.prototype.toString=function(){return`${this.typeName} Type`},i.defOr("KeyValue",i`String`,i`Number`),i.def("Key",{key:i`KeyValue`});const v=i.def("Handlers",null,{verify:e=>{if(!i.check(i`Object`,e))return!1;const t=Object.keys(e),n=Object.values(e),r=t.every((e=>i.check(i`String`,e))),o=n.every((e=>i.check(i`Function`,e)));return r&&o}});i.defCollection("FuncArray",{container:i`Array`,member:i`Function`}),i.def("EmptyArray",null,{verify:e=>Array.isArray(e)&&0==e.length}),i.def("MarkupObject",{type:i`String`,code:i`String`,nodes:i`Array`,externals:i`Array`},{verify:e=>"MarkupObject"==e.type&&e.code==t}),i.def("MarkupAttrObject",{type:i`String`,code:i`String`,str:i`String`},{verify:e=>"MarkupAttrObject"==e.type&&e.code==t}),i.def("VanillaViewLikeObject",{code:i`String`,externals:i`Array`,nodes:i`Array`,to:i`Function`,update:i`Function`,v:i`Array`,oldVals:i`Array`}),i.def("VanillaViewObject",{code:i`String`,externals:i`Array`,nodes:i`Array`,to:i`Function`,update:i`Function`,v:i`Array`,oldVals:i`Array`},{verify:e=>function(e){return t===e.code}(e)}),i.def("BangObject",null,{verify:e=>e[Symbol.for("BANG-VV")]}),i.defOr("Component",i`VanillaViewObject`,i`BangObject`),i.defCollection("VanillaViewArray",{container:i`Array`,member:i`Component`}),i.def("SVanillaViewObject",{str:i`String`,handlers:v}),i.defCollection("SVanillaViewArray",{container:i`Array`,member:i`SVanillaViewObject`});const k=U,E=H,T=()=>{},S=/(?:<!\-\-)?(key\d+)(?:\-\->)?/gm,A=/\w+=/,O=20,C=e=>`'key' property must be a string. Was: ${e.key}`,N=new class{beforeend(e,t){t.appendChild(e)}beforebegin(e,t){t.parentNode.insertBefore(e,t)}afterend(e,t){t.parentNode.insertBefore(e,t.nextSibling)}replace(e,t){t.parentNode.replaceChild(e,t)}afterbegin(e,t){t.insertBefore(e,t.firstChild)}innerhtml(e,t){t.innerHTML="",t.appendChild(e)}insert(e,t){t.replaceChildren(e)}};globalThis.onerror=(...e)=>(console.log(e,e[0]+"",e[4]&&e[4].message,e[4]&&e[4].stack),!0);const j=e=>i.check(i`Key`,e),$={};async function F(e,...t){const n=this;let r,o=!1;if(0===e[0].length&&t[0].state&&(o=!0),o)return({state:r}=t.shift()),e.shift(),t=await Promise.all(t.map((e=>B(n,e,r)))),V(e,t);{const r=async r=>(t=await Promise.all(t.map((e=>B(n,e,r)))),V(e,t));return r}}function x(e,...t){return V(e,t,{useCache:!1})}function V(e,n,{useCache:r=!0}={}){const o={};let a,s;if(n=n.map(W),r){({key:a}=n.find(j)||{}),s=e.join("<link rel=join>");const{cached:t,firstCall:r}=function(e,t,n){let r,o=$[e];return null==o?(o=$[e]={},void 0!==n&&(o.instances={},o=o.instances[n]={}),r=!0):void 0!==n?o.instances?(o=o.instances[n],r=!o):(o.instances={},r=!0):r=!1,{cached:o,firstCall:r}}(s,0,a);if(!r)return t.update(n),t;o.oldVals=Array.from(n)}else o.oldVals=Array.from(n);e=[...e];const c={},l=n.map(function(e){return(t,n)=>{if(i.check(i`Key`,t))return"";const r=("key"+Math.random()).replace(".","").padEnd(O,"0").slice(0,O);let o=r;return(i.check(i`VanillaViewObject`,t)||i.check(i`MarkupObject`,t))&&(o=`\x3c!--${o}--\x3e`),e[r.trim()]={vi:n,val:t,replacers:[]},o}}(c)),u=[];let d="";for(;e.length>1;)d+=e.shift()+l.shift();d+=e.shift();const f=K(d),p=document.createTreeWalker(f,NodeFilter.SHOW_ALL);do{P({walker:p,vmap:c,externals:u})}while(p.nextNode());return Object.assign(o,{externals:u,v:Object.values(c),to:M,update:J,code:t,nodes:[...f.childNodes]}),r&&(void 0!==a?$[s].instances[a]=o:$[s]=o),o}async function B(e,t,n){if("string"==typeof t)return t;if("number"==typeof t)return t+"";if("boolean"==typeof t)return t+"";if(t instanceof Date)return t+"";if(function(e){return null==e}(t)){if(e.CONFIG.allowUnset)return e.CONFIG.unsetPlaceholder||"";throw new TypeError(`Value cannot be unset, was: ${t}`)}if(t instanceof Promise)return await B(e,await t.catch((e=>e+"")),n);if(t instanceof Element)return t.outerHTML;if(t instanceof Node)return t.textContent;const r=i.check(i`VanillaViewArray`,t);if(null!==(o=t)&&o[Symbol.iterator]instanceof Function&&!r)return B(e,await Promise.all((await Promise.all(Array.from(t)).catch((e=>err+""))).map((t=>B(e,t,n)))),n);var o;const a=j(t),s=i.check(i`MarkupObject`,t),c=i.check(i`MarkupAttrObject`,t),l=i.check(i`Component`,t);if(r||a||s||c||l)return r?z(t):t;if("AsyncFunction"===Object.getPrototypeOf(t).constructor.name)return await B(e,await t(n),n);if(t instanceof Function)return t(n);{let n;if(Object.prototype.hasOwnProperty.call(t,e.CONFIG.bangKey)){n=new e.StateKey(t[e.CONFIG.bangKey])+"";const r=e.STATE.get(n);e.STATE.delete(r),e.STATE.set(n,t),e.STATE.set(t,n)}else e.STATE.has(t)?n=e.STATE.get(t):(n=new e.StateKey+"",e.STATE.set(n,t),e.STATE.set(t,n));return n+="",n}}function M(e,t){const n=(t||"replace").toLocaleLowerCase(),r=document.createDocumentFragment();this.nodes.forEach((e=>r.appendChild(e)));const o=e instanceof Node?e:document.querySelector(e);try{N[n](r,o)}catch(t){switch(t.constructor&&t.constructor.name){case"DOMException":Y({error:"Error inserting template into DOM. Position must be one of: replace, beforebegin, afterbegin, beforeend, innerhtml, afterend"});break;case"TypeError":Y({error:(a=e,`Error inserting template into DOM. Location ${a} was not found in the document.`)});break;default:throw t}}for(var a;this.externals.length;)this.externals.shift()()}function P({walker:e,vmap:t,externals:n}){const r=e.currentNode;switch(r.nodeType){case Node.ELEMENT_NODE:!function({node:e,vmap:t,externals:n}){(function(e){if(!e.hasAttribute)return[];if(e.hasAttribute("class")&&e.setAttribute("class",R(e.getAttribute("class"))),e.attributes&&Number.isInteger(e.attributes.length))return Array.from(e.attributes);const t=[];for(const n of e)e.hasAttribute(n)&&t.push({name:n,value:e.getAttribute(n)});return t})(e).forEach((({name:r,value:o}={})=>{const a={node:e,vmap:t,externals:n,name:r,lengths:[]};S.lastIndex=0;let i=S.exec(r);for(;i;)D(i,a,{updateName:!0}),i=S.exec(r);for(S.lastIndex=0,i=S.exec(o);i;)D(i,a,{updateName:!1}),i=S.exec(o)}))}({node:r,vmap:t,externals:n});break;case Node.COMMENT_NODE:case Node.TEXT_NODE:!function({node:e,vmap:t,externals:n}){const r=[],o=e.nodeValue;let a=S.exec(o);for(;a;){const{index:i}=a,s=t[a[1]],c=L({node:e,index:i,lengths:r,val:s});n.push((()=>c(s.val))),s.replacers.push(c),a=S.exec(o)}}({node:r,vmap:t,externals:n})}}function L(e){const{node:t}=e,n=Object.assign({},e,{oldVal:{length:O},oldNodes:[t],lastAnchor:t});return e=>{if(n.oldVal!=e)switch(n.val.val=e,q(e)){case"markupobject":case"vanillaviewobject":!function(e,t){let{oldNodes:n,lastAnchor:r}=t;if(e.nodes.length)if(o=n,a=e.nodes,o.length==a.length&&Array.from(o).every(((e,t)=>e==a[t])));else{const n=[];for(Array.from(e.nodes).forEach((e=>{if(document.contains(e.ownerDocument))for(;n.length;){const t=n.shift();e.parentNode.insertBefore(t,e)}else n.push(e)}));n.length;){const e=n.shift();r.parentNode.insertBefore(e,r)}t.lastAnchor=e.nodes[e.nodes.length-1]}else{const e=function(e){let t=[...e.parentNode.childNodes].find((e=>e.isConnected&&e.nodeType==Node.COMMENT_NODE&&"vanillaview_placeholder"==e.nodeValue));return t||(t=K("\x3c!--vanillaview_placeholder--\x3e").firstChild),t}(r);r.parentNode.insertBefore(e,r.nextSibling),t.lastAnchor=e}var o,a;const i=(s=n,c=e.nodes,s=new Set(s),c=new Set(c),new Set([...s].filter((e=>!c.has(e)))));var s,c;if(i.size){const e=document.createDocumentFragment();i.forEach((t=>e.appendChild(t)))}for(t.oldNodes=e.nodes||[r];e.externals.length;)e.externals.shift()()}(e,n);break;default:!function(e,t){let{oldVal:n,index:r,val:o,lengths:a,node:i}=t;const s=o.vi,c=Object.keys(a.slice(0,s)).length*O,l=a.slice(0,s).reduce(((e,t)=>e+t),0),u=i.nodeValue;a[s]=e.length;const d=l-c,f=u.slice(0,r+d)+e+u.slice(r+d+n.length);i.nodeValue=f,i.linkedCustomElement&&f.match(/state[\s\S]*=/gm)&&i.linkedCustomElement.setAttribute("state",e),t.oldVal=e}(e,n)}}}function D(e,t,{updateName:n}){const{index:r,input:o}=e,a=Object.assign({},t,{index:r,input:o,updateName:n,val:t.vmap[e[1]],oldVal:{length:O},oldName:t.name});let s;s=n?function(e){let{oldName:t,node:n,val:r}=e;return e=>{if(t==e)return;r.val=e;const o=n.hasAttribute(t)?t:"";if(o!==e){if(o&&(n.removeAttribute(t),n[t]=void 0),e){let t,r=e=e.trim();if(A.test(e)){const n=e.indexOf("=");[r,t]=[e.slice(0,n),e.slice(n+1)]}I(n,r,t)}t=e}}}(a):function(e){const t=t=>{if(e.oldVal!=t)switch(e.val.val=t,q(t)){case"funcarray":!function(e,t){let{oldVal:n,node:r,name:o,externals:a}=t;if(n&&!Array.isArray(n)&&(n=[n]),"bond"!==o){let t={};o.includes(":")&&([o,...t]=o.split(":"),t=t.reduce(((e,t)=>(e[t]=!0,e)),{})),n&&n.forEach((e=>r.removeEventListener(o,e,t))),e.forEach((e=>r.addEventListener(o,e,t)))}else n&&n.forEach((e=>{const t=a.indexOf(e);t>=0&&a.splice(t,1)})),e.forEach((e=>a.push((()=>e(r)))));t.oldVal=e}(t,e);break;case"function":!function(e,t){let{oldVal:n,node:r,name:o,externals:a}=t;if("bond"!==o){let t={};o.includes(":")&&([o,...t]=o.split(":"),t=t.reduce(((e,t)=>(e[t]=!0,e)),{})),n&&r.removeEventListener(o,n,t),r.addEventListener(o,e,t),I(r,o,"")}else{if(n){const e=a.indexOf(n);e>=0&&a.splice(e,1)}a.push((()=>e(r)))}t.oldVal=e}(t,e);break;case"handlers":!function(e,t){let{oldVal:n,node:r,externals:o}=t;n&&i.check(i`Handlers`,n)&&Object.entries(n).forEach((([e,t])=>{if("bond"!==e){let n={};e.includes(":")&&([e,...n]=e.split(":"),n=n.reduce(((e,t)=>(e[t]=!0,e)),{})),console.log(e,t,n),r.removeEventListener(e,t,n)}else{const e=o.indexOf(t);e>=0&&o.splice(e,1)}})),Object.entries(e).forEach((([e,t])=>{if("bond"!==e){let n={};e.includes(":")&&([e,...n]=e.split(":"),n=n.reduce(((e,t)=>(e[t]=!0,e)),{})),r.addEventListener(e,t,n)}else o.push((()=>t(r)))})),t.oldVal=e}(t,e);break;case"markupobject":case"vanillaviewobject":G(t=function(e){const t=document.createDocumentFragment();e.forEach((e=>t.appendChild(e.cloneNode(!0))));const n=document.createElement("body");return n.appendChild(t),n.innerHTML}(t.nodes),e);break;case"markupattrobject":t=t.str;default:G(t,e)}};return t(e.val.val),t}(a),a.externals.push((()=>s(a.val.val))),a.val.replacers.push(s)}function G(e,t){let{oldVal:n,node:r,index:o,name:a,val:i,lengths:s}=t,c=0;const l=i.vi,u=Object.keys(s.slice(0,l)).length*O;"class"==a&&(0==(e=e.trim()).length&&(c=-1),t.val.val=e),s[l]=e.length+c;let d=r.getAttribute(a);const f=s.slice(0,l).reduce(((e,t)=>e+t),0)-u,p=d.slice(0,o+f),h=d.slice(o+f+n.length);let m;if("class"==a){const t=0==n.length?" ":"";m=p+t+e+t+h}else m=p+e+h;I(r,a,m),t.oldVal=e}function I(e,t,n){"class"==t&&(n=R(n));try{e.setAttribute(t,n)}catch(e){}try{e[t]=null==n||n}catch(e){}}function q(e){return i.check(i`Function`,e)?"function":i.check(i`Handlers`,e)?"handlers":i.check(i`VanillaViewObject`,e)?"vanillaviewobject":i.check(i`MarkupObject`,e)?"markupobject":i.check(i`MarkupAttrObject`,e)?"markupattrobject":i.check(i`VanillaViewArray`,e)?"vanillaviewarray":i.check(i`FuncArray`,e)?"funcarray":"default"}function U(e){const n=K(e=i.check(i`None`,e)?"":e);return{type:"MarkupObject",code:t,nodes:[...n.childNodes],externals:[]}}function H(e){return e=(e=i.check(i`None`,e)?"":e).replace(/"/g,"&quot;"),{type:"MarkupAttrObject",code:t,str:e}}function R(e){return(e=e.trim()).replace(/\s+/g," ")}function K(e){const t=(new DOMParser).parseFromString(`<template>${e}</template>`,"text/html").head.firstElementChild;let n;if(t instanceof HTMLTemplateElement)return n=t.content,n.normalize(),n;throw new TypeError(`Could not find template element after parsing string to DOM:\n=START=\n${e}\n=END=`)}function W(e){const t=i.check(i`Function`,e),n=i.check(i`None`,e),r=i.check(i`Object`,e),o=i.check(i`VanillaViewArray`,e),a=i.check(i`FuncArray`,e),s=i.check(i`MarkupObject`,e),c=i.check(i`MarkupAttrObject`,e),l=i.check(i`VanillaViewObject`,e),u=i.check(i`VanillaViewLikeObject`,e)&&!l;return t||l||j(e)||(e=>i.check(i`Handlers`,e))(e)?e:o?z(e):a||s||c?e:(n&&Y({error:"Unset values not allowed here."}),u&&Y({error:"Possible XSS / object forgery attack detected. Object code could not be verified."}),r&&("key"===Object.keys(e).join(",")?Y({error:C(e)}):Y({error:"Object values not allowed here."})),e+"")}function z(e){console.log(e);const n=[],r=[];e.forEach((e=>{n.push(...e.externals),r.push(...e.nodes)}));const o={v:[],code:t,oldVals:[],nodes:r,to:M,update:J,externals:n};return console.log(o),o}function J(e){this.v.filter((({vi:t})=>function(e,t){const[n,r]=[e,t].map(q);let o;if(n!=r)o=!0;else switch(n){case"vanillaviewobject":case"funcarray":case"function":case"vanillaviewarray":case"markupattrobject":case"markupobject":o=!0;break;default:o=JSON.stringify(e)!==JSON.stringify(t)}return o}(e[t],this.oldVals[t]))).forEach((({vi:t,replacers:n})=>n.forEach((n=>n(e[t]))))),this.oldVals=Array.from(e)}function Y(e,t){throw e.stack=(new Error).stack.split(/\s*\n\s*/g),JSON.stringify(e,null,2)}Object.assign(F,{say:function(e){},attrskip:E,skip:k,attrmarkup:H,markup:U,guardEmptyHandlers:function(e){return Array.isArray(e)?0==e.length?[T]:e:i.check(i`None`,e)?T:void 0},die:Y}),Object.assign(globalThis,{vanillaview:{c:x,s:F,T:i}}),e.c=x,e.s=F,Object.defineProperty(e,"__esModule",{value:!0})}(exports);{const DEBUG=!1,GET_ONLY=!1,LEGACY=!1,MOBILE=isMobile(),DOUBLE_BARREL=/\w+-\w*/,F=_FUNC,FUNC_CALL=/\);?$/,CONFIG={htmlFile:"markup.html",scriptFile:"script.js",styleFile:"style.css",bangKey:"_bang_key",componentsPath:"./components",allowUnset:!1,unsetPlaceholder:"",EVENTS:"error load click pointerdown pointerup pointermove mousedown mouseup \n        mousemove touchstart touchend touchmove touchcancel dblclick dragstart dragend \n        dragmove drag mouseover mouseout focus blur focusin focusout scroll\n        input change compositionstart compositionend text paste beforepast select cut copy\n      ".split(/\s+/g).filter((e=>e.length)).map((e=>`on${e}`)),delayFirstPaintUntilLoaded:!0,noHandlerPassthrough:!1},STATE=new Map,CACHE=new Map,Started=new Set,TRANSFORMING=new WeakSet,Dependents=new Map,Counts={started:0,finished:0},OBSERVE_OPTS={subtree:!0,childList:!0,characterData:!0};let observer,systemKeys=1,_c$;const BangBase=e=>class t extends HTMLElement{static#e=["state"];static get observedAttributes(){return Array.from(t.#e)}#t=e;constructor(){super(),DEBUG&&say("log",e,"constructed"),this.print()}get name(){return this.#t}print(){Counts.started++,this.prepareVisibility();const e=this.handleAttrs(this.attributes,{originals:!0});return this.printShadow(e)}prepareVisibility(){this.classList.add("bang-el"),this.classList.remove("bang-styled"),fetchStyle(e).catch((e=>this.setVisible()))}setVisible(){this.classList.add("bang-styled")}attributeChangedCallback(e,t,n){"state"!==e||isUnset(t)||(DEBUG&&say("log","Changing state, so calling print.",t,n,this),this.print())}connectedCallback(){say("log",e,"connected")}handleAttrs(e,{node:t,originals:n}={}){let r;t||(t=this);for(let{name:o,value:a}of e)if(!isUnset(a))if("state"===o){const e=a,i=STATE.get(e);if(isUnset(i))throw new TypeError(`\n                <${o}> constructor passed state key ${e} which is unset. It must be set.\n              `);if(r=i,n){let n=Dependents.get(e);n||(n=new Set,Dependents.set(e,n)),n.add(t)}}else if(n){if(!o.startsWith("on"))continue;if(a=a.trim(),!a)continue;if(!this[a])continue;const e=t===this?"this.":"this.getRootNode().host.";if(a.startsWith(e))continue;const n=a.match(FUNC_CALL)||"function"!=typeof this[a]?"":"(event)";t.setAttribute(o,`${e}${a}${n}`)}return r}printShadow(e){return fetchMarkup(this.#t,this).then((async t=>{const n=await cook.call(this,t,e);if(LEGACY){const t=toDOM(n);if(t.querySelectorAll(CONFIG.EVENTS.map((e=>`[${e}]`)).join(", ")).forEach((e=>this.handleAttrs(e.attributes,{node:e,originals:!0}))),DEBUG&&say("log",t,n,e),this.shadowRoot)this.shadowRoot.replaceChildren(t);else{const e=this.attachShadow({mode:"open"});console.log({observer}),observer.observe(e,OBSERVE_OPTS),e.replaceChildren(t)}}else if(this.shadowRoot);else{const e=this.attachShadow({mode:"open"});observer.observe(e,OBSERVE_OPTS),n.to(e,"insert"),e.querySelectorAll(CONFIG.EVENTS.map((e=>`[${e}]`)).join(", ")).forEach((e=>this.handleAttrs(e.attributes,{node:e,originals:!0})))}})).catch((e=>DEBUG&&say("warn",e))).finally((()=>Counts.finished++))}};class StateKey extends String{constructor(e){super(null==e?"system-key:"+systemKeys++:`client-key:${e}`)}}async function use(name){let component;await fetchScript(name).then((script=>{const Base=BangBase(name),Compose=`(function () { ${Base.toString()}; return ${script}; }())`;try{component=eval(Compose)}catch(e){DEBUG&&say("warn",e,Compose,component)}})).catch((()=>{component=BangBase(name)})),self.customElements.define(name,component),DEBUG&&self.customElements.whenDefined(name).then((e=>say("log",name,"defined",e)))}function bangfig(e={}){Object.assign(CONFIG,e)}function setState(e,t,n=!1,r=!0){if(GET_ONLY&&STATE.has(e)?Object.assign(STATE.get(e),t):(STATE.set(e,t),STATE.set(t,e)),document.body&&n){Array.from(document.querySelectorAll(":not(body).bang-styled")).forEach((e=>e.classList.remove("bang-styled")));const e=document.body.innerHTML;document.body.innerHTML="",document.body.innerHTML=e}else if(r){const t=Dependents.get(e);t&&t.forEach((e=>e.print()))}}function patchState(e,t){return setState(e,t,!1,!1)}function cloneState(e,t=GET_ONLY){if(t)return STATE.get(e);if(STATE.has(e))return JSON.parse(JSON.stringify(STATE.get(e)));throw new TypeError(`State store does not have the key ${e}`)}async function loaded(){return becomesTrue((()=>{const e=Counts.started>0,t=Counts.finished===Counts.started;return e&&t}))}async function bangLoaded(){return becomesTrue((()=>"function"==typeof _c$))}async function install(){Object.assign(globalThis,{use,setState,patchState,cloneState,loaded,sleep,bangfig,bangLoaded,isMobile,trace,dateString,...DEBUG?{STATE,CACHE,TRANSFORMING,Started,BangBase}:{}});const e=globalThis.vanillaview||await __webpack_require__.e(185).then(__webpack_require__.bind(__webpack_require__,185)),{s:t}=e,n={STATE,CONFIG,StateKey};_c$=t.bind(n),n._c$=_c$,CONFIG.delayFirstPaintUntilLoaded&&becomesTrue((()=>document.body)).then((()=>document.body.classList.add("bang-el"))),observer=new MutationObserver(transformBangs),observer.observe(document,OBSERVE_OPTS),findBangs(transformBang),loaded().then((()=>document.body.classList.add("bang-styled")))}async function fetchMarkup(e,t){const n=`markup:${e}`;Started.has(n)?CACHE.has(n)||await becomesTrue((()=>CACHE.has(n))):Started.add(n);const r=`style${e}`,o=`${CONFIG.componentsPath}/${e}`;if(CACHE.has(n)){const e=CACHE.get(n);if(CACHE.get(r)instanceof Error&&t.setVisible(),!(CACHE.get(r)instanceof Error&&e.includes(`href=${o}/${CONFIG.styleFile}`)))return t.setVisible(),e}const a=`${o}/${CONFIG.htmlFile}`;let i;return await fetch(a).then((async n=>{let o="";return o=n.ok?await n.text():"<slot></slot>",CACHE.get(r)instanceof Error?(i=`<style>\n            @import url('${CONFIG.componentsPath}/style.css');\n          </style>${o}`,t.setVisible()):(i=`<style>\n            @import url('${CONFIG.componentsPath}/style.css');\n            ${await fetchStyle(e).then((t=>t instanceof Error?`/* no ${e}/style.css defined */`:t))}\n          </style>${o}`,t.setVisible()),i})).finally((async()=>CACHE.set(n,await i)))}async function fetchFile(e,t){const n=`${t}:${e}`;if(Started.has(n)?CACHE.has(n)||await becomesTrue((()=>CACHE.has(n))):Started.add(n),CACHE.has(n))return CACHE.get(n);const r=`${CONFIG.componentsPath}/${e}/${t}`;let o;return await fetch(r).then((e=>{if(e.ok)return o=e.text(),o;throw o=new TypeError(`Fetch error: ${r}, ${e.statusText}`),o})).finally((async()=>CACHE.set(n,await o)))}async function fetchStyle(e){return fetchFile(e,CONFIG.styleFile)}async function fetchScript(e){return fetchFile(e,CONFIG.scriptFile)}function transformBangs(e){e.forEach((e=>{DEBUG&&say("log",e);const{addedNodes:t}=e;t&&t.forEach((e=>findBangs(transformBang,e)))}))}function transformBang(e){DEBUG&&say("log",{transformBang},{current:e});const[t,n]=getBangDetails(e);DEBUG&&say("log",{name:t,data:n});const r=createElement(t,n);e.linkedCustomElement=r,e.parentNode.replaceChild(r,e)}function findBangs(e,t=document.documentElement){const n={acceptNode(e){if(e.nodeType!==Node.COMMENT_NODE)return NodeFilter.FILTER_SKIP;const[t]=getBangDetails(e);return t.match(DOUBLE_BARREL)?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_REJECT}},r=document.createTreeWalker(t,NodeFilter.SHOW_COMMENT,n),o=[];let a=r.currentNode;if(n.acceptNode(a)===NodeFilter.FILTER_ACCEPT&&!TRANSFORMING.has(a)){TRANSFORMING.add(a);const e=a;o.push((()=>transformBang(e)))}for(;a=r.nextNode(),a;)if(!TRANSFORMING.has(a)){TRANSFORMING.add(a);const e=a;o.push((()=>transformBang(e)))}for(;o.length;)o.pop()()}function getBangDetails(e){const t=e.textContent.trim(),[n,...r]=t.split(/[\s\t]/g);return[n,r.join(" ")]}async function process(e,t){if("string"==typeof e)return e;if("number"==typeof e)return e+"";if("boolean"==typeof e)return e+"";if(e instanceof Date)return e+"";if(isUnset(e)){if(CONFIG.allowUnset)return CONFIG.unsetPlaceholder||"";throw new TypeError(`Value cannot be unset, was: ${e}`)}if(e instanceof Promise)return await e.catch((e=>e+""));if(e instanceof Element)return e.outerHTML;if(e instanceof Node)return e.textContent;if(isIterable(e))return(await Promise.all((await Promise.all(Array.from(e)).catch((e=>err+""))).map((e=>process(e,t))))).join(" ");if("AsyncFunction"===Object.getPrototypeOf(e).constructor.name)return await e(t);if(e instanceof Function)return e(t);{let t;if(Object.prototype.hasOwnProperty.call(e,CONFIG.bangKey)){t=new StateKey(e[CONFIG.bangKey])+"";const n=STATE.get(t);STATE.delete(n),STATE.set(t,e),STATE.set(e,t)}else STATE.has(e)?t=STATE.get(e):(t=new StateKey+"",STATE.set(t,e),STATE.set(e,t));return t+="",DEBUG&&say("log",{stateKey:t}),t}}async function cook(markup,state){let cooked="";try{Object.prototype.hasOwnProperty.call(state,"_self")||Object.defineProperty(state,"_self",{get:()=>state}),DEBUG&&say("log","_self",state._self)}catch(e){DEBUG&&say("warn","Cannot add '_self' self-reference property to state. \n            This enables a component to inspect the top-level state object it is passed.")}try{with(state)cooked=await eval("(async function () { return await _FUNC`${{state}}"+markup+"`; }())");return DEBUG&&console.log({cooked}),cooked}catch(error){throw say("error","Template error",{markup,state,error}),error}}async function _FUNC(e,...t){const n=Array.from(e);return await _c$(n,...t)}async function old_FUNC(e,...t){const n=Array.from(e);let r=!1,o="";if(DEBUG&&say("log",n.join("${}")),0===n[0].length&&t[0].state&&(r=!0),r){const{state:e}=t.shift();for(n.shift(),t=await Promise.all(t.map((t=>process(t,e)))),DEBUG&&say("log","System _FUNC call: "+t.join(", "));n.length;)o+=n.shift(),t.length&&(o+=t.shift());return o}return async e=>{for(t=await Promise.all(t.map((t=>process(t,e)))),DEBUG&&say("log","in-template _FUNC call:"+t.join(", "));n.length;)o+=n.shift(),t.length&&(o+=t.shift());return o}}function createElement(e,t){const n=document.createDocumentFragment(),r=document.createElement("div");return n.appendChild(r),r.insertAdjacentHTML("afterbegin",`<${e} ${t}></${e}>`),r.firstElementChild}function toDOM(e){const t=(new DOMParser).parseFromString(`<template>${e}</template>`,"text/html").head.firstElementChild.content;return t.normalize(),t}async function becomesTrue(e=(()=>!0)){return new Promise((async t=>{for(;await sleep(47),!e(););t()}))}async function sleep(e){return new Promise((t=>setTimeout(t,e)))}function isIterable(e){return null!==e&&e[Symbol.iterator]instanceof Function}function isUnset(e){return null==e}function say(e,...t){(DEBUG||"error"===e||e.endsWith("!"))&&MOBILE&&alert(`${e}: ${t.join("\n")}`),(DEBUG||"error"===e||e.endsWith("!"))&&console[e.replace("!","")](...t)}function isMobile(){let e=!1;var t;return t=navigator.userAgent||navigator.vendor||window.opera,(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(t)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(t.substr(0,4)))&&(e=!0),e}function trace(e=""){const t=new Error("Trace");console.log(e,"Call stack",t.stack)}function dateString(e){const t=e.getTimezoneOffset();return(e=new Date(e.getTime()-60*t*1e3)).toISOString().split("T")[0]}install()}}},__webpack_module_cache__={},inProgress,dataWebpackPrefix;function __webpack_require__(e){var t=__webpack_module_cache__[e];if(void 0!==t)return t.exports;var n=__webpack_module_cache__[e]={exports:{}};return __webpack_modules__[e].call(n.exports,n,n.exports,__webpack_require__),n.exports}__webpack_require__.m=__webpack_modules__,__webpack_require__.d=(e,t)=>{for(var n in t)__webpack_require__.o(t,n)&&!__webpack_require__.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},__webpack_require__.f={},__webpack_require__.e=e=>Promise.all(Object.keys(__webpack_require__.f).reduce(((t,n)=>(__webpack_require__.f[n](e,t),t)),[])),__webpack_require__.u=e=>e+".bang.js",__webpack_require__.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),__webpack_require__.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),inProgress={},dataWebpackPrefix="bang.html:",__webpack_require__.l=(e,t,n,r)=>{if(inProgress[e])inProgress[e].push(t);else{var o,a;if(void 0!==n)for(var i=document.getElementsByTagName("script"),s=0;s<i.length;s++){var c=i[s];if(c.getAttribute("src")==e||c.getAttribute("data-webpack")==dataWebpackPrefix+n){o=c;break}}o||(a=!0,(o=document.createElement("script")).charset="utf-8",o.timeout=120,__webpack_require__.nc&&o.setAttribute("nonce",__webpack_require__.nc),o.setAttribute("data-webpack",dataWebpackPrefix+n),o.src=e),inProgress[e]=[t];var l=(t,n)=>{o.onerror=o.onload=null,clearTimeout(u);var r=inProgress[e];if(delete inProgress[e],o.parentNode&&o.parentNode.removeChild(o),r&&r.forEach((e=>e(n))),t)return t(n)},u=setTimeout(l.bind(null,void 0,{type:"timeout",target:o}),12e4);o.onerror=l.bind(null,o.onerror),o.onload=l.bind(null,o.onload),a&&document.head.appendChild(o)}},__webpack_require__.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e;__webpack_require__.g.importScripts&&(e=__webpack_require__.g.location+"");var t=__webpack_require__.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var n=t.getElementsByTagName("script");n.length&&(e=n[n.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),__webpack_require__.p=e})(),(()=>{var e={179:0};__webpack_require__.f.j=(t,n)=>{var r=__webpack_require__.o(e,t)?e[t]:void 0;if(0!==r)if(r)n.push(r[2]);else{var o=new Promise(((n,o)=>r=e[t]=[n,o]));n.push(r[2]=o);var a=__webpack_require__.p+__webpack_require__.u(t),i=new Error;__webpack_require__.l(a,(n=>{if(__webpack_require__.o(e,t)&&(0!==(r=e[t])&&(e[t]=void 0),r)){var o=n&&("load"===n.type?"missing":n.type),a=n&&n.target&&n.target.src;i.message="Loading chunk "+t+" failed.\n("+o+": "+a+")",i.name="ChunkLoadError",i.type=o,i.request=a,r[1](i)}}),"chunk-"+t,t)}};var t=(t,n)=>{var r,o,[a,i,s]=n,c=0;if(a.some((t=>0!==e[t]))){for(r in i)__webpack_require__.o(i,r)&&(__webpack_require__.m[r]=i[r]);s&&s(__webpack_require__)}for(t&&t(n);c<a.length;c++)o=a[c],__webpack_require__.o(e,o)&&e[o]&&e[o][0](),e[a[c]]=0},n=globalThis.webpackChunkbang_html=globalThis.webpackChunkbang_html||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})();var __webpack_exports__=__webpack_require__(876)})();