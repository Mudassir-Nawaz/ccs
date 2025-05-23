document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('header');
    const menuToggle = document.querySelector('.toggle-menu');
    const menu = document.querySelector('.menu');

    // AOS initialization
    AOS.init();

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