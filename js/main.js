// Hamburger Menu Toggle
const hamburgerButton = document.querySelector('.hamburger-button');
const mobileMenu = document.querySelector('.mobile-menu');

hamburgerButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('open');
});

// FAQ Accordion Functionality
const faqHeaders = document.querySelectorAll('.faq-group-header');

faqHeaders.forEach(header => {
    header.addEventListener('click', () => {
        const body = header.nextElementSibling;
        body.classList.toggle('open');
        
        const icon = header.querySelector('i');
        if (body.classList.contains('open')) {
            icon.className = 'fas fa-minus';
        } else {
            icon.className = 'fas fa-plus';
        }
    });
});