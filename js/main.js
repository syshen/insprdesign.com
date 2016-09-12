
window.addEventListener('DOMContentLoaded', function (){
	'use strict';

	// START OF: sliders =====
	//all the sliders are configurated via attributes in the markup
	(function() {
		var $sliders = $('.js-slider');
		$sliders.on('init', function(slick){
			$('.cover__slider__dots')
				.wrap('<div class="cover__slider__dots_container"></div>');
		});

    console.log('slick');
		$sliders.slick();
	})();
	// ===== END OF: sliders

	// START OF: scroll to =====
	var scrollTo = (function(){
		var $scrollFullscreen = $('.js-scroll-fullscreen');
		var scrollFullscreen = function () {
			$('html,body').animate({scrollTop: window.innerHeight + window.scrollY}, 700);
		}
		var bindScrollFullscreen = function () {
			$scrollFullscreen.on('click', function(event) {
				event.preventDefault();
				scrollFullscreen();
			});
		}

		return {
			bindScrollFullscreen: bindScrollFullscreen
		}
	}());
	// ===== END OF: scroll to


	scrollTo.bindScrollFullscreen();
});
// == END OF PHOENIX JS ==
