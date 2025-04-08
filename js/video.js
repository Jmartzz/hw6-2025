var video;
//refered alot of code here for video playback
//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/video

window.addEventListener("load", function () {
  console.log("Good job opening the window");

  video = document.getElementById("player1");

  // Turn off autoplay and looping
  video.autoplay = false;
  video.loop = false;
  video.load();

  // play video function
  var playB=document.getElementById("play");
  playB.addEventListener("click", function () {
    video.play();
    document.getElementById("volume").innerHTML = (video.volume * 100) + "%";
    //console.log("Video Played");
  });
  
  // pause video functiopn
  var pauseB=document.getElementById("pause");
  pauseB.addEventListener("click", function () {
    video.pause();
  //console.log("Video Paused");
  });

  // slow down function\
  //refered to code here (slow and speed up code)
  //https://stackoverflow.com/questions/3027707/how-to-change-the-playing-speed-of-videos-in-html5
  var slowB=document.getElementById("slower");
  slowB.addEventListener("click", function () {
    video.playbackRate *= 0.9;
    console.log("slowed down, Video speed is " + video.playbackRate);
  });

  // speed up function
  var speedB=document.getElementById("faster");
  speedB.addEventListener("click", function () {
    video.playbackRate /= 0.9;
    console.log("speed up, Video speed is " + video.playbackRate);
  });

  // skip ahead function

var skipB=document.getElementById("skip");
skipB.addEventListener("click", function () {
    if (video.currentTime + 10 < video.duration) {
      video.currentTime += 10;
    } else {
      video.currentTime = 0;
    }
    console.log("video is at " + video.currentTime);
  });

  // mute code

  //i used code here to quick update the html (innerHTML)
  //https://stackoverflow.com/questions/31316445/javascript-innerhtml
  var muteB=document.getElementById("mute");
  muteB.addEventListener("click", function () {
    if (video.muted) {
      video.muted = false;
      this.innerHTML = "Mute";
    } else {
      video.muted = true;
      this.innerHTML = "Unmute";
    }
  });

  // volume code
  var volumeB=document.getElementById("slider");
  volumeB.addEventListener("input", function () {
    video.volume = this.value / 100;
    document.getElementById("volume").innerHTML = (video.volume * 100) + "%";
  });

  // old school function
  //Used classList to get code to update the css for borders in video player
  //https://www.w3schools.com/jsref/prop_element_classlist.asp
  var oSchoolB=document.getElementById("vintage");
  oSchoolB.addEventListener("click", function () {
    video.classList.add("oldSchool");
  });

  // orignal function
  var originalB=document.getElementById("orig");
  originalB.addEventListener("click", function () {
    video.classList.remove("oldSchool");
  });

});