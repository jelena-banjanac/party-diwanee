//jQuery is required to run this code
$(document).ready(function () {

    scaleVideoContainer();

    initBannerVideoSize('.video-container .poster img');
    initBannerVideoSize('.video-container .filter');
    initBannerVideoSize('.video-container video');

    $(window).on('resize', function () {
        scaleVideoContainer();
        scaleBannerVideoSize('.video-container .poster img');
        scaleBannerVideoSize('.video-container .filter');
        scaleBannerVideoSize('.video-container video');
    });

});

function scaleVideoContainer() {

    var height = $(window).height() + 5;
    var unitHeight = parseInt(height) + 'px';
    $('.homepage-hero-module').css('height', unitHeight);

}

function initBannerVideoSize(element) {

    $(element).each(function () {
        $(this).data('height', $(this).height());
        $(this).data('width', $(this).width());
    });

    scaleBannerVideoSize(element);

}

function scaleBannerVideoSize(element) {

    var windowWidth = $(window).width(),
        windowHeight = $(window).height() + 5,
        videoWidth,
        videoHeight;

    //console.log(windowHeight);

    $(element).each(function () {
        var videoAspectRatio = $(this).data('height') / $(this).data('width');

        $(this).width(windowWidth);

        if (windowWidth < 1000) {
            videoHeight = windowHeight;
            videoWidth = videoHeight / videoAspectRatio;
            $(this).css({'margin-top': 0, 'margin-left': -(videoWidth - windowWidth) / 2 + 'px'});

            $(this).width(videoWidth).height(videoHeight);
        }

        $('.homepage-hero-module .video-container video').addClass('fadeIn animated');

    });
}

$(document).ready(function () {
    $('.menu-toggle').click(function () {
        $(this).toggleClass('active');
        $('nav').toggleClass('active');
    });
});
$(document).ready(function () {
    $('.sub-nav-toggle').click(function () {
        $(this).toggleClass('active');
        $(this).closest('main').find('.sub-nav').toggleClass('active');
    });
});
var Z63 = Z63 || {};
Z63.ChangePageTitle = function (e) {
    "use strict";
    var t = {}, n, r;
    t.init = function (e) {
        n = e.title;
        r = e.originalTitle;
        t.listenToChange()
    };
    t.listenToChange = function () {
        var e, n, r, i;
        if (typeof document.hidden !== "undefined") {
            e = "hidden";
            r = "visibilitychange";
            n = "visibilityState"
        } else if (typeof document.mozHidden !== "undefined") {
            e = "mozHidden";
            r = "mozvisibilitychange";
            n = "mozVisibilityState"
        } else if (typeof document.msHidden !== "undefined") {
            e = "msHidden";
            r = "msvisibilitychange";
            n = "msVisibilityState"
        } else if (typeof document.webkitHidden !== "undefined") {
            e = "webkitHidden";
            r = "webkitvisibilitychange";
            n = "webkitVisibilityState"
        }
        document.addEventListener(r, function () {
            t.setTitle(document[n])
        }, false)
    };
    t.setTitle = function (e) {
        if (e == "hidden") {
            var t = document.title.replace("Block Party", n);
            document.title = t
        } else {
            document.title = r
        }
    };
    return {init: t.init}
}(jQuery);
$(document).ready(function () {
    Z63.ChangePageTitle.init({title: "I miss you ♥", originalTitle: document.title});
});
