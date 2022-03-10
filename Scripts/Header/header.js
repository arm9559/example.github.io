window.onscroll = function() {myFunction()};

function myFunction() {
  if (document.body.scrollTop > 120 || document.documentElement.scrollTop > 120) {
        $(".fadeStyle").fadeOut();
        $(".fadeStyle").fadeOut("slow");
        $(".fadeStyle").fadeOut(3000);
        $(".fadeToggle").css("visibility","visible");
        $(".fadeToggle").css("cursor","pointer");
  }
  else{
        $(".fadeStyle").fadeIn();
        $(".fadeStyle").fadeIn("slow");
        $(".fadeStyle").fadeIn(3000);
        $(".fadeToggle").css("visibility","hidden");
        $(".fadeToggle").css("cursor","pointer");
  }
}

function fadeInImage(){
    $(".fadeStyle").fadeIn();
    $(".fadeStyle").fadeIn("slow");
    $(".fadeStyle").fadeIn(3000);
    $(".fadeToggle").css("visibility","visible");
    $(".fadeToggle").css("cursor","pointer");
}
function fadeOutImage(){
    $(".fadeStyle").fadeOut();
    $(".fadeStyle").fadeOut("slow");
    $(".fadeStyle").fadeOut(3000);
    $(".fadeToggle").css("visibility","visible");
    $(".fadeToggle").css("cursor","pointer");
}

function openParagraph(){
    $(".properties-icon-paragraph").fadeIn();
    $(".properties-icon-paragraph").fadeIn("slow");
    $(".properties-icon-paragraph").fadeIn(3000);
}
function closeParagraph(){
    $(".properties-icon-paragraph").fadeOut();
    $(".properties-icon-paragraph").fadeOut("slow");
    $(".properties-icon-paragraph").fadeOut(3000);
}
function openPortofolio(){
    $(".propertios-container").slideToggle()
    $("main").slideToggle()
}
$(window).scroll(function() {
	if ($(this).scrollTop() > 400) {
		$('.portofolio-svg').css('color','black');
	}
    if ($(this).scrollTop() < 400) {
		$('.portofolio-svg').css('color','white');
	}
});

$(window).scroll(function() {
	if ($(this).scrollTop() > 880) {
		$('.nav-svg').css('color','black');
		$('.fade-icon').css('color','black');
		$('.fade-a').css('color','black');
	}
    if ($(this).scrollTop() < 880) {
		$('.nav-svg').css('color','white');
		$('.fade-icon').css('color','white');
		$('.fade-a').css('color','white');
	}
});


function openSidebar(){
    const getSidebar = document.querySelector('.sidebar');
          getSidebar.style.display = 'block'
          document.body.style.overflow = 'hidden'
          $('.portofolio-svg').css('display','none')
}
function closeSidebar(){
    const getSidebar = document.querySelector('.sidebar');
          getSidebar.style.display = 'none'
          getSidebar.style.transition = '0.5s all'
          document.body.style.overflow = 'visible'
          $('.portofolio-svg').css('display','block')
}
