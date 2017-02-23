/*datepicker*/
$(function () {
    $("#datepicker1").datepicker();
    $("#datepicker2").datepicker();
});

/*Menu desktop*/
$(window).scroll(function () {

    var a = $('.desktop').height();
    var pos = $(window).scrollTop();
    if (pos > a) {
        $(".desktop").css({
            transition: 'all .3s ease-in-out',
            height: '14vh',
        });
        $(".desktop").addClass('shadow');
        $(".lang").slideUp();
        $("header > .desktop > .logo").css({
            padding: '0 1em',
            transition: 'all .3s ease-in-out',
        });
        $("header > .desktop > .logo > a > img").css({
            width: '10em',
            transition: 'all .3s ease-in-out',
        });
    }
    else {
        $(".desktop").css({
            height: '20vh',
        });
        $(".desktop").removeClass('shadow');
        $(".lang").slideDown();
        $("header > .desktop > .logo").css({
            padding: '1em',
        });
        $("header > .desktop > .logo > a > img").css({
            width: '100%',
        });
    }
});

/*Nút back to top*/
$(document).ready(function () {
    if ($('#back-to-top').length) {
    var scrollTrigger = 50, // px
        backToTop = function () {
            var scrollTop = $(window).scrollTop();
            if (scrollTop > scrollTrigger) {
                $('#back-to-top').fadeIn();
            } else {
                $('#back-to-top').fadeOut();
            }
        };
    backToTop();
    $(window).on('scroll', function () {
        backToTop();
    });
    $('#back-to-top').on('click', function (e) {
        e.preventDefault();
        $('html,body').animate({
            scrollTop: 0
        }, 700);
    });
}

});