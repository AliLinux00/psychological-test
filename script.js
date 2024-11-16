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
            btn.textContent = answers[index][0];
            btn.onclick = () => answer(answers[index][1]);
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
    const messageText = "Пройди интересный психологический тест! https://example.com"; // Ссылка на тест
    const whatsappURL = https://wa.me/?text=${encodeURIComponent(messageText)};

    // Открыть WhatsApp для отправки сообщения
    window.open(whatsappURL, "_blank");

    // Начать таймер на 50 секунд
    setTimeout(() => {
        const message = document.getElementById("message");
        const showAnswerBtn = document.getElementById("show-answer-btn");

        message.classList.add("hidden"); // Скрыть сообщение
        showAnswerBtn.classList.remove("hidden"); // Показать кнопку "Узнать ответы"
    }, 50000);
}

function displayFinalResult() {
    const finalResult = document.getElementById("final-result");
    const showAnswerBtn = document.getElementById("show-answer-btn");

    let finalText = score >= 12
        ? "Вы очень позитивный человек! Продолжайте радоваться жизни!"
        : score >= 6
        ? "Вы спокойный и уравновешенный, но иногда вам стоит быть более активным."
        : "Вы чувствуете усталость и стресс. Подумайте о том, чтобы больше отдыхать и искать радость в мелочах.";

    // Показать финальный результат
    document.getElementById("final-result-text").textContent = finalText;

    // Скрыть кнопку
    showAnswerBtn.classList.add("hidden");

    // Показать результат
    finalResult.classList.remove("hidden");
}

// Показ первого вопроса
showQuestion();
