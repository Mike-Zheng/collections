(function() {
  var handleAnimationFrame, handleGirlAnimation, handleScreenLight;

  $(document).ready(function() {
    var data, key, scene, sceneName, value, _i, _len, _ref, _ref1, _ref2;
    _ref = window.skrollrData;
    for (sceneName in _ref) {
      scene = _ref[sceneName];
      _ref1 = scene.data;
      for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
        data = _ref1[_i];
        _ref2 = data.animations;
        for (key in _ref2) {
          value = _ref2[key];
          key = parseInt(key) + parseInt(scene.begin);
          $(data.selector).attr("data-" + key, value);
        }
      }
    }
    return skrollr.init();
  });

  $(window).scroll(function() {
    var currentFrame, scroll;
    scroll = $(window).scrollTop();
    currentFrame = parseInt(scroll / 50);
    $('.current-scrolling').html("Scroll: " + scroll + ", Frame: " + currentFrame);
    $('.frame-text').html("Frame: " + currentFrame + " <br/> Scene 03 Shot 01 <br/> Animation: First Lanuch");
    handleScreenLight(scroll);
    handleGirlAnimation(scroll);
    if (scroll <= 20500) {
      handleAnimationFrame(scroll, '.girl-wireframe', 17500, 512, 352, 81, 0, 1, 1);
      handleAnimationFrame(scroll, '.girl-model', 17500, 512, 352, 81, 0, 1, 1);
      handleAnimationFrame(scroll, '.girl-rendered', 17500, 512, 352, 81, 0, 1, 1);
      handleAnimationFrame(scroll, '.girl-joint', 17500, 512, 352, 81, 0, 1, 1);
    } else if (scroll > 20500) {
      handleAnimationFrame(scroll, '.girl-wireframe', 20500, 512, 352, 17, 0, -1, 1);
      handleAnimationFrame(scroll, '.girl-model', 20500, 512, 352, 17, 0, -1, 1);
      handleAnimationFrame(scroll, '.girl-rendered', 20500, 512, 352, 17, 0, -1, 1);
      handleAnimationFrame(scroll, '.girl-joint', 20500, 512, 352, 17, 0, -1, 1);
    }
    handleAnimationFrame(scroll, '.girl-rig', 21000, 609, 565, 55, 0, 1, 2);
    handleAnimationFrame(scroll, '.girl-hud', 22620, 512, 466, 115, 0, 1, 2);
    handleAnimationFrame(scroll, '.hud-timeline', 22935, 102, 490, 81, 0, 1, 1);
    handleAnimationFrame(scroll, '.hud-left', 22935, 375, 275, 81, 0, 1, 1);
    handleAnimationFrame(scroll, '.hud-right', 22935, 288, 226, 81, 0, 1, 1);
    handleAnimationFrame(scroll, '.storyboard__top', 26050, 500, 888, 77, 0, 1, 2);
    handleAnimationFrame(scroll, '.storyboard__middle', 26050, 500, 888, 77, 1, 1, 2);
    handleAnimationFrame(scroll, '.storyboard__bottom', 26050, 500, 888, 77, 2, 1, 2);
    handleAnimationFrame(scroll, '.girl-room', 31600, 640, 600, 53, 0, 1, 2);
    return handleAnimationFrame(scroll, '.girl-shadow', 31600, 136, 227, 52, 0, 1, 1);
  });

  handleScreenLight = function(scroll) {
    var frame, frameLength, max, offset, windowHeight, windowWidth;
    offset = 30;
    frameLength = 23;
    max = 1500 + offset * frameLength;
    $('.screenlight').hide();
    if ((1500 < scroll && scroll < max)) {
      frame = parseInt((scroll - 1500) / offset);
    } else if ((max < scroll && scroll < 3600)) {
      frame = 23;
    } else {
      return;
    }
    if (frame >= 19) {
      $('.screenlight').show().removeClass('fixed').css({
        'background-size': "100% auto",
        'background-position': "0px " + (-frame * 900) + "px"
      });
    } else {
      windowWidth = $(window).width();
      windowHeight = $(window).height();
      $('.screenlight').show().addClass('fixed').css({
        'background-size': "" + windowWidth + "px " + (windowHeight * 24) + "px",
        'background-position': "0px " + (-frame * windowHeight) + "px"
      });
    }
    $('.screen-content').hide();
    if (scroll > max) {
      return $('.screen-content').show();
    }
  };

  handleGirlAnimation = function(scroll) {
    var column, columnLength, finalFrame, frame, frameLength, key, keyframe, lastkey, percent, row, _i, _len;
    frame = parseInt((scroll - 0) / 50);
    keyframe = window.animatorData.girl;
    frameLength = 213;
    columnLength = 2;
    finalFrame = 0;
    lastkey = keyframe[0];
    for (_i = 0, _len = keyframe.length; _i < _len; _i++) {
      key = keyframe[_i];
      if ((lastkey.screen <= frame && frame < key.screen)) {
        percent = (frame - lastkey.screen) / (key.screen - lastkey.screen);
        finalFrame = lastkey.animator + (key.animator - lastkey.animator) * percent;
        finalFrame = parseInt(finalFrame);
      }
      lastkey = key;
    }
    column = parseInt(finalFrame / ((frameLength + 1) / columnLength));
    row = finalFrame % ((frameLength + 1) / columnLength);
    return $('.little-scissors').css({
      'background-position': "" + (-column * 189) + "px " + (-row * 250) + "px"
    });
  };

  handleAnimationFrame = function(scroll, selector, start, height, width, frameLength, delay, mutiplier, columnLength) {
    var column, frame, max, offset, row, target;
    offset = 30;
    max = start + offset * frameLength;
    frame = parseInt((scroll - start) / offset);
    target = $(selector);
    column = parseInt(frame / ((frameLength + 1) / columnLength));
    row = frame % ((frameLength + 1) / columnLength);
    if ((start < scroll && scroll < max)) {
      return target.css({
        'background-position': "" + (-column * width) + "px " + (-mutiplier * (row + delay) * height) + "px"
      });
    } else if (scroll > max) {
      row = (frameLength - 1) % ((frameLength + 1) / columnLength);
      if (selector === '.storyboard__middle') {
        row = 38;
      }
      return target.css({
        'background-position': "" + (-(columnLength - 1) * width) + "px " + (-row * height) + "px"
      });
    } else if (scroll < start) {
      return target.css({
        'background-position': "0px " + (-0 * height) + "px"
      });
    }
  };

}).call(this);
