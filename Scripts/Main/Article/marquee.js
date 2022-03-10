$(window).scroll(function() {
    if ($(this).scrollTop() > 2820) {
		$('.marquee-section').css('opacity','1')
		$('.marquee-section').css('transition','2s all')
	}
});
