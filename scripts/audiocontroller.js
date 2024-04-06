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
    musicButton.src = "/images/musicdisabled.png";
  } else {
    audioElement.play();
    musicButton.src = "/images/musicenabled.png";
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
            musicButton.src = "/images/musicenabled.png";
        }
    }

    document.addEventListener('click', startAudio);
});