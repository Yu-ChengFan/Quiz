const question = document.querySelector('#question');
const choices = Array.from(document.querySelectorAll('.choice-text'))
const scoreText = document.querySelector('#score');


let currentQuestion = {}
let acceptingAnswers = true;
let score = 0
let questionCounter = 0
let availableQuestions = [];
let correctAnswer =  [];
var questIndex = 0

var timerEl = document.getElementById('countdown');


function Fail() {
    window.alert("Times Up!")
    window.location.replace("./index.html")
}

function countdown() {
    var timeLeft = 100;

    var timeInterval = setInterval(function () {

        if (timeLeft >= 0) {
            timerEl.textContent = timeLeft;
            timeLeft--;
        } else {
            timerEl.textContent = '';
            clearInterval(timeInterval);
            Fail();
        }
    }, 1000);
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
    choice3: "3",
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

const scorePoints = 100
const maxQuestions = 4



function createStart() {
    for (i=0; i < 4; i++){
        availableQuestions.push(questions[i]["question"])
        correctAnswer.push(questions[i]["answer"])
    }
    // console.log(correctAnswer)
    const questionselected = document.getElementById("question")
    questionselected.textContent = availableQuestions[0]

}



function getNewQuestion(){
        // questionselected.textContent
    

    // const questionselected = document.getElementById("question")
    // questionselected.textContent = (questions[1].question)
}


function getNewChoices(){

    choices.forEach(choice => {
        var quest = questions

        currentQuestion = quest[questIndex]

        const number = choice.dataset['number']
        choice.innerText = currentQuestion['choice'+ number]
        choice.addEventListener("click",function(event){
            var userchoice = event.target.textContent
            if (correctAnswer.includes(userchoice)){
                questIndex++
                console.log(questIndex)
                getNewChoices()
            }
        })
    })

}




createStart()
console.log(correctAnswer)
getNewChoices()

// function startQuiz() {
//     questionCounter = 0
//     score = 0
//     availableQuestions = [...quizzes]
//     getNewQuestion()

//     if (availableQuestions.length === 0 || questionCounter > maxQuestions){
//         localStorage.setItem('mostRecentScore', score)
//         return window.location.assign('./end.html')
//     }
//     questionCounter++
//     progressText.innerText = `Question ${questionCounter} of ${maxQuestions}`
//     progressFull.style.width = `${(questionCounter/maxQuestions)*100}%`

//     const questionIndex = Math.floor(Math.random()*availableQuestions.length)
//     currentQuestion = availableQuestions[questionIndex]
//     question.innerText = currentQuestion.question

//     choices.forEach(choice => {
//         const number = choice.dataset['number']
//         choice.innerText = currentQuestion['choice'+ number]
//     })
//     availableQuestions.splice(questionIndex, 1)
//     acceptingAnswers =  true

// };
// choices.forEach(choice => {
//     choice.addEventListener('click', e => {
//         if (!acceptingAnswers) return

//         acceptingAnswers = false
//         const selectedChoice = e.target
//         const selectedAnswer = selectedChoice.dataset['number']

//         let classToApply = selectedAnswer == currentQuestion.answer ? 'correct' :
//         'incorrect'

//         if(classToApply  === 'correct'){
//             incrementscore(scorePoints)
//         }
//         selectedChoice.parentElement.classList.add(classToApply)
//         setTimeout(()=>{
//             selectedChoice.parentElement.classList.remove(classToApply)
//             getNewQuestion()
//         },1000)
//     })
// })
// incrementScore = num => {
//     score+= num
//     scoreText.innerText = score
// }


countdown();
