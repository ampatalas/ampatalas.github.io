$(document).ready(function() {

    $('#page_holder').pagify({
        pages: ['about', 'projects'],
        default: 'about',
        animation: 'fadeIn',
        animationOut: 'fadeOut',
        animationSpeed: 'slow',
        cache: true
    });

    $("#about").click(function() {
        setActiveClass($(this));
        return true;
    });

    $("#projects").click(function() {
        setActiveClass($(this));
        return true;
    });

});

function setActiveClass(element) {
    $("li").each(function(index) {
        $(this).removeClass("active");
    });
    element.addClass("active");
}
