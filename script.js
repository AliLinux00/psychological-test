const questions = [
    "Какой ваш любимый цвет?",
    "Что вы предпочитаете делать в свободное время?",
    "Какая ваша главная черта характера?",
    "Как вы реагируете на стрессовые ситуации?",
    "Что вас больше всего мотивирует?",
    "Какая ваша любимая еда?",
    "Что вы цените в людях больше всего?"
];

let currentQuestion = 0;

function loadQuestion() {
    const questionElement = document.getElementById("question");
    questionElement.textContent = questions[currentQuestion];
}

function answer(choice) {
    currentQuestion++;
    if (currentQuestion < questions.length) {
        loadQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    document.getElementById("test").style.display = "none";
    document.getElementById("result").style.display = "block";
}

function share() {
    const url = "https://alilinux00.github.io/psychological-test/";
    const message = Пройди этот интересный тест и узнай свой результат! ${url};
    window.open(https://wa.me/?text=${encodeURIComponent(message)});
}

loadQuestion();
