const question = document.querySelector('#question');
const choices = document.querySelector('.choice-text');
const progressText = document.querySelector('#questionText');
const scoreText = document.querySelector('#score');
const progressFull = document.querySelector('#progressBarFull');

let currentQuestion = {}
let acceptingAnswers = true;
let score = 0
let questionCounter = 0
let availableQuestions = [];

var timerEl = document.getElementById('countdown');

function countdown() {
    var timeLeft = 100;

    var timeInterval = setInterval(function () {

        if (timeLeft >= 1) {
            timerEl.textContent = timeLeft;
            timeLeft--;
        } else {
            timerEl.textContent = '';
            clearInterval(timeInterval);
            displayMessage();
        }
    }, 1000);
}

const quizzes = [
    {
    question: "wooopoppppppppp",
    choices: ["2", "2", "2", "2"],
    answer: 2
    },
    {
    question: "wooopoppppppppp",
    choices: ["2", "2", "2", "2"],
    answer: 2
    },
    {
    question: "wooopoppppppppp",
    choices: ["2", "2", "2", "2"],
    answer: 2
    },
    {
    question: "wooopoppppppppp",
    choices: ["2", "2", "2", "2"],
    answer: 2
    },
]

const SCORE_POINTS = 100
const MAX_QUESTIONS = 4

startQuiz = () => {

}

countdown();
