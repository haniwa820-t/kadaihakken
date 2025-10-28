// script.js
let currentSlide = 8;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

document.getElementById('totalSlides').textContent = totalSlides;

function updateSlide() {
    slides.forEach((slide, index) => {
        slide.classList.remove('active', 'prev');
        if (index === currentSlide) {
            slide.classList.add('active');
        } else if (index < currentSlide) {
            slide.classList.add('prev');
        }
    });

    document.getElementById('currentSlide').textContent = currentSlide + 1;

    // ナビゲーションボタンの状態更新
    document.getElementById('prevBtn').disabled = currentSlide === 0;
    document.getElementById('nextBtn').disabled = currentSlide === totalSlides - 1;
}

function nextSlide() {
    if (currentSlide < totalSlides - 1) {
        currentSlide++;
        updateSlide();
    }
}

function prevSlide() {
    if (currentSlide > 0) {
        currentSlide--;
        updateSlide();
    }
}

// イベントリスナー
document.getElementById('nextBtn').addEventListener('click', nextSlide);
document.getElementById('prevBtn').addEventListener('click', prevSlide);

// キーボード操作
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight' || e.key === ' ') {
        nextSlide();
    } else if (e.key === 'ArrowLeft') {
        prevSlide();
    }
});

// 初期化
updateSlide();