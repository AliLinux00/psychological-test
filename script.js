let currentQuestion = 1; // Начинаем с первого вопроса
let totalQuestions = 7;  // Всего 7 вопросов

// Функция для перехода к следующему вопросу
function nextQuestion(answer) {
    // Скрываем текущий вопрос
    const currentQuestionDiv = document.querySelector(#question-container .question:nth-child(${currentQuestion}));
    currentQuestionDiv.style.display = 'none';

    // Увеличиваем номер вопроса
    currentQuestion++;

    // Если все вопросы пройдены, показываем результат
    if (currentQuestion > totalQuestions) {
        showResult();
    } else {
        // Показываем следующий вопрос
        const nextQuestionDiv = document.querySelector(#question-container .question:nth-child(${currentQuestion}));
        nextQuestionDiv.style.display = 'block';
    }
}

// Функция для показа результата
function showResult() {
    // Скрываем все вопросы
    document.getElementById('question-container').style.display = 'none';

    // Показываем результат
    document.getElementById('result-container').style.display = 'block';
}

// Функция для кнопки "Поделиться"
function shareResult() {
    const text = "Я прошел психологический тест! Пройди тоже, чтобы узнать результат!";
    const url = window.location.href;
    const whatsappUrl = https://wa.me/?text=${encodeURIComponent(text + " " + url)};
    window.open(whatsappUrl, "_blank");
}

// Инициализируем первый вопрос
document.querySelector(#question-container .question:nth-child(${currentQuestion})).style.display = 'block';
