const question = document.querySelector('#question');
const choices = Array.from(document.querySelectorAll('.choice-text'))
const scoreText = document.querySelector('#score');
const highScore = document.getElementById('hscore')

let currentQuestion = {}
let acceptingAnswers = true;
let score = 0
let questionCounter = 0
let availableQuestions = [];
let correctAnswer = [];
var questIndex = 0
var timeLeft = 100;
var timerEl = document.getElementById('countdown');


function Fail() {
    window.alert("Times Up!")
    window.location.replace("./index.html")
}

function countdown(i) {

    var timeInterval = setInterval(function () {

        if (i >= 0) {
            timerEl.textContent = i;
            i--;
        } else {
            timerEl.textContent = '';
            clearInterval(timeInterval);
            Fail();
        }
    }, 1000);
    return timeInterval
}

const questions = [
    {
        question: "What is 6 / 2 ?",
        choice1: "1",
        choice2: "2",
        choice3: "3",
        choice4: "5",
        answer: "3",
    },
    {
        question: "What is 7 * 11 ?",
        choice1: "1",
        choice2: "77",
        choice3: "6",
        choice4: "5",
        answer: "77",
    },
    {
        question: "What is 2 + 2 ?",
        choice1: "1",
        choice2: "4",
        choice3: "21",
        choice4: "5",
        answer: "4",
    },
    {
        question: "What is 4 + 4 ?",
        choice1: "8",
        choice2: "2",
        choice3: "3",
        choice4: "5",
        answer: "8",
    },
]

const scorePoints = 25




function createStart() {
    for (i = 0; i < 4; i++) {
        availableQuestions.push(questions[i]["question"])
        correctAnswer.push(questions[i]["answer"])
    }
    // console.log(correctAnswer)
    const questionselected = document.getElementById("question")
    questionselected.textContent = availableQuestions[0]
    var userName = window.prompt("your name?")
    localStorage.setItem("user", userName)
    return userName
}


/*
function getNewQuestion(){

}
*/


function getNewChoices(number) {
    console.log(number);
    const questionselected = document.getElementById("question")
    var index = number

    choices.forEach(choice => {
        var quest = questions

        currentQuestion = quest[index]

        const number = choice.dataset['number']
        choice.innerText = currentQuestion['choice' + number]
        choice.addEventListener("click", function (event) {
            var userchoice = event.target.textContent
            if (correctAnswer.indexOf(userchoice) !== -1) {
                console.log(`score, ${score}`)
                score += scorePoints;
                scoreText.textContent = score;
            } 
            else {
                currentTime = timerEl.textContent
                currentTime -= 10
                clearInterval(InitialCountDown);
                InitialCountDown = countdown(currentTime)
            }
            index++
            if (index > 3) {
                localStorage.setItem("Score", JSON.stringify(score));
                console.log(highScore)
                // var listItemEl = document.createElement("li"); 
                // var TT = document.createElement("div");
                // TT.id = "hScore";
                // TT.innerHTML= localStorage.getItem("user")
                // listItemEl.append(TT);
                // highScore.append(listItemEl);
                window.location.replace("./highscore.html")
                return
            }
            questionselected.textContent = questions[index].question
            getNewChoices(index)
        })
        return score
    })
}

createStart()
console.log(highScore)
var InitialCountDown = countdown(100);
getNewChoices(0)

/*
var firstNameInput = document.querySelector("#first-name");
var submitButton = document.querySelector("#sign-up");
console.log("hi")

//var InitialCountDown = countdown(100);

submitButton.addEventListener("click", function(event) {
    event.preventDefault();
    console.log("hi")
    // create user object from submission
    var user = {
        firstName: firstNameInput.value.trim()
    
    };

    // set new submission to local storage 
    localStorage.setItem("user", JSON.stringify(user));
    
});

*/
