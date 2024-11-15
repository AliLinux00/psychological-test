document.addEventListener("DOMContentLoaded", function() {
    let currentQuestion = 1;

    // Показываем первый вопрос
    document.getElementById(question${currentQuestion}).style.display = 'block';

    // Обработчик для кнопок ответов
    const buttons = document.querySelectorAll('.answer');
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            // Получаем id следующего вопроса
            const nextQuestion = this.getAttribute('data-next');
            
            // Скрываем текущий вопрос
            document.getElementById(question${currentQuestion}).style.display = 'none';
            
            // Если есть следующий вопрос, показываем его
            if (nextQuestion !== 'result') {
                currentQuestion++;
                document.getElementById(nextQuestion).style.display = 'block';
            } else {
                // Показываем результат
                document.getElementById('result').style.display = 'block';
            }
        });
    });
});
