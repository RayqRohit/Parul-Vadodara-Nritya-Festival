(function () {
    'use strict';


    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initBannerPreloader);
    } else {
        initBannerPreloader();
    }

    function initBannerPreloader() {
        const banner = document.querySelector('.video-banner');
        if (!banner) return;

 
        const imagePaths = [
            'assets/images/slider/slide-1.png',
            'assets/images/slider/slide-2.png',
            'assets/images/slider/slide-3.png',
            'assets/images/slider/slide-4.png',
            'assets/images/slider/slide-5.png'
        ];

        let loadedCount = 0;
        const totalImages = imagePaths.length;
        const imagePromises = [];


        banner.style.opacity = '0';
        banner.style.background = '#003e6d';
        // banner.innerHTML = '<div style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); color: white; font-size: 18px; z-index: 999;">Loading Festival Images...</div>' + banner.innerHTML;

        imagePaths.forEach((path, index) => {
            const promise = new Promise((resolve, reject) => {
                const img = new Image();

                img.onload = () => {
                    loadedCount++;
                    console.log(`✓ Loaded: ${path} (${loadedCount}/${totalImages})`);
                    resolve(path);
                };

                img.onerror = () => {
                    loadedCount++;
                    console.warn(`✗ Failed to load: ${path}`);
                    resolve(path);
                };

         
                img.src = path;
            });

            imagePromises.push(promise);
        });


        Promise.all(imagePromises).then(() => {
            console.log('🎉 All banner images preloaded!');

            // Remove loading text
            // const loadingText = banner.querySelector('div[style*="Loading Festival Images"]');
            // if (loadingText) {
            //     loadingText.remove();
            // }

          
            banner.style.background = '';
            banner.style.opacity = '1';
            banner.classList.add('images-ready');

       n
            setTimeout(() => {
                banner.classList.add('start-animation');
            }, 100);
        });
    }
})();




document.addEventListener('DOMContentLoaded', function () {
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', function () {
        if (window.scrollY > 0) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
});

// navbar 

document.addEventListener('DOMContentLoaded', function () {
    const navbar = document.getElementById('mainNavbar');
    const navbarToggler = document.querySelector('.navbar-toggler');
    const body = document.body;

    // Function to prevent body scroll
    function preventBodyScroll() {
        body.classList.add('navbar-open');
    }

    // Function to allow body scroll
    function allowBodyScroll() {
        body.classList.remove('navbar-open');
    }

    // Listen for Bootstrap collapse events to control body scroll
    navbar.addEventListener('show.bs.collapse', function () {
        preventBodyScroll();
    });

    navbar.addEventListener('hide.bs.collapse', function () {
        allowBodyScroll();
    });

    // Close menu when clicking outside (on backdrop)
    document.addEventListener('click', function (e) {
        const isClickInsideNavbar = navbar.contains(e.target);
        const isClickOnToggler = navbarToggler.contains(e.target);
        const isMenuOpen = navbar.classList.contains('show');

        // If menu is open and click is outside navbar and not on toggler
        if (isMenuOpen && !isClickInsideNavbar && !isClickOnToggler) {
            navbarToggler.click();
        }
    });

    // Close menu when pressing Escape key
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && navbar.classList.contains('show')) {
            navbarToggler.click();
        }
    });

    // Close menu when clicking on nav links (for better UX)
    const navLinks = navbar.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function () {
            if (window.innerWidth <= 991.98) {
                navbarToggler.click();
            }
        });
    });

    // Handle window resize - close menu if screen becomes desktop size
    window.addEventListener('resize', function () {
        if (window.innerWidth > 991.98 && navbar.classList.contains('show')) {
            navbarToggler.click();
        }
    });

    // Clean up on page unload
    window.addEventListener('beforeunload', function () {
        allowBodyScroll();
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



// Scroll to Top Button Functionality
document.addEventListener('DOMContentLoaded', function () {
    const scrollToTopBtn = document.getElementById('scrollToTopBtn');

    // Show/hide button based on scroll position
    window.addEventListener('scroll', function () {
        if (window.pageYOffset > 50) {
            scrollToTopBtn.classList.add('show');
        } else {
            scrollToTopBtn.classList.remove('show');
        }
    });

    // Smooth scroll to top when button is clicked
    scrollToTopBtn.addEventListener('click', function () {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});


// about festival 

