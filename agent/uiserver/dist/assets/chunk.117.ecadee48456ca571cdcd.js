"use strict";(globalThis.webpackChunk_ember_auto_import_=globalThis.webpackChunk_ember_auto_import_||[]).push([[117],{47117:(e,t,r)=>{r.r(t),r.d(t,{commonmarkLanguage:()=>vr,deleteMarkupBackward:()=>Rr,insertNewlineContinueMarkup:()=>Vr,markdown:()=>Br,markdownKeymap:()=>qr,markdownLanguage:()=>Tr})
var n,a=r(73654),l=r(27235),s=r(47304),o=r(94018),i=r(7363),O=r(6386)
class u{static create(e,t,r,n,a){return new u(e,t,r,n+(n<<8)+e+(t<<4)|0,a,[],[])}constructor(e,t,r,n,a,l,s){this.type=e,this.value=t,this.from=r,this.hash=n,this.end=a,this.children=l,this.positions=s,this.hashProp=[[i.uY.contextHash,n]]}addChild(e,t){e.prop(i.uY.contextHash)!=this.hash&&(e=new i.PH(e.type,e.children,e.positions,e.length,this.hashProp)),this.children.push(e),this.positions.push(t)}toTree(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.end,r=this.children.length-1
return r>=0&&(t=Math.max(t,this.positions[r]+this.children[r].length+this.from)),new i.PH(e.types[this.type],this.children,this.positions,t-this.from).balance({makeTree:(e,t,r)=>new i.PH(i.Z6.none,e,t,r,this.hashProp)})}}!function(e){e[e.Document=1]="Document",e[e.CodeBlock=2]="CodeBlock",e[e.FencedCode=3]="FencedCode",e[e.Blockquote=4]="Blockquote",e[e.HorizontalRule=5]="HorizontalRule",e[e.BulletList=6]="BulletList",e[e.OrderedList=7]="OrderedList",e[e.ListItem=8]="ListItem",e[e.ATXHeading1=9]="ATXHeading1",e[e.ATXHeading2=10]="ATXHeading2",e[e.ATXHeading3=11]="ATXHeading3",e[e.ATXHeading4=12]="ATXHeading4",e[e.ATXHeading5=13]="ATXHeading5",e[e.ATXHeading6=14]="ATXHeading6",e[e.SetextHeading1=15]="SetextHeading1",e[e.SetextHeading2=16]="SetextHeading2",e[e.HTMLBlock=17]="HTMLBlock",e[e.LinkReference=18]="LinkReference",e[e.Paragraph=19]="Paragraph",e[e.CommentBlock=20]="CommentBlock",e[e.ProcessingInstructionBlock=21]="ProcessingInstructionBlock",e[e.Escape=22]="Escape",e[e.Entity=23]="Entity",e[e.HardBreak=24]="HardBreak",e[e.Emphasis=25]="Emphasis",e[e.StrongEmphasis=26]="StrongEmphasis",e[e.Link=27]="Link",e[e.Image=28]="Image",e[e.InlineCode=29]="InlineCode",e[e.HTMLTag=30]="HTMLTag",e[e.Comment=31]="Comment",e[e.ProcessingInstruction=32]="ProcessingInstruction",e[e.Autolink=33]="Autolink",e[e.HeaderMark=34]="HeaderMark",e[e.QuoteMark=35]="QuoteMark",e[e.ListMark=36]="ListMark",e[e.LinkMark=37]="LinkMark",e[e.EmphasisMark=38]="EmphasisMark",e[e.CodeMark=39]="CodeMark",e[e.CodeText=40]="CodeText",e[e.CodeInfo=41]="CodeInfo",e[e.LinkTitle=42]="LinkTitle",e[e.LinkLabel=43]="LinkLabel",e[e.URL=44]="URL"}(n||(n={}))
class c{constructor(e,t){this.start=e,this.content=t,this.marks=[],this.parsers=[]}}class d{constructor(){this.text="",this.baseIndent=0,this.basePos=0,this.depth=0,this.markers=[],this.pos=0,this.indent=0,this.next=-1}forward(){this.basePos>this.pos&&this.forwardInner()}forwardInner(){let e=this.skipSpace(this.basePos)
this.indent=this.countIndent(e,this.pos,this.indent),this.pos=e,this.next=e==this.text.length?-1:this.text.charCodeAt(e)}skipSpace(e){return m(this.text,e)}reset(e){for(this.text=e,this.baseIndent=this.basePos=this.pos=this.indent=0,this.forwardInner(),this.depth=1;this.markers.length;)this.markers.pop()}moveBase(e){this.basePos=e,this.baseIndent=this.countIndent(e,this.pos,this.indent)}moveBaseColumn(e){this.baseIndent=e,this.basePos=this.findColumn(e)}addMarker(e){this.markers.push(e)}countIndent(e){let t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0
for(let r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;r<e;r++)t+=9==this.text.charCodeAt(r)?4-t%4:1
return t}findColumn(e){let t=0
for(let r=0;t<this.text.length&&r<e;t++)r+=9==this.text.charCodeAt(t)?4-r%4:1
return t}scrub(){if(!this.baseIndent)return this.text
let e=""
for(let t=0;t<this.basePos;t++)e+=" "
return e+this.text.slice(this.basePos)}}function p(e,t,r){if(r.pos==r.text.length||e!=t.block&&r.indent>=t.stack[r.depth+1].value+r.baseIndent)return!0
if(r.indent>=r.baseIndent+4)return!1
let a=(e.type==n.OrderedList?Q:y)(r,t,!1)
return a>0&&(e.type!=n.BulletList||k(r,t,!1)<0)&&r.text.charCodeAt(r.pos+a-1)==e.value}const h={[n.Blockquote]:(e,t,r)=>62==r.next&&(r.markers.push(F(n.QuoteMark,t.lineStart+r.pos,t.lineStart+r.pos+1)),r.moveBase(r.pos+(f(r.text.charCodeAt(r.pos+1))?2:1)),e.end=t.lineStart+r.text.length,!0),[n.ListItem]:(e,t,r)=>!(r.indent<r.baseIndent+e.value&&r.next>-1||(r.moveBaseColumn(r.baseIndent+e.value),0)),[n.OrderedList]:p,[n.BulletList]:p,[n.Document]:()=>!0}
function f(e){return 32==e||9==e||10==e||13==e}function m(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0
for(;t<e.length&&f(e.charCodeAt(t));)t++
return t}function g(e,t,r){for(;t>r&&f(e.charCodeAt(t-1));)t--
return t}function S(e){if(96!=e.next&&126!=e.next)return-1
let t=e.pos+1
for(;t<e.text.length&&e.text.charCodeAt(t)==e.next;)t++
if(t<e.pos+3)return-1
if(96==e.next)for(let r=t;r<e.text.length;r++)if(96==e.text.charCodeAt(r))return-1
return t}function b(e){return 62!=e.next?-1:32==e.text.charCodeAt(e.pos+1)?2:1}function k(e,t,r){if(42!=e.next&&45!=e.next&&95!=e.next)return-1
let n=1
for(let a=e.pos+1;a<e.text.length;a++){let t=e.text.charCodeAt(a)
if(t==e.next)n++
else if(!f(t))return-1}return r&&45==e.next&&w(e)>-1&&e.depth==t.stack.length&&t.parser.leafBlockParsers.indexOf(q.SetextHeading)>-1||n<3?-1:1}function x(e,t){for(let r=e.stack.length-1;r>=0;r--)if(e.stack[r].type==t)return!0
return!1}function y(e,t,r){return 45!=e.next&&43!=e.next&&42!=e.next||e.pos!=e.text.length-1&&!f(e.text.charCodeAt(e.pos+1))||!(!r||x(t,n.BulletList)||e.skipSpace(e.pos+2)<e.text.length)?-1:1}function Q(e,t,r){let a=e.pos,l=e.next
for(;l>=48&&l<=57;){if(a++,a==e.text.length)return-1
l=e.text.charCodeAt(a)}return a==e.pos||a>e.pos+9||46!=l&&41!=l||a<e.text.length-1&&!f(e.text.charCodeAt(a+1))||r&&!x(t,n.OrderedList)&&(e.skipSpace(a+1)==e.text.length||a>e.pos+1||49!=e.next)?-1:a+1-e.pos}function P(e){if(35!=e.next)return-1
let t=e.pos+1
for(;t<e.text.length&&35==e.text.charCodeAt(t);)t++
if(t<e.text.length&&32!=e.text.charCodeAt(t))return-1
let r=t-e.pos
return r>6?-1:r}function w(e){if(45!=e.next&&61!=e.next||e.indent>=e.baseIndent+4)return-1
let t=e.pos+1
for(;t<e.text.length&&e.text.charCodeAt(t)==e.next;)t++
let r=t
for(;t<e.text.length&&f(e.text.charCodeAt(t));)t++
return t==e.text.length?r:-1}const v=/^[ \t]*$/,T=/-->/,$=/\?>/,X=[[/^<(?:script|pre|style)(?:\s|>|$)/i,/<\/(?:script|pre|style)>/i],[/^\s*<!--/,T],[/^\s*<\?/,$],[/^\s*<![A-Z]/,/>/],[/^\s*<!\[CDATA\[/,/\]\]>/],[/^\s*<\/?(?:address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h1|h2|h3|h4|h5|h6|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul)(?:\s|\/?>|$)/i,v],[/^\s*(?:<\/[a-z][\w-]*\s*>|<[a-z][\w-]*(\s+[a-z:_][\w-.]*(?:\s*=\s*(?:[^\s"'=<>`]+|'[^']*'|"[^"]*"))?)*\s*>)\s*$/i,v]]
function _(e,t,r){if(60!=e.next)return-1
let n=e.text.slice(e.pos)
for(let a=0,l=X.length-(r?1:0);a<l;a++)if(X[a][0].test(n))return a
return-1}function A(e,t){let r=e.countIndent(t,e.pos,e.indent),n=e.countIndent(e.skipSpace(t),t,r)
return n>=r+5?r+1:n}function C(e,t,r){let a=e.length-1
a>=0&&e[a].to==t&&e[a].type==n.CodeText?e[a].to=r:e.push(F(n.CodeText,t,r))}const V={LinkReference:void 0,IndentedCode(e,t){let r=t.baseIndent+4
if(t.indent<r)return!1
let a=t.findColumn(r),l=e.lineStart+a,s=e.lineStart+t.text.length,o=[],i=[]
for(C(o,l,s);e.nextLine()&&t.depth>=e.stack.length;)if(t.pos==t.text.length){C(i,e.lineStart-1,e.lineStart)
for(let e of t.markers)i.push(e)}else{if(t.indent<r)break
{if(i.length){for(let e of i)e.type==n.CodeText?C(o,e.from,e.to):o.push(e)
i=[]}C(o,e.lineStart-1,e.lineStart)
for(let e of t.markers)o.push(e)
s=e.lineStart+t.text.length
let r=e.lineStart+t.findColumn(t.baseIndent+4)
r<s&&C(o,r,s)}}return i.length&&(i=i.filter((e=>e.type!=n.CodeText)),i.length&&(t.markers=i.concat(t.markers))),e.addNode(e.buffer.writeElements(o,-l).finish(n.CodeBlock,s-l),l),!0},FencedCode(e,t){let r=S(t)
if(r<0)return!1
let a=e.lineStart+t.pos,l=t.next,s=r-t.pos,o=t.skipSpace(r),i=g(t.text,t.text.length,o),O=[F(n.CodeMark,a,a+s)]
o<i&&O.push(F(n.CodeInfo,e.lineStart+o,e.lineStart+i))
for(let u=!0;e.nextLine()&&t.depth>=e.stack.length;u=!1){let r=t.pos
if(t.indent-t.baseIndent<4)for(;r<t.text.length&&t.text.charCodeAt(r)==l;)r++
if(r-t.pos>=s&&t.skipSpace(r)==t.text.length){for(let e of t.markers)O.push(e)
O.push(F(n.CodeMark,e.lineStart+t.pos,e.lineStart+r)),e.nextLine()
break}{u||C(O,e.lineStart-1,e.lineStart)
for(let e of t.markers)O.push(e)
let r=e.lineStart+t.basePos,n=e.lineStart+t.text.length
r<n&&C(O,r,n)}}return e.addNode(e.buffer.writeElements(O,-a).finish(n.FencedCode,e.prevLineEnd()-a),a),!0},Blockquote(e,t){let r=b(t)
return!(r<0)&&(e.startContext(n.Blockquote,t.pos),e.addNode(n.QuoteMark,e.lineStart+t.pos,e.lineStart+t.pos+1),t.moveBase(t.pos+r),null)},HorizontalRule(e,t){if(k(t,e,!1)<0)return!1
let r=e.lineStart+t.pos
return e.nextLine(),e.addNode(n.HorizontalRule,r),!0},BulletList(e,t){let r=y(t,e,!1)
if(r<0)return!1
e.block.type!=n.BulletList&&e.startContext(n.BulletList,t.basePos,t.next)
let a=A(t,t.pos+1)
return e.startContext(n.ListItem,t.basePos,a-t.baseIndent),e.addNode(n.ListMark,e.lineStart+t.pos,e.lineStart+t.pos+r),t.moveBaseColumn(a),null},OrderedList(e,t){let r=Q(t,e,!1)
if(r<0)return!1
e.block.type!=n.OrderedList&&e.startContext(n.OrderedList,t.basePos,t.text.charCodeAt(t.pos+r-1))
let a=A(t,t.pos+r)
return e.startContext(n.ListItem,t.basePos,a-t.baseIndent),e.addNode(n.ListMark,e.lineStart+t.pos,e.lineStart+t.pos+r),t.moveBaseColumn(a),null},ATXHeading(e,t){let r=P(t)
if(r<0)return!1
let a=t.pos,l=e.lineStart+a,s=g(t.text,t.text.length,a),o=s
for(;o>a&&t.text.charCodeAt(o-1)==t.next;)o--
o!=s&&o!=a&&f(t.text.charCodeAt(o-1))||(o=t.text.length)
let i=e.buffer.write(n.HeaderMark,0,r).writeElements(e.parser.parseInline(t.text.slice(a+r+1,o),l+r+1),-l)
o<t.text.length&&i.write(n.HeaderMark,o-a,s-a)
let O=i.finish(n.ATXHeading1-1+r,t.text.length-a)
return e.nextLine(),e.addNode(O,l),!0},HTMLBlock(e,t){let r=_(t,0,!1)
if(r<0)return!1
let a=e.lineStart+t.pos,l=X[r][1],s=[],o=l!=v
for(;!l.test(t.text)&&e.nextLine();){if(t.depth<e.stack.length){o=!1
break}for(let e of t.markers)s.push(e)}o&&e.nextLine()
let i=l==T?n.CommentBlock:l==$?n.ProcessingInstructionBlock:n.HTMLBlock,O=e.prevLineEnd()
return e.addNode(e.buffer.writeElements(s,-a).finish(i,O-a),a),!0},SetextHeading:void 0}
class L{constructor(e){this.stage=0,this.elts=[],this.pos=0,this.start=e.start,this.advance(e.content)}nextLine(e,t,r){if(-1==this.stage)return!1
let n=r.content+"\n"+t.scrub(),a=this.advance(n)
return a>-1&&a<n.length&&this.complete(e,r,a)}finish(e,t){return(2==this.stage||3==this.stage)&&m(t.content,this.pos)==t.content.length&&this.complete(e,t,t.content.length)}complete(e,t,r){return e.addLeafElement(t,F(n.LinkReference,this.start,this.start+r,this.elts)),!0}nextStage(e){return e?(this.pos=e.to-this.start,this.elts.push(e),this.stage++,!0):(!1===e&&(this.stage=-1),!1)}advance(e){for(;;){if(-1==this.stage)return-1
if(0==this.stage){if(!this.nextStage(ie(e,this.pos,this.start,!0)))return-1
if(58!=e.charCodeAt(this.pos))return this.stage=-1
this.elts.push(F(n.LinkMark,this.pos+this.start,this.pos+this.start+1)),this.pos++}else{if(1!=this.stage){if(2==this.stage){let t=m(e,this.pos),r=0
if(t>this.pos){let n=oe(e,t,this.start)
if(n){let t=E(e,n.to-this.start)
t>0&&(this.nextStage(n),r=t)}}return r||(r=E(e,this.pos)),r>0&&r<e.length?r:-1}return E(e,this.pos)}if(!this.nextStage(se(e,m(e,this.pos),this.start)))return-1}}}}function E(e,t){for(;t<e.length;t++){let r=e.charCodeAt(t)
if(10==r)break
if(!f(r))return-1}return t}class R{nextLine(e,t,r){let a=t.depth<e.stack.length?-1:w(t),l=t.next
if(a<0)return!1
let s=F(n.HeaderMark,e.lineStart+t.pos,e.lineStart+a)
return e.nextLine(),e.addLeafElement(r,F(61==l?n.SetextHeading1:n.SetextHeading2,r.start,e.prevLineEnd(),[...e.parser.parseInline(r.content,r.start),s])),!0}finish(){return!1}}const q={LinkReference:(e,t)=>91==t.content.charCodeAt(0)?new L(t):null,SetextHeading:()=>new R},z=[(e,t)=>P(t)>=0,(e,t)=>S(t)>=0,(e,t)=>b(t)>=0,(e,t)=>y(t,e,!0)>=0,(e,t)=>Q(t,e,!0)>=0,(e,t)=>k(t,e,!0)>=0,(e,t)=>_(t,0,!0)>=0],B={text:"",end:0}
class W{constructor(e,t,r,a){this.parser=e,this.input=t,this.ranges=a,this.line=new d,this.atEnd=!1,this.reusePlaceholders=new Map,this.stoppedAt=null,this.rangeI=0,this.to=a[a.length-1].to,this.lineStart=this.absoluteLineStart=this.absoluteLineEnd=a[0].from,this.block=u.create(n.Document,0,this.lineStart,0,0),this.stack=[this.block],this.fragments=r.length?new de(r,t):null,this.readLine()}get parsedPos(){return this.absoluteLineStart}advance(){if(null!=this.stoppedAt&&this.absoluteLineStart>this.stoppedAt)return this.finish()
let{line:e}=this
for(;;){for(let t=0;;){let r=e.depth<this.stack.length?this.stack[this.stack.length-1]:null
for(;t<e.markers.length&&(!r||e.markers[t].from<r.end);){let r=e.markers[t++]
this.addNode(r.type,r.from,r.to)}if(!r)break
this.finishContext()}if(e.pos<e.text.length)break
if(!this.nextLine())return this.finish()}if(this.fragments&&this.reuseFragment(e.basePos))return null
e:for(;;){for(let t of this.parser.blockParsers)if(t){let r=t(this,e)
if(0!=r){if(1==r)return null
e.forward()
continue e}}break}let t=new c(this.lineStart+e.pos,e.text.slice(e.pos))
for(let r of this.parser.leafBlockParsers)if(r){let e=r(this,t)
e&&t.parsers.push(e)}e:for(;this.nextLine()&&e.pos!=e.text.length;){if(e.indent<e.baseIndent+4)for(let r of this.parser.endLeafBlock)if(r(this,e,t))break e
for(let r of t.parsers)if(r.nextLine(this,e,t))return null
t.content+="\n"+e.scrub()
for(let r of e.markers)t.marks.push(r)}return this.finishLeaf(t),null}stopAt(e){if(null!=this.stoppedAt&&this.stoppedAt<e)throw new RangeError("Can't move stoppedAt forward")
this.stoppedAt=e}reuseFragment(e){if(!this.fragments.moveTo(this.absoluteLineStart+e,this.absoluteLineStart)||!this.fragments.matches(this.block.hash))return!1
let t=this.fragments.takeNodes(this)
return!!t&&(this.absoluteLineStart+=t,this.lineStart=pe(this.absoluteLineStart,this.ranges),this.moveRangeI(),this.absoluteLineStart<this.to?(this.lineStart++,this.absoluteLineStart++,this.readLine()):(this.atEnd=!0,this.readLine()),!0)}get depth(){return this.stack.length}parentType(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.depth-1
return this.parser.nodeSet.types[this.stack[e].type]}nextLine(){return this.lineStart+=this.line.text.length,this.absoluteLineEnd>=this.to?(this.absoluteLineStart=this.absoluteLineEnd,this.atEnd=!0,this.readLine(),!1):(this.lineStart++,this.absoluteLineStart=this.absoluteLineEnd+1,this.moveRangeI(),this.readLine(),!0)}peekLine(){return this.scanLine(this.absoluteLineEnd+1).text}moveRangeI(){for(;this.rangeI<this.ranges.length-1&&this.absoluteLineStart>=this.ranges[this.rangeI].to;)this.rangeI++,this.absoluteLineStart=Math.max(this.absoluteLineStart,this.ranges[this.rangeI].from)}scanLine(e){let t=B
if(t.end=e,e>=this.to)t.text=""
else if(t.text=this.lineChunkAt(e),t.end+=t.text.length,this.ranges.length>1){let e=this.absoluteLineStart,r=this.rangeI
for(;this.ranges[r].to<t.end;){r++
let n=this.ranges[r].from,a=this.lineChunkAt(n)
t.end=n+a.length,t.text=t.text.slice(0,this.ranges[r-1].to-e)+a,e=t.end-t.text.length}}return t}readLine(){let{line:e}=this,{text:t,end:r}=this.scanLine(this.absoluteLineStart)
for(this.absoluteLineEnd=r,e.reset(t);e.depth<this.stack.length;e.depth++){let t=this.stack[e.depth],r=this.parser.skipContextMarkup[t.type]
if(!r)throw new Error("Unhandled block context "+n[t.type])
if(!r(t,this,e))break
e.forward()}}lineChunkAt(e){let t,r=this.input.chunk(e)
if(this.input.lineChunks)t="\n"==r?"":r
else{let e=r.indexOf("\n")
t=e<0?r:r.slice(0,e)}return e+t.length>this.to?t.slice(0,this.to-e):t}prevLineEnd(){return this.atEnd?this.lineStart:this.lineStart-1}startContext(e,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0
this.block=u.create(e,r,this.lineStart+t,this.block.hash,this.lineStart+this.line.text.length),this.stack.push(this.block)}startComposite(e,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0
this.startContext(this.parser.getNodeType(e),t,r)}addNode(e,t,r){"number"==typeof e&&(e=new i.PH(this.parser.nodeSet.types[e],G,G,(null!=r?r:this.prevLineEnd())-t)),this.block.addChild(e,t-this.block.from)}addElement(e){this.block.addChild(e.toTree(this.parser.nodeSet),e.from-this.block.from)}addLeafElement(e,t){this.addNode(this.buffer.writeElements(ue(t.children,e.marks),-t.from).finish(t.type,t.to-t.from),t.from)}finishContext(){let e=this.stack.pop(),t=this.stack[this.stack.length-1]
t.addChild(e.toTree(this.parser.nodeSet),e.from-t.from),this.block=t}finish(){for(;this.stack.length>1;)this.finishContext()
return this.addGaps(this.block.toTree(this.parser.nodeSet,this.lineStart))}addGaps(e){return this.ranges.length>1?Y(this.ranges,0,e.topNode,this.ranges[0].from,this.reusePlaceholders):e}finishLeaf(e){for(let r of e.parsers)if(r.finish(this,e))return
let t=ue(this.parser.parseInline(e.content,e.start),e.marks)
this.addNode(this.buffer.writeElements(t,-e.start).finish(n.Paragraph,e.content.length),e.start)}elt(e,t,r,n){return"string"==typeof e?F(this.parser.getNodeType(e),t,r,n):new H(e,t)}get buffer(){return new D(this.parser.nodeSet)}}function Y(e,t,r,n,a){let l=e[t].to,s=[],o=[],O=r.from+n
function u(r,a){for(;a?r>=l:r>l;){let a=e[t+1].from-l
n+=a,r+=a,t++,l=e[t].to}}for(let i=r.firstChild;i;i=i.nextSibling){u(i.from+n,!0)
let r,c=i.from+n,d=a.get(i.tree)
d?r=d:i.to+n>l?(r=Y(e,t,i,n,a),u(i.to+n,!1)):r=i.toTree(),s.push(r),o.push(c-O)}return u(r.to+n,!1),new i.PH(r.type,s,o,r.to+n-O,r.tree?r.tree.propValues:void 0)}class Z extends i.iX{constructor(e,t,r,n,a,l,s,o,i){super(),this.nodeSet=e,this.blockParsers=t,this.leafBlockParsers=r,this.blockNames=n,this.endLeafBlock=a,this.skipContextMarkup=l,this.inlineParsers=s,this.inlineNames=o,this.wrappers=i,this.nodeTypes=Object.create(null)
for(let O of e.types)this.nodeTypes[O.name]=O.id}createParse(e,t,r){let n=new W(this,e,t,r)
for(let a of this.wrappers)n=a(n,e,t,r)
return n}configure(e){let t=M(e)
if(!t)return this
let{nodeSet:r,skipContextMarkup:a}=this,l=this.blockParsers.slice(),s=this.leafBlockParsers.slice(),o=this.blockNames.slice(),u=this.inlineParsers.slice(),c=this.inlineNames.slice(),d=this.endLeafBlock.slice(),p=this.wrappers
if(I(t.defineNodes)){a=Object.assign({},a)
let e,l=r.types.slice()
for(let r of t.defineNodes){let{name:t,block:s,composite:o,style:u}="string"==typeof r?{name:r}:r
if(l.some((e=>e.name==t)))continue
o&&(a[l.length]=(e,t,r)=>o(t,r,e.value))
let c=l.length,d=o?["Block","BlockContext"]:s?c>=n.ATXHeading1&&c<=n.SetextHeading2?["Block","LeafBlock","Heading"]:["Block","LeafBlock"]:void 0
l.push(i.Z6.define({id:c,name:t,props:d&&[[i.uY.group,d]]})),u&&(e||(e={}),Array.isArray(u)||u instanceof O.vw?e[t]=u:Object.assign(e,u))}r=new i.fI(l),e&&(r=r.extend((0,O.pn)(e)))}if(I(t.props)&&(r=r.extend(...t.props)),I(t.remove))for(let n of t.remove){let e=this.blockNames.indexOf(n),t=this.inlineNames.indexOf(n)
e>-1&&(l[e]=s[e]=void 0),t>-1&&(u[t]=void 0)}if(I(t.parseBlock))for(let n of t.parseBlock){let e=o.indexOf(n.name)
if(e>-1)l[e]=n.parse,s[e]=n.leaf
else{let e=n.before?U(o,n.before):n.after?U(o,n.after)+1:o.length-1
l.splice(e,0,n.parse),s.splice(e,0,n.leaf),o.splice(e,0,n.name)}n.endLeaf&&d.push(n.endLeaf)}if(I(t.parseInline))for(let n of t.parseInline){let e=c.indexOf(n.name)
if(e>-1)u[e]=n.parse
else{let e=n.before?U(c,n.before):n.after?U(c,n.after)+1:c.length-1
u.splice(e,0,n.parse),c.splice(e,0,n.name)}}return t.wrap&&(p=p.concat(t.wrap)),new Z(r,l,s,o,d,a,u,c,p)}getNodeType(e){let t=this.nodeTypes[e]
if(null==t)throw new RangeError(`Unknown node type '${e}'`)
return t}parseInline(e,t){let r=new Oe(this,e,t)
e:for(let n=t;n<r.end;){let e=r.char(n)
for(let t of this.inlineParsers)if(t){let a=t(r,e,n)
if(a>=0){n=a
continue e}}n++}return r.resolveMarkers(0)}}function I(e){return null!=e&&e.length>0}function M(e){if(!Array.isArray(e))return e
if(0==e.length)return null
let t=M(e[0])
if(1==e.length)return t
let r=M(e.slice(1))
if(!r||!t)return t||r
let n=(e,t)=>(e||G).concat(t||G),a=t.wrap,l=r.wrap
return{props:n(t.props,r.props),defineNodes:n(t.defineNodes,r.defineNodes),parseBlock:n(t.parseBlock,r.parseBlock),parseInline:n(t.parseInline,r.parseInline),remove:n(t.remove,r.remove),wrap:a?l?(e,t,r,n)=>a(l(e,t,r,n),t,r,n):a:l}}function U(e,t){let r=e.indexOf(t)
if(r<0)throw new RangeError(`Position specified relative to unknown parser ${t}`)
return r}let N=[i.Z6.none]
for(let Ir,Mr=1;Ir=n[Mr];Mr++)N[Mr]=i.Z6.define({id:Mr,name:Ir,props:Mr>=n.Escape?[]:[[i.uY.group,Mr in h?["Block","BlockContext"]:["Block","LeafBlock"]]],top:"Document"==Ir})
const G=[]
class D{constructor(e){this.nodeSet=e,this.content=[],this.nodes=[]}write(e,t,r){let n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0
return this.content.push(e,t,r,4+4*n),this}writeElements(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0
for(let r of e)r.writeTo(this,t)
return this}finish(e,t){return i.PH.build({buffer:this.content,nodeSet:this.nodeSet,reused:this.nodes,topID:e,length:t})}}class j{constructor(e,t,r){let n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:G
this.type=e,this.from=t,this.to=r,this.children=n}writeTo(e,t){let r=e.content.length
e.writeElements(this.children,t),e.content.push(this.type,this.from+t,this.to+t,e.content.length+4-r)}toTree(e){return new D(e).writeElements(this.children,-this.from).finish(this.type,this.to-this.from)}}class H{constructor(e,t){this.tree=e,this.from=t}get to(){return this.from+this.tree.length}get type(){return this.tree.type.id}get children(){return G}writeTo(e,t){e.nodes.push(this.tree),e.content.push(e.nodes.length-1,this.from+t,this.to+t,-1)}toTree(){return this.tree}}function F(e,t,r,n){return new j(e,t,r,n)}const K={resolve:"Emphasis",mark:"EmphasisMark"},J={resolve:"Emphasis",mark:"EmphasisMark"},ee={},te={}
class re{constructor(e,t,r,n){this.type=e,this.from=t,this.to=r,this.side=n}}let ne=/[!"#$%&'()*+,\-.\/:;<=>?@\[\\\]^_`{|}~\xA1\u2010-\u2027]/
try{ne=new RegExp("[\\p{S}|\\p{P}]","u")}catch(e){}const ae={Escape(e,t,r){if(92!=t||r==e.end-1)return-1
let a=e.char(r+1)
for(let l=0;l<32;l++)if("!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~".charCodeAt(l)==a)return e.append(F(n.Escape,r,r+2))
return-1},Entity(e,t,r){if(38!=t)return-1
let a=/^(?:#\d+|#x[a-f\d]+|\w+);/i.exec(e.slice(r+1,r+31))
return a?e.append(F(n.Entity,r,r+1+a[0].length)):-1},InlineCode(e,t,r){if(96!=t||r&&96==e.char(r-1))return-1
let a=r+1
for(;a<e.end&&96==e.char(a);)a++
let l=a-r,s=0
for(;a<e.end;a++)if(96==e.char(a)){if(s++,s==l&&96!=e.char(a+1))return e.append(F(n.InlineCode,r,a+1,[F(n.CodeMark,r,r+l),F(n.CodeMark,a+1-l,a+1)]))}else s=0
return-1},HTMLTag(e,t,r){if(60!=t||r==e.end-1)return-1
let a=e.slice(r+1,e.end),l=/^(?:[a-z][-\w+.]+:[^\s>]+|[a-z\d.!#$%&'*+/=?^_`{|}~-]+@[a-z\d](?:[a-z\d-]{0,61}[a-z\d])?(?:\.[a-z\d](?:[a-z\d-]{0,61}[a-z\d])?)*)>/i.exec(a)
if(l)return e.append(F(n.Autolink,r,r+1+l[0].length,[F(n.LinkMark,r,r+1),F(n.URL,r+1,r+l[0].length),F(n.LinkMark,r+l[0].length,r+1+l[0].length)]))
let s=/^!--[^>](?:-[^-]|[^-])*?-->/i.exec(a)
if(s)return e.append(F(n.Comment,r,r+1+s[0].length))
let o=/^\?[^]*?\?>/.exec(a)
if(o)return e.append(F(n.ProcessingInstruction,r,r+1+o[0].length))
let i=/^(?:![A-Z][^]*?>|!\[CDATA\[[^]*?\]\]>|\/\s*[a-zA-Z][\w-]*\s*>|\s*[a-zA-Z][\w-]*(\s+[a-zA-Z:_][\w-.:]*(?:\s*=\s*(?:[^\s"'=<>`]+|'[^']*'|"[^"]*"))?)*\s*(\/\s*)?>)/.exec(a)
return i?e.append(F(n.HTMLTag,r,r+1+i[0].length)):-1},Emphasis(e,t,r){if(95!=t&&42!=t)return-1
let n=r+1
for(;e.char(n)==t;)n++
let a=e.slice(r-1,r),l=e.slice(n,n+1),s=ne.test(a),o=ne.test(l),i=/\s|^$/.test(a),O=/\s|^$/.test(l),u=!O&&(!o||i||s),c=!i&&(!s||O||o),d=u&&(42==t||!c||s),p=c&&(42==t||!u||o)
return e.append(new re(95==t?K:J,r,n,(d?1:0)|(p?2:0)))},HardBreak(e,t,r){if(92==t&&10==e.char(r+1))return e.append(F(n.HardBreak,r,r+2))
if(32==t){let t=r+1
for(;32==e.char(t);)t++
if(10==e.char(t)&&t>=r+2)return e.append(F(n.HardBreak,r,t+1))}return-1},Link:(e,t,r)=>91==t?e.append(new re(ee,r,r+1,1)):-1,Image:(e,t,r)=>33==t&&91==e.char(r+1)?e.append(new re(te,r,r+2,1)):-1,LinkEnd(e,t,r){if(93!=t)return-1
for(let a=e.parts.length-1;a>=0;a--){let t=e.parts[a]
if(t instanceof re&&(t.type==ee||t.type==te)){if(!t.side||e.skipSpace(t.to)==r&&!/[(\[]/.test(e.slice(r+1,r+2)))return e.parts[a]=null,-1
let l=e.takeContent(a),s=e.parts[a]=le(e,l,t.type==ee?n.Link:n.Image,t.from,r+1)
if(t.type==ee)for(let t=0;t<a;t++){let r=e.parts[t]
r instanceof re&&r.type==ee&&(r.side=0)}return s.to}}return-1}}
function le(e,t,r,a,l){let{text:s}=e,o=e.char(l),i=l
if(t.unshift(F(n.LinkMark,a,a+(r==n.Image?2:1))),t.push(F(n.LinkMark,l-1,l)),40==o){let r,a=e.skipSpace(l+1),o=se(s,a-e.offset,e.offset)
o&&(a=e.skipSpace(o.to),a!=o.to&&(r=oe(s,a-e.offset,e.offset),r&&(a=e.skipSpace(r.to)))),41==e.char(a)&&(t.push(F(n.LinkMark,l,l+1)),i=a+1,o&&t.push(o),r&&t.push(r),t.push(F(n.LinkMark,a,i)))}else if(91==o){let r=ie(s,l-e.offset,e.offset,!1)
r&&(t.push(r),i=r.to)}return F(r,a,i,t)}function se(e,t,r){if(60==e.charCodeAt(t)){for(let a=t+1;a<e.length;a++){let l=e.charCodeAt(a)
if(62==l)return F(n.URL,t+r,a+1+r)
if(60==l||10==l)return!1}return null}{let a=0,l=t
for(let t=!1;l<e.length;l++){let r=e.charCodeAt(l)
if(f(r))break
if(t)t=!1
else if(40==r)a++
else if(41==r){if(!a)break
a--}else 92==r&&(t=!0)}return l>t?F(n.URL,t+r,l+r):l==e.length&&null}}function oe(e,t,r){let a=e.charCodeAt(t)
if(39!=a&&34!=a&&40!=a)return!1
let l=40==a?41:a
for(let s=t+1,o=!1;s<e.length;s++){let a=e.charCodeAt(s)
if(o)o=!1
else{if(a==l)return F(n.LinkTitle,t+r,s+1+r)
92==a&&(o=!0)}}return null}function ie(e,t,r,a){for(let l=!1,s=t+1,o=Math.min(e.length,s+999);s<o;s++){let o=e.charCodeAt(s)
if(l)l=!1
else{if(93==o)return!a&&F(n.LinkLabel,t+r,s+1+r)
if(a&&!f(o)&&(a=!1),91==o)return!1
92==o&&(l=!0)}}return null}class Oe{constructor(e,t,r){this.parser=e,this.text=t,this.offset=r,this.parts=[]}char(e){return e>=this.end?-1:this.text.charCodeAt(e-this.offset)}get end(){return this.offset+this.text.length}slice(e,t){return this.text.slice(e-this.offset,t-this.offset)}append(e){return this.parts.push(e),e.to}addDelimiter(e,t,r,n,a){return this.append(new re(e,t,r,(n?1:0)|(a?2:0)))}get hasOpenLink(){for(let e=this.parts.length-1;e>=0;e--){let t=this.parts[e]
if(t instanceof re&&(t.type==ee||t.type==te))return!0}return!1}addElement(e){return this.append(e)}resolveMarkers(e){for(let r=e;r<this.parts.length;r++){let t=this.parts[r]
if(!(t instanceof re&&t.type.resolve&&2&t.side))continue
let n,a=t.type==K||t.type==J,l=t.to-t.from,s=r-1
for(;s>=e;s--){let e=this.parts[s]
if(e instanceof re&&1&e.side&&e.type==t.type&&!(a&&(1&t.side||2&e.side)&&(e.to-e.from+l)%3==0&&((e.to-e.from)%3||l%3))){n=e
break}}if(!n)continue
let o=t.type.resolve,i=[],O=n.from,u=t.to
if(a){let e=Math.min(2,n.to-n.from,l)
O=n.to-e,u=t.from+e,o=1==e?"Emphasis":"StrongEmphasis"}n.type.mark&&i.push(this.elt(n.type.mark,O,n.to))
for(let e=s+1;e<r;e++)this.parts[e]instanceof j&&i.push(this.parts[e]),this.parts[e]=null
t.type.mark&&i.push(this.elt(t.type.mark,t.from,u))
let c=this.elt(o,O,u,i)
this.parts[s]=a&&n.from!=O?new re(n.type,n.from,O,n.side):null,(this.parts[r]=a&&t.to!=u?new re(t.type,u,t.to,t.side):null)?this.parts.splice(r,0,c):this.parts[r]=c}let t=[]
for(let r=e;r<this.parts.length;r++){let e=this.parts[r]
e instanceof j&&t.push(e)}return t}findOpeningDelimiter(e){for(let t=this.parts.length-1;t>=0;t--){let r=this.parts[t]
if(r instanceof re&&r.type==e)return t}return null}takeContent(e){let t=this.resolveMarkers(e)
return this.parts.length=e,t}skipSpace(e){return m(this.text,e-this.offset)+this.offset}elt(e,t,r,n){return"string"==typeof e?F(this.parser.getNodeType(e),t,r,n):new H(e,t)}}function ue(e,t){if(!t.length)return e
if(!e.length)return t
let r=e.slice(),n=0
for(let a of t){for(;n<r.length&&r[n].to<a.to;)n++
if(n<r.length&&r[n].from<a.from){let e=r[n]
e instanceof j&&(r[n]=new j(e.type,e.from,e.to,ue(e.children,[a])))}else r.splice(n++,0,a)}return r}const ce=[n.CodeBlock,n.ListItem,n.OrderedList,n.BulletList]
class de{constructor(e,t){this.fragments=e,this.input=t,this.i=0,this.fragment=null,this.fragmentEnd=-1,this.cursor=null,e.length&&(this.fragment=e[this.i++])}nextFragment(){this.fragment=this.i<this.fragments.length?this.fragments[this.i++]:null,this.cursor=null,this.fragmentEnd=-1}moveTo(e,t){for(;this.fragment&&this.fragment.to<=e;)this.nextFragment()
if(!this.fragment||this.fragment.from>(e?e-1:0))return!1
if(this.fragmentEnd<0){let e=this.fragment.to
for(;e>0&&"\n"!=this.input.read(e-1,e);)e--
this.fragmentEnd=e?e-1:0}let r=this.cursor
r||(r=this.cursor=this.fragment.tree.cursor(),r.firstChild())
let n=e+this.fragment.offset
for(;r.to<=n;)if(!r.parent())return!1
for(;;){if(r.from>=n)return this.fragment.from<=t
if(!r.childAfter(n))return!1}}matches(e){let t=this.cursor.tree
return t&&t.prop(i.uY.contextHash)==e}takeNodes(e){let t=this.cursor,r=this.fragment.offset,a=this.fragmentEnd-(this.fragment.openEnd?1:0),l=e.absoluteLineStart,s=l,o=e.block.children.length,O=s,u=o
for(;;){if(t.to-r>a){if(t.type.isAnonymous&&t.firstChild())continue
break}let l=pe(t.from-r,e.ranges)
if(t.to-r<=e.ranges[e.rangeI].to)e.addNode(t.tree,l)
else{let r=new i.PH(e.parser.nodeSet.types[n.Paragraph],[],[],0,e.block.hashProp)
e.reusePlaceholders.set(r,t.tree),e.addNode(r,l)}if(t.type.is("Block")&&(ce.indexOf(t.type.id)<0?(s=t.to-r,o=e.block.children.length):(s=O,o=u,O=t.to-r,u=e.block.children.length)),!t.nextSibling())break}for(;e.block.children.length>o;)e.block.children.pop(),e.block.positions.pop()
return s-l}}function pe(e,t){let r=e
for(let n=1;n<t.length;n++){let a=t[n-1].to,l=t[n].from
a<e&&(r-=l-a)}return r}const he=(0,O.pn)({"Blockquote/...":O._A.quote,HorizontalRule:O._A.contentSeparator,"ATXHeading1/... SetextHeading1/...":O._A.heading1,"ATXHeading2/... SetextHeading2/...":O._A.heading2,"ATXHeading3/...":O._A.heading3,"ATXHeading4/...":O._A.heading4,"ATXHeading5/...":O._A.heading5,"ATXHeading6/...":O._A.heading6,"Comment CommentBlock":O._A.comment,Escape:O._A.escape,Entity:O._A.character,"Emphasis/...":O._A.emphasis,"StrongEmphasis/...":O._A.strong,"Link/... Image/...":O._A.link,"OrderedList/... BulletList/...":O._A.list,"BlockQuote/...":O._A.quote,"InlineCode CodeText":O._A.monospace,"URL Autolink":O._A.url,"HeaderMark HardBreak QuoteMark ListMark LinkMark EmphasisMark CodeMark":O._A.processingInstruction,"CodeInfo LinkLabel":O._A.labelName,LinkTitle:O._A.string,Paragraph:O._A.content}),fe=new Z(new i.fI(N).extend(he),Object.keys(V).map((e=>V[e])),Object.keys(V).map((e=>q[e])),Object.keys(V),z,h,Object.keys(ae).map((e=>ae[e])),Object.keys(ae),[])
function me(e,t,r){let n=[]
for(let a=e.firstChild,l=t;;a=a.nextSibling){let e=a?a.from:r
if(e>l&&n.push({from:l,to:e}),!a)break
l=a.to}return n}const ge={resolve:"Strikethrough",mark:"StrikethroughMark"},Se={defineNodes:[{name:"Strikethrough",style:{"Strikethrough/...":O._A.strikethrough}},{name:"StrikethroughMark",style:O._A.processingInstruction}],parseInline:[{name:"Strikethrough",parse(e,t,r){if(126!=t||126!=e.char(r+1)||126==e.char(r+2))return-1
let n=e.slice(r-1,r),a=e.slice(r+2,r+3),l=/\s|^$/.test(n),s=/\s|^$/.test(a),o=ne.test(n),i=ne.test(a)
return e.addDelimiter(ge,r,r+2,!s&&(!i||l||o),!l&&(!o||s||i))},after:"Emphasis"}]}
function be(e,t){let r=arguments.length>3?arguments[3]:void 0,n=arguments.length>4&&void 0!==arguments[4]?arguments[4]:0,a=0,l=!0,s=-1,o=-1,i=!1,O=()=>{r.push(e.elt("TableCell",n+s,n+o,e.parser.parseInline(t.slice(s,o),n+s)))}
for(let u=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;u<t.length;u++){let c=t.charCodeAt(u)
124!=c||i?(i||32!=c&&9!=c)&&(s<0&&(s=u),o=u+1):((!l||s>-1)&&a++,l=!1,r&&(s>-1&&O(),r.push(e.elt("TableDelimiter",u+n,u+n+1))),s=o=-1),i=!i&&92==c}return s>-1&&(a++,r&&O()),a}function ke(e,t){for(let r=t;r<e.length;r++){let t=e.charCodeAt(r)
if(124==t)return!0
92==t&&r++}return!1}const xe=/^\|?(\s*:?-+:?\s*\|)+(\s*:?-+:?\s*)?$/
class ye{constructor(){this.rows=null}nextLine(e,t,r){if(null==this.rows){let n
if(this.rows=!1,(45==t.next||58==t.next||124==t.next)&&xe.test(n=t.text.slice(t.pos))){let a=[]
be(e,r.content,0,a,r.start)==be(e,n,t.pos)&&(this.rows=[e.elt("TableHeader",r.start,r.start+r.content.length,a),e.elt("TableDelimiter",e.lineStart+t.pos,e.lineStart+t.text.length)])}}else if(this.rows){let r=[]
be(e,t.text,t.pos,r,e.lineStart),this.rows.push(e.elt("TableRow",e.lineStart+t.pos,e.lineStart+t.text.length,r))}return!1}finish(e,t){return!!this.rows&&(e.addLeafElement(t,e.elt("Table",t.start,t.start+t.content.length,this.rows)),!0)}}const Qe={defineNodes:[{name:"Table",block:!0},{name:"TableHeader",style:{"TableHeader/...":O._A.heading}},"TableRow",{name:"TableCell",style:O._A.content},{name:"TableDelimiter",style:O._A.processingInstruction}],parseBlock:[{name:"Table",leaf:(e,t)=>ke(t.content,0)?new ye:null,endLeaf(e,t,r){if(r.parsers.some((e=>e instanceof ye))||!ke(t.text,t.basePos))return!1
let n=e.peekLine()
return xe.test(n)&&be(e,t.text,t.basePos)==be(e,n,t.basePos)},before:"SetextHeading"}]}
class Pe{nextLine(){return!1}finish(e,t){return e.addLeafElement(t,e.elt("Task",t.start,t.start+t.content.length,[e.elt("TaskMarker",t.start,t.start+3),...e.parser.parseInline(t.content.slice(3),t.start+3)])),!0}}const we={defineNodes:[{name:"Task",block:!0,style:O._A.list},{name:"TaskMarker",style:O._A.atom}],parseBlock:[{name:"TaskList",leaf:(e,t)=>/^\[[ xX]\][ \t]/.test(t.content)&&"ListItem"==e.parentType().name?new Pe:null,after:"SetextHeading"}]},ve=/(www\.)|(https?:\/\/)|([\w.+-]{1,100}@)|(mailto:|xmpp:)/gy,Te=/[\w-]+(\.[\w-]+)+(\/[^\s<]*)?/gy,$e=/[\w-]+\.[\w-]+($|\/)/,Xe=/[\w.+-]+@[\w-]+(\.[\w.-]+)+/gy,_e=/\/[a-zA-Z\d@.]+/gy
function Ae(e,t,r,n){let a=0
for(let l=t;l<r;l++)e[l]==n&&a++
return a}function Ce(e,t){Xe.lastIndex=t
let r=Xe.exec(e)
if(!r)return-1
let n=r[0][r[0].length-1]
return"_"==n||"-"==n?-1:t+r[0].length-("."==n?1:0)}const Ve=[Qe,we,Se,{parseInline:[{name:"Autolink",parse(e,t,r){let n=r-e.offset
if(n&&/\w/.test(e.text[n-1]))return-1
ve.lastIndex=n
let a=ve.exec(e.text),l=-1
return a?(a[1]||a[2]?(l=function(e,t){Te.lastIndex=t
let r=Te.exec(e)
if(!r||$e.exec(r[0])[0].indexOf("_")>-1)return-1
let n=t+r[0].length
for(;;){let r,a=e[n-1]
if(/[?!.,:*_~]/.test(a)||")"==a&&Ae(e,t,n,")")>Ae(e,t,n,"("))n--
else{if(";"!=a||!(r=/&(?:#\d+|#x[a-f\d]+|\w+);$/.exec(e.slice(t,n))))break
n=t+r.index}}return n}(e.text,n+a[0].length),l>-1&&e.hasOpenLink&&(l=n+/([^\[\]]|\[[^\]]*\])*/.exec(e.text.slice(n,l))[0].length)):a[3]?l=Ce(e.text,n):(l=Ce(e.text,n+a[0].length),l>-1&&"xmpp:"==a[0]&&(_e.lastIndex=l,a=_e.exec(e.text),a&&(l=a.index+a[0].length))),l<0?-1:(e.addElement(e.elt("URL",r,l+e.offset)),l+e.offset)):-1}}]}]
function Le(e,t,r){return(n,a,l)=>{if(a!=e||n.char(l+1)==e)return-1
let s=[n.elt(r,l,l+1)]
for(let o=l+1;o<n.end;o++){let a=n.char(o)
if(a==e)return n.addElement(n.elt(t,l,o+1,s.concat(n.elt(r,o,o+1))))
if(92==a&&s.push(n.elt("Escape",o,2+o++)),f(a))break}return-1}}const Ee={defineNodes:[{name:"Superscript",style:O._A.special(O._A.content)},{name:"SuperscriptMark",style:O._A.processingInstruction}],parseInline:[{name:"Superscript",parse:Le(94,"Superscript","SuperscriptMark")}]},Re={defineNodes:[{name:"Subscript",style:O._A.special(O._A.content)},{name:"SubscriptMark",style:O._A.processingInstruction}],parseInline:[{name:"Subscript",parse:Le(126,"Subscript","SubscriptMark")}]},qe={defineNodes:[{name:"Emoji",style:O._A.character}],parseInline:[{name:"Emoji",parse(e,t,r){let n
return 58==t&&(n=/^[a-zA-Z_0-9]+:/.exec(e.slice(r+1,e.end)))?e.addElement(e.elt("Emoji",r,r+1+n[0].length)):-1}}]}
var ze=r(28958)
const Be=20,We=22,Ye=23,Ze=24,Ie=26,Me=27,Ue=28,Ne=31,Ge=34,De=37,je={area:!0,base:!0,br:!0,col:!0,command:!0,embed:!0,frame:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0,menuitem:!0},He={dd:!0,li:!0,optgroup:!0,option:!0,p:!0,rp:!0,rt:!0,tbody:!0,td:!0,tfoot:!0,th:!0,tr:!0},Fe={dd:{dd:!0,dt:!0},dt:{dd:!0,dt:!0},li:{li:!0},option:{option:!0,optgroup:!0},optgroup:{optgroup:!0},p:{address:!0,article:!0,aside:!0,blockquote:!0,dir:!0,div:!0,dl:!0,fieldset:!0,footer:!0,form:!0,h1:!0,h2:!0,h3:!0,h4:!0,h5:!0,h6:!0,header:!0,hgroup:!0,hr:!0,menu:!0,nav:!0,ol:!0,p:!0,pre:!0,section:!0,table:!0,ul:!0},rp:{rp:!0,rt:!0},rt:{rp:!0,rt:!0},tbody:{tbody:!0,tfoot:!0},td:{td:!0,th:!0},tfoot:{tbody:!0},th:{td:!0,th:!0},thead:{tbody:!0,tfoot:!0},tr:{tr:!0}}
function Ke(e){return 9==e||10==e||13==e||32==e}let Je=null,et=null,tt=0
function rt(e,t){let r=e.pos+t
if(tt==r&&et==e)return Je
let n=e.peek(t)
for(;Ke(n);)n=e.peek(++t)
let a=""
for(;45==(l=n)||46==l||58==l||l>=65&&l<=90||95==l||l>=97&&l<=122||l>=161;)a+=String.fromCharCode(n),n=e.peek(++t)
var l
return et=e,tt=r,Je=a?a.toLowerCase():n==nt||n==at?void 0:null}const nt=63,at=33
function lt(e,t){this.name=e,this.parent=t}const st=[6,10,7,8,9],ot=new ze.Aj({start:null,shift:(e,t,r,n)=>st.indexOf(t)>-1?new lt(rt(n,1)||"",e):e,reduce:(e,t)=>t==Be&&e?e.parent:e,reuse(e,t,r,n){let a=t.type.id
return 6==a||36==a?new lt(rt(n,1)||"",e):e},strict:!1}),it=new ze.Lu(((e,t)=>{if(60!=e.next)return void(e.next<0&&t.context&&e.acceptToken(57))
e.advance()
let r=47==e.next
r&&e.advance()
let n=rt(e,0)
if(void 0===n)return
if(!n)return e.acceptToken(r?14:6)
let a=t.context?t.context.name:null
if(r){if(n==a)return e.acceptToken(11)
if(a&&He[a])return e.acceptToken(57,-2)
if(t.dialectEnabled(0))return e.acceptToken(12)
for(let e=t.context;e;e=e.parent)if(e.name==n)return
e.acceptToken(13)}else{if("script"==n)return e.acceptToken(7)
if("style"==n)return e.acceptToken(8)
if("textarea"==n)return e.acceptToken(9)
if(je.hasOwnProperty(n))return e.acceptToken(10)
a&&Fe[a]&&Fe[a][n]?e.acceptToken(57,-1):e.acceptToken(6)}}),{contextual:!0}),Ot=new ze.Lu((e=>{for(let t=0,r=0;;r++){if(e.next<0){r&&e.acceptToken(58)
break}if(45==e.next)t++
else{if(62==e.next&&t>=2){r>=3&&e.acceptToken(58,-2)
break}t=0}e.advance()}})),ut=new ze.Lu(((e,t)=>{if(47==e.next&&62==e.peek(1)){let r=t.dialectEnabled(1)||function(e){for(;e;e=e.parent)if("svg"==e.name||"math"==e.name)return!0
return!1}(t.context)
e.acceptToken(r?5:4,2)}else 62==e.next&&e.acceptToken(4,1)}))
function ct(e,t,r){let n=2+e.length
return new ze.Lu((a=>{for(let l=0,s=0,o=0;;o++){if(a.next<0){o&&a.acceptToken(t)
break}if(0==l&&60==a.next||1==l&&47==a.next||l>=2&&l<n&&a.next==e.charCodeAt(l-2))l++,s++
else if(2!=l&&l!=n||!Ke(a.next)){if(l==n&&62==a.next){o>s?a.acceptToken(t,-s):a.acceptToken(r,-(s-2))
break}if((10==a.next||13==a.next)&&o){a.acceptToken(t,1)
break}l=s=0}else s++
a.advance()}}))}const dt=ct("script",54,1),pt=ct("style",55,2),ht=ct("textarea",56,3),ft=(0,O.pn)({"Text RawText":O._A.content,"StartTag StartCloseTag SelfClosingEndTag EndTag":O._A.angleBracket,TagName:O._A.tagName,"MismatchedCloseTag/TagName":[O._A.tagName,O._A.invalid],AttributeName:O._A.attributeName,"AttributeValue UnquotedAttributeValue":O._A.attributeValue,Is:O._A.definitionOperator,"EntityReference CharacterReference":O._A.character,Comment:O._A.blockComment,ProcessingInst:O._A.processingInstruction,DoctypeDecl:O._A.documentMeta}),mt=ze.U1.deserialize({version:14,states:",xOVO!rOOO!WQ#tO'#CqO!]Q#tO'#CzO!bQ#tO'#C}O!gQ#tO'#DQO!lQ#tO'#DSO!qOaO'#CpO!|ObO'#CpO#XOdO'#CpO$eO!rO'#CpOOO`'#Cp'#CpO$lO$fO'#DTO$tQ#tO'#DVO$yQ#tO'#DWOOO`'#Dk'#DkOOO`'#DY'#DYQVO!rOOO%OQ&rO,59]O%ZQ&rO,59fO%fQ&rO,59iO%qQ&rO,59lO%|Q&rO,59nOOOa'#D^'#D^O&XOaO'#CxO&dOaO,59[OOOb'#D_'#D_O&lObO'#C{O&wObO,59[OOOd'#D`'#D`O'POdO'#DOO'[OdO,59[OOO`'#Da'#DaO'dO!rO,59[O'kQ#tO'#DROOO`,59[,59[OOOp'#Db'#DbO'pO$fO,59oOOO`,59o,59oO'xQ#|O,59qO'}Q#|O,59rOOO`-E7W-E7WO(SQ&rO'#CsOOQW'#DZ'#DZO(bQ&rO1G.wOOOa1G.w1G.wOOO`1G/Y1G/YO(mQ&rO1G/QOOOb1G/Q1G/QO(xQ&rO1G/TOOOd1G/T1G/TO)TQ&rO1G/WOOO`1G/W1G/WO)`Q&rO1G/YOOOa-E7[-E7[O)kQ#tO'#CyOOO`1G.v1G.vOOOb-E7]-E7]O)pQ#tO'#C|OOOd-E7^-E7^O)uQ#tO'#DPOOO`-E7_-E7_O)zQ#|O,59mOOOp-E7`-E7`OOO`1G/Z1G/ZOOO`1G/]1G/]OOO`1G/^1G/^O*PQ,UO,59_OOQW-E7X-E7XOOOa7+$c7+$cOOO`7+$t7+$tOOOb7+$l7+$lOOOd7+$o7+$oOOO`7+$r7+$rO*[Q#|O,59eO*aQ#|O,59hO*fQ#|O,59kOOO`1G/X1G/XO*kO7[O'#CvO*|OMhO'#CvOOQW1G.y1G.yOOO`1G/P1G/POOO`1G/S1G/SOOO`1G/V1G/VOOOO'#D['#D[O+_O7[O,59bOOQW,59b,59bOOOO'#D]'#D]O+pOMhO,59bOOOO-E7Y-E7YOOQW1G.|1G.|OOOO-E7Z-E7Z",stateData:",]~O!^OS~OUSOVPOWQOXROYTO[]O][O^^O`^Oa^Ob^Oc^Ox^O{_O!dZO~OfaO~OfbO~OfcO~OfdO~OfeO~O!WfOPlP!ZlP~O!XiOQoP!ZoP~O!YlORrP!ZrP~OUSOVPOWQOXROYTOZqO[]O][O^^O`^Oa^Ob^Oc^Ox^O!dZO~O!ZrO~P#dO![sO!euO~OfvO~OfwO~OS|OT}OhyO~OS!POT}OhyO~OS!ROT}OhyO~OS!TOT}OhyO~OS}OT}OhyO~O!WfOPlX!ZlX~OP!WO!Z!XO~O!XiOQoX!ZoX~OQ!ZO!Z!XO~O!YlORrX!ZrX~OR!]O!Z!XO~O!Z!XO~P#dOf!_O~O![sO!e!aO~OS!bO~OS!cO~Oi!dOSgXTgXhgX~OS!fOT!gOhyO~OS!hOT!gOhyO~OS!iOT!gOhyO~OS!jOT!gOhyO~OS!gOT!gOhyO~Of!kO~Of!lO~Of!mO~OS!nO~Ok!qO!`!oO!b!pO~OS!rO~OS!sO~OS!tO~Oa!uOb!uOc!uO!`!wO!a!uO~Oa!xOb!xOc!xO!b!wO!c!xO~Oa!uOb!uOc!uO!`!{O!a!uO~Oa!xOb!xOc!xO!b!{O!c!xO~OT~bac!dx{!d~",goto:"%p!`PPPPPPPPPPPPPPPPPPPP!a!gP!mPP!yP!|#P#S#Y#]#`#f#i#l#r#x!aP!a!aP$O$U$l$r$x%O%U%[%bPPPPPPPP%hX^OX`pXUOX`pezabcde{!O!Q!S!UR!q!dRhUR!XhXVOX`pRkVR!XkXWOX`pRnWR!XnXXOX`pQrXR!XpXYOX`pQ`ORx`Q{aQ!ObQ!QcQ!SdQ!UeZ!e{!O!Q!S!UQ!v!oR!z!vQ!y!pR!|!yQgUR!VgQjVR!YjQmWR![mQpXR!^pQtZR!`tS_O`ToXp",nodeNames:"⚠ StartCloseTag StartCloseTag StartCloseTag EndTag SelfClosingEndTag StartTag StartTag StartTag StartTag StartTag StartCloseTag StartCloseTag StartCloseTag IncompleteCloseTag Document Text EntityReference CharacterReference InvalidEntity Element OpenTag TagName Attribute AttributeName Is AttributeValue UnquotedAttributeValue ScriptText CloseTag OpenTag StyleText CloseTag OpenTag TextareaText CloseTag OpenTag CloseTag SelfClosingTag Comment ProcessingInst MismatchedCloseTag CloseTag DoctypeDecl",maxTerm:67,context:ot,nodeProps:[["closedBy",-10,1,2,3,7,8,9,10,11,12,13,"EndTag",6,"EndTag SelfClosingEndTag",-4,21,30,33,36,"CloseTag"],["openedBy",4,"StartTag StartCloseTag",5,"StartTag",-4,29,32,35,37,"OpenTag"],["group",-9,14,17,18,19,20,39,40,41,42,"Entity",16,"Entity TextContent",-3,28,31,34,"TextContent Entity"],["isolate",-11,21,29,30,32,33,35,36,37,38,41,42,"ltr",-3,26,27,39,""]],propSources:[ft],skippedNodes:[0],repeatNodeCount:9,tokenData:"!<p!aR!YOX$qXY,QYZ,QZ[$q[]&X]^,Q^p$qpq,Qqr-_rs3_sv-_vw3}wxHYx}-_}!OH{!O!P-_!P!Q$q!Q![-_![!]Mz!]!^-_!^!_!$S!_!`!;x!`!a&X!a!c-_!c!}Mz!}#R-_#R#SMz#S#T1k#T#oMz#o#s-_#s$f$q$f%W-_%W%oMz%o%p-_%p&aMz&a&b-_&b1pMz1p4U-_4U4dMz4d4e-_4e$ISMz$IS$I`-_$I`$IbMz$Ib$Kh-_$Kh%#tMz%#t&/x-_&/x&EtMz&Et&FV-_&FV;'SMz;'S;:j!#|;:j;=`3X<%l?&r-_?&r?AhMz?Ah?BY$q?BY?MnMz?MnO$q!Z$|c`PkW!a`!cpOX$qXZ&XZ[$q[^&X^p$qpq&Xqr$qrs&}sv$qvw+Pwx(tx!^$q!^!_*V!_!a&X!a#S$q#S#T&X#T;'S$q;'S;=`+z<%lO$q!R&bX`P!a`!cpOr&Xrs&}sv&Xwx(tx!^&X!^!_*V!_;'S&X;'S;=`*y<%lO&Xq'UV`P!cpOv&}wx'kx!^&}!^!_(V!_;'S&};'S;=`(n<%lO&}P'pT`POv'kw!^'k!_;'S'k;'S;=`(P<%lO'kP(SP;=`<%l'kp([S!cpOv(Vx;'S(V;'S;=`(h<%lO(Vp(kP;=`<%l(Vq(qP;=`<%l&}a({W`P!a`Or(trs'ksv(tw!^(t!^!_)e!_;'S(t;'S;=`*P<%lO(t`)jT!a`Or)esv)ew;'S)e;'S;=`)y<%lO)e`)|P;=`<%l)ea*SP;=`<%l(t!Q*^V!a`!cpOr*Vrs(Vsv*Vwx)ex;'S*V;'S;=`*s<%lO*V!Q*vP;=`<%l*V!R*|P;=`<%l&XW+UYkWOX+PZ[+P^p+Pqr+Psw+Px!^+P!a#S+P#T;'S+P;'S;=`+t<%lO+PW+wP;=`<%l+P!Z+}P;=`<%l$q!a,]``P!a`!cp!^^OX&XXY,QYZ,QZ]&X]^,Q^p&Xpq,Qqr&Xrs&}sv&Xwx(tx!^&X!^!_*V!_;'S&X;'S;=`*y<%lO&X!_-ljhS`PkW!a`!cpOX$qXZ&XZ[$q[^&X^p$qpq&Xqr-_rs&}sv-_vw/^wx(tx!P-_!P!Q$q!Q!^-_!^!_*V!_!a&X!a#S-_#S#T1k#T#s-_#s$f$q$f;'S-_;'S;=`3X<%l?Ah-_?Ah?BY$q?BY?Mn-_?MnO$q[/ebhSkWOX+PZ[+P^p+Pqr/^sw/^x!P/^!P!Q+P!Q!^/^!a#S/^#S#T0m#T#s/^#s$f+P$f;'S/^;'S;=`1e<%l?Ah/^?Ah?BY+P?BY?Mn/^?MnO+PS0rXhSqr0msw0mx!P0m!Q!^0m!a#s0m$f;'S0m;'S;=`1_<%l?Ah0m?BY?Mn0mS1bP;=`<%l0m[1hP;=`<%l/^!V1vchS`P!a`!cpOq&Xqr1krs&}sv1kvw0mwx(tx!P1k!P!Q&X!Q!^1k!^!_*V!_!a&X!a#s1k#s$f&X$f;'S1k;'S;=`3R<%l?Ah1k?Ah?BY&X?BY?Mn1k?MnO&X!V3UP;=`<%l1k!_3[P;=`<%l-_!Z3hV!`h`P!cpOv&}wx'kx!^&}!^!_(V!_;'S&};'S;=`(n<%lO&}!_4WihSkWc!ROX5uXZ7SZ[5u[^7S^p5uqr8trs7Sst>]tw8twx7Sx!P8t!P!Q5u!Q!]8t!]!^/^!^!a7S!a#S8t#S#T;{#T#s8t#s$f5u$f;'S8t;'S;=`>V<%l?Ah8t?Ah?BY5u?BY?Mn8t?MnO5u!Z5zbkWOX5uXZ7SZ[5u[^7S^p5uqr5urs7Sst+Ptw5uwx7Sx!]5u!]!^7w!^!a7S!a#S5u#S#T7S#T;'S5u;'S;=`8n<%lO5u!R7VVOp7Sqs7St!]7S!]!^7l!^;'S7S;'S;=`7q<%lO7S!R7qOa!R!R7tP;=`<%l7S!Z8OYkWa!ROX+PZ[+P^p+Pqr+Psw+Px!^+P!a#S+P#T;'S+P;'S;=`+t<%lO+P!Z8qP;=`<%l5u!_8{ihSkWOX5uXZ7SZ[5u[^7S^p5uqr8trs7Sst/^tw8twx7Sx!P8t!P!Q5u!Q!]8t!]!^:j!^!a7S!a#S8t#S#T;{#T#s8t#s$f5u$f;'S8t;'S;=`>V<%l?Ah8t?Ah?BY5u?BY?Mn8t?MnO5u!_:sbhSkWa!ROX+PZ[+P^p+Pqr/^sw/^x!P/^!P!Q+P!Q!^/^!a#S/^#S#T0m#T#s/^#s$f+P$f;'S/^;'S;=`1e<%l?Ah/^?Ah?BY+P?BY?Mn/^?MnO+P!V<QchSOp7Sqr;{rs7Sst0mtw;{wx7Sx!P;{!P!Q7S!Q!];{!]!^=]!^!a7S!a#s;{#s$f7S$f;'S;{;'S;=`>P<%l?Ah;{?Ah?BY7S?BY?Mn;{?MnO7S!V=dXhSa!Rqr0msw0mx!P0m!Q!^0m!a#s0m$f;'S0m;'S;=`1_<%l?Ah0m?BY?Mn0m!V>SP;=`<%l;{!_>YP;=`<%l8t!_>dhhSkWOX@OXZAYZ[@O[^AY^p@OqrBwrsAYswBwwxAYx!PBw!P!Q@O!Q!]Bw!]!^/^!^!aAY!a#SBw#S#TE{#T#sBw#s$f@O$f;'SBw;'S;=`HS<%l?AhBw?Ah?BY@O?BY?MnBw?MnO@O!Z@TakWOX@OXZAYZ[@O[^AY^p@Oqr@OrsAYsw@OwxAYx!]@O!]!^Az!^!aAY!a#S@O#S#TAY#T;'S@O;'S;=`Bq<%lO@O!RA]UOpAYq!]AY!]!^Ao!^;'SAY;'S;=`At<%lOAY!RAtOb!R!RAwP;=`<%lAY!ZBRYkWb!ROX+PZ[+P^p+Pqr+Psw+Px!^+P!a#S+P#T;'S+P;'S;=`+t<%lO+P!ZBtP;=`<%l@O!_COhhSkWOX@OXZAYZ[@O[^AY^p@OqrBwrsAYswBwwxAYx!PBw!P!Q@O!Q!]Bw!]!^Dj!^!aAY!a#SBw#S#TE{#T#sBw#s$f@O$f;'SBw;'S;=`HS<%l?AhBw?Ah?BY@O?BY?MnBw?MnO@O!_DsbhSkWb!ROX+PZ[+P^p+Pqr/^sw/^x!P/^!P!Q+P!Q!^/^!a#S/^#S#T0m#T#s/^#s$f+P$f;'S/^;'S;=`1e<%l?Ah/^?Ah?BY+P?BY?Mn/^?MnO+P!VFQbhSOpAYqrE{rsAYswE{wxAYx!PE{!P!QAY!Q!]E{!]!^GY!^!aAY!a#sE{#s$fAY$f;'SE{;'S;=`G|<%l?AhE{?Ah?BYAY?BY?MnE{?MnOAY!VGaXhSb!Rqr0msw0mx!P0m!Q!^0m!a#s0m$f;'S0m;'S;=`1_<%l?Ah0m?BY?Mn0m!VHPP;=`<%lE{!_HVP;=`<%lBw!ZHcW!bx`P!a`Or(trs'ksv(tw!^(t!^!_)e!_;'S(t;'S;=`*P<%lO(t!aIYlhS`PkW!a`!cpOX$qXZ&XZ[$q[^&X^p$qpq&Xqr-_rs&}sv-_vw/^wx(tx}-_}!OKQ!O!P-_!P!Q$q!Q!^-_!^!_*V!_!a&X!a#S-_#S#T1k#T#s-_#s$f$q$f;'S-_;'S;=`3X<%l?Ah-_?Ah?BY$q?BY?Mn-_?MnO$q!aK_khS`PkW!a`!cpOX$qXZ&XZ[$q[^&X^p$qpq&Xqr-_rs&}sv-_vw/^wx(tx!P-_!P!Q$q!Q!^-_!^!_*V!_!`&X!`!aMS!a#S-_#S#T1k#T#s-_#s$f$q$f;'S-_;'S;=`3X<%l?Ah-_?Ah?BY$q?BY?Mn-_?MnO$q!TM_X`P!a`!cp!eQOr&Xrs&}sv&Xwx(tx!^&X!^!_*V!_;'S&X;'S;=`*y<%lO&X!aNZ!ZhSfQ`PkW!a`!cpOX$qXZ&XZ[$q[^&X^p$qpq&Xqr-_rs&}sv-_vw/^wx(tx}-_}!OMz!O!PMz!P!Q$q!Q![Mz![!]Mz!]!^-_!^!_*V!_!a&X!a!c-_!c!}Mz!}#R-_#R#SMz#S#T1k#T#oMz#o#s-_#s$f$q$f$}-_$}%OMz%O%W-_%W%oMz%o%p-_%p&aMz&a&b-_&b1pMz1p4UMz4U4dMz4d4e-_4e$ISMz$IS$I`-_$I`$IbMz$Ib$Je-_$Je$JgMz$Jg$Kh-_$Kh%#tMz%#t&/x-_&/x&EtMz&Et&FV-_&FV;'SMz;'S;:j!#|;:j;=`3X<%l?&r-_?&r?AhMz?Ah?BY$q?BY?MnMz?MnO$q!a!$PP;=`<%lMz!R!$ZY!a`!cpOq*Vqr!$yrs(Vsv*Vwx)ex!a*V!a!b!4t!b;'S*V;'S;=`*s<%lO*V!R!%Q]!a`!cpOr*Vrs(Vsv*Vwx)ex}*V}!O!%y!O!f*V!f!g!']!g#W*V#W#X!0`#X;'S*V;'S;=`*s<%lO*V!R!&QX!a`!cpOr*Vrs(Vsv*Vwx)ex}*V}!O!&m!O;'S*V;'S;=`*s<%lO*V!R!&vV!a`!cp!dPOr*Vrs(Vsv*Vwx)ex;'S*V;'S;=`*s<%lO*V!R!'dX!a`!cpOr*Vrs(Vsv*Vwx)ex!q*V!q!r!(P!r;'S*V;'S;=`*s<%lO*V!R!(WX!a`!cpOr*Vrs(Vsv*Vwx)ex!e*V!e!f!(s!f;'S*V;'S;=`*s<%lO*V!R!(zX!a`!cpOr*Vrs(Vsv*Vwx)ex!v*V!v!w!)g!w;'S*V;'S;=`*s<%lO*V!R!)nX!a`!cpOr*Vrs(Vsv*Vwx)ex!{*V!{!|!*Z!|;'S*V;'S;=`*s<%lO*V!R!*bX!a`!cpOr*Vrs(Vsv*Vwx)ex!r*V!r!s!*}!s;'S*V;'S;=`*s<%lO*V!R!+UX!a`!cpOr*Vrs(Vsv*Vwx)ex!g*V!g!h!+q!h;'S*V;'S;=`*s<%lO*V!R!+xY!a`!cpOr!+qrs!,hsv!+qvw!-Swx!.[x!`!+q!`!a!/j!a;'S!+q;'S;=`!0Y<%lO!+qq!,mV!cpOv!,hvx!-Sx!`!,h!`!a!-q!a;'S!,h;'S;=`!.U<%lO!,hP!-VTO!`!-S!`!a!-f!a;'S!-S;'S;=`!-k<%lO!-SP!-kO{PP!-nP;=`<%l!-Sq!-xS!cp{POv(Vx;'S(V;'S;=`(h<%lO(Vq!.XP;=`<%l!,ha!.aX!a`Or!.[rs!-Ssv!.[vw!-Sw!`!.[!`!a!.|!a;'S!.[;'S;=`!/d<%lO!.[a!/TT!a`{POr)esv)ew;'S)e;'S;=`)y<%lO)ea!/gP;=`<%l!.[!R!/sV!a`!cp{POr*Vrs(Vsv*Vwx)ex;'S*V;'S;=`*s<%lO*V!R!0]P;=`<%l!+q!R!0gX!a`!cpOr*Vrs(Vsv*Vwx)ex#c*V#c#d!1S#d;'S*V;'S;=`*s<%lO*V!R!1ZX!a`!cpOr*Vrs(Vsv*Vwx)ex#V*V#V#W!1v#W;'S*V;'S;=`*s<%lO*V!R!1}X!a`!cpOr*Vrs(Vsv*Vwx)ex#h*V#h#i!2j#i;'S*V;'S;=`*s<%lO*V!R!2qX!a`!cpOr*Vrs(Vsv*Vwx)ex#m*V#m#n!3^#n;'S*V;'S;=`*s<%lO*V!R!3eX!a`!cpOr*Vrs(Vsv*Vwx)ex#d*V#d#e!4Q#e;'S*V;'S;=`*s<%lO*V!R!4XX!a`!cpOr*Vrs(Vsv*Vwx)ex#X*V#X#Y!+q#Y;'S*V;'S;=`*s<%lO*V!R!4{Y!a`!cpOr!4trs!5ksv!4tvw!6Vwx!8]x!a!4t!a!b!:]!b;'S!4t;'S;=`!;r<%lO!4tq!5pV!cpOv!5kvx!6Vx!a!5k!a!b!7W!b;'S!5k;'S;=`!8V<%lO!5kP!6YTO!a!6V!a!b!6i!b;'S!6V;'S;=`!7Q<%lO!6VP!6lTO!`!6V!`!a!6{!a;'S!6V;'S;=`!7Q<%lO!6VP!7QOxPP!7TP;=`<%l!6Vq!7]V!cpOv!5kvx!6Vx!`!5k!`!a!7r!a;'S!5k;'S;=`!8V<%lO!5kq!7yS!cpxPOv(Vx;'S(V;'S;=`(h<%lO(Vq!8YP;=`<%l!5ka!8bX!a`Or!8]rs!6Vsv!8]vw!6Vw!a!8]!a!b!8}!b;'S!8];'S;=`!:V<%lO!8]a!9SX!a`Or!8]rs!6Vsv!8]vw!6Vw!`!8]!`!a!9o!a;'S!8];'S;=`!:V<%lO!8]a!9vT!a`xPOr)esv)ew;'S)e;'S;=`)y<%lO)ea!:YP;=`<%l!8]!R!:dY!a`!cpOr!4trs!5ksv!4tvw!6Vwx!8]x!`!4t!`!a!;S!a;'S!4t;'S;=`!;r<%lO!4t!R!;]V!a`!cpxPOr*Vrs(Vsv*Vwx)ex;'S*V;'S;=`*s<%lO*V!R!;uP;=`<%l!4t!V!<TXiS`P!a`!cpOr&Xrs&}sv&Xwx(tx!^&X!^!_*V!_;'S&X;'S;=`*y<%lO&X",tokenizers:[dt,pt,ht,ut,it,Ot,0,1,2,3,4,5],topRules:{Document:[0,15]},dialects:{noMatch:0,selfClosing:509},tokenPrec:511})
function gt(e,t){let r=Object.create(null)
for(let n of e.getChildren(Ye)){let e=n.getChild(Ze),a=n.getChild(Ie)||n.getChild(Me)
e&&(r[t.read(e.from,e.to)]=a?a.type.id==Ie?t.read(a.from+1,a.to-1):t.read(a.from,a.to):"")}return r}function St(e,t){let r=e.getChild(We)
return r?t.read(r.from,r.to):" "}function bt(e,t,r){let n
for(let a of r)if(!a.attrs||a.attrs(n||(n=gt(e.node.parent.firstChild,t))))return{parser:a.parser}
return null}function kt(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],r=[],n=[],a=[],l=[]
for(let o of e)("script"==o.tag?r:"style"==o.tag?n:"textarea"==o.tag?a:l).push(o)
let s=t.length?Object.create(null):null
for(let o of t)(s[o.name]||(s[o.name]=[])).push(o)
return(0,i.$g)(((e,t)=>{let o=e.type.id
if(o==Ue)return bt(e,t,r)
if(o==Ne)return bt(e,t,n)
if(o==Ge)return bt(e,t,a)
if(o==Be&&l.length){let r,n=e.node,a=n.firstChild,s=a&&St(a,t)
if(s)for(let e of l)if(e.tag==s&&(!e.attrs||e.attrs(r||(r=gt(a,t))))){let t=n.lastChild,r=t.type.id==De?t.from:n.to
if(r>a.to)return{parser:e.parser,overlay:[{from:a.to,to:r}]}}}if(s&&o==Ye){let r,n=e.node
if(r=n.firstChild){let e=s[t.read(r.from,r.to)]
if(e)for(let r of e){if(r.tagName&&r.tagName!=St(n.parent,t))continue
let e=n.lastChild
if(e.type.id==Ie){let t=e.from+1,n=e.lastChild,a=e.to-(n&&n.isError?0:1)
if(a>t)return{parser:r.parser,overlay:[{from:t,to:a}]}}else if(e.type.id==Me)return{parser:r.parser,overlay:[{from:e.from,to:e.to}]}}}}return null}))}const xt=[9,10,11,12,13,32,133,160,5760,8192,8193,8194,8195,8196,8197,8198,8199,8200,8201,8202,8232,8233,8239,8287,12288]
function yt(e){return e>=65&&e<=90||e>=97&&e<=122||e>=161}function Qt(e){return e>=48&&e<=57}const Pt=new ze.Lu(((e,t)=>{for(let r=!1,n=0,a=0;;a++){let{next:l}=e
if(yt(l)||45==l||95==l||r&&Qt(l))!r&&(45!=l||a>0)&&(r=!0),n===a&&45==l&&n++,e.advance()
else{if(92!=l||10==e.peek(1)){r&&e.acceptToken(2==n&&t.canShift(2)?2:t.canShift(110)?110:40==l?108:109)
break}e.advance(),e.next>-1&&e.advance(),r=!0}}})),wt=new ze.Lu((e=>{if(xt.includes(e.peek(-1))){let{next:t}=e;(yt(t)||95==t||35==t||46==t||42==t||91==t||58==t&&yt(e.peek(1))||45==t||38==t)&&e.acceptToken(107)}})),vt=new ze.Lu((e=>{if(!xt.includes(e.peek(-1))){let{next:t}=e
if(37==t&&(e.advance(),e.acceptToken(1)),yt(t)){do{e.advance()}while(yt(e.next)||Qt(e.next))
e.acceptToken(1)}}})),Tt=(0,O.pn)({"AtKeyword import charset namespace keyframes media supports":O._A.definitionKeyword,"from to selector":O._A.keyword,NamespaceName:O._A.namespace,KeyframeName:O._A.labelName,KeyframeRangeName:O._A.operatorKeyword,TagName:O._A.tagName,ClassName:O._A.className,PseudoClassName:O._A.constant(O._A.className),IdName:O._A.labelName,"FeatureName PropertyName":O._A.propertyName,AttributeName:O._A.attributeName,NumberLiteral:O._A.number,KeywordQuery:O._A.keyword,UnaryQueryOp:O._A.operatorKeyword,"CallTag ValueName":O._A.atom,VariableName:O._A.variableName,Callee:O._A.operatorKeyword,Unit:O._A.unit,"UniversalSelector NestingSelector":O._A.definitionOperator,"MatchOp CompareOp":O._A.compareOperator,"ChildOp SiblingOp, LogicOp":O._A.logicOperator,BinOp:O._A.arithmeticOperator,Important:O._A.modifier,Comment:O._A.blockComment,ColorLiteral:O._A.color,"ParenthesizedContent StringLiteral":O._A.string,":":O._A.punctuation,"PseudoOp #":O._A.derefOperator,"; ,":O._A.separator,"( )":O._A.paren,"[ ]":O._A.squareBracket,"{ }":O._A.brace}),$t={__proto__:null,lang:34,"nth-child":34,"nth-last-child":34,"nth-of-type":34,"nth-last-of-type":34,dir:34,"host-context":34,url:62,"url-prefix":62,domain:62,regexp:62},Xt={__proto__:null,"@import":120,"@media":154,"@charset":158,"@namespace":162,"@keyframes":168,"@supports":180},_t={__proto__:null,layer:124,not:144,only:144,selector:150},At=ze.U1.deserialize({version:14,states:">`QYQ[OOO#kQ[OOP#rOWOOOOQP'#Cd'#CdOOQP'#Cc'#CcO#wQ[O'#CfO$hQXO'#CaO$rQ[O'#CiO$}Q[O'#DUO%SQ[O'#DXO%XQ[O'#D[O%XQ[O'#D_OOQP'#Ev'#EvO%yQdO'#DhO&hQ[O'#DzO%yQdO'#D|O&yQ[O'#EOO'UQ[O'#ERO'^Q[O'#EXO'lQ[O'#EZOOQS'#Eu'#EuOOQS'#E^'#E^QYQ[OOO'sQXO'#CdO(hQWO'#DdO(mQWO'#E{O(xQ[O'#E{QOQWOOP)SO#tO'#C_POOO)C@e)C@eOOQP'#Ch'#ChOOQP,59Q,59QO#wQ[O,59QO)_Q[O,59TO$}Q[O,59pO%SQ[O,59sO%XQ[O,59vO%XQ[O,59xO%XQ[O,59yO%XQ[O'#EcO)jQWO,58{O)rQ[O'#DcOOQS,58{,58{OOQP'#Cl'#ClOOQO'#DS'#DSOOQP,59T,59TO)yQWO,59TO*OQWO,59TOOQP'#DW'#DWOOQP,59p,59pOOQO'#DY'#DYO*TQ`O,59sO*nQXO,59vO+UQXO,59yOOQS'#Cq'#CqO%yQdO'#CrO+lQvO'#CtO-hQtO,5:SOOQO'#Cy'#CyO*OQWO'#CxO-rQWO'#CzO-wQ[O'#DPOOQS'#Ex'#ExOOQO'#Dn'#DnO.eQdO'#DwO.uQWO'#E|O'^Q[O'#DuO/TQWO'#DxOOQO'#E}'#E}O)mQWO,5:fO/YQpO,5:hOOQS'#EQ'#EQO/bQWO,5:jO/gQ[O,5:jOOQO'#ET'#ETO/oQWO,5:mO/tQWO,5:sO/|QWO,5:uOOQS-E8[-E8[O0UQdO,5:OO0fQ[O'#EeO0sQWO,5;gO0sQWO,5;gPOOO'#E]'#E]P1OO#tO,58yPOOO,58y,58yOOQP1G.l1G.lOOQP1G.o1G.oO)yQWO1G.oO*OQWO1G.oOOQP1G/[1G/[O1ZQ`O1G/_O1cQXO1G/bO1yQXO1G/dO2aQXO1G/eO2wQXO,5:}OOQO-E8a-E8aOOQS1G.g1G.gO3RQWO,59}O3WQ[O'#DTO3_QdO'#CpOOQP1G/_1G/_O%yQdO1G/_O3fQpO,59^OOQS,59`,59`O%yQdO,59bO3nQ[O'#DkO4PQWO1G/nO-VQ[O1G/nOOQS,59d,59dO4UQ!bO,59fOOQS'#DQ'#DQOOQS'#E`'#E`O4aQ[O,59kOOQS,59k,59kO4iQpO'#DnO4wQpO,5:ZO5PQWO,5:cOOQO'#FO'#FOO4zQpO,5:_O'^Q[O,5:]O5XQ[O'#EgO5pQWO,5;hO5{QWO,5:aO%XQ[O,5:dOOQS1G0Q1G0QOOQS1G0S1G0SOOQS1G0U1G0UO6^QWO1G0UO6cQdO'#EUOOQS1G0X1G0XOOQS1G0_1G0_OOQS1G0a1G0aO6nQtO1G/jOOQO1G/j1G/jOOQO,5;P,5;PO7UQ[O,5;POOQO-E8c-E8cO7cQWO1G1RPOOO-E8Z-E8ZPOOO1G.e1G.eOOQP7+$Z7+$ZOOQP7+$y7+$yO%yQdO7+$yOOQS1G/i1G/iO7nQXO'#EzO7xQWO,59oO7}QtO'#E_O8uQdO'#EwO9PQWO,59[O9UQpO7+$yOOQS1G.x1G.xOOQS1G.|1G.|O9^Q[O,5:VOOQS7+%Y7+%YO9cQWO7+%YOOQS1G/Q1G/QO9hQWO1G/QOOQS-E8^-E8^OOQS1G/V1G/VO%yQdO1G/uO9mQdO1G/yOOQO1G/}1G/}OOQO1G/w1G/wO9tQWO,5;ROOQO-E8e-E8eO:SQXO1G0OOOQS7+%p7+%pO:ZQYO'#CtOOQO'#EW'#EWO:iQ`O'#EVOOQO'#EV'#EVO:tQWO'#EhO:|QdO,5:pOOQS,5:p,5:pO;XQtO'#EdO%yQdO'#EdO<YQdO7+%UOOQO7+%U7+%UOOQO1G0k1G0kO<mQpO<<HeO<uQ[O'#EbO=PQWO,5;fOOQP1G/Z1G/ZOOQS-E8]-E8]O=XQdO'#EaO=cQWO,5;cOOQT1G.v1G.vOOQP<<He<<HeOOQO'#Dm'#DmO=kQWO1G/qOOQS<<Ht<<HtOOQS7+$l7+$lO=sQdO7+%aOOQO'#Dp'#DpO=zQpO7+%eOOQO7+%j7+%jOOQO,5:q,5:qO6fQdO'#EiO:tQWO,5;SOOQS,5;S,5;SOOQS-E8f-E8fOOQS1G0[1G0[O>SQtO,5;OOOQS-E8b-E8bOOQO<<Hp<<HpOOQPAN>PAN>PO?TQXO,5:|OOQO-E8`-E8`O?_QdO,5:{OOQO-E8_-E8_O9^Q[O'#EfO?iQWO7+%]OOQS7+%]7+%]OOQO<<H{<<H{OOQO<<IP<<IPO?qQdO<<IPOOQO,5;T,5;TOOQO-E8g-E8gOOQS1G0n1G0nOOQO,5;Q,5;QOOQO-E8d-E8dOOQS<<Hw<<HwO@YQWOAN>kOOQOG24VG24V",stateData:"@g~O#dOS#eQQ~OU[OX[OZTO^VO_VOrXOyWO!PYO!SZO!]cO!^]O!o^O!q_O!s`O!vaO!|bO#aRO~OQhOU[OX[OZTO^VO_VOrXOyWO!PYO!SZO!]cO!^]O!o^O!q_O!s`O!vaO!|bO#agO~O#^#oP~P!aO#elO~O#anO~OZpO^qO_qOrsOyrO!PtO!SvO#_uO~OuwO!UyO~P#|Oa!PO#`|O#a{O~O#a!QO~O#a!SO~OU[OX[OZTO^VO_VOrXOyWO!PYO!SZO#aRO~OQ!`Oc!XOg!`Oi!`Oo!^Or!_O#`![O#a!WO#m!YO~Oc!bO!j!dO!m!eO#b!aO!U#pP~Oi!jOo!^O#a!iO~Oi!lO#a!lO~Oc!bO!j!dO!m!eO#b!aO~O!Z#pP~P&hOZWX^WX^!XX_WXrWXuWXyWX!PWX!SWX!UWX#_WX~O^!qO~O!Z!rO#^#oX!T#oX~O#^#oX!T#oX~P!aO#f!uO#g!uO#h!wO~Oa!{O#`|O#a{O~OuwO!UyO~O!T#oP~P!aOc#VO~Oc#WO~Oq#XO}#YO~OZpO^qO_qOrsOyrO~Ou!Oa!P!Oa!S!Oa!U!Oa#_!Oab!Oa~P*]Ou!Ra!P!Ra!S!Ra!U!Ra#_!Rab!Ra~P*]OP#[OchXkhX!ZhX!`hX!jhX!mhX#bhXbhX!hhXQhXghXihXohXrhXuhX!YhX#^hX#`hX#ahX#mhXqhX!ThX~Oc!bO!j!dO!m!eO#b!aO!Z#pP~Ok#]O!`#^O~P-VOc#bO~Oq#fO#a#cO~OQ#jOg#jOi#jOo!^O#`![O#m!YO~Oc!bO!j!dO!m!eO#b#gO~P.POu#mO!f#lO!U#pX!Z#pX~Oc#pO~Ok#]O!Z#rO~O!Z#sO~Oi#tOo!^O~O!U#uO~O!UyO!f#lO~O!UyO!Z#xO~O!Y#zO!Z!Wa#^!Wa!T!Wa~P%yO!Z#XX#^#XX!T#XX~P!aO!Z!rO#^#oa!T#oa~O#f!uO#g!uO#h$QO~Oq$SO}$TO~Ou!Oi!P!Oi!S!Oi!U!Oi#_!Oib!Oi~P*]Ou!Qi!P!Qi!S!Qi!U!Qi#_!Qib!Qi~P*]Ou!Ri!P!Ri!S!Ri!U!Ri#_!Rib!Ri~P*]Ou#Va!U#Va~P#|O!T$UO~Ob#nP~P%XOb#kP~P%yOb$]Ok#]O~Oc$_O!Z!_X!j!_X!m!_X#b!_X~O!Z$`O~Ob$bOi$cOp$cO~Oq$eO#a#cO~O^!dXb!bX!f!bX!h!dX~O^$fO!h$gO~Ob$hO!f#lO~Oc!bO!j!dO!m!eO#b!aOu#ZX!U#ZX!Z#ZX~Ou#mO!U#pa!Z#pa~O!f#lOu!ia!U!ia!Z!iab!ia~O!Z$mO~O!T$tO#a$oO#m$nO~Ok#]Ou$vO!Y$xO!Z!Wi#^!Wi!T!Wi~P%yO!Z#Xa#^#Xa!T#Xa~P!aO!Z!rO#^#oi!T#oi~Ou${Ob#nX~P#|Ob$}O~Ok#]OQ#RXb#RXc#RXg#RXi#RXo#RXr#RXu#RX#`#RX#a#RX#m#RX~Ou%POb#kX~P%yOb%RO~Ok#]Oq%SO~O#a%TO~O!Z%VO~Ob%WO~O#b%YO~P.PO!f#lOu#Za!U#Za!Z#Za~Ob%[O~P#|OP#[OuhX!UhXbhX~O#m$nOu!yX!U!yX~Ou%^O!UyO~O!T%bO#a$oO#m$nO~Ok#]OQ#WXc#WXg#WXi#WXo#WXr#WXu#WX!Y#WX!Z#WX#^#WX#`#WX#a#WX#m#WX!T#WX~Ou$vO!Y%eO!Z!Wq#^!Wq!T!Wq~P%yOk#]Oq%fO~Ob#UXu#UX~P%XOu${Ob#na~Ob#TXu#TX~P%yOu%POb#ka~OZ%kOb%mO~Ob%nO~P%yOb%oO!h%pO~Ok#]OQ#Wac#Wag#Wai#Wao#War#Wau#Wa!Y#Wa!Z#Wa#^#Wa#`#Wa#a#Wa#m#Wa!T#Wa~Ob#Uau#Ua~P#|Ob#Tau#Ta~P%yOZ%kOb%vO~OQ#jOg#jOi#jOo!^O#`![O#b%YO#m$nO~Ob%xO~O#dp#e#mk!S#m~",goto:"/l#sPPP#tP#wP$Q$dP$QP$v$QPP$|PPP%S%]%]P%oP%]P&`&w'^PPPP%]'{P(P(V$QP(]$Q(cP$QP$Q$QPPP(i)O)]PP#wPP)dP)g)m)m)x)mP)mP)mP)m)mP#wP#wP#wP*R#wP*U*X*[*c#wP#wP*h*n*}+]+c+i+o+u+{,V,],c,iPPPPPPPPPPP,o,x-n-qP.g.j.p.|/cRmQ_dOPfjy!r#|q[OPYZfjtuvwy!r#V#p#|${qSOPYZfjtuvwy!r#V#p#|${QoTR!xpQ}VR!yqQ!y!PQ#a!]R$R!{q!`]_!X!q#W#Y#]#y$T$Y$f$v$w%P%X%ip!`]_!X!q#W#Y#]#y$T$Y$f$v$w%P%X%iU#j!b$g%pU$q#u$s%^R%]$pp!`]_!X!q#W#Y#]#y$T$Y$f$v$w%P%X%iV#j!b$g%pw!]]_!X!b!q#W#Y#]#y$T$Y$f$g$v$w%P%X%i%pp!`]_!X!q#W#Y#]#y$T$Y$f$v$w%P%X%iQ!j`U#j!b$g%pR#t!kT#d!_#eQ!OVR!zqQ!y!OR$R!zQ!RWR!|rQ!TXR!}sQzUQ#TxQ#q!gQ#w!nQ#x!oQ%`$rR%s%_SiPyQ!tjQ#{!rR$y#|ZhPjy!r#|R#`!ZQ%U$_R%t%kc!f^bc!Z!b!d#`#l#mQ#h!bQ%Z$gR%w%pR!k`R!maR#v!mS$r#u$sR%q%^V$p#u$s%^Q!vlR$P!vQfOSjPyU!pfj#|R#|!rQ$Y#WU%O$Y%X%iQ%X$fR%i%PQ#e!_R$d#eQ%Q$YR%j%QQ$|$VR%h$|QxUR#SxQ$w#yR%d$wQ!siS#}!s$OR$O!tQ%l%UR%u%lQ#n!cR$k#nQ$s#uR%a$sQ%_$rR%r%__eOPfjy!r#|^UOPfjy!r#|Q!UYQ!VZQ#OtQ#PuQ#QvQ#RwQ$V#VQ$l#pR%g${R$Z#WQ!Z]Q!h_Q#Z!XQ#y!q[$X#W$Y$f%P%X%iQ$[#YQ$^#]S$u#y$wQ$z$TR%c$vR$W#VQkPR#UyQ!g^Q!ocQ#_!ZR$a#`W!c^c!Z#`Q!nbQ#i!bQ#o!dQ$i#lR$j#mQ#k!bQ%Z$gR%w%p",nodeNames:"⚠ Unit VariableName Comment StyleSheet RuleSet UniversalSelector TagSelector TagName NestingSelector ClassSelector . ClassName PseudoClassSelector : :: PseudoClassName PseudoClassName ) ( ArgList ValueName ParenthesizedValue ColorLiteral NumberLiteral StringLiteral BinaryExpression BinOp CallExpression Callee CallLiteral CallTag ParenthesizedContent ] [ LineNames LineName , PseudoClassName ArgList IdSelector # IdName AttributeSelector AttributeName MatchOp ChildSelector ChildOp DescendantSelector SiblingSelector SiblingOp } { Block Declaration PropertyName Important ; ImportStatement AtKeyword import Layer layer LayerName KeywordQuery FeatureQuery FeatureName BinaryQuery LogicOp ComparisonQuery CompareOp UnaryQuery UnaryQueryOp ParenthesizedQuery SelectorQuery selector MediaStatement media CharsetStatement charset NamespaceStatement namespace NamespaceName KeyframesStatement keyframes KeyframeName KeyframeList KeyframeSelector KeyframeRangeName SupportsStatement supports AtRule Styles",maxTerm:126,nodeProps:[["isolate",-2,3,25,""],["openedBy",18,"(",33,"[",51,"{"],["closedBy",19,")",34,"]",52,"}"]],propSources:[Tt],skippedNodes:[0,3,93],repeatNodeCount:13,tokenData:"LU~R!^OX$}X^%u^p$}pq%uqr)Xrs.Rst/utu6duv$}vw7^wx7oxy9^yz9oz{9t{|:_|}?Q}!O?c!O!P@Q!P!Q@i!Q![Ab![!]B]!]!^CX!^!_Cj!_!`Df!`!aDy!a!b$}!b!cEz!c!}$}!}#OHX#O#P$}#P#QHj#Q#R6d#R#T$}#T#UH{#U#c$}#c#dJ^#d#o$}#o#pJs#p#q6d#q#rKU#r#sKg#s#y$}#y#z%u#z$f$}$f$g%u$g#BY$}#BY#BZ%u#BZ$IS$}$IS$I_%u$I_$I|$}$I|$JO%u$JO$JT$}$JT$JU%u$JU$KV$}$KV$KW%u$KW&FU$}&FU&FV%u&FV;'S$};'S;=`LO<%lO$}`%QSOy%^z;'S%^;'S;=`%o<%lO%^`%cSp`Oy%^z;'S%^;'S;=`%o<%lO%^`%rP;=`<%l%^~%zh#d~OX%^X^'f^p%^pq'fqy%^z#y%^#y#z'f#z$f%^$f$g'f$g#BY%^#BY#BZ'f#BZ$IS%^$IS$I_'f$I_$I|%^$I|$JO'f$JO$JT%^$JT$JU'f$JU$KV%^$KV$KW'f$KW&FU%^&FU&FV'f&FV;'S%^;'S;=`%o<%lO%^~'mh#d~p`OX%^X^'f^p%^pq'fqy%^z#y%^#y#z'f#z$f%^$f$g'f$g#BY%^#BY#BZ'f#BZ$IS%^$IS$I_'f$I_$I|%^$I|$JO'f$JO$JT%^$JT$JU'f$JU$KV%^$KV$KW'f$KW&FU%^&FU&FV'f&FV;'S%^;'S;=`%o<%lO%^l)[UOy%^z#]%^#]#^)n#^;'S%^;'S;=`%o<%lO%^l)sUp`Oy%^z#a%^#a#b*V#b;'S%^;'S;=`%o<%lO%^l*[Up`Oy%^z#d%^#d#e*n#e;'S%^;'S;=`%o<%lO%^l*sUp`Oy%^z#c%^#c#d+V#d;'S%^;'S;=`%o<%lO%^l+[Up`Oy%^z#f%^#f#g+n#g;'S%^;'S;=`%o<%lO%^l+sUp`Oy%^z#h%^#h#i,V#i;'S%^;'S;=`%o<%lO%^l,[Up`Oy%^z#T%^#T#U,n#U;'S%^;'S;=`%o<%lO%^l,sUp`Oy%^z#b%^#b#c-V#c;'S%^;'S;=`%o<%lO%^l-[Up`Oy%^z#h%^#h#i-n#i;'S%^;'S;=`%o<%lO%^l-uS!Y[p`Oy%^z;'S%^;'S;=`%o<%lO%^~.UWOY.RZr.Rrs.ns#O.R#O#P.s#P;'S.R;'S;=`/o<%lO.R~.sOi~~.vRO;'S.R;'S;=`/P;=`O.R~/SXOY.RZr.Rrs.ns#O.R#O#P.s#P;'S.R;'S;=`/o;=`<%l.R<%lO.R~/rP;=`<%l.Rn/zYyQOy%^z!Q%^!Q![0j![!c%^!c!i0j!i#T%^#T#Z0j#Z;'S%^;'S;=`%o<%lO%^l0oYp`Oy%^z!Q%^!Q![1_![!c%^!c!i1_!i#T%^#T#Z1_#Z;'S%^;'S;=`%o<%lO%^l1dYp`Oy%^z!Q%^!Q![2S![!c%^!c!i2S!i#T%^#T#Z2S#Z;'S%^;'S;=`%o<%lO%^l2ZYg[p`Oy%^z!Q%^!Q![2y![!c%^!c!i2y!i#T%^#T#Z2y#Z;'S%^;'S;=`%o<%lO%^l3QYg[p`Oy%^z!Q%^!Q![3p![!c%^!c!i3p!i#T%^#T#Z3p#Z;'S%^;'S;=`%o<%lO%^l3uYp`Oy%^z!Q%^!Q![4e![!c%^!c!i4e!i#T%^#T#Z4e#Z;'S%^;'S;=`%o<%lO%^l4lYg[p`Oy%^z!Q%^!Q![5[![!c%^!c!i5[!i#T%^#T#Z5[#Z;'S%^;'S;=`%o<%lO%^l5aYp`Oy%^z!Q%^!Q![6P![!c%^!c!i6P!i#T%^#T#Z6P#Z;'S%^;'S;=`%o<%lO%^l6WSg[p`Oy%^z;'S%^;'S;=`%o<%lO%^d6gUOy%^z!_%^!_!`6y!`;'S%^;'S;=`%o<%lO%^d7QS}Sp`Oy%^z;'S%^;'S;=`%o<%lO%^b7cSXQOy%^z;'S%^;'S;=`%o<%lO%^~7rWOY7oZw7owx.nx#O7o#O#P8[#P;'S7o;'S;=`9W<%lO7o~8_RO;'S7o;'S;=`8h;=`O7o~8kXOY7oZw7owx.nx#O7o#O#P8[#P;'S7o;'S;=`9W;=`<%l7o<%lO7o~9ZP;=`<%l7on9cSc^Oy%^z;'S%^;'S;=`%o<%lO%^~9tOb~n9{UUQkWOy%^z!_%^!_!`6y!`;'S%^;'S;=`%o<%lO%^n:fWkW!SQOy%^z!O%^!O!P;O!P!Q%^!Q![>T![;'S%^;'S;=`%o<%lO%^l;TUp`Oy%^z!Q%^!Q![;g![;'S%^;'S;=`%o<%lO%^l;nYp`#m[Oy%^z!Q%^!Q![;g![!g%^!g!h<^!h#X%^#X#Y<^#Y;'S%^;'S;=`%o<%lO%^l<cYp`Oy%^z{%^{|=R|}%^}!O=R!O!Q%^!Q![=j![;'S%^;'S;=`%o<%lO%^l=WUp`Oy%^z!Q%^!Q![=j![;'S%^;'S;=`%o<%lO%^l=qUp`#m[Oy%^z!Q%^!Q![=j![;'S%^;'S;=`%o<%lO%^l>[[p`#m[Oy%^z!O%^!O!P;g!P!Q%^!Q![>T![!g%^!g!h<^!h#X%^#X#Y<^#Y;'S%^;'S;=`%o<%lO%^n?VSu^Oy%^z;'S%^;'S;=`%o<%lO%^l?hWkWOy%^z!O%^!O!P;O!P!Q%^!Q![>T![;'S%^;'S;=`%o<%lO%^n@VUZQOy%^z!Q%^!Q![;g![;'S%^;'S;=`%o<%lO%^~@nTkWOy%^z{@}{;'S%^;'S;=`%o<%lO%^~AUSp`#e~Oy%^z;'S%^;'S;=`%o<%lO%^lAg[#m[Oy%^z!O%^!O!P;g!P!Q%^!Q![>T![!g%^!g!h<^!h#X%^#X#Y<^#Y;'S%^;'S;=`%o<%lO%^jBbU^YOy%^z![%^![!]Bt!];'S%^;'S;=`%o<%lO%^bB{S_Qp`Oy%^z;'S%^;'S;=`%o<%lO%^nC^S!Z^Oy%^z;'S%^;'S;=`%o<%lO%^hCoU!hWOy%^z!_%^!_!`DR!`;'S%^;'S;=`%o<%lO%^hDYS!hWp`Oy%^z;'S%^;'S;=`%o<%lO%^lDmS!hW}SOy%^z;'S%^;'S;=`%o<%lO%^jEQV!PQ!hWOy%^z!_%^!_!`DR!`!aEg!a;'S%^;'S;=`%o<%lO%^bEnS!PQp`Oy%^z;'S%^;'S;=`%o<%lO%^bE}YOy%^z}%^}!OFm!O!c%^!c!}G[!}#T%^#T#oG[#o;'S%^;'S;=`%o<%lO%^bFrWp`Oy%^z!c%^!c!}G[!}#T%^#T#oG[#o;'S%^;'S;=`%o<%lO%^bGc[!]Qp`Oy%^z}%^}!OG[!O!Q%^!Q![G[![!c%^!c!}G[!}#T%^#T#oG[#o;'S%^;'S;=`%o<%lO%^nH^Sr^Oy%^z;'S%^;'S;=`%o<%lO%^nHoSq^Oy%^z;'S%^;'S;=`%o<%lO%^jIOUOy%^z#b%^#b#cIb#c;'S%^;'S;=`%o<%lO%^jIgUp`Oy%^z#W%^#W#XIy#X;'S%^;'S;=`%o<%lO%^jJQS!fYp`Oy%^z;'S%^;'S;=`%o<%lO%^jJaUOy%^z#f%^#f#gIy#g;'S%^;'S;=`%o<%lO%^fJxS!UUOy%^z;'S%^;'S;=`%o<%lO%^nKZS!T^Oy%^z;'S%^;'S;=`%o<%lO%^fKlU!SQOy%^z!_%^!_!`6y!`;'S%^;'S;=`%o<%lO%^`LRP;=`<%l$}",tokenizers:[wt,vt,Pt,1,2,3,4,new ze.uC("m~RRYZ[z{a~~g~aO#g~~dP!P!Qg~lO#h~~",28,114)],topRules:{StyleSheet:[0,4],Styles:[1,92]},specialized:[{term:108,get:e=>$t[e]||-1},{term:59,get:e=>Xt[e]||-1},{term:110,get:e=>_t[e]||-1}],tokenPrec:1441})
let Ct=null
function Vt(){if(!Ct&&"object"==typeof document&&document.body){let{style:e}=document.body,t=[],r=new Set
for(let n in e)"cssText"!=n&&"cssFloat"!=n&&"string"==typeof e[n]&&(/[A-Z]/.test(n)&&(n=n.replace(/[A-Z]/g,(e=>"-"+e.toLowerCase()))),r.has(n)||(t.push(n),r.add(n)))
Ct=t.sort().map((e=>({type:"property",label:e,apply:e+": "})))}return Ct||[]}const Lt=["active","after","any-link","autofill","backdrop","before","checked","cue","default","defined","disabled","empty","enabled","file-selector-button","first","first-child","first-letter","first-line","first-of-type","focus","focus-visible","focus-within","fullscreen","has","host","host-context","hover","in-range","indeterminate","invalid","is","lang","last-child","last-of-type","left","link","marker","modal","not","nth-child","nth-last-child","nth-last-of-type","nth-of-type","only-child","only-of-type","optional","out-of-range","part","placeholder","placeholder-shown","read-only","read-write","required","right","root","scope","selection","slotted","target","target-text","valid","visited","where"].map((e=>({type:"class",label:e}))),Et=["above","absolute","activeborder","additive","activecaption","after-white-space","ahead","alias","all","all-scroll","alphabetic","alternate","always","antialiased","appworkspace","asterisks","attr","auto","auto-flow","avoid","avoid-column","avoid-page","avoid-region","axis-pan","background","backwards","baseline","below","bidi-override","blink","block","block-axis","bold","bolder","border","border-box","both","bottom","break","break-all","break-word","bullets","button","button-bevel","buttonface","buttonhighlight","buttonshadow","buttontext","calc","capitalize","caps-lock-indicator","caption","captiontext","caret","cell","center","checkbox","circle","cjk-decimal","clear","clip","close-quote","col-resize","collapse","color","color-burn","color-dodge","column","column-reverse","compact","condensed","contain","content","contents","content-box","context-menu","continuous","copy","counter","counters","cover","crop","cross","crosshair","currentcolor","cursive","cyclic","darken","dashed","decimal","decimal-leading-zero","default","default-button","dense","destination-atop","destination-in","destination-out","destination-over","difference","disc","discard","disclosure-closed","disclosure-open","document","dot-dash","dot-dot-dash","dotted","double","down","e-resize","ease","ease-in","ease-in-out","ease-out","element","ellipse","ellipsis","embed","end","ethiopic-abegede-gez","ethiopic-halehame-aa-er","ethiopic-halehame-gez","ew-resize","exclusion","expanded","extends","extra-condensed","extra-expanded","fantasy","fast","fill","fill-box","fixed","flat","flex","flex-end","flex-start","footnotes","forwards","from","geometricPrecision","graytext","grid","groove","hand","hard-light","help","hidden","hide","higher","highlight","highlighttext","horizontal","hsl","hsla","hue","icon","ignore","inactiveborder","inactivecaption","inactivecaptiontext","infinite","infobackground","infotext","inherit","initial","inline","inline-axis","inline-block","inline-flex","inline-grid","inline-table","inset","inside","intrinsic","invert","italic","justify","keep-all","landscape","large","larger","left","level","lighter","lighten","line-through","linear","linear-gradient","lines","list-item","listbox","listitem","local","logical","loud","lower","lower-hexadecimal","lower-latin","lower-norwegian","lowercase","ltr","luminosity","manipulation","match","matrix","matrix3d","medium","menu","menutext","message-box","middle","min-intrinsic","mix","monospace","move","multiple","multiple_mask_images","multiply","n-resize","narrower","ne-resize","nesw-resize","no-close-quote","no-drop","no-open-quote","no-repeat","none","normal","not-allowed","nowrap","ns-resize","numbers","numeric","nw-resize","nwse-resize","oblique","opacity","open-quote","optimizeLegibility","optimizeSpeed","outset","outside","outside-shape","overlay","overline","padding","padding-box","painted","page","paused","perspective","pinch-zoom","plus-darker","plus-lighter","pointer","polygon","portrait","pre","pre-line","pre-wrap","preserve-3d","progress","push-button","radial-gradient","radio","read-only","read-write","read-write-plaintext-only","rectangle","region","relative","repeat","repeating-linear-gradient","repeating-radial-gradient","repeat-x","repeat-y","reset","reverse","rgb","rgba","ridge","right","rotate","rotate3d","rotateX","rotateY","rotateZ","round","row","row-resize","row-reverse","rtl","run-in","running","s-resize","sans-serif","saturation","scale","scale3d","scaleX","scaleY","scaleZ","screen","scroll","scrollbar","scroll-position","se-resize","self-start","self-end","semi-condensed","semi-expanded","separate","serif","show","single","skew","skewX","skewY","skip-white-space","slide","slider-horizontal","slider-vertical","sliderthumb-horizontal","sliderthumb-vertical","slow","small","small-caps","small-caption","smaller","soft-light","solid","source-atop","source-in","source-out","source-over","space","space-around","space-between","space-evenly","spell-out","square","start","static","status-bar","stretch","stroke","stroke-box","sub","subpixel-antialiased","svg_masks","super","sw-resize","symbolic","symbols","system-ui","table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row","table-row-group","text","text-bottom","text-top","textarea","textfield","thick","thin","threeddarkshadow","threedface","threedhighlight","threedlightshadow","threedshadow","to","top","transform","translate","translate3d","translateX","translateY","translateZ","transparent","ultra-condensed","ultra-expanded","underline","unidirectional-pan","unset","up","upper-latin","uppercase","url","var","vertical","vertical-text","view-box","visible","visibleFill","visiblePainted","visibleStroke","visual","w-resize","wait","wave","wider","window","windowframe","windowtext","words","wrap","wrap-reverse","x-large","x-small","xor","xx-large","xx-small"].map((e=>({type:"keyword",label:e}))).concat(["aliceblue","antiquewhite","aqua","aquamarine","azure","beige","bisque","black","blanchedalmond","blue","blueviolet","brown","burlywood","cadetblue","chartreuse","chocolate","coral","cornflowerblue","cornsilk","crimson","cyan","darkblue","darkcyan","darkgoldenrod","darkgray","darkgreen","darkkhaki","darkmagenta","darkolivegreen","darkorange","darkorchid","darkred","darksalmon","darkseagreen","darkslateblue","darkslategray","darkturquoise","darkviolet","deeppink","deepskyblue","dimgray","dodgerblue","firebrick","floralwhite","forestgreen","fuchsia","gainsboro","ghostwhite","gold","goldenrod","gray","grey","green","greenyellow","honeydew","hotpink","indianred","indigo","ivory","khaki","lavender","lavenderblush","lawngreen","lemonchiffon","lightblue","lightcoral","lightcyan","lightgoldenrodyellow","lightgray","lightgreen","lightpink","lightsalmon","lightseagreen","lightskyblue","lightslategray","lightsteelblue","lightyellow","lime","limegreen","linen","magenta","maroon","mediumaquamarine","mediumblue","mediumorchid","mediumpurple","mediumseagreen","mediumslateblue","mediumspringgreen","mediumturquoise","mediumvioletred","midnightblue","mintcream","mistyrose","moccasin","navajowhite","navy","oldlace","olive","olivedrab","orange","orangered","orchid","palegoldenrod","palegreen","paleturquoise","palevioletred","papayawhip","peachpuff","peru","pink","plum","powderblue","purple","rebeccapurple","red","rosybrown","royalblue","saddlebrown","salmon","sandybrown","seagreen","seashell","sienna","silver","skyblue","slateblue","slategray","snow","springgreen","steelblue","tan","teal","thistle","tomato","turquoise","violet","wheat","white","whitesmoke","yellow","yellowgreen"].map((e=>({type:"constant",label:e})))),Rt=["a","abbr","address","article","aside","b","bdi","bdo","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","dd","del","details","dfn","dialog","div","dl","dt","em","figcaption","figure","footer","form","header","hgroup","h1","h2","h3","h4","h5","h6","hr","html","i","iframe","img","input","ins","kbd","label","legend","li","main","meter","nav","ol","output","p","pre","ruby","section","select","small","source","span","strong","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","tr","u","ul"].map((e=>({type:"type",label:e}))),qt=["@charset","@color-profile","@container","@counter-style","@font-face","@font-feature-values","@font-palette-values","@import","@keyframes","@layer","@media","@namespace","@page","@position-try","@property","@scope","@starting-style","@supports","@view-transition"].map((e=>({type:"keyword",label:e}))),zt=/^(\w[\w-]*|-\w[\w-]*|)$/,Bt=/^-(-[\w-]*)?$/,Wt=new i.RY,Yt=["Declaration"]
function Zt(e){for(let t=e;;){if(t.type.isTop)return t
if(!(t=t.parent))return e}}function It(e,t,r){if(t.to-t.from>4096){let n=Wt.get(t)
if(n)return n
let a=[],l=new Set,s=t.cursor(i.Qj.IncludeAnonymous)
if(s.firstChild())do{for(let t of It(e,s.node,r))l.has(t.label)||(l.add(t.label),a.push(t))}while(s.nextSibling())
return Wt.set(t,a),a}{let n=[],a=new Set
return t.cursor().iterate((t=>{var l
if(r(t)&&t.matchContext(Yt)&&":"==(null===(l=t.node.nextSibling)||void 0===l?void 0:l.name)){let r=e.sliceString(t.from,t.to)
a.has(r)||(a.add(r),n.push({label:r,type:"variable"}))}})),n}}const Mt=(e=>t=>{let{state:r,pos:n}=t,a=(0,s.syntaxTree)(r).resolveInner(n,-1),l=a.type.isError&&a.from==a.to-1&&"-"==r.doc.sliceString(a.from,a.to)
if("PropertyName"==a.name||(l||"TagName"==a.name)&&/^(Block|Styles)$/.test(a.resolve(a.to).name))return{from:a.from,options:Vt(),validFor:zt}
if("ValueName"==a.name)return{from:a.from,options:Et,validFor:zt}
if("PseudoClassName"==a.name)return{from:a.from,options:Lt,validFor:zt}
if(e(a)||(t.explicit||l)&&function(e,t){var r
if(("("==e.name||e.type.isError)&&(e=e.parent||e),"ArgList"!=e.name)return!1
let n=null===(r=e.parent)||void 0===r?void 0:r.firstChild
return"Callee"==(null==n?void 0:n.name)&&"var"==t.sliceString(n.from,n.to)}(a,r.doc))return{from:e(a)||l?a.from:n,options:It(r.doc,Zt(a),e),validFor:Bt}
if("TagName"==a.name){for(let{parent:e}=a;e;e=e.parent)if("Block"==e.name)return{from:a.from,options:Vt(),validFor:zt}
return{from:a.from,options:Rt,validFor:zt}}if("AtKeyword"==a.name)return{from:a.from,options:qt,validFor:zt}
if(!t.explicit)return null
let o=a.resolve(n),i=o.childBefore(n)
return i&&":"==i.name&&"PseudoClassSelector"==o.name?{from:n,options:Lt,validFor:zt}:i&&":"==i.name&&"Declaration"==o.name||"ArgList"==o.name?{from:n,options:Et,validFor:zt}:"Block"==o.name||"Styles"==o.name?{from:n,options:Vt(),validFor:zt}:null})((e=>"VariableName"==e.name)),Ut=s.LRLanguage.define({name:"css",parser:At.configure({props:[s.indentNodeProp.add({Declaration:(0,s.continuedIndent)()}),s.foldNodeProp.add({"Block KeyframeList":s.foldInside})]}),languageData:{commentTokens:{block:{open:"/*",close:"*/"}},indentOnInput:/^\s*\}$/,wordChars:"-"}})
var Nt=r(44524)
const Gt=["_blank","_self","_top","_parent"],Dt=["ascii","utf-8","utf-16","latin1","latin1"],jt=["get","post","put","delete"],Ht=["application/x-www-form-urlencoded","multipart/form-data","text/plain"],Ft=["true","false"],Kt={},Jt={a:{attrs:{href:null,ping:null,type:null,media:null,target:Gt,hreflang:null}},abbr:Kt,address:Kt,area:{attrs:{alt:null,coords:null,href:null,target:null,ping:null,media:null,hreflang:null,type:null,shape:["default","rect","circle","poly"]}},article:Kt,aside:Kt,audio:{attrs:{src:null,mediagroup:null,crossorigin:["anonymous","use-credentials"],preload:["none","metadata","auto"],autoplay:["autoplay"],loop:["loop"],controls:["controls"]}},b:Kt,base:{attrs:{href:null,target:Gt}},bdi:Kt,bdo:Kt,blockquote:{attrs:{cite:null}},body:Kt,br:Kt,button:{attrs:{form:null,formaction:null,name:null,value:null,autofocus:["autofocus"],disabled:["autofocus"],formenctype:Ht,formmethod:jt,formnovalidate:["novalidate"],formtarget:Gt,type:["submit","reset","button"]}},canvas:{attrs:{width:null,height:null}},caption:Kt,center:Kt,cite:Kt,code:Kt,col:{attrs:{span:null}},colgroup:{attrs:{span:null}},command:{attrs:{type:["command","checkbox","radio"],label:null,icon:null,radiogroup:null,command:null,title:null,disabled:["disabled"],checked:["checked"]}},data:{attrs:{value:null}},datagrid:{attrs:{disabled:["disabled"],multiple:["multiple"]}},datalist:{attrs:{data:null}},dd:Kt,del:{attrs:{cite:null,datetime:null}},details:{attrs:{open:["open"]}},dfn:Kt,div:Kt,dl:Kt,dt:Kt,em:Kt,embed:{attrs:{src:null,type:null,width:null,height:null}},eventsource:{attrs:{src:null}},fieldset:{attrs:{disabled:["disabled"],form:null,name:null}},figcaption:Kt,figure:Kt,footer:Kt,form:{attrs:{action:null,name:null,"accept-charset":Dt,autocomplete:["on","off"],enctype:Ht,method:jt,novalidate:["novalidate"],target:Gt}},h1:Kt,h2:Kt,h3:Kt,h4:Kt,h5:Kt,h6:Kt,head:{children:["title","base","link","style","meta","script","noscript","command"]},header:Kt,hgroup:Kt,hr:Kt,html:{attrs:{manifest:null}},i:Kt,iframe:{attrs:{src:null,srcdoc:null,name:null,width:null,height:null,sandbox:["allow-top-navigation","allow-same-origin","allow-forms","allow-scripts"],seamless:["seamless"]}},img:{attrs:{alt:null,src:null,ismap:null,usemap:null,width:null,height:null,crossorigin:["anonymous","use-credentials"]}},input:{attrs:{alt:null,dirname:null,form:null,formaction:null,height:null,list:null,max:null,maxlength:null,min:null,name:null,pattern:null,placeholder:null,size:null,src:null,step:null,value:null,width:null,accept:["audio/*","video/*","image/*"],autocomplete:["on","off"],autofocus:["autofocus"],checked:["checked"],disabled:["disabled"],formenctype:Ht,formmethod:jt,formnovalidate:["novalidate"],formtarget:Gt,multiple:["multiple"],readonly:["readonly"],required:["required"],type:["hidden","text","search","tel","url","email","password","datetime","date","month","week","time","datetime-local","number","range","color","checkbox","radio","file","submit","image","reset","button"]}},ins:{attrs:{cite:null,datetime:null}},kbd:Kt,keygen:{attrs:{challenge:null,form:null,name:null,autofocus:["autofocus"],disabled:["disabled"],keytype:["RSA"]}},label:{attrs:{for:null,form:null}},legend:Kt,li:{attrs:{value:null}},link:{attrs:{href:null,type:null,hreflang:null,media:null,sizes:["all","16x16","16x16 32x32","16x16 32x32 64x64"]}},map:{attrs:{name:null}},mark:Kt,menu:{attrs:{label:null,type:["list","context","toolbar"]}},meta:{attrs:{content:null,charset:Dt,name:["viewport","application-name","author","description","generator","keywords"],"http-equiv":["content-language","content-type","default-style","refresh"]}},meter:{attrs:{value:null,min:null,low:null,high:null,max:null,optimum:null}},nav:Kt,noscript:Kt,object:{attrs:{data:null,type:null,name:null,usemap:null,form:null,width:null,height:null,typemustmatch:["typemustmatch"]}},ol:{attrs:{reversed:["reversed"],start:null,type:["1","a","A","i","I"]},children:["li","script","template","ul","ol"]},optgroup:{attrs:{disabled:["disabled"],label:null}},option:{attrs:{disabled:["disabled"],label:null,selected:["selected"],value:null}},output:{attrs:{for:null,form:null,name:null}},p:Kt,param:{attrs:{name:null,value:null}},pre:Kt,progress:{attrs:{value:null,max:null}},q:{attrs:{cite:null}},rp:Kt,rt:Kt,ruby:Kt,samp:Kt,script:{attrs:{type:["text/javascript"],src:null,async:["async"],defer:["defer"],charset:Dt}},section:Kt,select:{attrs:{form:null,name:null,size:null,autofocus:["autofocus"],disabled:["disabled"],multiple:["multiple"]}},slot:{attrs:{name:null}},small:Kt,source:{attrs:{src:null,type:null,media:null}},span:Kt,strong:Kt,style:{attrs:{type:["text/css"],media:null,scoped:null}},sub:Kt,summary:Kt,sup:Kt,table:Kt,tbody:Kt,td:{attrs:{colspan:null,rowspan:null,headers:null}},template:Kt,textarea:{attrs:{dirname:null,form:null,maxlength:null,name:null,placeholder:null,rows:null,cols:null,autofocus:["autofocus"],disabled:["disabled"],readonly:["readonly"],required:["required"],wrap:["soft","hard"]}},tfoot:Kt,th:{attrs:{colspan:null,rowspan:null,headers:null,scope:["row","col","rowgroup","colgroup"]}},thead:Kt,time:{attrs:{datetime:null}},title:Kt,tr:Kt,track:{attrs:{src:null,label:null,default:null,kind:["subtitles","captions","descriptions","chapters","metadata"],srclang:null}},ul:{children:["li","script","template","ul","ol"]},var:Kt,video:{attrs:{src:null,poster:null,width:null,height:null,crossorigin:["anonymous","use-credentials"],preload:["auto","metadata","none"],autoplay:["autoplay"],mediagroup:["movie"],muted:["muted"],controls:["controls"]}},wbr:Kt},er={accesskey:null,class:null,contenteditable:Ft,contextmenu:null,dir:["ltr","rtl","auto"],draggable:["true","false","auto"],dropzone:["copy","move","link","string:","file:"],hidden:["hidden"],id:null,inert:["inert"],itemid:null,itemprop:null,itemref:null,itemscope:["itemscope"],itemtype:null,lang:["ar","bn","de","en-GB","en-US","es","fr","hi","id","ja","pa","pt","ru","tr","zh"],spellcheck:Ft,autocorrect:Ft,autocapitalize:Ft,style:null,tabindex:null,title:null,translate:["yes","no"],rel:["stylesheet","alternate","author","bookmark","help","license","next","nofollow","noreferrer","prefetch","prev","search","tag"],role:"alert application article banner button cell checkbox complementary contentinfo dialog document feed figure form grid gridcell heading img list listbox listitem main navigation region row rowgroup search switch tab table tabpanel textbox timer".split(" "),"aria-activedescendant":null,"aria-atomic":Ft,"aria-autocomplete":["inline","list","both","none"],"aria-busy":Ft,"aria-checked":["true","false","mixed","undefined"],"aria-controls":null,"aria-describedby":null,"aria-disabled":Ft,"aria-dropeffect":null,"aria-expanded":["true","false","undefined"],"aria-flowto":null,"aria-grabbed":["true","false","undefined"],"aria-haspopup":Ft,"aria-hidden":Ft,"aria-invalid":["true","false","grammar","spelling"],"aria-label":null,"aria-labelledby":null,"aria-level":null,"aria-live":["off","polite","assertive"],"aria-multiline":Ft,"aria-multiselectable":Ft,"aria-owns":null,"aria-posinset":null,"aria-pressed":["true","false","mixed","undefined"],"aria-readonly":Ft,"aria-relevant":null,"aria-required":Ft,"aria-selected":["true","false","undefined"],"aria-setsize":null,"aria-sort":["ascending","descending","none","other"],"aria-valuemax":null,"aria-valuemin":null,"aria-valuenow":null,"aria-valuetext":null},tr="beforeunload copy cut dragstart dragover dragleave dragenter dragend drag paste focus blur change click load mousedown mouseenter mouseleave mouseup keydown keyup resize scroll unload".split(" ").map((e=>"on"+e))
for(let Ir of tr)er[Ir]=null
class rr{constructor(e,t){this.tags=Object.assign(Object.assign({},Jt),e),this.globalAttrs=Object.assign(Object.assign({},er),t),this.allTags=Object.keys(this.tags),this.globalAttrNames=Object.keys(this.globalAttrs)}}function nr(e,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:e.length
if(!t)return""
let n=t.firstChild,a=n&&n.getChild("TagName")
return a?e.sliceString(a.from,Math.min(a.to,r)):""}function ar(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1]
for(;e;e=e.parent)if("Element"==e.name){if(!t)return e
t=!1}return null}function lr(e,t,r){let n=r.tags[nr(e,ar(t))]
return(null==n?void 0:n.children)||r.allTags}function sr(e,t){let r=[]
for(let n=ar(t);n&&!n.type.isTop;n=ar(n.parent)){let a=nr(e,n)
if(a&&"CloseTag"==n.lastChild.name)break
a&&r.indexOf(a)<0&&("EndTag"==t.name||t.from>=n.firstChild.to)&&r.push(a)}return r}rr.default=new rr
const or=/^[:\-\.\w\u00b7-\uffff]*$/
function ir(e,t,r,n,a){let l=/\s*>/.test(e.sliceDoc(a,a+5))?"":">",s=ar(r,!0)
return{from:n,to:a,options:lr(e.doc,s,t).map((e=>({label:e,type:"type"}))).concat(sr(e.doc,r).map(((e,t)=>({label:"/"+e,apply:"/"+e+l,type:"type",boost:99-t})))),validFor:/^\/?[:\-\.\w\u00b7-\uffff]*$/}}function Or(e,t,r,n){let a=/\s*>/.test(e.sliceDoc(n,n+5))?"":">"
return{from:r,to:n,options:sr(e.doc,t).map(((e,t)=>({label:e,apply:e+a,type:"type",boost:99-t}))),validFor:or}}function ur(e,t){let{state:r,pos:n}=t,a=(0,s.syntaxTree)(r).resolveInner(n,-1),l=a.resolve(n)
for(let s,o=n;l==a&&(s=a.childBefore(o));){let e=s.lastChild
if(!e||!e.type.isError||e.from<e.to)break
l=a=s,o=e.from}return"TagName"==a.name?a.parent&&/CloseTag$/.test(a.parent.name)?Or(r,a,a.from,n):ir(r,e,a,a.from,n):"StartTag"==a.name?ir(r,e,a,n,n):"StartCloseTag"==a.name||"IncompleteCloseTag"==a.name?Or(r,a,n,n):"OpenTag"==a.name||"SelfClosingTag"==a.name||"AttributeName"==a.name?function(e,t,r,n,a){let l=ar(r),s=l?t.tags[nr(e.doc,l)]:null,o=s&&s.attrs?Object.keys(s.attrs):[]
return{from:n,to:a,options:(s&&!1===s.globalAttrs?o:o.length?o.concat(t.globalAttrNames):t.globalAttrNames).map((e=>({label:e,type:"property"}))),validFor:or}}(r,e,a,"AttributeName"==a.name?a.from:n,n):"Is"==a.name||"AttributeValue"==a.name||"UnquotedAttributeValue"==a.name?function(e,t,r,n,a){var l
let s,o=null===(l=r.parent)||void 0===l?void 0:l.getChild("AttributeName"),i=[]
if(o){let l=e.sliceDoc(o.from,o.to),O=t.globalAttrs[l]
if(!O){let n=ar(r),a=n?t.tags[nr(e.doc,n)]:null
O=(null==a?void 0:a.attrs)&&a.attrs[l]}if(O){let t=e.sliceDoc(n,a).toLowerCase(),r='"',l='"';/^['"]/.test(t)?(s='"'==t[0]?/^[^"]*$/:/^[^']*$/,r="",l=e.sliceDoc(a,a+1)==t[0]?"":t[0],t=t.slice(1),n++):s=/^[^\s<>='"]*$/
for(let e of O)i.push({label:e,apply:r+e+l,type:"constant"})}}return{from:n,to:a,options:i,validFor:s}}(r,e,a,"Is"==a.name?n:a.from,n):!t.explicit||"Element"!=l.name&&"Text"!=l.name&&"Document"!=l.name?null:function(e,t,r,n){let a=[],l=0
for(let s of lr(e.doc,r,t))a.push({label:"<"+s,type:"type"})
for(let s of sr(e.doc,r))a.push({label:"</"+s+">",type:"type",boost:99-l++})
return{from:n,to:n,options:a,validFor:/^<\/?[:\-\.\w\u00b7-\uffff]*$/}}(r,e,a,n)}function cr(e){let{extraTags:t,extraGlobalAttributes:r}=e,n=r||t?new rr(t,r):rr.default
return e=>ur(n,e)}const dr=Nt.javascriptLanguage.parser.configure({top:"SingleExpression"}),pr=[{tag:"script",attrs:e=>"text/typescript"==e.type||"ts"==e.lang,parser:Nt.typescriptLanguage.parser},{tag:"script",attrs:e=>"text/babel"==e.type||"text/jsx"==e.type,parser:Nt.jsxLanguage.parser},{tag:"script",attrs:e=>"text/typescript-jsx"==e.type,parser:Nt.tsxLanguage.parser},{tag:"script",attrs:e=>/^(importmap|speculationrules|application\/(.+\+)?json)$/i.test(e.type),parser:dr},{tag:"script",attrs:e=>!e.type||/^(?:text|application)\/(?:x-)?(?:java|ecma)script$|^module$|^$/i.test(e.type),parser:Nt.javascriptLanguage.parser},{tag:"style",attrs:e=>(!e.lang||"css"==e.lang)&&(!e.type||/^(text\/)?(x-)?(stylesheet|css)$/i.test(e.type)),parser:Ut.parser}],hr=[{name:"style",parser:Ut.parser.configure({top:"Styles"})}].concat(tr.map((e=>({name:e,parser:Nt.javascriptLanguage.parser})))),fr=s.LRLanguage.define({name:"html",parser:mt.configure({props:[s.indentNodeProp.add({Element(e){let t=/^(\s*)(<\/)?/.exec(e.textAfter)
return e.node.to<=e.pos+t[0].length?e.continue():e.lineIndent(e.node.from)+(t[2]?0:e.unit)},"OpenTag CloseTag SelfClosingTag":e=>e.column(e.node.from)+e.unit,Document(e){if(e.pos+/\s*/.exec(e.textAfter)[0].length<e.node.to)return e.continue()
let t,r=null
for(let n=e.node;;){let e=n.lastChild
if(!e||"Element"!=e.name||e.to!=n.to)break
r=n=e}return r&&(!(t=r.lastChild)||"CloseTag"!=t.name&&"SelfClosingTag"!=t.name)?e.lineIndent(r.from)+e.unit:null}}),s.foldNodeProp.add({Element(e){let t=e.firstChild,r=e.lastChild
return t&&"OpenTag"==t.name?{from:t.to,to:"CloseTag"==r.name?r.from:e.to}:null}}),s.bracketMatchingHandle.add({"OpenTag CloseTag":e=>e.getChild("TagName")})]}),languageData:{commentTokens:{block:{open:"\x3c!--",close:"--\x3e"}},indentOnInput:/^\s*<\/\w+\W$/,wordChars:"-._"}}),mr=fr.configure({wrap:kt(pr,hr)})
const gr=new Set("area base br col command embed frame hr img input keygen link meta param source track wbr menuitem".split(" ")),Sr=l.EditorView.inputHandler.of(((e,t,r,n,l)=>{if(e.composing||e.state.readOnly||t!=r||">"!=n&&"/"!=n||!mr.isActiveAt(e.state,t,-1))return!1
let o=l(),{state:i}=o,O=i.changeByRange((e=>{var t,r,l
let o,O=i.doc.sliceString(e.from-1,e.to)==n,{head:u}=e,c=(0,s.syntaxTree)(i).resolveInner(u,-1)
if(O&&">"==n&&"EndTag"==c.name){let n=c.parent
if("CloseTag"!=(null===(r=null===(t=n.parent)||void 0===t?void 0:t.lastChild)||void 0===r?void 0:r.name)&&(o=nr(i.doc,n.parent,u))&&!gr.has(o))return{range:e,changes:{from:u,to:u+(">"===i.doc.sliceString(u,u+1)?1:0),insert:`</${o}>`}}}else if(O&&"/"==n&&"IncompleteCloseTag"==c.name){let e=c.parent
if(c.from==u-2&&"CloseTag"!=(null===(l=e.lastChild)||void 0===l?void 0:l.name)&&(o=nr(i.doc,e,u))&&!gr.has(o)){let e=u+(">"===i.doc.sliceString(u,u+1)?1:0),t=`${o}>`
return{range:a.EditorSelection.cursor(u+t.length,-1),changes:{from:u,to:e,insert:t}}}}return{range:e}}))
return!O.changes.empty&&(e.dispatch([o,i.update(O,{userEvent:"input.complete",scrollIntoView:!0})]),!0)})),br=(0,s.defineLanguageFacet)({commentTokens:{block:{open:"\x3c!--",close:"--\x3e"}}}),kr=new i.uY,xr=fe.configure({props:[s.foldNodeProp.add((e=>!e.is("Block")||e.is("Document")||null!=yr(e)||function(e){return"OrderedList"==e.name||"BulletList"==e.name}(e)?void 0:(e,t)=>({from:t.doc.lineAt(e.from).to,to:e.to}))),kr.add(yr),s.indentNodeProp.add({Document:()=>null}),s.languageDataProp.add({Document:br})]})
function yr(e){let t=/^(?:ATX|Setext)Heading(\d)$/.exec(e.name)
return t?+t[1]:void 0}function Qr(e,t){let r=e
for(;;){let e,n=r.nextSibling
if(!n||null!=(e=yr(n.type))&&e<=t)break
r=n}return r.to}const Pr=s.foldService.of(((e,t,r)=>{for(let n=(0,s.syntaxTree)(e).resolveInner(r,-1);n&&!(n.from<t);n=n.parent){let e=n.type.prop(kr)
if(null==e)continue
let t=Qr(n,e)
if(t>r)return{from:r,to:t}}return null}))
function wr(e){return new s.Language(br,e,[Pr],"markdown")}const vr=wr(xr),Tr=wr(xr.configure([Ve,Re,Ee,qe,{props:[s.foldNodeProp.add({Table:(e,t)=>({from:t.doc.lineAt(e.from).to,to:e.to})})]}]))
class $r{constructor(e,t,r,n,a,l,s){this.node=e,this.from=t,this.to=r,this.spaceBefore=n,this.spaceAfter=a,this.type=l,this.item=s}blank(e){let t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],r=this.spaceBefore+("Blockquote"==this.node.name?">":"")
if(null!=e){for(;r.length<e;)r+=" "
return r}for(let n=this.to-this.from-r.length-this.spaceAfter.length;n>0;n--)r+=" "
return r+(t?this.spaceAfter:"")}marker(e,t){let r="OrderedList"==this.node.name?String(+_r(this.item,e)[2]+t):""
return this.spaceBefore+r+this.type+this.spaceAfter}}function Xr(e,t){let r=[],n=[]
for(let a=e;a;a=a.parent){if("FencedCode"==a.name)return n
"ListItem"!=a.name&&"Blockquote"!=a.name||r.push(a)}for(let a=r.length-1;a>=0;a--){let e,l=r[a],s=t.lineAt(l.from),o=l.from-s.from
if("Blockquote"==l.name&&(e=/^ *>( ?)/.exec(s.text.slice(o))))n.push(new $r(l,o,o+e[0].length,"",e[1],">",null))
else if("ListItem"==l.name&&"OrderedList"==l.parent.name&&(e=/^( *)\d+([.)])( *)/.exec(s.text.slice(o)))){let t=e[3],r=e[0].length
t.length>=4&&(t=t.slice(0,t.length-4),r-=4),n.push(new $r(l.parent,o,o+r,e[1],t,e[2],l))}else if("ListItem"==l.name&&"BulletList"==l.parent.name&&(e=/^( *)([-+*])( {1,4}\[[ xX]\])?( +)/.exec(s.text.slice(o)))){let t=e[4],r=e[0].length
t.length>4&&(t=t.slice(0,t.length-4),r-=4)
let a=e[2]
e[3]&&(a+=e[3].replace(/[xX]/," ")),n.push(new $r(l.parent,o,o+r,e[1],t,a,l))}}return n}function _r(e,t){return/^(\s*)(\d+)(?=[.)])/.exec(t.sliceString(e.from,e.from+10))}function Ar(e,t,r){let n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0
for(let a=-1,l=e;;){if("ListItem"==l.name){let e=_r(l,t),s=+e[2]
if(a>=0){if(s!=a+1)return
r.push({from:l.from+e[1].length,to:l.from+e[0].length,insert:String(a+2+n)})}a=s}let e=l.nextSibling
if(!e)break
l=e}}function Cr(e,t){let r=/^[ \t]*/.exec(e)[0].length
if(!r||"\t"!=t.facet(s.indentUnit))return e
let n=""
for(let l=(0,a.countColumn)(e,4,r);l>0;)l>=4?(n+="\t",l-=4):(n+=" ",l--)
return n+e.slice(r)}const Vr=e=>{let{state:t,dispatch:r}=e,n=(0,s.syntaxTree)(t),{doc:l}=t,o=null,i=t.changeByRange((e=>{if(!e.empty||!Tr.isActiveAt(t,e.from,-1)&&!Tr.isActiveAt(t,e.from,1))return o={range:e}
let r=e.from,s=l.lineAt(r),i=Xr(n.resolveInner(r,-1),l)
for(;i.length&&i[i.length-1].from>r-s.from;)i.pop()
if(!i.length)return o={range:e}
let O=i[i.length-1]
if(O.to-O.spaceAfter.length>r-s.from)return o={range:e}
let u=r>=O.to-O.spaceAfter.length&&!/\S/.test(s.text.slice(O.to))
if(O.item&&u){let e=O.node.firstChild,n=O.node.getChild("ListItem","ListItem")
if(e.to>=r||n&&n.to<r||s.from>0&&!/[^\s>]/.test(l.lineAt(s.from-1).text)){let e,t=i.length>1?i[i.length-2]:null,n=""
t&&t.item?(e=s.from+t.from,n=t.marker(l,1)):e=s.from+(t?t.to:0)
let o=[{from:e,to:r,insert:n}]
return"OrderedList"==O.node.name&&Ar(O.item,l,o,-2),t&&"OrderedList"==t.node.name&&Ar(t.item,l,o),{range:a.EditorSelection.cursor(e+n.length),changes:o}}{let e=Er(i,t,s)
return{range:a.EditorSelection.cursor(r+e.length+1),changes:{from:s.from,insert:e+t.lineBreak}}}}if("Blockquote"==O.node.name&&u&&s.from){let r=l.lineAt(s.from-1),n=/>\s*$/.exec(r.text)
if(n&&n.index==O.from){let a=t.changes([{from:r.from+n.index,to:r.to},{from:s.from+O.from,to:s.to}])
return{range:e.map(a),changes:a}}}let c=[]
"OrderedList"==O.node.name&&Ar(O.item,l,c)
let d=O.item&&O.item.from<s.from,p=""
if(!d||/^[\s\d.)\-+*>]*/.exec(s.text)[0].length>=O.to)for(let t=0,n=i.length-1;t<=n;t++)p+=t!=n||d?i[t].blank(t<n?(0,a.countColumn)(s.text,4,i[t+1].from)-p.length:null):i[t].marker(l,1)
let h=r
for(;h>s.from&&/\s/.test(s.text.charAt(h-s.from-1));)h--
return p=Cr(p,t),function(e,t){if("OrderedList"!=e.name&&"BulletList"!=e.name)return!1
let r=e.firstChild,n=e.getChild("ListItem","ListItem")
if(!n)return!1
let a=t.lineAt(r.to),l=t.lineAt(n.from),s=/^[\s>]*$/.test(a.text)
return a.number+(s?0:1)<l.number}(O.node,t.doc)&&(p=Er(i,t,s)+t.lineBreak+p),c.push({from:h,to:r,insert:t.lineBreak+p}),{range:a.EditorSelection.cursor(h+p.length+1),changes:c}}))
return!o&&(r(t.update(i,{scrollIntoView:!0,userEvent:"input"})),!0)}
function Lr(e){return"QuoteMark"==e.name||"ListMark"==e.name}function Er(e,t,r){let n=""
for(let l=0,s=e.length-2;l<=s;l++)n+=e[l].blank(l<s?(0,a.countColumn)(r.text,4,e[l+1].from)-n.length:null,l<s)
return Cr(n,t)}const Rr=e=>{let{state:t,dispatch:r}=e,n=(0,s.syntaxTree)(t),l=null,o=t.changeByRange((e=>{let r=e.from,{doc:s}=t
if(e.empty&&Tr.isActiveAt(t,e.from)){let e=s.lineAt(r),l=Xr(function(e,t){let r=e.resolveInner(t,-1),n=t
Lr(r)&&(n=r.from,r=r.parent)
for(let a;a=r.childBefore(n);)if(Lr(a))n=a.from
else{if("OrderedList"!=a.name&&"BulletList"!=a.name)break
r=a.lastChild,n=r.to}return r}(n,r),s)
if(l.length){let n=l[l.length-1],s=n.to-n.spaceAfter.length+(n.spaceAfter?1:0)
if(r-e.from>s&&!/\S/.test(e.text.slice(s,r-e.from)))return{range:a.EditorSelection.cursor(e.from+s),changes:{from:e.from+s,to:r}}
if(r-e.from==s&&(!n.item||e.from<=n.item.from||!/\S/.test(e.text.slice(0,n.to)))){let l=e.from+n.from
if(n.item&&n.node.from<n.item.from&&/\S/.test(e.text.slice(n.from,n.to))){let r=n.blank((0,a.countColumn)(e.text,4,n.to)-(0,a.countColumn)(e.text,4,n.from))
return l==e.from&&(r=Cr(r,t)),{range:a.EditorSelection.cursor(l+r.length),changes:{from:l,to:e.from+n.to,insert:r}}}if(l<r)return{range:a.EditorSelection.cursor(l),changes:{from:l,to:r}}}}}return l={range:e}}))
return!l&&(r(t.update(o,{scrollIntoView:!0,userEvent:"delete"})),!0)},qr=[{key:"Enter",run:Vr},{key:"Backspace",run:Rr}],zr=function(){let e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=""
!1===t.matchClosingTags&&(r="noMatch"),!0===t.selfClosingTags&&(r=(r?r+" ":"")+"selfClosing"),(t.nestedLanguages&&t.nestedLanguages.length||t.nestedAttributes&&t.nestedAttributes.length)&&(e=kt((t.nestedLanguages||[]).concat(pr),(t.nestedAttributes||[]).concat(hr)))
let n=e?fr.configure({wrap:e,dialect:r}):r?mr.configure({dialect:r}):mr
return new s.LanguageSupport(n,[mr.data.of({autocomplete:cr(t)}),!1!==t.autoCloseTags?Sr:[],(0,Nt.javascript)().support,new s.LanguageSupport(Ut,Ut.data.of({autocomplete:Mt})).support])}({matchClosingTags:!1})
function Br(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{codeLanguages:t,defaultCodeLanguage:r,addKeymap:o=!0,base:{parser:O}=vr,completeHTMLTags:u=!0,htmlTagLanguage:c=zr}=e
if(!(O instanceof Z))throw new RangeError("Base parser provided to `markdown` should be a Markdown parser")
let d,p=e.extensions?[e.extensions]:[],h=[c.support]
r instanceof s.LanguageSupport?(h.push(r.support),d=r.language):r&&(d=r)
let f=t||d?(m=t,g=d,e=>{if(e&&m){let t=null
if(e=/\S*/.exec(e)[0],t="function"==typeof m?m(e):s.LanguageDescription.matchLanguageName(m,e,!0),t instanceof s.LanguageDescription)return t.support?t.support.language.parser:s.ParseContext.getSkippingParser(t.load())
if(t)return t.parser}return g?g.parser:null}):void 0
var m,g
p.push(function(e){let{codeParser:t,htmlParser:r}=e,a=(0,i.$g)(((e,a)=>{let l=e.type.id
if(!t||l!=n.CodeBlock&&l!=n.FencedCode){if(r&&(l==n.HTMLBlock||l==n.HTMLTag||l==n.CommentBlock))return{parser:r,overlay:me(e.node,e.from,e.to)}}else{let r=""
if(l==n.FencedCode){let t=e.node.getChild(n.CodeInfo)
t&&(r=a.read(t.from,t.to))}let s=t(r)
if(s)return{parser:s,overlay:e=>e.type.id==n.CodeText}}return null}))
return{wrap:a}}({codeParser:f,htmlParser:c.language.parser})),o&&h.push(a.Prec.high(l.keymap.of(qr)))
let S=wr(O.configure(p))
return u&&h.push(S.data.of({autocomplete:Wr})),new s.LanguageSupport(S,h)}function Wr(e){let{state:t,pos:r}=e,n=/<[:\-\.\w\u00b7-\uffff]*$/.exec(t.sliceDoc(r-25,r))
if(!n)return null
let a=(0,s.syntaxTree)(t).resolveInner(r,-1)
for(;a&&!a.type.isTop;){if("CodeBlock"==a.name||"FencedCode"==a.name||"ProcessingInstructionBlock"==a.name||"CommentBlock"==a.name||"Link"==a.name||"Image"==a.name)return null
a=a.parent}return{from:r-n[0].length,to:r,options:Zr(),validFor:/^<[:\-\.\w\u00b7-\uffff]*$/}}let Yr=null
function Zr(){if(Yr)return Yr
let e=(t=new o._5(a.EditorState.create({extensions:zr}),0,!0),ur(rr.default,t))
var t
return Yr=e?e.options:[]}}}])
