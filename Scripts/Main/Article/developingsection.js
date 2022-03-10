$(window).scroll(function() {
    if ($(this).scrollTop() > 3620) {
		$('.about-developing-container').css('opacity','1')
		$('.about-developing-container').css('transition','2s all')
	}
});