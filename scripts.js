document.addEventListener('DOMContentLoaded', () => {
    const themeButton = document.getElementById('theme-toggle');
    const body = document.body;
    const sections = document.querySelectorAll('.section');

    themeButton.addEventListener('click', () => {
        body.classList.toggle('dark-theme');
        if (body.classList.contains('dark-theme')) {
            themeButton.textContent = '🌞 Açık Tema';
        } else {
            themeButton.textContent = '🌙 Koyu Tema';
        }
    });

    window.addEventListener('scroll', () => {
        sections.forEach((section, i) => {
            if (section.getBoundingClientRect().top < window.innerHeight / 1.3) {
                section.style.opacity = '1';
                section.style.transform = 'translateY(0)';
            } else {
                section.style.opacity = '0';
                section.style.transform = 'translateY(20px)';
            }
        });
    });
});
