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
    [["С радостью и энергией", 2], ["Спокойно, без лишней суеты", 1], ["С трудом и раздражением", 0]],
    [["Через активные методы, как спорт или отдых", 2], ["Через медитацию или отдых", 1], ["Поглощаю стресс едой или сном", 0]],
    [["Встречаюсь с друзьями", 2], ["Смотрю фильмы или читаю", 1], ["Просто отдыхаю и не делаю ничего", 0]],
    [["Спокойно воспринимаю", 2], ["Задумываюсь, но не переживаю", 1], ["Расстраиваюсь и обижаюсь", 0]],
    [["Часто и сильно", 0], ["Редко, но чувствую", 1], ["Не чувствую усталости вообще", 2]],
    [["Очень положительно, люблю новые вызовы", 2], ["Спокойно принимаю и справляюсь", 1], ["Избегаю, если могу", 0]],
    [["Очень близкие отношения, доверие", 2], ["Нормальные, я не обращаю на это внимания", 1], ["Небольшие проблемы, но я с этим справляюсь", 0]]
];

let currentQuestion = 0;
let score = 0;

function showQuestion() {
    if (currentQuestion < questions.length) {
        document.getElementById("question").textContent = questions[currentQuestion];
        const buttons = document.querySelectorAll(".answers button");

        answers[currentQuestion].forEach((answer, index) => {
            buttons[index].textContent = answer[0];  // Текст ответа
            buttons[index].onclick = () => answer(answer[1]);  // Баллы за ответ
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

    quiz.style.display = "none";  // Скрыть вопросы
    result.classList.remove("hidden");  // Показать результаты
    message.classList.remove("hidden");  // Показать сообщение
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
