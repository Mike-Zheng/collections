const f=e=>Object.prototype.toString.call(e).slice(8,-1),g=e=>f(e)==="Array",y=typeof window!="undefined",N=e=>typeof e=="function",p=e=>f(e)==="Number",w=e=>f(e)==="Object",h=e=>f(e)==="String";function m(e,n=[null,void 0]){const r=JSON.parse(JSON.stringify(e));if(Array.isArray(r))return r.filter(t=>t?Boolean(t):!n.includes(t)).map(t=>m(t,n));for(const t in r)n.includes(r[t])?delete r[t]:r[t]instanceof Object&&(r[t]=m(r[t],n));return r}function S(e,n){return N(n)?n(e):`${n}${e}`}const A=(e,n)=>{if(h(e))return`${n}${e}`;if(g(e))return e.map(r=>S(r,n));if(w(e)){for(const r in e){const t=e[r];e[r]=S(t,n)}return e}else return e};function O(e={}){const n=new Date,{year:r=n.getFullYear(),month:t=n.getMonth(),day:o=n.getDate(),hour:s=n.getHours(),minute:i=n.getMinutes(),second:c=n.getSeconds(),millisecond:a=n.getMilliseconds()}=e;return new Date(r,t,o,s,i,c,a)}function I(e,n={}){var r;const{unit:t="second",compareTime:o=Date.now()}=n,s=new Date(o),i=u=>t==="ms"?u:Math.round(u/1e3),c=t==="ms"?3600*1e3:3600,a=e.includes("+")?"+":e.includes("-")?"-":null,v=(r=e==null?void 0:e.split(a))==null?void 0:r.map(u=>{const l=u.match(/^(\d{1,})h$/),d=u.match(/^(\d{1,})d$/);if(u==="endOfToday"){const D=O({day:s.getDate()+1,hour:0,minute:0,second:0,millisecond:0}).getTime()-o;return i(D)}else{if(l)return+(l==null?void 0:l[1])*c;if(d)return+(d==null?void 0:d[1])*24*c}return 0});return a?v.reduce((u,l)=>({"+":u+l,"-":u-l})[a]):+v.toString()}function T(e){try{return decodeURIComponent(e)}catch(n){return e}}function J(e){if(!e||!h(e))return{};const n=T(e).split("?")[1]||"";return n?n.split("&").reduce((t,o)=>{const[s,i]=o.split("=");if(s in t){const c=t[s];return t[s]=(g(c)?c:[c]).concat(i),t}return t[s]=i,t},{}):{}}class ${constructor(n){this.storage=n}set(n,r,t){var o;(o=this.storage)==null||o.setItem(n,JSON.stringify({value:r,expires:t?Date.now()+Number(t)*1e3:null}))}get(n){var r;const t=JSON.parse((r=this.storage)==null?void 0:r.getItem(n));return t?t.expires&&Date.now()>t.expires?(this.remove(n),null):t.value:null}remove(n){var r;(r=this.storage)==null||r.removeItem(n)}clear(){var n;(n=this.storage)==null||n.clear()}}const M=new $(y?localStorage:null);new $(y?sessionStorage:null);const U=(e,n={})=>{if(!e||!w(e))return"";const{filter:r=[null,void 0],withSymbol:t=""}=n;e=m(e,r);const o=[];for(const s in e)if(e.hasOwnProperty(s)){const i=e[s];g(i)?i.forEach(c=>{o.push(`${s}=${c}`)}):o.push(`${s}=${i}`)}return t+o.join("&")};function z(e,n){if(!h(e)&&!p(e))return e;if(!p(n))return e.toString();const r=e.toString();return r.length>n?`${r.slice(0,n)}...`:r}export{I as a,M as l,A as n,J as p,U as s,z as t};
