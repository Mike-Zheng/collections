var C=Object.defineProperty,w=Object.defineProperties;var I=Object.getOwnPropertyDescriptors;var p=Object.getOwnPropertySymbols;var O=Object.prototype.hasOwnProperty,_=Object.prototype.propertyIsEnumerable;var v=(e,s,t)=>s in e?C(e,s,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[s]=t,T=(e,s)=>{for(var t in s||(s={}))O.call(s,t)&&v(e,t,s[t]);if(p)for(var t of p(s))_.call(s,t)&&v(e,t,s[t]);return e},f=(e,s)=>w(e,I(s));var h=(e,s,t)=>new Promise((a,o)=>{var d=r=>{try{n(t.next(r))}catch(m){o(m)}},l=r=>{try{n(t.throw(r))}catch(m){o(m)}},n=r=>r.done?a(r.value):Promise.resolve(r.value).then(d,l);n((t=t.apply(e,s)).next())});import{o as x,x as K,g as E,r as u}from"./vendor.9b362300.js";import{u as N}from"./useGa.9db8de15.js";import{u as y}from"./useCookie.5b6a3f36.js";import"./api.ed8aa113.js";const A=(e,s="",t={})=>{x(()=>{const{stop:a}=K(e,([{isIntersecting:o}])=>{o&&(N(s),a())},t)})},{get:k}=y(),D=k("T591_TOKEN")||window.T591_TOKEN,j="pc",i=E.create({withCredentials:!0,headers:{device:j,deviceid:D}});i.interceptors.request.use(e=>h(void 0,null,function*(){return e.method==="get"&&(e.params=e.data,delete e.data),i.defaults.headers.common.deviceid||(e.headers.deviceid=i.defaults.headers.common.deviceid=k("T591_TOKEN")||window.T591_TOKEN),e}),e=>Promise.reject(e));i.interceptors.response.use(e=>e,e=>Promise.reject(e));function M(e,s){const t=u(null),a=u(),o=u(!1),d=u(!1),l=u(),n=E.CancelToken.source(),r=c=>{n.cancel(c),d.value=!0};return{promiseify:i.request(f(T({url:e},s),{cancelToken:n.token})).then(c=>{t.value=c,a.value=c.data,o.value=!0}).catch(c=>{l.value=c,o.value=!0}),response:t,data:a,error:l,finished:o,cancel:r,canceled:d}}export{A as a,M as u};