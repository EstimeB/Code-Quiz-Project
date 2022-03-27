// Selecting elements by id
let questionEl = document.getElementById('question');
let answerEl = document.getElementById('answer_btns');
let qaContainerEl = document.getElementById('q-and-ans');
let startBtn = document.getElementById('start_btn');
let highscores = document.getElementById('highscores');
let remainingTime = document.getElementById('time_display');
// let startingPoint = document.getElementById('starting_point');
let nextButton = document.getElementById('next_btn');

let displayRandomQuestions, currentQuestionIndex;

// Questions'/Answers' list/array
let questions = [
    { 
        question: 'What does HTML stand for?', 
        answers: [ 
            { text: 'Hyper Text Markup Language', correct: true},
            { text: 'Hyperlinks Text Markup Language', correct: false},
            { text: 'Home Tool Makup Language', correct: false}
        ]
    },
    { 
        question: 'Who is making the Web standards?',
        answers: [
            { text: 'Google', correct: false},
            { text: 'Mozilla', correct: false},
            { text: 'The World Wide Web Consortinum', correct: true},
            { text: 'Microsoft', correct: false}
        ]
    },
    { 
        question: 'What does CSS stand for?',
        answers: [
            { text: 'Computer Style Sheets', correct: false},
            { text: 'Cascading Style Sheet', correct: true},
            { text: 'Creative Style Sheet', correct: false},
            { text: 'Colorful Style Sheet', correct: false}
        ]
    },
    { 
        question: 'What is the correct HTML for referring to an external style sheet?',
        answers: [
            { text: '<style src="mystyle.css">', correct: false},
            { text: '<link rel="stylesheet" type="text/css" href="mystyle.css">', correct: true},
            { text: '<stylesheet>mystyle.css</stylesheet>', correct: false}
        ]
    },
    { 
        question: 'Inside which HTML element do we put the JavaScript?',
        answers: [
            { text: '<javascript>', correct: false},
            { text: '<js>', correct: false},
            { text: '<script>', correct: true},
            { text: '<scripting>', correct: false}
        ]
    }
];

// The time's functions
let timeLeft = 0;
let totalSeconds = 420;

// logic to format the seconds of the timer
function formatSecond() {
    let secondLeft = (totalSeconds - timeLeft) % 60;
    let configuredSeconds;

    if (secondLeft < 10) {
        configuredSeconds = '0' + secondLeft;
    } else {
        configuredSeconds = secondLeft;
    };

    if (timeLeft >= totalSeconds) {
        return 0;
    }
    return configuredSeconds;
}

// logic to format the minutes of the timer
function formatMinute() {
    // Subtracting time left from total seconds
    let secondLeft = totalSeconds - timeLeft;
    let minuteLeft = Math.floor(secondLeft / 60);
    let configuredMinutes = minuteLeft;
    return configuredMinutes;
}

// Display countdown time (incorporating formated seconds and minutes)
function countdown() {
    // how time will be displayed
    remainingTime.textContent = '0' + formatMinute() + ':' + formatSecond();

    if (timeLeft >= totalSeconds) {
        clearInterval(interval);
        remainingTime.textContent = '00:00'
    }
}

startBtn.addEventListener('click', startQuiz);
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion();
})

// The quiz's functions
//Initiate the quiz
function startQuiz() {
    console.log('stared');
    // Initiate the timer
    interval = setInterval(function () {
        timeLeft++;
        countdown();

    }, 1000);

    // To hide start button once clicked
    startBtn.classList.add('hide');
    displayRandomQuestions = questions.sort(() => Math.random() - .5);
    currentQuestionIndex = 0;
    qaContainerEl.classList.remove('hide');
    setNextQuestion();

}

let selectAnswer = [];
let question = [];

// Display the quiz
function setNextQuestion() {
    // Reset everything to default state to get to the next question
    resetState();

    displayQuestion(displayRandomQuestions[currentQuestionIndex]);
}
// Display the questions
function displayQuestion(question) {
    questionEl.innerText = question.question;
    question.answers.forEach(answer => {
        let button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        // for only if the answer is correct to prevent confusion
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', selectAnswer);
        answerEl.appendChil(button);

    })
}

// // To clear out everything for to the next question
function resetState() {
//     clearStatusClass(document.body);
    nextButton.classList.add('hide');
    while (answerEl.firstChild) {
        answerEl.removeChild(answerEl.firstChild);
    }

}

// // Display the answers
function displayQuizAnswers(slction) {
    let selectbtn = slction.target;
    let correct = selectbtn.dataset.correct;
    setStatusClass(document.body, correct);
    Array.from(answerEl.children).forEach(button => {
        setStatusClass(button, button.dataset.correct);
    })
    if (displayRandomQuestions.lenght > currentQuestionIndex + 1) {
        nextButton.classList.remove('hide');
    } else {
        startBtn.innerText = 'restart';
        startBtn.classList.remove('hide');
    }
   
}

function setStatusClass(element, correct) {
    clearStatusClass(element);
    if (correct) {
        element.classList.add('correct');
    } else {
        element.classList.add('wrong');
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct');
    element.classList.remove('wrong');
}

// // // Storing highscores
// localStorage.setItem('highscores', JSON.stringify(highscores));
// // // displayHighscoresPage();
// initialsInput.value = '';


// Restarting the quiz
// let restart = document.getElementById('restart_btn');
// restartLink.addEventListener()