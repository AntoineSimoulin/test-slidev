import{d as L,t as R,aA as H,ac as C,y as x,E as T,o as e,b as l,f as Y,c as I,k as z,l as q,m as N,e as s,q as P,s as K,H as M,a6 as d}from"../modules/vue-DtecLCrU.js";import{$ as V,a8 as j,a9 as $,aa as D,_ as B,ab as S}from"../index-Bm1WKcem.js";import{u as k,p as W,f as X}from"./context-X7p0Zw1G.js";import{I as U}from"./default-CIQNHlGe.js";import"../monaco/bundled-types-C68GSyqj.js";import"../modules/file-saver-DY7lxZlc.js";import"../modules/shiki-CqIg3mkY.js";const F=L({__name:"KaTexBlockWrapper",props:{ranges:{type:Array,default:()=>[]},finally:{type:[String,Number],default:"last"},startLine:{type:Number,default:1},at:{type:[String,Number],default:"+1"}},setup(g){const t=g,{$clicksContext:a}=k(),n=R(),u=V();return H(()=>{a.unregister(u)}),C(()=>{var v;if(!a||!((v=t.ranges)!=null&&v.length))return;const h=a.calculateSince(t.at,t.ranges.length-1);a.register(u,h);const p=x(()=>Math.max(0,a.current-h.start+1)),y=x(()=>t.finally==="last"?t.ranges.at(-1):t.finally.toString());T(()=>{if(!n.value)return;let r=t.ranges[p.value]??y.value;const w=r==="hide";n.value.classList.toggle(j,w),w&&(r=t.ranges[p.value+1]??y.value);const f=n.value.querySelectorAll(".mtable > [class*=col-align]");if(!f)return;const A=Array.from(f).map(o=>Array.from(o.querySelectorAll(":scope > .vlist-t > .vlist-r > .vlist > span > .mord"))),i=[];for(const o of A)o.forEach((m,c)=>{m&&(Array.isArray(i[c])?i[c].push(m):i[c]=[m])});const b=t.startLine,E=$(i.length+b-1,r);i.forEach((o,m)=>{const c=E.includes(m+b);o.forEach(_=>{_.classList.toggle(D,!0),_.classList.toggle("highlighted",c),_.classList.toggle("dishonored",!c)})})})}),(h,p)=>(e(),l("div",{ref_key:"el",ref:n,class:"slidev-katex-wrapper"},[Y(h.$slots,"default")],512))}}),G=B(F,[["__file","/Users/antoine/Documents/slide-dev-test/slidev/node_modules/@slidev/client/builtin/KaTexBlockWrapper.vue"]]),O=s("h1",null,"LaTeX",-1),J=s("p",null,[d("LaTeX is supported out-of-box powered by "),s("a",{href:"https://katex.org/",target:"_blank",rel:"noopener"},"KaTeX"),d(".")],-1),Q=s("br",null,null,-1),Z=s("p",null,[d("Inline "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("msqrt",null,[s("mrow",null,[s("mn",null,"3"),s("mi",null,"x"),s("mo",null,"−"),s("mn",null,"1")])]),s("mo",null,"+"),s("mo",{stretchy:"false"},"("),s("mn",null,"1"),s("mo",null,"+"),s("mi",null,"x"),s("msup",null,[s("mo",{stretchy:"false"},")"),s("mn",null,"2")])]),s("annotation",{encoding:"application/x-tex"},"\\sqrt{3x-1}+(1+x)^2")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1.04em","vertical-align":"-0.1744em"}}),s("span",{class:"mord sqrt"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.8656em"}},[s("span",{class:"svg-align",style:{top:"-3em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord",style:{"padding-left":"0.833em"}},[s("span",{class:"mord"},"3"),s("span",{class:"mord mathnormal"},"x"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"−"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mord"},"1")])]),s("span",{style:{top:"-2.8256em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"hide-tail",style:{"min-width":"0.853em",height:"1.08em"}},[s("svg",{xmlns:"http://www.w3.org/2000/svg",width:"400em",height:"1.08em",viewBox:"0 0 400000 1080",preserveAspectRatio:"xMinYMin slice"},[s("path",{d:`M95,702
c-2.7,0,-7.17,-2.7,-13.5,-8c-5.8,-5.3,-9.5,-10,-9.5,-14
c0,-2,0.3,-3.3,1,-4c1.3,-2.7,23.83,-20.7,67.5,-54
c44.2,-33.3,65.8,-50.3,66.5,-51c1.3,-1.3,3,-2,5,-2c4.7,0,8.7,3.3,12,10
s173,378,173,378c0.7,0,35.3,-71,104,-213c68.7,-142,137.5,-285,206.5,-429
c69,-144,104.5,-217.7,106.5,-221
l0 -0
c5.3,-9.3,12,-14,20,-14
H400000v40H845.2724
s-225.272,467,-225.272,467s-235,486,-235,486c-2.7,4.7,-9,7,-19,7
c-6,0,-10,-1,-12,-3s-194,-422,-194,-422s-65,47,-65,47z
M834 80h400000v40h-400000z`})])])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.1744em"}},[s("span")])])])]),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"+"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mopen"},"("),s("span",{class:"mord"},"1"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"+"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1.0641em","vertical-align":"-0.25em"}}),s("span",{class:"mord mathnormal"},"x"),s("span",{class:"mclose"},[s("span",{class:"mclose"},")"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.8141em"}},[s("span",{style:{top:"-3.063em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},"2")])])])])])])])])])])],-1),ss=s("p",null,"Block",-1),ts={class:"katex-display"},es={class:"katex"},ls=s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},[s("semantics",null,[s("mtable",{rowspacing:"0.16em",columnalign:"center",columnspacing:"1em"},[s("mtr",null,[s("mtd",null,[s("mstyle",{scriptlevel:"0",displaystyle:"false"},[s("mrow",null,[s("mi",{mathvariant:"normal"},"∇"),s("mo",null,"×"),s("mover",{accent:"true"},[s("mi",{mathvariant:"bold"},"B"),s("mo",null,"⃗")]),s("mo",null,"−"),s("mtext",null," "),s("mfrac",null,[s("mn",null,"1"),s("mi",null,"c")]),s("mtext",null," "),s("mfrac",null,[s("mrow",null,[s("mi",{mathvariant:"normal"},"∂"),s("mover",{accent:"true"},[s("mi",{mathvariant:"bold"},"E"),s("mo",null,"⃗")])]),s("mrow",null,[s("mi",{mathvariant:"normal"},"∂"),s("mi",null,"t")])])])])]),s("mtd",null,[s("mstyle",{scriptlevel:"0",displaystyle:"false"},[s("mrow",null,[s("mo",null,"="),s("mfrac",null,[s("mrow",null,[s("mn",null,"4"),s("mi",null,"π")]),s("mi",null,"c")]),s("mover",{accent:"true"},[s("mi",{mathvariant:"bold"},"j"),s("mo",null,"⃗")]),s("mi",{mathvariant:"normal"},"∇"),s("mo",null,"⋅"),s("mover",{accent:"true"},[s("mi",{mathvariant:"bold"},"E"),s("mo",null,"⃗")])])])]),s("mtd",null,[s("mstyle",{scriptlevel:"0",displaystyle:"false"},[s("mrow",null,[s("mo",null,"="),s("mn",null,"4"),s("mi",null,"π"),s("mi",null,"ρ")])])])]),s("mtr",null,[s("mtd",null,[s("mstyle",{scriptlevel:"0",displaystyle:"false"},[s("mrow",null,[s("mi",{mathvariant:"normal"},"∇"),s("mo",null,"×"),s("mover",{accent:"true"},[s("mi",{mathvariant:"bold"},"E"),s("mo",null,"⃗")]),s("mtext",null," "),s("mo",null,"+"),s("mtext",null," "),s("mfrac",null,[s("mn",null,"1"),s("mi",null,"c")]),s("mtext",null," "),s("mfrac",null,[s("mrow",null,[s("mi",{mathvariant:"normal"},"∂"),s("mover",{accent:"true"},[s("mi",{mathvariant:"bold"},"B"),s("mo",null,"⃗")])]),s("mrow",null,[s("mi",{mathvariant:"normal"},"∂"),s("mi",null,"t")])])])])]),s("mtd",null,[s("mstyle",{scriptlevel:"0",displaystyle:"false"},[s("mrow",null,[s("mo",null,"="),s("mover",{accent:"true"},[s("mn",{mathvariant:"bold"},"0"),s("mo",null,"⃗")])])])])]),s("mtr",null,[s("mtd",null,[s("mstyle",{scriptlevel:"0",displaystyle:"false"},[s("mrow",null,[s("mi",{mathvariant:"normal"},"∇"),s("mo",null,"⋅"),s("mover",{accent:"true"},[s("mi",{mathvariant:"bold"},"B"),s("mo",null,"⃗")])])])]),s("mtd",null,[s("mstyle",{scriptlevel:"0",displaystyle:"false"},[s("mrow",null,[s("mo",null,"="),s("mn",null,"0")])])])])]),s("annotation",{encoding:"application/x-tex"},"\\begin{array}{c} \\nabla \\times \\vec{\\mathbf{B}} -\\, \\frac1c\\, \\frac{\\partial\\vec{\\mathbf{E}}}{\\partial t} & = \\frac{4\\pi}{c}\\vec{\\mathbf{j}} \\nabla \\cdot \\vec{\\mathbf{E}} & = 4 \\pi \\rho \\\\ \\nabla \\times \\vec{\\mathbf{E}}\\, +\\, \\frac1c\\, \\frac{\\partial\\vec{\\mathbf{B}}}{\\partial t} & = \\vec{\\mathbf{0}} \\\\ \\nabla \\cdot \\vec{\\mathbf{B}} & = 0 \\end{array} ")])])],-1),as={class:"katex-html","aria-hidden":"true"},ns={class:"base"},cs=s("span",{class:"strut",style:{height:"4.1939em","vertical-align":"-1.8469em"}},null,-1),is={class:"mord"},os={class:"mtable"},ms=s("span",{class:"arraycolsep",style:{width:"0.5em"}},null,-1),hs={class:"col-align-c"},ps={class:"vlist-t vlist-t2"},rs={class:"vlist-r"},_s={class:"vlist",style:{height:"2.3469em"}},ds={style:{top:"-4.3469em"}},gs=s("span",{class:"pstrut",style:{height:"3.0724em"}},null,-1),us={class:"mord"},ys=s("span",{class:"mord"},"∇",-1),vs=s("span",{class:"mspace",style:{"margin-right":"0.2222em"}},null,-1),ws=s("span",{class:"mbin"},"×",-1),fs=s("span",{class:"mspace",style:{"margin-right":"0.2222em"}},null,-1),bs={class:"mord accent"},xs={class:"vlist-t"},zs={class:"vlist-r"},Ms={class:"vlist",style:{height:"0.9691em"}},Ss=s("span",{style:{top:"-3em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord mathbf"},"B")],-1),Bs={style:{top:"-3.2551em"}},ks=s("span",{class:"pstrut",style:{height:"3em"}},null,-1),As={class:"accent-body",style:{left:"-0.1522em"}},Es={class:"overlay",style:{height:"0.714em",width:"0.471em"}},Ls={xmlns:"http://www.w3.org/2000/svg",width:"0.471em",height:"0.714em",style:{width:"0.471em"},viewBox:"0 0 471 714",preserveAspectRatio:"xMinYMin"},Rs=s("path",{d:`M377 20c0-5.333 1.833-10 5.5-14S391 0 397 0c4.667 0 8.667 1.667 12 5
3.333 2.667 6.667 9 10 19 6.667 24.667 20.333 43.667 41 57 7.333 4.667 11
10.667 11 18 0 6-1 10-3 12s-6.667 5-14 9c-28.667 14.667-53.667 35.667-75 63
-1.333 1.333-3.167 3.5-5.5 6.5s-4 4.833-5 5.5c-1 .667-2.5 1.333-4.5 2s-4.333 1
-7 1c-4.667 0-9.167-1.833-13.5-5.5S337 184 337 178c0-12.667 15.667-32.333 47-59
H213l-171-1c-8.667-6-13-12.333-13-19 0-4.667 4.333-11.333 13-20h359
c-16-25.333-24-45-24-59z`},null,-1),Hs=[Rs],Cs=s("span",{class:"mspace",style:{"margin-right":"0.2222em"}},null,-1),Ts=s("span",{class:"mbin"},"−",-1),Ys=s("span",{class:"mspace",style:{"margin-right":"0.1667em"}},null,-1),Is=s("span",{class:"mspace",style:{"margin-right":"0.2222em"}},null,-1),qs=s("span",{class:"mord"},[s("span",{class:"mopen nulldelimiter"}),s("span",{class:"mfrac"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.8451em"}},[s("span",{style:{top:"-2.655em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},[s("span",{class:"mord mathnormal mtight"},"c")])])]),s("span",{style:{top:"-3.23em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"frac-line",style:{"border-bottom-width":"0.04em"}})]),s("span",{style:{top:"-3.394em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},[s("span",{class:"mord mtight"},"1")])])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.345em"}},[s("span")])])])]),s("span",{class:"mclose nulldelimiter"})],-1),Ns=s("span",{class:"mspace",style:{"margin-right":"0.1667em"}},null,-1),Ps={class:"mord"},Ks=s("span",{class:"mopen nulldelimiter"},null,-1),Vs={class:"mfrac"},js={class:"vlist-t vlist-t2"},$s={class:"vlist-r"},Ds={class:"vlist",style:{height:"1.0724em"}},Ws=s("span",{style:{top:"-2.655em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},[s("span",{class:"mord mtight",style:{"margin-right":"0.05556em"}},"∂"),s("span",{class:"mord mathnormal mtight"},"t")])])],-1),Xs=s("span",{style:{top:"-3.23em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"frac-line",style:{"border-bottom-width":"0.04em"}})],-1),Us={style:{top:"-3.394em"}},Fs=s("span",{class:"pstrut",style:{height:"3em"}},null,-1),Gs={class:"sizing reset-size6 size3 mtight"},Os={class:"mord mtight"},Js=s("span",{class:"mord mtight",style:{"margin-right":"0.05556em"}},"∂",-1),Qs={class:"mord accent mtight"},Zs={class:"vlist-t"},st={class:"vlist-r"},tt={class:"vlist",style:{height:"0.9691em"}},et=s("span",{style:{top:"-2.714em"}},[s("span",{class:"pstrut",style:{height:"2.714em"}}),s("span",{class:"mord mathbf mtight"},"E")],-1),lt={style:{top:"-2.9691em"}},at=s("span",{class:"pstrut",style:{height:"2.714em"}},null,-1),nt={class:"accent-body",style:{left:"-0.1522em"}},ct={class:"overlay mtight",style:{height:"0.714em",width:"0.471em"}},it={xmlns:"http://www.w3.org/2000/svg",width:"0.471em",height:"0.714em",style:{width:"0.471em"},viewBox:"0 0 471 714",preserveAspectRatio:"xMinYMin"},ot=s("path",{d:`M377 20c0-5.333 1.833-10 5.5-14S391 0 397 0c4.667 0 8.667 1.667 12 5
3.333 2.667 6.667 9 10 19 6.667 24.667 20.333 43.667 41 57 7.333 4.667 11
10.667 11 18 0 6-1 10-3 12s-6.667 5-14 9c-28.667 14.667-53.667 35.667-75 63
-1.333 1.333-3.167 3.5-5.5 6.5s-4 4.833-5 5.5c-1 .667-2.5 1.333-4.5 2s-4.333 1
-7 1c-4.667 0-9.167-1.833-13.5-5.5S337 184 337 178c0-12.667 15.667-32.333 47-59
H213l-171-1c-8.667-6-13-12.333-13-19 0-4.667 4.333-11.333 13-20h359
c-16-25.333-24-45-24-59z`},null,-1),mt=[ot],ht=s("span",{class:"vlist-s"},"​",-1),pt=s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.345em"}},[s("span")])],-1),rt=s("span",{class:"mclose nulldelimiter"},null,-1),_t={style:{top:"-2.9146em"}},dt=s("span",{class:"pstrut",style:{height:"3.0724em"}},null,-1),gt={class:"mord"},ut=s("span",{class:"mord"},"∇",-1),yt=s("span",{class:"mspace",style:{"margin-right":"0.2222em"}},null,-1),vt=s("span",{class:"mbin"},"×",-1),wt=s("span",{class:"mspace",style:{"margin-right":"0.2222em"}},null,-1),ft={class:"mord accent"},bt={class:"vlist-t"},xt={class:"vlist-r"},zt={class:"vlist",style:{height:"0.9691em"}},Mt=s("span",{style:{top:"-3em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord mathbf"},"E")],-1),St={style:{top:"-3.2551em"}},Bt=s("span",{class:"pstrut",style:{height:"3em"}},null,-1),kt={class:"accent-body",style:{left:"-0.1522em"}},At={class:"overlay",style:{height:"0.714em",width:"0.471em"}},Et={xmlns:"http://www.w3.org/2000/svg",width:"0.471em",height:"0.714em",style:{width:"0.471em"},viewBox:"0 0 471 714",preserveAspectRatio:"xMinYMin"},Lt=s("path",{d:`M377 20c0-5.333 1.833-10 5.5-14S391 0 397 0c4.667 0 8.667 1.667 12 5
3.333 2.667 6.667 9 10 19 6.667 24.667 20.333 43.667 41 57 7.333 4.667 11
10.667 11 18 0 6-1 10-3 12s-6.667 5-14 9c-28.667 14.667-53.667 35.667-75 63
-1.333 1.333-3.167 3.5-5.5 6.5s-4 4.833-5 5.5c-1 .667-2.5 1.333-4.5 2s-4.333 1
-7 1c-4.667 0-9.167-1.833-13.5-5.5S337 184 337 178c0-12.667 15.667-32.333 47-59
H213l-171-1c-8.667-6-13-12.333-13-19 0-4.667 4.333-11.333 13-20h359
c-16-25.333-24-45-24-59z`},null,-1),Rt=[Lt],Ht=s("span",{class:"mspace",style:{"margin-right":"0.1667em"}},null,-1),Ct=s("span",{class:"mspace",style:{"margin-right":"0.2222em"}},null,-1),Tt=s("span",{class:"mbin"},"+",-1),Yt=s("span",{class:"mspace",style:{"margin-right":"0.1667em"}},null,-1),It=s("span",{class:"mspace",style:{"margin-right":"0.2222em"}},null,-1),qt=s("span",{class:"mord"},[s("span",{class:"mopen nulldelimiter"}),s("span",{class:"mfrac"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.8451em"}},[s("span",{style:{top:"-2.655em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},[s("span",{class:"mord mathnormal mtight"},"c")])])]),s("span",{style:{top:"-3.23em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"frac-line",style:{"border-bottom-width":"0.04em"}})]),s("span",{style:{top:"-3.394em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},[s("span",{class:"mord mtight"},"1")])])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.345em"}},[s("span")])])])]),s("span",{class:"mclose nulldelimiter"})],-1),Nt=s("span",{class:"mspace",style:{"margin-right":"0.1667em"}},null,-1),Pt={class:"mord"},Kt=s("span",{class:"mopen nulldelimiter"},null,-1),Vt={class:"mfrac"},jt={class:"vlist-t vlist-t2"},$t={class:"vlist-r"},Dt={class:"vlist",style:{height:"1.0724em"}},Wt=s("span",{style:{top:"-2.655em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},[s("span",{class:"mord mtight",style:{"margin-right":"0.05556em"}},"∂"),s("span",{class:"mord mathnormal mtight"},"t")])])],-1),Xt=s("span",{style:{top:"-3.23em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"frac-line",style:{"border-bottom-width":"0.04em"}})],-1),Ut={style:{top:"-3.394em"}},Ft=s("span",{class:"pstrut",style:{height:"3em"}},null,-1),Gt={class:"sizing reset-size6 size3 mtight"},Ot={class:"mord mtight"},Jt=s("span",{class:"mord mtight",style:{"margin-right":"0.05556em"}},"∂",-1),Qt={class:"mord accent mtight"},Zt={class:"vlist-t"},se={class:"vlist-r"},te={class:"vlist",style:{height:"0.9691em"}},ee=s("span",{style:{top:"-2.714em"}},[s("span",{class:"pstrut",style:{height:"2.714em"}}),s("span",{class:"mord mathbf mtight"},"B")],-1),le={style:{top:"-2.9691em"}},ae=s("span",{class:"pstrut",style:{height:"2.714em"}},null,-1),ne={class:"accent-body",style:{left:"-0.1522em"}},ce={class:"overlay mtight",style:{height:"0.714em",width:"0.471em"}},ie={xmlns:"http://www.w3.org/2000/svg",width:"0.471em",height:"0.714em",style:{width:"0.471em"},viewBox:"0 0 471 714",preserveAspectRatio:"xMinYMin"},oe=s("path",{d:`M377 20c0-5.333 1.833-10 5.5-14S391 0 397 0c4.667 0 8.667 1.667 12 5
3.333 2.667 6.667 9 10 19 6.667 24.667 20.333 43.667 41 57 7.333 4.667 11
10.667 11 18 0 6-1 10-3 12s-6.667 5-14 9c-28.667 14.667-53.667 35.667-75 63
-1.333 1.333-3.167 3.5-5.5 6.5s-4 4.833-5 5.5c-1 .667-2.5 1.333-4.5 2s-4.333 1
-7 1c-4.667 0-9.167-1.833-13.5-5.5S337 184 337 178c0-12.667 15.667-32.333 47-59
H213l-171-1c-8.667-6-13-12.333-13-19 0-4.667 4.333-11.333 13-20h359
c-16-25.333-24-45-24-59z`},null,-1),me=[oe],he=s("span",{class:"vlist-s"},"​",-1),pe=s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.345em"}},[s("span")])],-1),re=s("span",{class:"mclose nulldelimiter"},null,-1),_e={style:{top:"-1.5854em"}},de=s("span",{class:"pstrut",style:{height:"3.0724em"}},null,-1),ge={class:"mord"},ue=s("span",{class:"mord"},"∇",-1),ye=s("span",{class:"mspace",style:{"margin-right":"0.2222em"}},null,-1),ve=s("span",{class:"mbin"},"⋅",-1),we=s("span",{class:"mspace",style:{"margin-right":"0.2222em"}},null,-1),fe={class:"mord accent"},be={class:"vlist-t"},xe={class:"vlist-r"},ze={class:"vlist",style:{height:"0.9691em"}},Me=s("span",{style:{top:"-3em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord mathbf"},"B")],-1),Se={style:{top:"-3.2551em"}},Be=s("span",{class:"pstrut",style:{height:"3em"}},null,-1),ke={class:"accent-body",style:{left:"-0.1522em"}},Ae={class:"overlay",style:{height:"0.714em",width:"0.471em"}},Ee={xmlns:"http://www.w3.org/2000/svg",width:"0.471em",height:"0.714em",style:{width:"0.471em"},viewBox:"0 0 471 714",preserveAspectRatio:"xMinYMin"},Le=s("path",{d:`M377 20c0-5.333 1.833-10 5.5-14S391 0 397 0c4.667 0 8.667 1.667 12 5
3.333 2.667 6.667 9 10 19 6.667 24.667 20.333 43.667 41 57 7.333 4.667 11
10.667 11 18 0 6-1 10-3 12s-6.667 5-14 9c-28.667 14.667-53.667 35.667-75 63
-1.333 1.333-3.167 3.5-5.5 6.5s-4 4.833-5 5.5c-1 .667-2.5 1.333-4.5 2s-4.333 1
-7 1c-4.667 0-9.167-1.833-13.5-5.5S337 184 337 178c0-12.667 15.667-32.333 47-59
H213l-171-1c-8.667-6-13-12.333-13-19 0-4.667 4.333-11.333 13-20h359
c-16-25.333-24-45-24-59z`},null,-1),Re=[Le],He=s("span",{class:"vlist-s"},"​",-1),Ce=s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"1.8469em"}},[s("span")])],-1),Te=s("span",{class:"arraycolsep",style:{width:"0.5em"}},null,-1),Ye=s("span",{class:"arraycolsep",style:{width:"0.5em"}},null,-1),Ie={class:"col-align-c"},qe={class:"vlist-t vlist-t2"},Ne={class:"vlist-r"},Pe={class:"vlist",style:{height:"2.3469em"}},Ke={style:{top:"-4.3469em"}},Ve=s("span",{class:"pstrut",style:{height:"3.0724em"}},null,-1),je={class:"mord"},$e=s("span",{class:"mrel"},"=",-1),De=s("span",{class:"mspace",style:{"margin-right":"0.2778em"}},null,-1),We=s("span",{class:"mord"},[s("span",{class:"mopen nulldelimiter"}),s("span",{class:"mfrac"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.8451em"}},[s("span",{style:{top:"-2.655em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},[s("span",{class:"mord mathnormal mtight"},"c")])])]),s("span",{style:{top:"-3.23em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"frac-line",style:{"border-bottom-width":"0.04em"}})]),s("span",{style:{top:"-3.394em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},[s("span",{class:"mord mtight"},"4"),s("span",{class:"mord mathnormal mtight",style:{"margin-right":"0.03588em"}},"π")])])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.345em"}},[s("span")])])])]),s("span",{class:"mclose nulldelimiter"})],-1),Xe={class:"mord accent"},Ue={class:"vlist-t vlist-t2"},Fe={class:"vlist-r"},Ge={class:"vlist",style:{height:"0.9774em"}},Oe=s("span",{style:{top:"-3em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord mathbf"},"j")],-1),Je={style:{top:"-3.2634em"}},Qe=s("span",{class:"pstrut",style:{height:"3em"}},null,-1),Ze={class:"accent-body",style:{left:"-0.2355em"}},sl={class:"overlay",style:{height:"0.714em",width:"0.471em"}},tl={xmlns:"http://www.w3.org/2000/svg",width:"0.471em",height:"0.714em",style:{width:"0.471em"},viewBox:"0 0 471 714",preserveAspectRatio:"xMinYMin"},el=s("path",{d:`M377 20c0-5.333 1.833-10 5.5-14S391 0 397 0c4.667 0 8.667 1.667 12 5
3.333 2.667 6.667 9 10 19 6.667 24.667 20.333 43.667 41 57 7.333 4.667 11
10.667 11 18 0 6-1 10-3 12s-6.667 5-14 9c-28.667 14.667-53.667 35.667-75 63
-1.333 1.333-3.167 3.5-5.5 6.5s-4 4.833-5 5.5c-1 .667-2.5 1.333-4.5 2s-4.333 1
-7 1c-4.667 0-9.167-1.833-13.5-5.5S337 184 337 178c0-12.667 15.667-32.333 47-59
H213l-171-1c-8.667-6-13-12.333-13-19 0-4.667 4.333-11.333 13-20h359
c-16-25.333-24-45-24-59z`},null,-1),ll=[el],al=s("span",{class:"vlist-s"},"​",-1),nl=s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.1944em"}},[s("span")])],-1),cl=s("span",{class:"mord"},"∇",-1),il=s("span",{class:"mspace",style:{"margin-right":"0.2222em"}},null,-1),ol=s("span",{class:"mbin"},"⋅",-1),ml=s("span",{class:"mspace",style:{"margin-right":"0.2222em"}},null,-1),hl={class:"mord accent"},pl={class:"vlist-t"},rl={class:"vlist-r"},_l={class:"vlist",style:{height:"0.9691em"}},dl=s("span",{style:{top:"-3em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord mathbf"},"E")],-1),gl={style:{top:"-3.2551em"}},ul=s("span",{class:"pstrut",style:{height:"3em"}},null,-1),yl={class:"accent-body",style:{left:"-0.1522em"}},vl={class:"overlay",style:{height:"0.714em",width:"0.471em"}},wl={xmlns:"http://www.w3.org/2000/svg",width:"0.471em",height:"0.714em",style:{width:"0.471em"},viewBox:"0 0 471 714",preserveAspectRatio:"xMinYMin"},fl=s("path",{d:`M377 20c0-5.333 1.833-10 5.5-14S391 0 397 0c4.667 0 8.667 1.667 12 5
3.333 2.667 6.667 9 10 19 6.667 24.667 20.333 43.667 41 57 7.333 4.667 11
10.667 11 18 0 6-1 10-3 12s-6.667 5-14 9c-28.667 14.667-53.667 35.667-75 63
-1.333 1.333-3.167 3.5-5.5 6.5s-4 4.833-5 5.5c-1 .667-2.5 1.333-4.5 2s-4.333 1
-7 1c-4.667 0-9.167-1.833-13.5-5.5S337 184 337 178c0-12.667 15.667-32.333 47-59
H213l-171-1c-8.667-6-13-12.333-13-19 0-4.667 4.333-11.333 13-20h359
c-16-25.333-24-45-24-59z`},null,-1),bl=[fl],xl={style:{top:"-2.9146em"}},zl=s("span",{class:"pstrut",style:{height:"3.0724em"}},null,-1),Ml={class:"mord"},Sl=s("span",{class:"mrel"},"=",-1),Bl=s("span",{class:"mspace",style:{"margin-right":"0.2778em"}},null,-1),kl={class:"mord accent"},Al={class:"vlist-t"},El={class:"vlist-r"},Ll={class:"vlist",style:{height:"0.9274em"}},Rl=s("span",{style:{top:"-3em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord mathbf"},"0")],-1),Hl={style:{top:"-3.2134em"}},Cl=s("span",{class:"pstrut",style:{height:"3em"}},null,-1),Tl={class:"accent-body",style:{left:"-0.2355em"}},Yl={class:"overlay",style:{height:"0.714em",width:"0.471em"}},Il={xmlns:"http://www.w3.org/2000/svg",width:"0.471em",height:"0.714em",style:{width:"0.471em"},viewBox:"0 0 471 714",preserveAspectRatio:"xMinYMin"},ql=s("path",{d:`M377 20c0-5.333 1.833-10 5.5-14S391 0 397 0c4.667 0 8.667 1.667 12 5
3.333 2.667 6.667 9 10 19 6.667 24.667 20.333 43.667 41 57 7.333 4.667 11
10.667 11 18 0 6-1 10-3 12s-6.667 5-14 9c-28.667 14.667-53.667 35.667-75 63
-1.333 1.333-3.167 3.5-5.5 6.5s-4 4.833-5 5.5c-1 .667-2.5 1.333-4.5 2s-4.333 1
-7 1c-4.667 0-9.167-1.833-13.5-5.5S337 184 337 178c0-12.667 15.667-32.333 47-59
H213l-171-1c-8.667-6-13-12.333-13-19 0-4.667 4.333-11.333 13-20h359
c-16-25.333-24-45-24-59z`},null,-1),Nl=[ql],Pl=s("span",{style:{top:"-1.5854em"}},[s("span",{class:"pstrut",style:{height:"3.0724em"}}),s("span",{class:"mord"},[s("span",{class:"mrel"},"="),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mord"},"0")])],-1),Kl=s("span",{class:"vlist-s"},"​",-1),Vl=s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"1.8469em"}},[s("span")])],-1),jl=s("span",{class:"arraycolsep",style:{width:"0.5em"}},null,-1),$l=s("span",{class:"arraycolsep",style:{width:"0.5em"}},null,-1),Dl=s("span",{class:"col-align-c"},[s("span",{class:"vlist-t"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"2.3469em"}},[s("span",{style:{top:"-4.3469em"}},[s("span",{class:"pstrut",style:{height:"3.0724em"}}),s("span",{class:"mord"},[s("span",{class:"mrel"},"="),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mord"},"4"),s("span",{class:"mord mathnormal",style:{"margin-right":"0.03588em"}},"π"),s("span",{class:"mord mathnormal"},"ρ")])])])])])],-1),Wl=s("span",{class:"arraycolsep",style:{width:"0.5em"}},null,-1),Xl=s("br",null,null,-1),Ul=s("p",null,[s("a",{href:"https://sli.dev/guide/syntax#latex",target:"_blank",rel:"noopener"},"Learn more")],-1),Fl={__name:"11",setup(g){return W(S),k(),(t,a)=>{const n=G;return e(),I(U,P(K(M(X)(M(S),10))),{default:z(()=>[O,J,Q,Z,ss,q(n,N({},{ranges:["1","3","all"]}),{default:z(()=>[s("p",null,[s("span",ts,[s("span",es,[ls,s("span",as,[s("span",ns,[cs,s("span",is,[s("span",os,[ms,s("span",hs,[s("span",ps,[s("span",rs,[s("span",_s,[s("span",ds,[gs,s("span",us,[ys,vs,ws,fs,s("span",bs,[s("span",xs,[s("span",zs,[s("span",Ms,[Ss,s("span",Bs,[ks,s("span",As,[s("span",Es,[(e(),l("svg",Ls,[...Hs]))])])])])])])]),Cs,Ts,Ys,Is,qs,Ns,s("span",Ps,[Ks,s("span",Vs,[s("span",js,[s("span",$s,[s("span",Ds,[Ws,Xs,s("span",Us,[Fs,s("span",Gs,[s("span",Os,[Js,s("span",Qs,[s("span",Zs,[s("span",st,[s("span",tt,[et,s("span",lt,[at,s("span",nt,[s("span",ct,[(e(),l("svg",it,[...mt]))])])])])])])])])])])]),ht]),pt])]),rt])])]),s("span",_t,[dt,s("span",gt,[ut,yt,vt,wt,s("span",ft,[s("span",bt,[s("span",xt,[s("span",zt,[Mt,s("span",St,[Bt,s("span",kt,[s("span",At,[(e(),l("svg",Et,[...Rt]))])])])])])])]),Ht,Ct,Tt,Yt,It,qt,Nt,s("span",Pt,[Kt,s("span",Vt,[s("span",jt,[s("span",$t,[s("span",Dt,[Wt,Xt,s("span",Ut,[Ft,s("span",Gt,[s("span",Ot,[Jt,s("span",Qt,[s("span",Zt,[s("span",se,[s("span",te,[ee,s("span",le,[ae,s("span",ne,[s("span",ce,[(e(),l("svg",ie,[...me]))])])])])])])])])])])]),he]),pe])]),re])])]),s("span",_e,[de,s("span",ge,[ue,ye,ve,we,s("span",fe,[s("span",be,[s("span",xe,[s("span",ze,[Me,s("span",Se,[Be,s("span",ke,[s("span",Ae,[(e(),l("svg",Ee,[...Re]))])])])])])])])])])]),He]),Ce])]),Te,Ye,s("span",Ie,[s("span",qe,[s("span",Ne,[s("span",Pe,[s("span",Ke,[Ve,s("span",je,[$e,De,We,s("span",Xe,[s("span",Ue,[s("span",Fe,[s("span",Ge,[Oe,s("span",Je,[Qe,s("span",Ze,[s("span",sl,[(e(),l("svg",tl,[...ll]))])])])]),al]),nl])]),cl,il,ol,ml,s("span",hl,[s("span",pl,[s("span",rl,[s("span",_l,[dl,s("span",gl,[ul,s("span",yl,[s("span",vl,[(e(),l("svg",wl,[...bl]))])])])])])])])])]),s("span",xl,[zl,s("span",Ml,[Sl,Bl,s("span",kl,[s("span",Al,[s("span",El,[s("span",Ll,[Rl,s("span",Hl,[Cl,s("span",Tl,[s("span",Yl,[(e(),l("svg",Il,[...Nl]))])])])])])])])])]),Pl]),Kl]),Vl])]),jl,$l,Dl,Wl])])])])])])])]),_:1},16),Xl,Ul]),_:1},16)}}},ea=B(Fl,[["__file","/@slidev/slides/11.md"]]);export{ea as default};
