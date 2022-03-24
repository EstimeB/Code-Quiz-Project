let startBtn = document.getElementById('start_btn');
let highScores = document.getElementById('highscores');
let timeEl = document.getElementById('time_display');
// let remainingTime = document.getElementById('time');
let startingPoint = document.getElementById('starting_point');

// Array (Questions'/Answers' list)
let questions = [{'question': 'What does HTML stand for?', 'answer': ['Hyper Text Markup Language', 'Hyperlinks Text Markup Language', 'Home Tool Makup Language' ], 'correct_index': 0 },
{'question': 'Who is making the Web standards?', 'answer': ['Google', 'Mozilla', 'The World Wide Web Consortinum', 'Microsoft'], 'correct_index': 2 },
{'question': 'What does CSS stand for?', 'answer': ['Computer Style Sheets', 'Cascading Style Sheet', 'Creative Style Sheet', 'Colorful Style Sheet'], 'correct_index': 1 },
{'question': 'What is the correct HTML for referring to an external style sheet?', 'answer': ['<style src="mystyle.css">', '<link rel="stylesheet" type="text/css" href="mystyle.css">', '<stylesheet>mystyle.css</stylesheet>'], 'correct_index':1 },
{'question': 'Inside which HTML element do we put the JavaScript?', 'answer': ['<javascript>', '<js>', '<script>', '<scripting>'], 'correct_index': 2 }
];

// startBtn.addEventListener('click', countdown);
// functions
// Display countdown timer
function countdown() {
    let timeLeft = 7;
    setInterval(function () {
    if (timeLeft > 1) {
      timeEl.textContent = timeLeft + 'minutes';
      timeLeft--;
    }
    if (timeLeft === 1) {
      timeEl.textContent =  + 'minutes';
      timeLeft--;
    } else {
      timeEl.textContent = "Time's up!";
    }
    }, 1000);
}

startBtn.addEventListener('click', countdown);

// Display/Start the quiz
function theQuiz(){

}

// Storing highscores
localStorage.setItem(highScores,)