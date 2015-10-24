$(function(){
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
});