function startAudioContext() {
    const audio = document.getElementById('background-music');
    if (audio.components.sound) {
        audio.components.sound.playSound();
    }


    document.removeEventListener('click', startAudioContext);
}


document.addEventListener('click', startAudioContext);