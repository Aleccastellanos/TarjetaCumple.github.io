// script.js

window.onload = function() {
    let audio = document.getElementById('bgMusic');
    if (audio) {
        audio.play().catch(error => {
            console.log("Error al intentar reproducir el audio:", error);
        });
    }
}

function openCard(isLeonardo) {
    if (isLeonardo) {
        document.getElementById('message').classList.remove('hidden');
        document.getElementById('cake').classList.remove('hidden');
        document.getElementById('title').classList.add('hidden');
        document.getElementById('question').classList.add('hidden');
        document.querySelector('.button[onclick="openCard(true)"]').classList.add('hidden');
        document.querySelector('.button[onclick="openCard(false)"]').classList.add('hidden');
        setTimeout(() => {
            document.getElementById('cake').classList.add('hidden');
            document.getElementById('cardText').classList.remove('hidden');
            document.getElementById('finishButton').classList.remove('hidden');
        }, 2000);
        launchConfetti();
    } else {
        let card = document.getElementById('card');
        card.style.animation = 'explode 1s forwards';
        setTimeout(() => {
            card.innerHTML = 'Carta eliminada';
        }, 1000);
    }
}

function finish() {
    let card = document.getElementById('card');
    card.innerHTML = '<p>SEE YOU LATER 👋</p>';
    document.getElementById('photoFrames').classList.remove('hidden');
}

function launchConfetti() {
    var duration = 2 * 1000;
    var end = Date.now() + duration;

    (function frame() {
        confetti({
            particleCount: 3,
            angle: 60,
            spread: 55,
            origin: { x: 0 }
        });
        confetti({
            particleCount: 3,
            angle: 120,
            spread: 55,
            origin: { x: 1 }
        });

        if (Date.now() < end) {
            requestAnimationFrame(frame);
        }
    }());
}
