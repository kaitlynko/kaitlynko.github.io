$(document).ready(function() {
    $(window).scrollTop(0);
});

$('#menu').hide();

$(document).ready(function(){
	$('#menuicon').click(function(){
		$(this).toggleClass('open');
    $('#menu').slideToggle(300);
	});
});
