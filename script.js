//your JS code here. If required.
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', () => {
        let sound = new Audio('sounds/' + button.innerText + '.mp3');
        sound.play();
    });
});

document.querySelector('.stop').addEventListener('click', () => {
});