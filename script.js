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
    ["С радостью и энергией", 2],
    ["Спокойно, без лишней суеты", 1],
    ["С трудом и раздражением", 0]
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
