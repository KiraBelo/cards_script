console.log('Welcome');
const cards = ['[img]https://i.imgur.com/7ADw0ud.jpg[/img]',
'[url=https://i.imgur.com/RNTzsAh.jpeg][img]https://i.imgur.com/RNTzsAhl.jpeg[/img][/url]',
'[url=https://i.imgur.com/wl7agbj.jpeg][img]https://i.imgur.com/wl7agbjl.jpeg[/img][/url]',
'[url=https://i.imgur.com/of74j5N.jpeg][img]https://i.imgur.com/of74j5Nl.jpeg[/img][/url]',
'[url=https://i.imgur.com/LnEEw19.jpeg][img]https://i.imgur.com/LnEEw19l.jpeg[/img][/url]',
'[url=https://i.imgur.com/wG1QQLo.jpeg][img]https://i.imgur.com/wG1QQLol.jpeg[/img][/url]',
'[url=https://i.imgur.com/8dPeqqT.jpeg][img]https://i.imgur.com/8dPeqqTl.jpeg[/img][/url]',
'[url=https://i.imgur.com/6ypqwt9.jpeg][img]https://i.imgur.com/6ypqwt9l.jpeg[/img][/url]',
'[url=https://i.imgur.com/0Q236CM.jpeg][img]https://i.imgur.com/0Q236CMl.jpeg[/img][/url]',
'[url=https://i.imgur.com/tyQkTXu.jpeg][img]https://i.imgur.com/tyQkTXul.jpeg[/img][/url]',
'[url=https://i.imgur.com/kckexrx.jpeg][img]https://i.imgur.com/kckexrxl.jpeg[/img][/url]',
'[url=https://i.imgur.com/voLQ85z.jpeg][img]https://i.imgur.com/voLQ85zl.jpeg[/img][/url]',
'[url=https://i.imgur.com/BqGZG8M.jpeg][img]https://i.imgur.com/BqGZG8Ml.jpeg[/img][/url]',
'[url=https://i.imgur.com/a0iXNzT.jpeg][img]https://i.imgur.com/a0iXNzTl.jpeg[/img][/url]',
'[url=https://i.imgur.com/RTa67d7.jpeg][img]https://i.imgur.com/RTa67d7l.jpeg[/img][/url]',
'[url=https://i.imgur.com/GwqGQlF.jpeg][img]https://i.imgur.com/GwqGQlFl.jpeg[/img][/url]',
'[url=https://i.imgur.com/ndC7N2I.jpeg][img]https://i.imgur.com/ndC7N2Il.jpeg[/img][/url]',
'[url=https://i.imgur.com/qne55lR.jpeg][img]https://i.imgur.com/qne55lRl.jpeg[/img][/url]',
'[url=https://i.imgur.com/JvY4OSz.jpeg][img]https://i.imgur.com/JvY4OSzl.jpeg[/img][/url]',
'[url=https://i.imgur.com/oDkpWjX.jpeg][img]https://i.imgur.com/oDkpWjXl.jpeg[/img][/url]',
'[url=https://i.imgur.com/JFGdgsb.jpeg][img]https://i.imgur.com/JFGdgsbl.jpeg[/img][/url]',
'[url=https://i.imgur.com/trx5SRZ.jpeg][img]https://i.imgur.com/trx5SRZl.jpeg[/img][/url]',
'[url=https://i.imgur.com/hVmKit6.jpeg][img]https://i.imgur.com/hVmKit6l.jpeg[/img][/url]',
'[url=https://i.imgur.com/gXiSbGU.jpeg][img]https://i.imgur.com/gXiSbGUl.jpeg[/img][/url]',
'[url=https://i.imgur.com/elTr8eP.jpeg][img]https://i.imgur.com/elTr8ePl.jpeg[/img][/url]',
'[url=https://i.imgur.com/6KAVOvw.jpeg][img]https://i.imgur.com/6KAVOvwl.jpeg[/img][/url]',
'[url=https://i.imgur.com/QcZDBqw.jpeg][img]https://i.imgur.com/QcZDBqwl.jpeg[/img][/url]',
'[url=https://i.imgur.com/6IlwDRs.jpeg][img]https://i.imgur.com/6IlwDRsl.jpeg[/img][/url]',
'[url=https://i.imgur.com/cSMQU32.jpeg][img]https://i.imgur.com/cSMQU32l.jpeg[/img][/url]',
'[url=https://i.imgur.com/FazYdTH.jpeg][img]https://i.imgur.com/FazYdTHl.jpeg[/img][/url]',
'[url=https://i.imgur.com/VkujYWO.jpeg][img]https://i.imgur.com/VkujYWOl.jpeg[/img][/url]',
'[url=https://i.imgur.com/UsA6Fay.jpeg][img]https://i.imgur.com/UsA6Fayl.jpeg[/img][/url]',
'[url=https://i.imgur.com/YJk3J0f.jpeg][img]https://i.imgur.com/YJk3J0fl.jpeg[/img][/url]',
'[url=https://i.imgur.com/V3IzQAt.jpeg][img]https://i.imgur.com/V3IzQAtl.jpeg[/img][/url]',
'[url=https://i.imgur.com/g89hVPk.jpeg][img]https://i.imgur.com/g89hVPkl.jpeg[/img][/url]',
'[url=https://i.imgur.com/XdNsAzi.jpeg][img]https://i.imgur.com/XdNsAzil.jpeg[/img][/url]',
'[url=https://i.imgur.com/C21gYNT.jpeg][img]https://i.imgur.com/C21gYNTl.jpeg[/img][/url]',
'[url=https://i.imgur.com/wTww2iz.jpeg][img]https://i.imgur.com/wTww2izl.jpeg[/img][/url]',
'[url=https://i.imgur.com/8DzAYp8.jpeg][img]https://i.imgur.com/8DzAYp8l.jpeg[/img][/url]',
'[url=https://i.imgur.com/6PuMNet.jpeg][img]https://i.imgur.com/6PuMNetl.jpeg[/img][/url]',
'[url=https://i.imgur.com/HkQpFdb.jpeg][img]https://i.imgur.com/HkQpFdbl.jpeg[/img][/url]',
'[url=https://i.imgur.com/lrAzWWu.jpeg][img]https://i.imgur.com/lrAzWWul.jpeg[/img][/url]',
'[url=https://i.imgur.com/6eKxUHT.jpeg][img]https://i.imgur.com/6eKxUHTl.jpeg[/img][/url]',
'[url=https://i.imgur.com/y7zPmfh.jpeg][img]https://i.imgur.com/y7zPmfhl.jpeg[/img][/url]',
'[url=https://i.imgur.com/ixtUrnK.jpeg][img]https://i.imgur.com/ixtUrnKl.jpeg[/img][/url]',
'[url=https://i.imgur.com/ONwONSX.jpeg][img]https://i.imgur.com/ONwONSXl.jpeg[/img][/url]',
'[url=https://i.imgur.com/Elm3geZ.jpeg][img]https://i.imgur.com/Elm3geZl.jpeg[/img][/url]',
'[url=https://i.imgur.com/P8P4SDB.jpeg][img]https://i.imgur.com/P8P4SDBl.jpeg[/img][/url]',
'[url=https://i.imgur.com/geZSqGk.jpeg][img]https://i.imgur.com/geZSqGkl.jpeg[/img][/url]',
'[img]https://i.imgur.com/O3n6YWr.jpeg[/img]',
'[img]https://i.imgur.com/BCK8v69.jpeg[/img]',
'[img]https://i.imgur.com/MoIHSMx.jpeg[/img]',
'[img]https://i.imgur.com/f0bNPpe.jpeg[/img]',
'[img]https://i.imgur.com/NW9e4Nl.jpeg[/img]',
'[img]https://i.imgur.com/HKWFDNA.jpeg[/img]',
'[img]https://i.imgur.com/cryuDZ5.jpeg[/img]',
'[img]https://i.imgur.com/5KTcWky.jpeg[/img]',
'[img]https://i.imgur.com/NpyTWXJ.jpeg[/img]',
'[img]https://i.imgur.com/ByIQl9G.jpeg[/img]',
'[img]https://i.imgur.com/NAfxaqt.jpeg[/img]',
'[img]https://i.imgur.com/ZjnZJMs.jpeg[/img]',
'[img]https://i.imgur.com/Z1WGBWv.jpeg[/img]',
'[img]https://i.imgur.com/TGkPjfz.jpeg[/img]',
'[img]https://i.imgur.com/QagXai2.jpeg[/img]',
'[img]https://i.imgur.com/8ZHgSJB.jpeg[/img]',
'[img]https://i.imgur.com/lH4Zf4k.jpeg[/img]',
'[img]https://i.imgur.com/Tt0CdTR.jpeg[/img]',
]


