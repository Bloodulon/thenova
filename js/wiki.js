document.addEventListener('DOMContentLoaded', () => {
    const navItems = document.querySelectorAll('.sidebar-nav .nav-item');
    const contentContainer = document.getElementById('dynamic-wiki-content');

    const wikiContent = {
        'default': contentContainer.innerHTML,

        'commands': `
            <h1 class="content-title">Команды сервера</h1>

            <h2 class="content-subtitle">Эффекты при заходе</h2>
            <ul>
                <li>При заходе на сервер появляются частицы душ. Эффект можно включить или отключить командой ниже.<br>
                <br>Включить: <strong>/souls on</strong></li>
                <li>Выключить: <strong>/souls off</strong></li>
            </ul>

            <div class="image-content">
                <img src="img/souls.png" alt="Частицы душ при заходе на сервер">
            </div>

            <h2 class="content-subtitle">Ежедневные подарки</h2>
            <ul>
                <li>Каждые 20 часов можно бесплатно получить случайный подарок.<br>
                <br>Открыть подарок можно командой: <strong>/claim</strong> </li>
            </ul>

            <video controls autoplay loop muted playsinline class="image-content">
                <source src="vid/daily.mp4" type="video/mp4">
            </video>
        `,

        'crafts': `
            <h1 class="content-title">Уникальные крафты</h1>

            <h2 class="content-subtitle">Крафт блока света</h2>
            <ul>
                <li>Количество при получении 10 штук. <li>
                <li>Крафт: <strong>4</strong> свечки + <strong>1</strong> факел душ</li>
            </ul>

            <div class="image-content">
                <img src="img/light.png" alt="Крафт блока света">
            </div>

            <h2 class="content-subtitle">Крафт элитр</h2>
            <ul>
                <li>Количество при получении 1 штука. <li>
                <li>Крафт: <strong>2</strong> откалиброванных скалка + <strong>1</strong> заряд ветра + <strong>1</strong> цепь + <strong>2</strong> осколка эха + <strong>2</strong> незеритовых блока + <strong>2</strong> мембрана фантома</li>
            </ul>

            <div class="image-content">
                <img src="img/elytra.png" alt="Крафт элитр">
            </div>
        `,
        'mechanics': `
            <h1 class="content-title">Новые механики</h1>
            <h2 class="content-subtitle">Починка трезубцев</h2>
            <ul>
                <li>Для починки нужен 1 алмазный блок, чтобы починить трезубец на 125 прочности (половину) без опыта и других условия.</li>
                <li>Для этого понадобится: взять в левую руку алмазный блок, а в правую сам трезубец после этого нажать лкм.</li>
            </ul>

            <video controls autoplay loop muted playsinline class="image-content">
                <source src="vid/trident.mp4" type="video/mp4">
            </video>

            <h2 class="content-subtitle">Повторное открытие хранилищ</h2>
            <ul>
                <li>Добавлена возможность открывать повторно зловещее хранилище. Для этого понадобится зловещий ключ испытаний или 3 обычных ключа испытаний.</li>
                <li>Открывать такое хранилище можно раз в 20 минут.</li>
            </ul>

            <video controls autoplay loop muted playsinline class="image-content">
                <source src="vid/vault.mp4" type="video/mp4">
            </video>

            <h2 class="content-subtitle">Обновленная рыбалка</h2>
            <ul>
                <li>Возле игроков могут появляться небольшие области в которых можно выловить годный лут.</li>
                <li>Всего 3 вида таких зон: Обычная, Редкая, Легендарная.</li>
            </ul>

            <video controls autoplay loop muted playsinline class="image-content">
                <source src="vid/fishing.mp4" type="video/mp4">
            </video>

            <h2 class="content-subtitle">Шлепки</h2>
            <ul>
                <li>При нажатии shift + пкм по игроку, то вы хлопнете его по плечу, а еще с 10 процентным шансом по заднице.</li>
                <li>Есть возможность изменять эффекты и название действия за определенную привелегию</li>
            </ul>

            <video controls autoplay loop muted playsinline class="image-content">
                <source src="vid/slaps.mp4" type="video/mp4">
            </video>
        `,
        'alco': `
            <h1 class="content-title">Варка алкоголя</h1>
            <h2 class="content-subtitle">Скоро...</h2>
        `,
        'story': `
            <h1 class="content-title">Сюжет</h1>
            <h2 class="content-subtitle">Скоро...</h2>
        `,
    };

    function switchWikiContent(contentKey, clickedItem) {
        contentContainer.classList.add('fade-out');

        setTimeout(() => {
            const newContent = wikiContent[contentKey] || wikiContent['default'];
            contentContainer.innerHTML = newContent;

            navItems.forEach(item => item.classList.remove('active'));
            if (clickedItem) {
                clickedItem.classList.add('active');
            }

            contentContainer.classList.remove('fade-out');
 
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }, 300);
    }

    navItems.forEach(item => {
        item.addEventListener('click', (event) => {
            event.preventDefault(); 

            const contentKey = item.getAttribute('data-content') || 'default';
            
            switchWikiContent(contentKey, item);
        });
    });

    const defaultActiveItem = document.querySelector('.sidebar-nav .nav-item.active');
    if (defaultActiveItem) {
        defaultActiveItem.setAttribute('data-content', 'default');
    }

    const faqItem = document.getElementById('id-faq');
    if (faqItem) {
        faqItem.setAttribute('data-content', 'faq');
    }
});