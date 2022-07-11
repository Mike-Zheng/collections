//youtube player
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player; 
function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        width : '1280',
        height : '720',
        videoId : '',
        events : {
            'onReady' : onPlayerReady,
            'onStateChange' : onPlayerStateChange
        }
    });
}
    
function onPlayerReady(event) {
    //event.target.playVideo();
}
function onPlayerStateChange(event) {
    if(event.data == YT.PlayerState.ENDED) {
        player.pauseVideo();
    }
}
function stopVideo() {
    player.stopVideo();
}