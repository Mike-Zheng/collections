(function () {
  var u;
  (u = jQuery).fn.photoPlay = function (t) {
    var o = u.extend(
      {
        speed: "fast",
        thumWidth: 110,
        thumNum: 3,
        _width: 600,
        _height: 460,
        userId: "",
        otherMedia: !1,
        images: [],
      },
      t
    );
    return this.each(function () {
      var t = u(this),
        s = t.find(".img_main"),
        e =
          (s.children("img").attr("maxwidth") || o._width,
          s.children("img").attr("maxheight") || o._height,
          t.find(".img_prev")),
        i = e.find(".prev_left"),
        n = e.find(".prev_right"),
        d = e.find(".img_list"),
        l = (o.thumWidth, o.thumNum, o.images);
      1 == (l)[0].is_video
        ? u("#big-swiper-video").hide()
        : u("#big-swiper-video").show(),
        d.find("a").click(function () {
          d.find("ol li a").removeClass("selected"),
            u(this).addClass("selected");
          var t = u(this).hasClass("is_video"),
            e = s.find(".g-video-box");
          t
            ? (e.show(), u("#big-swiper-video").hide())
            : (e.hide(), u("#big-swiper-video").show());
          var i = u(this).hasClass("is_full"),
            n = s.find(".iframe-wrap");
          i ? n.show() : n.hide();
          var o = u(this).parent().index(),
            a = l[o].big,
            r = new Image();
          (r.src = a),
            (r.onload = function () {
              s.children("img").hide(),
                s.children("img").attr("src", a),
                s.children("img").fadeIn();
            }),
            c(o);
        }),
        u("#big-swiper-video").click(function (t) {
          t.stopPropagation(),
            l.forEach(function (t, e) {
              1 == t.is_video &&
                (d.find("ol li a").removeClass("selected"),
                d.find("ol li a").eq(e).addClass("selected"),
                c(e),
                s.find(".g-video-box").show(),
                s.find(".iframe-wrap").hide(),
                s.children("img").hide(),
                u("#big-swiper-video").hide());
            });
        }),
        i.click(function () {
          d.find("a.selected").parent().prev().find("a").click();
        }),
        n.click(function () {
          d.find("a.selected").parent().next().find("a").click();
        });
      function c(t) {
        0 == t
          ? i.css({ opacity: 0.3, cursor: "default" })
          : i.css({ opacity: 1, cursor: "pointer" }),
          t == d.find("ol li").length - 1
            ? n.css({ opacity: 0.3, cursor: "default" })
            : n.css({ opacity: 1, cursor: "pointer" });
        var e = u(".img_list ol li").length;
        window.innerWidth < 1300 && t == e - 1 && 2 < e
          ? d.find("ol").animate({ left: -132 * parseInt(e - 5) - 80 }, o.speed)
          : window.innerWidth < 1300 &&
            t == e - 2 &&
            2 < e &&
            d.find("ol").animate({ left: -132 * parseInt(e - 5) }, o.speed),
          e - t < 3 ||
            (2 < t
              ? d.find("ol").animate({ left: -132 * parseInt(t - 2) }, o.speed)
              : d.find("ol").animate({ left: 0 }, o.speed));
      }
      c(0);
    });
  };
}.call(this));

///jquery-popbox  https://github.com/gristmill/jquery-popbox
(function () {
  $.fn.popbox = function (options) {
    var settings = $.extend(
      {
        selector: this.selector,
        open: ".open",
        box: ".box",
        arrow: ".arrow",
        arrow_border: ".arrow-border",
        close: ".close",
      },
      options
    );

    var methods = {
      open: function (event) {
        event.preventDefault();

        var pop = $(this);
        var box = $(this).parent().find(settings["box"]);

        box.find(settings["arrow"]).css({ left: box.width() / 2 - 10 });
        box.find(settings["arrow_border"]).css({ left: box.width() / 2 - 10 });

        if (box.css("display") == "block") {
          methods.close();
        } else {
          box.css({
            display: "block",
            top: 10,
            left: pop.parent().width() / 2 - box.width() / 2,
          });
        }
      },

      close: function () {
        $(settings["box"]).fadeOut("fast");
      },
    };

    $(document).bind("keyup", function (event) {
      if (event.keyCode == 27) {
        methods.close();
      }
    });

    $(document).bind("click", function (event) {
      if (!$(event.target).closest(settings["selector"]).length) {
        methods.close();
      }
    });

    return this.each(function () {
      $(this).css({ width: $(settings["box"]).width() }); // Width needs to be set otherwise popbox will not move when window resized.
      $(settings["open"], this).bind("click", methods.open);
      $(settings["open"], this)
        .parent()
        .find(settings["close"])
        .bind("click", function (event) {
          event.preventDefault();
          methods.close();
        });
    });
  };
}.call(this));

//lazyload https://github.com/tuupola/lazyload
/*!
 * Lazy Load - JavaScript plugin for lazy loading images
 *
 * Copyright (c) 2007-2019 Mika Tuupola
 *
 * Licensed under the MIT license:
 *   http://www.opensource.org/licenses/mit-license.php
 *
 * Project home:
 *   https://appelsiini.net/projects/lazyload
 *
 * Version: 2.0.0-rc.2
 *
 */

