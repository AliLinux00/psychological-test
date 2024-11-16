// Вопросы для теста
const questions = [
    { question: "Какой ваш любимый цвет?", answers: ["Красный", "Синий", "Зеленый"] },
    { question: "Что вам нравится больше всего?", answers: ["Книги", "Фильмы", "Спорт"] },
    { question: "Как вы предпочитаете отдыхать?", answers: ["Дома", "На природе", "С друзьями"] },
    { question: "Что вам ближе?", answers: ["Тишина", "Шум", "Равновесие"] },
    { question: "Как вы реагируете на стресс?", answers: ["Спокойно", "Эмоционально", "Игнорирую"] },
    { question: "Как вы общаетесь?", answers: ["Много говорю", "Слушаю", "Баланс"] },
    { question: "Как вы воспринимаете новое?", answers: ["С интересом", "С опасением", "С безразличием"] }
];

let currentQuestionIndex = 0;
const userAnswers = [];

// Элементы
const quizDiv = document.getElementById('quiz');
const resultDiv = document.getElementById('result');

// Показываем вопрос
function showQuestion() {
    const question = questions[currentQuestionIndex];
    quizDiv.innerHTML = `
        <div class="question">${question.question}</div>
        ${question.answers.map((answer, index) => 
            <button onclick="handleAnswer(${index})">${answer}</button>
        ).join('')}
    `;
}

// Обработка ответа
function handleAnswer(answerIndex) {
    userAnswers.push(answerIndex);
    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showResult();
    }
}

// Показ результата
function showResult() {
    quizDiv.style.display = 'none';
    resultDiv.style.display = 'block';
    resultDiv.innerHTML = `
        Отправь 10 друзьям, чтобы узнать результат!
        <br><br>
        <a href="https://wa.me/?text=Я%20только%20что%20прошел%20психологический%20тест!%20Пройди%20и%20ты:%20https://alilinux00.github.io/psychological-test/" target="_blank">
            <button>Поделиться в WhatsApp</button>
        </a>
    `;
}

// Инициализация
showQuestion();
