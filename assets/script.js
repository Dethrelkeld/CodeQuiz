//Globals

var startButton = document.getElementById("startBtn");
var startEl = document.getElementById("start");
var quizEl = document.getElementById("quiz");
var endEl = document.getElementById("end");
var answerBox = document.getElementById("answers");
var Q = 0;
var scoreEl = document.getElementById("score");
var timeDisplayEl = document.getElementById("timeRemain");
var timerInterval;
var secondsLeft = 60;
var correct = []


var questions = [
    {
      question: 'Where in our code do we keep the styling?',
      choices: [
        'in a style.css file',
        'between two style tags',
        'inside our html with the style attribute',
        'all of the above'
      ],
      answer: 'all of the above'
    },
    {
      question: 'Java short for Javascript',
      choices: ['true', 'false'],
      answer: 'false'
    },
    {
      question: 'Which of these are array methods?',
      choices: [
        'push, pull, forEach, map',
        'forEach, filter, map, state',
        'push, filter, forEach, map'
      ],
      answer: 'push, filter, forEach, map'
    },
    {
      question: '_________ is a Javascript library for DOM manipulation',
      choices: ['Node.js', 'JQuery', 'MySQL', 'Bootstrap'],
      answer: 'JQuery'
    },
    {
      question: 'Where in our code do we keep the styling',
      choices: [
        'in a styles.css file',
        'between two style tags',
        'inside our html with the style attribute',
        'all of the above'
      ],
      answer: 'all of the above'
    }
  ];
  
  
  
  
  
  
  
// event listeners

startButton.addEventListener("click", function(){

    startEl.classList.add("hide");
    quizEl.classList.remove("hide");
    startQuiz()
})
// card that starts the quiz
function startQuiz() {
    console.log("start"); 
    buildQuestionCard();
    startTimer();
}

// Timer function
function startTimer() {
  timerInterval = setInterval(function () {
    secondsLeft--;
    timeDisplayEl.textContent = secondsLeft; 

    if (secondsLeft <= 0) {
      clearInterval(timerInterval);
      return endGameCard(); 
    }
  }, 1000);
}

// builds the question card
function buildQuestionCard() {

    var questionTitle = document.getElementById("question-title")
    questionTitle.textContent = questions[Q].question;
    answerBox.innerHTML = ""

    questions[Q].choices.forEach(function(choice){
        // console.log(choice);
        var button = document.createElement("button");
        button.classList.add("list-group-item")
        button.textContent = choice;
        button.setAttribute("value", choice)

        button.onclick = evalAnswer;
        answerBox.appendChild(button)

        
    })
}
// determine right or wrong and when finished
function evalAnswer() {
    console.log("chose " + this.value);
    console.log("answer was " + questions[Q].answer)
    if (this.value === questions[Q].answer) {
      console.log("correct");

    }
    else {
      console.log("wrong");
      secondsLeft -= 10
    }
    
    // ending the quiz portion and stopping the clock
    if (Q === (questions.length - 1)) {
        endGameCard();
        clearInterval(timerInterval);
    }
    else {
        Q++;
        buildQuestionCard()
    }
}


// builds the ending card
function endGameCard() {
    console.log("ending");
    answerBox.innerHTML = "";
    quizEl.classList.add("hide");
    endEl.classList.remove("hide");
}

// saving to local storage
