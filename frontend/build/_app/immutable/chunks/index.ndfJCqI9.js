var K=Object.defineProperty;var Q=(t,e,n)=>e in t?K(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var j=(t,e,n)=>(Q(t,typeof e!="symbol"?e+"":e,n),n);import{n as x,r as v,l as P,m as B,p as X,q as H,v as Y,w as Z,x as tt,y as et,z as L,A as nt,B as it,C as st}from"./scheduler.9s6dSsEf.js";const q=typeof window<"u";let rt=q?()=>window.performance.now():()=>Date.now(),R=q?t=>requestAnimationFrame(t):x;const g=new Set;function I(t){g.forEach(e=>{e.c(t)||(g.delete(e),e.f())}),g.size!==0&&R(I)}function lt(t){let e;return g.size===0&&R(I),{promise:new Promise(n=>{g.add(e={c:t,f:n})}),abort(){g.delete(e)}}}let C=!1;function ot(){C=!0}function at(){C=!1}function ct(t,e,n,i){for(;t<e;){const o=t+(e-t>>1);n(o)<=i?t=o+1:e=o}return t}function ft(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const s=[];for(let a=0;a<e.length;a++){const _=e[a];_.claim_order!==void 0&&s.push(_)}e=s}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let o=0;for(let s=0;s<e.length;s++){const a=e[s].claim_order,_=(o>0&&e[n[o]].claim_order<=a?o+1:ct(1,o,m=>e[n[m]].claim_order,a))-1;i[s]=n[_]+1;const f=_+1;n[f]=s,o=Math.max(f,o)}const c=[],l=[];let r=e.length-1;for(let s=n[o]+1;s!=0;s=i[s-1]){for(c.push(e[s-1]);r>=s;r--)l.push(e[r]);r--}for(;r>=0;r--)l.push(e[r]);c.reverse(),l.sort((s,a)=>s.claim_order-a.claim_order);for(let s=0,a=0;s<l.length;s++){for(;a<c.length&&l[s].claim_order>=c[a].claim_order;)a++;const _=a<c.length?c[a]:null;t.insertBefore(l[s],_)}}function ut(t,e){t.appendChild(e)}function k(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function _t(t){const e=U("style");return e.textContent="/* empty */",dt(k(t),e),e.sheet}function dt(t,e){return ut(t.head||t,e),e.sheet}function mt(t,e){if(C){for(ft(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function Ht(t,e,n){C&&!n?mt(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function F(t){t.parentNode&&t.parentNode.removeChild(t)}function U(t){return document.createElement(t)}function ht(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function z(t){return document.createTextNode(t)}function Lt(){return z(" ")}function Mt(){return z("")}function qt(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function V(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}const pt=["width","height"];function yt(t,e){const n=Object.getOwnPropertyDescriptors(t.__proto__);for(const i in e)e[i]==null?t.removeAttribute(i):i==="style"?t.style.cssText=e[i]:i==="__value"?t.value=t[i]=e[i]:n[i]&&n[i].set&&pt.indexOf(i)===-1?t[i]=e[i]:V(t,i,e[i])}function $t(t,e){Object.keys(e).forEach(n=>{gt(t,n,e[n])})}function gt(t,e,n){const i=e.toLowerCase();i in t?t[i]=typeof t[i]=="boolean"&&n===""?!0:n:e in t?t[e]=typeof t[e]=="boolean"&&n===""?!0:n:V(t,e,n)}function It(t){return/-/.test(t)?$t:yt}function kt(t){return t.dataset.svelteH}function wt(t){return Array.from(t.childNodes)}function xt(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function W(t,e,n,i,o=!1){xt(t);const c=(()=>{for(let l=t.claim_info.last_index;l<t.length;l++){const r=t[l];if(e(r)){const s=n(r);return s===void 0?t.splice(l,1):t[l]=s,o||(t.claim_info.last_index=l),r}}for(let l=t.claim_info.last_index-1;l>=0;l--){const r=t[l];if(e(r)){const s=n(r);return s===void 0?t.splice(l,1):t[l]=s,o?s===void 0&&t.claim_info.last_index--:t.claim_info.last_index=l,r}}return i()})();return c.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,c}function G(t,e,n,i){return W(t,o=>o.nodeName===e,o=>{const c=[];for(let l=0;l<o.attributes.length;l++){const r=o.attributes[l];n[r.name]||c.push(r.name)}c.forEach(l=>o.removeAttribute(l))},()=>i(e))}function Ft(t,e,n){return G(t,e,n,U)}function Ut(t,e,n){return G(t,e,n,ht)}function vt(t,e){return W(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>z(e),!0)}function Vt(t){return vt(t," ")}function Wt(t,e){e=""+e,t.data!==e&&(t.data=e)}function Gt(t,e,n,i){n==null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}function bt(t,e,{bubbles:n=!1,cancelable:i=!1}={}){return new CustomEvent(t,{detail:e,bubbles:n,cancelable:i})}function Jt(t,e){const n=[];let i=0;for(const o of e.childNodes)if(o.nodeType===8){const c=o.textContent.trim();c===`HEAD_${t}_END`?(i-=1,n.push(o)):c===`HEAD_${t}_START`&&(i+=1,n.push(o))}else i>0&&n.push(o);return n}function Kt(t,e){return new t(e)}const N=new Map;let A=0;function Et(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function Nt(t,e){const n={stylesheet:_t(e),rules:{}};return N.set(t,n),n}function M(t,e,n,i,o,c,l,r=0){const s=16.666/i;let a=`{
`;for(let d=0;d<=1;d+=s){const $=e+(n-e)*c(d);a+=d*100+`%{${l($,1-$)}}
`}const _=a+`100% {${l(n,1-n)}}
}`,f=`__svelte_${Et(_)}_${r}`,m=k(t),{stylesheet:y,rules:u}=N.get(m)||Nt(m,t);u[f]||(u[f]=!0,y.insertRule(`@keyframes ${f} ${_}`,y.cssRules.length));const h=t.style.animation||"";return t.style.animation=`${h?`${h}, `:""}${f} ${i}ms linear ${o}ms 1 both`,A+=1,f}function At(t,e){const n=(t.style.animation||"").split(", "),i=n.filter(e?c=>c.indexOf(e)<0:c=>c.indexOf("__svelte")===-1),o=n.length-i.length;o&&(t.style.animation=i.join(", "),A-=o,A||Ct())}function Ct(){R(()=>{A||(N.forEach(t=>{const{ownerNode:e}=t.stylesheet;e&&F(e)}),N.clear())})}let w;function St(){return w||(w=Promise.resolve(),w.then(()=>{w=null})),w}function T(t,e,n){t.dispatchEvent(bt(`${e?"intro":"outro"}${n}`))}const E=new Set;let p;function Qt(){p={r:0,c:[],p}}function Xt(){p.r||v(p.c),p=p.p}function Dt(t,e){t&&t.i&&(E.delete(t),t.i(e))}function Yt(t,e,n,i){if(t&&t.o){if(E.has(t))return;E.add(t),p.c.push(()=>{E.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}else i&&i()}const Ot={duration:0};function Zt(t,e,n,i){let c=e(t,n,{direction:"both"}),l=i?0:1,r=null,s=null,a=null,_;function f(){a&&At(t,a)}function m(u,h){const d=u.b-l;return h*=Math.abs(d),{a:l,b:u.b,d,duration:h,start:u.start,end:u.start+h,group:u.group}}function y(u){const{delay:h=0,duration:d=300,easing:$=X,tick:S=x,css:D}=c||Ot,O={start:rt()+h,b:u};u||(O.group=p,p.r+=1),"inert"in t&&(u?_!==void 0&&(t.inert=_):(_=t.inert,t.inert=!0)),r||s?s=O:(D&&(f(),a=M(t,l,u,d,h,$,D)),u&&S(0,1),r=m(O,d),B(()=>T(t,u,"start")),lt(b=>{if(s&&b>s.start&&(r=m(s,d),s=null,T(t,r.b,"start"),D&&(f(),a=M(t,l,r.b,r.duration,0,$,c.css))),r){if(b>=r.end)S(l=r.b,1-l),T(t,r.b,"end"),s||(r.b?f():--r.group.r||v(r.group.c)),r=null;else if(b>=r.start){const J=b-r.start;l=r.a+r.d*$(J/r.duration),S(l,1-l)}}return!!(r||s)}))}return{run(u){P(c)?St().then(()=>{c=c({direction:u?"in":"out"}),y(u)}):y(u)},end(){f(),r=s=null}}}function te(t){t&&t.c()}function ee(t,e){t&&t.l(e)}function jt(t,e,n){const{fragment:i,after_update:o}=t.$$;i&&i.m(e,n),B(()=>{const c=t.$$.on_mount.map(nt).filter(P);t.$$.on_destroy?t.$$.on_destroy.push(...c):v(c),t.$$.on_mount=[]}),o.forEach(B)}function Tt(t,e){const n=t.$$;n.fragment!==null&&(tt(n.after_update),v(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Bt(t,e){t.$$.dirty[0]===-1&&(it.push(t),st(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function ne(t,e,n,i,o,c,l=null,r=[-1]){const s=et;L(t);const a=t.$$={fragment:null,ctx:[],props:c,update:x,not_equal:o,bound:H(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(s?s.$$.context:[])),callbacks:H(),dirty:r,skip_bound:!1,root:e.target||s.$$.root};l&&l(a.root);let _=!1;if(a.ctx=n?n(t,e.props||{},(f,m,...y)=>{const u=y.length?y[0]:m;return a.ctx&&o(a.ctx[f],a.ctx[f]=u)&&(!a.skip_bound&&a.bound[f]&&a.bound[f](u),_&&Bt(t,f)),m}):[],a.update(),_=!0,v(a.before_update),a.fragment=i?i(a.ctx):!1,e.target){if(e.hydrate){ot();const f=wt(e.target);a.fragment&&a.fragment.l(f),f.forEach(F)}else a.fragment&&a.fragment.c();e.intro&&Dt(t.$$.fragment),jt(t,e.target,e.anchor),at(),Y()}L(s)}class ie{constructor(){j(this,"$$");j(this,"$$set")}$destroy(){Tt(this,1),this.$destroy=x}$on(e,n){if(!P(n))return x;const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const o=i.indexOf(n);o!==-1&&i.splice(o,1)}}$set(e){this.$$set&&!Z(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const Pt="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(Pt);export{kt as A,qt as B,Jt as C,ht as D,Ut as E,Zt as F,ie as S,wt as a,vt as b,Ft as c,F as d,U as e,Vt as f,Ht as g,mt as h,ne as i,Wt as j,Mt as k,Yt as l,Xt as m,Dt as n,V as o,Gt as p,Qt as q,Kt as r,Lt as s,z as t,te as u,ee as v,jt as w,Tt as x,It as y,yt as z};
