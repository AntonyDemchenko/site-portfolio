$(document).ready(function(){
	$('.menu-a').click(function(event){
		$('.menu-a, .menu').toggleClass('active');
		$('body').toggleClass('lock');
	});

	$('.menu li a').click(function(event) {
        $('.menu-a, .menu').removeClass('active');
        $('body').removeClass('lock');
    });
});