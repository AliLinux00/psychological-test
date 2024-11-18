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

// Функция для отображения вопроса
function showQuestion() {
    if (currentQuestion < questions.length) {
        document.getElementById("question").textContent = questions[currentQuestion];
        const buttons = document.querySelectorAll(".answers button");
        buttons.forEach((btn, index) => {
            btn.textContent = answers[currentQuestion][index].text;
            btn.onclick = () => selectAnswer(answers[currentQuestion][index].points);
        });
    }
}

// Обработка ответа
function selectAnswer(points) {
    score += points;
    currentQuestion++;

    // Если это 7-й вопрос, показываем сообщение и кнопку для WhatsApp
    if (currentQuestion === 7) {
        document.getElementById("share-message").classList.remove("hidden");
    }

    showQuestion();
}

// Функция для отправки сообщения через WhatsApp
function shareOnWhatsApp() {
    const messageText = "Пройди интересный психологический тест!";
    const whatsappURL = `https://wa.me/?text=${encodeURIComponent(messageText)}`;
    window.open(whatsappURL, "_blank");
}

// Функция для отображения финального результата
function displayFinalResult() {
    const finalResult = document.getElementById("final-result");
    const finalText = score >= 12 ? "Вы активная личность!" : "Вы спокойная личность!";
    document.getElementById("final-result-text").textContent = finalText;
    finalResult.classList.remove("hidden");
}

// Начало теста
window.onload = function() {
    showQuestion();
};
