var swiper = new Swiper(".swiper-container", {
    slidesPerView: 1.5,
    spaceBetween: 10,
    centeredSlides: true,
    freeMode: true,
    grabCursor: true,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay: {
      delay: 4000,
      disableOnInteraction: false
    },
    navigation: {
      nextEl: ".slider-next",
      prevEl: ".slider-prev"
    },
    breakpoints: {
      500: {
        slidesPerView: 1
      },
      700: {
        slidesPerView: 1.5
      }
    }
  });
  

  $(window).scroll(function() {
    if ($(this).scrollTop() > 2820) {
		$('.featured-container').css('opacity','1')
		$('.featured-container').css('transition','2s all')
	}
});
