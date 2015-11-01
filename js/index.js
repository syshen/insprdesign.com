$(function(){
	isHandHeld=false;
	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
		$('body').addClass('handheld');
		isHandHeld=true;
	}else{
		$('body').addClass('desktop');
	}


	$('.play-video-mask').on('click',function(){
		$(this).hide();
		$('.demo-video')[0].play();
	})
	$('.demo-video').on('click',function(){
		this.pause();
		$('.play-video-mask').show();
	})
	$('.demo-video').on('ended',function(){
		$('.play-video-mask').show();
	})

	$('.play-video-wrapper__m').on('click',function(){
		$('.mask').show();
		$('.demo-video__m')[0].play();
		location.hash="videoplaying"
	})

	$('.demo-video__m').on('click',function(e){
		e.stopPropagation();
		$('.demo-video__m')[0].play();
	})

	$('.mask').on('click',function(e){
		$(this).hide();
		$('.demo-video__m')[0].pause();
		location.hash=""
	});

	window.onhashchange = function() {
		if(location.hash.indexOf("videoplaying")==-1 && $('.mask').css('display')!='none'){
			$('.mask').hide();	
		}
	}

	handheld_width = 960
	if ($(window).width() < handheld_width){
		mockup_block_padding = 6;
		mockup_width = 200;
		mockup_width_p = mockup_width+mockup_block_padding*2
		total_mockups = 7;
		maxpoint = total_mockups - Math.floor(($(window).width() - ($(window).width()-mockup_width_p)/2 ) / mockup_width_p )
		console.log(maxpoint)
		$('.mockups-list').css('left', ($(window).width()-mockup_width_p)/2)
		flipsnap = Flipsnap('.mockups-list', {
	    distance: mockup_width + mockup_block_padding*2, 
	    maxPoint: maxpoint
		});
		flipsnap.moveToPoint(1);
	}
});