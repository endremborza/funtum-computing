import{S as _e,i as ce,s as de,R as ve,T as ge,l as P,u as v,a as U,x as Z,m as A,p as y,v as g,h as $,c as M,y as x,q as s,b as ee,H as n,z as te,X as N,L as V,w as ae,Y as be,f as ne,t as se,C as ie,M as Pe,_ as re}from"../chunks/index-ca49edcf.js";import{C as Ae,Q as ue}from"../chunks/Qubit-bb2ae073.js";import{k as $e,E as qe,p as me}from"../chunks/index-ba7e8b36.js";function Fe(t){let o,i,r,h=t[5].x.toFixed(2)+"",d,q,F=t[5].y.toFixed(2)+"",D,k,T=t[5].z.toFixed(2)+"",w,H,I,_,G,X,p,S,L,R,c,Y,u,j,m,J,f,K,B,O,C,z,W,le;function he(e){t[7](e)}let oe={minX:1.5,polar:!0};return t[5]!==void 0&&(oe.cameraPosition=t[5]),_=new Ae({props:oe}),ve.push(()=>ge(_,"cameraPosition",he)),B=new ue({props:{phiAlpha:t[3],phiBeta:t[2],rAlpha:t[4],cameraPosition:t[5],svgSize:fe}}),C=new ue({props:{phiAlpha:t[3],phiBeta:t[2],rAlpha:t[4],cameraPosition:t[5],svgSize:fe,quantumGates:[t[6]]}}),{c(){o=P("div"),i=v(`Camera Position
	`),r=P("div"),d=v(h),q=v(", "),D=v(F),k=v(", "),w=v(T),H=U(),I=P("div"),Z(_.$$.fragment),X=U(),p=P("main"),S=P("h1"),L=v("QFT"),R=U(),c=P("div"),Y=v("phiA"),u=P("input"),j=v(`
		phiB`),m=P("input"),J=v(`
		rA`),f=P("input"),K=U(),Z(B.$$.fragment),O=U(),Z(C.$$.fragment),this.h()},l(e){o=A(e,"DIV",{class:!0});var a=y(o);i=g(a,`Camera Position
	`),r=A(a,"DIV",{});var b=y(r);d=g(b,h),q=g(b,", "),D=g(b,F),k=g(b,", "),w=g(b,T),b.forEach($),H=M(a),I=A(a,"DIV",{class:!0});var E=y(I);x(_.$$.fragment,E),E.forEach($),a.forEach($),X=M(e),p=A(e,"MAIN",{});var l=y(p);S=A(l,"H1",{});var pe=y(S);L=g(pe,"QFT"),pe.forEach($),R=M(l),c=A(l,"DIV",{class:!0});var Q=y(c);Y=g(Q,"phiA"),u=A(Q,"INPUT",{class:!0,type:!0,min:!0,max:!0,step:!0}),j=g(Q,`
		phiB`),m=A(Q,"INPUT",{class:!0,type:!0,min:!0,max:!0,step:!0}),J=g(Q,`
		rA`),f=A(Q,"INPUT",{class:!0,type:!0,min:!0,max:!0,step:!0}),Q.forEach($),K=M(l),x(B.$$.fragment,l),O=M(l),x(C.$$.fragment,l),l.forEach($),this.h()},h(){s(I,"class","camera-control"),s(o,"class","sidebar"),s(u,"class","slider svelte-1dvc14s"),s(u,"type","range"),s(u,"min",0),s(u,"max",360),s(u,"step",1),s(m,"class","slider svelte-1dvc14s"),s(m,"type","range"),s(m,"min",0),s(m,"max",360),s(m,"step",1),s(f,"class","slider svelte-1dvc14s"),s(f,"type","range"),s(f,"min",0),s(f,"max",1),s(f,"step",.01),s(c,"class","cpanel svelte-1dvc14s")},m(e,a){ee(e,o,a),n(o,i),n(o,r),n(r,d),n(r,q),n(r,D),n(r,k),n(r,w),n(o,H),n(o,I),te(_,I,null),ee(e,X,a),ee(e,p,a),n(p,S),n(S,L),n(p,R),n(p,c),n(c,Y),n(c,u),N(u,t[1]),n(c,j),n(c,m),N(m,t[0]),n(c,J),n(c,f),N(f,t[4]),n(p,K),te(B,p,null),n(p,O),te(C,p,null),z=!0,W||(le=[V(u,"change",t[8]),V(u,"input",t[8]),V(m,"change",t[9]),V(m,"input",t[9]),V(f,"change",t[10]),V(f,"input",t[10])],W=!0)},p(e,[a]){(!z||a&32)&&h!==(h=e[5].x.toFixed(2)+"")&&ae(d,h),(!z||a&32)&&F!==(F=e[5].y.toFixed(2)+"")&&ae(D,F),(!z||a&32)&&T!==(T=e[5].z.toFixed(2)+"")&&ae(w,T);const b={};!G&&a&32&&(G=!0,b.cameraPosition=e[5],be(()=>G=!1)),_.$set(b),a&2&&N(u,e[1]),a&1&&N(m,e[0]),a&16&&N(f,e[4]);const E={};a&8&&(E.phiAlpha=e[3]),a&4&&(E.phiBeta=e[2]),a&16&&(E.rAlpha=e[4]),a&32&&(E.cameraPosition=e[5]),B.$set(E);const l={};a&8&&(l.phiAlpha=e[3]),a&4&&(l.phiBeta=e[2]),a&16&&(l.rAlpha=e[4]),a&32&&(l.cameraPosition=e[5]),C.$set(l)},i(e){z||(ne(_.$$.fragment,e),ne(B.$$.fragment,e),ne(C.$$.fragment,e),z=!0)},o(e){se(_.$$.fragment,e),se(B.$$.fragment,e),se(C.$$.fragment,e),z=!1},d(e){e&&$(o),ie(_),e&&$(X),e&&$(p),ie(B),ie(C),W=!1,Pe(le)}}}const De=!0;let fe=600;function Ie(t,o,i){let r,h,d,q,F,D,k=$e(1/qe(2),[[1,1],[1,-1]]);function T(_){r=_,i(5,r)}function w(){h=re(this.value),i(1,h)}function H(){d=re(this.value),i(0,d)}function I(){q=re(this.value),i(4,q)}return t.$$.update=()=>{t.$$.dirty&2&&i(3,F=h/180*me),t.$$.dirty&1&&i(2,D=d/180*me)},i(5,r={x:3,y:2,z:1.5}),i(1,h=15),i(0,d=310),i(4,q=.9),[d,h,D,F,q,r,k,T,w,H,I]}class Te extends _e{constructor(o){super(),ce(this,o,Ie,Fe,de,{})}}export{Te as default,De as prerender};
