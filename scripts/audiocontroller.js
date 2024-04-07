const audio = document.getElementById("audioElement");

audio.addEventListener("timeupdate", function() {
    const currentTime = audio.currentTime;
    const loopTime = 66.793; //Hardcoded values right now, should probably make this reusable somehow...
    const loopStart = 5.960; 

    if (currentTime >= loopTime) {
        audio.currentTime = loopStart;
        audio.play();
        }
});

const musicButton = document.getElementById("musicButton");
let isPlaying = false;

musicButton.addEventListener("click", function() {
  isPlaying = !isPlaying; 
  if (isPlaying == false) {
    audioElement.pause();
    if(musicButton.src.includes("musicenabled")){
      musicButton.src = "./images/musicdisabled.png";
    }
    else {
      musicButton.src = "./images/404/annoying.png";
    }
  } else {
    audioElement.play();
    if(musicButton.src.includes("musicdisabled")){
      musicButton.src = "./images/musicenabled.png";
    }
    else {
      musicButton.src = "./images/404/annoying.gif";
    }
  }
});

document.addEventListener('DOMContentLoaded', function() {
    var audio = document.getElementById('audioElement');
    var hasAlreadyClicked = false;

    function startAudio() {
        if (hasAlreadyClicked == false) {
            audio.play();
            audio.volume = 0.8;
            document.removeEventListener('click', startAudio);
            hasAlreadyClicked = true;
            isPlaying = true;
            if(musicButton.src.includes("musicdisabled")){
              musicButton.src = "./images/musicenabled.png";
            }
            else {
              musicButton.src = "./images/404/annoying.gif";
            }
        }
    }

    document.addEventListener('click', startAudio);
});