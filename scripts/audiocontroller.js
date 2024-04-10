// Get the audio element by its ID
const audio = document.getElementById("audioElement");

// Event listener for the "timeupdate" event of the audio element
audio.addEventListener("timeupdate", function() {
  const currentTime = audio.currentTime;
  const loopTime = 66.793; // Hardcoded value for the loop time
  const loopStart = 5.960; // Hardcoded value for the loop start time

  // If the current time exceeds the loop time, reset the audio to the loop start time and play it
  if (currentTime >= loopTime) {
    audio.currentTime = loopStart;
    audio.play();
  }
});

// Get the music button element by its ID
const musicButton = document.getElementById("musicButton");
let isPlaying = false;

// Event listener for the "click" event of the music button
musicButton.addEventListener("click", function() {
  isPlaying = !isPlaying; 

  // If the audio is not playing, pause it and change the music button image to disabled
  if (isPlaying == false) {
    audio.pause();
    musicButton.src = "./images/musicdisabled.png";
  } else {
    // If the audio is playing, play it and change the music button image to enabled
    audio.play();
    musicButton.src = "./images/musicenabled.png";
  }
});

document.addEventListener('DOMContentLoaded', function() {
  var audio = document.getElementById('audioElement');
  var hasAlreadyClicked = false;

  // Function to start the audio when the document is clicked
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

  // Add event listener to start the audio when the document is clicked
  document.addEventListener('click', startAudio);
});