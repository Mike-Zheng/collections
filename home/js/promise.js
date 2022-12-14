function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}!function(e,t){"function"==typeof define&&define.cmd?define("promise",t):"object"===("undefined"==typeof exports?"undefined":_typeof(exports))?module.exports=t():e.returnExports=t()}(this,function(e){"use strict";function t(t){var n=this.constructor;return this.then(function(e){return n.resolve(t()).then(function(){return e})},function(e){return n.resolve(t()).then(function(){return n.reject(e)})})}var n=setTimeout;function o(){}function i(e){if(!(this instanceof i))throw new TypeError("Promises must be constructed via new");if("function"!=typeof e)throw new TypeError("not a function");this._state=0,this._handled=!1,this._value=void 0,this._deferreds=[],s(e,this)}function r(n,o){for(;3===n._state;)n=n._value;0!==n._state?(n._handled=!0,i._immediateFn(function(){var e,t=1===n._state?o.onFulfilled:o.onRejected;if(null!==t){try{e=t(n._value)}catch(e){return void u(o.promise,e)}f(o.promise,e)}else(1===n._state?f:u)(o.promise,n._value)})):n._deferreds.push(o)}function f(t,e){try{if(e===t)throw new TypeError("A promise cannot be resolved with itself.");if(e&&("object"===_typeof(e)||"function"==typeof e)){var n=e.then;if(e instanceof i)return t._state=3,t._value=e,void c(t);if("function"==typeof n)return void s((o=n,r=e,function(){o.apply(r,arguments)}),t)}t._state=1,t._value=e,c(t)}catch(e){u(t,e)}var o,r}function u(e,t){e._state=2,e._value=t,c(e)}function c(e){2===e._state&&0===e._deferreds.length&&i._immediateFn(function(){e._handled||i._unhandledRejectionFn(e._value)});for(var t=0,n=e._deferreds.length;t<n;t++)r(e,e._deferreds[t]);e._deferreds=null}function l(e,t,n){this.onFulfilled="function"==typeof e?e:null,this.onRejected="function"==typeof t?t:null,this.promise=n}function s(e,t){var n=!1;try{e(function(e){n||(n=!0,f(t,e))},function(e){n||(n=!0,u(t,e))})}catch(e){if(n)return;n=!0,u(t,e)}}i.prototype.catch=function(e){return this.then(null,e)},i.prototype.then=function(e,t){var n=new this.constructor(o);return r(this,new l(e,t,n)),n},i.prototype.finally=t,i.all=function(t){return new i(function(o,r){if(!t||void 0===t.length)throw new TypeError("Promise.all accepts an array");var i=Array.prototype.slice.call(t);if(0===i.length)return o([]);var f=i.length;function u(t,e){try{if(e&&("object"===_typeof(e)||"function"==typeof e)){var n=e.then;if("function"==typeof n)return void n.call(e,function(e){u(t,e)},r)}i[t]=e,0==--f&&o(i)}catch(e){r(e)}}for(var e=0;e<i.length;e++)u(e,i[e])})},i.resolve=function(t){return t&&"object"===_typeof(t)&&t.constructor===i?t:new i(function(e){e(t)})},i.reject=function(n){return new i(function(e,t){t(n)})},i.race=function(r){return new i(function(e,t){for(var n=0,o=r.length;n<o;n++)r[n].then(e,t)})},i._immediateFn="function"==typeof setImmediate?function(e){setImmediate(e)}:function(e){n(e,0)},i._unhandledRejectionFn=function(e){"undefined"!=typeof console&&console&&console.warn("Possible Unhandled Promise Rejection:",e)};var a=function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if("undefined"!=typeof global)return global;throw new Error("unable to locate global object")}();"Promise"in a?a.Promise.prototype.finally||(a.Promise.prototype.finally=t):a.Promise=i});