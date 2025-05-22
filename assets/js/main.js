document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('header');
    const menuToggle = document.querySelector('.toggle-menu');
    const menu = document.querySelector('.menu');

    // AOS initialization
    AOS.init();

    // Swiper initialization
    const swiper = new Swiper('.hero-swiper', {
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

    // Change header on scroll
    window.addEventListener('scroll', () => {
        menu.classList.add('translate-x-full');
        menuToggle.querySelector('.open-menu').classList.remove('hidden');
        menuToggle.querySelector('.close-menu').classList.add('hidden');
        if (window.scrollY > 0) {
            header.classList.remove('py-5');
            header.classList.add('py-3');
        } else {
            header.classList.remove('py-3');
            header.classList.add('py-5');
        }
    });

    menuToggle.addEventListener('click', () => {
        menu.classList.toggle('translate-x-full');
        menuToggle.querySelector('.open-menu').classList.toggle('hidden');
        menuToggle.querySelector('.close-menu').classList.toggle('hidden');
    });
});