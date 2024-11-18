<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Психологический тест</title>
    <style>
        .hidden {
            display: none;
        }
    </style>
</head>
<body>
    <h1>Психологический тест</h1>
    
    <!-- Блок с вопросами -->
    <div id="quiz">
        <div id="question">Как вы начинаете утро?</div>
        <div class="answers">
            <button onclick="selectAnswer(1)">Ответ 1</button>
            <button onclick="selectAnswer(2)">Ответ 2</button>
            <button onclick="selectAnswer(3)">Ответ 3</button>
        </div>
    </div>

    <!-- Результат -->
    <div id="result" class="hidden">
        <p id="result-text">Чтобы узнать ответ, отправьте 10 друзьям!</p>
        <button id="share-button" onclick="shareOnWhatsApp()">Поделиться в WhatsApp</button>
        <button id="show-answer-btn" class="hidden" onclick="displayFinalResult()">Узнать результат</button>
    </div>

    <div id="final-result" class="hidden">
        <p id="final-result-text"></p>
    </div>

    <div id="special-message-btn" class="hidden">
        <p>Спасибо за участие в тесте!</p>
        <button onclick="endTest()">Завершить тест</button>
    </div>

    <script>
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

        // Функция, чтобы показать вопрос
        function showQuestion() {
            if (currentQuestion < questions.length) {
                document.getElementById("question").textContent = questions[currentQuestion];
                const buttons = document.querySelectorAll(".answers button");
                buttons.forEach((btn, index) => {
                    btn.textContent = answers[currentQuestion][index].text;
                    btn.onclick = () => selectAnswer(answers[currentQuestion][index].points);
                });
            }
        }

        // Функция обработки выбора ответа
        function selectAnswer(points) {
            score += points;
            currentQuestion++;

            // Проверяем, был ли выбран ответ на 7-й вопрос
            if (currentQuestion === 7) {
                document.getElementById("special-message-btn").classList.remove("hidden");
            }

            showQuestion();
        }

        // Функция показа результата
        function showResult() {
            const quiz = document.getElementById("quiz");
            const result = document.getElementById("result");

            quiz.style.display = "none";
            result.classList.remove("hidden");
        }

        // Функция для отправки сообщения через WhatsApp
        function shareOnWhatsApp() {
            const messageText = "Пройди интересный психологический тест!";
            const whatsappURL = `https://wa.me/?text=${encodeURIComponent(messageText)}`;
            window.open(whatsappURL, "_blank");

            setTimeout(() => {
                document.getElementById("show-answer-btn").classList.remove("hidden");
            }, 2000);
        }

        // Функция для отображения финального результата
        function displayFinalResult() {
            const finalResult = document.getElementById("final-result");
            const finalText = score >= 12 ? "Вы активная личность!" : "Вы спокойная личность!";
            document.getElementById("final-result-text").textContent = finalText;
            finalResult.classList.remove("hidden");
        }

        // Завершение теста
        function endTest() {
            alert("Спасибо за участие в тесте!");
            // Закрыть тест или перезагрузить
            location.reload();
        }

        window.onload = function() {
            showQuestion();
        };
    </script>
</body>
</html>
