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

function displayShareMessage() {
    document.getElementById("quiz").style.display = "none"; // Скрыть вопросы
    document.getElementById("result").classList.remove("hidden"); // Показать блок результата
    document.getElementById("share-message").classList.remove("hidden"); // Показать сообщение
}

function shareAndRevealResult() {
    // Открыть WhatsApp с сообщением
    shareOnWhatsApp();

    // Через 20 секунд скрыть блок с сообщением и показать результат
    setTimeout(() => {
        document.getElementById("share-message").classList.add("hidden"); // Скрыть сообщение "Поделиться"
        
        // Добавить текст результата в блок и показать его
        const finalResultText = document.getElementById("final-result-text");
        finalResultText.textContent =
            score >= 12
                ? "Вы — энергичный, целеустремленный человек, который с энтузиазмом подходит к жизни. Вас привлекают перемены и новые вызовы, вы всегда готовы действовать и решать проблемы. Любите активный отдых, цените движение вперед. Такие люди, как вы, вдохновляют окружающих и заряжают их позитивом. Совет: Старайтесь сохранять баланс, не перегружайте себя. Иногда полезно притормозить и позволить себе расслабиться."
                : score >= 6
                ? "Вы — уравновешенный и размеренный человек. Предпочитаете стабильность и комфорт, избегаете лишнего стресса. Проблемы вы решаете обдуманно, стараясь не торопиться. В свободное время вы любите спокойные занятия, такие как просмотр фильмов или чтение. Совет: Не бойтесь выходить из зоны комфорта и пробовать что-то новое. Это может привнести в вашу жизнь больше ярких эмоций."
                : "Вы склонны эмоционально реагировать на события и чувствовать напряжение в трудных ситуациях. Вам сложно адаптироваться к переменам, и порой это вызывает усталость и тревогу. Вы предпочитаете уединение или спокойную обстановку, чтобы восстановить силы. Совет: Учитесь справляться со стрессом с помощью практик релаксации или дыхательных техник. Регулярный отдых и забота о себе помогут вам чувствовать себя лучше.";
        finalResultText.classList.remove("hidden"); // Показать текст результата
    }, 20000); // Задержка в 20 секунд
}

function shareOnWhatsApp() {
    const message = "Пройди этот тест и узнай какой ты человек! https://example.com";
    const url = `https://wa.me/?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
}



// Показ первого вопроса
showQuestion();
