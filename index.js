var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
    
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
  
       getVideoDetails('VIDEO_ID');
      var player;
      function onYouTubeIframeAPIReady() {
        player = new YT.Player('player', {
          height: '640',
          width: '1240',
          videoId:'woVJ4N5nl_s',
          events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
          }
        });
      }

     
      function onPlayerReady(event) {
        event.target.playVideo();
      }

      var done = false;
      function onPlayerStateChange(event) {
        if (event.data == YT.PlayerState.PLAYING && !done) {
          setTimeout(stopVideo, 6000);
          done = true;
        }
      }
    function stopVideo() {
        player.stopVideo();
      }