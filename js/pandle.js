$(document).ready(function(){

  $(window).scroll(function () {
     if ($(window).scrollTop() >= $(document).height() - $(window).height() - 10) {
        $('.arrow').removeClass('arrow').addClass('arrowup');
     }
  });

  $(window).scroll(function () {
     if ($(window).scrollTop() === 0) {
        $('.arrowup').removeClass('arrowup').addClass('arrow');
     }
  });


$('.pandletoggle').hide()
$('.pandle').hover(function() {
  $('.pandletoggle').fadeToggle(200);
});

$('.angledtoggle').hide()
$('.angled').hover(function() {
  $('.angledtoggle').fadeToggle(200);
});

$('.shaft1toggle').hide()
$('.shaft1').hover(function() {
  $('.shaft1toggle').fadeToggle(200);
});

$('.shaft2toggle').hide()
$('.shaft2').hover(function() {
  $('.shaft2toggle').fadeToggle(200);
});

});
