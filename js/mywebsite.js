$(document).ready(function() {
    $(window).scrollTop(0);
});

$('.menu').hide();

$('.menuicon').on('click', function() {
    $('.menu').fadeToggle(100);
});

$('.submenu').hide()
  $('.portfoliotoggle').hover(function() {
    $('.submenu').slideToggle(400);
  });

$('.project1shadow').hide()
$('.project1').hover(function() {
  $('.project1shadow').fadeToggle(100);
});

$('.project2shadow').hide()
$('.project2').hover(function() {
  $('.project2shadow').fadeToggle(100);
});
$(document).ready(mywebsite);
