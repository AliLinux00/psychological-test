// Массив вопросов и вариантов ответов
const questions = [
    {
        question: "Как вы обычно решаете проблемы?",
        answers: {
            a: "Пытаюсь найти логическое решение",
            b: "Слушаю интуицию",
            c: "Проявляю терпение и жду, когда все само решится"
        }
    },
    {
        question: "Как вы себя чувствуете в новой компании?",
        answers: {
            a: "Чувствую себя уверенно и сразу нахожу общий язык",
            b: "Быстро завожу друзей, но иногда немного стесняюсь",
            c: "Мне нужно время, чтобы привыкнуть"
        }
    },
    {
        question: "Какой ваш подход к новым начинаниям?",
        answers: {
            a: "Сразу действую, не раздумывая",
            b: "Сначала все обдумываю и планирую",
            c: "Пробую, но всегда с осторожностью"
        }
    },
    {
        question: "Как вы относитесь к риску?",
        answers: {
            a: "Обожаю рисковать",
            b: "Не боюсь риска, но делаю это обдуманно",
            c: "Я предпочитаю избегать риска"
        }
    },
    {
        question: "Как вы обычно справляетесь со стрессом?",
        answers: {
            a: "Делаю что-то активное, чтобы отвлечься",
            b: "Обычно разговариваю с близкими",
            c: "Предпочитаю оставаться наедине и подумать"
        }
    },
    {
        question: "Как вы реагируете на критику?",
        answers: {
            a: "Принимаю и стараюсь улучшиться",
            b: "Сначала обижаюсь, но потом анализирую",
            c: "Мне тяжело воспринимать критику"
        }
    },
    {
        question: "Как вы проводите свободное время?",
        answers: {
            a: "Занимаюсь активными видами спорта",
            b: "Провожу время с друзьями и семьей",
            c: "Люблю уединение и чтение"
        }
    }
];

let currentQuestionIndex = 0;
let answers = {};

// Функция для отображения текущего вопроса
function showQuestion() {
    if (currentQuestionIndex < questions.length) {
        const question = questions[currentQuestionIndex];
        document.getElementById("question-text").innerText = question.question;
        const buttons = document.querySelectorAll(".answer");
        buttons.forEach((button, index) => {
            const answerKey = ['a', 'b', 'c'][index];
            button.innerText = question.answers[answerKey];
            button.onclick = () => handleAnswer(answerKey);
        });
    } else {
        showResult();
    }
}

// Функция для обработки ответа
function handleAnswer(answerKey) {
    answers[q${currentQuestionIndex + 1}] = answerKey;
    currentQuestionIndex++;
    showQuestion();
}

// Функция для отображения результата
function showResult() {
    let resultText = '';
    let score = { a: 0, b: 0, c: 0 };

    // Подсчитываем результаты
    for (let key in answers) {
        score[answers[key]]++;
    }

    // Определяем результат по ответам
    if (score.a > score.b && score.a > score.c) {
        resultText = "Вы лидер! Вы энергичны, активны и уверены в себе.";
    } else if (score.b > score.a && score.b > score.c) {
        resultText = "Вы дипломат! Вы уравновешены и знаете, как ладить с людьми.";
    } else {
        resultText = "Вы мечтатель! Вы склонны к размышлениям и часто ищете спокойствия.";
    }

    // Показываем результат
    document.getElementById("quiz-container").style.display = 'none';
    document.getElementById("result-text").innerText = resultText;
    document.getElementById("result").style.display = 'block';
}

// Инициализируем тест
showQuestion();
