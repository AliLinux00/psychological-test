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
        const buttons = document.querySelectorAll(".answer-btn");
        buttons.forEach((btn, index) => {
            btn.textContent = answers[currentQuestion][index].text;
            btn.onclick = () => answer(answers[currentQuestion][index].points);
        });
    } else {
        // Показать результат
        showResult();
    }
}

function answer(points) {
    score += points;
    currentQuestion++;
    if (currentQuestion === 7) {
        displayShareMessage(); // Показать сообщение на 7 вопросе
    } else {
        showQuestion(); // Переход к следующему вопросу
    }
}

function showResult() {
    document.getElementById("quiz").style.display = "none"; // Скрыть вопросы
    document.getElementById("finalResultText").classList.remove("visible"); // Показать результат

    const finalResultText = document.getElementById("final-result-text");
    finalResultText.textContent =
        score >= 12
            ? "Вы — активная личность. Полны энергии и идей!"
            : score >= 6
            ? "Вы — уравновешенная личность. Находите гармонию в жизни."
            : "Вы — стрессовая личность. Склонны к тревожности, берегите себя.";
}

function displayShareMessage() {
    document.getElementById("quiz").style.display = "none"; // Скрыть вопросы
    document.getElementById("share-message").classList.remove("hidden"); // Показать сообщение
}

// Функция для WhatsApp
function shareOnWhatsApp() {
    const message = "Пройди этот тест и у знай какой ты человек! https://example.com";
    const url = `https://wa.me/?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
}


// Показ первого вопроса
showQuestion();
