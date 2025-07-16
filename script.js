// Select menu icon and navbar elements
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

// Select all sections and nav links
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('.navbar a');

// Highlight active nav link on scroll
window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
            });
            let activeLink = document.querySelector('.navbar a[href*="' + id + '"]');
            if (activeLink) {
                activeLink.classList.add('active');
            }
        }
    });
};

// Toggle menu icon and navbar for mobile
menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};


// Toggle light/dark mode and update button icon
const themeToggle = document.getElementById('theme-toggle');
themeToggle.onclick = () => {
    document.body.classList.toggle('light-mode');
    themeToggle.textContent = document.body.classList.contains('light-mode') 
        ? '🌙' 
        : '☀️';
};
