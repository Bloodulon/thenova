document.addEventListener('DOMContentLoaded', () => {
    const copyButton = document.getElementById('copy-btn');
    const serverIpSpan = document.getElementById('server-ip');

    copyButton.addEventListener('click', () => {
        const ipText = serverIpSpan.textContent;

        navigator.clipboard.writeText(ipText)
            .then(() => {

                console.log('IP адрес скопирован!');
                const originalText = copyButton.textContent;
                copyButton.textContent = 'Скопировано!';

                setTimeout(() => {
                    copyButton.textContent = originalText;
                }, 2000);
            })
            .catch(err => {
                console.error('Не удалось скопировать текст: ', err);
                alert('Не удалось скопировать IP. Попробуйте скопировать вручную: ' + ipText);
            });
    });
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