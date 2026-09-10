document.addEventListener('DOMContentLoaded', () => {
    // Contact form mock submission
    const form = document.getElementById('contact-form');
    const statusText = document.getElementById('form-status');

    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            statusText.style.color = '#38bdf8';
            statusText.textContent = 'Sending message...';

            setTimeout(() => {
                statusText.style.color = '#4ade80';
                statusText.textContent = 'Thank you! Your message has been sent successfully.';
                form.reset();
            }, 1000);
        });
    }

    // Scroll active link highlight
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= (sectionTop - sectionHeight / 3)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
});