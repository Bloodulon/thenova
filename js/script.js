document.addEventListener('DOMContentLoaded', () => {

    const howToPlayButton = document.getElementById('how-to-play-btn');
    const playdiscord = document.getElementById('play-discord');
    const faqSection = document.getElementById('id-faq');
    const serverIp = 'mc.thenova.vip';

    function copyIp() {
        navigator.clipboard.writeText(serverIp).then(() => {
        }).catch(err => {
        });
    }

    if (playdiscord) {
        playdiscord.addEventListener('click', () => {
            window.location.href = 'https://discord.gg/a7C3UMCrDX';
        });
    }

    if (howToPlayButton) {
        howToPlayButton.addEventListener('click', () => {
            window.location.href = 'https://t.me/thenovavip';
        });
    }

    if (faqSection) {
        faqSection.addEventListener('click', () => {
            window.location.href = 'index.html#faq-section';
        });
    }

}); 


document.addEventListener('DOMContentLoaded', (event) => {
    const animatedElement = document.querySelector('.info-cards');

    if (!animatedElement) {
        return;
    }

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.2
    });

    observer.observe(animatedElement);
});

document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('header');

    if (!header) {
        return;
    }

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

});

document.addEventListener('DOMContentLoaded', () => {
    const categoryButtons = document.querySelectorAll('.category-btn');
    const contentSections = document.querySelectorAll('.content-section');

    categoryButtons.forEach(button => {
        button.addEventListener('click', () => {
            categoryButtons.forEach(btn => btn.classList.remove('active'));

            button.classList.add('active');

            const targetId = button.getAttribute('data-target');

            contentSections.forEach(section => {
                section.style.display = 'none';
                section.classList.remove('active');
            });

            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                targetSection.style.display = 'grid';
                targetSection.classList.add('active');
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {

    const qaElement = document.querySelector('.qa-content');

    const qaObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.2
    });

    if (qaElement) {
        qaObserver.observe(qaElement);
    }
});