"use strict";(globalThis.webpackChunk_ember_auto_import_=globalThis.webpackChunk_ember_auto_import_||[]).push([[504],{55504:(e,t,n)=>{n.r(t),n.d(t,{blockComment:()=>h,blockUncomment:()=>m,copyLineDown:()=>Kt,copyLineUp:()=>qt,cursorCharBackward:()=>ne,cursorCharBackwardLogical:()=>ie,cursorCharForward:()=>te,cursorCharForwardLogical:()=>le,cursorCharLeft:()=>Z,cursorCharRight:()=>ee,cursorDocEnd:()=>kt,cursorDocStart:()=>yt,cursorGroupBackward:()=>de,cursorGroupForward:()=>ue,cursorGroupForwardWin:()=>he,cursorGroupLeft:()=>se,cursorGroupRight:()=>ce,cursorLineBoundaryBackward:()=>Oe,cursorLineBoundaryForward:()=>Te,cursorLineBoundaryLeft:()=>Ie,cursorLineBoundaryRight:()=>Re,cursorLineDown:()=>Ee,cursorLineEnd:()=>Fe,cursorLineStart:()=>Ve,cursorLineUp:()=>Be,cursorMatchingBracket:()=>Ne,cursorPageDown:()=>Me,cursorPageUp:()=>Le,cursorSubwordBackward:()=>ke,cursorSubwordForward:()=>ye,cursorSyntaxLeft:()=>ve,cursorSyntaxRight:()=>Ae,defaultKeymap:()=>un,deleteCharBackward:()=>Lt,deleteCharBackwardStrict:()=>Mt,deleteCharForward:()=>bt,deleteGroupBackward:()=>Ot,deleteGroupForward:()=>It,deleteLine:()=>$t,deleteLineBoundaryBackward:()=>Ft,deleteLineBoundaryForward:()=>Ut,deleteToLineEnd:()=>Rt,deleteToLineStart:()=>Vt,deleteTrailingWhitespace:()=>Nt,emacsStyleKeymap:()=>sn,history:()=>E,historyField:()=>D,historyKeymap:()=>q,indentLess:()=>rn,indentMore:()=>nn,indentSelection:()=>tn,indentWithTab:()=>dn,insertBlankLine:()=>Xt,insertNewline:()=>jt,insertNewlineAndIndent:()=>Qt,insertNewlineKeepIndent:()=>Yt,insertTab:()=>an,invertedEffects:()=>A,isolateHistory:()=>v,lineComment:()=>u,lineUncomment:()=>d,moveLineDown:()=>zt,moveLineUp:()=>Wt,redo:()=>M,redoDepth:()=>R,redoSelection:()=>T,selectAll:()=>vt,selectCharBackward:()=>_e,selectCharBackwardLogical:()=>Ke,selectCharForward:()=>ze,selectCharForwardLogical:()=>qe,selectCharLeft:()=>Pe,selectCharRight:()=>We,selectDocEnd:()=>St,selectDocStart:()=>wt,selectGroupBackward:()=>Xe,selectGroupForward:()=>Qe,selectGroupForwardWin:()=>Ze,selectGroupLeft:()=>je,selectGroupRight:()=>Ye,selectLine:()=>At,selectLineBoundaryBackward:()=>ft,selectLineBoundaryForward:()=>dt,selectLineBoundaryLeft:()=>ht,selectLineBoundaryRight:()=>mt,selectLineDown:()=>at,selectLineEnd:()=>gt,selectLineStart:()=>pt,selectLineUp:()=>it,selectMatchingBracket:()=>Ge,selectPageDown:()=>ut,selectPageUp:()=>ct,selectParentSyntax:()=>Ct,selectSubwordBackward:()=>nt,selectSubwordForward:()=>tt,selectSyntaxLeft:()=>rt,selectSyntaxRight:()=>ot,simplifySelection:()=>Bt,splitLine:()=>Gt,standardKeymap:()=>cn,temporarilySetTabFocusMode:()=>ln,toggleBlockComment:()=>f,toggleBlockCommentByLine:()=>p,toggleComment:()=>a,toggleLineComment:()=>c,toggleTabFocusMode:()=>on,transposeChars:()=>Jt,undo:()=>L,undoDepth:()=>I,undoSelection:()=>b})
var r=n(73654),o=n(27235),l=n(47304),i=n(7363)
const a=e=>{let{state:t}=e,n=t.doc.lineAt(t.selection.main.from),r=g(e.state,n.from)
return r.line?c(e):!!r.block&&p(e)}
function s(e,t){return n=>{let{state:r,dispatch:o}=n
if(r.readOnly)return!1
let l=e(t,r)
return!!l&&(o(r.update(l)),!0)}}const c=s(w,0),u=s(w,1),d=s(w,2),f=s(k,0),h=s(k,1),m=s(k,2),p=s(((e,t)=>k(e,t,function(e){let t=[]
for(let n of e.selection.ranges){let r=e.doc.lineAt(n.from),o=n.to<=r.to?r:e.doc.lineAt(n.to)
o.from>r.from&&o.from==n.to&&(o=n.to==r.to+1?r:e.doc.lineAt(n.to-1))
let l=t.length-1
l>=0&&t[l].to>r.from?t[l].to=o.to:t.push({from:r.from+/^\s*/.exec(r.text)[0].length,to:o.to})}return t}(t))),0)
function g(e,t){let n=e.languageDataAt("commentTokens",t,1)
return n.length?n[0]:{}}const y=50
function k(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:t.selection.ranges,r=n.map((e=>g(t,e.from).block))
if(!r.every((e=>e)))return null
let o=n.map(((e,n)=>function(e,t,n,r){let o,l,{open:i,close:a}=t,s=e.sliceDoc(n-y,n),c=e.sliceDoc(r,r+y),u=/\s*$/.exec(s)[0].length,d=/^\s*/.exec(c)[0].length,f=s.length-u
if(s.slice(f-i.length,f)==i&&c.slice(d,d+a.length)==a)return{open:{pos:n-u,margin:u&&1},close:{pos:r+d,margin:d&&1}}
r-n<=2*y?o=l=e.sliceDoc(n,r):(o=e.sliceDoc(n,n+y),l=e.sliceDoc(r-y,r))
let h=/^\s*/.exec(o)[0].length,m=/\s*$/.exec(l)[0].length,p=l.length-m-a.length
return o.slice(h,h+i.length)==i&&l.slice(p,p+a.length)==a?{open:{pos:n+h+i.length,margin:/\s/.test(o.charAt(h+i.length))?1:0},close:{pos:r-m-a.length,margin:/\s/.test(l.charAt(p-1))?1:0}}:null}(t,r[n],e.from,e.to)))
if(2!=e&&!o.every((e=>e)))return{changes:t.changes(n.map(((e,t)=>o[t]?[]:[{from:e.from,insert:r[t].open+" "},{from:e.to,insert:" "+r[t].close}])))}
if(1!=e&&o.some((e=>e))){let e=[]
for(let t,n=0;n<o.length;n++)if(t=o[n]){let o=r[n],{open:l,close:i}=t
e.push({from:l.pos-o.open.length,to:l.pos+l.margin},{from:i.pos-i.margin,to:i.pos+o.close.length})}return{changes:e}}return null}function w(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:t.selection.ranges,r=[],o=-1
for(let{from:l,to:i}of n){let e=r.length,n=1e9,a=g(t,l).line
if(a){for(let e=l;e<=i;){let s=t.doc.lineAt(e)
if(s.from>o&&(l==i||i>s.from)){o=s.from
let e=/^\s*/.exec(s.text)[0].length,t=e==s.length,l=s.text.slice(e,e+a.length)==a?e:-1
e<s.text.length&&e<n&&(n=e),r.push({line:s,comment:l,token:a,indent:e,empty:t,single:!1})}e=s.to+1}if(n<1e9)for(let t=e;t<r.length;t++)r[t].indent<r[t].line.text.length&&(r[t].indent=n)
r.length==e+1&&(r[e].single=!0)}}if(2!=e&&r.some((e=>e.comment<0&&(!e.empty||e.single)))){let e=[]
for(let{line:t,token:o,indent:l,empty:i,single:a}of r)!a&&i||e.push({from:t.from+l,insert:o+" "})
let n=t.changes(e)
return{changes:n,selection:t.selection.map(n,1)}}if(1!=e&&r.some((e=>e.comment>=0))){let e=[]
for(let{line:t,comment:n,token:o}of r)if(n>=0){let r=t.from+n,l=r+o.length
" "==t.text[l-t.from]&&l++,e.push({from:r,to:l})}return{changes:e}}return null}const S=r.Annotation.define(),v=r.Annotation.define(),A=r.Facet.define(),C=r.Facet.define({combine:e=>(0,r.combineConfig)(e,{minDepth:100,newGroupDelay:500,joinToEvent:(e,t)=>t},{minDepth:Math.max,newGroupDelay:Math.min,joinToEvent:(e,t)=>(n,r)=>e(n,r)||t(n,r)})}),B=r.StateField.define({create:()=>_.empty,update(e,t){let n=t.state.facet(C),o=t.annotation(S)
if(o){let r=V.fromTransaction(t,o.selection),l=o.side,i=0==l?e.undone:e.done
return i=r?F(i,i.length,n.minDepth,r):J(i,t.startState.selection),new _(0==l?o.rest:i,0==l?i:o.rest)}let l=t.annotation(v)
if("full"!=l&&"before"!=l||(e=e.isolate()),!1===t.annotation(r.Transaction.addToHistory))return t.changes.empty?e:e.addMapping(t.changes.desc)
let i=V.fromTransaction(t),a=t.annotation(r.Transaction.time),s=t.annotation(r.Transaction.userEvent)
return i?e=e.addChanges(i,a,s,n,t):t.selection&&(e=e.addSelection(t.startState.selection,a,s,n.newGroupDelay)),"full"!=l&&"after"!=l||(e=e.isolate()),e},toJSON:e=>({done:e.done.map((e=>e.toJSON())),undone:e.undone.map((e=>e.toJSON()))}),fromJSON:e=>new _(e.done.map(V.fromJSON),e.undone.map(V.fromJSON))})
function E(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}
return[B,C.of(e),o.EditorView.domEventHandlers({beforeinput(e,t){let n="historyUndo"==e.inputType?L:"historyRedo"==e.inputType?M:null
return!!n&&(e.preventDefault(),n(t))}})]}const D=B
function x(e,t){return function(n){let{state:r,dispatch:o}=n
if(!t&&r.readOnly)return!1
let l=r.field(B,!1)
if(!l)return!1
let i=l.pop(e,r,t)
return!!i&&(o(i),!0)}}const L=x(0,!1),M=x(1,!1),b=x(0,!0),T=x(1,!0)
function O(e){return function(t){let n=t.field(B,!1)
if(!n)return 0
let r=0==e?n.done:n.undone
return r.length-(r.length&&!r[0].changes?1:0)}}const I=O(0),R=O(1)
class V{constructor(e,t,n,r,o){this.changes=e,this.effects=t,this.mapped=n,this.startSelection=r,this.selectionsAfter=o}setSelAfter(e){return new V(this.changes,this.effects,this.mapped,this.startSelection,e)}toJSON(){var e,t,n
return{changes:null===(e=this.changes)||void 0===e?void 0:e.toJSON(),mapped:null===(t=this.mapped)||void 0===t?void 0:t.toJSON(),startSelection:null===(n=this.startSelection)||void 0===n?void 0:n.toJSON(),selectionsAfter:this.selectionsAfter.map((e=>e.toJSON()))}}static fromJSON(e){return new V(e.changes&&r.ChangeSet.fromJSON(e.changes),[],e.mapped&&r.ChangeDesc.fromJSON(e.mapped),e.startSelection&&r.EditorSelection.fromJSON(e.startSelection),e.selectionsAfter.map(r.EditorSelection.fromJSON))}static fromTransaction(e,t){let n=N
for(let r of e.startState.facet(A)){let t=r(e)
t.length&&(n=n.concat(t))}return!n.length&&e.changes.empty?null:new V(e.changes.invert(e.startState.doc),n,void 0,t||e.startState.selection,N)}static selection(e){return new V(void 0,N,void 0,void 0,e)}}function F(e,t,n,r){let o=t+1>n+20?t-n-1:0,l=e.slice(o,t)
return l.push(r),l}function U(e,t){return e.length?t.length?e.concat(t):e:t}const N=[],G=200
function J(e,t){if(e.length){let n=e[e.length-1],r=n.selectionsAfter.slice(Math.max(0,n.selectionsAfter.length-G))
return r.length&&r[r.length-1].eq(t)?e:(r.push(t),F(e,e.length-1,1e9,n.setSelAfter(r)))}return[V.selection([t])]}function H(e){let t=e[e.length-1],n=e.slice()
return n[e.length-1]=t.setSelAfter(t.selectionsAfter.slice(0,t.selectionsAfter.length-1)),n}function P(e,t){if(!e.length)return e
let n=e.length,r=N
for(;n;){let o=W(e[n-1],t,r)
if(o.changes&&!o.changes.empty||o.effects.length){let t=e.slice(0,n)
return t[n-1]=o,t}t=o.mapped,n--,r=o.selectionsAfter}return r.length?[V.selection(r)]:N}function W(e,t,n){let o=U(e.selectionsAfter.length?e.selectionsAfter.map((e=>e.map(t))):N,n)
if(!e.changes)return V.selection(o)
let l=e.changes.map(t),i=t.mapDesc(e.changes,!0),a=e.mapped?e.mapped.composeDesc(i):i
return new V(l,r.StateEffect.mapEffects(e.effects,t),a,e.startSelection.map(i),o)}const z=/^(input\.type|delete)($|\.)/
class _{constructor(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:void 0
this.done=e,this.undone=t,this.prevTime=n,this.prevUserEvent=r}isolate(){return this.prevTime?new _(this.done,this.undone):this}addChanges(e,t,n,o,l){let i=this.done,a=i[i.length-1]
return i=a&&a.changes&&!a.changes.empty&&e.changes&&(!n||z.test(n))&&(!a.selectionsAfter.length&&t-this.prevTime<o.newGroupDelay&&o.joinToEvent(l,function(e,t){let n=[],r=!1
return e.iterChangedRanges(((e,t)=>n.push(e,t))),t.iterChangedRanges(((e,t,o,l)=>{for(let i=0;i<n.length;){let e=n[i++],t=n[i++]
l>=e&&o<=t&&(r=!0)}})),r}(a.changes,e.changes))||"input.type.compose"==n)?F(i,i.length-1,o.minDepth,new V(e.changes.compose(a.changes),U(r.StateEffect.mapEffects(e.effects,a.changes),a.effects),a.mapped,a.startSelection,N)):F(i,i.length,o.minDepth,e),new _(i,N,t,n)}addSelection(e,t,n,r){let o=this.done.length?this.done[this.done.length-1].selectionsAfter:N
return o.length>0&&t-this.prevTime<r&&n==this.prevUserEvent&&n&&/^select($|\.)/.test(n)&&(l=o[o.length-1],i=e,l.ranges.length==i.ranges.length&&0===l.ranges.filter(((e,t)=>e.empty!=i.ranges[t].empty)).length)?this:new _(J(this.done,e),this.undone,t,n)
var l,i}addMapping(e){return new _(P(this.done,e),P(this.undone,e),this.prevTime,this.prevUserEvent)}pop(e,t,n){let r=0==e?this.done:this.undone
if(0==r.length)return null
let o=r[r.length-1],l=o.selectionsAfter[0]||t.selection
if(n&&o.selectionsAfter.length)return t.update({selection:o.selectionsAfter[o.selectionsAfter.length-1],annotations:S.of({side:e,rest:H(r),selection:l}),userEvent:0==e?"select.undo":"select.redo",scrollIntoView:!0})
if(o.changes){let n=1==r.length?N:r.slice(0,r.length-1)
return o.mapped&&(n=P(n,o.mapped)),t.update({changes:o.changes,selection:o.startSelection,effects:o.effects,annotations:S.of({side:e,rest:n,selection:l}),filter:!1,userEvent:0==e?"undo":"redo",scrollIntoView:!0})}return null}}_.empty=new _(N,N)
const q=[{key:"Mod-z",run:L,preventDefault:!0},{key:"Mod-y",mac:"Mod-Shift-z",run:M,preventDefault:!0},{linux:"Ctrl-Shift-z",run:M,preventDefault:!0},{key:"Mod-u",run:b,preventDefault:!0},{key:"Alt-u",mac:"Mod-Shift-u",run:T,preventDefault:!0}]
function K(e,t){return r.EditorSelection.create(e.ranges.map(t),e.mainIndex)}function $(e,t){return e.update({selection:t,scrollIntoView:!0,userEvent:"select"})}function j(e,t){let{state:n,dispatch:r}=e,o=K(n.selection,t)
return!o.eq(n.selection,!0)&&(r($(n,o)),!0)}function Y(e,t){return r.EditorSelection.cursor(t?e.to:e.from)}function Q(e,t){return j(e,(n=>n.empty?e.moveByChar(n,t):Y(n,t)))}function X(e){return e.textDirectionAt(e.state.selection.main.head)==o.Direction.LTR}const Z=e=>Q(e,!X(e)),ee=e=>Q(e,X(e)),te=e=>Q(e,!0),ne=e=>Q(e,!1)
function re(e,t,n){let o=t.head,l=e.doc.lineAt(o)
return o=o==(n?l.to:l.from)?n?Math.min(e.doc.length,l.to+1):Math.max(0,l.from-1):l.from+(0,r.findClusterBreak)(l.text,o-l.from,n),r.EditorSelection.cursor(o,n?-1:1)}function oe(e,t){return j(e,(n=>n.empty?re(e.state,n,t):Y(n,t)))}const le=e=>oe(e,!0),ie=e=>oe(e,!1)
function ae(e,t){return j(e,(n=>n.empty?e.moveByGroup(n,t):Y(n,t)))}const se=e=>ae(e,!X(e)),ce=e=>ae(e,X(e)),ue=e=>ae(e,!0),de=e=>ae(e,!1)
function fe(e,t,n){let o=e.state.charCategorizer(t),l=o(n),i=l!=r.CharCategory.Space
return e=>{let t=o(e)
return t!=r.CharCategory.Space?i&&t==l:(i=!1,!0)}}const he=e=>j(e,(t=>t.empty?e.moveByChar(t,!0,(n=>fe(e,t.head,n))):Y(t,!0))),me="undefined"!=typeof Intl&&Intl.Segmenter?new Intl.Segmenter(void 0,{granularity:"word"}):null
function pe(e,t,n){let o=e.state.charCategorizer(t.from),l=r.CharCategory.Space,i=t.from,a=0,s=!1,c=!1,u=!1,d=t=>{if(s)return!1
i+=n?t.length:-t.length
let d,f=o(t)
if(f==r.CharCategory.Word&&t.charCodeAt(0)<128&&/[\W_]/.test(t)&&(f=-1),l==r.CharCategory.Space&&(l=f),l!=f)return!1
if(l==r.CharCategory.Word)if(t.toLowerCase()==t){if(!n&&c)return!1
u=!0}else if(u){if(n)return!1
s=!0}else{if(c&&n&&o(d=e.state.sliceDoc(i,i+1))==r.CharCategory.Word&&d.toLowerCase()==d)return!1
c=!0}return a++,!0},f=e.moveByChar(t,n,(e=>(d(e),d)))
if(me&&l==r.CharCategory.Word&&f.from==t.from+a*(n?1:-1)){let o=Math.min(t.head,f.head),l=Math.max(t.head,f.head),i=e.state.sliceDoc(o,l)
if(i.length>1&&/[\u4E00-\uffff]/.test(i)){let e=Array.from(me.segment(i))
if(e.length>1)return n?r.EditorSelection.cursor(t.head+e[1].index,-1):r.EditorSelection.cursor(f.head+e[e.length-1].index,1)}}return f}function ge(e,t){return j(e,(n=>n.empty?pe(e,n,t):Y(n,t)))}const ye=e=>ge(e,!0),ke=e=>ge(e,!1)
function we(e,t,n){if(t.type.prop(n))return!0
let r=t.to-t.from
return r&&(r>2||/[^\s,.;:]/.test(e.sliceDoc(t.from,t.to)))||t.firstChild}function Se(e,t,n){let o,a,s=(0,l.syntaxTree)(e).resolveInner(t.head),c=n?i.uY.closedBy:i.uY.openedBy
for(let r=t.head;;){let t=n?s.childAfter(r):s.childBefore(r)
if(!t)break
we(e,t,c)?s=t:r=n?t.to:t.from}return a=s.type.prop(c)&&(o=n?(0,l.matchBrackets)(e,s.from,1):(0,l.matchBrackets)(e,s.to,-1))&&o.matched?n?o.end.to:o.end.from:n?s.to:s.from,r.EditorSelection.cursor(a,n?-1:1)}const ve=e=>j(e,(t=>Se(e.state,t,!X(e)))),Ae=e=>j(e,(t=>Se(e.state,t,X(e))))
function Ce(e,t){return j(e,(n=>{if(!n.empty)return Y(n,t)
let r=e.moveVertically(n,t)
return r.head!=n.head?r:e.moveToLineBoundary(n,t)}))}const Be=e=>Ce(e,!1),Ee=e=>Ce(e,!0)
function De(e){let t,n=e.scrollDOM.clientHeight<e.scrollDOM.scrollHeight-2,r=0,l=0
if(n){for(let t of e.state.facet(o.EditorView.scrollMargins)){let n=t(e);(null==n?void 0:n.top)&&(r=Math.max(null==n?void 0:n.top,r)),(null==n?void 0:n.bottom)&&(l=Math.max(null==n?void 0:n.bottom,l))}t=e.scrollDOM.clientHeight-r-l}else t=(e.dom.ownerDocument.defaultView||window).innerHeight
return{marginTop:r,marginBottom:l,selfScroll:n,height:Math.max(e.defaultLineHeight,t-5)}}function xe(e,t){let n,r=De(e),{state:l}=e,i=K(l.selection,(n=>n.empty?e.moveVertically(n,t,r.height):Y(n,t)))
if(i.eq(l.selection))return!1
if(r.selfScroll){let t=e.coordsAtPos(l.selection.main.head),a=e.scrollDOM.getBoundingClientRect(),s=a.top+r.marginTop,c=a.bottom-r.marginBottom
t&&t.top>s&&t.bottom<c&&(n=o.EditorView.scrollIntoView(i.main.head,{y:"start",yMargin:t.top-s}))}return e.dispatch($(l,i),{effects:n}),!0}const Le=e=>xe(e,!1),Me=e=>xe(e,!0)
function be(e,t,n){let o=e.lineBlockAt(t.head),l=e.moveToLineBoundary(t,n)
if(l.head==t.head&&l.head!=(n?o.to:o.from)&&(l=e.moveToLineBoundary(t,n,!1)),!n&&l.head==o.from&&o.length){let n=/^\s*/.exec(e.state.sliceDoc(o.from,Math.min(o.from+100,o.to)))[0].length
n&&t.head!=o.from+n&&(l=r.EditorSelection.cursor(o.from+n))}return l}const Te=e=>j(e,(t=>be(e,t,!0))),Oe=e=>j(e,(t=>be(e,t,!1))),Ie=e=>j(e,(t=>be(e,t,!X(e)))),Re=e=>j(e,(t=>be(e,t,X(e)))),Ve=e=>j(e,(t=>r.EditorSelection.cursor(e.lineBlockAt(t.head).from,1))),Fe=e=>j(e,(t=>r.EditorSelection.cursor(e.lineBlockAt(t.head).to,-1)))
function Ue(e,t,n){let o=!1,i=K(e.selection,(t=>{let i=(0,l.matchBrackets)(e,t.head,-1)||(0,l.matchBrackets)(e,t.head,1)||t.head>0&&(0,l.matchBrackets)(e,t.head-1,1)||t.head<e.doc.length&&(0,l.matchBrackets)(e,t.head+1,-1)
if(!i||!i.end)return t
o=!0
let a=i.start.from==t.head?i.end.to:i.end.from
return n?r.EditorSelection.range(t.anchor,a):r.EditorSelection.cursor(a)}))
return!!o&&(t($(e,i)),!0)}const Ne=e=>{let{state:t,dispatch:n}=e
return Ue(t,n,!1)},Ge=e=>{let{state:t,dispatch:n}=e
return Ue(t,n,!0)}
function Je(e,t){let n=K(e.state.selection,(e=>{let n=t(e)
return r.EditorSelection.range(e.anchor,n.head,n.goalColumn,n.bidiLevel||void 0)}))
return!n.eq(e.state.selection)&&(e.dispatch($(e.state,n)),!0)}function He(e,t){return Je(e,(n=>e.moveByChar(n,t)))}const Pe=e=>He(e,!X(e)),We=e=>He(e,X(e)),ze=e=>He(e,!0),_e=e=>He(e,!1),qe=e=>Je(e,(t=>re(e.state,t,!0))),Ke=e=>Je(e,(t=>re(e.state,t,!1)))
function $e(e,t){return Je(e,(n=>e.moveByGroup(n,t)))}const je=e=>$e(e,!X(e)),Ye=e=>$e(e,X(e)),Qe=e=>$e(e,!0),Xe=e=>$e(e,!1),Ze=e=>Je(e,(t=>e.moveByChar(t,!0,(n=>fe(e,t.head,n)))))
function et(e,t){return Je(e,(n=>pe(e,n,t)))}const tt=e=>et(e,!0),nt=e=>et(e,!1),rt=e=>Je(e,(t=>Se(e.state,t,!X(e)))),ot=e=>Je(e,(t=>Se(e.state,t,X(e))))
function lt(e,t){return Je(e,(n=>e.moveVertically(n,t)))}const it=e=>lt(e,!1),at=e=>lt(e,!0)
function st(e,t){return Je(e,(n=>e.moveVertically(n,t,De(e).height)))}const ct=e=>st(e,!1),ut=e=>st(e,!0),dt=e=>Je(e,(t=>be(e,t,!0))),ft=e=>Je(e,(t=>be(e,t,!1))),ht=e=>Je(e,(t=>be(e,t,!X(e)))),mt=e=>Je(e,(t=>be(e,t,X(e)))),pt=e=>Je(e,(t=>r.EditorSelection.cursor(e.lineBlockAt(t.head).from))),gt=e=>Je(e,(t=>r.EditorSelection.cursor(e.lineBlockAt(t.head).to))),yt=e=>{let{state:t,dispatch:n}=e
return n($(t,{anchor:0})),!0},kt=e=>{let{state:t,dispatch:n}=e
return n($(t,{anchor:t.doc.length})),!0},wt=e=>{let{state:t,dispatch:n}=e
return n($(t,{anchor:t.selection.main.anchor,head:0})),!0},St=e=>{let{state:t,dispatch:n}=e
return n($(t,{anchor:t.selection.main.anchor,head:t.doc.length})),!0},vt=e=>{let{state:t,dispatch:n}=e
return n(t.update({selection:{anchor:0,head:t.doc.length},userEvent:"select"})),!0},At=e=>{let{state:t,dispatch:n}=e,o=Ht(t).map((e=>{let{from:n,to:o}=e
return r.EditorSelection.range(n,Math.min(o+1,t.doc.length))}))
return n(t.update({selection:r.EditorSelection.create(o),userEvent:"select"})),!0},Ct=e=>{let{state:t,dispatch:n}=e,o=K(t.selection,(e=>{let n=(0,l.syntaxTree)(t),o=n.resolveStack(e.from,1)
if(e.empty){let t=n.resolveStack(e.from,-1)
t.node.from>=o.node.from&&t.node.to<=o.node.to&&(o=t)}for(let t=o;t;t=t.next){let{node:n}=t
if((n.from<e.from&&n.to>=e.to||n.to>e.to&&n.from<=e.from)&&t.next)return r.EditorSelection.range(n.to,n.from)}return e}))
return!o.eq(t.selection)&&(n($(t,o)),!0)},Bt=e=>{let{state:t,dispatch:n}=e,o=t.selection,l=null
return o.ranges.length>1?l=r.EditorSelection.create([o.main]):o.main.empty||(l=r.EditorSelection.create([r.EditorSelection.cursor(o.main.head)])),!!l&&(n($(t,l)),!0)}
function Et(e,t){if(e.state.readOnly)return!1
let n="delete.selection",{state:l}=e,i=l.changeByRange((o=>{let{from:l,to:i}=o
if(l==i){let r=t(o)
r<l?(n="delete.backward",r=Dt(e,r,!1)):r>l&&(n="delete.forward",r=Dt(e,r,!0)),l=Math.min(l,r),i=Math.max(i,r)}else l=Dt(e,l,!1),i=Dt(e,i,!0)
return l==i?{range:o}:{changes:{from:l,to:i},range:r.EditorSelection.cursor(l,l<o.head?-1:1)}}))
return!i.changes.empty&&(e.dispatch(l.update(i,{scrollIntoView:!0,userEvent:n,effects:"delete.selection"==n?o.EditorView.announce.of(l.phrase("Selection deleted")):void 0})),!0)}function Dt(e,t,n){if(e instanceof o.EditorView)for(let r of e.state.facet(o.EditorView.atomicRanges).map((t=>t(e))))r.between(t,t,((e,r)=>{e<t&&r>t&&(t=n?r:e)}))
return t}const xt=(e,t,n)=>Et(e,(o=>{let i,a,s=o.from,{state:c}=e,u=c.doc.lineAt(s)
if(n&&!t&&s>u.from&&s<u.from+200&&!/[^ \t]/.test(i=u.text.slice(0,s-u.from))){if("\t"==i[i.length-1])return s-1
let e=(0,r.countColumn)(i,c.tabSize)%(0,l.getIndentUnit)(c)||(0,l.getIndentUnit)(c)
for(let t=0;t<e&&" "==i[i.length-1-t];t++)s--
a=s}else a=(0,r.findClusterBreak)(u.text,s-u.from,t,t)+u.from,a==s&&u.number!=(t?c.doc.lines:1)?a+=t?1:-1:!t&&/[\ufe00-\ufe0f]/.test(u.text.slice(a-u.from,s-u.from))&&(a=(0,r.findClusterBreak)(u.text,a-u.from,!1,!1)+u.from)
return a})),Lt=e=>xt(e,!1,!0),Mt=e=>xt(e,!1,!1),bt=e=>xt(e,!0,!1),Tt=(e,t)=>Et(e,(n=>{let o=n.head,{state:l}=e,i=l.doc.lineAt(o),a=l.charCategorizer(o)
for(let e=null;;){if(o==(t?i.to:i.from)){o==n.head&&i.number!=(t?l.doc.lines:1)&&(o+=t?1:-1)
break}let s=(0,r.findClusterBreak)(i.text,o-i.from,t)+i.from,c=i.text.slice(Math.min(o,s)-i.from,Math.max(o,s)-i.from),u=a(c)
if(null!=e&&u!=e)break
" "==c&&o==n.head||(e=u),o=s}return o})),Ot=e=>Tt(e,!1),It=e=>Tt(e,!0),Rt=e=>Et(e,(t=>{let n=e.lineBlockAt(t.head).to
return t.head<n?n:Math.min(e.state.doc.length,t.head+1)})),Vt=e=>Et(e,(t=>{let n=e.lineBlockAt(t.head).from
return t.head>n?n:Math.max(0,t.head-1)})),Ft=e=>Et(e,(t=>{let n=e.moveToLineBoundary(t,!1).head
return t.head>n?n:Math.max(0,t.head-1)})),Ut=e=>Et(e,(t=>{let n=e.moveToLineBoundary(t,!0).head
return t.head<n?n:Math.min(e.state.doc.length,t.head+1)})),Nt=e=>{let{state:t,dispatch:n}=e
if(t.readOnly)return!1
let r=[]
for(let o=0,l="",i=t.doc.iter();;){if(i.next(),i.lineBreak||i.done){let e=l.search(/\s+$/)
if(e>-1&&r.push({from:o-(l.length-e),to:o}),i.done)break
l=""}else l=i.value
o+=i.value.length}return!!r.length&&(n(t.update({changes:r,userEvent:"delete"})),!0)},Gt=e=>{let{state:t,dispatch:n}=e
if(t.readOnly)return!1
let o=t.changeByRange((e=>({changes:{from:e.from,to:e.to,insert:r.Text.of(["",""])},range:r.EditorSelection.cursor(e.from)})))
return n(t.update(o,{scrollIntoView:!0,userEvent:"input"})),!0},Jt=e=>{let{state:t,dispatch:n}=e
if(t.readOnly)return!1
let o=t.changeByRange((e=>{if(!e.empty||0==e.from||e.from==t.doc.length)return{range:e}
let n=e.from,o=t.doc.lineAt(n),l=n==o.from?n-1:(0,r.findClusterBreak)(o.text,n-o.from,!1)+o.from,i=n==o.to?n+1:(0,r.findClusterBreak)(o.text,n-o.from,!0)+o.from
return{changes:{from:l,to:i,insert:t.doc.slice(n,i).append(t.doc.slice(l,n))},range:r.EditorSelection.cursor(i)}}))
return!o.changes.empty&&(n(t.update(o,{scrollIntoView:!0,userEvent:"move.character"})),!0)}
function Ht(e){let t=[],n=-1
for(let r of e.selection.ranges){let o=e.doc.lineAt(r.from),l=e.doc.lineAt(r.to)
if(r.empty||r.to!=l.from||(l=e.doc.lineAt(r.to-1)),n>=o.number){let e=t[t.length-1]
e.to=l.to,e.ranges.push(r)}else t.push({from:o.from,to:l.to,ranges:[r]})
n=l.number+1}return t}function Pt(e,t,n){if(e.readOnly)return!1
let o=[],l=[]
for(let i of Ht(e)){if(n?i.to==e.doc.length:0==i.from)continue
let t=e.doc.lineAt(n?i.to+1:i.from-1),a=t.length+1
if(n){o.push({from:i.to,to:t.to},{from:i.from,insert:t.text+e.lineBreak})
for(let t of i.ranges)l.push(r.EditorSelection.range(Math.min(e.doc.length,t.anchor+a),Math.min(e.doc.length,t.head+a)))}else{o.push({from:t.from,to:i.from},{from:i.to,insert:e.lineBreak+t.text})
for(let e of i.ranges)l.push(r.EditorSelection.range(e.anchor-a,e.head-a))}}return!!o.length&&(t(e.update({changes:o,scrollIntoView:!0,selection:r.EditorSelection.create(l,e.selection.mainIndex),userEvent:"move.line"})),!0)}const Wt=e=>{let{state:t,dispatch:n}=e
return Pt(t,n,!1)},zt=e=>{let{state:t,dispatch:n}=e
return Pt(t,n,!0)}
function _t(e,t,n){if(e.readOnly)return!1
let r=[]
for(let o of Ht(e))n?r.push({from:o.from,insert:e.doc.slice(o.from,o.to)+e.lineBreak}):r.push({from:o.to,insert:e.lineBreak+e.doc.slice(o.from,o.to)})
return t(e.update({changes:r,scrollIntoView:!0,userEvent:"input.copyline"})),!0}const qt=e=>{let{state:t,dispatch:n}=e
return _t(t,n,!1)},Kt=e=>{let{state:t,dispatch:n}=e
return _t(t,n,!0)},$t=e=>{if(e.state.readOnly)return!1
let{state:t}=e,n=t.changes(Ht(t).map((e=>{let{from:n,to:r}=e
return n>0?n--:r<t.doc.length&&r++,{from:n,to:r}}))),r=K(t.selection,(t=>{let n
if(e.lineWrapping){let r=e.lineBlockAt(t.head),o=e.coordsAtPos(t.head,t.assoc||1)
o&&(n=r.bottom+e.documentTop-o.bottom+e.defaultLineHeight/2)}return e.moveVertically(t,!0,n)})).map(n)
return e.dispatch({changes:n,selection:r,scrollIntoView:!0,userEvent:"delete.line"}),!0},jt=e=>{let{state:t,dispatch:n}=e
return n(t.update(t.replaceSelection(t.lineBreak),{scrollIntoView:!0,userEvent:"input"})),!0},Yt=e=>{let{state:t,dispatch:n}=e
return n(t.update(t.changeByRange((e=>{let n=/^\s*/.exec(t.doc.lineAt(e.from).text)[0]
return{changes:{from:e.from,to:e.to,insert:t.lineBreak+n},range:r.EditorSelection.cursor(e.from+n.length+1)}})),{scrollIntoView:!0,userEvent:"input"})),!0},Qt=Zt(!1),Xt=Zt(!0)
function Zt(e){return t=>{let{state:n,dispatch:o}=t
if(n.readOnly)return!1
let a=n.changeByRange((t=>{let{from:o,to:a}=t,s=n.doc.lineAt(o),c=!e&&o==a&&function(e,t){if(/\(\)|\[\]|\{\}/.test(e.sliceDoc(t-1,t+1)))return{from:t,to:t}
let n,r=(0,l.syntaxTree)(e).resolveInner(t),o=r.childBefore(t),a=r.childAfter(t)
return o&&a&&o.to<=t&&a.from>=t&&(n=o.type.prop(i.uY.closedBy))&&n.indexOf(a.name)>-1&&e.doc.lineAt(o.to).from==e.doc.lineAt(a.from).from&&!/\S/.test(e.sliceDoc(o.to,a.from))?{from:o.to,to:a.from}:null}(n,o)
e&&(o=a=(a<=s.to?s:n.doc.lineAt(a)).to)
let u=new l.IndentContext(n,{simulateBreak:o,simulateDoubleBreak:!!c}),d=(0,l.getIndentation)(u,o)
for(null==d&&(d=(0,r.countColumn)(/^\s*/.exec(n.doc.lineAt(o).text)[0],n.tabSize));a<s.to&&/\s/.test(s.text[a-s.from]);)a++
c?({from:o,to:a}=c):o>s.from&&o<s.from+100&&!/\S/.test(s.text.slice(0,o))&&(o=s.from)
let f=["",(0,l.indentString)(n,d)]
return c&&f.push((0,l.indentString)(n,u.lineIndent(s.from,-1))),{changes:{from:o,to:a,insert:r.Text.of(f)},range:r.EditorSelection.cursor(o+1+f[1].length)}}))
return o(n.update(a,{scrollIntoView:!0,userEvent:"input"})),!0}}function en(e,t){let n=-1
return e.changeByRange((o=>{let l=[]
for(let r=o.from;r<=o.to;){let i=e.doc.lineAt(r)
i.number>n&&(o.empty||o.to>i.from)&&(t(i,l,o),n=i.number),r=i.to+1}let i=e.changes(l)
return{changes:l,range:r.EditorSelection.range(i.mapPos(o.anchor,1),i.mapPos(o.head,1))}}))}const tn=e=>{let{state:t,dispatch:n}=e
if(t.readOnly)return!1
let r=Object.create(null),o=new l.IndentContext(t,{overrideIndentation:e=>{let t=r[e]
return null==t?-1:t}}),i=en(t,((e,n,i)=>{let a=(0,l.getIndentation)(o,e.from)
if(null==a)return;/\S/.test(e.text)||(a=0)
let s=/^\s*/.exec(e.text)[0],c=(0,l.indentString)(t,a);(s!=c||i.from<e.from+s.length)&&(r[e.from]=a,n.push({from:e.from,to:e.from+s.length,insert:c}))}))
return i.changes.empty||n(t.update(i,{userEvent:"indent"})),!0},nn=e=>{let{state:t,dispatch:n}=e
return!t.readOnly&&(n(t.update(en(t,((e,n)=>{n.push({from:e.from,insert:t.facet(l.indentUnit)})})),{userEvent:"input.indent"})),!0)},rn=e=>{let{state:t,dispatch:n}=e
return!t.readOnly&&(n(t.update(en(t,((e,n)=>{let o=/^\s*/.exec(e.text)[0]
if(!o)return
let i=(0,r.countColumn)(o,t.tabSize),a=0,s=(0,l.indentString)(t,Math.max(0,i-(0,l.getIndentUnit)(t)))
for(;a<o.length&&a<s.length&&o.charCodeAt(a)==s.charCodeAt(a);)a++
n.push({from:e.from+a,to:e.from+o.length,insert:s.slice(a)})})),{userEvent:"delete.dedent"})),!0)},on=e=>(e.setTabFocusMode(),!0),ln=e=>(e.setTabFocusMode(2e3),!0),an=e=>{let{state:t,dispatch:n}=e
return t.selection.ranges.some((e=>!e.empty))?nn({state:t,dispatch:n}):(n(t.update(t.replaceSelection("\t"),{scrollIntoView:!0,userEvent:"input"})),!0)},sn=[{key:"Ctrl-b",run:Z,shift:Pe,preventDefault:!0},{key:"Ctrl-f",run:ee,shift:We},{key:"Ctrl-p",run:Be,shift:it},{key:"Ctrl-n",run:Ee,shift:at},{key:"Ctrl-a",run:Ve,shift:pt},{key:"Ctrl-e",run:Fe,shift:gt},{key:"Ctrl-d",run:bt},{key:"Ctrl-h",run:Lt},{key:"Ctrl-k",run:Rt},{key:"Ctrl-Alt-h",run:Ot},{key:"Ctrl-o",run:Gt},{key:"Ctrl-t",run:Jt},{key:"Ctrl-v",run:Me}],cn=[{key:"ArrowLeft",run:Z,shift:Pe,preventDefault:!0},{key:"Mod-ArrowLeft",mac:"Alt-ArrowLeft",run:se,shift:je,preventDefault:!0},{mac:"Cmd-ArrowLeft",run:Ie,shift:ht,preventDefault:!0},{key:"ArrowRight",run:ee,shift:We,preventDefault:!0},{key:"Mod-ArrowRight",mac:"Alt-ArrowRight",run:ce,shift:Ye,preventDefault:!0},{mac:"Cmd-ArrowRight",run:Re,shift:mt,preventDefault:!0},{key:"ArrowUp",run:Be,shift:it,preventDefault:!0},{mac:"Cmd-ArrowUp",run:yt,shift:wt},{mac:"Ctrl-ArrowUp",run:Le,shift:ct},{key:"ArrowDown",run:Ee,shift:at,preventDefault:!0},{mac:"Cmd-ArrowDown",run:kt,shift:St},{mac:"Ctrl-ArrowDown",run:Me,shift:ut},{key:"PageUp",run:Le,shift:ct},{key:"PageDown",run:Me,shift:ut},{key:"Home",run:Oe,shift:ft,preventDefault:!0},{key:"Mod-Home",run:yt,shift:wt},{key:"End",run:Te,shift:dt,preventDefault:!0},{key:"Mod-End",run:kt,shift:St},{key:"Enter",run:Qt,shift:Qt},{key:"Mod-a",run:vt},{key:"Backspace",run:Lt,shift:Lt},{key:"Delete",run:bt},{key:"Mod-Backspace",mac:"Alt-Backspace",run:Ot},{key:"Mod-Delete",mac:"Alt-Delete",run:It},{mac:"Mod-Backspace",run:Ft},{mac:"Mod-Delete",run:Ut}].concat(sn.map((e=>({mac:e.key,run:e.run,shift:e.shift})))),un=[{key:"Alt-ArrowLeft",mac:"Ctrl-ArrowLeft",run:ve,shift:rt},{key:"Alt-ArrowRight",mac:"Ctrl-ArrowRight",run:Ae,shift:ot},{key:"Alt-ArrowUp",run:Wt},{key:"Shift-Alt-ArrowUp",run:qt},{key:"Alt-ArrowDown",run:zt},{key:"Shift-Alt-ArrowDown",run:Kt},{key:"Escape",run:Bt},{key:"Mod-Enter",run:Xt},{key:"Alt-l",mac:"Ctrl-l",run:At},{key:"Mod-i",run:Ct,preventDefault:!0},{key:"Mod-[",run:rn},{key:"Mod-]",run:nn},{key:"Mod-Alt-\\",run:tn},{key:"Shift-Mod-k",run:$t},{key:"Shift-Mod-\\",run:Ne},{key:"Mod-/",run:a},{key:"Alt-A",run:f},{key:"Ctrl-m",mac:"Shift-Alt-m",run:on}].concat(cn),dn={key:"Tab",run:nn,shift:rn}}}])
