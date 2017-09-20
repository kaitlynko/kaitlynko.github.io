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

  $('.pic1toggle').hide()
  $('.pic1container').hover(function() {
    $('.pic1toggle').fadeToggle(200);
  });

  $('.pic2toggle').hide()
  $('.pic2container').hover(function() {
    $('.pic2toggle').fadeToggle(200);
  });

  $('.pic3toggle').hide()
  $('.pic3container').hover(function() {
    $('.pic3toggle').fadeToggle(200);
  });

});
