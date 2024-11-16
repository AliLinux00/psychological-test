const questions = [
    "Как вы начинаете утро?",
    "Как вы справляетесь со стрессом?",
    "Как вы проводите свободное время?",
    "Как вы реагируете на критику?",
    "Как часто вы чувствуете усталость?",
    "Как вы относитесь к новым задачам?",
    "Как вы оцениваете свои отношения с близкими?"
];

const answers = [
    // Вопрос 1
    [
        ["С радостью и энергией", 2],
        ["Спокойно, без лишней суеты", 1],
        ["С трудом и раздражением", 0]
    ],
    // Вопрос 2
    [
        ["Я быстро нахожу решение", 2],
        ["Медленно, но уверенно", 1],
        ["Не справляюсь с ним", 0]
    ],
    // Вопрос 3
    [
        ["С друзьями или семьей", 2],
        ["Я предпочитаю уединение", 1],
        ["Я занимаюсь активной деятельностью", 0]
    ],
    // Вопрос 4
    [
        ["Я воспринимаю критику спокойно", 2],
        ["Меня это немного расстраивает", 1],
        ["Я сильно обижаюсь", 0]
    ],
    // Вопрос 5
    [
        ["Очень редко", 2],
        ["Иногда", 1],
        ["Часто", 0]
    ],
    // Вопрос 6
    [
        ["С охотой и энтузиазмом", 2],
        ["Я подхожу к ним с осторожностью", 1],
        ["Я избегаю новых задач", 0]
    ],
    // Вопрос 7
    [
        ["Очень хорошо", 2],
        ["Средне", 1],
        ["Плохо", 0]
    ]
];

let currentQuestion = 0;
let score = 0;

function showQuestion() {
    if (currentQuestion < questions.length) {
        document.getElementById("question").textContent = questions[currentQuestion];
        const buttons = document.querySelectorAll(".answers button");
        buttons.forEach((btn, index) => {
            btn.textContent = answers[currentQuestion][index][0];
            btn.onclick = () => answer(answers[currentQuestion][index][1]);
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
    const whatsappURL = `https://wa.me/?text=${encodeURIComponent(messageText)}`;

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
