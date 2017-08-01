$(document).ready(function() {
    $(window).scrollTop(0);
});

$('.menu').hide();

$('.menuicon').on('click', function() {
    $('.menu').fadeToggle(100);
});

$('.submenu').hide()
  $('.portfolio, .submenu').hover(function() {
    $('.submenu').slideToggle(400);
  });

$(document).ready(mywebsite);
