let startBtn = document.getElementById('start_btn');
let highscores = document.getElementById('highscores');
let remainingTime = document.getElementById('time_display');
let startingPoint = document.getElementById('starting_point');

// Array (Questions'/Answers' list)
let questions = [
    { 'question': 'What does HTML stand for?', 'answer': ['Hyper Text Markup Language', 'Hyperlinks Text Markup Language', 'Home Tool Makup Language'], 'correct_index': 0 },
    { 'question': 'Who is making the Web standards?', 'answer': ['Google', 'Mozilla', 'The World Wide Web Consortinum', 'Microsoft'], 'correct_index': 2 },
    { 'question': 'What does CSS stand for?', 'answer': ['Computer Style Sheets', 'Cascading Style Sheet', 'Creative Style Sheet', 'Colorful Style Sheet'], 'correct_index': 1 },
    { 'question': 'What is the correct HTML for referring to an external style sheet?', 'answer': ['<style src="mystyle.css">', '<link rel="stylesheet" type="text/css" href="mystyle.css">', '<stylesheet>mystyle.css</stylesheet>'], 'correct_index': 1 },
    { 'question': 'Inside which HTML element do we put the JavaScript?', 'answer': ['<javascript>', '<js>', '<script>', '<scripting>'], 'correct_index': 2 }
];

// functions

let timeLeft = 0;
let totalSeconds = 420;

// logic to format the second the logic of the timer
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

function startQuiz() {
    // Display/Start the quiz
    function displayQuizQuestions() {
       
    }

    interval = setInterval(function () {
        timeLeft++;
        countdown();

    }, 1000);

}

startBtn.addEventListener('click', startQuiz);

// Storing highscores
localStorage.setItem('highscores', JSON.stringify(highscores));
displayHighscoresPage();
initialsInput.value = '';


// Restarting the quiz
let restart = document.getElementById('restart_btn');
restartLink.addEventListener()