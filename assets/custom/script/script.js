document.addEventListener('DOMContentLoaded', function () {
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', function () {
        if (window.scrollY > 30) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
});

// countdown timer
function startCountdown(targetDate) {
    const countdown = document.getElementById('festival-countdown');
    const countdownSection = document.getElementById('festival-countdown-section');

    function update() {
        const now = new Date();
        const diff = targetDate - now;

        if (diff <= 0) {
            // Fade out for smoothness (optional)
            countdownSection.style.transition = "opacity 0.6s";
            countdownSection.style.opacity = 0;
            setTimeout(() => {
                countdownSection.remove();
            }, 650); // Wait for fade-out before removing
            return;
        }

        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((diff / (1000 * 60)) % 60);
        const seconds = Math.floor((diff / 1000) % 60);

        countdown.innerHTML = `
      <span><span class="count-number">${days}</span><span class="label">Days</span></span>
      <span><span class="count-number">${hours}</span><span class="label">Hours</span></span>
      <span><span class="count-number">${minutes}</span><span class="label">Minutes</span></span>
      <span><span class="count-number">${seconds}</span><span class="label">Seconds</span></span>
    `;
    }

    update();
    setInterval(update, 1000);
}

// Countdown to 19th August 2025
startCountdown(new Date("2025-08-19T00:00:00"));



// swiper js

