document.addEventListener('DOMContentLoaded', function() {
    // Mobile Menu Toggle
    function toggleMenu() {
        const mobileMenu = document.querySelector('.mobile-menu');
        const body = document.body;
        mobileMenu.classList.toggle('active');
        body.classList.toggle('mobile-menu-active');
    }

    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
        const mobileMenu = document.querySelector('.mobile-menu');
        const hamburger = document.querySelector('.hamburger');
        const closeBtn = document.querySelector('.menu-close');
        
        if (!mobileMenu.contains(e.target) && 
            !hamburger.contains(e.target) && 
            !closeBtn.contains(e.target)) {
            mobileMenu.classList.remove('active');
            document.body.classList.remove('mobile-menu-active');
        }
    });

    // Add event listeners for menu interactions
    document.querySelector('.hamburger').addEventListener('click', toggleMenu);
    document.querySelector('.menu-close').addEventListener('click', toggleMenu);

    // AOS Animation Initialization
    AOS.init({
        duration: 1200,
        once: true
    });

    // Header Scroll Detection
    let lastScrollY = window.scrollY;
    const header = document.querySelector('.header');

    function handleScroll() {
        const currentScrollY = window.scrollY;
        
        if (currentScrollY > lastScrollY + 100) {
            header.classList.add('hidden');
        } else if (currentScrollY < lastScrollY - 100) {
            header.classList.remove('hidden');
        }
        
        lastScrollY = currentScrollY;
    }

    window.addEventListener('scroll', () => {
        requestAnimationFrame(() => {
            requestAnimationFrame(handleScroll);
        });
    });

    // Slider functionality
    let slideIndex = 0;

    function showSlides() {
        let slides = document.getElementsByClassName("slide");
        for (let i = 0; i < slides.length; i++) {
            slides[i].classList.remove('active');
        }
        slideIndex++;
        if (slideIndex > slides.length) {slideIndex = 1}
        slides[slideIndex-1].classList.add('active');
        setTimeout(showSlides, 7000);
    }

    // Initialize slider on page load
    window.addEventListener('load', () => {
        showSlides();
        AOS.refresh();
    });
});