define("validform",["validformCSS"],function(require,exports,module){require("validformCSS"),function(p,e,g){var m=null,r=null,s=!0,v={tit:"提示信息",w:{"*":"不能为空！","*6-16":"请填写6到16位任意字符！",n:"请填写数字！","n6-16":"请填写6到16位数字！",s:"不能输入特殊字符！","s6-18":"请填写6到18位字符！",p:"请填写邮政编码！",m:"请填写手机号码！",e:"邮箱地址格式不对！",url:"请填写网址！"},def:"请填写正确信息！",undef:"datatype未定义！",reck:"两次输入的内容不一致！",r:"",c:"正在检测信息…",s:"请{填写|选择}{0|信息}！",v:"所填信息没有经过验证，请稍后…",p:"正在提交数据…"};p.Tipmsg=v;function b(t,a,e){(a=p.extend({},b.defaults,a)).datatype&&p.extend(b.util.dataType,a.datatype);var r=this;if(r.tipmsg={w:{}},r.forms=t,r.objects=[],!0===e)return!1;t.each(function(){if("inited"==this.validform_inited)return!0;this.validform_inited="inited";var e=this;e.settings=p.extend({},a);var i=p(e);e.validform_status="normal",i.data("tipmsg",r.tipmsg),i.delegate("[datatype]","blur",function(){var t=arguments[1];b.util.check.call(this,i,t)}),i.delegate(":text","keypress",function(t){13==t.keyCode&&0==i.find(":submit").length&&i.submit()}),b.util.enhance.call(i,e.settings.tiptype,e.settings.usePlugin,e.settings.tipSweep),e.settings.btnSubmit&&i.find(e.settings.btnSubmit).bind("click",function(){return i.trigger("submit"),!1}),i.submit(function(){var t=b.util.submitForm.call(i,e.settings);return t===g&&(t=!0),t}),i.find("[type='reset']").add(i.find(e.settings.btnReset)).bind("click",function(){b.util.resetForm.call(i)})}),1!=a.tiptype&&(2!=a.tiptype&&3!=a.tiptype||!a.ajaxPost)||l()}function n(t,e){var i=(p(window).width()-t.outerWidth())/2,a=(p(window).height()-t.outerHeight())/2,a=(document.documentElement.scrollTop?document.documentElement.scrollTop:document.body.scrollTop)+(0<a?a:0);t.css({left:i}).animate({top:a},{duration:e,queue:!1})}function l(){0===p("#Validform_msg").length&&((r=p('<div id="Validform_msg"><div class="Validform_title">'+v.tit+'<a class="Validform_close" href="javascript:void(0);">&chi;</a></div><div class="Validform_info"></div><div class="iframe"><iframe frameborder="0" scrolling="no" height="100%" width="100%"></iframe></div></div>').appendTo("body")).find("a.Validform_close").click(function(){return r.hide(),s=!0,m&&m.focus().addClass("Validform_error"),!1}).focus(function(){this.blur()}),p(window).bind("scroll resize",function(){s||n(r,400)}))}b.defaults={tiptype:1,tipSweep:!1,showAllError:!1,postonce:!1,ajaxPost:!1},b.util={dataType:{"*":/[\w\W]+/,"*6-16":/^[\w\W]{6,16}$/,n:/^\d+$/,"n6-16":/^\d{6,16}$/,s:/^[\u4E00-\u9FA5\uf900-\ufa2d\w\.\s]+$/,"s6-18":/^[\u4E00-\u9FA5\uf900-\ufa2d\w\.\s]{6,18}$/,p:/^[0-9]{6}$/,m:/^13[0-9]{9}$|14[0-9]{9}|15[0-9]{9}$|18[0-9]{9}$/,e:/^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/,url:/^(\w+:\/\/)?\w+(\.\w+)+.*$/},toString:Object.prototype.toString,isEmpty:function(t){return""===t||t===p.trim(this.attr("tip"))},getValue:function(t){var e=t.is(":radio")?(e=this.find(":radio[name='"+t.attr("name")+"']:checked").val())===g?"":e:t.is(":checkbox")?(e="",this.find(":checkbox[name='"+t.attr("name")+"']:checked").each(function(){e+=p(this).val()+","}),e===g?"":e):t.val();return e=p.trim(e),b.util.isEmpty.call(t,e)?"":e},enhance:function(t,e,i,a){var r=this;r.find("[datatype]").each(function(){2==t?0==p(this).parent().next().find(".Validform_checktip").length&&(p(this).parent().next().append("<span class='Validform_checktip' />"),p(this).siblings(".Validform_checktip").remove()):3!=t&&4!=t||0==p(this).siblings(".Validform_checktip").length&&(p(this).parent().append("<span class='Validform_checktip' />"),p(this).parent().next().find(".Validform_checktip").remove())}),r.find("input[recheck]").each(function(){if("inited"==this.validform_inited)return!0;this.validform_inited="inited";var t=p(this),e=r.find("input[name='"+p(this).attr("recheck")+"']");e.bind("keyup",function(){if(e.val()==t.val()&&""!=e.val()){if(e.attr("tip")&&e.attr("tip")==e.val())return!1;t.trigger("blur")}}).bind("blur",function(){if(e.val()!=t.val()&&""!=t.val()){if(t.attr("tip")&&t.attr("tip")==t.val())return!1;t.trigger("blur")}})}),r.find("[tip]").each(function(){if("inited"==this.validform_inited)return!0;this.validform_inited="inited";var t=p(this).attr("tip"),e=p(this).attr("altercss");p(this).focus(function(){p(this).val()==t&&(p(this).val(""),e&&p(this).removeClass(e))}).blur(function(){""===p.trim(p(this).val())&&(p(this).val(t),e&&p(this).addClass(e))})}),r.find(":checkbox[datatype],:radio[datatype]").each(function(){if("inited"==this.validform_inited)return!0;this.validform_inited="inited";var t=p(this),e=t.attr("name");r.find("[name='"+e+"']").filter(":checkbox,:radio").bind("click",function(){setTimeout(function(){t.trigger("blur")},0)})}),r.find("select[datatype][multiple]").bind("click",function(){var t=p(this);setTimeout(function(){t.trigger("blur")},0)}),b.util.usePlugin.call(r,e,t,i,a)},usePlugin:function(e,a,r,t){var i,s=this,e=e||{};if(s.find("input[plugin='swfupload']").length&&"undefined"!=typeof swfuploadhandler&&(i={custom_settings:{form:s,showmsg:function(t,e){b.util.showmsg.call(s,t,a,{obj:s.find("input[plugin='swfupload']"),type:e,sweep:r})}}},i=p.extend(!0,{},e.swfupload,i),s.find("input[plugin='swfupload']").each(function(t){if("inited"==this.validform_inited)return!0;this.validform_inited="inited",p(this).val(""),swfuploadhandler.init(i,t)})),s.find("input[plugin='datepicker']").length&&p.fn.datePicker&&(e.datepicker=e.datepicker||{},e.datepicker.format&&(Date.format=e.datepicker.format,delete e.datepicker.format),e.datepicker.firstDayOfWeek&&(Date.firstDayOfWeek=e.datepicker.firstDayOfWeek,delete e.datepicker.firstDayOfWeek),s.find("input[plugin='datepicker']").each(function(t){if("inited"==this.validform_inited)return!0;this.validform_inited="inited",e.datepicker.callback&&p(this).bind("dateSelected",function(){var t=new Date(p.event._dpCache[this._dpId].getSelected()[0]).asString(Date.format);e.datepicker.callback(t,this)}),p(this).datePicker(e.datepicker)})),s.find("input[plugin*='passwordStrength']").length&&p.fn.passwordStrength&&(e.passwordstrength=e.passwordstrength||{},e.passwordstrength.showmsg=function(t,e,i){b.util.showmsg.call(s,e,a,{obj:t,type:i,sweep:r})},s.find("input[plugin='passwordStrength']").each(function(t){if("inited"==this.validform_inited)return!0;this.validform_inited="inited",p(this).passwordStrength(e.passwordstrength)})),"addRule"!=t&&e.jqtransform&&p.fn.jqTransSelect){if("true"==s[0].jqTransSelected)return;s[0].jqTransSelected="true";function n(t){var e;0===p(t.target).parents(".jqTransformSelectWrapper").length&&(e=p(t.target),p(".jqTransformSelectWrapper ul:visible").each(function(){var t=p(this).parents(".jqTransformSelectWrapper:first").find("select").get(0);e&&t.oLabel&&t.oLabel.get(0)==e.get(0)||p(this).hide()}))}e.jqtransform.selector?(s.find(e.jqtransform.selector).filter('input:submit, input:reset, input[type="button"]').jqTransInputButton(),s.find(e.jqtransform.selector).filter("input:text, input:password").jqTransInputText(),s.find(e.jqtransform.selector).filter("input:checkbox").jqTransCheckBox(),s.find(e.jqtransform.selector).filter("input:radio").jqTransRadio(),s.find(e.jqtransform.selector).filter("textarea").jqTransTextarea(),0<s.find(e.jqtransform.selector).filter("select").length&&(s.find(e.jqtransform.selector).filter("select").jqTransSelect(),p(document).mousedown(n))):s.jqTransform(),s.find(".jqTransformSelectWrapper").find("li a").click(function(){p(this).parents(".jqTransformSelectWrapper").find("select").trigger("blur")})}},getNullmsg:function(t){var e,i=this,a=/[\u4E00-\u9FA5\uf900-\ufa2da-zA-Z\s]+/g,r=t[0].settings.label||".Validform_label";if(r=(r=(r=i.siblings(r).eq(0).text()||i.siblings().find(r).eq(0).text()||i.parent().siblings(r).eq(0).text()||i.parent().siblings().find(r).eq(0).text()).replace(/\s(?![a-zA-Z])/g,"").match(a))?r.join(""):[""],a=/\{(.+)\|(.+)\}/,e=t.data("tipmsg").s||v.s,""!=r){if(e=e.replace(/\{0\|(.+)\}/,r),i.attr("recheck"))return e=e.replace(/\{(.+)\}/,""),i.attr("nullmsg",e),e}else e=i.is(":checkbox,:radio,select")?e.replace(/\{0\|(.+)\}/,""):e.replace(/\{0\|(.+)\}/,"$1");return e=i.is(":checkbox,:radio,select")?e.replace(a,"$2"):e.replace(a,"$1"),i.attr("nullmsg",e),e},getErrormsg:function(t,e,i){var a,r=/^(.+?)(\d+)-(\d+)$/,s=/(.*?)\d+(.+?)\d+(.*)/,n=e.match(/^(.+?)((\d+)-(\d+))?$/);if("recheck"==i)return a=t.data("tipmsg").reck||v.reck;var l=p.extend({},v.w,t.data("tipmsg").w);if(n[0]in l)return t.data("tipmsg").w[n[0]]||v.w[n[0]];for(var o in l)if(-1!=o.indexOf(n[1])&&r.test(o))return a=(t.data("tipmsg").w[o]||v.w[o]).replace(s,"$1"+n[3]+"$2"+n[4]+"$3"),t.data("tipmsg").w[n[0]]=a;return t.data("tipmsg").def||v.def},_regcheck:function(t,e,i,a){var a=a,r=null,s=!1,n=/\/.+\//g,l=/^(.+?)(\d+)-(\d+)$/,o=3;if(n.test(t))var c=t.match(n)[0].slice(1,-1),d=t.replace(n,""),s=RegExp(c,d).test(e);else if("[object Function]"==b.util.toString.call(b.util.dataType[t]))s=!0===(s=b.util.dataType[t](e,i,a,b.util.dataType))||s===g||(r=s,!1);else{if(!(t in b.util.dataType)){var f,u=t.match(l);if(u){for(var p in b.util.dataType)if((f=p.match(l))&&u[1]===f[1]){var d=(h=b.util.dataType[p].toString()).match(/\/[mgi]*/g)[1].replace("/",""),m=new RegExp("\\{"+f[2]+","+f[3]+"\\}","g"),h=h.replace(/\/[mgi]*/g,"/").replace(m,"{"+u[2]+","+u[3]+"}").replace(/^\//,"").replace(/\/$/,"");b.util.dataType[t]=new RegExp(h,d);break}}else s=!1,r=a.data("tipmsg").undef||v.undef}"[object RegExp]"==b.util.toString.call(b.util.dataType[t])&&(s=b.util.dataType[t].test(e))}return s?(o=2,r=i.attr("sucmsg")||a.data("tipmsg").r||v.r,i.attr("recheck")&&e!=a.find("input[name='"+i.attr("recheck")+"']:first").val()&&(s=!1,o=3,r=i.attr("errormsg")||b.util.getErrormsg.call(i,a,t,"recheck"))):(r=r||i.attr("errormsg")||b.util.getErrormsg.call(i,a,t),b.util.isEmpty.call(i,e)&&(r=i.attr("nullmsg")||b.util.getNullmsg.call(i,a))),{passed:s,type:o,info:r}},regcheck:function(t,e,i){var a=null;if("ignore"===i.attr("ignore")&&b.util.isEmpty.call(i,e))return i.data("cked")&&(a=""),{passed:!0,type:4,info:a};i.data("cked","cked");for(var r,s=b.util.parseDatatype(t),n=0;n<s.length;n++){for(var l=0;l<s[n].length&&(r=b.util._regcheck(s[n][l],e,i,this)).passed;l++);if(r.passed)break}return r},parseDatatype:function(t){var e=/\/.+?\/[mgi]*(?=(,|$|\||\s))|[\w\*-]+/g,i=t.match(e),a=t.replace(e,"").replace(/\s*/g,"").split(""),r=[],s=0;r[0]=[],r[0].push(i[0]);for(var n=0;n<a.length;n++)"|"==a[n]&&(r[++s]=[]),r[s].push(i[n+1]);return r},showmsg:function(t,e,i,a){t!=g&&("bycheck"==a&&i.sweep&&(i.obj&&!i.obj.is(".Validform_error")||"function"==typeof e)||(p.extend(i,{curform:this}),"function"!=typeof e?((1==e||"byajax"==a&&4!=e)&&r.find(".Validform_info").html(t),(1==e&&"bycheck"!=a&&2!=i.type||"byajax"==a&&4!=e)&&(s=!1,r.find(".iframe").css("height",r.outerHeight()),r.show(),n(r,100)),2==e&&i.obj&&(i.obj.parent().next().find(".Validform_checktip").html(t),b.util.cssctl(i.obj.parent().next().find(".Validform_checktip"),i.type)),3!=e&&4!=e||!i.obj||(i.obj.siblings(".Validform_checktip").html(t),b.util.cssctl(i.obj.siblings(".Validform_checktip"),i.type))):e(t,i,b.util.cssctl)))},cssctl:function(t,e){switch(e){case 1:t.removeClass("Validform_right Validform_wrong").addClass("Validform_checktip Validform_loading");break;case 2:t.removeClass("Validform_wrong Validform_loading").addClass("Validform_checktip");break;case 4:t.removeClass("Validform_right Validform_wrong Validform_loading").addClass("Validform_checktip");break;default:t.removeClass("Validform_right Validform_loading").addClass("Validform_checktip Validform_wrong")}},check:function(i,t,e){var a=i[0].settings,t=t||"",r=b.util.getValue.call(i,p(this));if(a.ignoreHidden&&p(this).is(":hidden")||"dataIgnore"===p(this).data("dataIgnore"))return!0;if(a.dragonfly&&!p(this).data("cked")&&b.util.isEmpty.call(p(this),r)&&"ignore"!=p(this).attr("ignore"))return!1;var s,n=b.util.regcheck.call(i,p(this).attr("datatype"),r,p(this));if(r==this.validform_lastval&&!p(this).attr("recheck")&&""==t)return!!n.passed;if(this.validform_lastval=r,m=s=p(this),!n.passed)return b.util.abort.call(s[0]),e||(b.util.showmsg.call(i,n.info,a.tiptype,{obj:p(this),type:n.type,sweep:a.tipSweep},"bycheck"),a.tipSweep||s.addClass("Validform_error")),!1;var l=p(this).attr("ajaxurl");if(!l||b.util.isEmpty.call(p(this),r)||e)return l&&b.util.isEmpty.call(p(this),r)&&(b.util.abort.call(s[0]),s[0].validform_valid="true"),e||(b.util.showmsg.call(i,n.info,a.tiptype,{obj:p(this),type:n.type,sweep:a.tipSweep},"bycheck"),s.removeClass("Validform_error")),!(m=null);var o=p(this);if(o[0].validform_subpost="postform"==t?"postform":"","posting"===o[0].validform_valid&&r==o[0].validform_ckvalue)return"ajax";o[0].validform_valid="posting",o[0].validform_ckvalue=r,b.util.showmsg.call(i,i.data("tipmsg").c||v.c,a.tiptype,{obj:o,type:1,sweep:a.tipSweep},"bycheck"),b.util.abort.call(s[0]);var c,d,f=p.extend(!0,{},a.ajaxurl||{}),u={type:"POST",cache:!1,url:l,data:"param="+encodeURIComponent(r)+"&name="+encodeURIComponent(p(this).attr("name")),success:function(t){1==p.trim(t.status)?(o[0].validform_valid="true",t.info&&o.attr("sucmsg",t.info),b.util.showmsg.call(i,o.attr("sucmsg")||i.data("tipmsg").r||v.r,a.tiptype,{obj:o,type:2,sweep:a.tipSweep},"bycheck"),s.removeClass("Validform_error"),m=null,"postform"==o[0].validform_subpost&&i.trigger("submit")):(o[0].validform_valid=t.info,b.util.showmsg.call(i,t.info,a.tiptype,{obj:o,type:3,sweep:a.tipSweep}),s.addClass("Validform_error")),s[0].validform_ajax=null},error:function(t){return"200"==t.status?(1==t.responseText?f.success({status:1}):f.success({status:0,info:t.responseText}),!1):("abort"!==t.statusText&&(e="status: "+t.status+"; statusText: "+t.statusText,b.util.showmsg.call(i,e,a.tiptype,{obj:o,type:3,sweep:a.tipSweep}),s.addClass("Validform_error")),o[0].validform_valid=t.statusText,!(s[0].validform_ajax=null));var e}};return f.success&&(c=f.success,f.success=function(t){u.success(t),c(t,o)}),f.error&&(d=f.error,f.error=function(t){u.error(t)&&d(t,o)}),f=p.extend({},u,f,{dataType:"json"}),s[0].validform_ajax=p.ajax(f),"ajax"},submitForm:function(a,r,t,e,i){var s=this;if("posting"===s[0].validform_status)return!1;if(a.postonce&&"posted"===s[0].validform_status)return!1;if(!1===(a.beforeCheck&&a.beforeCheck(s)))return!1;var n,l,o,c=!0;if(s.find("[datatype]").each(function(){if(r)return!1;if(a.ignoreHidden&&p(this).is(":hidden")||"dataIgnore"===p(this).data("dataIgnore"))return!0;var t,e=b.util.getValue.call(s,p(this));if(m=t=p(this),!(n=b.util.regcheck.call(s,p(this).attr("datatype"),e,p(this))).passed)return b.util.showmsg.call(s,n.info,a.tiptype,{obj:p(this),type:n.type,sweep:a.tipSweep}),t.addClass("Validform_error"),a.showAllError?(c=c&&!1,!0):(t.focus(),c=!1);if(p(this).attr("ajaxurl")&&!b.util.isEmpty.call(p(this),e)){if("true"!==this.validform_valid){var i=p(this);return(b.util.showmsg.call(s,s.data("tipmsg").v||v.v,a.tiptype,{obj:i,type:3,sweep:a.tipSweep}),t.addClass("Validform_error"),i.trigger("blur",["postform"]),a.showAllError)?(c=c&&!1,!0):c=!1}}else p(this).attr("ajaxurl")&&b.util.isEmpty.call(p(this),e)&&(b.util.abort.call(this),this.validform_valid="true");b.util.showmsg.call(s,n.info,a.tiptype,{obj:p(this),type:n.type,sweep:a.tipSweep}),t.removeClass("Validform_error"),m=null}),a.showAllError&&s.find(".Validform_error:first").focus(),c){if(!1===(a.beforeSubmit&&a.beforeSubmit(s)))return!1;if(s[0].validform_status="posting",!a.ajaxPost&&"ajaxPost"!==e)return a.postonce||(s[0].validform_status="normal"),(t=t||a.url)&&s.attr("action",t),a.callback&&a.callback(s);(f=p.extend(!0,{},a.ajaxpost||{})).url=t||f.url||a.url||s.attr("action"),b.util.showmsg.call(s,s.data("tipmsg").p||v.p,a.tiptype,{obj:s,type:1,sweep:a.tipSweep},"byajax"),i?f.async=!1:!1===i&&(f.async=!0),f.success&&(l=f.success,f.success=function(t){a.callback&&a.callback(t),s[0].validform_ajax=null,1==p.trim(t.status)?s[0].validform_status="posted":s[0].validform_status="normal",l(t,s)}),f.error&&(o=f.error,f.error=function(t){a.callback&&a.callback(t),s[0].validform_status="normal",s[0].validform_ajax=null,o(t,s)});var d={type:"POST",async:!0,data:s.serializeArray(),success:function(t){1==p.trim(t.status)?(s[0].validform_status="posted",b.util.showmsg.call(s,t.info,a.tiptype,{obj:s,type:2,sweep:a.tipSweep},"byajax")):(s[0].validform_status="normal",b.util.showmsg.call(s,t.info,a.tiptype,{obj:s,type:3,sweep:a.tipSweep},"byajax")),a.callback&&a.callback(t),s[0].validform_ajax=null},error:function(t){var e="status: "+t.status+"; statusText: "+t.statusText;b.util.showmsg.call(s,e,a.tiptype,{obj:s,type:3,sweep:a.tipSweep},"byajax"),a.callback&&a.callback(t),s[0].validform_status="normal",s[0].validform_ajax=null}},f=p.extend({},d,f,{dataType:"json"});s[0].validform_ajax=p.ajax(f)}return!1},resetForm:function(){var t=this;t.each(function(){this.reset&&this.reset(),this.validform_status="normal"}),t.find(".Validform_right").text(""),t.find(".passwordStrength").children().removeClass("bgStrength"),t.find(".Validform_checktip").removeClass("Validform_wrong Validform_right Validform_loading"),t.find(".Validform_error").removeClass("Validform_error"),t.find("[datatype]").removeData("cked").removeData("dataIgnore").each(function(){this.validform_lastval=null}),t.eq(0).find("input:first").focus()},abort:function(){this.validform_ajax&&this.validform_ajax.abort()}},p.Datatype=b.util.dataType,b.prototype={dataType:b.util.dataType,eq:function(t){var e=this;return t>=e.forms.length?null:(t in e.objects||(e.objects[t]=new b(p(e.forms[t]).get(),{},!0)),e.objects[t])},resetStatus:function(){return p(this.forms).each(function(){this.validform_status="normal"}),this},setStatus:function(t){return p(this.forms).each(function(){this.validform_status=t||"posting"}),this},getStatus:function(){return p(this.forms)[0].validform_status},ignore:function(t){t=t||"[datatype]";return p(this.forms).find(t).each(function(){p(this).data("dataIgnore","dataIgnore").removeClass("Validform_error")}),this},unignore:function(t){t=t||"[datatype]";return p(this.forms).find(t).each(function(){p(this).removeData("dataIgnore")}),this},addRule:function(t){for(var t=t||[],e=0;e<t.length;e++){var i=p(this.forms).find(t[e].ele);for(var a in t[e])"ele"!==a&&i.attr(a,t[e][a])}return p(this.forms).each(function(){var t=p(this);b.util.enhance.call(t,this.settings.tiptype,this.settings.usePlugin,this.settings.tipSweep,"addRule")}),this},ajaxPost:function(t,e,i){var a=this;return p(a.forms).each(function(){1!=this.settings.tiptype&&2!=this.settings.tiptype&&3!=this.settings.tiptype||l(),b.util.submitForm.call(p(a.forms[0]),this.settings,t,i,"ajaxPost",e)}),this},submitForm:function(e,i){return p(this.forms).each(function(){var t=b.util.submitForm.call(p(this),this.settings,e,i);t===g&&(t=!0),!0===t&&this.submit()}),this},resetForm:function(){return b.util.resetForm.call(p(this.forms)),this},abort:function(){return p(this.forms).each(function(){b.util.abort.call(this)}),this},check:function(t,e){var e=e||"[datatype]",i=p(this.forms),a=!0;return i.find(e).each(function(){b.util.check.call(this,i,"",t)||(a=!1)}),a},config:function(e){return e=e||{},p(this.forms).each(function(){var t=p(this);this.settings=p.extend(!0,this.settings,e),b.util.enhance.call(t,this.settings.tiptype,this.settings.usePlugin,this.settings.tipSweep)}),this}},p.fn.Validform=function(t){return new b(this,t)},p.Showmsg=function(t){l(),b.util.showmsg.call(e,t,1,{})},p.Hidemsg=function(){r.hide(),s=!0}}(jQuery,window)});