document.getElementById('quiz-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    let score = 0;

    // Подсчёт баллов по вопросам
    for (let i = 1; i <= 4; i++) {
        const answer = document.querySelector(input[name="q${i}"]:checked);
        if (answer) {
            score += (answer.value === 'a' ? 3 : (answer.value === 'b' ? 2 : 1));
        }
    }

    // Показываем результат теста
    let resultText = '';
    if (score >= 10) {
        resultText = 'Вы лидер и активная личность!';
    } else if (score >= 7) {
        resultText = 'Вы уравновешенный человек, находящийся в поисках гармонии.';
    } else {
        resultText = 'Вы склонны к размышлениям и ищете свое место в мире.';
    }

    document.getElementById('result-text').textContent = resultText;
    document.querySelector('.container').style.display = 'none';
    document.getElementById('result').style.display = 'block';
});

function showAds() {
    // Здесь может быть интеграция с рекламной платформой
    alert('Пожалуйста, подождите, идет загрузка рекламы...');
    // После рекламы показываем результат
    alert('Реклама завершена! Ваш результат: ' + document.getElementById('result-text').textContent);
}