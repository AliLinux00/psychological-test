let answers = { a: 0, b: 0, c: 0 };

function answer(selected, questionNumber) {
    // Подсчитываем выбранный ответ
    answers[selected]++;

    // Прячем текущий вопрос и показываем следующий
    document.getElementById("question" + questionNumber).style.display = "none";
    
    if (questionNumber < 7) {
        document.getElementById("question" + (questionNumber + 1)).style.display = "block";
    } else {
        showResult();
    }
}

function showResult() {
    let resultText = "";

    if (answers.a > answers.b && answers.a > answers.c) {
        resultText = "Ты стабильный человек, который ценит гармонию и спокойствие.";
    } else if (answers.b > answers.a && answers.b > answers.c) {
        resultText = "Ты активный и социальный человек, который часто ищет новые впечатления.";
    } else {
        resultText = "Ты склонен к одиночеству и introspection, ценишь своё время.";
    }

    document.getElementById("result").innerHTML = resultText;
    document.getElementById("retry").style.display = "block";
}

function retryTest() {
    // Сбросить все ответы и начать тест с первого вопроса
    answers = { a: 0, b: 0, c: 0 };
    document.getElementById("result").innerHTML = "";
    document.getElementById("retry").style.display = "none";

    for (let i = 1; i <= 7; i++) {
        document.getElementById("question" + i).style.display = "block";
    }
}
