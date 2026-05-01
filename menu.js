// Hamburger menu toggle for mobile navigation
window.addEventListener('DOMContentLoaded', function () {
    const menuBtn = document.getElementById('nav-toggle');
    const navUl = document.querySelector('nav ul');
    menuBtn.addEventListener('click', function () {
        navUl.classList.toggle('nav-open');
        menuBtn.classList.toggle('open');
    });
    // Optional: close menu when clicking a link (mobile UX)
    navUl.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 768) {
                navUl.classList.remove('nav-open');
                menuBtn.classList.remove('open');
            }
        });
    });
});
