//your JS code here. If required.
function playSound(sound) {
    const audio = new Audio(`sounds/${sound}`);
    audio.play();
}

function stopAllSounds() {
    const allSounds = document.querySelectorAll('audio');
    allSounds.forEach(sound => sound.pause());
}