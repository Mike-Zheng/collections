import{d as s}from"./vendor.9b362300.js";import{n as a}from"./vueComponentNormalizer.9ef17bb1.js";const l=s({props:{shadeClose:{type:Boolean,default:!1},cancleTxt:{type:String,default:"\u53D6\u6D88"},confirmTxt:{type:String,default:"\u78BA\u5B9A"}},setup({},{emit:t}){return{close:()=>t("close"),cancel:()=>t("cancel"),confirm:()=>t("confirm")}}});var i=function(){var t=this,c=t.$createElement,n=t._self._c||c;return n("div",{staticClass:"modal-confirm",on:{click:function(e){t.shadeClose&&t.close()}}},[n("div",{staticClass:"board"},[n("i",{staticClass:"icon-close",on:{click:function(e){return t.close()}}}),n("p",{staticClass:"title"},[t._t("title")],2),n("div",{staticClass:"content"},[t._t("content")],2),n("div",{staticClass:"footer"},[n("button",{staticClass:"btn-cancel",on:{click:t.cancel}},[t._v(t._s(t.cancleTxt))]),n("button",{staticClass:"btn-confirm",on:{click:t.confirm}},[t._v(t._s(t.confirmTxt))])])])])},r=[];const o={};var _=a(l,i,r,!1,u,"0690a7ca",null,null);function u(t){for(let c in o)this[c]=o[c]}const v=function(){return _.exports}();export{v as C};