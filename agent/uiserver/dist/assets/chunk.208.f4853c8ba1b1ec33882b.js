"use strict";(globalThis.webpackChunk_ember_auto_import_=globalThis.webpackChunk_ember_auto_import_||[]).push([[208],{74208:(e,t,n)=>{n.r(t),n.d(t,{ClipboardItem:()=>J,read:()=>Y,readText:()=>G,setDebugLog:()=>l,suppressWarnings:()=>d,write:()=>X,writeText:()=>q})
var r="text/plain",o="text/html",i=e=>{}
function a(e){i(e)}function l(e){i=e}var u=!0
function d(){u=!1}(function(){(console.warn||console.log).apply(console,arguments)}).bind("[clipboard-polyfill]")
var c,s,p,v,f,w,m,b,g="undefined"==typeof window?void 0:window,y="undefined"==typeof globalThis?void 0:globalThis,h=null!=(p=null==(c=g)?void 0:c.Promise)?p:null==(s=y)?void 0:s.Promise,x="undefined"==typeof navigator?void 0:navigator,T=null==x?void 0:x.clipboard,E=null==(v=null==T?void 0:T.read)?void 0:v.bind(T),C=null==(f=null==T?void 0:T.readText)?void 0:f.bind(T),D=null==(w=null==T?void 0:T.write)?void 0:w.bind(T),k=null==(m=null==T?void 0:T.writeText)?void 0:m.bind(T),S=null==(b=g)?void 0:b.ClipboardItem,U=function(){if(!h)throw new Error("No `Promise` implementation available for `clipboard-polyfill`. Consider using: https://github.com/lgarron/clipboard-polyfill#flat-file-version-with-promise-included")
return h}(),_=g
function A(){return"undefined"==typeof ClipboardEvent&&void 0!==(null==_?void 0:_.clipboardData)&&void 0!==(null==_?void 0:_.clipboardData.setData)}function O(e,t,n){for(var o in a("listener called"),e.success=!0,t){var i=t[o],l=n.clipboardData
l.setData(o,i),o===r&&l.getData(o)!==i&&(a("setting text/plain failed"),e.success=!1)}n.preventDefault()}function R(e){var t={success:!1},n=O.bind(this,t,e)
document.addEventListener("copy",n)
try{document.execCommand("copy")}finally{document.removeEventListener("copy",n)}return t.success}function I(e,t){L(e)
var n=R(t)
return M(),n}function L(e){var t=document.getSelection()
if(t){var n=document.createRange()
n.selectNodeContents(e),t.removeAllRanges(),t.addRange(n)}}function M(){var e=document.getSelection()
e&&e.removeAllRanges()}function N(e){var t=r in e
if(A()){if(!t)throw new Error("No `text/plain` value was specified.")
if(function(e){if(!_.clipboardData)return!1
var t=_.clipboardData.setData("Text",e)
return t&&a("writeTextIE worked"),t}(e[r]))return!0
throw new Error("Copying failed, possibly because the user rejected it.")}return R(e)?(a("regular execCopy worked"),!0):navigator.userAgent.indexOf("Edge")>-1?(a('UA "Edge" => assuming success'),!0):I(document.body,e)?(a("copyUsingTempSelection worked"),!0):function(e){var t=document.createElement("div")
t.setAttribute("style","-webkit-user-select: text !important"),t.textContent="temporary element",document.body.appendChild(t)
var n=I(t,e)
return document.body.removeChild(t),n}(e)?(a("copyUsingTempElem worked"),!0):!!function(e){a("copyTextUsingDOM")
var t=document.createElement("div")
t.setAttribute("style","-webkit-user-select: text !important")
var n=t
t.attachShadow&&(a("Using shadow DOM."),n=t.attachShadow({mode:"open"}))
var r=document.createElement("span")
r.innerText=e,n.appendChild(r),document.body.appendChild(t),L(r)
var o=document.execCommand("copy")
return M(),document.body.removeChild(t),o}(e[r])&&(a("copyTextUsingDOM worked"),!0)}function P(e,t){for(var n=[],r=0;r<e.length;r++){var o=e[r]
n.push(t(o))}return U.all(n).then((t=>{for(var n={},r=0;r<e.length;r++)n[e[r]]=t[r]
return n}))}var j=U.resolve(),W=()=>U.resolve(!0),B=U.resolve(!1)
function F(e){return new U(((t,n)=>{try{t(e())}catch(e){n(e)}}))}function q(e){return k?(a("Using `navigator.clipboard.writeText()`."),k(e).catch((()=>z(e)))):z(e)}function z(e){return F((()=>U.resolve(function(e){if(!N(function(e){var t={}
return t[r]=e,t}(e)))throw new Error("writeText() failed")}(e))))}function G(){return F((()=>{if(C)return a("Using `navigator.clipboard.readText()`."),C()
if(A()){var e=function(){if(!_.clipboardData)throw new Error("Cannot read IE clipboard Data ")
var e=_.clipboardData.getData("Text")
if(""===e)throw new Error("Empty clipboard or could not read plain text from clipboard")
return e}()
return U.resolve(e)}throw new Error("Read is not supported in your browser.")}))}function H(e,t){for(var n=0;n<e.length;n++)if(-1!==e[n].types.indexOf(t))return!0
return!1}var J=function(e,t){var n,r=Object.keys(e),o={}
for(var i in e){var a=e[i]
o[i]="string"==typeof a?K(i,a):a}return{types:r,presentationStyle:null!=(n=null==t?void 0:t.presentationStyle)?n:"unspecified",getType:function(e){return U.resolve(o[e])}}}
function K(e,t){return new Blob([t],{type:e})}function Q(e){return P(e.types,(function(t){return e.getType(t)})).then((t=>new U(((n,r)=>{var o={}
e.presentationStyle&&(o.presentationStyle=e.presentationStyle),S?n(new S(t,o)):r("window.ClipboardItem is not defined")}))))}function V(e){var t={}
return t[r]=K(e,r),new J(t)}function X(e){return F((()=>{if(D&&S){var t=D
return a("Using `navigator.clipboard.write()`."),U.all(e.map(Q)).then((n=>t(n).then(W).catch((t=>{if(!H(e,r)&&!H(e,o))throw t
return B}))))}return B})).then((t=>{if(t)return j
var n=H(e,r)
return u&&!n&&a("clipboard.write() was called without a `text/plain` data type. On some platforms, this may result in an empty clipboard. Call suppressWarnings() to suppress this warning."),function(e){return P(e.types,(function(t){return function(e,t){return e.getType(t).then((e=>{return t=e,new U(((e,n)=>{var r=new FileReader
r.addEventListener("load",(()=>{var t=r.result
"string"==typeof t?e(t):n("could not convert blob to string")})),r.readAsText(t)}))
var t}))}(e,t)}))}(e[0]).then((e=>{if(!N(e))throw new Error("write() failed")}))}))}function Y(){return F((()=>E?(a("Using `navigator.clipboard.read()`."),E()):G().then((e=>[V(e)]))))}}}])
