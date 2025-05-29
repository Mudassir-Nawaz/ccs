document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('header');
    const menuToggle = document.querySelector('.toggle-menu');
    const menu = document.querySelector('.menu');

    // Swiper initialization
    const heroSwiper = new Swiper('.hero-swiper', {
        loop: true,
        autoplay: true,
        effect: 'flip',
        breakpoints: {
            1024: {
                allowTouchMove: false,
                navigation: {
                    nextEl: '.hero-next-slide',
                    prevEl: '.hero-prev-slide',
                },
            },
        },
    });

    const goalSwiper = new Swiper('.goals-swiper', {
        loop: true,
        navigation: {
            nextEl: '.goals-next-slide',
            prevEl: '.goals-prev-slide',
        },
        on: {
            init: function() {
                const pagination = document.querySelector('.goals-pagination');
                if (pagination) {
                    pagination.textContent = this.realIndex + 1;
                }
            },
            slideChange: function() {
                const pagination = document.querySelector('.goals-pagination');
                if (pagination) {
                    pagination.textContent = this.realIndex + 1;
                }
            }
        }
    });

    // Custom smooth, auto-moving slider for .awards-swiper (flex container of images)
    const swiper = document.querySelector('.awards-container');
    if (swiper) {
    const inner = swiper.querySelector('.awards-swiper');
    if (inner) {
        // Duplicate images for seamless loop
        inner.innerHTML += inner.innerHTML;

        let scrollSpeed = 1;
        let isPaused = false;
        let translateX = 0;

        // Calculate total width of original images
        const images = Array.from(inner.querySelectorAll('img')).slice(0, inner.children.length / 2);
        let totalWidth = 0;
        images.forEach(img => {
        const style = getComputedStyle(img);
        totalWidth += img.offsetWidth + parseInt(style.marginLeft || 0) + parseInt(style.marginRight || 0);
        });

        function autoScroll() {
        if (!isPaused) {
            translateX -= scrollSpeed;
            if (Math.abs(translateX) >= totalWidth) {
            translateX = 0;
            }
            inner.style.transform = `translateX(${translateX}px)`;
        }
        requestAnimationFrame(autoScroll);
        }

        inner.addEventListener('mouseenter', () => isPaused = true);
        inner.addEventListener('mouseleave', () => isPaused = false);

        inner.style.willChange = 'transform';
        inner.style.transition = 'none';
        swiper.style.overflow = 'hidden';

        requestAnimationFrame(autoScroll);
    }
    }

    // Change header on scroll
    window.addEventListener('scroll', () => {
        menu.classList.add('translate-x-full');
        menuToggle.querySelector('.open-menu').classList.remove('hidden');
        menuToggle.querySelector('.close-menu').classList.add('hidden');
        const logo = header.querySelector('.logo');
        if (logo) {
            if (window.scrollY > 0) {
                logo.classList.remove('size-32');
                logo.classList.add('size-20');
            } else {
                logo.classList.remove('size-20');
                logo.classList.add('size-32');
            }
        }
    });

    menuToggle.addEventListener('click', () => {
        menu.classList.toggle('translate-x-full');
        menuToggle.querySelector('.open-menu').classList.toggle('hidden');
        menuToggle.querySelector('.close-menu').classList.toggle('hidden');
    });

    if (menu.classList.contains('top-34')) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 0) {
                menu.classList.remove('top-34');
                menu.classList.add('top-20');
            } else {
                menu.classList.remove('top-20');
                menu.classList.add('top-34');
            }
        });
    }
});