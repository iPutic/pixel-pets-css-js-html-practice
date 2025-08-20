document.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", e => e.preventDefault());
});

function applyTheme(theme) {
    document.body.classList.remove('light', 'dark');

    setTimeout(() => {
        document.body.classList.add(theme);
        localStorage.setItem('theme', theme);
        updateThemeIcon();
    }, 50);
}

function updateThemeIcon() {
    const sun = document.getElementById('theme-sun');
    const moon = document.getElementById('theme-moon');

    sun.classList.remove('show');
    moon.classList.remove('show');

    if (document.body.classList.contains('light')) {
        sun.classList.add('show');
    } else {
        moon.classList.add('show');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme');

    if (savedTheme) {
        applyTheme(savedTheme);
    } else {
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        applyTheme(prefersDark ? 'dark' : 'light');
    }

    document.getElementById('theme-toggle').addEventListener('click', (e) => {
        e.preventDefault();
        const current = document.body.classList.contains('light') ? 'light' : 'dark';
        applyTheme(current === 'light' ? 'dark' : 'light');
    });
});

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-bar-links");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("open");
    menuToggle.classList.toggle("active");
});