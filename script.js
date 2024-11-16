// Вопросы и ответы
const questions = [
    {
        text: "Как вы начинаете утро?",
        answers: [
            { text: "С радостью и энергией", points: 2 },
            { text: "Спокойно, без лишней суеты", points: 1 },
            { text: "С трудом и раздражением", points: 0 }
        ]
    },
    {
        text: "Как вы относитесь к неожиданным событиям?",
        answers: [
            { text: "С интересом и готовностью", points: 2 },
            { text: "Спокойно, но с осторожностью", points: 1 },
            { text: "С тревогой и страхом", points: 0 }
        ]
    },
    {
        text: "Насколько часто вы чувствуете радость?",
        answers: [
            { text: "Каждый день", points: 2 },
            { text: "Иногда", points: 1 },
            { text: "Редко", points: 0 }
        ]
    },
    {
        text: "Как вы реагируете на критику?",
        answers: [
            { text: "Конструктивно", points: 2 },
            { text: "Смиренно", points: 1 },
            { text: "С обидой", points: 0 }
        ]
    },
    {
        text: "Насколько вы уверены в себе?",
        answers: [
            { text: "Полностью уверен", points: 2 },
            { text: "Иногда сомневаюсь", points: 1 },
            { text: "Часто сомневаюсь", points: 0 }
        ]
    }
];

let currentQuestion = 0;
let score = 0;

// Функция для обработки ответа
function answer(points) {
    score += points; // Добавляем очки
    currentQuestion++; // Переходим к следующему вопросу

    if (currentQuestion < questions.length) {
        showQuestion(); // Показываем следующий вопрос
    } else {
        showResult(); // Показываем результат
    }
}

// Функция для отображения вопроса
function showQuestion() {
    const questionElement = document.getElementById("question");
    const answersElement = document.querySelector(".answers");

    // Обновляем текст вопроса
    questionElement.innerText = questions[currentQuestion].text;

    // Обновляем ответы
    answersElement.innerHTML = ""; // Очищаем предыдущие кнопки
    questions[currentQuestion].answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerText = answer.text;
        button.onclick = () => answer(answer.points);
        answersElement.appendChild(button);
    });
}

// Функция для отображения результата
function showResult() {
    document.getElementById("quiz").style.display = "none";

    let resultText = "";
    if (score >= 8) {
        resultText = "Вы очень позитивный человек! Сохраняйте этот настрой.";
    } else if (score >= 4) {
        resultText = "У вас сбалансированный подход к жизни, но иногда можно добавить больше позитива.";
    } else {
        resultText = "Вы склонны к депрессивным настроениям. Попробуйте сосредотачиваться на радостных моментах.";
    }

    document.getElementById("result").innerText = resultText;
}

// Показываем первый вопрос при загрузке страницы
showQuestion();
