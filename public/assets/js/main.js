document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    const menuIcon = document.getElementById('menu-icon');

    // Define the SVG paths for open (hamburger) and close icons
    const hamburgerPath = 'M4 6h16M4 12h16M4 18h16';
    const closePath = 'M6 18L18 6M6 6l12 12';

    menuToggle.addEventListener('click', () => {
        // Toggle the 'active' class to control the slide-down animation via max-height
        mobileMenu.classList.toggle('active');

        // Toggle the menu icon appearance
        if (mobileMenu.classList.contains('active')) {
            // Menu is open (show close icon)
            menuIcon.innerHTML = `<path stroke-linecap="round" stroke-linejoin="round" d="${closePath}" />`;
        } else {
            // Menu is closed (show hamburger icon)
            menuIcon.innerHTML = `<path stroke-linecap="round" stroke-linejoin="round" d="${hamburgerPath}" />`;
        }
    });

    // Optional: Close menu if a link inside is clicked (good UX)
    mobileMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
            menuIcon.innerHTML = `<path stroke-linecap="round" stroke-linejoin="round" d="${hamburgerPath}" />`;
        });
    });
});