const fortuneForm = document.querySelector('#fortuneForm');
const fortuneButton = document.querySelector('#fortuneButton');
const questionTextarea = document.querySelector('#question');

// Обработчик отправки формы
fortuneForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const text = questionTextarea.value.trim();
    if (text === '' || text === '...') {
        questionTextarea.value = '...';
        questionTextarea.placeholder = 'Оставь вопрос на стене, путник!';
        questionTextarea.classList.add('error');
        setTimeout(() => questionTextarea.classList.remove('error'), 1000);
        return;
    }

    // Блокируем кнопку и очищаем поле
    fortuneButton.disabled = true;
    questionTextarea.readOnly = true;
    questionTextarea.value = '';

    // Генерируем ответ
    const random = Math.floor(Math.random() * cards.length);
    const card = cards[random];
    const answer = `[align=center][size=18]${text}[/size][/align]\n${card}`;

    // Анимация "печатной машинки"
    let i = 0;
    const typeAnswer = () => {
        if (i < answer.length) {
            questionTextarea.value += answer[i];
            i++;
            setTimeout(typeAnswer, 50);
        } else {
            questionTextarea.readOnly = true;
            fortuneButton.disabled = false;
            fortuneButton.textContent = 'Копировать';
        }
    };
    typeAnswer();

    // Воспроизведение звука
    const sound = new Audio('https://freesound.org/data/previews/387/387232_5121236-lq.mp3');
    sound.play().catch(() => console.log('Sound blocked by browser'));
});

