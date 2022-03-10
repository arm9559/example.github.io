$(window).scroll(function() {
    if ($(this).scrollTop() > 1420) {
		$('.integrity-section').css('opacity','1')
		$('.integrity-text-container').css('position','relative')
	}
    
    if($(this).scrollTop() > 1680){
            $('.integrity-text-container').animate({
                position:'relative',
                top:'55px'
        })
    }
});
