$(document).ready(function(){

  // $(window).scroll(function() {
  //    if($(window).scrollTop() + $(window).height() >= $(document).height() - 100) {
  //        $('.arrow').removeClass('.arrow');
  //        $(this).addClass('.arrowup');
  //    }
  // });


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
});
