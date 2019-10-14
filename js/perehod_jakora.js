
$("#head").on("click","a", function (event) {

event.preventDefault();

var id = $(this).attr('href'),

top = $(id).offset().top - $("#navbar-collapsed").outerHeight();

$('body,html').animate({scrollTop: top}, 1500);
});

$("#menu_bottom").on("click","a", function (event) {

event.preventDefault();

var id = $(this).attr('href'),

top = $(id).offset().top - $("#navbar-collapsed").outerHeight();

$('body,html').animate({scrollTop: top}, 1500);
});
