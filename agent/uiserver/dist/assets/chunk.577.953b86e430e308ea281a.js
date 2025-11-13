"use strict";(globalThis.webpackChunk_ember_auto_import_=globalThis.webpackChunk_ember_auto_import_||[]).push([[577],{6577:(e,t,i)=>{i.r(t),i.d(t,{closeLintPanel:()=>k,diagnosticCount:()=>p,forEachDiagnostic:()=>U,forceLinting:()=>R,lintGutter:()=>G,lintKeymap:()=>y,linter:()=>A,nextDiagnostic:()=>x,openLintPanel:()=>b,previousDiagnostic:()=>C,setDiagnostics:()=>f,setDiagnosticsEffect:()=>u})
var o=i(27235),n=i(73654),s=i(21778)
class l{constructor(e,t,i){this.from=e,this.to=t,this.diagnostic=i}}class r{constructor(e,t,i){this.diagnostics=e,this.panel=t,this.selected=i}static init(e,t,i){let s=i.facet(S).markerFilter
s&&(e=s(e,i))
let l=e.slice().sort(((e,t)=>e.from-t.from||e.to-t.to)),c=new n.RangeSetBuilder,d=[],f=0
for(let n=0;;){let e,t,s=n==l.length?null:l[n]
if(!s&&!d.length)break
for(d.length?(e=f,t=d.reduce(((e,t)=>Math.min(e,t.to)),s&&s.from>e?s.from:1e8)):(e=s.from,t=s.to,d.push(s),n++);n<l.length;){let i=l[n]
if(i.from!=e||!(i.to>i.from||i.to==e)){t=Math.min(i.from,t)
break}d.push(i),n++,t=Math.min(i.to,t)}let r=_(d)
if(d.some((e=>e.from==e.to||e.from==e.to-1&&i.doc.lineAt(e.from).to==e.from)))c.add(e,e,o.Decoration.widget({widget:new P(r),diagnostics:d.slice()}))
else{let i=d.reduce(((e,t)=>t.markClass?e+" "+t.markClass:e),"")
c.add(e,t,o.Decoration.mark({class:"cm-lintRange cm-lintRange-"+r+i,diagnostics:d.slice(),inclusiveEnd:d.some((e=>e.to>t))}))}f=t
for(let i=0;i<d.length;i++)d[i].to<=f&&d.splice(i--,1)}let u=c.finish()
return new r(u,t,a(u))}}function a(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,o=null
return e.between(i,1e9,((e,i,n)=>{let{spec:s}=n
if(!(t&&s.diagnostics.indexOf(t)<0))if(o){if(s.diagnostics.indexOf(o.diagnostic)<0)return!1
o=new l(o.from,i,o.diagnostic)}else o=new l(e,i,t||s.diagnostics[0])})),o}function c(e,t){let i=t.pos,o=t.end||i,n=e.state.facet(S).hideOn(e,i,o)
if(null!=n)return n
let s=e.startState.doc.lineAt(t.pos)
return!(!e.effects.some((e=>e.is(u)))&&!e.changes.touchesRange(s.from,Math.max(s.to,o)))}function d(e,t){return e.field(g,!1)?t:t.concat(n.StateEffect.appendConfig.of(Y))}function f(e,t){return{effects:d(e,[u.of(t)])}}const u=n.StateEffect.define(),m=n.StateEffect.define(),h=n.StateEffect.define(),g=n.StateField.define({create:()=>new r(o.Decoration.none,null,null),update(e,t){if(t.docChanged&&e.diagnostics.size){let i=e.diagnostics.map(t.changes),o=null,n=e.panel
if(e.selected){let n=t.changes.mapPos(e.selected.from,1)
o=a(i,e.selected.diagnostic,n)||a(i,null,n)}!i.size&&n&&t.state.facet(S).autoPanel&&(n=null),e=new r(i,n,o)}for(let i of t.effects)if(i.is(u)){let o=t.state.facet(S).autoPanel?i.value.length?I.open:null:e.panel
e=r.init(i.value,o,t.state)}else i.is(m)?e=new r(e.diagnostics,i.value?I.open:null,e.selected):i.is(h)&&(e=new r(e.diagnostics,e.panel,i.value))
return e},provide:e=>[o.showPanel.from(e,(e=>e.panel)),o.EditorView.decorations.from(e,(e=>e.diagnostics))]})
function p(e){let t=e.field(g,!1)
return t?t.diagnostics.size:0}const v=o.Decoration.mark({class:"cm-lintRange cm-lintRange-active"})
function w(e,t){return(0,s.A)("ul",{class:"cm-tooltip-lint"},t.map((t=>L(e,t,!1))))}const b=e=>{let t=e.state.field(g,!1)
t&&t.panel||e.dispatch({effects:d(e.state,[m.of(!0)])})
let i=(0,o.getPanel)(e,I.open)
return i&&i.dom.querySelector(".cm-panel-lint ul").focus(),!0},k=e=>{let t=e.state.field(g,!1)
return!(!t||!t.panel||(e.dispatch({effects:m.of(!1)}),0))},x=e=>{let t=e.state.field(g,!1)
if(!t)return!1
let i=e.state.selection.main,o=t.diagnostics.iter(i.to+1)
return!(!o.value&&(o=t.diagnostics.iter(0),!o.value||o.from==i.from&&o.to==i.to)||(e.dispatch({selection:{anchor:o.from,head:o.to},scrollIntoView:!0}),0))},C=e=>{let{state:t}=e,i=t.field(g,!1)
if(!i)return!1
let o,n,s,l,r=t.selection.main
return i.diagnostics.between(0,t.doc.length,((e,t)=>{t<r.to&&(null==o||o<e)&&(o=e,n=t),(null==s||e>s)&&(s=e,l=t)})),null!=s&&(null!=o||s!=r.from)&&(e.dispatch({selection:{anchor:null!=o?o:s,head:null!=n?n:l},scrollIntoView:!0}),!0)},y=[{key:"Mod-Shift-m",run:b,preventDefault:!0},{key:"F8",run:x}],T=o.ViewPlugin.fromClass(class{constructor(e){this.view=e,this.timeout=-1,this.set=!0
let{delay:t}=e.state.facet(S)
this.lintTime=Date.now()+t,this.run=this.run.bind(this),this.timeout=setTimeout(this.run,t)}run(){clearTimeout(this.timeout)
let e=Date.now()
if(e<this.lintTime-10)this.timeout=setTimeout(this.run,this.lintTime-e)
else{this.set=!1
let{state:e}=this.view,{sources:t}=e.facet(S)
t.length&&function(e,t,i){let o=[],n=-1
for(let s of e)s.then((i=>{o.push(i),clearTimeout(n),o.length==e.length?t(o):n=setTimeout((()=>t(o)),200)}),i)}(t.map((e=>Promise.resolve(e(this.view)))),(t=>{this.view.state.doc==e.doc&&this.view.dispatch(f(this.view.state,t.reduce(((e,t)=>e.concat(t)))))}),(e=>{(0,o.logException)(this.view.state,e)}))}}update(e){let t=e.state.facet(S);(e.docChanged||t!=e.startState.facet(S)||t.needsRefresh&&t.needsRefresh(e))&&(this.lintTime=Date.now()+t.delay,this.set||(this.set=!0,this.timeout=setTimeout(this.run,t.delay)))}force(){this.set&&(this.lintTime=Date.now(),this.run())}destroy(){clearTimeout(this.timeout)}}),S=n.Facet.define({combine:e=>Object.assign({sources:e.map((e=>e.source)).filter((e=>null!=e))},(0,n.combineConfig)(e.map((e=>e.config)),{delay:750,markerFilter:null,tooltipFilter:null,needsRefresh:null,hideOn:()=>null},{needsRefresh:(e,t)=>e?t?i=>e(i)||t(i):e:t}))})
function A(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
return[S.of({source:e,config:t}),T,Y]}function R(e){let t=e.plugin(T)
t&&t.force()}function D(e){let t=[]
if(e)e:for(let{name:i}of e){for(let e=0;e<i.length;e++){let o=i[e]
if(/[a-zA-Z]/.test(o)&&!t.some((e=>e.toLowerCase()==o.toLowerCase()))){t.push(o)
continue e}}t.push("")}return t}function L(e,t,i){var o
let n=i?D(t.actions):[]
return(0,s.A)("li",{class:"cm-diagnostic cm-diagnostic-"+t.severity},(0,s.A)("span",{class:"cm-diagnosticText"},t.renderMessage?t.renderMessage(e):t.message),null===(o=t.actions)||void 0===o?void 0:o.map(((i,o)=>{let l=!1,r=o=>{if(o.preventDefault(),l)return
l=!0
let n=a(e.state.field(g).diagnostics,t)
n&&i.apply(e,n.from,n.to)},{name:c}=i,d=n[o]?c.indexOf(n[o]):-1,f=d<0?c:[c.slice(0,d),(0,s.A)("u",c.slice(d,d+1)),c.slice(d+1)]
return(0,s.A)("button",{type:"button",class:"cm-diagnosticAction",onclick:r,onmousedown:r,"aria-label":` Action: ${c}${d<0?"":` (access key "${n[o]})"`}.`},f)})),t.source&&(0,s.A)("div",{class:"cm-diagnosticSource"},t.source))}class P extends o.WidgetType{constructor(e){super(),this.sev=e}eq(e){return e.sev==this.sev}toDOM(){return(0,s.A)("span",{class:"cm-lintPoint cm-lintPoint-"+this.sev})}}class E{constructor(e,t){this.diagnostic=t,this.id="item_"+Math.floor(4294967295*Math.random()).toString(16),this.dom=L(e,t,!0),this.dom.id=this.id,this.dom.setAttribute("role","option")}}class I{constructor(e){this.view=e,this.items=[],this.list=(0,s.A)("ul",{tabIndex:0,role:"listbox","aria-label":this.view.state.phrase("Diagnostics"),onkeydown:t=>{if(27==t.keyCode)k(this.view),this.view.focus()
else if(38==t.keyCode||33==t.keyCode)this.moveSelection((this.selectedIndex-1+this.items.length)%this.items.length)
else if(40==t.keyCode||34==t.keyCode)this.moveSelection((this.selectedIndex+1)%this.items.length)
else if(36==t.keyCode)this.moveSelection(0)
else if(35==t.keyCode)this.moveSelection(this.items.length-1)
else if(13==t.keyCode)this.view.focus()
else{if(!(t.keyCode>=65&&t.keyCode<=90&&this.selectedIndex>=0))return
{let{diagnostic:i}=this.items[this.selectedIndex],o=D(i.actions)
for(let n=0;n<o.length;n++)if(o[n].toUpperCase().charCodeAt(0)==t.keyCode){let t=a(this.view.state.field(g).diagnostics,i)
t&&i.actions[n].apply(e,t.from,t.to)}}}t.preventDefault()},onclick:e=>{for(let t=0;t<this.items.length;t++)this.items[t].dom.contains(e.target)&&this.moveSelection(t)}}),this.dom=(0,s.A)("div",{class:"cm-panel-lint"},this.list,(0,s.A)("button",{type:"button",name:"close","aria-label":this.view.state.phrase("close"),onclick:()=>k(this.view)},"×")),this.update()}get selectedIndex(){let e=this.view.state.field(g).selected
if(!e)return-1
for(let t=0;t<this.items.length;t++)if(this.items[t].diagnostic==e.diagnostic)return t
return-1}update(){let{diagnostics:e,selected:t}=this.view.state.field(g),i=0,o=!1,n=null,s=new Set
for(e.between(0,this.view.state.doc.length,((e,l,r)=>{let{spec:a}=r
for(let c of a.diagnostics){if(s.has(c))continue
s.add(c)
let e,l=-1
for(let t=i;t<this.items.length;t++)if(this.items[t].diagnostic==c){l=t
break}l<0?(e=new E(this.view,c),this.items.splice(i,0,e),o=!0):(e=this.items[l],l>i&&(this.items.splice(i,l-i),o=!0)),t&&e.diagnostic==t.diagnostic?e.dom.hasAttribute("aria-selected")||(e.dom.setAttribute("aria-selected","true"),n=e):e.dom.hasAttribute("aria-selected")&&e.dom.removeAttribute("aria-selected"),i++}}));i<this.items.length&&!(1==this.items.length&&this.items[0].diagnostic.from<0);)o=!0,this.items.pop()
0==this.items.length&&(this.items.push(new E(this.view,{from:-1,to:-1,severity:"info",message:this.view.state.phrase("No diagnostics")})),o=!0),n?(this.list.setAttribute("aria-activedescendant",n.id),this.view.requestMeasure({key:this,read:()=>({sel:n.dom.getBoundingClientRect(),panel:this.list.getBoundingClientRect()}),write:e=>{let{sel:t,panel:i}=e,o=i.height/this.list.offsetHeight
t.top<i.top?this.list.scrollTop-=(i.top-t.top)/o:t.bottom>i.bottom&&(this.list.scrollTop+=(t.bottom-i.bottom)/o)}})):this.selectedIndex<0&&this.list.removeAttribute("aria-activedescendant"),o&&this.sync()}sync(){let e=this.list.firstChild
function t(){let t=e
e=t.nextSibling,t.remove()}for(let i of this.items)if(i.dom.parentNode==this.list){for(;e!=i.dom;)t()
e=i.dom.nextSibling}else this.list.insertBefore(i.dom,e)
for(;e;)t()}moveSelection(e){if(this.selectedIndex<0)return
let t=a(this.view.state.field(g).diagnostics,this.items[e].diagnostic)
t&&this.view.dispatch({selection:{anchor:t.from,head:t.to},scrollIntoView:!0,effects:h.of(t)})}static open(e){return new I(e)}}function M(e){return`url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" ${arguments.length>1&&void 0!==arguments[1]?arguments[1]:'viewBox="0 0 40 40"'}>${encodeURIComponent(e)}</svg>')`}function F(e){return M(`<path d="m0 2.5 l2 -1.5 l1 0 l2 1.5 l1 0" stroke="${e}" fill="none" stroke-width=".7"/>`,'width="6" height="3"')}const O=o.EditorView.baseTheme({".cm-diagnostic":{padding:"3px 6px 3px 8px",marginLeft:"-1px",display:"block",whiteSpace:"pre-wrap"},".cm-diagnostic-error":{borderLeft:"5px solid #d11"},".cm-diagnostic-warning":{borderLeft:"5px solid orange"},".cm-diagnostic-info":{borderLeft:"5px solid #999"},".cm-diagnostic-hint":{borderLeft:"5px solid #66d"},".cm-diagnosticAction":{font:"inherit",border:"none",padding:"2px 4px",backgroundColor:"#444",color:"white",borderRadius:"3px",marginLeft:"8px",cursor:"pointer"},".cm-diagnosticSource":{fontSize:"70%",opacity:.7},".cm-lintRange":{backgroundPosition:"left bottom",backgroundRepeat:"repeat-x",paddingBottom:"0.7px"},".cm-lintRange-error":{backgroundImage:F("#d11")},".cm-lintRange-warning":{backgroundImage:F("orange")},".cm-lintRange-info":{backgroundImage:F("#999")},".cm-lintRange-hint":{backgroundImage:F("#66d")},".cm-lintRange-active":{backgroundColor:"#ffdd9980"},".cm-tooltip-lint":{padding:0,margin:0},".cm-lintPoint":{position:"relative","&:after":{content:'""',position:"absolute",bottom:0,left:"-2px",borderLeft:"3px solid transparent",borderRight:"3px solid transparent",borderBottom:"4px solid #d11"}},".cm-lintPoint-warning":{"&:after":{borderBottomColor:"orange"}},".cm-lintPoint-info":{"&:after":{borderBottomColor:"#999"}},".cm-lintPoint-hint":{"&:after":{borderBottomColor:"#66d"}},".cm-panel.cm-panel-lint":{position:"relative","& ul":{maxHeight:"100px",overflowY:"auto","& [aria-selected]":{backgroundColor:"#ddd","& u":{textDecoration:"underline"}},"&:focus [aria-selected]":{background_fallback:"#bdf",backgroundColor:"Highlight",color_fallback:"white",color:"HighlightText"},"& u":{textDecoration:"none"},padding:0,margin:0},"& [name=close]":{position:"absolute",top:"0",right:"2px",background:"inherit",border:"none",font:"inherit",padding:0,margin:0}}})
function B(e){return"error"==e?4:"warning"==e?3:"info"==e?2:1}function _(e){let t="hint",i=1
for(let o of e){let e=B(o.severity)
e>i&&(i=e,t=o.severity)}return t}class V extends o.GutterMarker{constructor(e){super(),this.diagnostics=e,this.severity=_(e)}toDOM(e){let t=document.createElement("div")
t.className="cm-lint-marker cm-lint-marker-"+this.severity
let i=this.diagnostics,o=e.state.facet(Z).tooltipFilter
return o&&(i=o(i,e.state)),i.length&&(t.onmouseover=()=>function(e,t,i){function o(){let o=e.elementAtHeight(t.getBoundingClientRect().top+5-e.documentTop)
e.coordsAtPos(o.from)&&e.dispatch({effects:H.of({pos:o.from,above:!1,clip:!1,create:()=>({dom:w(e,i),getCoords:()=>t.getBoundingClientRect()})})}),t.onmouseout=t.onmousemove=null,function(e,t){let i=o=>{let n=t.getBoundingClientRect()
if(!(o.clientX>n.left-10&&o.clientX<n.right+10&&o.clientY>n.top-10&&o.clientY<n.bottom+10)){for(let e=o.target;e;e=e.parentNode)if(1==e.nodeType&&e.classList.contains("cm-tooltip-lint"))return
window.removeEventListener("mousemove",i),e.state.field(N)&&e.dispatch({effects:H.of(null)})}}
window.addEventListener("mousemove",i)}(e,t)}let{hoverTime:n}=e.state.facet(Z),s=setTimeout(o,n)
t.onmouseout=()=>{clearTimeout(s),t.onmouseout=t.onmousemove=null},t.onmousemove=()=>{clearTimeout(s),s=setTimeout(o,n)}}(e,t,i)),t}}function j(e,t){let i=Object.create(null)
for(let n of t){let t=e.lineAt(n.from);(i[t.from]||(i[t.from]=[])).push(n)}let o=[]
for(let n in i)o.push(new V(i[n]).range(+n))
return n.RangeSet.of(o,!0)}const z=(0,o.gutter)({class:"cm-gutter-lint",markers:e=>e.state.field($),widgetMarker:(e,t,i)=>{let o=[]
return e.state.field($).between(i.from,i.to,((e,t,n)=>{e>i.from&&e<i.to&&o.push(...n.diagnostics)})),o.length?new V(o):null}}),$=n.StateField.define({create:()=>n.RangeSet.empty,update(e,t){e=e.map(t.changes)
let i=t.state.facet(Z).markerFilter
for(let o of t.effects)if(o.is(u)){let n=o.value
i&&(n=i(n||[],t.state)),e=j(t.state.doc,n.slice(0))}return e}}),H=n.StateEffect.define(),N=n.StateField.define({create:()=>null,update:(e,t)=>(e&&t.docChanged&&(e=c(t,e)?null:Object.assign(Object.assign({},e),{pos:t.changes.mapPos(e.pos)})),t.effects.reduce(((e,t)=>t.is(H)?t.value:e),e)),provide:e=>o.showTooltip.from(e)}),q=o.EditorView.baseTheme({".cm-gutter-lint":{width:"1.4em","& .cm-gutterElement":{padding:".2em"}},".cm-lint-marker":{width:"1em",height:"1em"},".cm-lint-marker-info":{content:M('<path fill="#aaf" stroke="#77e" stroke-width="6" stroke-linejoin="round" d="M5 5L35 5L35 35L5 35Z"/>')},".cm-lint-marker-warning":{content:M('<path fill="#fe8" stroke="#fd7" stroke-width="6" stroke-linejoin="round" d="M20 6L37 35L3 35Z"/>')},".cm-lint-marker-error":{content:M('<circle cx="20" cy="20" r="15" fill="#f87" stroke="#f43" stroke-width="6"/>')}}),Y=[g,o.EditorView.decorations.compute([g],(e=>{let{selected:t,panel:i}=e.field(g)
return t&&i&&t.from!=t.to?o.Decoration.set([v.range(t.from,t.to)]):o.Decoration.none})),(0,o.hoverTooltip)((function(e,t,i){let o,{diagnostics:n}=e.state.field(g),s=-1,l=-1
n.between(t-(i<0?1:0),t+(i>0?1:0),((e,n,r)=>{let{spec:a}=r
if(t>=e&&t<=n&&(e==n||(t>e||i>0)&&(t<n||i<0)))return o=a.diagnostics,s=e,l=n,!1}))
let r=e.state.facet(S).tooltipFilter
return o&&r&&(o=r(o,e.state)),o?{pos:s,end:l,above:e.state.doc.lineAt(s).to<l,create:()=>({dom:w(e,o)})}:null}),{hideOn:c}),O],Z=n.Facet.define({combine:e=>(0,n.combineConfig)(e,{hoverTime:300,markerFilter:null,tooltipFilter:null})})
function G(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}
return[Z.of(e),$,z,q,N]}function U(e,t){let i=e.field(g,!1)
if(i&&i.diagnostics.size){let e=[],o=[],s=-1
for(let l=n.RangeSet.iter([i.diagnostics]);;l.next()){for(let i=0;i<e.length;i++)(!l.value||l.value.spec.diagnostics.indexOf(e[i])<0)&&(t(e[i],o[i],s),e.splice(i,1),o.splice(i--,1))
if(!l.value)break
for(let t of l.value.spec.diagnostics)e.indexOf(t)<0&&(e.push(t),o.push(l.from))
s=l.to}}}}}])
