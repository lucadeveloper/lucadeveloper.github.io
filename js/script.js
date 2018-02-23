///////////////////////////////
// Smart Resize
///////////////////////////////

(function($,sr) {
    var debounce = function (func, threshold, execAsap) {
        var timeout;
        return function debounced () {
            var obj = this, args = arguments;
            function delayed () {
                if (!execAsap)
                    func.apply(obj, args);
                    timeout = null;
            };
            if (timeout)
                clearTimeout(timeout); else if (execAsap)
                func.apply(obj, args);
                timeout = setTimeout(delayed, threshold || 100);
        };
    }
  
    // smartresize 
    jQuery.fn[sr] = function(fn) {
        return fn ? this.bind('resize', debounce(fn)) : this.trigger(sr);
    };
})

(jQuery,'smartresize');


$(function() {


///////////////////////////////
// One page Smooth Scrolling
///////////////////////////////

$('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top
                }, 1000);
            return false;
        }
    }
});


$(document).ready(function(){
    new WOW().init();
		$("#client-speech").owlCarousel
		({
			autoPlay: 3000,
			navigation : false, // Show next and prev buttons
			slideSpeed : 700,
			paginationSpeed : 1000,
			singleItem:true
		});

    var setHomeBannerHeight = function(){
   var homeHeight= $(window).height();
   $('#overlay-1').height(homeHeight*0.6);
    }
    setHomeBannerHeight();  

       
	});





$(document).ready(function(){

  var menu = $('#navigation > .navbar');
  var origOffsetY = $('#bottom').offset().top;

  function scroll() {
     if ($(window).scrollTop() > origOffsetY) {
        menu.addClass('navbar-white');
     } else {
        menu.removeClass('navbar-white');
     }
  }

  document.onscroll = scroll;

});