const questions = [
    {
        question: "What is one way you can practice financial wellness?",
        optionA: "by spending all your money on toys",
        optionB: "by saving some of your money in a piggy bank",
        correctOption:"B"
    },
    // Add more questions as needed
];
let correctAnswers = 0;
let incorrectAnswers = 0;
let currentQuestion = 0;

function updateQuestion() {
    const currentQuestion = questions[currentQuestion];
    document.getElementById("pic1").textContent = currentQuestion.question;
    document.getElementById("option1").textContent = currentQuestion.optionA;
    document.getElementById("option2").textContent = currentQuestion.optionB;
}

function checkAnswer(selectedOption) {
    const currentQuestion = questions[currentQuestion];

    if (selectedOption === currentQuestion.correctOption) {
        console.log("Correct answer!");
        correctAnswers++;
    } else {
        console.log("Incorrect answer!");
        incorrectAnswers++;
    }

    currentQuestion++;

    if (currentQuestion < questions.length) {
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

function repeatIncorrectQuestions() {
    newQuestion = 0;
    
    // Update the question
    updateQuestion();
}

// Initial question setup
updateQuestion();
