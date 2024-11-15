let answers = { a: 0, b: 0, c: 0 };

function answer(selected) {
    // Подсчитываем выбранный ответ
    answers[selected]++;

    // После того как ответы даны, покажем результат
    if (Object.values(answers).reduce((a, b) => a + b, 0) === 7) {
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
}
