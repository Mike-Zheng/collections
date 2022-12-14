define('_record', ['template'], function (require, exports, module) {
  module.exports = function (i) {
    if (void 0 === i) throw new Error('Record need a config object')
    if (
      (void 0 !== i.width && $('.record-body').width(i.width),
      i.title,
      void 0 !== i.type &&
        ('history' == i.type
          ? $('.record-bottom').text('清空瀏覽歷史記錄')
          : 'collection' == i.type && $('.record-colle-bottom').text('登入查看所有收藏')),
      void 0 === i.listName)
    )
      throw new Error('you need a listName')
    function o() {
      $('.record-list').empty()
    }
    function a(e) {
      var t = b()
      for (x in t.arr) t.arr[x].id == e && t.arr.splice(x, 1)
      w(t), g('set')
    }
    function n(e) {
      var t = b(),
        r = new Date().getTime(),
        r = parseInt(r / 1e3) + ''
      for (x in t.arr) t.arr[x].id == e && ((t.arr[x].act = 'cancel'), (t.arr[x].time = r))
      w(t), h(e), g('set')
    }
    function t(e) {
      var t = '',
        r = { arr: [] }
      if ('rent' == e) {
        ;(t = b()).arr.length
        for (x in t.arr) '1' == t.arr[x].type && 'collection' == t.arr[x].act && r.arr.push(t.arr[x])
      } else if ('sale' == e) {
        ;(t = b()).arr.length
        for (x in t.arr) '2' == t.arr[x].type && 'collection' == t.arr[x].act && r.arr.push(t.arr[x])
      } else if ('newhouse' == e) {
        ;(t = b()).arr.length
        for (x in t.arr)
          '0' == t.arr[x].isBusiness && '8' == t.arr[x].type && 'collection' == t.arr[x].act && r.arr.push(t.arr[x])
      } else if ('business' == e) {
        ;(t = b()).arr.length
        for (x in t.arr) '1' == t.arr[x].isBusiness && 'collection' == t.arr[x].act && r.arr.push(t.arr[x])
      }
      var o = p(r)
      f(o, e)
    }
    function c() {
      var e = $('.record-body'),
        t = '-' + i.width + 'px'
      e.removeAttr('data-type').animate({ right: t }, function () {
        e.hide(), o()
      })
    }
    function r() {
      var e = $('.record-body')
      i.width,
        e.show(),
        e.attr('data-type', i.type).animate({ right: '0' }, function () {
          e.show()
        })
    }
    function d() {
      $('.record-container').hide(),
        $('.record-empty').show(),
        $('.record-empty-close').bind('click', function () {
          c(),
            $('.newFiexdSide').animate({ right: '0' }, function () {
              $('#backOld_wrap').show()
            })
        })
    }
    var s = i.listName,
      l = require('template'),
      h = function (e) {
        var t = b(),
          r = 0
        for (x in t.arr)
          if (e == t.arr[x].id && 'collection' == t.arr[x].act) {
            $('.shoucang a[data-text=' + e + '][data-bind=' + t.arr[x].type + ']')
              .parent()
              .addClass('isShoucang'),
              $('.shoucang a[data-text=' + e + '][data-bind=' + t.arr[x].type + ']').attr('data-colle', '1'),
              (r = 1)
            break
          }
        0 == r &&
          ($('.shoucang a[data-text=' + e + ']')
            .parent()
            .removeClass('isShoucang'),
          $('.shoucang a[data-text=' + e + ']').attr('data-colle', '0'))
      },
      p = function (e) {
        void 0 === e && (e = b())
        var t = $('#hid_type').val(),
          r = '',
          o = ''
        for (x in ('1' == t ? (r = 'R') : '2' == t ? (r = 'S') : '8' == t ? (r = 'H') : '6' == t && (r = 'D'), e.arr)) {
          if (18 < x) break
          ;(o =
            o +
            ('1' == e.arr[x].type
              ? 'R'
              : '2' == e.arr[x].type
              ? 'S'
              : '8' == e.arr[x].type
              ? 'H'
              : '6' == e.arr[x].type
              ? 'D'
              : r) +
            e.arr[x].id),
            x < e.arr.length - 1 && (o += ',')
        }
        return o
      },
      f = function (e, t) {
        var r
        void 0 === e && (e = p()),
          (r =
            'newhouse' == t
              ? '//' + location.host + '/home/housing/wareBaseInfo?ware_ids=' + e
              : '//' + location.host + '/home/house/wareBaseInfo?ware_ids=' + e),
          $.get(
            r,
            function (e) {
              u(e, t)
            },
            'json'
          )
      },
      u = function (e) {
        if ((o(), e.data.length < 1 && 'history' == i.type)) return d(), void $('.record-colle-empty').hide()
        if (e.data.length < 1 && 'collection' == i.type)
          return (
            $('.record-list').hide(),
            $('.record-colle-bottom').hide(),
            $('.record-colle-empty').show(),
            $('.colle-empty-close').bind('click', function () {
              c(),
                $('.newFiexdSide').animate({ right: '0' }, function () {
                  $('#backOld_wrap').show()
                })
            }),
            void $('.record-empty').hide()
          )
        $('.record-container').show(),
          $('.record-list').show(),
          $('.record-empty').hide(),
          $('.record-colle-empty').hide(),
          'collection' == i.type && $('.record-colle-bottom').show()
        var t,
          r = ''
        'history' === i.type &&
          (r += '<p style="font-size: 12px; color: #999; margin: 0 0 10px 10px;">暫不顯示新建案的瀏覽記錄</p>'),
          (r += l('historyListTpl', e)),
          (document.getElementById('record-list').innerHTML = r),
          'history' == i.type && $('.record-list-colle').hide(),
          $('.record-list-a').bind('click', function (e) {
            var t = new Date().getTime(),
              r = $(this).attr('data-id'),
              o = b()
            for (x in o.arr) o.arr[x].id == r && (o.arr[x].time = t)
            m(o.arr), w(o), 'history' == i.type && f()
          }),
          'history' == i.type
            ? $('.record-list-del').bind('click', function (e) {
                e.stopPropagation(), e.preventDefault()
                var t = $(this).attr('data-id')
                a(t), $(this).parent().hide()
              })
            : 'collection' == i.type &&
              $('.record-list-del').bind('click', function (e) {
                e.stopPropagation(), e.preventDefault()
                var t = $(this).attr('data-id')
                n(t), $(this).parent().hide()
              }),
          $('.record-list-colle').on('click', function (e) {
            e.stopPropagation(), e.preventDefault()
            var t = $(this).attr('data-id')
            n(t), $(this).parent().parent().hide()
          }),
          $('.record-bottom').bind('click', function () {
            o(), localStorage.setItem(s, ''), d()
          }),
          (t = $('.record-list').offset().top + $('.record-list').height() - $(window).scrollTop()),
          $(window).height() < t
            ? $('.record-bottom').addClass('fixed-bottom')
            : $('.record-bottom').removeClass('fixed-bottom')
      },
      m = function (e) {
        e.sort(function (e, t) {
          return t.time - e.time
        })
      },
      w = function (e) {
        var t = JSON.stringify(e)
        localStorage.setItem(s, t)
      },
      b = function () {
        var e = localStorage.getItem(s)
        return (e = void 0 === e || '' == e || null == e || 'null' == e ? { arr: [] } : JSON.parse(e))
      },
      y = function (e) {
        var t = b().arr
        for (x in t) if (t[x].id == e) return !0
        return !1
      },
      g = function (e) {
        var t,
          r,
          o,
          i = localStorage.getItem(s)
        0 < $('#cIframe').length
          ? (o = (t = $('#cIframe')).attr('src'))
          : ((t = $('<iframe id="cIframe" frameborder="0" style="display:none;"></iframe>')),
            (r = $('#base_url').val()),
            (o = location.protocol + r + '/home/index/localStorage'),
            t.attr('src', o),
            $('body').append(t))
        var a = { list: s, method: e, data: i }
        setTimeout(function () {
          t[0].contentWindow.postMessage(a, o)
        }, 1e3)
      }
    return (
      window.addEventListener &&
        window.addEventListener('message', function (e) {
          e.data.list == s && localStorage.setItem(s, e.data.data)
        }),
      {
        init: function () {
          $('.record-close').bind('click', function () {
            c(),
              $('.newFiexdSide').animate({ right: '0' }, function () {
                $('#backOld_wrap').show(), $('.diamonds').show()
              })
          }),
            $(document).on('click', function (e) {
              0 == $(e.target).parents('.record-body').length &&
                0 == $(e.target).parents('.newFiexdSide').length &&
                (c(),
                $('.newFiexdSide').animate({ right: '0' }, function () {
                  $('#backOld_wrap').show(), $('.diamonds').show()
                }))
            }),
            $('.newFiexdSide .' + i.listName).bind('click', function () {
              var e
              $('.record-title').text(i.title),
                'none' == $('.record-body').css('display') || $('.record-body').attr('data-type') != i.type
                  ? (r(),
                    (e = i.width + 'px'),
                    $('.newFiexdSide').animate({ right: e }),
                    $('#backOld_wrap').hide(),
                    $('.diamonds').hide(),
                    'collection' == i.type
                      ? ($('.record-tab-item').removeClass('record-tab-on'),
                        $('.record-tab-rent').addClass('record-tab-on'),
                        t('rent'))
                      : 'history' == i.type && f())
                  : (c(),
                    $('.newFiexdSide').animate({ right: '0' }, function () {
                      $('#backOld_wrap').show(), $('.diamonds').show()
                    })),
                'collection' == i.type
                  ? ($('.record-tab').show(), $('.record-bottom').hide(), $('.record-colle-bottom').show())
                  : 'history' == i.type &&
                    ($('.record-tab').hide(), $('.record-bottom').show(), $('.record-colle-bottom').hide())
            }),
            'collection' == i.type &&
              ($('.record-tab-rent').on('click', function () {
                t('rent'), $('.record-tab-item').removeClass('record-tab-on'), $(this).addClass('record-tab-on')
              }),
              $('.record-tab-sale').on('click', function () {
                t('sale'), $('.record-tab-item').removeClass('record-tab-on'), $(this).addClass('record-tab-on')
              }),
              $('.record-tab-business').on('click', function () {
                t('business'), $('.record-tab-item').removeClass('record-tab-on'), $(this).addClass('record-tab-on')
              }),
              $('.record-tab-newhouse').on('click', function () {
                t('newhouse'), $('.record-tab-item').removeClass('record-tab-on'), $(this).addClass('record-tab-on')
              }))
        },
        addItem: function (e) {
          !(function (e) {
            var t = b()
            if (y(e.id)) for (x in t.arr) t.arr[x].id == e.id && t.arr.splice(x, 1)
            t.arr.push(e), m(t.arr), w(t), g('set')
          })(e)
        },
        delItem: function (e) {
          a(e)
        },
        emptyList: function () {
          o(), localStorage.setItem(s, '')
        },
        showList: function () {
          r()
        },
        addColle: function (e) {
          !(function (e) {
            var t = b()
            if (y(e.id)) for (x in t.arr) t.arr[x].id == e.id && t.arr.splice(x, 1)
            t.arr.push(e), m(t.arr), w(t), h(e.id), g('set')
          })(e)
        },
        cancelColle: function (e) {
          n(e)
        },
        heartShow: function (e) {
          !(function (e) {
            if (Array.isArray(e)) for (x in e) e[x].hid ? h(e[x].hid) : e[x].houseId ? h(e[x].houseId) : h(e[x].post_id)
            else h(e)
          })(e)
        },
        changeHeart: function (e) {
          h(e)
        },
        postData: function () {
          g()
        },
      }
    )
  }
}),
  define('sideTool', ['cookie', 'popbox', '_record'], function (require, exports, module) {
    require('cookie'), require('popbox')
    var e = require('_record'),
      t = $(window),
      r = $('.side_tool_wrap '),
      o = $('.record-body'),
      i = r.find('.backtop'),
      a = { title: '我的收藏', type: 'collection', width: '257', close: !0, listName: 'collectionList' },
      n = { title: '瀏覽歷史記錄', type: 'history', width: '257', close: !0, listName: 'historyList' },
      c = -1 < location.href.search('detail')
    function d() {
      1300 < t.width() ? r.show() : r.hide()
    }
    function s() {
      500 < t.scrollTop() ? i.show() : i.hide()
    }
    new e(a).init(),
      new e(n).init(),
      r.show(),
      o.show(),
      c || r.find('.addCollec').hide(),
      d(),
      t.bind('resize', d),
      t.bind('scroll', s),
      r.find('li').bind({
        mouseenter: function () {
          $(this).addClass('active').find('.side-show').show().stop()
        },
        mouseleave: function () {
          $(this)
            .removeClass('active')
            .find('.side-show')
            .animate({ opacity: 0 }, 300, function () {
              $(this).hide().stop()
            })
        },
      }),
      r.find('.proposal').click(function () {
        $.popbox({
          id: 'jq_popbox_proposal',
          title: '意見反饋',
          size: { width: '560px', height: '315px' },
          type: 'iframe',
          content: { width: '540px', height: '255px', url: '/home/pubBox/proposal?type=business', scrolling: 0 },
        })
      }),
      c &&
        r.find('.addCollec').click(function () {
          var t = -1 !== navigator.userAgent.toLowerCase().indexOf('mac') ? 'Command/Cmd' : 'CTRL'
          if (
            ((jQuery.browser = {}),
            (jQuery.browser.msie = !1),
            (jQuery.browser.version = 0),
            navigator.userAgent.match(/MSIE ([0-9]+)./) &&
              ((jQuery.browser.msie = !0), (jQuery.browser.version = RegExp.$1)),
            $.browser.msie)
          )
            try {
              try {
                window.external.addFavorite(window.location, document.title)
              } catch (e) {
                window.external.addToFavoritesBar(window.location, document.title)
              }
            } catch (e) {
              alert('您可以嘗試通過快捷鍵' + t + ' + D 加入到收藏夾~')
            }
          else alert('您可以嘗試通過快捷鍵' + t + ' + D 加入到收藏夾~')
        }),
      i.click(function () {
        window.scroll(0, 0), i.next().hide()
      })
  })
