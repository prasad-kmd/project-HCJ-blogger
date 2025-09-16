document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const navbar = document.querySelector('.navbar');
    const themeSwitcher = document.getElementById('theme-switcher');

    // Toggle mobile menu
    menuToggle.addEventListener('click', () => {
        navbar.classList.toggle('menu-open');
    });

    // Theme switcher logic
    const currentTheme = localStorage.getItem('theme');

    if (currentTheme) {
        document.documentElement.setAttribute('data-theme', currentTheme);
    }

    themeSwitcher.addEventListener('click', () => {
        let currentTheme = document.documentElement.getAttribute('data-theme');
        if (currentTheme === 'dark') {
            document.documentElement.removeAttribute('data-theme');
            localStorage.removeItem('theme');
        } else {
            document.documentElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
        }
    });
});
