define("roll",function(require,exports,module){var i;(i=jQuery).fn.roll=function(n){var e={showCallBack:null,triggerOne:!0,dispersion:0,threshold:0};return n&&i.extend(e,n),this.each(function(){var o=i(this),r=i(window).height();function n(){var n=i(document).scrollTop();o.position().top+e.dispersion-e.threshold<=n+r&&("function"!=typeof e.showCallBack||o.hasClass("triggerOne_show")||e.showCallBack(),e.triggerOne&&o.addClass("triggerOne_show"))}i(window).scroll(function(){n()}),n()})}});