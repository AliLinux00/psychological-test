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

function answer(points) {
    score += points;
    currentQuestion++;

    if (currentQuestion < questions.length) {
        showQuestion(); // Переход к следующему вопросу
    } else {
        // Когда вопросы закончены, скрываем блок с вопросами и показываем кнопку для отображения результата
        document.getElementById("quiz").style.display = "none"; // Скрыть блок с вопросами
        document.getElementById("result").classList.remove("hidden"); // Показать кнопку "Узнать ответы"
    }
}


function showQuestion() {
    document.getElementById("question").textContent = questions[currentQuestion];
    const answersContainer = document.querySelector(".answers");
    answersContainer.innerHTML = "";
    answers[currentQuestion].forEach(option => {
        const button = document.createElement("button");
        button.textContent = option.text;
        button.onclick = () => answer(option.points);
        answersContainer.appendChild(button);
    });
}

function showResult() {
    // Показать временное сообщение с просьбой поделиться
    document.getElementById("message").classList.remove("hidden");
    
    // Скрыть кнопку "Узнать ответы"
    document.querySelector("button").style.display = "none";
    
    // Показать кнопку для WhatsApp
    document.querySelector("button").style.display = "inline-block";

    // Устанавливаем таймер на 50 секунд
    setTimeout(function() {
        // По истечении 50 секунд показываем результат
        const resultText = score >= 12
            ? "Вы очень позитивный человек! Продолжайте радоваться жизни!"
            : score >= 6
            ? "Вы спокойный и уравновешенный, но иногда вам стоит быть более активным."
            : "Вы чувствуете усталость и стресс. Подумайте о том, чтобы больше отдыхать и искать радость в мелочах.";
        
        // Отобразить результат
        document.getElementById("final-result-text").textContent = resultText;
        document.getElementById("final-result").classList.remove("hidden"); // Показываем реальный ответ
        document.getElementById("message").classList.add("hidden"); // Скрываем временное сообщение
    }, 50000); // 50 секунд
}

function shareOnWhatsApp() {
    // Новый текст сообщения
    const message = encodeURIComponent("Этот тест помог мне узнать больше о себе! Пройди и ты: https://alilinux00.github.io/psychological-test/?q1=a&amp;q2=c&amp;q3=b&amp;q4=b&amp;q5=b&amp;q6=b&amp;q7=a");
    
    // URL для WhatsApp с новым сообщением
    const shareUrl = `https://wa.me/?text=${message}`;
    
    // Открываем WhatsApp для совместного использования
    window.open(shareUrl, '_blank');
}

showQuestion();
