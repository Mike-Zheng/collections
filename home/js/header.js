define("header",["cookie"],function(require,exports,module){require("cookie"),new Vue({data:function(){return{showAddcnAppList:!1,addcnAppListTimer:null}},methods:{showAppList:function(){clearTimeout(this.addcnAppListTimer),this.showAddcnAppList=!0},hideAppList:function(){var e=this;this.addcnAppListTimer=setTimeout(function(){e.showAddcnAppList=!1},100)}}}).$mount("#vueLoginStatus"),$("#areaSelect").one("mouseover",function(){require.async("areaBoxNew",function(){setTimeout(function(){$("#areaSelect").mouseover()},10),$("#areaSelect").areabox({callback:function(e){$("#areaSelect").find(".areaTxt").html(e.text()),$.cookie("urlJumpIp",e.attr("data-id"),{expires:30,path:"/",domain:"591.com.tw"}),$.cookie("urlJumpIpByTxt",e.text(),{expires:30,path:"/",domain:"591.com.tw"}),window.location.hash="",window.location.reload()}})})}),$(".nav-list li").bind({mouseover:function(){$(this).addClass("active").find(".sub-nav").show()},mouseout:function(){$(this).removeClass("active").find(".sub-nav").hide()}});var e,t=null;function o(){e=0,$(document).ready(function(){$(window).scroll(function(){100<=$(window).scrollTop()?$(".statement-box").hide():"1"!==$.cookie("tw591__privacy_agree")&&0===e&&$(".statement-box").show()})})}$(".login-status .dropMenu").bind({mouseover:function(){clearTimeout(t),$(this).siblings().removeClass("active").find(".dropbox").hide(),$(this).addClass("active").find(".dropbox").show()},mouseout:function(){var e=this;t=setTimeout(function(){$(e).removeClass("active").find(".dropbox").hide()},100)}}),$.cookie("cookie_login_user_id")||$.cookie("tw591__privacy_agree")?"1"===$.cookie("tw591__privacy_agree")||localStorage.getItem("tw591__privacy_agree")||($(".statement-box").show(),o()):$.post("/home/data/getPrivacyAgreeStatus",{device:"pc"}).then(function(e){var t="1";1===e.status&&e.data&&"1"===e.data.agree_status||(t="0",$(".statement-box").show(),o()),$.cookie("tw591__privacy_agree",t,{expires:365,path:"/",domain:"591.com.tw"})}),$(".statement-confirm").click(function(){e=1,$(".statement-box").hide(),$.post("/home/data/bindUserDeviceToken",{device:"pc",privacy_agree:1}).then(function(e){1===e.status&&$.cookie("tw591__privacy_agree","1",{expires:365,path:"/",domain:"591.com.tw"})})})});