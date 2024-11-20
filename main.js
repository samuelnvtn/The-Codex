document.addEventListener("DOMContentLoaded", () => {
  const video = document.getElementById("background-video");
  const muteIcons = {
    button1: document.getElementById("mute-icon"),
    button2: document.getElementById("mute2"),
  };
  const muteButtons = document.querySelectorAll("#snd-button, #snd-button2");

  muteButtons.forEach((button) => {
    button.addEventListener("click", () => {
      if (video.muted) {
        video.muted = false;
        if (muteIcons.button1) {
          muteIcons.button1.src = "/img/sound-on.png";
          muteIcons.button1.alt = "Sound On";
        }
        if (muteIcons.button2) {
          muteIcons.button2.src = "/img/sound-on-black.png";
          muteIcons.button2.alt = "Sound On";
        }
      } else {
        video.muted = true;
        if (muteIcons.button1) {
          muteIcons.button1.src = "/img/sound-off.png";
          muteIcons.button1.alt = "Sound Off";
        }
        if (muteIcons.button2) {
          muteIcons.button2.src = "/img/sound-off-black.png";
          muteIcons.button2.alt = "Sound Off";
        }
      }
    });
  });
});
