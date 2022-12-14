function ownKeys(e,t){var o,r=Object.keys(e);return Object.getOwnPropertySymbols&&(o=Object.getOwnPropertySymbols(e),t&&(o=o.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,o)),r}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(o,!0).forEach(function(t){_defineProperty(e,t,o[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):ownKeys(o).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))})}return e}function _defineProperty(t,e,o){return e in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}function _typeof(t){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}define("utility",["cookie"],function(require,exports,module){var t;require("cookie"),exports.getSearch=function(t){var e,o=t||location.search,r={};return o.length&&o.split("?")[1].split("&").forEach(function(t){e=t.split("="),r[e[0]]=e[1]}),r},exports.removeItem=function(t,o){var r=[].concat(t);return r.forEach(function(t,e){t===o&&r.splice(e,1)}),r},exports.textOverflow=function(t,e){return"string"==typeof t&&t.length>e?t.slice(0,e)+"...":t},exports.fixStyle=function(t){return/碧|筵|綰/.test(t)?{fontWeight:"normal"}:{}},exports.foil=function(t){var e=[];return t.forEach(function(t){t.forEach(function(t){e.push(t)})}),e},exports.ENV=-1<(t=location.href).search(".dev")?".dev":-1<t.search(".debug")?".debug":"",exports.isArray=function(t){if(Array.isArray)return Array.isArray(t);Array.isArray=function(){return"[object Array]"===Object.prototype.toString.call(t)}},exports.isEmptyObject=function(t){for(var e in t)return!1;return!0},exports.objectPurity=function(t){for(var e in t)t[e]||delete t[e]},exports.UNION_EVENT=function(t,e,o){var r=new Image,n="//union"+this.ENV+".591.com.tw/stats/event?",c=t.split("_");n+="c="+c[0]+"&a="+c[1]+"&l="+c[2],e&&(n+="&_u="+exports.T591_TOKEN),o&&(n+="&num="+o),r.src=n},exports.urlEncode=function(t,e,o){if(null===t)return"";var r="",n=_typeof(t);if("string"===n||"number"===n||"boolean"===n)r+=null===o||o?"&"+e+"="+encodeURIComponent(t):"&"+e+"="+t;else for(var c in t)r+=this.urlEncode(t[c],c,o);return r},exports.downloadCsv=function(t,e,o){for(var r=0;r<t.length;r++){for(var n in t[r])e+=t[r][n]+("string"==typeof t[r][n]?"\t,":",");e+="\n"}var c="data:text/csv;charset=utf-8,\ufeff"+encodeURIComponent(e),i=document.createElement("a");i.href=c,i.download=o+".csv",document.body.appendChild(i),i.click(),document.body.removeChild(i)},exports.dateFormat=function(t){var e=t.getFullYear(),o=t.getMonth()+1,r=t.getDate();return e+"-"+(o=o<10?"0"+o:o)+"-"+(r=r<10?"0"+r:r)};var e=0;exports.freezeBody=function(t){t?(e=window.scrollY,document.body.style.position="fixed",document.body.style.width="100%",document.body.style.top=-e+"px"):(document.body.style.position="",document.body.style.top="",document.body.style.width="",window.scrollTo(0,e))},exports.CtoH=function(t){for(var e="",o=0;o<t.length;o++)12288!==t.charCodeAt(o)?65280<t.charCodeAt(o)&&t.charCodeAt(o)<65375?e+=String.fromCharCode(t.charCodeAt(o)-65248):e+=String.fromCharCode(t.charCodeAt(o)):e+=String.fromCharCode(t.charCodeAt(o)-12256);return e},exports.pathMatchToParams=function(t){var r={};return t&&-1!==t.indexOf("/")&&t.split("/").filter(function(t){return t&&t}).forEach(function(t){var e,o;-1!==t.indexOf("-")&&(-1!==(e=t.split("-"))[0].indexOf("regionid")&&-1!==e[1].indexOf("_")?(o=e[1].split("_"),r[e[0]]=o[0],r.sectionid=o[1]):r[e[0]]=e[1])}),r},exports.paramsToPathMatch=function(e,o,t){var r=_objectSpread({},o);return this.objectPurity(r),Object.keys(r).sort(t).forEach(function(t){"sectionid"!==t&&("regionid"===t&&o.sectionid?e+="".concat(t,"-").concat(o[t],"_").concat(o.sectionid,"/"):e+="".concat(t,"-").concat(o[t],"/"))}),e=e.substring(0,e.length-1)};var o={set:function(t,e,o){var r={value:e,expirse:new Date(o).getTime()};localStorage.setItem(t,JSON.stringify(r))},get:function(t){var e=JSON.parse(localStorage.getItem(t));return e?e.expirse&&e.expirse<(new Date).getTime()?(localStorage.removeItem(t),null):e.value:null}};exports.selfLS=o;var r="591提供租屋、中古屋、新建案、建案、店面頂讓、設計、 居家/傢俱資訊 - 591觸屏版",n="591,租屋,賣房子,租房,591租屋網,591租房網,租屋網,租房網,中古屋,新建案,建案,租屋網站,租屋行情,租屋廣告,賣屋,套房,出租,591房屋交易網,房屋出租,房屋網,房屋買賣,房屋,找房子,房地產,519",c="591房屋交易網-提供全台灣網路租屋、售屋、新建案、頂讓、設計、居家/傢俱廣告刊登，電視廣告強力曝光，每天20萬人上591找屋。免費提供地圖找屋、租售行情、房屋電子報、房貸試算、銀行利率表等服務，絕對是您首選的房屋交易網站。";exports.setMeta=function(t){t&&(document.title=t.title||r,document.querySelector('meta[name="keywords"]').setAttribute("content",t.keywords||n),document.querySelector('meta[name="description"]').setAttribute("content",t.description||c),document.querySelector('meta[property="og:title"]').setAttribute("content",t.ogTitle||t.title||r),document.querySelector('meta[property="og:description"]').setAttribute("content",t.description||c),document.querySelector('meta[property="og:url"]').setAttribute("content",t.url||location.href))},exports.prefixing=function(t,e){for(var o in t)t[o]="".concat(e).concat(t[o])},exports.getToken=function(){var t="T591_TOKEN",e=$.cookie(t);return e||(e=URL.createObjectURL(new Blob).slice(-36),$.cookie(t,e,{path:"/",expires:3650,domain:".591.com.tw"})),e},exports.T591_TOKEN=exports.getToken()});