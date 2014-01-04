$(document).on('scroll', function() {

    // scroll menu styles
    if ($(document).scrollTop() > 610) {
        $('nav').removeClass('leader');
        $('.mast').addClass('padded');
    } else {
        $('.mast').removeClass('padded');
        $('nav').addClass('leader');
    }

});


$(document).ready(function() {

    // check cookie
    var visited = $.cookie('visited');

    if (visited == null) {

        $('head').append('<link rel="stylesheet" href="/css/animate-custom.css">');
        $('body').prepend('<div id="firstoverlay" class="animated fadeOut"></div>');
        $('.leader h2 p').addClass('animated').addClass('fadeInDown');
        $('.leader h2 span').addClass('animated').addClass('fadeInDown');
        $('.leader a.register').addClass('animated').addClass('fadeInUpBig');
        setTimeout(function() {
            $('#firstoverlay').remove();
        }, 4000);

        $.cookie('visited', 'yes');
    }

    // set cookie
    $.cookie('visited', 'yes', {
        expires: 365,
        path: '/'
    });

});
