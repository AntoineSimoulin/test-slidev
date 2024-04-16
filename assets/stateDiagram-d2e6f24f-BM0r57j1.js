import{p as P,d as N,s as W}from"./styles-15409a09-Bl8FryAs.js";import{c as t,h as H,l as b,i as v,j as T,F as R,v as U}from"./slidev/12-DWnnFB_A.js";import{G as C}from"./graph-af3d5df6-DpMBlDMz.js";import{l as F}from"./layout-6685625a-XhZVzjbX.js";import{l as $}from"./line-65d70945-Ckga8_Af.js";import"./modules/vue-DtecLCrU.js";import"./index-Bm1WKcem.js";import"./monaco/bundled-types-C68GSyqj.js";import"./modules/file-saver-DY7lxZlc.js";import"./modules/shiki-CqIg3mkY.js";import"./lz-string-BTt4z63d.js";import"./slidev/default-CIQNHlGe.js";import"./slidev/context-X7p0Zw1G.js";import"./array-b7dcf730-BKyUJesY.js";import"./path-39bad7e2-CbwjOpE9.js";const O=e=>e.append("circle").attr("class","start-state").attr("r",t().state.sizeUnit).attr("cx",t().state.padding+t().state.sizeUnit).attr("cy",t().state.padding+t().state.sizeUnit),X=e=>e.append("line").style("stroke","grey").style("stroke-dasharray","3").attr("x1",t().state.textHeight).attr("class","divider").attr("x2",t().state.textHeight*2).attr("y1",0).attr("y2",0),J=(e,a)=>{const o=e.append("text").attr("x",2*t().state.padding).attr("y",t().state.textHeight+2*t().state.padding).attr("font-size",t().state.fontSize).attr("class","state-title").text(a.id),c=o.node().getBBox();return e.insert("rect",":first-child").attr("x",t().state.padding).attr("y",t().state.padding).attr("width",c.width+2*t().state.padding).attr("height",c.height+2*t().state.padding).attr("rx",t().state.radius),o},Y=(e,a)=>{const o=function(l,m,w){const E=l.append("tspan").attr("x",2*t().state.padding).text(m);w||E.attr("dy",t().state.textHeight)},s=e.append("text").attr("x",2*t().state.padding).attr("y",t().state.textHeight+1.3*t().state.padding).attr("font-size",t().state.fontSize).attr("class","state-title").text(a.descriptions[0]).node().getBBox(),g=s.height,h=e.append("text").attr("x",t().state.padding).attr("y",g+t().state.padding*.4+t().state.dividerMargin+t().state.textHeight).attr("class","state-description");let i=!0,r=!0;a.descriptions.forEach(function(l){i||(o(h,l,r),r=!1),i=!1});const y=e.append("line").attr("x1",t().state.padding).attr("y1",t().state.padding+g+t().state.dividerMargin/2).attr("y2",t().state.padding+g+t().state.dividerMargin/2).attr("class","descr-divider"),x=h.node().getBBox(),d=Math.max(x.width,s.width);return y.attr("x2",d+3*t().state.padding),e.insert("rect",":first-child").attr("x",t().state.padding).attr("y",t().state.padding).attr("width",d+2*t().state.padding).attr("height",x.height+g+2*t().state.padding).attr("rx",t().state.radius),e},I=(e,a,o)=>{const c=t().state.padding,s=2*t().state.padding,g=e.node().getBBox(),h=g.width,i=g.x,r=e.append("text").attr("x",0).attr("y",t().state.titleShift).attr("font-size",t().state.fontSize).attr("class","state-title").text(a.id),x=r.node().getBBox().width+s;let d=Math.max(x,h);d===h&&(d=d+s);let l;const m=e.node().getBBox();a.doc,l=i-c,x>h&&(l=(h-d)/2+c),Math.abs(i-m.x)<c&&x>h&&(l=i-(x-h)/2);const w=1-t().state.textHeight;return e.insert("rect",":first-child").attr("x",l).attr("y",w).attr("class",o?"alt-composit":"composit").attr("width",d).attr("height",m.height+t().state.textHeight+t().state.titleShift+1).attr("rx","0"),r.attr("x",l+c),x<=h&&r.attr("x",i+(d-s)/2-x/2+c),e.insert("rect",":first-child").attr("x",l).attr("y",t().state.titleShift-t().state.textHeight-t().state.padding).attr("width",d).attr("height",t().state.textHeight*3).attr("rx",t().state.radius),e.insert("rect",":first-child").attr("x",l).attr("y",t().state.titleShift-t().state.textHeight-t().state.padding).attr("width",d).attr("height",m.height+3+2*t().state.textHeight).attr("rx",t().state.radius),e},_=e=>(e.append("circle").attr("class","end-state-outer").attr("r",t().state.sizeUnit+t().state.miniPadding).attr("cx",t().state.padding+t().state.sizeUnit+t().state.miniPadding).attr("cy",t().state.padding+t().state.sizeUnit+t().state.miniPadding),e.append("circle").attr("class","end-state-inner").attr("r",t().state.sizeUnit).attr("cx",t().state.padding+t().state.sizeUnit+2).attr("cy",t().state.padding+t().state.sizeUnit+2)),q=(e,a)=>{let o=t().state.forkWidth,c=t().state.forkHeight;if(a.parentId){let s=o;o=c,c=s}return e.append("rect").style("stroke","black").style("fill","black").attr("width",o).attr("height",c).attr("x",t().state.padding).attr("y",t().state.padding)},Z=(e,a,o,c)=>{let s=0;const g=c.append("text");g.style("text-anchor","start"),g.attr("class","noteText");let h=e.replace(/\r\n/g,"<br/>");h=h.replace(/\n/g,"<br/>");const i=h.split(T.lineBreakRegex);let r=1.25*t().state.noteMargin;for(const y of i){const x=y.trim();if(x.length>0){const d=g.append("tspan");if(d.text(x),r===0){const l=d.node().getBBox();r+=l.height}s+=r,d.attr("x",a+t().state.noteMargin),d.attr("y",o+s+1.25*t().state.noteMargin)}}return{textWidth:g.node().getBBox().width,textHeight:s}},j=(e,a)=>{a.attr("class","state-note");const o=a.append("rect").attr("x",0).attr("y",t().state.padding),c=a.append("g"),{textWidth:s,textHeight:g}=Z(e,0,0,c);return o.attr("height",g+2*t().state.noteMargin),o.attr("width",s+t().state.noteMargin*2),o},L=function(e,a){const o=a.id,c={id:o,label:a.id,width:0,height:0},s=e.append("g").attr("id",o).attr("class","stateGroup");a.type==="start"&&O(s),a.type==="end"&&_(s),(a.type==="fork"||a.type==="join")&&q(s,a),a.type==="note"&&j(a.note.text,s),a.type==="divider"&&X(s),a.type==="default"&&a.descriptions.length===0&&J(s,a),a.type==="default"&&a.descriptions.length>0&&Y(s,a);const g=s.node().getBBox();return c.width=g.width+2*t().state.padding,c.height=g.height+2*t().state.padding,c};let G=0;const K=function(e,a,o){const c=function(r){switch(r){case N.relationType.AGGREGATION:return"aggregation";case N.relationType.EXTENSION:return"extension";case N.relationType.COMPOSITION:return"composition";case N.relationType.DEPENDENCY:return"dependency"}};a.points=a.points.filter(r=>!Number.isNaN(r.y));const s=a.points,g=$().x(function(r){return r.x}).y(function(r){return r.y}).curve(R),h=e.append("path").attr("d",g(s)).attr("id","edge"+G).attr("class","transition");let i="";if(t().state.arrowMarkerAbsolute&&(i=window.location.protocol+"//"+window.location.host+window.location.pathname+window.location.search,i=i.replace(/\(/g,"\\("),i=i.replace(/\)/g,"\\)")),h.attr("marker-end","url("+i+"#"+c(N.relationType.DEPENDENCY)+"End)"),o.title!==void 0){const r=e.append("g").attr("class","stateLabel"),{x:y,y:x}=U.calcLabelPosition(a.points),d=T.getRows(o.title);let l=0;const m=[];let w=0,E=0;for(let u=0;u<=d.length;u++){const p=r.append("text").attr("text-anchor","middle").text(d[u]).attr("x",y).attr("y",x+l),f=p.node().getBBox();w=Math.max(w,f.width),E=Math.min(E,f.x),b.info(f.x,y,x+l),l===0&&(l=p.node().getBBox().height,b.info("Title height",l,x)),m.push(p)}let k=l*d.length;if(d.length>1){const u=(d.length-1)*l*.5;m.forEach((p,f)=>p.attr("y",x+f*l-u)),k=l*d.length}const n=r.node().getBBox();r.insert("rect",":first-child").attr("class","box").attr("x",y-w/2-t().state.padding/2).attr("y",x-k/2-t().state.padding/2-3.5).attr("width",w+t().state.padding).attr("height",k+t().state.padding),b.info(n)}G++};let B;const z={},Q=function(){},V=function(e){e.append("defs").append("marker").attr("id","dependencyEnd").attr("refX",19).attr("refY",7).attr("markerWidth",20).attr("markerHeight",28).attr("orient","auto").append("path").attr("d","M 19,7 L9,13 L14,7 L9,1 Z")},D=function(e,a,o,c){B=t().state;const s=t().securityLevel;let g;s==="sandbox"&&(g=H("#i"+a));const h=s==="sandbox"?H(g.nodes()[0].contentDocument.body):H("body"),i=s==="sandbox"?g.nodes()[0].contentDocument:document;b.debug("Rendering diagram "+e);const r=h.select(`[id='${a}']`);V(r);const y=c.db.getRootDoc();A(y,r,void 0,!1,h,i,c);const x=B.padding,d=r.node().getBBox(),l=d.width+x*2,m=d.height+x*2,w=l*1.75;v(r,m,w,B.useMaxWidth),r.attr("viewBox",`${d.x-B.padding}  ${d.y-B.padding} `+l+" "+m)},tt=e=>e?e.length*B.fontSizeFactor:1,A=(e,a,o,c,s,g,h)=>{const i=new C({compound:!0,multigraph:!0});let r,y=!0;for(r=0;r<e.length;r++)if(e[r].stmt==="relation"){y=!1;break}o?i.setGraph({rankdir:"LR",multigraph:!0,compound:!0,ranker:"tight-tree",ranksep:y?1:B.edgeLengthFactor,nodeSep:y?1:50,isMultiGraph:!0}):i.setGraph({rankdir:"TB",multigraph:!0,compound:!0,ranksep:y?1:B.edgeLengthFactor,nodeSep:y?1:50,ranker:"tight-tree",isMultiGraph:!0}),i.setDefaultEdgeLabel(function(){return{}}),h.db.extract(e);const x=h.db.getStates(),d=h.db.getRelations(),l=Object.keys(x);for(const n of l){const u=x[n];o&&(u.parentId=o);let p;if(u.doc){let f=a.append("g").attr("id",u.id).attr("class","stateGroup");p=A(u.doc,f,u.id,!c,s,g,h);{f=I(f,u,c);let S=f.node().getBBox();p.width=S.width,p.height=S.height+B.padding/2,z[u.id]={y:B.compositTitleSize}}}else p=L(a,u);if(u.note){const f={descriptions:[],id:u.id+"-note",note:u.note,type:"note"},S=L(a,f);u.note.position==="left of"?(i.setNode(p.id+"-note",S),i.setNode(p.id,p)):(i.setNode(p.id,p),i.setNode(p.id+"-note",S)),i.setParent(p.id,p.id+"-group"),i.setParent(p.id+"-note",p.id+"-group")}else i.setNode(p.id,p)}b.debug("Count=",i.nodeCount(),i);let m=0;d.forEach(function(n){m++,b.debug("Setting edge",n),i.setEdge(n.id1,n.id2,{relation:n,width:tt(n.title),height:B.labelHeight*T.getRows(n.title).length,labelpos:"c"},"id"+m)}),F(i),b.debug("Graph after layout",i.nodes());const w=a.node();i.nodes().forEach(function(n){n!==void 0&&i.node(n)!==void 0?(b.warn("Node "+n+": "+JSON.stringify(i.node(n))),s.select("#"+w.id+" #"+n).attr("transform","translate("+(i.node(n).x-i.node(n).width/2)+","+(i.node(n).y+(z[n]?z[n].y:0)-i.node(n).height/2)+" )"),s.select("#"+w.id+" #"+n).attr("data-x-shift",i.node(n).x-i.node(n).width/2),g.querySelectorAll("#"+w.id+" #"+n+" .divider").forEach(p=>{const f=p.parentElement;let S=0,M=0;f&&(f.parentElement&&(S=f.parentElement.getBBox().width),M=parseInt(f.getAttribute("data-x-shift"),10),Number.isNaN(M)&&(M=0)),p.setAttribute("x1",0-M+8),p.setAttribute("x2",S-M-8)})):b.debug("No Node "+n+": "+JSON.stringify(i.node(n)))});let E=w.getBBox();i.edges().forEach(function(n){n!==void 0&&i.edge(n)!==void 0&&(b.debug("Edge "+n.v+" -> "+n.w+": "+JSON.stringify(i.edge(n))),K(a,i.edge(n),i.edge(n).relation))}),E=w.getBBox();const k={id:o||"root",label:o||"root",width:0,height:0};return k.width=E.width+2*B.padding,k.height=E.height+2*B.padding,b.debug("Doc rendered",k,i),k},et={setConf:Q,draw:D},yt={parser:P,db:N,renderer:et,styles:W,init:e=>{e.state||(e.state={}),e.state.arrowMarkerAbsolute=e.arrowMarkerAbsolute,N.clear()}};export{yt as diagram};