(function (root, factory) {
  if (typeof exports === "object") {
    module.exports = factory(root);
  } else if (typeof define === "function" && define.amd) {
    define([], factory);
  } else {
    root.LazyLoad = factory(root);
  }
})(
  typeof global !== "undefined" ? global : this.window || this.global,
  function (root) {
    "use strict";

    if (typeof define === "function" && define.amd) {
      root = window;
    }

    const defaults = {
      src: "data-src",
      srcset: "data-srcset",
      selector: ".lazyload",
      root: null,
      rootMargin: "0px",
      threshold: 0,
    };

    /**
     * Merge two or more objects. Returns a new object.
     * @private
     * @param {Boolean}  deep     If true, do a deep (or recursive) merge [optional]
     * @param {Object}   objects  The objects to merge together
     * @returns {Object}          Merged values of defaults and options
     */
    const extend = function () {
      let extended = {};
      let deep = false;
      let i = 0;
      let length = arguments.length;

      /* Check if a deep merge */
      if (Object.prototype.toString.call(arguments[0]) === "[object Boolean]") {
        deep = arguments[0];
        i++;
      }

      /* Merge the object into the extended object */
      let merge = function (obj) {
        for (let prop in obj) {
          if (Object.prototype.hasOwnProperty.call(obj, prop)) {
            /* If deep merge and property is an object, merge properties */
            if (
              deep &&
              Object.prototype.toString.call(obj[prop]) === "[object Object]"
            ) {
              extended[prop] = extend(true, extended[prop], obj[prop]);
            } else {
              extended[prop] = obj[prop];
            }
          }
        }
      };

      /* Loop through each object and conduct a merge */
      for (; i < length; i++) {
        let obj = arguments[i];
        merge(obj);
      }

      return extended;
    };

    function LazyLoad(images, options) {
      this.settings = extend(defaults, options || {});
      this.images = images || document.querySelectorAll(this.settings.selector);
      this.observer = null;
      this.init();
    }

    LazyLoad.prototype = {
      init: function () {
        /* Without observers load everything and bail out early. */
        if (!root.IntersectionObserver) {
          this.loadImages();
          return;
        }

        let self = this;
        let observerConfig = {
          root: this.settings.root,
          rootMargin: this.settings.rootMargin,
          threshold: [this.settings.threshold],
        };

        this.observer = new IntersectionObserver(function (entries) {
          Array.prototype.forEach.call(entries, function (entry) {
            if (entry.isIntersecting) {
              self.observer.unobserve(entry.target);
              let src = entry.target.getAttribute(self.settings.src);
              let srcset = entry.target.getAttribute(self.settings.srcset);
              if ("img" === entry.target.tagName.toLowerCase()) {
                if (src) {
                  entry.target.src = src;
                }
                if (srcset) {
                  entry.target.srcset = srcset;
                }
              } else {
                entry.target.style.backgroundImage = "url(" + src + ")";
              }
            }
          });
        }, observerConfig);

        Array.prototype.forEach.call(this.images, function (image) {
          self.observer.observe(image);
        });
      },

      loadAndDestroy: function () {
        if (!this.settings) {
          return;
        }
        this.loadImages();
        this.destroy();
      },

      loadImages: function () {
        if (!this.settings) {
          return;
        }

        let self = this;
        Array.prototype.forEach.call(this.images, function (image) {
          let src = image.getAttribute(self.settings.src);
          let srcset = image.getAttribute(self.settings.srcset);
          if ("img" === image.tagName.toLowerCase()) {
            if (src) {
              image.src = src;
            }
            if (srcset) {
              image.srcset = srcset;
            }
          } else {
            image.style.backgroundImage = "url('" + src + "')";
          }
        });
      },

      destroy: function () {
        if (!this.settings) {
          return;
        }
        this.observer.disconnect();
        this.settings = null;
      },
    };

    root.lazyload = function (images, options) {
      return new LazyLoad(images, options);
    };

    if (root.jQuery) {
      const $ = root.jQuery;
      $.fn.lazyload = function (options) {
        options = options || {};
        options.attribute = options.attribute || "data-src";
        new LazyLoad($.makeArray(this), options);
        return this;
      };
    }

    return LazyLoad;
  }
);

