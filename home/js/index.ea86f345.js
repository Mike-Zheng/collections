import{d as a}from"./vendor.9b362300.js";import{n as l}from"./vueComponentNormalizer.9ef17bb1.js";const c=a({props:{shadeClose:{type:Boolean,default:!1},paddingZero:{type:Boolean,default:!1}},setup({},{emit:e}){return{close:()=>e("close")}}});var r=function(){var e=this,n=e.$createElement,o=e._self._c||n;return o("div",{staticClass:"n-dialog-shadow",on:{click:function(t){e.shadeClose&&e.close()}}},[o("div",{staticClass:"n-dialog-wrap",class:{"padding-zero":e.paddingZero}},[o("div",{staticClass:"n-dialog-close",on:{click:function(t){return t.stopPropagation(),e.close.apply(null,arguments)}}}),e._t("default")],2)])},i=[];const s={};var _=l(c,r,i,!1,d,"90ffa9fc",null,null);function d(e){for(let n in s)this[n]=s[n]}const f=function(){return _.exports}();export{f as D};