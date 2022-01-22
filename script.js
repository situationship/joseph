//responsive header
function toggleMenu() {
    $("#hamburgerMenu").toggleClass("collapsed");
    $(".mobile-overlay").animate({
        height: "toggle",
        opacity: "toggle"
    }, 300);
}
//carousel swipe
$(".carousel").swipe({
    swipe: function(event, direction, distance, duration, fingerCount, fingerData) {
        if (direction == 'left') $(this).carousel('next');
        if (direction == 'right') $(this).carousel('prev');
    },
    allowPageScroll:"vertical"
});
//collapsible
$('.panel-collapse').on('show.bs.collapse', function () {
    $(this).siblings('.panel-heading').addClass('active');
});
$('.panel-collapse').on('hide.bs.collapse', function () {
    $(this).siblings('.panel-heading').removeClass('active');
});
