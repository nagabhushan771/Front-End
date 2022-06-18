const btns = document.querySelectorAll('.btn');

function stopSound(){
    btns.forEach(btn => {
        let sound = document.getElementById(btn.innerText);
        sound.pause()
    });
}

function playSound(btn){
    stopSound();
    document.getElementById(btn.innerText).play();
}

btns.forEach(btn => {
    btn.addEventListener('click', () => {
        playSound(btn);
    })
});

document.querySelector('.stop').addEventListener('click', () => {
    stopSound();
})