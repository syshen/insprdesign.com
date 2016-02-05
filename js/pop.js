var player, vid_width = 720, vid_height = 405, vid_ratio = vid_width/vid_height;

if(window.innerWidth < 767){
	vid_width = window.innerWidth * 0.8
	vid_height = vid_width / vid_ratio

	if(window.innerWidth > 480){
		document.getElementById('video-placeholder').style.marginTop = "-"+vid_height/2+"px"
		document.getElementById('video-placeholder').style.marginLeft = "-"+vid_width/2+"px"
	}
}

function onYouTubeIframeAPIReady() {
    player = new YT.Player('video-placeholder', {
        width: vid_width,
        height: vid_height,
        videoId: '3hPePH2vDz0',
        playerVars: { 'controls': 0},
    });
}

var videoWrapper = document.getElementById('video-wrapper')

document.getElementById('watch-video').addEventListener('click', function(){
	videoWrapper.style.display='block';
	videoWrapper.style.background='rgba(0,0,0,0.7)';
	player.playVideo()
});

videoWrapper.addEventListener('click', function(){
	this.style.display='none';
	this.style.background='rgba(0,0,0,0)';
	player.stopVideo()
});

document.getElementById('video-placeholder').addEventListener('click', function(e){
	e.stopPropagation();
})



