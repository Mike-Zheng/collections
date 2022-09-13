(function () {
    var imagePreload, imageToLoad;

    $(document).ready(function () {
        imagePreload();
        if (jQuery.browser.mobile) {
            return (window.location.href = '/mobile.html');
        }
    });

    imagePreload = function () {
        var i, imageLoaded, images, src, _i, _len, _results;
        imageLoaded = 1;
        images = [];
        _results = [];
        for (i = _i = 0, _len = imageToLoad.length; _i < _len; i = ++_i) {
            src = imageToLoad[i];
            images[i] = new Image();
            images[i].src = src;
            images[i].style.display = 'hidden';
            _results.push(
                (images[i].onload = function () {
                    var percentage;
                    imageLoaded++;
                    if (imageLoaded >= imageToLoad.length) {
                        $('.loading-progress-bar').clearQueue().animate(
                            {
                                width: '100%',
                            },
                            200
                        );
                        return $('.loading-scene').delay(200).fadeOut();
                    } else {
                        percentage = parseInt((100 * imageLoaded) / imageToLoad.length);
                        $('.loading-progress').html('' + percentage + ' %');
                        return $('.loading-progress-bar')
                            .clearQueue()
                            .animate(
                                {
                                    width: '' + percentage + '%',
                                },
                                200
                            );
                    }
                })
            );
        }
        return _results;
    };

    imageToLoad = [
        'images/background-texture.png',
        'images/background-repeat.png',
        'images/background-star-1.png',
        'images/background-star-2.png',
        'images/background-star-3.png',
        'images/charactor-alien.png',
        'images/charactor-driver.png',
        'images/charactor-father.png',
        'images/charactor-monster.png',
        'images/charactor-snail.png',
        'images/charactor-spider.png',
        'images/charactor-teacher.png',
        'images/chondrite-1.png',
        'images/chondrite-2.png',
        'images/chondrite-3.png',
        'images/chondrite-4.png',
        'images/chondrite-5.png',
        'images/chondrite-6.png',
        'images/cloud-1.png',
        'images/cloud-2.png',
        'images/girl-animation.png',
        'images/girl-hud.png',
        'images/girl-joint.png',
        'images/girl-model.png',
        'images/girl-rendered.png',
        'images/girl-rig.png',
        'images/girl-room.png',
        'images/girl-wireframe.png',
        'images/girl-shadow.png',
        'images/hud-left.png',
        'images/hud-right.png',
        'images/hud-timeline.png',
        'images/storyboard.png',
        'images/storyboard.jpg',
        'images/screen_all_400.png',
        'images/scrolldown.png',
        'images/logo.png',
        'images/moon.png',
        'images/tissue.png',
    ];
}.call(this));