// lazyloadImg
(function () {
  var a, o, n, f, c;
  (a = jQuery),
    (o = window),
    (n = document),
    (c = a(o)),
    (a.fn.lazyloadImg = function (e) {
      var t,
        r = this,
        l = {
          threshold: 0,
          failure_limit: 0,
          event: "scroll",
          effect: "show",
          container: o,
          data_attribute: "original",
          skip_invisible: !1,
          appear: null,
          load: null,
          placeholder:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAMAAAAoyzS7AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyBpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNSBXaW5kb3dzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkFFQkE4NUVFQTBCQjExRTJCMkVDRDcyQzA3NUI1MkYxIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkFFQkE4NUVGQTBCQjExRTJCMkVDRDcyQzA3NUI1MkYxIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6QUVCQTg1RUNBMEJCMTFFMkIyRUNENzJDMDc1QjUyRjEiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6QUVCQTg1RURBMEJCMTFFMkIyRUNENzJDMDc1QjUyRjEiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7ZZ5+YAAAABlBMVEX///8AAABVwtN+AAAAAXRSTlMAQObYZgAAAAxJREFUeNpiYAAIMAAAAgABT21Z4QAAAABJRU5ErkJggg==",
        };
      function i() {
        var t = 0;
        r.each(function () {
          var e = a(this);
          if (
            (!l.skip_invisible || e.is(":visible")) &&
            !a.abovethetop(this, l) &&
            !a.leftofbegin(this, l)
          )
            if (a.belowthefold(this, l) || a.rightoffold(this, l)) {
              if (++t > l.failure_limit) return !1;
            } else
              e.trigger("appear"),
                c.trigger("lazyloadImg-appear", this),
                (t = 0);
        });
      }
      return (
        e &&
          (f !== e.failurelimit &&
            ((e.failure_limit = e.failurelimit), delete e.failurelimit),
          f !== e.effectspeed &&
            ((e.effect_speed = e.effectspeed), delete e.effectspeed),
          a.extend(l, e)),
        (t = l.container === f || l.container === o ? c : a(l.container)),
        0 === l.event.indexOf("scroll") && t.on(l.event, i),
        this.each(function () {
          var o = this,
            n = a(o);
          (o.loaded = !1),
            (n.attr("src") !== f && !1 !== n.attr("src")) ||
              (n.is("img") && n.attr("src", l.placeholder)),
            n.one("appear", function () {
              var e;
              this.loaded ||
                (l.appear && ((e = r.length), l.appear.call(o, e, l)),
                a("<img />")
                  .one("load", function () {
                    var e = n.attr("data-" + l.data_attribute);
                    n.hide(),
                      n.is("img")
                        ? n.attr("src", e)
                        : n.css("background-image", "url('" + e + "')"),
                      n[l.effect](l.effect_speed),
                      n.trigger("complete"),
                      (o.loaded = !0);
                    var t,
                      i = a.grep(r, function (e) {
                        return !e.loaded;
                      });
                    (r = a(i)),
                      l.load && ((t = r.length), l.load.call(o, t, l));
                  })
                  .attr("src", n.attr("data-" + l.data_attribute)));
            }),
            0 !== l.event.indexOf("scroll") &&
              n.on(l.event, function () {
                o.loaded || n.trigger("appear");
              });
        }),
        c.on("resize", function () {
          i();
        }),
        /(?:iphone|ipod|ipad).*os 5/gi.test(navigator.appVersion) &&
          c.on("pageshow", function (e) {
            e.originalEvent &&
              e.originalEvent.persisted &&
              r.each(function () {
                a(this).trigger("appear");
              });
          }),
        a(n).ready(function () {
          i();
        }),
        this
      );
    }),
    (a.belowthefold = function (e, t) {
      var i =
        t.container === f || t.container === o
          ? (o.innerHeight ? o.innerHeight : c.height()) + c.scrollTop()
          : a(t.container).offset().top + a(t.container).height();
      return i <= a(e).offset().top - t.threshold;
    }),
    (a.rightoffold = function (e, t) {
      var i =
        t.container === f || t.container === o
          ? c.width() + c.scrollLeft()
          : a(t.container).offset().left + a(t.container).width();
      return i <= a(e).offset().left - t.threshold;
    }),
    (a.abovethetop = function (e, t) {
      var i =
        t.container === f || t.container === o
          ? c.scrollTop()
          : a(t.container).offset().top;
      return i >= a(e).offset().top + t.threshold + a(e).height();
    }),
    (a.leftofbegin = function (e, t) {
      var i =
        t.container === f || t.container === o
          ? c.scrollLeft()
          : a(t.container).offset().left;
      return i >= a(e).offset().left + t.threshold + a(e).width();
    }),
    (a.inviewport = function (e, t) {
      return !(
        a.rightoffold(e, t) ||
        a.leftofbegin(e, t) ||
        a.belowthefold(e, t) ||
        a.abovethetop(e, t)
      );
    }),
    a.extend(a.expr[":"], {
      "below-the-fold": function (e) {
        return a.belowthefold(e, { threshold: 0 });
      },
      "above-the-top": function (e) {
        return !a.belowthefold(e, { threshold: 0 });
      },
      "right-of-screen": function (e) {
        return a.rightoffold(e, { threshold: 0 });
      },
      "left-of-screen": function (e) {
        return !a.rightoffold(e, { threshold: 0 });
      },
      "in-viewport": function (e) {
        return a.inviewport(e, { threshold: 0 });
      },
      "above-the-fold": function (e) {
        return !a.belowthefold(e, { threshold: 0 });
      },
      "right-of-fold": function (e) {
        return a.rightoffold(e, { threshold: 0 });
      },
      "left-of-fold": function (e) {
        return !a.rightoffold(e, { threshold: 0 });
      },
    });
}.call(this));
