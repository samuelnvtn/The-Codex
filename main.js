document.addEventListener("DOMContentLoaded", () => {
  const video = document.getElementById("background-video");
  const muteButton = document.getElementById("snd-button");
  const muteIcon = document.getElementById("mute-icon");

  muteButton.addEventListener("click", () => {
    if (video.muted) {
      video.muted = false;
      muteIcon.src = "/img/sound-on.png"; // Path to your "sound on" icon
      muteIcon.alt = "Sound On";
    } else {
      video.muted = true;
      muteIcon.src = "/img/sound-off.png"; // Path to your "sound off" icon
      muteIcon.alt = "Sound Off";
    }
  });
});
