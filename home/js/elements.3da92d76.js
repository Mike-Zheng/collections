function n(e){const c=e.target||document.head;let t=null;switch(e.type){case"link":t=document.createElement(e.type),t.setAttribute("rel",e.rel),t.setAttribute("href",e.href);break;case"meta":t=document.createElement(e.type),t.setAttribute("name",e.name),t.setAttribute("content",e.content);break}return t?(e.id&&t.setAttribute("id",e.id),c.appendChild(t),t):null}const u=e=>new Promise((c,t)=>{var a,d;const r=document.createElement("script");r.setAttribute("src",e.src),r.async=(a=e.async)!=null?a:!0,r.defer=(d=e.defer)!=null?d:!0,e.id&&r.setAttribute("id",e.id),r.onload=c,r.onerror=t,document.body.appendChild(r)});export{n as c,u as l};
