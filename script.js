// Selecting elements by id
let questionEl = document.getElementById('question');
let answerEl = document.getElementById('answer_btns');
let qaContainerEl = document.getElementById('q-and-ans');
let startBtn = document.getElementById('start_btn');
let highscores = document.getElementById('highscores');
let remainingTime = document.getElementById('time_display');
let nextButton = document.getElementById('next_btn');

let displayRandomQuestions, currentQuestionIndex;
let scorePlayerEl = document.getElementById('score_player');
scorePlayerEl.style.display ="none"

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

let totalSeconds = questions.length * 30;

startBtn.addEventListener('click', startQuiz);
nextButton.addEventListener('click', () => {
    if(currentQuestionIndex < questions.length - 1){
    currentQuestionIndex++
    setNextQuestion();
    }else{
        nextButton.style.visibility = 'hidden';
        resetState();
        clearInterval(interval);
        remainingTime.textContent = "You've completed the quiz!" + totalSeconds + "left";
        scorePlayerEl.style.display ="block"
        document.getElementById('score').textContent = totalSeconds+scoreQuestion+"Finale Score"
    }
})

// The quiz's functions
//Initiate the quiz
function startQuiz() {
    // Initiate the timer
    interval = setInterval(function () {
       remainingTime.textContent = totalSeconds;
       if (totalSeconds > 0){
           totalSeconds--;
       } else {
            resetState();
           clearInterval(interval);
           remainingTime.textContent = 'Time up'
           scorePlayerEl.style.display ="block"
            document.getElementById('score').textContent = totalSeconds+scoreQuestion+" is your Finale Score"
       }

    }, 1000);

    // To hide start button once clicked
    startBtn.style.visibility = 'hidden';

    displayRandomQuestions = questions.sort(() => Math.random() - .5);
    currentQuestionIndex = 0;
    // Render next button vissible after the start button is clicked and the first question/answers are displayed
    nextButton.style.visibility = 'visible';
    setNextQuestion();

}

let selectAnswer = [];

// Display the quiz
function setNextQuestion() {
    // Reset everything to default state to get to the next question
    resetState();

    displayQuestion(displayRandomQuestions[currentQuestionIndex]);
}

let scoreQuestion = 0;

qaContainerEl.addEventListener('click', function(event) {
    console.log(event.target.textContent, event.target.getAttribute('data-answer'));
    if (event.target.getAttribute('data-answer') == "true") {
        scoreQuestion++;
        event.target.classList.add('abtn_correct');
    } else {
        scoreQuestion--;
        event.target.classList.add('abtn_wrong')
        totalSeconds -= 30 // totalSeconda = totalSeconds - 30
    }
    console.log(totalSeconds, "Score",scoreQuestion);
})


// Display the questions
function displayQuestion(question) {
    questionEl.innerText = question.question;
    question.answers.forEach(answer => {
        let button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        button.setAttribute("data-answer",answer.correct)
        button.dataset.correct = answer.correct;
        answerEl.appendChild(button);

    })
}

function checkAswer() {
    let userAnswer = this.getAttribute('#')
    console.log(userAnswer, onclick)
}
// // To clear out everything for to the next question
function resetState() {
    while (answerEl.firstChild) {
        answerEl.removeChild(answerEl.firstChild);
    }
}

// // Display the quiz's answers
function displayQuizAnswers(slction) {
    let selectbtn = slction.target;
    let correct = selectbtn.dataset.correct;
    Array.from(answerEl.children).forEach(button => {
        setStatusClass(button, button.dataset.correct);
    })
    if (displayRandomQuestions.length > currentQuestionIndex + 1) {
        nextButton.style.visibility = 'visible';
    } else {
        startBtn.innerText = 'restart';
        startBtn.style.visibility = 'visible';
        nextButton.style.visibility = 'hidden';
    }
   
}

// Restarting the quiz
let restart = document.getElementById('restart_btn');
restart.addEventListener('click', function restartQuiz() {
    // clearInterval();
    resetState();
    nextButton.style.visibility = 'hidden';
    startBtn.style.visibility = 'visible';
})