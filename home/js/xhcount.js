define("xhcount",function(require,exports,module){var h;(h=jQuery).fn.xhcount=function(t){var n=h.extend(h.fn.xhcount.defaults,t);return this.each(function(){$this=h(this),$this.ready(function(){var t=$this.contents().find("body");t.keyup(function(){var t=h.fn.xhcount.filterTag(h(this).html());t.length>n.maxChars?h(this).html(t.substring(0,n.maxChars)):(h(n.chartsobj).html(" "+t.length+" "),h(n.remainobj).html(" "+n.maxChars-t.length+" "))}),t.keyup()})})},h.fn.elemcount=function(t){var n=h.extend({chartsobj:"#xhcharts",remainobj:"#xhremain",maxChars:2e3},t);return this.each(function(){$this=h(this),$this.keyup(function(){var t=h.fn.xhcount.filterTag(h(this).val());t.length>n.maxChars?h(this).val(t.substring(0,n.maxChars)):(h(n.chartsobj).html(" "+t.length+" "),h(n.remainobj).html(" "+n.maxChars-t.length+" "))}),$this.keyup()})},h.fn.xhcount.filterTag=function(t){return t=(t=(t=t.replace(/<\/?[^>]*>/g,"")).replace(/[ | ]*\n/g,"\n")).replace(/&nbsp;/gi,"")},h.fn.xhcount.defaults={chartsobj:"#xhcharts",remainobj:"#xhremain",maxChars:2e3}});