// Копирование и сброс формы
fortuneButton.addEventListener('click', (e) => {
    if (fortuneButton.textContent === 'Копировать') {
        e.preventDefault();
        questionTextarea.select();
        document.execCommand('copy');

        // Показываем уведомление
        const feedback = document.createElement('div');
        feedback.textContent = 'Ответ скопирован!';
        feedback.style.cssText = `
            position: absolute;
            top: 10px;
            right: 10px;
            color: #d4a373;
            font-family: 'Amatic SC', cursive;
            font-size: 1.2em;
            text-shadow: 0 0 5px #8b4513;
            opacity: 0;
            transition: opacity 0.5s;
        `;
        fortuneForm.appendChild(feedback);
        setTimeout(() => {
            feedback.style.opacity = '1';
            setTimeout(() => {
                feedback.style.opacity = '0';
                setTimeout(() => feedback.remove(), 500);
            }, 1000);
        }, 100);

        // Сбрасываем форму
        questionTextarea.value = '';
        questionTextarea.readOnly = false;
        fortuneButton.textContent = 'Получить ответ';
        questionTextarea.placeholder = 'Напиши на стене вопрос';
    }
});

// Удаление класса ошибки при вводе
questionTextarea.addEventListener('input', () => {
    questionTextarea.classList.remove('error');
});
