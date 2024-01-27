document.addEventListener("DOMContentLoaded", function() {
    const questions = [
        {
            descriptions: "Financial wellness means learning how to manage money wisely so that you can make good choices about saving, spending, and sharing. Just like you learn about math and reading, understanding money is an important skill for life. It's like having a superhero power to make sure you can do the things you want and need in the future. Saving some of your money in a piggy bank or a special jar is a great way to start. Remember, every coin and bill counts!",
            question: "What is one way you can practice financial wellness? ",
            optionA: "by spending all your money on toys",
            optionB: "by saving some of your money in a piggy bank",
            correctOption: "B"
        },
        {
            descriptions: "Making smart choices with money is like being a money superhero. When you get money, whether it's from doing chores or as a gift, you can choose to spend it, save it, or share it. Spending wisely means thinking about what you really want and making choices that help you get the most value. Saving is like building a treasure chest for the future. Sharing is when you use some of your money to help others or donate to a cause you care about.",
            question: "If you get $10 as a gift, what could you do with it?",
            optionA: "spend it all on candy",
            optionB: "save some and use the rest to buy a small toy you've been wanting",
            correctOption: "B"
        },
        {
            descriptions: "Earning money is like completing challenges or tasks, such as doing chores or helping out. Once you've earned some money, you can choose how to spend it wisely. It's important to think about your needs and wants. Needs are things you must have, like food and clothes, while wants are things you would like to have, like toys or treats.", 
            question: "If you earn $5 by helping with chores, what's a smart way to spend it?",
            optionA: "using it to buy some school supplies you need",
            optionB: "buying a new video game",
            correctOption: "A"
        },
        {
            descriptions: "Setting goals helps us achieve what we want. Financial goals are things we save money for, like a special toy or a family outing. It's like having a roadmap to reach your dreams. When you set a financial goal, you can save a little bit of money each week or month to make it happen.",
            question: "If your goal is to buy a new bike that costs $50, what's a good strategy?",
            optionA: "saving a portion of your money each week until you reach $50",
            optionB: "spending all your money on small treats each week",
            correctOption: "A"
        },
        {
            descriptions: "Everyone makes mistakes, and that's okay! Sometimes, we might spend our money on things we later realize we didn't need. It's important to learn from these experiences. Reflecting on our choices helps us make better decisions in the future.",
            question: "If you spent all your money on toys and later wished you had saved some, what would you do next time?",
            optionA: "keep spending all your money on toys",
            optionB: "think about saving some for the next time you want something special",
            correctOption: "B"
        },
        {
            descriptions: "Banks are like special places that help us take care of our money. We can keep our money safe in a bank, and they even give us a special account to do it. Sometimes, banks also give us a little extra money called interest.", 
            question: "Why might it be a good idea to keep your money in a bank?",
            optionA: "because banks help keep your money safe and might give you a little extra money",
            optionB: "because banks give you toys",
            correctOption: "A"
        },
        {
            descriptions: "When you put your money in a bank, they might give you a little extra money called interest. It's like a reward for letting them keep your money safe.",
            question: "If you save $10 in a bank and they give you $1 extra as interest, how much money will you have in total ?",
            optionA: "$11",
            optionB: "$10",
            correctOption: "A"
        },
        {
            descriptions: "Investing is like planting seeds for the future. Instead of just keeping your money in a bank, you can use it to buy something that might grow and become more valuable over time. This is called an investment.",
            question: "If you have $5, would you...",
            optionA: "keep it all in a piggy bank",
            optionB: "use it to buy something that might grow and become more valuable",
            correctOption: "B"
        },
        {
            descriptions: "Sometimes we have to make choices between spending our money on something now or using it to invest for the future.",
            question: "If you have $8, would you ...",
            optionA: "spend it all on a new toy",
            optionB: "use part of it to buy a smaller treat now and invest the rest for the future",
            correctOption: "B"
        },
        // Add more questions as needed
    ];
    let correctAnswers = 0;
    let incorrectAnswers = 0;
    let currentQuestionIndex = 0;

    function updateQuestion() {
        const currentQuestion = questions[currentQuestionIndex];
        document.getElementById("descriptions").textContent = currentQuestion.descriptions;
        document.getElementById("questionText").textContent = currentQuestion.question;
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
        if (correctAnswers ==9 ){
            console.log("All questions answered!");
            window.location.href = "end.html";
        }
        else if (currentQuestionIndex < questions.length) {
            updateQuestion();
        } else {
            if (incorrectAnswers > 0) {
                console.log("Repeating incorrect questions...");
                repeatIncorrectQuestions();
            } 
        }
    }

    function moveForward()
    {
        var pig = document.getElementById('piggy');
        var position = parseInt(pig.style.left) || 0;

        //left is set at 125
        if(correctAnswers == 1)
        {
            var newPos = position + 250;
        }
        else
        {
            var newPos = position + 125;
        }
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
