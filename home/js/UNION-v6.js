function _typeof(t){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}!function(t,e){if("object"==("undefined"==typeof exports?"undefined":_typeof(exports))&&"object"==("undefined"==typeof module?"undefined":_typeof(module)))module.exports=e();else if("function"==typeof define&&define.amd)define("UNION-v6",[],e);else{var n=e();for(var i in n)("object"==("undefined"==typeof exports?"undefined":_typeof(exports))?exports:t)[i]=n[i]}}(self,function(){"use strict";var i={d:function(t,e){for(var n in e)i.o(e,n)&&!i.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},o:function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r:function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}},t={};i.r(t),i.d(t,{default:function(){return v}});var a=function(t){if(0<document.cookie.length){var e=document.cookie.indexOf(t+"=");if(-1!==e){e=e+t.length+1;var n=document.cookie.indexOf(";",e);return-1===n&&(n=document.cookie.length),decodeURIComponent(document.cookie.substring(e,n))}}return""},e=[];e[1]={id:1,txt:"台北市"},e[3]={id:3,txt:"新北市"},e[6]={id:6,txt:"桃園市"},e[4]={id:4,txt:"新竹市"},e[5]={id:5,txt:"新竹縣"},e[21]={id:21,txt:"宜蘭縣"},e[2]={id:2,txt:"基隆市"},e[8]={id:8,txt:"台中市"},e[10]={id:10,txt:"彰化縣"},e[14]={id:14,txt:"雲林縣"},e[7]={id:7,txt:"苗栗縣"},e[11]={id:11,txt:"南投縣"},e[17]={id:17,txt:"高雄市"},e[15]={id:15,txt:"台南市"},e[12]={id:12,txt:"嘉義市"},e[13]={id:13,txt:"嘉義縣"},e[19]={id:19,txt:"屏東縣"},e[22]={id:22,txt:"台東縣"},e[23]={id:23,txt:"花蓮縣"},e[24]={id:24,txt:"澎湖縣"},e[25]={id:25,txt:"金門縣"},e[26]={id:26,txt:"連江縣"};function o(t){return new RegExp(/^\d$/g).test(t)?"0"+t:t}function c(t){return t?(t=parseInt(t),n=parseInt(t%60),e=parseInt(t%3600/60),i=parseInt(t%3600/3600/60),o(i)+":"+o(e)+":"+o(n)):"";var e,n,i}function h(t,e){var n=document.createElement("script");n.type="text/javascript",n.src=t,n.onload=n.onreadystatechange=function(){this.readyState&&"loaded"!==this.readyState&&"complete"!==this.readyState||(this.onload=this.onreadystatechange=null,this.parentNode.removeChild(this)),e&&e()},document.getElementsByTagName("head")[0].appendChild(n)}var n=e,r=a("T591_TOKEN")||window.T591_TOKEN,d=!!document.getElementById("unionTouch"),l=a(d?"regionCookieId":"urlJumpIp")||1,s=n[n[l]?l:1].txt,u={};function p(n,d){var l=this,e="300px",i="250px";function o(t){var e,n,i,o="";return-1<t.indexOf("watch")?(n=t||location.search,i={},n.length&&n.split("?")[1].split("&").forEach(function(t){e=t.split("="),i[e[0]]=e[1]}),o=i.v):-1<t.indexOf("youtu.be")?o=t.replace("https://youtu.be/",""):-1<t.indexOf("embed")&&(o=t.replace("https://www.youtube.com/embed/","")),o}d.push(n),l.defaults.isTouch&&(e="100%",i="206px"),window.onYouTubeIframeAPIReady=function(){for(var r={},t=0;t<d.length;t++)!function(a){window["player"+d[a].aid]=new YT.Player("ytbPlayer"+d[a].aid,{width:e,height:i,videoId:o(d[a].youtube_url),playerVars:{autoplay:1,controls:1,iv_load_policy:3,playlist:o(d[a].youtube_url),loop:1,modestbranding:1,origin:1,playsinline:1,showinfo:0},events:{onReady:function(e){var n="timer"+d[a].aid,i=parseInt(window["player"+d[a].aid].getDuration()),o=document.getElementById("ytbPlayer"+d[a].aid+"-time");e.target.mute(),l.scrollEventHandler({ele:e.target.a,twoThirdShowEvent:function(){if("{}"!==JSON.stringify(u)&&l.defaults.isTouch)for(var t in u)clearInterval(u[t]),delete u[t];u[n]=setInterval(function(){if(!o.parentNode&&l.defaults.isTouch)return clearInterval(u[n]),!1;var t=window["player"+d[a].aid].getCurrentTime();r[n]=i-t,o.innerText=c(r[n]),r[n]--,0===r[n]&&(r[n]=i)},1e3),document.getElementById(e.target.getIframe().id+"-img").style.display="none",e.target.playVideo()},twoThirdHiddeEvent:function(){clearInterval(u[n]),e.target.pauseVideo()}})},onStateChange:function(t){1===t.data&&document.getElementById("playYtbVideo")&&(document.getElementById("playYtbVideo").style.display="none")}}})}(t)},this.getScript("https://s.591.com.tw/union/generator/lib/iframe_api.js",function(){YT.Player&&window.onYouTubeIframeAPIReady&&window.onYouTubeIframeAPIReady()});var a=document.getElementById("ytbPlayer"+n.aid+"-voice");a.addEventListener("click",function(t){var e='<span class="no-voice"></span>';"no-voice"===("ytbVoice"===t.target.className?t.target.children[0]:t.target).className?(e='<b class="voice"></b>',window["player"+n.aid].unMute()):window["player"+n.aid].mute(),a.innerHTML=e}),document.getElementById("playYtbVideo").addEventListener("click",function(){window["player"+n.aid].playVideo()})}function m(t,e,n,i){var o=this.getGAString(t.position_name,t.order_number,1);this.hotEventSend(o);var a={href:t.url&&this.addToken(t.event_click_url),title:t.txt,target:!this.defaults.isTouch,attrValue:this.getGAString(t.position_name,t.order_number),attrHref:(t.hls_video_url||t.youtube_url)&&t.event_media_url},r=this.createLink(a);return"string"==typeof e?r.innerHTML=e:r.appendChild(e),n&&function(t,e,n,i){var o,a,r,d,l,s,u,c,h,p=this;t&&(i.style="display:block; width:100%; min-height:211px",(o=p.createLink(n)).style="position:absolute; left:0; top:0; width:100%; height:100%; z-index:8;",i.appendChild(o),a="250px",r="width:44px; height:44px; bottom:35px;",p.defaults.isTouch&&(a="193px",r="width:.8rem; height:.8rem; top:161px;"),(d=document.createElement("div")).className="ytbVoice",d.id=i.getElementsByClassName("ytbPlayer")[0].id+"-voice",d.innerHTML='<span class="no-voice"></span>',d.style="position:absolute;"+r+"left:0; z-index:9;",i.appendChild(d),(l=p.createLink(n)).id=i.getElementsByClassName("ytbPlayer")[0].id+"-img",l.style="background:url("+e.img+") no-repeat center/cover;position:absolute;top:0;left:0;width:100%;height:"+a+";z-index:8;",i.appendChild(l),(s=document.createElement("strong")).className="ytbTime",s.id=i.getElementsByClassName("ytbPlayer")[0].id+"-time",i.appendChild(s)),p.defaults.isTouch?((u=p.createLink(n)).innerHTML=e.txt,u.style="display:block; width:100%; background-color:#f5f5f5; margin-top: -5px; font-size:14px; color:#222; padding: .2rem;; border-bottom:1px solid #e6e6e6;",i.appendChild(u)):((c=document.createElement("p")).classList.add("title"),c.innerHTML=e.txt,i.appendChild(c)),p.defaults.isTouch&&t&&((h=document.createElement("div")).id="playYtbVideo",h.style="position: absolute; width:2rem; height:2rem; top:42%; left:50%; transform: translate(-50%, -50%); z-index: 9;",i.appendChild(h))}.call(this,i,t,a,r),r.appendChild(function(t,e){var n=document.createElement("div");return n.setAttribute("data-union-stat",this.addToken(t)),n.setAttribute("data-gtm-str",e),n.className="unionDataStat",n.innerHTML='<img src="'+this.addToken(t)+'" style="display:none"/>',n}.call(this,t.event_show_url,o)),r}function f(l,t){var s,u,e=t.length;0<e?(s=t[this.random(0,e-1)],(u=this).creatHTML(s).then(function(t){var n,e,i,o,a,r,d;l.innerHTML=t.outerHTML,u.scrollSendStat(l,s),4===s.pd_type&&(s.hls_video_url?(n=l.getElementsByTagName("video")[0],d=n,h("//s.591.com.tw/widget/plugin/hls.light.min.js",function(){var t;Hls.isSupported()&&((t=new Hls).loadSource(d.src),t.attachMedia(d),t.on(Hls.Events.MANIFEST_PARSED,function(){d.play().then(function(){d.muted=!0,d.play()}).catch(function(){d.muted=!0,d.play()})}))}),(e=document.createElement("i")).classList.add("time"),l.appendChild(e),i=l.getElementsByTagName("i")[0],(o=document.createElement("span")).classList.add("no-voice"),u.defaults.isTouch?((a=document.createElement("div")).classList.add("voice-box"),a.style="position: absolute;width:0.8rem;height:1rem;bottom:.88rem;left:0;z-index: 99;",a.appendChild(o),o=a,(r=document.createElement("div")).classList.add("btn-box"),r.innerHTML="<em></em>",r.style="position: absolute;width:1rem;height:1rem;top:0;right:0;z-index: 9;",l.appendChild(r),navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)&&(n.setAttribute("webkit-playsinline",!0),n.setAttribute("playsinline",!0),n.setAttribute("x-webkit-airplay","allow"),n.setAttribute("x5-playsinline",!0))):l.addEventListener("click",function(t){var e=(t=t||window.event).target;"span"===e.nodeName.toLowerCase()&&(e.classList.contains("no-voice")?(n.muted=!1,e.classList.remove("no-voice"),e.classList.add("voice")):(n.muted=!0,e.classList.remove("voice"),e.classList.add("no-voice")))}),l.appendChild(o),n.onloadedmetadata=function(){var t=c(n.duration);i.innerText=t},n.ontimeupdate=function(){var t=n.duration-n.currentTime,t=c(t);i.innerText=t}):s.youtube_url&&p.call(u,s,u.defaults.arrAid))})):l.innerHTML=""}var g;function v(t){if(!(this instanceof v))return new v(t);if((t=t||{}).pid){var e=!!document.getElementById("unionTouch");for(var n in this.defaults={pid:"",callback:null,isCreatImg:!0,regionid:a(e?"regionCookieId":"urlJumpIp")||1,param:"",arrAid:[],isTouch:e},t)t.hasOwnProperty(n)&&(this.defaults[n]=t[n]);var i=(new Date).toLocaleDateString().replace(new RegExp("/","gm"),"-"),o=-1<location.host.indexOf("dev")||-1<location.host.indexOf("debug")?".debug":"";this.scriptUrl="//union"+o+".591.com.tw/ssp?callback=unionName_"+this.defaults.pid+"&pid="+this.defaults.pid+"&regionid="+this.defaults.regionid+(this.defaults.isTouch?"&device=touch":"")+(this.defaults.param?"&"+this.defaults.param:"")+"&_v="+i,this.init()}}return(window.UNION_SHOW=v).prototype={init:function(){this.getScript(this.scriptUrl),this.callbackFun()},callbackFun:function(){var e=this;window["unionName_"+e.defaults.pid]=function(t){(function(t){var e,n,i=Object.keys(t.data),o=i[0],a=1===i.length?t.data[o]:t.data;this.defaults.callback&&this.defaults.callback.call(this,a),this.defaults.isCreatImg&&(e=t.data[o],(n=document.getElementById("UNION_"+this.defaults.pid))&&f.call(this,n,e))}).call(e,t),window["unionName_"+e.defaults.pid]=function(){console.warn("未找到unionName_"+e.defaults.pid+"方法！")}}},random:function(t,e){return parseInt(Math.random()*(e-t+1)+t,10)},shuffle:function(t){return t.sort(function(){return.5<Math.random()?-1:1})},getNumberArray:function(t){for(var e=[],n=0;n<t;n++)e.push(n);return e},addToken:function(t){return t+"&_u="+r},getGAString:function(t,e,n,i){return(1===n?"廣告瀏覽-Union":"廣告點擊-Union")+"_"+(i||s)+"-"+t+"_"+(e||1)},getScript:h,scrollEventHandler:function(t){var n={ele:t.ele||"",twoThirdHiddeEvent:t.twoThirdHiddeEvent||"",twoThirdShowEvent:t.twoThirdShowEvent||"",triggerOne:t.triggerOne||!0};if(""===n.ele)return!1;function i(){if(!n.ele.clientHeight)return document.removeEventListener("scroll",i,!1),!1;var t,e={top:(t=(n.ele.clientHeight?n.ele:document.getElementById(n.ele.id)).getBoundingClientRect()).top,left:t.left,bottom:t.bottom,right:t.right,width:t.width||t.right-t.left,height:t.height||t.bottom-t.top};e.top<=a-2*e.height/3&&2*e.height/3<=e.bottom&&(n.triggerOne?void 0!==o&&!o||(n.twoThirdShowEvent&&n.twoThirdShowEvent(),o=!1):n.twoThirdShowEvent&&n.twoThirdShowEvent()),(a<e.top+e.height/3||e.bottom<e.height/3)&&(n.triggerOne?void 0!==o&&o||(n.twoThirdHiddeEvent&&n.twoThirdHiddeEvent(),o=!0):n.twoThirdHiddeEvent&&n.twoThirdHiddeEvent())}var o,a=window.innerHeight||document.documentElement.clientHeight;i(),document.removeEventListener("scroll",i,!1),document.addEventListener("scroll",i,!1)},scrollSendStat:function(t,e){var n,i=this;n=e,i.scrollEventHandler({ele:t,twoThirdShowEvent:function(){i.sendUnionStat(i.getGAString(n.position_name,n.order_number,1),i.addToken(n.event_show_url))}})},nativeDataAdapter:function(t,e){for(var n,i=!1,o=this,a=t.length,r=0;r<a;r++){void 0!==t[r].is_native&&1===t[r].is_native&&(i=!0,n=e||t[r].position_name,t[r].event_show_url=o.addToken(t[r].event_show_url),t[r].event_click_url=o.addToken(t[r].event_click_url),t[r].data_gtm_click=o.getGAString(n,t[r].native_orderno,null,t[r].region||t[r].region_name),t[r].data_gtm_show=o.getGAString(n,t[r].native_orderno,1,t[r].region||t[r].region_name),o.hotEventSend(t[r].data_gtm_show))}return{data:t,isNative:i}},hotEventSend:(g=function(e){try{hotEventSend(e)}catch(t){var n=e&&e.split("_");e&&dataLayer.push({event:"public_hot_event",hot_event_1:n[0],hot_event_2:n[1],hot_event_3:n[2],hot_event_4:n[3]})}},y.toString=function(){return g.toString()},y),sendUnionStat:function(t,e){this.hotEventSend(t),(new Image).src=e},createLink:function(t){var e={href:t.href||"javascript:;",title:t.title||"",target:t.target&&!0,attrName:t.attrName||"data-gtm-stat",attrValue:t.attrValue||"UnionEvent_缺省_"+t.title,attrHref:t.attrHref},n=document.createElement("a");return n.setAttribute(e.attrName,e.attrValue),t.attrHref&&n.setAttribute("data-href",e.attrHref),n.href=e.href,n.className="union-wrap",e.target&&t.href&&(n.target="_blank"),n},creatHTML:function(d){var l=this;return new Promise(function(e,t){var n,i,o,a,r;2===d.pd_type?e(m.call(l,d,d.txt)):4===d.pd_type&&(d.hls_video_url||d.youtube_url)?(n=!d.hls_video_url&&d.youtube_url,i=d,o=n,new Promise(function(t,e){var n;o?t('<div class="ytbPlayer" id="ytbPlayer'+i.aid+'" data-aid="'+i.aid+'"></div>'):((n=document.createElement("video")).src=i.hls_video_url,n.autoplay=!0,n.loop=!0,n.style="background:url("+i.img+") 0% 0% / 100% 100% no-repeat",n.setAttribute("muted","true"),n.id="customVideo",n.onload=t(n),n.onerror=e(new Error("Could not load image at "+n.src)))}).then(function(t){e(m.call(l,d,t,!0,n))})):(a={src:d.img},r={src:a.src||"",alt:a.alt||"",data:a.data||null},new Promise(function(t,e){var n=new Image;n.onload=t(n),n.onerror=e(new Error("Could not load image at "+r.src)),n.src=r.src}).then(function(t){e(m.call(l,d,t,41===l.defaults.pid&&d.txt))}))})},createManyHTML:function(t,e,n,i){var o=function(t,e){for(var n=[],i={},o=0,a=0,r=t.length;a<r;a++){var d=t[a];i.hasOwnProperty(d[e])?n[i[d[e]]].items.push(d):(i[d[e]]=o++,n.push({name:d[e],items:[d]}))}return n}(t,i||"row");n&&(o=this.shuffle(o));for(var a=0;a<o.length;a++){var r=o[a],d=r.name;"saleListRight"!==n&&"rentListRight"!==n||(d=a+1);var l=document.getElementById(e+d);l&&f.call(this,l,r.items)}}},t;function y(t){return g.apply(this,arguments)}});