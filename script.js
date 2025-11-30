document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    // Toggle navigation menu on mobile devices
    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', function() {
            navLinks.classList.toggle('open');
        });
    }

    // You can add more JavaScript here, such as:
    // 1. Image Carousel functionality for the hero section
    // 2. Form validation for the contact page
    // 3. Simple product filtering on the products page
});