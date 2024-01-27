document.addEventListener("DOMContentLoaded", function() {
    const questions = [
        {
            question: "What is one way you can practice financial wellness?",
            optionA: "by spending all your money on toys",
            optionB: "by saving some of your money in a piggy bank",
            correctOption: "B"
        },
        // Add more questions as needed
    ];
    let correctAnswers = 0;
    let incorrectAnswers = 0;
    let currentQuestionIndex = 0;

    function updateQuestion() {
        const currentQuestion = questions[currentQuestionIndex];
        document.getElementById("pic1").textContent = currentQuestion.question;
        document.getElementById("option1").textContent = currentQuestion.optionA;
        document.getElementById("option2").textContent = currentQuestion.optionB;
    }

    function checkAnswer(selectedOption) {
        const currentQuestion = questions[currentQuestionIndex];

        if (selectedOption === currentQuestion.correctOption) {
            console.log("Correct answer!");
            correctAnswers++;
            //move the piggy forward
            moveForward();
        } else {
            console.log("Incorrect answer!");
            incorrectAnswers++;
            //do not move forward
        }

        currentQuestionIndex++;

        if (currentQuestionIndex < questions.length) {
            updateQuestion();
        } else {
            if (incorrectAnswers > 0) {
                console.log("Repeating incorrect questions...");
                repeatIncorrectQuestions();
            } else {
                console.log("All questions answered!");
            }
        }
    }

    function moveForward()
    {
        var pig = document.getElementById('piggy');
        var position = parseInt(pig.style.left) || 0;

        var newPos = position + 10;
        pig.style.left = newPos + 'px';
    }

    function repeatIncorrectQuestions() {
        currentQuestionIndex = 0;
        
        // Update the question
        updateQuestion();
    }

    // Initial question setup
    updateQuestion();

    // Add event listeners to buttons
    document.getElementById("option1").addEventListener("click", function() {
        checkAnswer("A"); // Assuming "A" is the correct option for the first button
    });

    document.getElementById("option2").addEventListener("click", function() {
        checkAnswer("B"); // Assuming "B" is the correct option for the second button
    });
});
