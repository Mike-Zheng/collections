function _typeof(t) {
  return (_typeof =
    'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
      ? function (t) {
          return typeof t
        }
      : function (t) {
          return t && 'function' == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype
            ? 'symbol'
            : typeof t
        })(t)
}
function ownKeys(e, t) {
  var i,
    n = Object.keys(e)
  return (
    Object.getOwnPropertySymbols &&
      ((i = Object.getOwnPropertySymbols(e)),
      t &&
        (i = i.filter(function (t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable
        })),
      n.push.apply(n, i)),
    n
  )
}
function _objectSpread(e) {
  for (var t = 1; t < arguments.length; t++) {
    var i = null != arguments[t] ? arguments[t] : {}
    t % 2
      ? ownKeys(i, !0).forEach(function (t) {
          _defineProperty(e, t, i[t])
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i))
      : ownKeys(i).forEach(function (t) {
          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(i, t))
        })
  }
  return e
}
function _defineProperty(t, e, i) {
  return (
    e in t ? Object.defineProperty(t, e, { value: i, enumerable: !0, configurable: !0, writable: !0 }) : (t[e] = i), t
  )
}
define('setIdentity', ['utility'], function (require, exports, module) {
  function a() {
    var t = $.cookie('house_detail_stat') || '[]'
    return JSON.parse(t)
  }
  function r(t) {
    var e = t.length ? JSON.stringify(t) : null
    $.cookie('house_detail_stat', e, { expires: 1, path: '/', domain: '591.com.tw' })
  }
  var s = require('utility').T591_TOKEN
  return {
    setStat: function () {
      window.onmousedown = function (o) {
        document.querySelectorAll('[house-detail-stat]').forEach(function (t) {
          var e, i, n
          !t.contains(o.target) ||
            (3 === (e = t.getAttribute('house-detail-stat').split('-')).length &&
              ((i = { type: e[0], resource: e[1], post_id: e[2] }), (n = a().concat(i)), r(n)))
        })
      }
    },
    sendStat: function (e, t) {
      
    },
  }
}),
  define(
    '_qs',
    ['validform', 'template', 'pagination', 'xhcount', 'popbox', 'formLimit', 'login'],
    function (require, exports, module) {
      require('validform')
      var n = require('template')
      require('pagination'), require('xhcount'), require('popbox')
      var t = require('formLimit')
      require('login')
      t.check()
      $('#qs_type').val()
      var o = $('#qs_post_id').val(),
        a = 0
      $('#qs_content').elemcount({ maxChars: 500 })
      $('.qs-form').Validform({ tiptype: 4, ignoreHidden: !0, ajaxPost: !0 })
      function r(t, e) {
        var i = { type: '2', post_id: o, firstRow: t || '', totalRows: e || '' }
        $('#qs_template').html("<div class='loading'>loading...</div>"),
          $.ajax({
            type: 'POST',
            url: '/home/house/questionList',
            data: i,
            dataType: 'json',
            success: function (t) {
              var e
              '1' == t.status &&
                ((a = t.data.firstRow),
                (e = n.render('comment', t.data)),
                $('#qs_template').html(e),
                $('#Pagination').html(t.data.page),
                $.popbox.close('j_popbox_login'),
                $('.qs-form-host').Validform({ tiptype: 4, ignoreHidden: !0, ajaxPost: !0 }))
            },
          })
      }
      r(), (window.initQs = r)
      $('.detail-question').on('click', '.qs_update_ac', function () {
        $(this).parent().find('.qs_textarea').toggle(),
          $(this).parent().find('.qs_update_post').attr('data-type', $(this).attr('data-type')),
          $(this).parent().find('.qs_update_post').attr('data-id', $(this).attr('data-id'))
      }),
        $('.detail-question').on('click', '.qs_update_post', function () {
          var t = $(this).attr('data-ask'),
            e = $('.qs_update_text[textarea-ask=' + t + ']').val()
          if (e.length < 3 || 500 < e.length) return alert('輸入內容在3-500字'), !1
          var i = { module: 'question', action: 'replyQS', type: '2', post_id: o, content: e, pComment_id: t }
          $.post(
            '/index.php',
            i,
            function (t) {
              'ok' == t.status && (r(a), $('#qs_update_text').val(''))
            },
            'json'
          )
        }),
        $('.detail-question').on('click', '.qs_modify_post', function () {
          var t = $('.qs_update_text').val(),
            e = $(this).attr('data-ask'),
            i = $(this).attr('data-reply')
          if ((t = $('.qs_update_text[textarea-ask=' + e + ']').val()).length < 3 || 500 < t.length)
            return alert('輸入內容在3-500字'), !1
          var n = {
            module: 'question',
            action: 'updataQS',
            type: '2',
            post_id: o,
            content: t,
            pComment_id: e,
            comment_id: i,
          }
          $.post(
            '/index.php',
            n,
            function (t) {
              'ok' == t.status && (r(a), $('#qs_update_text').val(''))
            },
            'json'
          )
        }),
        $('.detail-question').on('click', '.qs_del_ac', function () {
          var t, e
          window.confirm('提問刪除後，你的回復也會被刪除，確認刪除嗎？') &&
            ((t = $(this).attr('aid')),
            (e = { post_id: o, qid: t, type: '2' }),
            $.get(
              '/index.php?module=question&action=delQS',
              e,
              function (t) {
                'ok' == t.status && (r(a), $('#qs_content').val(''), alert('刪除成功'))
              },
              'json'
            ))
        }),
        $('.detail-question').on('click', '.answer-pop', function (t) {
          $.ajax({
            type: 'GET',
            url: '/index.php?module=user&action=userAuth',
            dataType: 'json',
            success: function (t) {
              '1' == t.is_login
                ? alert('只有房東才能回復')
                : $.popbox({
                    id: 'j_popbox_login',
                    title: '登錄會員',
                    size: { width: '400px', height: '280px' },
                    type: 'iframe',
                    content: {
                      width: '100%',
                      height: '220px',
                      url: '/home/housing/userAuth?&callBack=initQs()',
                      scrolling: 'no',
                    },
                    shade: !0,
                  })
            },
          })
        }),
        (window.postQs = function () {
          var t = $('#qs_content').val(),
            e = { module: 'question', action: 'postAjaxQuestion', type: '2', post_id: o, content: t, is_ajax: '1' }
          $.post(
            '/index.php',
            e,
            function (t) {
              'ok' == t.status && (r(), $('#qs_content').val(''))
            },
            'json'
          )
        }),
        $('.detail-question').on('click', '#qs_post_btn', function (t) {
          t.preventDefault(),
            $.ajax({
              type: 'GET',
              url: '/index.php?module=user&action=userAuth',
              dataType: 'json',
              success: function (t) {
                var e, i
                '1' == t.is_login
                  ? ((e = $('#qs_content').val()),
                    (i = {
                      module: 'question',
                      action: 'postAjaxQuestion',
                      type: '2',
                      post_id: o,
                      content: e,
                      is_ajax: '1',
                    }),
                    $.post(
                      '/index.php',
                      i,
                      function (t) {
                        'ok' == t.status ? (r(), $('#qs_content').val('')) : 'error' == t.status && alert(t.errorInfo)
                      },
                      'json'
                    ))
                  : $.popbox({
                      id: 'j_popbox_login',
                      title: '登錄會員',
                      size: { width: '400px', height: '280px' },
                      type: 'iframe',
                      content: {
                        width: '100%',
                        height: '220px',
                        url: '/home/housing/userAuth?&callBack=postQs()',
                        scrolling: 'no',
                      },
                      shade: !0,
                    })
              },
            })
        }),
        $('.detail-question').on('click', '.pagePrev', function () {
          $(this).attr('data-first') && r($(this).attr('data-first'), $(this).attr('data-total'))
        }),
        $('.detail-question').on('click', '.pageNext', function () {
          $(this).attr('data-first') && r($(this).attr('data-first'), $(this).attr('data-total'))
        }),
        $('.detail-question').on('click', '.pageNum-form', function () {
          $(this).attr('data-first') && r($(this).attr('data-first'), $(this).attr('data-total'))
        }),
        $('#qs_content').attr('placeholder'),
        $('#qs_content').focus(function () {
          $(this).attr('placeholder', '')
        })
    }
  ),
  define('firebase', function (require, exports, module) {
    require('https://s.591.com.tw/widget/plugin/cookie.js')
    var e = -1 < location.host.search('.debug') ? 'debug' : -1 < location.host.search('.dev') ? 'dev' : '',
      i = 'fcm_pc_token',
      n = document.querySelector('.accreditPop'),
      o = window.Notification ? Notification.permission : '',
      a = {
        apiKey: 'AIzaSyC5iOyQAjnQ_R7HG1VsEx_tNaHVak_m770',
        authDomain: 'push-9d0cc.firebaseapp.com',
        databaseURL: 'https://push-9d0cc.firebaseio.com',
        projectId: 'push-9d0cc',
        storageBucket: 'push-9d0cc.appspot.com',
        messagingSenderId: '112034126422',
        appId: '1:112034126422:web:6683eff9796eaa4b9739f7',
      },
      r = 'BI1DQaKo4XXLaCL_YhSaks4nYhSb1em3FIXJjCwmfOR3J5ySYKqCiI72bibZIizGNkC-pCzonPqIi6WrhZHM9jA'
    function s() {
      t('https://www.gstatic.com/firebasejs/8.8.1/firebase-app.js').then(function () {
        t('https://www.gstatic.com/firebasejs/8.8.1/firebase-messaging.js').then(function () {
          navigator.serviceWorker
            .register('/firebase-messaging-sw.js')
            .then(function (t) {
              firebase.initializeApp(a),
                firebase
                  .messaging()
                  .getToken({ vapidKey: r, serviceWorkerRegistration: t })
                  .then(function (t) {
                    t
                      ? ((function (t) {
                          if ($.cookie(i) === t) return
                          $.cookie(i, t, { expires: 365, path: '/', domain: '.591.com.tw' }),
                            $.post('/home/data/bindUserDeviceToken', {
                              device: 'pc',
                              privacy_agree: 'default' === o ? 1 : '',
                              fcm_token: t,
                            }).then(function (t) {
                              1 === t.status &&
                                $.cookie('tw591__privacy_agree', '1', { expires: 365, path: '/', domain: '591.com.tw' })
                            })
                        })(t),
                        n && (n.style.display = 'none'))
                      : console.log('沒有可用的註冊令牌，請求權限來生成一個')
                  })
                  .catch(function (t) {
                    console.log('error', t)
                  })
            })
            .catch(function (t) {
              console.log('register error', t)
            })
        })
      })
    }
    function t(n) {
      return new Promise(function (e, i) {
        var t = document.createElement('script')
        ;(t.src = n),
          (t.onload = function (t) {
            e(t)
          }),
          (t.onerror = function (t) {
            i(t)
          }),
          document.body.appendChild(t)
      })
    }
    module.exports = {
      init: function () {
        'serviceWorker' in navigator &&
          'http:' !== location.protocol &&
          (function () {
            var t = window.Notification && Notification.permission
            if ('denied' === t) return
            if ('default' === t)
              return (
                n &&
                  ((n.style.display = 'block'),
                  (document.querySelector('.accreditPop > a').onclick = function () {
                    n.style.display = 'none'
                  })),
                Notification.requestPermission()
                  .then(function (t) {
                    'denied' !== t ? s() : console.log('用戶拒絕授權通知')
                  })
                  .catch(function (t) {
                    console.log('獲取權限失敗', t)
                  }),
                (function () {
                  var t = document.createElement('iframe'),
                    i = 0,
                    n = !0
                  ;(t.src = 'https://www.' + e + '591.com.tw/home/index/localStorage?type=syncNotification'),
                    (t.style.display = 'none'),
                    document.body.appendChild(t),
                    window.addEventListener('message', function (t) {
                      var e = t.data
                      'syncNotification' === e.type &&
                        location.hostname !== e.hostname &&
                        (i++, 'granted' === e.permission && (n = !1), 6 === i && n && s())
                    })
                })()
              )
            'granted' === t && s()
          })()
      },
    }
  }),
  define('confirmData', function (require, exports, module) {
    var t = { title: '當前建案還有儲值，請謹慎關閉', content: '', affirm: '不管，就是要關', cancel: '取消，溝通一下' }
    module.exports = {
      recycleHousing: t,
      dealHousing: t,
      closeHousing: t,
      soldOut: {
        title: '確認要成交下架嗎？',
        getContent: function () {
          return '物件下架，<span>精選推薦即失效，且支出的費用不予退還！</span>'
        },
        content: '',
        affirm: '確認下架',
        cancel: '取消',
      },
      modifi: {
        title: '確認要修改物件嗎？',
        getContent: function () {
          return '修改該物件【縣市】【鄉鎮】【類型】三項資料中任意一項，<span>精選推薦即失效，且支出的費用不予退還！</span>'
        },
        content: '',
        affirm: '確認修改',
        cancel: '取消',
      },
      close: {
        title: '確認要關閉物件嗎？',
        getContent: function () {
          return '物件關閉，<span>精選推薦即失效，且支出的費用不予退還！</span>'
        },
        content: '',
        affirm: '確認關閉',
        cancel: '取消',
      },
      recycleWare: {
        title: '確認要物件入回收站嗎？',
        getContent: function () {
          return '入回收站後，<span>精選推薦即失效，且支出的費用不予退還！</span>'
        },
        content: '',
        affirm: '確認回收',
        cancel: '取消',
      },
    }
  }),
  define('videoStat', ['utility'], function (require, exports, module) {
    var t = require('utility'),
      e = t.prefixing,
      n = t.T591_TOKEN,
      i = {
        play: '播放',
        pause: '暫停',
        volumechange: '音量',
        quality_start: '畫質',
        ratechange: '設置速度',
        fullscreen: '全屏',
        replay: '重播',
        loop: '設置循環播放',
      },
      o = ['timeupdate', 'ended', 'canplay']
    e(i, '線上賞屋_播放器_')
    var a = !1,
      r = !1,
      s = 0,
      d = 0,
      l = 'video-iframe'
    window.addEventListener(
      'message',
      function (t) {
        'localVideo' === t.data.type &&
          (function (t) {
            if (!(i[t.event] || o.includes(t.event))) return
            switch (t.event) {
              case 'quality_start':
                window.hotEventSend(''.concat(i[t.event]).concat(t.quality))
                break
              case 'replay':
                a = true
                window.hotEventSend(''.concat(i[t.event]))
                break
              case 'ended':
                r = true
                break
              case 'timeupdate':
                s = t.time
                break
              case 'canplay':
                d = t.time
                break
              default:
                window.hotEventSend(''.concat(i[t.event]))
                break
            }
          })(t.data.data)
      },
      !1
    ),
      window.addEventListener(
        'unload',
        function () {},
        false
      )
    var c,
      u,
      p = function t() {
        document.querySelectorAll('.video-suspension-guide').forEach(function (t) {
          t.style.display = 'none'
        }),
          window.removeEventListener('blur', t)
      }
    localStorage.getItem('hasShowSuspensionGuide') ||
      (((c = document.createElement('div')).className = 'video-suspension-guide'),
      (c.innerText = '【影片賞屋】點擊畫面即可播放，帶您感受房屋更多內部細節！'),
      (u = {
        display: 'block',
        padding: '12px 24px',
        background: 'rgba(255, 128, 0, 0.8)',
        'box-shadow': '0px 0px 6px 0px rgba(0,0,0,0.10)',
        'font-size': '16px',
        'font-weight': '600',
        'line-height': 1,
        color: '#fff',
        'border-radius': '20px',
        position: 'absolute',
        bottom: '70px',
        left: '50%',
        transform: 'translateX(-50%)',
        'white-space': 'nowrap',
      }),
      Object.keys(u).forEach(function (t) {
        c.style[t] = u[t]
      }),
      document.querySelectorAll('[video-player-box]').forEach(function (t) {
        window.addEventListener('blur', p), t.style.position || (t.style.position = 'relative'), t.appendChild(c)
      }),
      localStorage.setItem('hasShowSuspensionGuide', !0))
  }),
  define('_trackBid', function (require, exports, module) {
    ;[{ id: '#recomBuildTemplate', bid: '3178' }].forEach(function (t) {
      return (
        (e = t.id),
        (i = t.bid),
        void (
          0 !== $(e).length &&
          $(e).on('click', 'a', function (t) {
            var e = decodeURIComponent($.trim($(this).attr('href')))
            e.includes('/home/housing/detail') &&
              (t.preventDefault ? t.preventDefault() : (window.event.returnValue = !0),
              e.includes('591.com.tw/stats/event/redirect')
                ? (e = $.trim($(this).attr('href')).replace(/(url=[^&]+)/gi, '$1' + encodeURIComponent('&bid=' + i)))
                : (e += '&bid='.concat(i)),
              '_blank' === $(this).attr('target') ? window.open(e) : (window.location.href = e))
          })
        )
      )
      var e, i
    })
  }),
  define('vue-vr-feed-back', ['layer', 'utility'], function (require, exports, module) {
    require('layer')
    var t = require('utility')
    Vue.component('VrFeedBack', {
      name: 'VrFeedBack',
      template: '#vr-feed-back',
      data: function () {
        return {
          show: !1,
          status: !1,
          reasonData: [
            { id: 1, txt: '畫面清晰度較差' },
            { id: 2, txt: '界面操作較難' },
            { id: 3, txt: '場景切換不順暢' },
            { id: 4, txt: 'VR房屋影片重複' },
            { id: 5, txt: '無房屋格局圖指引' },
          ],
          selectedReason: [],
          reason: '',
        }
      },
      methods: {
        close: function () {
          ;(this.selectedReason = []), (this.reason = ''), (this.status = !1), (this.show = !1), t.freezeBody(!1)
        },
        showDialog: function () {
          this.show = !0
          'function' == typeof hotEventSend && hotEventSend('中古屋詳情頁_體驗反饋_點擊量'), t.freezeBody(!0)
        },
        selectReason: function (t) {
          var e = this.selectedReason.indexOf(t)
          e < 0 ? this.selectedReason.push(t) : this.selectedReason.splice(e, 1)
        },
        submitForm: function () {
          var e = this,
            t = { device: 'pc', type: $('#hid_type').val(), post_id: $('#hid_postId').val() }
          ;(t.selected_opt = this.selectedReason.join()),
            (t.reason = this.reason),
            this.checkForm(t) &&
              $.ajax({
                type: 'POST',
                url: '/home/vr/feedback',
                data: t,
                dataType: 'json',
                success: function (t) {
                  t.status &&
                    (layer.msg('提交成功'),
                    setTimeout(function () {
                      e.close()
                    }, 2e3))
                },
              })
        },
        checkForm: function (t) {
          return (
            $('.error_box').text(' '),
            '' !== t.selected_opt || '' !== t.reason || ($('.error_box').text('請選擇或輸入反饋內容'), !1)
          )
        },
      },
    }),
      new Vue({}).$mount('#vueDom')
  }),
  define('_residence', ['roll'], function (require, exports, module) {
    require('roll')
    var t = $('#hid_postId').val(),
      e = $('#sectionId').val()
    ;-1 !== [3, 8, 9, 10, 11].indexOf(~~e) &&
      $('.bottomTip').roll({
        threshold: 150,
        showCallBack: function () {
          $.get('/home/illegalHouse/check', { post_id: t, type: 2 }).then(function (t) {
            t.status && t.data.illegal && $('.residence').show()
          })
        },
      })
  }),
  (function (t, e) {
    if (
      'object' == ('undefined' == typeof exports ? 'undefined' : _typeof(exports)) &&
      'object' == ('undefined' == typeof module ? 'undefined' : _typeof(module))
    )
      module.exports = e()
    else if ('function' == typeof define && define.amd) define('UNION', [], e)
    else {
      var i = e()
      for (var n in i)
        ('object' == ('undefined' == typeof exports ? 'undefined' : _typeof(exports)) ? exports : t)[n] = i[n]
    }
  })(self, function () {
    'use strict'
    var n = {
        d: function (t, e) {
          for (var i in e) n.o(e, i) && !n.o(t, i) && Object.defineProperty(t, i, { enumerable: !0, get: e[i] })
        },
        o: function (t, e) {
          return Object.prototype.hasOwnProperty.call(t, e)
        },
        r: function (t) {
          'undefined' != typeof Symbol &&
            Symbol.toStringTag &&
            Object.defineProperty(t, Symbol.toStringTag, { value: 'Module' }),
            Object.defineProperty(t, '__esModule', { value: !0 })
        },
      },
      t = {}
    n.r(t),
      n.d(t, {
        default: function () {
          return g
        },
      })
    var a = function (t) {
        if (0 < document.cookie.length) {
          var e = document.cookie.indexOf(t + '=')
          if (-1 !== e) {
            e = e + t.length + 1
            var i = document.cookie.indexOf(';', e)
            return -1 === i && (i = document.cookie.length), decodeURIComponent(document.cookie.substring(e, i))
          }
        }
        return ''
      },
      e = []
    ;(e[1] = { id: 1, txt: '台北市' }),
      (e[3] = { id: 3, txt: '新北市' }),
      (e[6] = { id: 6, txt: '桃園市' }),
      (e[4] = { id: 4, txt: '新竹市' }),
      (e[5] = { id: 5, txt: '新竹縣' }),
      (e[21] = { id: 21, txt: '宜蘭縣' }),
      (e[2] = { id: 2, txt: '基隆市' }),
      (e[8] = { id: 8, txt: '台中市' }),
      (e[10] = { id: 10, txt: '彰化縣' }),
      (e[14] = { id: 14, txt: '雲林縣' }),
      (e[7] = { id: 7, txt: '苗栗縣' }),
      (e[11] = { id: 11, txt: '南投縣' }),
      (e[17] = { id: 17, txt: '高雄市' }),
      (e[15] = { id: 15, txt: '台南市' }),
      (e[12] = { id: 12, txt: '嘉義市' }),
      (e[13] = { id: 13, txt: '嘉義縣' }),
      (e[19] = { id: 19, txt: '屏東縣' }),
      (e[22] = { id: 22, txt: '台東縣' }),
      (e[23] = { id: 23, txt: '花蓮縣' }),
      (e[24] = { id: 24, txt: '澎湖縣' }),
      (e[25] = { id: 25, txt: '金門縣' }),
      (e[26] = { id: 26, txt: '連江縣' })
    function o(t) {
      return new RegExp(/^\d$/g).test(t) ? '0' + t : t
    }
    function u(t) {
      return t
        ? ((t = parseInt(t)),
          (i = parseInt(t % 60)),
          (e = parseInt((t % 3600) / 60)),
          (n = parseInt((t % 3600) / 3600 / 60)),
          o(n) + ':' + o(e) + ':' + o(i))
        : ''
      var e, i, n
    }
    function p(t, e) {
      var i = document.createElement('script')
      ;(i.type = 'text/javascript'),
        (i.src = t),
        (i.onload = i.onreadystatechange =
          function () {
            ;(this.readyState && 'loaded' !== this.readyState && 'complete' !== this.readyState) ||
              ((this.onload = this.onreadystatechange = null), this.parentNode.removeChild(this)),
              e && e()
          }),
        document.getElementsByTagName('head')[0].appendChild(i)
    }
    var i = e,
      r = a('T591_TOKEN') || window.T591_TOKEN,
      s = !!document.getElementById('unionTouch'),
      d = a(s ? 'regionCookieId' : 'urlJumpIp') || 1,
      l = i[i[d] ? d : 1].txt,
      c = {}
    function h(i, s) {
      var d = this,
        e = '300px',
        n = '250px'
      function o(t) {
        var e,
          i,
          n,
          o = ''
        return (
          -1 < t.indexOf('watch')
            ? ((i = t || location.search),
              (n = {}),
              i.length &&
                i
                  .split('?')[1]
                  .split('&')
                  .forEach(function (t) {
                    ;(e = t.split('=')), (n[e[0]] = e[1])
                  }),
              (o = n.v))
            : -1 < t.indexOf('youtu.be')
            ? (o = t.replace('https://youtu.be/', ''))
            : -1 < t.indexOf('embed') && (o = t.replace('https://www.youtube.com/embed/', '')),
          o
        )
      }
      s.push(i),
        d.defaults.isTouch && ((e = '100%'), (n = '206px')),
        (window.onYouTubeIframeAPIReady = function () {
          for (var r = {}, t = 0; t < s.length; t++)
            !(function (a) {
              window['player' + s[a].aid] = new YT.Player('ytbPlayer' + s[a].aid, {
                width: e,
                height: n,
                videoId: o(s[a].youtube_url),
                playerVars: {
                  autoplay: 1,
                  controls: 1,
                  iv_load_policy: 3,
                  playlist: o(s[a].youtube_url),
                  loop: 1,
                  modestbranding: 1,
                  origin: 1,
                  playsinline: 1,
                  showinfo: 0,
                },
                events: {
                  onReady: function (e) {
                    var i = 'timer' + s[a].aid,
                      n = parseInt(window['player' + s[a].aid].getDuration()),
                      o = document.getElementById('ytbPlayer' + s[a].aid + '-time')
                    e.target.mute(),
                      d.scrollEventHandler({
                        ele: e.target.a,
                        twoThirdShowEvent: function () {
                          if ('{}' !== JSON.stringify(c) && d.defaults.isTouch)
                            for (var t in c) clearInterval(c[t]), delete c[t]
                          ;(c[i] = setInterval(function () {
                            if (!o.parentNode && d.defaults.isTouch) return clearInterval(c[i]), !1
                            var t = window['player' + s[a].aid].getCurrentTime()
                            ;(r[i] = n - t), (o.innerText = u(r[i])), r[i]--, 0 === r[i] && (r[i] = n)
                          }, 1e3)),
                            (document.getElementById(e.target.getIframe().id + '-img').style.display = 'none'),
                            e.target.playVideo()
                        },
                        twoThirdHiddeEvent: function () {
                          clearInterval(c[i]), e.target.pauseVideo()
                        },
                      })
                  },
                  onStateChange: function (t) {
                    1 === t.data &&
                      document.getElementById('playYtbVideo') &&
                      (document.getElementById('playYtbVideo').style.display = 'none')
                  },
                },
              })
            })(t)
        }),
        this.getScript('https://s.591.com.tw/union/generator/lib/iframe_api.js', function () {
          YT.Player && window.onYouTubeIframeAPIReady && window.onYouTubeIframeAPIReady()
        })
      var a = document.getElementById('ytbPlayer' + i.aid + '-voice')
      a.addEventListener('click', function (t) {
        var e = '<span class="no-voice"></span>'
        'no-voice' === ('ytbVoice' === t.target.className ? t.target.children[0] : t.target).className
          ? ((e = '<b class="voice"></b>'), window['player' + i.aid].unMute())
          : window['player' + i.aid].mute(),
          (a.innerHTML = e)
      }),
        document.getElementById('playYtbVideo').addEventListener('click', function () {
          window['player' + i.aid].playVideo()
        })
    }
    function f(t, e, i, n) {
      var o = this.getGAString(t.position_name, t.order_number, 1)
      this.hotEventSend(o)
      var a = {
          href: t.url && this.addToken(t.event_click_url),
          title: t.txt,
          target: !this.defaults.isTouch,
          attrValue: this.getGAString(t.position_name, t.order_number),
          attrHref: (t.hls_video_url || t.youtube_url) && t.event_media_url,
        },
        r = this.createLink(a)
      return (
        'string' == typeof e ? (r.innerHTML = e) : r.appendChild(e),
        i &&
          function (t, e, i, n) {
            var o,
              a,
              r,
              s,
              d,
              l,
              c,
              u,
              p,
              h = this
            t &&
              ((n.style = 'display:block; width:100%; min-height:211px'),
              ((o = h.createLink(i)).style = 'position:absolute; left:0; top:0; width:100%; height:100%; z-index:8;'),
              n.appendChild(o),
              (a = '250px'),
              (r = 'width:44px; height:44px; bottom:35px;'),
              h.defaults.isTouch && ((a = '193px'), (r = 'width:.8rem; height:.8rem; top:161px;')),
              ((s = document.createElement('div')).className = 'ytbVoice'),
              (s.id = n.getElementsByClassName('ytbPlayer')[0].id + '-voice'),
              (s.innerHTML = '<span class="no-voice"></span>'),
              (s.style = 'position:absolute;' + r + 'left:0; z-index:9;'),
              n.appendChild(s),
              ((d = h.createLink(i)).id = n.getElementsByClassName('ytbPlayer')[0].id + '-img'),
              (d.style =
                'background:url(' +
                e.img +
                ') no-repeat center/cover;position:absolute;top:0;left:0;width:100%;height:' +
                a +
                ';z-index:8;'),
              n.appendChild(d),
              ((l = document.createElement('strong')).className = 'ytbTime'),
              (l.id = n.getElementsByClassName('ytbPlayer')[0].id + '-time'),
              n.appendChild(l)),
              h.defaults.isTouch
                ? (((c = h.createLink(i)).innerHTML = e.txt),
                  (c.style =
                    'display:block; width:100%; background-color:#f5f5f5; margin-top: -5px; font-size:14px; color:#222; padding: .2rem;; border-bottom:1px solid #e6e6e6;'),
                  n.appendChild(c))
                : ((u = document.createElement('p')).classList.add('title'), (u.innerHTML = e.txt), n.appendChild(u)),
              h.defaults.isTouch &&
                t &&
                (((p = document.createElement('div')).id = 'playYtbVideo'),
                (p.style =
                  'position: absolute; width:2rem; height:2rem; top:42%; left:50%; transform: translate(-50%, -50%); z-index: 9;'),
                n.appendChild(p))
          }.call(this, n, t, a, r),
        r.appendChild(
          function (t, e) {
            var i = document.createElement('div')
            return (
              i.setAttribute('data-union-stat', this.addToken(t)),
              i.setAttribute('data-gtm-str', e),
              (i.className = 'unionDataStat'),
              (i.innerHTML = '<img src="' + this.addToken(t) + '" style="display:none"/>'),
              i
            )
          }.call(this, t.event_show_url, o)
        ),
        r
      )
    }
    function m(d, t) {
      var l,
        c,
        e = t.length
      0 < e
        ? ((l = t[this.random(0, e - 1)]),
          (c = this).creatHTML(l).then(function (t) {
            var i, e, n, o, a, r, s
            ;(d.innerHTML = t.outerHTML),
              c.scrollSendStat(d, l),
              4 === l.pd_type &&
                (l.hls_video_url
                  ? ((i = d.getElementsByTagName('video')[0]),
                    (s = i),
                    p('//s.591.com.tw/widget/plugin/hls.light.min.js', function () {
                      var t
                      Hls.isSupported() &&
                        ((t = new Hls()).loadSource(s.src),
                        t.attachMedia(s),
                        t.on(Hls.Events.MANIFEST_PARSED, function () {
                          s.play()
                            .then(function () {
                              ;(s.muted = !0), s.play()
                            })
                            .catch(function () {
                              ;(s.muted = !0), s.play()
                            })
                        }))
                    }),
                    (e = document.createElement('i')).classList.add('time'),
                    d.appendChild(e),
                    (n = d.getElementsByTagName('i')[0]),
                    (o = document.createElement('span')).classList.add('no-voice'),
                    c.defaults.isTouch
                      ? ((a = document.createElement('div')).classList.add('voice-box'),
                        (a.style = 'position: absolute;width:0.8rem;height:1rem;bottom:.88rem;left:0;z-index: 99;'),
                        a.appendChild(o),
                        (o = a),
                        (r = document.createElement('div')).classList.add('btn-box'),
                        (r.innerHTML = '<em></em>'),
                        (r.style = 'position: absolute;width:1rem;height:1rem;top:0;right:0;z-index: 9;'),
                        d.appendChild(r),
                        navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/) &&
                          (i.setAttribute('webkit-playsinline', !0),
                          i.setAttribute('playsinline', !0),
                          i.setAttribute('x-webkit-airplay', 'allow'),
                          i.setAttribute('x5-playsinline', !0)))
                      : d.addEventListener('click', function (t) {
                          var e = (t = t || window.event).target
                          'span' === e.nodeName.toLowerCase() &&
                            (e.classList.contains('no-voice')
                              ? ((i.muted = !1), e.classList.remove('no-voice'), e.classList.add('voice'))
                              : ((i.muted = !0), e.classList.remove('voice'), e.classList.add('no-voice')))
                        }),
                    d.appendChild(o),
                    (i.onloadedmetadata = function () {
                      var t = u(i.duration)
                      n.innerText = t
                    }),
                    (i.ontimeupdate = function () {
                      var t = i.duration - i.currentTime,
                        t = u(t)
                      n.innerText = t
                    }))
                  : l.youtube_url && h.call(c, l, c.defaults.arrAid))
          }))
        : (d.innerHTML = '')
    }
    var v
    function g(t) {
      if (!(this instanceof g)) return new g(t)
      if ((t = t || {}).pid) {
        var e = !!document.getElementById('unionTouch')
        for (var i in ((this.defaults = {
          pid: '',
          callback: null,
          isCreatImg: !0,
          regionid: a(e ? 'regionCookieId' : 'urlJumpIp') || 1,
          param: '',
          arrAid: [],
          isTouch: e,
        }),
        t))
          t.hasOwnProperty(i) && (this.defaults[i] = t[i])
        var n = new Date().toLocaleDateString().replace(new RegExp('/', 'gm'), '-'),
          o = -1 < location.host.indexOf('dev') || -1 < location.host.indexOf('debug') ? '.debug' : ''
        ;(this.scriptUrl =
          ''),
          this.init()
      }
    }
    return (
      ((window.UNION_SHOW = g).prototype = {
        init: function () {
          this.getScript(this.scriptUrl), this.callbackFun()
        },
        callbackFun: function () {
          var e = this
          window['unionName_' + e.defaults.pid] = function (t) {
            ;(function (t) {
              var e,
                i,
                n = Object.keys(t.data),
                o = n[0],
                a = 1 === n.length ? t.data[o] : t.data
              this.defaults.callback && this.defaults.callback.call(this, a),
                this.defaults.isCreatImg &&
                  ((e = t.data[o]), (i = document.getElementById('UNION_' + this.defaults.pid)) && m.call(this, i, e))
            }.call(e, t),
              (window['unionName_' + e.defaults.pid] = function () {
                console.warn('未找到unionName_' + e.defaults.pid + '方法！')
              }))
          }
        },
        random: function (t, e) {
          return parseInt(Math.random() * (e - t + 1) + t, 10)
        },
        shuffle: function (t) {
          return t.sort(function () {
            return 0.5 < Math.random() ? -1 : 1
          })
        },
        getNumberArray: function (t) {
          for (var e = [], i = 0; i < t; i++) e.push(i)
          return e
        },
        addToken: function (t) {
          return t + '&_u=' + r
        },
        getGAString: function (t, e, i, n) {
          return (1 === i ? '廣告瀏覽-Union' : '廣告點擊-Union') + '_' + (n || l) + '-' + t + '_' + (e || 1)
        },
        getScript: p,
        scrollEventHandler: function (t) {
          var i = {
            ele: t.ele || '',
            twoThirdHiddeEvent: t.twoThirdHiddeEvent || '',
            twoThirdShowEvent: t.twoThirdShowEvent || '',
            triggerOne: t.triggerOne || !0,
          }
          if ('' === i.ele) return !1
          function n() {
            if (!i.ele.clientHeight) return document.removeEventListener('scroll', n, !1), !1
            var t,
              e = {
                top: (t = (i.ele.clientHeight ? i.ele : document.getElementById(i.ele.id)).getBoundingClientRect()).top,
                left: t.left,
                bottom: t.bottom,
                right: t.right,
                width: t.width || t.right - t.left,
                height: t.height || t.bottom - t.top,
              }
            e.top <= a - (2 * e.height) / 3 &&
              (2 * e.height) / 3 <= e.bottom &&
              (i.triggerOne
                ? (void 0 !== o && !o) || (i.twoThirdShowEvent && i.twoThirdShowEvent(), (o = !1))
                : i.twoThirdShowEvent && i.twoThirdShowEvent()),
              (a < e.top + e.height / 3 || e.bottom < e.height / 3) &&
                (i.triggerOne
                  ? (void 0 !== o && o) || (i.twoThirdHiddeEvent && i.twoThirdHiddeEvent(), (o = !0))
                  : i.twoThirdHiddeEvent && i.twoThirdHiddeEvent())
          }
          var o,
            a = window.innerHeight || document.documentElement.clientHeight
          n(), document.removeEventListener('scroll', n, !1), document.addEventListener('scroll', n, !1)
        },
        scrollSendStat: function (t, e) {
          var i,
            n = this
          ;(i = e),
            n.scrollEventHandler({
              ele: t,
              twoThirdShowEvent: function () {
                n.sendUnionStat(n.getGAString(i.position_name, i.order_number, 1), n.addToken(i.event_show_url))
              },
            })
        },
        nativeDataAdapter: function (t, e) {
          for (var i, n = !1, o = this, a = t.length, r = 0; r < a; r++) {
            void 0 !== t[r].is_native &&
              1 === t[r].is_native &&
              ((n = !0),
              (i = e || t[r].position_name),
              (t[r].event_show_url = o.addToken(t[r].event_show_url)),
              (t[r].event_click_url = o.addToken(t[r].event_click_url)),
              (t[r].data_gtm_click = o.getGAString(i, t[r].native_orderno, null, t[r].region || t[r].region_name)),
              (t[r].data_gtm_show = o.getGAString(i, t[r].native_orderno, 1, t[r].region || t[r].region_name)),
              o.hotEventSend(t[r].data_gtm_show))
          }
          return { data: t, isNative: n }
        },
        hotEventSend:
          ((v = function (e) {
            try {
              hotEventSend(e)
            } catch (t) {
              var i = e && e.split('_')
              e &&
                dataLayer.push({
                  event: 'public_hot_event',
                  hot_event_1: i[0],
                  hot_event_2: i[1],
                  hot_event_3: i[2],
                  hot_event_4: i[3],
                })
            }
          }),
          (w.toString = function () {
            return v.toString()
          }),
          w),
        sendUnionStat: function (t, e) {
          this.hotEventSend(t), (new Image().src = e)
        },
        createLink: function (t) {
          var e = {
              href: t.href || 'javascript:;',
              title: t.title || '',
              target: t.target && !0,
              attrName: t.attrName || 'data-gtm-stat',
              attrValue: t.attrValue || 'UnionEvent_缺省_' + t.title,
              attrHref: t.attrHref,
            },
            i = document.createElement('a')
          return (
            i.setAttribute(e.attrName, e.attrValue),
            t.attrHref && i.setAttribute('data-href', e.attrHref),
            (i.href = e.href),
            (i.className = 'union-wrap'),
            e.target && t.href && (i.target = '_blank'),
            i
          )
        },
        creatHTML: function (s) {
          var d = this
          return new Promise(function (e, t) {
            var i, n, o, a, r
            2 === s.pd_type
              ? e(f.call(d, s, s.txt))
              : 4 === s.pd_type && (s.hls_video_url || s.youtube_url)
              ? ((i = !s.hls_video_url && s.youtube_url),
                (n = s),
                (o = i),
                new Promise(function (t, e) {
                  var i
                  o
                    ? t('<div class="ytbPlayer" id="ytbPlayer' + n.aid + '" data-aid="' + n.aid + '"></div>')
                    : (((i = document.createElement('video')).src = n.hls_video_url),
                      (i.autoplay = !0),
                      (i.loop = !0),
                      (i.style = 'background:url(' + n.img + ') 0% 0% / 100% 100% no-repeat'),
                      i.setAttribute('muted', 'true'),
                      (i.id = 'customVideo'),
                      (i.onload = t(i)),
                      (i.onerror = e(new Error('Could not load image at ' + i.src))))
                }).then(function (t) {
                  e(f.call(d, s, t, !0, i))
                }))
              : ((a = { src: s.img }),
                (r = { src: a.src || '', alt: a.alt || '', data: a.data || null }),
                new Promise(function (t, e) {
                  var i = new Image()
                  ;(i.onload = t(i)), (i.onerror = e(new Error('Could not load image at ' + r.src))), (i.src = r.src)
                }).then(function (t) {
                  e(f.call(d, s, t, 41 === d.defaults.pid && s.txt))
                }))
          })
        },
        createManyHTML: function (t, e, i, n) {
          var o = (function (t, e) {
            for (var i = [], n = {}, o = 0, a = 0, r = t.length; a < r; a++) {
              var s = t[a]
              n.hasOwnProperty(s[e]) ? i[n[s[e]]].items.push(s) : ((n[s[e]] = o++), i.push({ name: s[e], items: [s] }))
            }
            return i
          })(t, n || 'row')
          i && (o = this.shuffle(o))
          for (var a = 0; a < o.length; a++) {
            var r = o[a],
              s = r.name
            ;('saleListRight' !== i && 'rentListRight' !== i) || (s = a + 1)
            var d = document.getElementById(e + s)
            d && m.call(this, d, r.items)
          }
        },
      }),
      t
    )
    function w(t) {
      return v.apply(this, arguments)
    }
  }),
  define('_photoPlay', function (require, exports, module) {
    var u
    ;(u = jQuery).fn.photoPlay = function (t) {
      var o = u.extend(
        { speed: 'fast', thumWidth: 110, thumNum: 3, _width: 600, _height: 460, userId: '', otherMedia: !1 },
        t
      )
      return this.each(function () {
        var t = u(this),
          s = t.find('.img_main'),
          e =
            (s.children('img').attr('maxwidth') || o._width,
            s.children('img').attr('maxheight') || o._height,
            t.find('.img_prev')),
          i = e.find('.prev_left'),
          n = e.find('.prev_right'),
          d = e.find('.img_list'),
          l = (o.thumWidth, o.thumNum, u('#hid_imgs').val())
        1 == (l = JSON.parse(l))[0].is_video ? u('#big-swiper-video').hide() : u('#big-swiper-video').show(),
          d.find('a').click(function () {
            d.find('ol li a').removeClass('selected'), u(this).addClass('selected')
            var t = u(this).hasClass('is_video'),
              e = s.find('.g-video-box')
            t ? (e.show(), u('#big-swiper-video').hide()) : (e.hide(), u('#big-swiper-video').show())
            var i = u(this).hasClass('is_full'),
              n = s.find('.iframe-wrap')
            i ? n.show() : n.hide()
            var o = u(this).parent().index(),
              a = l[o].big,
              r = new Image()
            ;(r.src = a),
              (r.onload = function () {
                s.children('img').hide(), s.children('img').attr('src', a), s.children('img').fadeIn()
              }),
              c(o)
          }),
          u('#big-swiper-video').click(function (t) {
            t.stopPropagation(),
              l.forEach(function (t, e) {
                1 == t.is_video &&
                  (d.find('ol li a').removeClass('selected'),
                  d.find('ol li a').eq(e).addClass('selected'),
                  c(e),
                  s.find('.g-video-box').show(),
                  s.find('.iframe-wrap').hide(),
                  s.children('img').hide(),
                  u('#big-swiper-video').hide())
              })
          }),
          i.click(function () {
            d.find('a.selected').parent().prev().find('a').click()
          }),
          n.click(function () {
            d.find('a.selected').parent().next().find('a').click()
          })
        function c(t) {
          0 == t ? i.css({ opacity: 0.3, cursor: 'default' }) : i.css({ opacity: 1, cursor: 'pointer' }),
            t == d.find('ol li').length - 1
              ? n.css({ opacity: 0.3, cursor: 'default' })
              : n.css({ opacity: 1, cursor: 'pointer' })
          var e = u('.img_list ol li').length
          window.innerWidth < 1300 && t == e - 1 && 2 < e
            ? d.find('ol').animate({ left: -132 * parseInt(e - 5) - 80 }, o.speed)
            : window.innerWidth < 1300 &&
              t == e - 2 &&
              2 < e &&
              d.find('ol').animate({ left: -132 * parseInt(e - 5) }, o.speed),
            e - t < 3 ||
              (2 < t
                ? d.find('ol').animate({ left: -132 * parseInt(t - 2) }, o.speed)
                : d.find('ol').animate({ left: 0 }, o.speed))
        }
        c(0)
      })
    }
  }),
  define(
    'houseDetail',
    [
      'template',
      '_photoPlay',
      'lazyload',
      'lazyloadImg',
      'validform',
      'layer',
      'popbox',
      'roll',
      'cookie',
      'UNION',
      '_residence',
      'vue-vr-feed-back',
      '_trackBid',
      'videoStat',
      'confirmData',
      'login',
      'qrcode',
      'stat',
      'utility',
      'firebase',
      'photoScroll',
      '_qs',
      'setIdentity',
    ],
    function (require, exports, module) {
      var a = require('template')
      require('_photoPlay'),
        require('lazyload'),
        require('lazyloadImg'),
        require('validform'),
        require('layer'),
        require('popbox'),
        require('roll'),
        require('cookie'),
        require('UNION'),
        require('_residence'),
        require('vue-vr-feed-back'),
        require.async('/home/js/_mustStatis'),
        require.async('behaviorRecord'),
        require('_trackBid'),
        require('videoStat')
      var t,
        e,
        i,
        n,
        o = require('confirmData'),
        r = (require('login'), $('#hid_postId').val())
      new Date()
      ;(t = $('.j-phone-trigger')),
        (e = $('.j-phone')),
        (i = $('#hid_postId').val()),
        (n = ''.concat(HOST.www_env, '/index.php')),
        t.length &&
          t.click(function () {
            $.post(n, { module: 'stat', action: 'RSmobileClickNum', type: 2, post_id: i }),
              t.hide(),
              e.show(),
              $.cookie('showMobile_2_' + i, 1, { expires: 365, path: '/', domain: HOST.sale_env })
          }),
        require('qrcode')
      var s,
        d,
        l,
        c,
        u,
        p,
        h,
        f,
        m,
        v = $('.j-line-wrap'),
        g = ''.concat(HOST.m_env, '/v2/sale/').concat(r, '?aid=').concat(1932),
        w = 'http://line.me/R/msg/text/?我在591房屋交易網發現好房屋啦 ' + g
      function _() {
        window.open(
          'https://timeline.line.me/social-plugin/share?url=' + location.href + '?aid=1932',
          '_blank',
          'width=519, height=577'
        )
      }
      function y() {
        ;(l = ((p + h) / (f + 1)) * 100),
          f <= p + h &&
            setTimeout(function () {
              $('#showBoxTips').length &&
                ($('.j-progress-bar').css('width', '100%'),
                $('body').stop().animate({ scrollTop: 9999 }, 500),
                setTimeout(function () {
                  ;(m = !1),
                    $('#j_shade_showBoxTips').remove(),
                    $('#showBoxTips').remove(),
                    setTimeout(function () {
                      window.print()
                    }, 100)
                }, 800))
            }, 3e3)
      }
      $('#qrcode-line').html(qrcode(w, 120)),
        $('#qrcode-mobile').html(qrcode('https://' + g, 160)),
        $('#qrcode-tel').html(qrcode('https://' + g + '&qrcode=tel', 130)),
        $('.info-host-qrcode')
          .mouseover(function () {
            hotEventSend('中古屋_小二維碼移入')
          })
          .mouseout(function () {
            hotEventSend('中古屋_小二維碼移出')
          }),
        v.click(_),
        $('.detail-title-func.line').click(_),
        $('.j-share-fb').on('click', function () {
          var t = $(this).attr('data-href')
          window.open('http://www.facebook.com/sharer.php?u=' + t + '?aid=1934', 'facebook_frm', 'height=450,width=560')
        }),
        $('#j_photo_play').photoPlay({ thumWidth: 118, thumNum: 5, _width: 730, _height: 460, otherMedia: !0 }),
        500 <= $('.detail-feature-text').height() && $('.detail-feature-more').show(),
        $('.detail-feature-more').click(function () {
          $('.detail-feature-text').css('max-height', 'none'), $(this).hide()
        }),
        $('.pic-box-more').click(function () {
          var t = $('#hid_imgs').val(),
            e = { arr: (t = JSON.parse(t)) }
          $('.pic-box-more').hide()
          var i = a('picTpl', e)
          document.getElementById('house-pic-box').innerHTML = i
        }),
        $('.nav-li').click(function () {
          $(this).addClass('nav-on').siblings().removeClass('nav-on')
        }),
        $('#img_list').find('ol li:first-child a').addClass('selected'),
        $('img.lazy').lazyloadImg({ effect: 'fadeIn' }),
        $('.detail-map-box').show().lazyload(),
        (s = $('.info-detail-a')),
        (d = $('.info-detail-show')),
        1 == $('#hid_is_admin').val()
          ? s.click(function () {
              d.toggle()
            })
          : s
              .on('mouseover', function () {
                d.show()
              })
              .on('mouseout', function () {
                d.hide()
              }),
        (c = $('img.lazy.pic-box-img')),
        (u = $('.detail-map-box')),
        (h = p = 0),
        (f = c.length + u.length),
        (m = !1),
        c.on('complete', function () {
          ;(p += 1), m && (y(), $('.j-progress-bar').css('width', l + '%'))
        }),
        u.on('complete', function () {
          ;(h += 1), m && (y(), $('.j-progress-bar').css('width', l + '%'))
        }),
        $('#detailPrint').click(function () {
          c.length === p && u.length === h
            ? window.print()
            : ((m = !0),
              y(),
              $.popbox({
                id: 'showBoxTips',
                style: 'popboxDefault',
                title: '列印啟動中..請稍等',
                size: { width: '420px', height: '120px' },
                type: 'html',
                content:
                  '<div style="padding: 15px 20px 0 20px">                    <div class="progress">                        <div class="progress-bar j-progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style=width: "' +
                  l +
                  '%;"></div>                    </div>                </div>',
                shade: !0,
                closeback: function () {
                  m = !1
                },
              }),
              c.trigger('appear'),
              u.trigger('appear'))
        }),
        $(document).on('click', '#j_addfav', function (t) {
          var e,
            i = $('#hid_role').val()
          'medium' != i && 'company' != i
            ? (T(),
              (e = $('#hid_isLogin').val()),
              $(this).find('i').hasClass('fa-heart-o')
                ? ($(this).find('i').removeClass('fa-heart-o'),
                  $(this).find('i').addClass('fa-heart'),
                  C(r),
                  '0' == e
                    ? ($.popbox({
                        id: 'j_popbox_colletip',
                        title: '溫馨提示',
                        content:
                          '<div class="colle-tips"><div class="colle-pop-first"><span>收藏成功!</span><a href="/user-login.html" _target="blank" class="">查看更多</a></div><div class="colle-pop-second">該收藏僅在本設備保存，登入後可同步登入賬號永久保存</div><div class="colle-pop-third"><a href="/user-login.html" class="">立即登入</a><div class="colle-pop-stay">繼續瀏覽物件</div></div></div>',
                        size: { width: '480px', height: '260px' },
                        shade: !0,
                      }),
                      $('.colle-pop-stay').click(function () {
                        $.popbox.close('j_popbox_colletip')
                      }),
                      ga('send', 'event', '出售', '新版列表詳細頁', '未登入收藏'))
                    : (E(r, e, 'collection'),
                      $.popbox({
                        id: 'j_popbox_colletip',
                        title: '溫馨提示',
                        content:
                          '<div class="colle-tips"><div class="colle-pop-first"><span>收藏成功!</span><a href="' +
                          HOST.www_env +
                          '/userCenter-favWare&.html?type=2" _target="blank" class="">查看更多</a></div></div>',
                        size: { width: '500px', height: '160px' },
                        shade: !0,
                      }),
                      ga('send', 'event', '出售', '新版列表詳細頁', '登入收藏')),
                  k())
                : (E(r, e, 'cancel'),
                  $(this).find('i').addClass('fa-heart-o'),
                  $(this).find('i').removeClass('fa-heart'),
                  I(r),
                  $.popbox({
                    id: 'j_popbox_colletip',
                    title: '溫馨提示',
                    content:
                      '<div class="colle-tips"><div class="colle-pop-first"><span>取消收藏成功!</span></div></div>',
                    size: { width: '500px', height: '160px' },
                    shade: !0,
                  }),
                  (function () {
                    var t = parseInt($('#hid_favoritenum').val())
                    if (0 == t) return (b = !1)
                    ;(_str = '收藏 （' + --t + '）'),
                      $('#hid_favoritenum').val(t),
                      $('#j_addfav a').html(_str),
                      (b = !1)
                  })()))
            : $.popbox({
                id: 'j_popbox_medium',
                title: '溫馨提示',
                size: { width: '520px', height: '160px' },
                type: 'html',
                content:
                  '<div class="record-pop-first"><span class="record-pop-success">很抱歉，仲介身份暫不支持收藏功能！不便之處敬請諒解！</span></div>',
                shade: !0,
              })
        })
      var b = !1
      function k() {
        var t
        b ||
          ((t = parseInt($('#hid_favoritenum').val())),
          (_str = '收藏 （' + (t += 1) + '）'),
          $('#hid_favoritenum').val(t),
          $('#j_addfav a').html(_str),
          (b = !0))
      }
      function S(t) {
        var e = JSON.stringify(t)
        localStorage.setItem('collectionList', e)
      }
      var E = function (t, e, i) {
          if (1 != e) return !1
          var n = HOST.sale_env + '/home/collect/syncCollect',
            o = '{"data":[{"id":"S' + t + '","act":"' + i + '","acttime":' + new Date().getTime() + '}]}'
          $.ajax({
            url: n,
            data: { sync: o, no_require_detail: '1' },
            xhrFields: { withCredentials: !0 },
            crossDomain: !0,
            type: 'POST',
            success: function () {},
            error: function () {},
          })
        },
        T = function () {
          var t = localStorage.getItem('collectionList')
          return (t = void 0 === t || '' == t || null == t ? { arr: [] } : JSON.parse(t))
        },
        I = function (t) {
          var e = T(),
            i = new Date().getTime(),
            i = parseInt(i / 1e3) + ''
          for (x in e.arr) e.arr[x].id == t && ((e.arr[x].act = 'cancel'), (e.arr[x].time = i))
          S(e), j('set')
        },
        C = function (t) {
          var e = T(),
            i = new Date().getTime(),
            n = {
              time: (i = parseInt(i / 1e3) + ''),
              id: t,
              act: 'collection',
              type: $('#hid_type').val(),
              isBusiness: $('#hid_isBusiness').val() || '0',
            }
          for (x in e.arr) {
            if (e.arr[x].id == t) {
              ;(e.arr[x].act = 'collection'), (e.arr[x].time = i)
              break
            }
            x == e.arr.length - 1 && e.arr[x].id != t && e.arr.push(n)
          }
          0 == e.arr.length && e.arr.push(n), N(e.arr), S(e), j('set')
        },
        N = function (t) {
          t.sort(function (t, e) {
            return e.time - t.time
          })
        },
        j = function (t) {
          var e,
            i,
            n,
            o = localStorage.getItem('collectionList')
          0 < $('#cIframe').length
            ? (n = (e = $('#cIframe')).attr('src'))
            : ((e = $('<iframe id="cIframe" frameborder="0" style="display:none;"></iframe>')),
              (i = $('#base_url').val()),
              (n = location.protocol + i + '/home/index/localStorage'),
              e.attr('src', n),
              $('body').append(e))
          var a = { list: 'collectionList', method: t, data: o }
          setTimeout(function () {
            e[0].contentWindow.postMessage(a, n)
          }, 1e3)
        }
      !(function () {
        var t = T().arr
        for (x in t)
          r == t[x].id &&
            'collection' == t[x].act &&
            ($('#j_addfav').find('i').removeClass('fa-heart-o'), $('#j_addfav').find('i').addClass('fa-heart'), k())
      })(),
        $('#detailImpeach').on('click', function () {
          var t = $('#hid_isLogin').val(),
            e = $('#hid_type').val(),
            i = $('#hid_userId').val(),
            n = '',
            o = '',
            a = '',
            n =
              '1' == t
                ? ((o = '450px'),
                  (a = '390px'),
                  '/house-impeachDetail.html?houseid=' + r + '&type=' + e + '&other=2&owner_id=' + i)
                : ((o = '380px'),
                  (a = '320px'),
                  '/index.php?module=house&action=impeach2010&houseId=' + r + '&type=' + e + '&other=2&owner_id=' + i)
          $.popbox({
            id: 'j_popbox_impeach',
            title: '我要檢舉',
            type: 'iframe',
            size: { width: '508px', height: o },
            content: { width: '484px', height: a, url: n, scrolling: 'no' },
            shade: !0,
          })
        })
      function O() {
        var t = $('.detail-nav'),
          e = $(window).scrollTop()
        if (!(800 < e)) return t.hide(), !1
        t.show()
        for (var i = $('.navScroll'), n = $('.nav-li'), o = 0; o < i.length; o++) {
          var a = i[o],
            r = $(a).offset().top,
            s = $(a).attr('data-nav')
          if (r - 200 < e) {
            $('.nav-li').removeClass('nav-on')
            for (var d = 0; d < n.length; d++) {
              var l = n[d]
              $(l).hasClass(s) && $(l).addClass('nav-on')
            }
          }
        }
      }
      O(), $(window).on('scroll', O)
      var q,
        L = $('#hid_imgs').val(),
        L = JSON.parse(L),
        H = $('#hid_picNum').val(),
        P = $('#hid_imp_origin').val()
      $(document).ready(function () {
        '0' == H && ($('.pic-box-item').css('cursor', 'auto'), $('.img_main').css('cursor', 'unset'))
      }),
        $(document).on('click', '.big-picture-close', function () {
          $('#imageCen').hide(), $('body').css('overflow', 'visible')
        })
      var B = !1
      function V(t, e) {
        var i,
          n,
          o = L.some(function (t) {
            return 1 == t.is_full
          }),
          a = L.length,
          r = L[t],
          s = o ? t : t + 1,
          d = o ? a - 1 : a
        $('.big-sum').html(d),
          $('.big-index').html(s),
          $('.big-title').html(L[t].note),
          1 == r.is_video
            ? ($('.big-img').hide(),
              (i =
                3 == r.video_source
                  ? {
                      src:
                        P +
                        '/player/?url=' +
                        r.video_url +
                        '&poster=' +
                        r.medium +
                        '&viewcount=' +
                        (r.video_play_count || '') +
                        '&muted=1&autoplay=' +
                        (e || '0'),
                      'data-m3u8': r.video_url,
                    }
                  : { src: r.video_url + '?muted=1&autoplay=' + (e || '0'), 'data-videosource': r.video_source }),
              $('#detail-swiper-video').hide(),
              $('#big-video-iframe').attr(i).show())
            : ($('#detail-swiper-video').show(),
              $('#big-video-iframe').hide(),
              $('.big-img').attr('src', r.big).show()),
          $('.big-picture-li').find('i').removeClass('ceng'),
          $('.big-picture-li').eq(t).find('i').addClass('ceng'),
          L.some(function (t) {
            return 1 == t.is_video
          }) || $('#detail-swiper-video').hide(),
          8 < d &&
            ((n = d - 4 <= s ? d - 8 : s <= 4 ? 0 : s - 4),
            $('.big-picture-nails').animate({ marginLeft: -125 * n }, 500))
      }
      window.addEventListener('blur', function () {
        'video-iframe' !== document.activeElement.id ||
          B ||
          document.activeElement.dataset.m3u8 ||
          (1 == +document.activeElement.dataset.videosource
            ? hotEventSend('中古屋詳情頁_youtube視頻_點擊播放')
            : hotEventSend('中古屋詳情頁_FB視頻_點擊播放'),
          (B = !0)),
          'big-video-iframe' === document.activeElement.id && hotEventSend('中古屋詳情頁_查看大圖_播放影片')
      }),
        $('.img_main').click(function () {
          '0' != H &&
            ($('.img_list a').each(function (t, e) {
              $(this).hasClass('selected') && (q = t)
            }),
            $('#imageCen').show(),
            V(q),
            $('body').css('overflow', 'hidden'))
        }),
        $('.pic-box-item').on('click', function () {
          '0' != H && ((q = $(this).index()), $('#imageCen').show(), V(q, '1'))
        }),
        $('.big-img').error(function () {
          $(this).attr('alt', '加載失敗')
        }),
        $('.big-img').load(function () {
          $(this).attr('alt', $(this).attr('src'))
        }),
        $('#detail-swiper-video').click(function () {
          L.forEach(function (t, e) {
            1 == t.is_video && (V(e, '1'), (q = e))
          })
        }),
        $('.big-picture-right').click(function () {
          q >= L.length - 1 || V(++q)
        }),
        $('.big-picture-left').click(function () {
          var t = L.some(function (t) {
            return 1 == t.is_full
          })
          q != (t ? 1 : 0) && V(--q)
        }),
        $('.big-picture-li').on('click', function () {
          var t = $(this).index()
          V(t), (q = t)
        }),
        $('.font-size-btn').on('click', function () {
          $('.font-size-btn').removeClass('font-size-select'),
            $(this).addClass('font-size-select'),
            $(this).hasClass('font-size-big')
              ? ($('.detail-house').removeClass('detail-font-small'),
                $('.detail-house').addClass('detail-font-big'),
                $.cookie('detail-font-size', 'big', { expires: 365, path: '/', domain: '591.com.tw' }))
              : $(this).hasClass('font-size-small')
              ? ($('.detail-house').removeClass('detail-font-big'),
                $('.detail-house').addClass('detail-font-small'),
                $.cookie('detail-font-size', 'small', { expires: 365, path: '/', domain: '591.com.tw' }))
              : ($('.detail-house').removeClass('detail-font-big'),
                $('.detail-house').removeClass('detail-font-small'),
                $.cookie('detail-font-size', 'middle', { expires: 365, path: '/', domain: '591.com.tw' }))
        }),
        $('#phoneExplain').on('click', function (t) {
          hotEventSend('中古屋_撥號說明點擊'),
            t.stopPropagation(),
            $.popbox({
              id: 'j_popbox_phoneExplain',
              title: '電話撥打說明',
              type: 'iframe',
              size: { width: '580px', height: '480px' },
              content: { width: '550px', height: '420px', url: '/home/house/phoneExplain', scrolling: 'no' },
              shade: !0,
            })
        })
      var A = require('stat')
      function z(t, e) {
        t.roll({
          showCallBack: function () {
            try {
              A.googleClickStat('出售_瀏覽深度_' + e)
            } catch (t) {}
          },
        })
      }
      function D(t) {
        var e = a('payMap', { type: t })
        document.getElementById('detail-map-pay').innerHTML = e
      }
      z($('.detail-title'), '基礎資料'),
        z($('.detail-house-title'), '房屋介紹'),
        z($('.house-pic-title'), '房屋圖片'),
        z($('.detail-map-title'), '地圖問答'),
        $('.result-list-select a').on('click', function () {
          D($(this).attr('rel'))
        }),
        $('.map-title ul li').on('click', function () {
          D($(this).attr('id'))
        }),
        require('utility').UNION_EVENT('page-pc_page-3_page-' + $.cookie('urlJumpIp'), !0)
      var R = require('firebase')
      window.addEventListener('load', R.init)
      var M = UNION_SHOW()
      function W() {
        var t = { role: 0, device: 4, channel: 'sale', position: 'detail-news' }
        $.cookie('urlJumpIp') && (t.regionid = $.cookie('urlJumpIp')),
          $.get('/home/index/recomNews', t, function (t) {
            t.data && 0 !== t.data.length
              ? $.get('/home/data/generalStatistics', {
                  count_type: 'all',
                  device: 'pc',
                  event: 'xwrk_sale_detail-news_exposure',
                })
              : ((t.data = []), $('.house-knowledge').hide()),
              $('#nextList i').removeClass('fa-spin')
            var e = a('template_knowledge', t)
            $('#knowledgeTemplate').html(e)
          })
      }
      $('.js-recom').roll({
        threshold: 150,
        showCallBack: function () {
          function n() {
            $.each($('.unionNative'), function (t, e) {
              var i = $(e),
                n = i.attr('data-gtm-show'),
                o = i.find('.eventShowUrl').attr('src')
              M.scrollEventHandler({
                ele: document.getElementById(i.attr('id')),
                twoThirdShowEvent: function () {
                  var t, e
                  ;(t = n), (e = o), M.hotEventSend(t), (new Image().src = e)
                },
              })
            })
          }
          var t, e, i, o
          ;(t = $('#area').val()),
            (e = $('#price').val()),
            (i = $('#regionId').val()),
            (o = $('#sectionId').val()),
            $.get(
              '/home/housing/getNewSaleDetailRecom',
              { area: t, price: e, regionid: i, sectionid: o, id: r },
              function (t) {
                var e, i
                1 == ~~t.status &&
                  0 < t.data.length &&
                  ((e = M.nativeDataAdapter(t.data, '售屋詳細感興趣的新房')),
                  (i = a('template_recomBuild', e)),
                  $('#recomBuildTemplate').html(i),
                  5 == ~~t.data.length && $('.arrow-next').addClass('disabled'),
                  $('.recom-build').show(),
                  e.isNative && n()),
                  $('.recom-build').photoScroll({ number: 5 })
              }
            )
        },
      }),
        $('.recom-build').roll({
          showCallBack: function () {
            try {
              var t = $('.areaTxt').text()
              window.hotEventSend('相似建案_' + t + '_您可能感興趣的新房曝光')
            } catch (t) {}
          },
        }),
        require('photoScroll'),
        $('#nextList').on('click', function () {
          $(this).find('i').addClass('fa-spin'), W()
        }),
        $('#knowledgeTemplate').on('click', 'li a', function () {
          $.get('/home/data/generalStatistics', {
            count_type: 'all',
            device: 'pc',
            event: 'xwrk_sale_detail-news_click',
          })
        }),
        $('.house-knowledge').roll({
          threshold: 500,
          showCallBack: function () {
            W()
            try {
              hotEventSend('sale_detail-news_買屋必看-曝光')
            } catch (t) {
              new Error('do not find hotEventSend Function')
            }
          },
        }),
        (function () {
          var t = $('#addLine')
          t.click(function () {
            $.post('/home/im/pendingLine', { target_uid: $('#hid_userId').val() }),
              window.open(e, '_blank', 'width=600, height=600')
          })
          var e = t.data('url')
        })(),
        $('.left-tags')
          .mouseover(function () {
            hotEventSend('物件詳情頁_必看好屋規則'), $('#goodhouse-info').show()
          })
          .mouseout(function () {
            $('#goodhouse-info').hide()
          }),
        window.addEventListener('message', function (t) {
          'https://3d.591.com.tw' === t.origin &&
            ('start' === t.data.msg ? window.vrObj.getStartTime() : window.vrObj.getEndTime())
        }),
        {
          init: function () {
            var t = JSON.parse($('#hid_imgs').val())
            $('.full-img img').attr('src', t[0].big),
              $('.vr-icon,#vueDom,.want-watch-vr,.tips').click(function (t) {
                ;(t || window.event).stopPropagation()
              }),
              $('.vr-icon,.vr-isonline,.vr-ani-icon').click(function () {
                $('.full-img').hide(), $('.want-watch-vr').hide()
              }),
              window.addEventListener('message', function (t) {
                'vrFeedBack' != t.data ||
                  ('function' == typeof hotEventSend && hotEventSend('中古屋詳情頁_體驗反饋_點擊量'))
              }),
              this.showWantWatchVrTips(),
              this.showWantWatchVrBtn(),
              this.addOrReduceWatchVrNum(),
              this.experienceItNow()
          },
          showWantWatchVrBtn: function () {
            var i = 0,
              n = !1
            $('.want-watch-vr').show(),
              $('.img_list a').each(function (t, e) {
                $(e).hasClass('is_video') && ((n = !0), 0 == (i = t) && $('.want-watch-vr').hide())
              }),
              $('.img_list a').click(function () {
                var t = $(this).parent().index()
                $('.want-watch-vr').show(),
                  n
                    ? ((0 !== i && 0 !== t) || (0 == i && 1 !== t)) && $('.want-watch-vr').hide()
                    : (0 === t && 'none' != $('.full-img').css('display')) || $('.want-watch-vr').hide()
              })
          },
          showWantWatchVrTips: function () {
            localStorage.getItem('wantWatchVrTips') ||
              $('.want-watch-vr').length < 1 ||
              (localStorage.setItem('wantWatchVrTips', 1),
              $('.want-watch-vr .tips').show(),
              $('.want-watch-vr .tips span').click(function () {
                localStorage.setItem('wantWatchVrTips', 1), $('.want-watch-vr .tips').hide()
              }))
          },
          addOrReduceWatchVrNum: function () {
            var i = !1
            $('.want-watch-vr').click(function () {
              var e
              i ||
                ((i = !0),
                (e = 1),
                $(this).hasClass('w-vr')
                  ? ($(this).removeClass('w-vr').addClass('g-vr'),
                    hotEventSend && hotEventSend('出售_新版列表詳細頁_想看該房VR'),
                    $('#want-watchVr-Num').text(1 + ~~$('#want-watchVr-Num').text()))
                  : ($(this).removeClass('g-vr').addClass('w-vr'),
                    hotEventSend && hotEventSend('出售_新版列表詳細頁_取消想看該房VR'),
                    $('#want-watchVr-Num').text(~~$('#want-watchVr-Num').text() - 1),
                    (e = 0)),
                $.ajax({
                  url: '/home/vr/wannaSee',
                  data: { post_id: r, type: 2, status: e },
                  type: 'POST',
                  success: function (t) {
                    ;(i = !1),
                      1 == t.status && layer.msg(['取消助力成功', '助力成功！我們會盡快把您的需求傳達給仲介'][e])
                  },
                  error: function () {},
                }))
            })
          },
          experienceItNow: function () {
            $('.vr-isonline').click(function () {
              $.ajax({
                url: '/home/vr/wannaSee',
                data: { post_id: r, type: 2, status: 1, is_click: 1 },
                type: 'POST',
                success: function () {},
                error: function () {},
              })
            })
          },
        }.init(),
        $('.detail-question').roll({
          threshold: 200,
          showCallBack: function () {
            require('_qs')
          },
        }),
        $('[data-toggle="tooltip"]').tooltip(),
        require('setIdentity').sendStat(r, '2'),
        UNION_SHOW({ pid: 20 }),
        UNION_SHOW({ pid: 21 }),
        new Vue({
          name: 'dialogVue',
          data: {
            type: +$('#hid_type').val(),
            id: $('#hid_postId').val(),
            bidAlert: {"status":0,"data":{"jing_id":"","exposure_id":"","address":"","alert_type":0}},
            dialogData: o.modifi || {},
            dialogShow: !1,
          },
          mounted: function () {
            this.listenersDom()
          },
          methods: {
            listenersDom: function () {
              var e = this,
                t = document.getElementById('js-modify-post')
              t &&
                (t.onclick = function () {
                  var t = (e.bidAlert && e.bidAlert.data) || {}
                  if (2 == +t.alert_type || 3 == +t.alert_type)
                    return (
                      (e.dialogData.content = e.dialogData.getContent('', '', '', t.address)), void (e.dialogShow = !0)
                    )
                  e.modifyHandler()
                })
            },
            modifyHandler: function () {
              var t = 1 === this.type ? 'updateRent' : 'updateSale'
              window.location.href = '//www'
                .concat(ENV, '.591.com.tw/index.php?module=house&action=')
                .concat(t, '&houseid=')
                .concat(this.id)
            },
            confirmHandler: function () {
              this.modifyHandler()
            },
            cancelHandler: function () {
              this.dialogShow = !1
            },
          },
        }).$mount('#dialog-vue-app')
    }
  )
