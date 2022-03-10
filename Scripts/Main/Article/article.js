$(window).scroll(function() {
    if ($(this).scrollTop() > 5720) {
		$('body').css('background','black')
		$('body').css('transition','1s all')
	}
    if ($(this).scrollTop() < 5720) {
		$('body').css('background','white')
		$('body').css('transition','1s all')
	}
});