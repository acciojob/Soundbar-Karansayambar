//your JS code here. If required.
function playSound(sound) {
    const audio = new Audio(`sounds/${sound}`);
    audio.play();
}

function playMusic(music) {
    const audio = new Audio(`sounds/${music}`);
    audio.play();
}

function stopAllSounds() {
    const allSounds = document.querySelectorAll('audio');
    allSounds.forEach(sound => sound.pause());
}