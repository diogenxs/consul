"use strict";(globalThis.webpackChunk_ember_auto_import_=globalThis.webpackChunk_ember_auto_import_||[]).push([[18],{94018:(e,t,o)=>{o.d(t,{Ar:()=>a,Gw:()=>D,_5:()=>r,et:()=>s})
var n=o(73654),i=o(27235),l=o(47304)
class r{constructor(e,t,o,n){this.state=e,this.pos=t,this.explicit=o,this.view=n,this.abortListeners=[],this.abortOnDocChange=!1}tokenBefore(e){let t=(0,l.syntaxTree)(this.state).resolveInner(this.pos,-1)
for(;t&&e.indexOf(t.name)<0;)t=t.parent
return t?{from:t.from,to:this.pos,text:this.state.sliceDoc(t.from,this.pos),type:t.type}:null}matchBefore(e){let t=this.state.doc.lineAt(this.pos),o=Math.max(t.from,this.pos-250),n=t.text.slice(o-t.from,this.pos-t.from),i=n.search(function(e,t){var o
let{source:n}=e,i="$"!=n[n.length-1]
return i?new RegExp(`(?:${n})${i?"$":""}`,null!==(o=e.flags)&&void 0!==o?o:e.ignoreCase?"i":""):e}(e))
return i<0?null:{from:o+i,to:this.pos,text:n.slice(i)}}get aborted(){return null==this.abortListeners}addEventListener(e,t,o){"abort"==e&&this.abortListeners&&(this.abortListeners.push(t),o&&o.onDocChange&&(this.abortOnDocChange=!0))}}function c(e){let t=Object.keys(e).join(""),o=/\w/.test(t)
return o&&(t=t.replace(/\w/g,"")),`[${o?"\\w":""}${t.replace(/[^\w\s]/g,"\\$&")}]`}function s(e){let t=e.map((e=>"string"==typeof e?{label:e}:e)),[o,n]=t.every((e=>/^\w+$/.test(e.label)))?[/\w*$/,/\w+$/]:function(e){let t=Object.create(null),o=Object.create(null)
for(let{label:i}of e){t[i[0]]=!0
for(let e=1;e<i.length;e++)o[i[e]]=!0}let n=c(t)+c(o)+"*$"
return[new RegExp("^"+n),new RegExp(n)]}(t)
return e=>{let i=e.matchBefore(n)
return i||e.explicit?{from:i?i.from:e.pos,options:t,validFor:o}:null}}function a(e,t){return o=>{for(let t=(0,l.syntaxTree)(o.state).resolveInner(o.pos,-1);t;t=t.parent){if(e.indexOf(t.name)>-1)return null
if(t.type.isTop)break}return t(o)}}const f=n.Annotation.define()
"object"==typeof navigator&&navigator.platform
const p=i.EditorView.baseTheme({".cm-tooltip.cm-tooltip-autocomplete":{"& > ul":{fontFamily:"monospace",whiteSpace:"nowrap",overflow:"hidden auto",maxWidth_fallback:"700px",maxWidth:"min(700px, 95vw)",minWidth:"250px",maxHeight:"10em",height:"100%",listStyle:"none",margin:0,padding:0,"& > li, & > completion-section":{padding:"1px 3px",lineHeight:1.2},"& > li":{overflowX:"hidden",textOverflow:"ellipsis",cursor:"pointer"},"& > completion-section":{display:"list-item",borderBottom:"1px solid silver",paddingLeft:"0.5em",opacity:.7}}},"&light .cm-tooltip-autocomplete ul li[aria-selected]":{background:"#17c",color:"white"},"&light .cm-tooltip-autocomplete-disabled ul li[aria-selected]":{background:"#777"},"&dark .cm-tooltip-autocomplete ul li[aria-selected]":{background:"#347",color:"white"},"&dark .cm-tooltip-autocomplete-disabled ul li[aria-selected]":{background:"#444"},".cm-completionListIncompleteTop:before, .cm-completionListIncompleteBottom:after":{content:'"···"',opacity:.5,display:"block",textAlign:"center"},".cm-tooltip.cm-completionInfo":{position:"absolute",padding:"3px 9px",width:"max-content",maxWidth:"400px",boxSizing:"border-box",whiteSpace:"pre-line"},".cm-completionInfo.cm-completionInfo-left":{right:"100%"},".cm-completionInfo.cm-completionInfo-right":{left:"100%"},".cm-completionInfo.cm-completionInfo-left-narrow":{right:"30px"},".cm-completionInfo.cm-completionInfo-right-narrow":{left:"30px"},"&light .cm-snippetField":{backgroundColor:"#00000022"},"&dark .cm-snippetField":{backgroundColor:"#ffffff22"},".cm-snippetFieldPosition":{verticalAlign:"text-top",width:0,height:"1.15em",display:"inline-block",margin:"0 -0.7px -.7em",borderLeft:"1.4px dotted #888"},".cm-completionMatchedText":{textDecoration:"underline"},".cm-completionDetail":{marginLeft:"0.5em",fontStyle:"italic"},".cm-completionIcon":{fontSize:"90%",width:".8em",display:"inline-block",textAlign:"center",paddingRight:".6em",opacity:"0.6",boxSizing:"content-box"},".cm-completionIcon-function, .cm-completionIcon-method":{"&:after":{content:"'ƒ'"}},".cm-completionIcon-class":{"&:after":{content:"'○'"}},".cm-completionIcon-interface":{"&:after":{content:"'◌'"}},".cm-completionIcon-variable":{"&:after":{content:"'𝑥'"}},".cm-completionIcon-constant":{"&:after":{content:"'𝐶'"}},".cm-completionIcon-type":{"&:after":{content:"'𝑡'"}},".cm-completionIcon-enum":{"&:after":{content:"'∪'"}},".cm-completionIcon-property":{"&:after":{content:"'□'"}},".cm-completionIcon-keyword":{"&:after":{content:"'🔑︎'"}},".cm-completionIcon-namespace":{"&:after":{content:"'▢'"}},".cm-completionIcon-text":{"&:after":{content:"'abc'",fontSize:"50%",verticalAlign:"middle"}}})
class m{constructor(e,t,o,n){this.field=e,this.line=t,this.from=o,this.to=n}}class d{constructor(e,t,o){this.field=e,this.from=t,this.to=o}map(e){let t=e.mapPos(this.from,-1,n.MapMode.TrackDel),o=e.mapPos(this.to,1,n.MapMode.TrackDel)
return null==t||null==o?null:new d(this.field,t,o)}}class u{constructor(e,t){this.lines=e,this.fieldPositions=t}instantiate(e,t){let o=[],n=[t],i=e.doc.lineAt(t),r=/^\s*/.exec(i.text)[0]
for(let s of this.lines){if(o.length){let o=r,i=/^\t*/.exec(s)[0].length
for(let t=0;t<i;t++)o+=e.facet(l.indentUnit)
n.push(t+o.length-i),s=o+s.slice(i)}o.push(s),t+=s.length+1}let c=this.fieldPositions.map((e=>new d(e.field,n[e.line]+e.from,n[e.line]+e.to)))
return{text:o,ranges:c}}static parse(e){let t,o=[],n=[],i=[]
for(let l of e.split(/\r\n?|\n/)){for(;t=/[#$]\{(?:(\d+)(?::([^}]*))?|((?:\\[{}]|[^}])*))\}/.exec(l);){let e=t[1]?+t[1]:null,r=t[2]||t[3]||"",c=-1,s=r.replace(/\\[{}]/g,(e=>e[1]))
for(let t=0;t<o.length;t++)(null!=e?o[t].seq==e:s&&o[t].name==s)&&(c=t)
if(c<0){let t=0
for(;t<o.length&&(null==e||null!=o[t].seq&&o[t].seq<e);)t++
o.splice(t,0,{seq:e,name:s}),c=t
for(let e of i)e.field>=c&&e.field++}i.push(new m(c,n.length,t.index,t.index+s.length)),l=l.slice(0,t.index)+r+l.slice(t.index+t[0].length)}l=l.replace(/\\([{}])/g,((e,t,o)=>{for(let l of i)l.line==n.length&&l.from>o&&(l.from--,l.to--)
return t})),n.push(l)}return new u(n,i)}}let h=i.Decoration.widget({widget:new class extends i.WidgetType{toDOM(){let e=document.createElement("span")
return e.className="cm-snippetFieldPosition",e}ignoreEvent(){return!1}}}),g=i.Decoration.mark({class:"cm-snippetField"})
class x{constructor(e,t){this.ranges=e,this.active=t,this.deco=i.Decoration.set(e.map((e=>(e.from==e.to?h:g).range(e.from,e.to))))}map(e){let t=[]
for(let o of this.ranges){let n=o.map(e)
if(!n)return null
t.push(n)}return new x(t,this.active)}selectionInsideField(e){return e.ranges.every((e=>this.ranges.some((t=>t.field==this.active&&t.from<=e.from&&t.to>=e.to))))}}const b=n.StateEffect.define({map:(e,t)=>e&&e.map(t)}),w=n.StateEffect.define(),v=n.StateField.define({create:()=>null,update(e,t){for(let o of t.effects){if(o.is(b))return o.value
if(o.is(w)&&e)return new x(e.ranges,o.value)}return e&&t.docChanged&&(e=e.map(t.changes)),e&&t.selection&&!e.selectionInsideField(t.selection)&&(e=null),e},provide:e=>i.EditorView.decorations.from(e,(e=>e?e.deco:i.Decoration.none))})
function I(e,t){return n.EditorSelection.create(e.filter((e=>e.field==t)).map((e=>n.EditorSelection.range(e.from,e.to))))}function y(e){let t=u.parse(e)
return(e,o,i,l)=>{let{text:r,ranges:c}=t.instantiate(e.state,i),{main:s}=e.state.selection,a={changes:{from:i,to:l==s.from?s.to:l,insert:n.Text.of(r)},scrollIntoView:!0,annotations:o?[f.of(o),n.Transaction.userEvent.of("input.complete")]:void 0}
if(c.length&&(a.selection=I(c,0)),c.some((e=>e.field>0))){let t=new x(c,0),o=a.effects=[b.of(t)]
void 0===e.state.field(v,!1)&&o.push(n.StateEffect.appendConfig.of([v,T,$,p]))}e.dispatch(e.state.update(a))}}function k(e){return t=>{let{state:o,dispatch:n}=t,i=o.field(v,!1)
if(!i||e<0&&0==i.active)return!1
let l=i.active+e,r=e>0&&!i.ranges.some((t=>t.field==l+e))
return n(o.update({selection:I(i.ranges,l),effects:b.of(r?null:new x(i.ranges,l)),scrollIntoView:!0})),!0}}const E=[{key:"Tab",run:k(1),shift:k(-1)},{key:"Escape",run:e=>{let{state:t,dispatch:o}=e
return!!t.field(v,!1)&&(o(t.update({effects:b.of(null)})),!0)}}],S=n.Facet.define({combine:e=>e.length?e[0]:E}),T=n.Prec.highest(i.keymap.compute([S],(e=>e.facet(S))))
function D(e,t){return Object.assign(Object.assign({},t),{apply:y(e)})}const $=i.EditorView.domEventHandlers({mousedown(e,t){let o,n=t.state.field(v,!1)
if(!n||null==(o=t.posAtCoords({x:e.clientX,y:e.clientY})))return!1
let i=n.ranges.find((e=>e.from<=o&&e.to>=o))
return!(!i||i.field==n.active||(t.dispatch({selection:I(n.ranges,i.field),effects:b.of(n.ranges.some((e=>e.field>i.field))?new x(n.ranges,i.field):null),scrollIntoView:!0}),0))}}),C=new class extends n.RangeValue{}
C.startSide=1,C.endSide=-1,"object"==typeof navigator&&navigator.userAgent}}])
