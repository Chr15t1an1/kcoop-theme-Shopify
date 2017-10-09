// knowledge coop JS

$(document).ready(function(){

	var screenSize = jQuery(window).width();

	if( screenSize < 768){
		
	}


	$(".responsive-menu").on("click", function(){

		$(".main-nav").slideToggle();
	});

  
$('.scrollLink').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
});
  

  
$('.videoTmb .tmb').each(function() {
  $(this).append('<svg width="100%" viewBox="0 0 68 48" version="1.1" height="100%"><path fill-opacity="0.81" fill="#1f1f1e" d="m .66,37.62 c 0,0 .66,4.70 2.70,6.77 2.58,2.71 5.98,2.63 7.49,2.91 5.43,.52 23.10,.68 23.12,.68 .00,-1.3e-5 14.29,-0.02 23.81,-0.71 1.32,-0.15 4.22,-0.17 6.81,-2.89 2.03,-2.07 2.70,-6.77 2.70,-6.77 0,0 .67,-5.52 .67,-11.04 l 0,-5.17 c 0,-5.52 -0.67,-11.04 -0.67,-11.04 0,0 -0.66,-4.70 -2.70,-6.77 C 62.03,.86 59.13,.84 57.80,.69 48.28,0 34.00,0 34.00,0 33.97,0 19.69,0 10.18,.69 8.85,.84 5.95,.86 3.36,3.58 1.32,5.65 .66,10.35 .66,10.35 c 0,0 -0.55,4.50 -0.66,9.45 l 0,8.36 c .10,4.94 .66,9.45 .66,9.45 z" class="ytp-large-play-button-bg"/><path fill="#fff" d="m 26.96,13.67 18.37,9.62 -18.37,9.55 -0.00,-19.17 z"/><path fill="#ccc" d="M 45.02,23.46 45.32,23.28 26.96,13.67 43.32,24.34 45.02,23.46 z"/></svg>')
});


$('.videoTmbBox a').click(function() {
   $('html, body').animate({
          scrollTop: $('.videoGallery').offset().top
        }, 300);
  $('.videoTmbBox a').removeClass('active');
  $(this).addClass('active');
  $('.mainVideo .videoBox iframe').attr('src', $(this).attr('href')+'?rel=0?rel=0&showinfo=0');
  return false;
});
$('.videoTmbBox a').first().addClass('active');
  
  
});