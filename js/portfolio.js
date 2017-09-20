$(document).ready(function(){
$('#menu').hide();

	$('#menuicon').click(function(){
		$(this).toggleClass('open');
    $('#menu').slideToggle(300);
	});

});
