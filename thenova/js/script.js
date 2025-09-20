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