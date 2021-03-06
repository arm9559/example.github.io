/* Pre Loader */
var intervalHandle = null;
var intervalSpeed = 1200;
var slideSpeed = 1200;
var easeType = "easeOutQuad";
var state = 0;

/* get DOM beforehand because faster*/
var ls = $("div.layers");

/* =======
   ready
 ======= */

$(function(){
  
  fullsize();
  $(window).resize(function() { fullsize(); });
  
  intervalHandle = setInterval("step()", intervalSpeed );
  
  /* click to fake load done */
  $(document).click(function(e) {
      loaded();
  });

});


/* =============
     Functions
   ============= */

function loaded(){
  clearInterval( intervalHandle );
  stepEnd();
}

function step(){
  var wh = $(window).height();
  
  $( ls[state] )
    .css({"z-index": 102})
    .animate({height: 0}, slideSpeed, easeType);
  $( ls[(state+2)%9] )
    .css({"z-index": 100, height: wh});
  $( ls[(state+1)%9] )
    .css({"z-index": 101});
  
  state++;
  if( state == 9 ){ state = 0; }
}

function stepEnd(){
  
  /* middle */
  $( ls[state]      )
    .css({"z-index": 101})
    .delay(200)
    .animate({height: 0}, slideSpeed, easeType);
  
  /* top */
  $( ls[(state+2)%9] )
    .css({"z-index": 102})
    .stop()
    .animate({height: 0}, slideSpeed, easeType);
  
  /* bottom */
  $( ls[(state+1)%9] )
    .css({"z-index": 100})
    .delay(400)
    .animate({height: 0}, slideSpeed, easeType);

  state++;
  if( state == 9 ){ state = 0; }
}

function fullsize(){
  $("#loader")
    .css("height", $(window).height());
  $(".layers")
    .css("width", $(window).width());
  $(".layers span").css("top", $(window).height()/2 );
  
  /* fake result. delete below */
  $(".loaded")
    .css("height", $(window).height());
  $(".loaded span").css("top", $(window).height()/2 );
}
setInterval(()=>{
  $(document).ready(function(){
    $("#page-loader").css('display','none')
  });
},5000)