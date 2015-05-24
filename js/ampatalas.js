$(document).ready(function() {

    $("#about").click(function() {
    	setActiveClass($(this));
    	$("pt-page-1").addClass();
    	return true;
    });

    $("#android").click(function() {
    	setActiveClass($(this));
    	return true;
    });

    $("#ios").click(function() {
    	setActiveClass($(this));
    	return true;
    });

    $("#wp").click(function() {
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