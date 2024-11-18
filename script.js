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

    quiz.style.display = "none";  // Скрыть блок вопросов
    result.classList.remove("hidden");  // Показать блок результата
}

function shareOnWhatsApp() {
    const messageText = "Пройди интересный психологический тест, и узнай какой ты человек! https://example.com";
    const whatsappURL = `https://wa.me/?text=${encodeURIComponent(messageText)}`;
    window.open(whatsappURL, "_blank");

    // Показать кнопку "Узнать результат" через 20 секунд
    setTimeout(() => {
        const showAnswerBtn = document.getElementById("show-answer-btn");
        if (showAnswerBtn.classList.contains("hidden")) {
            showAnswerBtn.classList.remove("hidden");
        }
    }, 20000);
}

function displayFinalResult() {
    const finalResult = document.getElementById("final-result");
    const telegramButton = document.getElementById("telegram-button");

    if (finalResult.classList.contains("hidden")) {
        const finalText =
            score >= 12
                ? "Вы — активная личность. Вы полны энергии, всегда стремитесь к действию..."
                : score >= 6
                ? "Вы — уравновешенная личность. Вам присуща внутренняя гармония..."
                : "Вы — стрессовая личность. Вы склонны переживать и тревожиться...";

        document.getElementById("final-result-text").textContent = finalText;
        finalResult.classList.remove("hidden");
        telegramButton.classList.remove("hidden");
        document.getElementById("show-answer-btn").classList.add("hidden");
    }
}

window.onload = function () {
    const hiddenElements = [
        document.getElementById("result"),
        document.getElementById("show-answer-btn"),
        document.getElementById("final-result"),
        document.getElementById("telegram-button"),
    ];

    hiddenElements.forEach((el) => {
        if (el) {
            el.classList.add("hidden");
        }
    });
};

// Функция для отображения сообщения в конце теста
function displayShareMessage() {
    // Скрыть все элементы, которые не должны отображаться в процессе теста
    document.getElementById('share-message').classList.remove('hidden');
    document.getElementById('show-answer-btn').classList.remove('hidden');
}

// Пример завершения теста
function endQuiz() {
    displayShareMessage();
}

document.getElementById('show-answer-btn').addEventListener('click', endQuiz);

// Показ первого вопроса
showQuestion();
