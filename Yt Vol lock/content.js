function forceAudio() {
    const video = document.querySelector("video");
    const muteButton = document.querySelector(".ytp-mute-button");

    if (!video) return;

    video.volume = 1;
    video.muted = false;

    if (muteButton && muteButton.getAttribute("title")?.includes("Unmute")) {
        muteButton.click();
    }
}

setInterval(forceAudio, 200);