const questions = [
    "Как вы начинаете утро?",
    "Как вы реагируете на проблемы?",
    "Что вы делаете в свободное время?",
    "Как вы относитесь к неожиданным переменам?",
    "Как вы справляетесь с конфликтами?",
    "Что вас больше радует?",
    "Как вы проводите выходные?"
];

const answers = [
    [
        { text: "С радостью и энергией", points: 2 },
        { text: "Спокойно, без лишней суеты", points: 1 },
        { text: "С трудом и раздражением", points: 0 }
    ],
    [
        { text: "Ищу решение", points: 2 },
        { text: "Стараюсь не думать", points: 1 },
        { text: "Паника и стресс", points: 0 }
    ],
    [
        { text: "Занимаюсь любимым делом", points: 2 },
        { text: "Смотрю сериалы", points: 1 },
        { text: "Ничего не хочется", points: 0 }
    ],
    [
        { text: "С энтузиазмом", points: 2 },
        { text: "С осторожностью", points: 1 },
        { text: "С сопротивлением", points: 0 }
    ],
    [
        { text: "Спокойно обсуждаю", points: 2 },
        { text: "Стараюсь избежать", points: 1 },
        { text: "Эмоционально реагирую", points: 0 }
    ],
    [
        { text: "Встречи с друзьями", points: 2 },
        { text: "Просмотр фильмов", points: 1 },
        { text: "Тишина и одиночество", points: 0 }
    ],
    [
        { text: "Активный отдых", points: 2 },
        { text: "Дела по дому", points: 1 },
        { text: "Сплю и отдыхаю", points: 0 }
    ]
];

let currentQuestion = 0;
let score = 0;

function showQuestion() {
    if (currentQuestion < questions.length) {
        document.getElementById("question").textContent = questions[currentQuestion];
        const buttons = document.querySelectorAll(".answers button");
        buttons.forEach((btn, index) => {
            btn.textContent = answers[currentQuestion][index].text;
            btn.onclick = () => answer(answers[currentQuestion][index].points);
        });
    } else {
        showResult();
    }
}

function answer(points) {
    score += points;
    currentQuestion++;
    showQuestion();
}

function showResult() {
    const quiz = document.getElementById("quiz");
    const result = document.getElementById("result");
    const message = document.getElementById("message");

    quiz.style.display = "none"; // Скрыть вопросы
    result.classList.remove("hidden"); // Показать результат с кнопкой
    message.classList.remove("hidden"); // Показать сообщение "Отправьте 10 друзьям"
}

function shareOnWhatsApp() {
    const messageText = "Пройди интересный психологический тест, и узнай какой ты человек! https://example.com";
    const whatsappURL = `https://wa.me/?text=${encodeURIComponent(messageText)}`;

    // Открыть WhatsApp для отправки сообщения
    window.open(whatsappURL, "_blank");

    // Начать таймер на 50 секунд
    const message = document.getElementById("message");
    const showAnswerBtn = document.getElementById("show-answer-btn");

    setTimeout(() => {
        if (message) {
            message.classList.add("hidden"); // Скрыть сообщение
        }
        if (showAnswerBtn) {
            showAnswerBtn.classList.remove("hidden"); // Показать кнопку "Узнать результат"
        }
    }, 20000);
}

function displayFinalResult() {
    const finalResult = document.getElementById("final-result");
    const telegramButton = document.getElementById("telegram-button");

    // Установка текста финального результата (пример, зависит от логики подсчета очков)
    const finalText =
        score >= 12
            ? "Вы — Вы — активная личность. Вы полны энергии, всегда стремитесь к действию и легко беретесь за новые проекты. Вам нравится быть в центре событий, и вы не боитесь рисковать, чтобы достичь своих целей. Вам важно двигаться вперед, и вы не терпите застоя. У вас всегда есть план, и вы быстро адаптируетесь к изменениям. Ваша энергия и энтузиазм могут вдохновить окружающих, и вы часто становитесь лидером, задающим тон всему коллективу."
            : score >= 6
            ? "Вы — уравновешенная личность. Вам присуща внутренняя гармония, и вы стараетесь сохранять спокойствие в любой ситуации. Вы принимаете обдуманные решения и не склонны к импульсивным поступкам. Ваша рассудительность и стабильность помогают вам справляться с рутинными задачами и не терять контроль в стрессовых ситуациях. Вы цените стабильность и предпочитаете избегать резких перемен, благодаря чему люди рядом с вами чувствуют себя уверенно и в безопасности."
            : "Вы — стрессовая личность. Вы склонны переживать и тревожиться, особенно в ситуациях неопределенности или давления. Часто вы чувствуете, что не можете контролировать происходящее, и это вызывает у вас беспокойство. Хотя ваша внимательность к деталям и стремление избежать ошибок — ваши сильные стороны, порой они могут приводить к излишней нервозности. Постарайтесь уделять внимание техникам расслабления и управлению стрессом, таким как дыхательные упражнения или медитация. Это поможет вам снизить уровень тревожности и принимать решения более спокойно и уверенно.";
    document.getElementById("final-result-text").textContent = finalText;

    // Показать финальный результат и кнопку Telegram
    finalResult.classList.remove("hidden");
    telegramButton.classList.remove("hidden");

    // Скрыть кнопку "Узнать результат"
    document.getElementById("show-answer-btn").classList.add("hidden");
}

// Показ первого вопроса
showQuestion();

