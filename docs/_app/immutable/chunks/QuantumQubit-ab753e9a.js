import{S as Rt,i as Kt,s as Ut,F as Ba,l as i,a as Be,m as l,p as h,c as Ie,h as s,q as Zt,b as S,H as e,L as m,I as Ia,J as ja,K as Qa,f as z,t as re,M as Jt,N as Ca,a3 as za,n as Fa,u as r,x as me,v as o,y as ce,z as fe,C as de}from"./index-ca49edcf.js";import{m as f}from"./index-ba7e8b36.js";function Da(t){return t<.5?4*t*t*t:.5*Math.pow(2*t-2,3)+1}function ea(t){const a=t-1;return a*a*a+1}function Wa(t){return--t*t*t*t*t+1}function Tn(t,{delay:a=0,duration:n=400,easing:u=ea}={}){const p=getComputedStyle(t),P=+p.opacity,T=parseFloat(p.height),q=parseFloat(p.paddingTop),w=parseFloat(p.paddingBottom),y=parseFloat(p.marginTop),L=parseFloat(p.marginBottom),be=parseFloat(p.borderTopWidth),x=parseFloat(p.borderBottomWidth);return{delay:a,duration:n,easing:u,css:M=>`overflow: hidden;opacity: ${Math.min(M*20,1)*P};height: ${M*T}px;padding-top: ${M*q}px;padding-bottom: ${M*w}px;margin-top: ${M*y}px;margin-bottom: ${M*L}px;border-top-width: ${M*be}px;border-bottom-width: ${M*x}px;`}}function Ga(t,{delay:a=0,duration:n=400,easing:u=ea,start:p=0,opacity:P=0}={}){const T=getComputedStyle(t),q=+T.opacity,w=T.transform==="none"?"":T.transform,y=1-p,L=q*(1-P);return{delay:a,duration:n,easing:u,css:(be,x)=>`
			transform: ${w} scale(${1-y*x});
			opacity: ${q-L*x}
		`}}function qn(t,{delay:a=0,speed:n,duration:u,easing:p=Da}={}){let P=t.getTotalLength();const T=getComputedStyle(t);return T.strokeLinecap!=="butt"&&(P+=parseInt(T.strokeWidth)),u===void 0?n===void 0?u=800:u=P/n:typeof u=="function"&&(u=u(P)),{delay:a,duration:u,easing:p,css:(q,w)=>`stroke-dasharray: ${q*P} ${w*P}`}}function Yt(t){let a,n;return{c(){a=i("div"),this.h()},l(u){a=l(u,"DIV",{class:!0});var p=h(a);p.forEach(s),this.h()},h(){Zt(a,"class","hover-inner svelte-1eh4gwp")},m(u,p){S(u,a,p),a.innerHTML=t[0]},p(u,p){t=u,p&1&&(a.innerHTML=t[0])},i(u){n||Ca(()=>{n=za(a,Ga,{duration:150,easing:Wa,opacity:0}),n.start()})},o:Fa,d(u){u&&s(a)}}}function Oa(t){let a,n,u,p,P;const T=t[5].default,q=Ba(T,t,t[4],null);let w=t[1]&&Yt(t);return{c(){a=i("span"),q&&q.c(),n=Be(),w&&w.c(),this.h()},l(y){a=l(y,"SPAN",{class:!0});var L=h(a);q&&q.l(L),n=Ie(L),w&&w.l(L),L.forEach(s),this.h()},h(){Zt(a,"class","hover-outer svelte-1eh4gwp")},m(y,L){S(y,a,L),q&&q.m(a,null),e(a,n),w&&w.m(a,null),u=!0,p||(P=[m(a,"mouseenter",t[2]),m(a,"mouseleave",t[3])],p=!0)},p(y,[L]){q&&q.p&&(!u||L&16)&&Ia(q,T,y,y[4],u?Qa(T,y[4],L,null):ja(y[4]),null),y[1]?w?(w.p(y,L),L&2&&z(w,1)):(w=Yt(y),w.c(),z(w,1),w.m(a,null)):w&&(w.d(1),w=null)},i(y){u||(z(q,y),z(w),u=!0)},o(y){re(q,y),u=!1},d(y){y&&s(a),q&&q.d(y),w&&w.d(),p=!1,Jt(P)}}}function Ra(t,a,n){let{$$slots:u={},$$scope:p}=a,{hovertext:P}=a,T=!1;const q=()=>n(1,T=!0),w=()=>n(1,T=!1);return t.$$set=y=>{"hovertext"in y&&n(0,P=y.hovertext),"$$scope"in y&&n(4,p=y.$$scope)},[P,T,q,w,p,u]}class _e extends Rt{constructor(a){super(),Kt(this,a,Ra,Oa,Ut,{hovertext:0})}}const Ka='<a href="https://en.wikipedia.org/wiki/Projection_(linear_algebra)"><h3>Projection (linear algebra)</h3></a><p>In linear algebra and functional analysis, a <b>projection</b> is a linear transformation <span class="mwe-math-element"><img src="https://wikimedia.org/api/rest_v1/media/math/render/svg/b4dc73bf40314945ff376bd363916a738548d40a" class="mwe-math-fallback-image-inline" aria-hidden="true" style="vertical-align:-0.338ex;width:1.745ex;height:2.176ex" /></span> from a vector space to itself such that <span class="mwe-math-element"><img src="https://wikimedia.org/api/rest_v1/media/math/render/svg/5369d895625034bc50c9f28975e3293ef6f2105b" class="mwe-math-fallback-image-inline" aria-hidden="true" style="vertical-align:-0.338ex;width:10.529ex;height:2.176ex" /></span>. That is, whenever <span class="mwe-math-element"><img src="https://wikimedia.org/api/rest_v1/media/math/render/svg/b4dc73bf40314945ff376bd363916a738548d40a" class="mwe-math-fallback-image-inline" aria-hidden="true" style="vertical-align:-0.338ex;width:1.745ex;height:2.176ex" /></span> is applied twice to any vector, it gives the same result as if it were applied once. It leaves its image unchanged. This definition of "projection" formalizes and generalizes the idea of graphical projection. One can also consider the effect of a projection on a geometrical object by examining the effect of the projection on points in the object.</p>',Ua='<a href="https://en.wikipedia.org/wiki/Bloch_sphere"><h3>Bloch sphere</h3></a><p>In quantum mechanics and computing, the <b>Bloch sphere</b> is a geometrical representation of the pure state space of a two-level quantum mechanical system (qubit), named after the physicist Felix Bloch.</p>',Ja='<a href="https://en.wikipedia.org/wiki/Degrees_of_freedom"><h3>Degrees of freedom</h3></a><p><b>Degrees of freedom</b> refers to the number of independent variables or parameters of a system. In various scientific fields, the word "freedom" is used to describe the limits to which physical movement or other physical processes are possible. This relates to the philosophical concept to the extent that people may be considered to have as much freedom as they are physically able to exercise.</p>',Xa='<a href="https://en.wikipedia.org/wiki/Phase_factor"><h3>Phase factor</h3></a><p>For any complex number written in polar form, the <b>phase factor</b> is the complex exponential factor. As such, the term "phase factor" is related to the more general term phasor, which may have any magnitude. The phase factor is a unit complex number, i.e. a complex number of absolute value 1. It is commonly used in quantum mechanics.</p>';function Ya(t){let a;return{c(){a=r("projection")},l(n){a=o(n,"projection")},m(n,u){S(n,a,u)},d(n){n&&s(a)}}}function Za(t){let a;return{c(){a=r("Bloch sphere")},l(n){a=o(n,"Bloch sphere")},m(n,u){S(n,a,u)},d(n){n&&s(a)}}}function en(t){let a;return{c(){a=r("degrees of freedom")},l(n){a=o(n,"degrees of freedom")},m(n,u){S(n,a,u)},d(n){n&&s(a)}}}function tn(t){let a;return{c(){a=r("phase")},l(n){a=o(n,"phase")},m(n,u){S(n,a,u)},d(n){n&&s(a)}}}function an(t){let a,n,u,p,P,T,q=f("\\alpha")+"",w,y,L=f("\\beta")+"",be,x,M=f("\\alpha = \\Vert{\\alpha}\\Vert \\cdot e^{i \\phi_{\\alpha}}")+"",je,ae,qe=f("\\beta = \\Vert{\\beta}\\Vert \\cdot e^{i \\phi_{\\beta}}.")+"",N,B,Ye=f("\\Vert{\\alpha}\\Vert \\cdot e^{i \\phi_{\\alpha}} |0\\rangle + \\Vert{\\beta}\\Vert \\cdot e^{i \\phi_{\\beta}} |1\\rangle.")+"",ne,k,Se,F,dt=f("e^{i \\phi_{\\alpha}}")+"",ke,j,Ze=f("\\Vert{e^{i \\phi_{\\alpha}}}\\Vert^2")+"",ye,d,et=f("1.")+"",oe,$e,tt=f("\\phi_{\\alpha}")+"",ie,Te,lt=f("\\phi_{\\beta}")+"",se,ve,we=f("e^{i \\phi_{\\alpha}}")+"",Qe,G,yt=f("\\Vert{\\alpha}\\Vert \\cdot |0\\rangle + \\Vert{\\beta}\\Vert \\cdot \\frac{e^{i \\phi_{\\beta}}}{e^{i \\phi_{\\alpha}}} |1\\rangle.")+"",Ce,O,$t=f("\\frac{e^{i \\phi_{\\beta}}}{e^{i \\phi_{\\alpha}}} = e^{i (\\phi_{\\beta} - \\phi_{\\alpha})}.")+"",ze,R,Tt=f("\\phi = \\phi_{\\beta} - \\phi_{\\alpha},")+"",Fe,C,ht=f("\\Vert{\\alpha}\\Vert \\cdot |0\\rangle + \\Vert{\\beta}\\Vert \\cdot e^{i \\phi} |1\\rangle.")+"",le,_,De,K,qt=f("\\Vert{\\alpha}\\Vert^2 + \\Vert{\\beta}\\Vert^2 = 1.")+"",We,U,St=f("x")+"",Ge,J,kt=f("y")+"",Oe,X,Ht=f("\\Vert{\\alpha}\\Vert^2")+"",Re,Y,Lt=f("\\Vert{\\beta}\\Vert^2")+"",Ke,Z,Pt=f("\\Vert{\\alpha}\\Vert^2")+"",Ue,ee,Et=f("\\Vert{\\beta}\\Vert^2")+"",Je,te,At=f("\\theta")+"",Xe,he,ut=f("x")+"",at,c,H=f("\\Vert{\\alpha}\\Vert^2 = \\cos{(\\frac{\\theta}{2})}")+"",I,ue,nt=f("\\Vert{\\beta}\\Vert^2 = \\sin{(\\frac{\\theta}{2})}")+"",Q,pe,st=f("\\cos{(\\frac{\\theta}{2})} \\cdot |0 \\rangle + \\sin{(\\frac{\\theta}{2})} \\cdot e^{i \\phi} |1 \\rangle")+"",v,He,Mt=f("\\theta")+"",pt,Le,Nt=f("\\phi.")+"",mt,Pe,Vt=f("\\theta")+"",ct,Ee,xt=f("z")+"",ft,Ae,Bt=f("\\phi")+"",It,Me,jt,rt,ta=f("x-y")+"",Qt,Ne,Ct,_t,D,zt,Ve,Ft,ot,aa=f("\\theta")+"",Dt,it,na=f("\\phi")+"",Wt,xe,Gt,bt,Ot,Xt;return Me=new _e({props:{hovertext:Ka,$$slots:{default:[Ya]},$$scope:{ctx:t}}}),Ne=new _e({props:{hovertext:Ua,$$slots:{default:[Za]},$$scope:{ctx:t}}}),Ve=new _e({props:{hovertext:Ja,$$slots:{default:[en]},$$scope:{ctx:t}}}),xe=new _e({props:{hovertext:Xa,$$slots:{default:[tn]},$$scope:{ctx:t}}}),{c(){a=i("h2"),n=r("The Bloch-sphere"),u=Be(),p=i("p"),P=r("As the coefficients "),T=i("span"),w=r(" and "),y=i("span"),be=r(" are complex numbers, they can be expressed in the form "),x=i("span"),je=r(" and "),ae=i("span"),N=r(" Thus, the state of the qubit can be rewritten as "),B=i("span"),ne=Be(),k=i("p"),Se=r("Remember that "),F=i("span"),ke=r(" is a unit vector rotated around the origin, and therefore the square of its norm "),j=i("span"),ye=r(" also equals "),d=i("span"),oe=r(" This means that we can modify the angles "),$e=i("span"),ie=r(" and "),Te=i("span"),se=r(" freely without affecting the measurement probabilities. Therefore, we can do an algebraic trick to simplify the expression above. Namely, let's divide the state by "),ve=i("span"),Qe=r(" to obtain "),G=i("span"),Ce=r(" By the rules of exponentiation, "),O=i("span"),ze=r(" Next, let's introduce a new variable "),R=i("span"),Fe=r(" with the help of which the state can be further simplified to "),C=i("span"),le=Be(),_=i("p"),De=r("We know that "),K=i("span"),We=r(" Consequently, these two numbers can also be represented geometrically as a vector of unit length, the "),U=i("span"),Ge=r("- and "),J=i("span"),Oe=r("-coordinates of which correspond to "),X=i("span"),Re=r(" and "),Y=i("span"),Ke=r(", respectively. (Note that here, we don't need to use the complex plane, only a regular real plane, as both "),Z=i("span"),Ue=r(" and "),ee=i("span"),Je=r(" are real numbers.) Let's define a new variable "),te=i("span"),Xe=r(" as twice the angle between this vector and the "),he=i("span"),at=r("-axis. Using trigonometry, we find that "),c=i("span"),I=r(" and "),ue=i("span"),Q=r(", which allows us to rewrite the state as "),pe=i("span"),v=r(". Notice that we now only need two variables to express the state of the qubit: the angles "),He=i("span"),pt=r(" and "),Le=i("span"),mt=r(" Geometrically, this can be represented as another vector pointing to the surface of 3-dimensional sphere with unit radius, where "),Pe=i("span"),ct=r(" is the angle of the vector and the "),Ee=i("span"),ft=r(" axis, and "),Ae=i("span"),It=r(" is the angle of the vertical "),me(Me.$$.fragment),jt=r(" of the vector on the "),rt=i("span"),Qt=r(" plane. This representation of qubit states is called the "),me(Ne.$$.fragment),Ct=r("."),_t=Be(),D=i("p"),zt=r("It's important to note that of the two "),me(Ve.$$.fragment),Ft=r(" on the Bloch sphere, only the angle "),ot=i("span"),Dt=r(" is related to measurement probabilities. "),it=i("span"),Wt=r(" is an inherently quantum property called the "),me(xe.$$.fragment),Gt=r(" that does not have any physical manifestation directly observable to us. Because of this, it's hard to find any intuitive analogy from everyday life that could help us understand what exactly the phase is. The most useful approach in this context is to look at the phase as a matematical property of quantum objects that we can leverage to design clever algorithms.")},l(b){a=l(b,"H2",{});var E=h(a);n=o(E,"The Bloch-sphere"),E.forEach(s),u=Ie(b),p=l(b,"P",{});var W=h(p);P=o(W,"As the coefficients "),T=l(W,"SPAN",{});var vt=h(T);vt.forEach(s),w=o(W," and "),y=l(W,"SPAN",{});var wt=h(y);wt.forEach(s),be=o(W," are complex numbers, they can be expressed in the form "),x=l(W,"SPAN",{});var gt=h(x);gt.forEach(s),je=o(W," and "),ae=l(W,"SPAN",{});var sa=h(ae);sa.forEach(s),N=o(W," Thus, the state of the qubit can be rewritten as "),B=l(W,"SPAN",{});var ra=h(B);ra.forEach(s),W.forEach(s),ne=Ie(b),k=l(b,"P",{});var A=h(k);Se=o(A,"Remember that "),F=l(A,"SPAN",{});var oa=h(F);oa.forEach(s),ke=o(A," is a unit vector rotated around the origin, and therefore the square of its norm "),j=l(A,"SPAN",{});var ia=h(j);ia.forEach(s),ye=o(A," also equals "),d=l(A,"SPAN",{});var la=h(d);la.forEach(s),oe=o(A," This means that we can modify the angles "),$e=l(A,"SPAN",{});var ha=h($e);ha.forEach(s),ie=o(A," and "),Te=l(A,"SPAN",{});var ua=h(Te);ua.forEach(s),se=o(A," freely without affecting the measurement probabilities. Therefore, we can do an algebraic trick to simplify the expression above. Namely, let's divide the state by "),ve=l(A,"SPAN",{});var pa=h(ve);pa.forEach(s),Qe=o(A," to obtain "),G=l(A,"SPAN",{});var ma=h(G);ma.forEach(s),Ce=o(A," By the rules of exponentiation, "),O=l(A,"SPAN",{});var ca=h(O);ca.forEach(s),ze=o(A," Next, let's introduce a new variable "),R=l(A,"SPAN",{});var fa=h(R);fa.forEach(s),Fe=o(A," with the help of which the state can be further simplified to "),C=l(A,"SPAN",{});var da=h(C);da.forEach(s),A.forEach(s),le=Ie(b),_=l(b,"P",{});var g=h(_);De=o(g,"We know that "),K=l(g,"SPAN",{});var _a=h(K);_a.forEach(s),We=o(g," Consequently, these two numbers can also be represented geometrically as a vector of unit length, the "),U=l(g,"SPAN",{});var ba=h(U);ba.forEach(s),Ge=o(g,"- and "),J=l(g,"SPAN",{});var va=h(J);va.forEach(s),Oe=o(g,"-coordinates of which correspond to "),X=l(g,"SPAN",{});var wa=h(X);wa.forEach(s),Re=o(g," and "),Y=l(g,"SPAN",{});var ga=h(Y);ga.forEach(s),Ke=o(g,", respectively. (Note that here, we don't need to use the complex plane, only a regular real plane, as both "),Z=l(g,"SPAN",{});var ya=h(Z);ya.forEach(s),Ue=o(g," and "),ee=l(g,"SPAN",{});var $a=h(ee);$a.forEach(s),Je=o(g," are real numbers.) Let's define a new variable "),te=l(g,"SPAN",{});var Ta=h(te);Ta.forEach(s),Xe=o(g," as twice the angle between this vector and the "),he=l(g,"SPAN",{});var qa=h(he);qa.forEach(s),at=o(g,"-axis. Using trigonometry, we find that "),c=l(g,"SPAN",{});var Sa=h(c);Sa.forEach(s),I=o(g," and "),ue=l(g,"SPAN",{});var ka=h(ue);ka.forEach(s),Q=o(g,", which allows us to rewrite the state as "),pe=l(g,"SPAN",{});var Ha=h(pe);Ha.forEach(s),v=o(g,". Notice that we now only need two variables to express the state of the qubit: the angles "),He=l(g,"SPAN",{});var La=h(He);La.forEach(s),pt=o(g," and "),Le=l(g,"SPAN",{});var Pa=h(Le);Pa.forEach(s),mt=o(g," Geometrically, this can be represented as another vector pointing to the surface of 3-dimensional sphere with unit radius, where "),Pe=l(g,"SPAN",{});var Ea=h(Pe);Ea.forEach(s),ct=o(g," is the angle of the vector and the "),Ee=l(g,"SPAN",{});var Aa=h(Ee);Aa.forEach(s),ft=o(g," axis, and "),Ae=l(g,"SPAN",{});var Ma=h(Ae);Ma.forEach(s),It=o(g," is the angle of the vertical "),ce(Me.$$.fragment,g),jt=o(g," of the vector on the "),rt=l(g,"SPAN",{});var Na=h(rt);Na.forEach(s),Qt=o(g," plane. This representation of qubit states is called the "),ce(Ne.$$.fragment,g),Ct=o(g,"."),g.forEach(s),_t=Ie(b),D=l(b,"P",{});var ge=h(D);zt=o(ge,"It's important to note that of the two "),ce(Ve.$$.fragment,ge),Ft=o(ge," on the Bloch sphere, only the angle "),ot=l(ge,"SPAN",{});var Va=h(ot);Va.forEach(s),Dt=o(ge," is related to measurement probabilities. "),it=l(ge,"SPAN",{});var xa=h(it);xa.forEach(s),Wt=o(ge," is an inherently quantum property called the "),ce(xe.$$.fragment,ge),Gt=o(ge," that does not have any physical manifestation directly observable to us. Because of this, it's hard to find any intuitive analogy from everyday life that could help us understand what exactly the phase is. The most useful approach in this context is to look at the phase as a matematical property of quantum objects that we can leverage to design clever algorithms."),ge.forEach(s)},m(b,E){S(b,a,E),e(a,n),S(b,u,E),S(b,p,E),e(p,P),e(p,T),T.innerHTML=q,e(p,w),e(p,y),y.innerHTML=L,e(p,be),e(p,x),x.innerHTML=M,e(p,je),e(p,ae),ae.innerHTML=qe,e(p,N),e(p,B),B.innerHTML=Ye,S(b,ne,E),S(b,k,E),e(k,Se),e(k,F),F.innerHTML=dt,e(k,ke),e(k,j),j.innerHTML=Ze,e(k,ye),e(k,d),d.innerHTML=et,e(k,oe),e(k,$e),$e.innerHTML=tt,e(k,ie),e(k,Te),Te.innerHTML=lt,e(k,se),e(k,ve),ve.innerHTML=we,e(k,Qe),e(k,G),G.innerHTML=yt,e(k,Ce),e(k,O),O.innerHTML=$t,e(k,ze),e(k,R),R.innerHTML=Tt,e(k,Fe),e(k,C),C.innerHTML=ht,S(b,le,E),S(b,_,E),e(_,De),e(_,K),K.innerHTML=qt,e(_,We),e(_,U),U.innerHTML=St,e(_,Ge),e(_,J),J.innerHTML=kt,e(_,Oe),e(_,X),X.innerHTML=Ht,e(_,Re),e(_,Y),Y.innerHTML=Lt,e(_,Ke),e(_,Z),Z.innerHTML=Pt,e(_,Ue),e(_,ee),ee.innerHTML=Et,e(_,Je),e(_,te),te.innerHTML=At,e(_,Xe),e(_,he),he.innerHTML=ut,e(_,at),e(_,c),c.innerHTML=H,e(_,I),e(_,ue),ue.innerHTML=nt,e(_,Q),e(_,pe),pe.innerHTML=st,e(_,v),e(_,He),He.innerHTML=Mt,e(_,pt),e(_,Le),Le.innerHTML=Nt,e(_,mt),e(_,Pe),Pe.innerHTML=Vt,e(_,ct),e(_,Ee),Ee.innerHTML=xt,e(_,ft),e(_,Ae),Ae.innerHTML=Bt,e(_,It),fe(Me,_,null),e(_,jt),e(_,rt),rt.innerHTML=ta,e(_,Qt),fe(Ne,_,null),e(_,Ct),S(b,_t,E),S(b,D,E),e(D,zt),fe(Ve,D,null),e(D,Ft),e(D,ot),ot.innerHTML=aa,e(D,Dt),e(D,it),it.innerHTML=na,e(D,Wt),fe(xe,D,null),e(D,Gt),bt=!0,Ot||(Xt=[m(T,"mouseenter",t[0]),m(y,"mouseenter",t[1]),m(x,"mouseenter",t[2]),m(ae,"mouseenter",t[3]),m(B,"mouseenter",t[4]),m(F,"mouseenter",t[5]),m(j,"mouseenter",t[6]),m(d,"mouseenter",t[7]),m($e,"mouseenter",t[8]),m(Te,"mouseenter",t[9]),m(ve,"mouseenter",t[10]),m(G,"mouseenter",t[11]),m(O,"mouseenter",t[12]),m(R,"mouseenter",t[13]),m(C,"mouseenter",t[14]),m(K,"mouseenter",t[15]),m(U,"mouseenter",t[16]),m(J,"mouseenter",t[17]),m(X,"mouseenter",t[18]),m(Y,"mouseenter",t[19]),m(Z,"mouseenter",t[20]),m(ee,"mouseenter",t[21]),m(te,"mouseenter",t[22]),m(he,"mouseenter",t[23]),m(c,"mouseenter",t[24]),m(ue,"mouseenter",t[25]),m(pe,"mouseenter",t[26]),m(He,"mouseenter",t[27]),m(Le,"mouseenter",t[28]),m(Pe,"mouseenter",t[29]),m(Ee,"mouseenter",t[30]),m(Ae,"mouseenter",t[31]),m(rt,"mouseenter",t[32]),m(ot,"mouseenter",t[33]),m(it,"mouseenter",t[34])],Ot=!0)},p(b,E){const W={};E[1]&16&&(W.$$scope={dirty:E,ctx:b}),Me.$set(W);const vt={};E[1]&16&&(vt.$$scope={dirty:E,ctx:b}),Ne.$set(vt);const wt={};E[1]&16&&(wt.$$scope={dirty:E,ctx:b}),Ve.$set(wt);const gt={};E[1]&16&&(gt.$$scope={dirty:E,ctx:b}),xe.$set(gt)},i(b){bt||(z(Me.$$.fragment,b),z(Ne.$$.fragment,b),z(Ve.$$.fragment,b),z(xe.$$.fragment,b),bt=!0)},o(b){re(Me.$$.fragment,b),re(Ne.$$.fragment,b),re(Ve.$$.fragment,b),re(xe.$$.fragment,b),bt=!1},d(b){b&&s(a),b&&s(u),b&&s(p),b&&s(ne),b&&s(k),b&&s(le),b&&s(_),de(Me),de(Ne),b&&s(_t),b&&s(D),de(Ve),de(xe),Ot=!1,Jt(Xt)}}}function $(t){console.log(t)}function nn(t){return[()=>$(["\\alpha"]),()=>$(["\\beta"]),()=>$(["\\phi","\\alpha"]),()=>$(["\\phi","\\beta"]),()=>$(["\\phi","\\alpha","\\beta"]),()=>$(["\\phi","\\alpha"]),()=>$(["\\phi","\\alpha"]),()=>$([]),()=>$(["\\phi","\\alpha"]),()=>$(["\\phi","\\beta"]),()=>$(["\\phi","\\alpha"]),()=>$(["\\phi","\\alpha","\\beta"]),()=>$(["\\phi","\\alpha","\\beta"]),()=>$(["\\phi","\\alpha","\\beta"]),()=>$(["\\phi","\\alpha","\\beta"]),()=>$(["\\alpha","\\beta"]),()=>$(["x"]),()=>$(["y"]),()=>$(["\\alpha"]),()=>$(["\\beta"]),()=>$(["\\alpha"]),()=>$(["\\beta"]),()=>$(["\\theta"]),()=>$(["x"]),()=>$(["\\alpha","\\theta"]),()=>$(["\\theta","\\beta"]),()=>$(["\\phi","\\theta"]),()=>$(["\\theta"]),()=>$(["\\phi"]),()=>$(["\\theta"]),()=>$(["z"]),()=>$(["\\phi"]),()=>$(["x","y"]),()=>$(["\\theta"]),()=>$(["\\phi"])]}class Sn extends Rt{constructor(a){super(),Kt(this,a,nn,an,Ut,{},null,[-1,-1])}}const sn='<a href="https://en.wikipedia.org/wiki/Bit"><h3 class="text-lg font-semibold">Bit</h3></a><p>The <b>bit</b> is the most basic unit of information in computing and digital communications. The name is a portmanteau of <b>binary digit</b>. The bit represents a logical state with one of two possible values. These values are most commonly represented as either <span class="nowrap">"<span class="monospaced">1</span>" or "<span class="monospaced">0</span>"</span>, but other representations such as <i>true</i>/<i>false</i>, <i>yes</i>/<i>no</i>, <i>on</i>/<i>off</i>, or <i>+</i>/<i>\u2212</i> are also commonly used.</p>',rn='<a href="https://en.wikipedia.org/wiki/Information_theory"><h3>Information theory</h3></a><p><b>Information theory</b> is the scientific study of the quantification, storage, and communication of digital information. The field was fundamentally established by the works of Harry Nyquist and Ralph Hartley, in the 1920s, and Claude Shannon in the 1940s. The field is at the intersection of probability theory, statistics, computer science, statistical mechanics, information engineering, and electrical engineering.</p>',on='<a href="https://en.wikipedia.org/wiki/Qubit"><h3 class="text-lg font-semibold">Qubit</h3></a><p>In quantum computing, a <b>qubit</b> or <b>quantum bit</b> is a basic unit of quantum information\u2014the quantum version of the classic binary bit physically realized with a two-state device. A qubit is a two-state quantum-mechanical system, one of the simplest quantum systems displaying the peculiarity of quantum mechanics. Examples include the spin of the electron in which the two levels can be taken as spin up and spin down; or the polarization of a single photon in which the two states can be taken to be the vertical polarization and the horizontal polarization. In a classical system, a bit would have to be in one state or the other. However, quantum mechanics allows the qubit to be in a coherent superposition of both states simultaneously, a property that is fundamental to quantum mechanics and quantum computing.</p>',ln='<a href="https://en.wikipedia.org/wiki/Measurement_in_quantum_mechanics"><h3>Measurement in quantum mechanics</h3></a><p>In quantum physics, a <b>measurement</b> is the testing or manipulation of a physical system to yield a numerical result. The predictions that quantum physics makes are in general probabilistic. The mathematical tools for making predictions about what measurement outcomes may occur were developed during the 20th century and make use of linear algebra and functional analysis.</p>',hn=`<a href="https://en.wikipedia.org/wiki/Quantum_state"><h3>Quantum state</h3></a><p>In quantum physics, a <b>quantum state</b> is a mathematical entity that provides a probability distribution for the outcomes of each possible measurement on a system. Knowledge of the quantum state together with the rules for the system's evolution in time exhausts all that can be predicted about the system's behavior. A mixture of quantum states is again a quantum state. Quantum states that cannot be written as a mixture of other states are called <b>pure quantum states</b>, while all other states are called <b>mixed quantum states</b>. A pure quantum state can be represented by a ray in a Hilbert space over the complex numbers, while mixed states are represented by density matrices, which are positive semidefinite operators that act on Hilbert spaces.</p>`,un=`<a href="https://en.wikipedia.org/wiki/Linear_combination"><h3>Linear combination</h3></a><p>In mathematics, a <b>linear combination</b> is an expression constructed from a set of terms by multiplying each term by a constant and adding the results. The concept of linear combinations is central to linear algebra and related fields of mathematics.
Most of this article deals with linear combinations in the context of a vector space over a field, with some generalizations given at the end of the article.</p>`,pn='<a href="https://en.wikipedia.org/wiki/Complex_number"><h3 class="text-lg font-semibold">Complex number</h3></a><p>In mathematics, a <b>complex number</b> is an element of a number system that extends the real numbers with a specific element denoted <span class="texhtml mvar" style="font-style:italic">i</span>, called the imaginary unit and satisfying the equation <span class="texhtml "><i>i</i><sup>2</sup> = \u22121</span>; every complex number can be expressed in the form <span class="texhtml "><i>a</i> + <i>bi</i></span>, where <span class="texhtml mvar" style="font-style:italic">a</span> and <span class="texhtml mvar" style="font-style:italic">b</span> are real numbers. Because no real number satisfies the above equation, <span class="texhtml mvar" style="font-style:italic">i</span> was called an imaginary number by Ren\xE9 Descartes. For the complex number <span class="texhtml "><i>a</i> + <i>bi</i></span>, <span class="texhtml mvar" style="font-style:italic">a</span> is called the <b><span class="vanchor"><span class="vanchor-text">real part</span></span></b> and <span class="texhtml mvar" style="font-style:italic">b</span> is called the <b><span class="vanchor"><span class="vanchor-text">imaginary part</span></span></b>. The set of complex numbers is denoted by either of the symbols <span class="mwe-math-element"><img src="https://wikimedia.org/api/rest_v1/media/math/render/svg/f9add4085095b9b6d28d045fd9c92c2c09f549a7" class="mwe-math-fallback-image-inline" aria-hidden="true" style="vertical-align:-0.338ex;width:1.678ex;height:2.176ex" /></span> or <span class="texhtml "><b>C</b></span>. Despite the historical nomenclature "imaginary", complex numbers are regarded in the mathematical sciences as just as "real" as the real numbers and are fundamental in many aspects of the scientific description of the natural world.</p>';function mn(t){let a;return{c(){a=r("bits")},l(n){a=o(n,"bits")},m(n,u){S(n,a,u)},d(n){n&&s(a)}}}function cn(t){let a;return{c(){a=r("bit of information")},l(n){a=o(n,"bit of information")},m(n,u){S(n,a,u)},d(n){n&&s(a)}}}function fn(t){let a;return{c(){a=r("Qubits")},l(n){a=o(n,"Qubits")},m(n,u){S(n,a,u)},d(n){n&&s(a)}}}function dn(t){let a;return{c(){a=r("measured")},l(n){a=o(n,"measured")},m(n,u){S(n,a,u)},d(n){n&&s(a)}}}function _n(t){let a;return{c(){a=r("state")},l(n){a=o(n,"state")},m(n,u){S(n,a,u)},d(n){n&&s(a)}}}function bn(t){let a;return{c(){a=r("linear combination")},l(n){a=o(n,"linear combination")},m(n,u){S(n,a,u)},d(n){n&&s(a)}}}function vn(t){let a;return{c(){a=r("complex numbers")},l(n){a=o(n,"complex numbers")},m(n,u){S(n,a,u)},d(n){n&&s(a)}}}function wn(t){let a,n,u,p,P,T,q,w,y,L,be=f("0")+"",x,M,je=f("1")+"",ae,qe,N,B,Ye,ne,k=f("0")+"",Se,F,dt=f("1,")+"",ke,j,Ze,ye,d,et,oe,$e=f("|0\\rangle")+"",tt,ie,Te=f("|1\\rangle")+"",lt,se,ve,we,Qe,G,yt=f("\\alpha |0\\rangle + \\beta |1\\rangle.")+"",Ce,O,$t=f("\\alpha")+"",ze,R,Tt=f("\\beta")+"",Fe,C,ht,le,_=f("|0\\rangle")+"",De,K,qt=f("\\Vert{\\alpha}\\Vert^2,")+"",We,U,St=f("|1\\rangle")+"",Ge,J,kt=f("\\Vert{\\beta}\\Vert^2.")+"",Oe,X,Ht=f("|0\\rangle")+"",Re,Y,Lt=f("|1\\rangle")+"",Ke,Z,Pt=f("\\Vert{\\alpha}\\Vert^2 + \\Vert{\\beta}\\Vert^2 = 1")+"",Ue,ee,Et=f("\\Vert{\\alpha}\\Vert^2")+"",Je,te,At=f("\\Vert{\\beta}\\Vert^2")+"",Xe,he,ut,at;return T=new _e({props:{hovertext:sn,$$slots:{default:[mn]},$$scope:{ctx:t}}}),w=new _e({props:{hovertext:rn,$$slots:{default:[cn]},$$scope:{ctx:t}}}),B=new _e({props:{hovertext:on,$$slots:{default:[fn]},$$scope:{ctx:t}}}),j=new _e({props:{hovertext:ln,$$slots:{default:[dn]},$$scope:{ctx:t}}}),se=new _e({props:{hovertext:hn,$$slots:{default:[_n]},$$scope:{ctx:t}}}),we=new _e({props:{hovertext:un,$$slots:{default:[bn]},$$scope:{ctx:t}}}),C=new _e({props:{hovertext:pn,$$slots:{default:[vn]},$$scope:{ctx:t}}}),{c(){a=i("h2"),n=r("Qubit states"),u=Be(),p=i("p"),P=r("The elementary units of information in classical computing are "),me(T.$$.fragment),q=r(". As their name suggests, bits represent one single "),me(w.$$.fragment),y=r(", which means they can take on either of two values - "),L=i("span"),x=r(" and "),M=i("span"),ae=r(" - at a time."),qe=Be(),N=i("p"),me(B.$$.fragment),Ye=r(" are the quantum computing equivalent of bits. They differ from classical bits - among other things - in that they can take on a multitude of values instead of just "),ne=i("span"),Se=r(" and "),F=i("span"),ke=r(" until that value is "),me(j.$$.fragment),Ze=r(", at which point they behave just like classical bits. To explain what this means exactly, we'll need to introduce some further concepts."),ye=Be(),d=i("p"),et=r("Let "),oe=i("span"),tt=r(" and "),ie=i("span"),lt=r(" denote the so called basis states of a qubit that are the quantum-equivalent of classical bit states. If you look at a qubit directly to learn it's value, you'll see one of these basis states. But while you're not looking - due to it's quantum nature - the "),me(se.$$.fragment),ve=r(" of a qubit may be something more intricate. Generally, it can be expressed as the "),me(we.$$.fragment),Qe=r(" of the two basis states: "),G=i("span"),Ce=r(" Here, "),O=i("span"),ze=r(" and "),R=i("span"),Fe=r(" are "),me(C.$$.fragment),ht=r(" that indicate the relative weight, with which the two basis states are present in this combination. More precisely, if we now look at the qubit, we'll see the basis state "),le=i("span"),De=r(" with a probability of "),K=i("span"),We=r(" and the basis state "),U=i("span"),Ge=r(" with a probability of "),J=i("span"),Oe=r(" Because these probabilities must add up to one - as "),X=i("span"),Re=r(" and "),Y=i("span"),Ke=r(" are the only possible outcomes - the equation "),Z=i("span"),Ue=r(" must hold for all valid qubit states. Let's call "),ee=i("span"),Je=r(" and "),te=i("span"),Xe=r(" the measurement probabilities of the basis states.")},l(c){a=l(c,"H2",{});var H=h(a);n=o(H,"Qubit states"),H.forEach(s),u=Ie(c),p=l(c,"P",{});var I=h(p);P=o(I,"The elementary units of information in classical computing are "),ce(T.$$.fragment,I),q=o(I,". As their name suggests, bits represent one single "),ce(w.$$.fragment,I),y=o(I,", which means they can take on either of two values - "),L=l(I,"SPAN",{});var ue=h(L);ue.forEach(s),x=o(I," and "),M=l(I,"SPAN",{});var nt=h(M);nt.forEach(s),ae=o(I," - at a time."),I.forEach(s),qe=Ie(c),N=l(c,"P",{});var Q=h(N);ce(B.$$.fragment,Q),Ye=o(Q," are the quantum computing equivalent of bits. They differ from classical bits - among other things - in that they can take on a multitude of values instead of just "),ne=l(Q,"SPAN",{});var pe=h(ne);pe.forEach(s),Se=o(Q," and "),F=l(Q,"SPAN",{});var st=h(F);st.forEach(s),ke=o(Q," until that value is "),ce(j.$$.fragment,Q),Ze=o(Q,", at which point they behave just like classical bits. To explain what this means exactly, we'll need to introduce some further concepts."),Q.forEach(s),ye=Ie(c),d=l(c,"P",{});var v=h(d);et=o(v,"Let "),oe=l(v,"SPAN",{});var He=h(oe);He.forEach(s),tt=o(v," and "),ie=l(v,"SPAN",{});var Mt=h(ie);Mt.forEach(s),lt=o(v," denote the so called basis states of a qubit that are the quantum-equivalent of classical bit states. If you look at a qubit directly to learn it's value, you'll see one of these basis states. But while you're not looking - due to it's quantum nature - the "),ce(se.$$.fragment,v),ve=o(v," of a qubit may be something more intricate. Generally, it can be expressed as the "),ce(we.$$.fragment,v),Qe=o(v," of the two basis states: "),G=l(v,"SPAN",{});var pt=h(G);pt.forEach(s),Ce=o(v," Here, "),O=l(v,"SPAN",{});var Le=h(O);Le.forEach(s),ze=o(v," and "),R=l(v,"SPAN",{});var Nt=h(R);Nt.forEach(s),Fe=o(v," are "),ce(C.$$.fragment,v),ht=o(v," that indicate the relative weight, with which the two basis states are present in this combination. More precisely, if we now look at the qubit, we'll see the basis state "),le=l(v,"SPAN",{});var mt=h(le);mt.forEach(s),De=o(v," with a probability of "),K=l(v,"SPAN",{});var Pe=h(K);Pe.forEach(s),We=o(v," and the basis state "),U=l(v,"SPAN",{});var Vt=h(U);Vt.forEach(s),Ge=o(v," with a probability of "),J=l(v,"SPAN",{});var ct=h(J);ct.forEach(s),Oe=o(v," Because these probabilities must add up to one - as "),X=l(v,"SPAN",{});var Ee=h(X);Ee.forEach(s),Re=o(v," and "),Y=l(v,"SPAN",{});var xt=h(Y);xt.forEach(s),Ke=o(v," are the only possible outcomes - the equation "),Z=l(v,"SPAN",{});var ft=h(Z);ft.forEach(s),Ue=o(v," must hold for all valid qubit states. Let's call "),ee=l(v,"SPAN",{});var Ae=h(ee);Ae.forEach(s),Je=o(v," and "),te=l(v,"SPAN",{});var Bt=h(te);Bt.forEach(s),Xe=o(v," the measurement probabilities of the basis states."),v.forEach(s)},m(c,H){S(c,a,H),e(a,n),S(c,u,H),S(c,p,H),e(p,P),fe(T,p,null),e(p,q),fe(w,p,null),e(p,y),e(p,L),L.innerHTML=be,e(p,x),e(p,M),M.innerHTML=je,e(p,ae),S(c,qe,H),S(c,N,H),fe(B,N,null),e(N,Ye),e(N,ne),ne.innerHTML=k,e(N,Se),e(N,F),F.innerHTML=dt,e(N,ke),fe(j,N,null),e(N,Ze),S(c,ye,H),S(c,d,H),e(d,et),e(d,oe),oe.innerHTML=$e,e(d,tt),e(d,ie),ie.innerHTML=Te,e(d,lt),fe(se,d,null),e(d,ve),fe(we,d,null),e(d,Qe),e(d,G),G.innerHTML=yt,e(d,Ce),e(d,O),O.innerHTML=$t,e(d,ze),e(d,R),R.innerHTML=Tt,e(d,Fe),fe(C,d,null),e(d,ht),e(d,le),le.innerHTML=_,e(d,De),e(d,K),K.innerHTML=qt,e(d,We),e(d,U),U.innerHTML=St,e(d,Ge),e(d,J),J.innerHTML=kt,e(d,Oe),e(d,X),X.innerHTML=Ht,e(d,Re),e(d,Y),Y.innerHTML=Lt,e(d,Ke),e(d,Z),Z.innerHTML=Pt,e(d,Ue),e(d,ee),ee.innerHTML=Et,e(d,Je),e(d,te),te.innerHTML=At,e(d,Xe),he=!0,ut||(at=[m(L,"mouseenter",t[0]),m(M,"mouseenter",t[1]),m(ne,"mouseenter",t[2]),m(F,"mouseenter",t[3]),m(oe,"mouseenter",t[4]),m(ie,"mouseenter",t[5]),m(G,"mouseenter",t[6]),m(O,"mouseenter",t[7]),m(R,"mouseenter",t[8]),m(le,"mouseenter",t[9]),m(K,"mouseenter",t[10]),m(U,"mouseenter",t[11]),m(J,"mouseenter",t[12]),m(X,"mouseenter",t[13]),m(Y,"mouseenter",t[14]),m(Z,"mouseenter",t[15]),m(ee,"mouseenter",t[16]),m(te,"mouseenter",t[17])],ut=!0)},p(c,[H]){const I={};H&262144&&(I.$$scope={dirty:H,ctx:c}),T.$set(I);const ue={};H&262144&&(ue.$$scope={dirty:H,ctx:c}),w.$set(ue);const nt={};H&262144&&(nt.$$scope={dirty:H,ctx:c}),B.$set(nt);const Q={};H&262144&&(Q.$$scope={dirty:H,ctx:c}),j.$set(Q);const pe={};H&262144&&(pe.$$scope={dirty:H,ctx:c}),se.$set(pe);const st={};H&262144&&(st.$$scope={dirty:H,ctx:c}),we.$set(st);const v={};H&262144&&(v.$$scope={dirty:H,ctx:c}),C.$set(v)},i(c){he||(z(T.$$.fragment,c),z(w.$$.fragment,c),z(B.$$.fragment,c),z(j.$$.fragment,c),z(se.$$.fragment,c),z(we.$$.fragment,c),z(C.$$.fragment,c),he=!0)},o(c){re(T.$$.fragment,c),re(w.$$.fragment,c),re(B.$$.fragment,c),re(j.$$.fragment,c),re(se.$$.fragment,c),re(we.$$.fragment,c),re(C.$$.fragment,c),he=!1},d(c){c&&s(a),c&&s(u),c&&s(p),de(T),de(w),c&&s(qe),c&&s(N),de(B),de(j),c&&s(ye),c&&s(d),de(se),de(we),de(C),ut=!1,Jt(at)}}}function V(t){console.log(t)}function gn(t){return[()=>V([]),()=>V([]),()=>V([]),()=>V([]),()=>V([]),()=>V([]),()=>V(["\\alpha","\\beta"]),()=>V(["\\alpha"]),()=>V(["\\beta"]),()=>V([]),()=>V(["\\alpha"]),()=>V([]),()=>V(["\\beta"]),()=>V([]),()=>V([]),()=>V(["\\alpha","\\beta"]),()=>V(["\\alpha"]),()=>V(["\\beta"])]}class kn extends Rt{constructor(a){super(),Kt(this,a,gn,wn,Ut,{})}}export{_e as H,kn as Q,Sn as a,qn as d,Tn as s};