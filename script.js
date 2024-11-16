let score = 0; // Счётчик баллов
let currentQuestion = 0; // Индекс текущего вопроса

// Список вопросов и ответов
const questions = [
    {
        question: "Как вы начинаете утро?",
        answers: [
            { text: "С радостью и энергией", points: 2 },
            { text: "Спокойно, без лишней суеты", points: 1 },
            { text: "С трудом и раздражением", points: 0 },
        ],
    },
    {
        question: "Как вы реагируете на проблемы?",
        answers: [
            { text: "Ищу решение", points: 2 },
            { text: "Стараюсь не думать", points: 1 },
            { text: "Паника и стресс", points: 0 },
        ],
    },
    {
        question: "Что вы делаете в свободное время?",
        answers: [
            { text: "Занимаюсь любимым делом", points: 2 },
            { text: "Смотрю сериалы", points: 1 },
            { text: "Ничего не хочется", points: 0 },
        ],
    },
];

// Обработчик ответа
function answer(points) {
    score += points; // Добавляем баллы за ответ
    currentQuestion++; // Переходим к следующему вопросу

    if (currentQuestion < questions.length) {
        // Обновляем вопрос и ответы
        const questionElement = document.getElementById("question");
        const answersElement = document.querySelector(".answers");

        questionElement.textContent = questions[currentQuestion].question;
        answersElement.innerHTML = ""; // Очищаем старые кнопки

        // Добавляем новые кнопки
        questions[currentQuestion].answers.forEach((answer) => {
            const button = document.createElement("button");
            button.textContent = answer.text;
            button.onclick = () => answer(answer.points);
            answersElement.appendChild(button);
        });
    } else {
        // Показываем результат
        showResult();
    }
}

// Функция показа результата
function showResult() {
    const quizElement = document.getElementById("quiz");
    const resultElement = document.getElementById("result");

    quizElement.style.display = "none"; // Скрываем тест

    let resultText = "";
    if (score >= 5) {
        resultText = "Вы очень позитивный человек! Продолжайте в том же духе!";
    } else if (score >= 3) {
        resultText = "Вы стараетесь сохранять баланс, но иногда вам нужна перезагрузка.";
    } else {
        resultText = "Вы часто испытываете стресс. Попробуйте найти что-то, что приносит радость!";
    }

    resultElement.innerHTML = `
        <h2>Ваш результат:</h2>
        <p>${resultText}</p>
    `;
}
