//Globals

var startButton = document.getElementById("startBtn");
var startEl = document.getElementById("start")
var quizEl = document.getElementById("quiz");
var Q = 0;

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

function startQuiz() {
    console.log("start");
    buildQuestionCard();
    //start timer
}

function buildQuestionCard() {

    var questionTitle = document.getElementById("question-title")
    questionTitle.textContent = questions[Q].question;
    var answerBox = document.getElementById("answers");
    answerBox.innerHTML = ""

    questions[Q].choices.forEach(function(choice){
        console.log(choice);
        var button = document.createElement("button");
        button.textContent = choice;
        button.setAttribute("value", choice)

        button.onclick = evalAnswer;
        answerBox.appendChild(button)

        
    })
}

function evalAnswer() {
    console.log(this.value)
    // determining right and wrong
    Q++;
    buildQuestionCard()
    
}

// end gam card
// score object
// saving to local storage