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
    ["С радостью и энергией", 2],
    ["Спокойно, без лишней суеты", 1],
    ["С трудом и раздражением", 0]
];

let currentQuestion = 0;
let score = 0;

function showQuestion() {
    if (currentQuestion < questions.length) {
        document.getElementById("question").textContent = questions[currentQuestion];
        const buttons = document.querySelectorAll(".answers button");
        buttons.forEach((btn, index) => {
            btn.textContent = answers[index][0];
            btn.onclick = () => answer(answers[index][1]);
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
    quiz.style.display = "none";
    result.classList.remove("hidden");

    if (score > 10) {
        result.textContent = "Вы очень позитивный человек! Поддерживайте это настроение!";
    } else if (score > 5) {
        result.textContent = "Вы уравновешенный человек. Найдите время для отдыха и наслаждения!";
    } else {
        result.textContent = "У вас могут быть сложности, но помните, что всегда есть выход!";
    }
}

// Показ первого вопроса
showQuestion();
