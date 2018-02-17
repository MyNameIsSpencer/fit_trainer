$(window).scroll(function () {
    var sc = $(window).scrollTop()
    if (sc > 400) {
        $(".App-header").addClass("small-header")
    } else {
        $(".App-header").removeClass("small-header")
    }
});
