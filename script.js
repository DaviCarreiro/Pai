function createHeart() {
    const heart = document.createElement('div');
    heart.className = 'floating-heart';
    heart.innerHTML = '❤';
    heart.style.left = Math.random() * 100 + 'vw';
    document.body.appendChild(heart);
    setTimeout(() => {
        heart.remove();
    }, 6000);
}

setInterval(createHeart, 300);

function toggleMusic() {
    const music = document.getElementById('bgMusic');
    const btn = document.getElementById('musicBtn');
    if (music.paused) {
        music.play();
        btn.textContent = 'Pausar Música';
    } else {
        music.pause();
        btn.textContent = 'Tocar Música';
    }
}

document.getElementById('envelope').addEventListener('click', function() {
    this.style.display = 'none';
    document.getElementById('content').classList.add('show');
});
