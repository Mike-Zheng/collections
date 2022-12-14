define("lazyloadImg",function(require,exports,module){var a,o,n,f,c;a=jQuery,o=window,n=document,c=a(o),a.fn.lazyloadImg=function(e){var t,r=this,l={threshold:0,failure_limit:0,event:"scroll",effect:"show",container:o,data_attribute:"original",skip_invisible:!1,appear:null,load:null,placeholder:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAMAAAAoyzS7AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyBpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNSBXaW5kb3dzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkFFQkE4NUVFQTBCQjExRTJCMkVDRDcyQzA3NUI1MkYxIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkFFQkE4NUVGQTBCQjExRTJCMkVDRDcyQzA3NUI1MkYxIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6QUVCQTg1RUNBMEJCMTFFMkIyRUNENzJDMDc1QjUyRjEiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6QUVCQTg1RURBMEJCMTFFMkIyRUNENzJDMDc1QjUyRjEiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7ZZ5+YAAAABlBMVEX///8AAABVwtN+AAAAAXRSTlMAQObYZgAAAAxJREFUeNpiYAAIMAAAAgABT21Z4QAAAABJRU5ErkJggg=="};function i(){var t=0;r.each(function(){var e=a(this);if((!l.skip_invisible||e.is(":visible"))&&!a.abovethetop(this,l)&&!a.leftofbegin(this,l))if(a.belowthefold(this,l)||a.rightoffold(this,l)){if(++t>l.failure_limit)return!1}else e.trigger("appear"),c.trigger("lazyloadImg-appear",this),t=0})}return e&&(f!==e.failurelimit&&(e.failure_limit=e.failurelimit,delete e.failurelimit),f!==e.effectspeed&&(e.effect_speed=e.effectspeed,delete e.effectspeed),a.extend(l,e)),t=l.container===f||l.container===o?c:a(l.container),0===l.event.indexOf("scroll")&&t.on(l.event,i),this.each(function(){var o=this,n=a(o);o.loaded=!1,n.attr("src")!==f&&!1!==n.attr("src")||n.is("img")&&n.attr("src",l.placeholder),n.one("appear",function(){var e;this.loaded||(l.appear&&(e=r.length,l.appear.call(o,e,l)),a("<img />").one("load",function(){var e=n.attr("data-"+l.data_attribute);n.hide(),n.is("img")?n.attr("src",e):n.css("background-image","url('"+e+"')"),n[l.effect](l.effect_speed),n.trigger("complete"),o.loaded=!0;var t,i=a.grep(r,function(e){return!e.loaded});r=a(i),l.load&&(t=r.length,l.load.call(o,t,l))}).attr("src",n.attr("data-"+l.data_attribute)))}),0!==l.event.indexOf("scroll")&&n.on(l.event,function(){o.loaded||n.trigger("appear")})}),c.on("resize",function(){i()}),/(?:iphone|ipod|ipad).*os 5/gi.test(navigator.appVersion)&&c.on("pageshow",function(e){e.originalEvent&&e.originalEvent.persisted&&r.each(function(){a(this).trigger("appear")})}),a(n).ready(function(){i()}),this},a.belowthefold=function(e,t){var i=t.container===f||t.container===o?(o.innerHeight?o.innerHeight:c.height())+c.scrollTop():a(t.container).offset().top+a(t.container).height();return i<=a(e).offset().top-t.threshold},a.rightoffold=function(e,t){var i=t.container===f||t.container===o?c.width()+c.scrollLeft():a(t.container).offset().left+a(t.container).width();return i<=a(e).offset().left-t.threshold},a.abovethetop=function(e,t){var i=t.container===f||t.container===o?c.scrollTop():a(t.container).offset().top;return i>=a(e).offset().top+t.threshold+a(e).height()},a.leftofbegin=function(e,t){var i=t.container===f||t.container===o?c.scrollLeft():a(t.container).offset().left;return i>=a(e).offset().left+t.threshold+a(e).width()},a.inviewport=function(e,t){return!(a.rightoffold(e,t)||a.leftofbegin(e,t)||a.belowthefold(e,t)||a.abovethetop(e,t))},a.extend(a.expr[":"],{"below-the-fold":function(e){return a.belowthefold(e,{threshold:0})},"above-the-top":function(e){return!a.belowthefold(e,{threshold:0})},"right-of-screen":function(e){return a.rightoffold(e,{threshold:0})},"left-of-screen":function(e){return!a.rightoffold(e,{threshold:0})},"in-viewport":function(e){return a.inviewport(e,{threshold:0})},"above-the-fold":function(e){return!a.belowthefold(e,{threshold:0})},"right-of-fold":function(e){return a.rightoffold(e,{threshold:0})},"left-of-fold":function(e){return!a.rightoffold(e,{threshold:0})}})});