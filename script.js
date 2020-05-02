//Global Variables
let startButton = document.getElementById('start-button'); 
let startPage = document.getElementById('start-page');
let timerClock = document.getElementById("timer-clock");
let questionBlock = document.getElementById("question-block");
let questionH1 = document.getElementById("question-h1");
let buttonA = document.getElementById("button-a");
let buttonB = document.getElementById("button-b");
let buttonC = document.getElementById("button-c");
let buttonD = document.getElementById("button-d");
let btnAnswers = document.querySelector("button");
let secondsLeft = 75;
let score = 0;
let i = 0;


//Array for Questions and Answers
let questionsAnswers = [
    {
        question: "What kind of variable contains more than one value?",
        choices: ["A) Object", "B) Array", "C) String", "D) Value Pair"],
        answer: "A) Object"
    }, 
    {
        question: "Which of these is a function in JavaScript?",
        choices: ["A) var name = function() {};", "B) function name() {};", "C) () => {};", "D) All of the above"],
        answer: "D) All of the above"
    },
    {
        question: "Which of these is a library for JavaScript?",
        choices: ["A) Node.js", "B) React.js", "C) jQuery", "D) All of the above"],
        answer: "D) All of the above"
    }, 
    {
        question: "What keyword will not allow the variable to be reassigned or redeclared?",
        choices: ["A) var", "B) let", "C) const", "D) None of the above"],
        answer: "C) const"
    },
    {
        question: "How do you select an element in DOM by its id?",
        choices: ["A) document.getElementById()", "B) document.getElementByClassName()", "C) document.getElementByTag()", "D) document.getElementByName()"],
        answer: "A) document.getElementById()"
    } 
    ,
    {
        question: "Good job! You completed the quiz!",
        choices: ['', '', '', ''],
        answers: ''
    } 
];

// View Highscores Button
let viewScoresPage = document.getElementById("highscores-page");

viewScoresPage.addEventListener("click", function() {
    startPage.className = 'd-none';
    questionBlock.className = "d-none";
    highScoreInput.className = "d-none";
    scoresPage.className = "container text-center mt-5";
})

//Timer
function setTimer() {
    let countdown = setInterval(() => {
        secondsLeft--;
        timerClock.innerHTML = `Timer: ${secondsLeft}`;

        if (secondsLeft <= 0 || i >= questionsAnswers.length -1) {
            clearInterval(countdown);
            clearTimeout(setTimer);
            lastQuestion();
        }
    }, 1000);
};

resetQA();
//StartButton
startButton.addEventListener('click', function() {
    startPage.className = 'd-none';
    questionBlock.className = 'container text-center mt-5';
    printQuestionsAnswers();
    setTimer();
});

//Displays Quesitions and Choices to Buttons
function printQuestionsAnswers() {
    questionH1.textContent = questionsAnswers[i].question;
    buttonA.textContent = questionsAnswers[i].choices[0];
    buttonB.textContent = questionsAnswers[i].choices[1];
    buttonC.textContent = questionsAnswers[i].choices[2];
    buttonD.textContent = questionsAnswers[i].choices[3];
};

//Functions for removing Correct! or Incorrect!
function correct() {
    let newP = document.createElement("p");
    newP.textContent = "Correct!";
    questionBlock.appendChild(newP);
    setTimeout(function() {
       newP.remove();
    }, 1000)
}

function incorrect() {
    let newP = document.createElement("p");
    newP.textContent = "Incorrect!";
    questionBlock.appendChild(newP);
    setTimeout(function() {
        newP.remove();
    }, 1000)
}

// Buttons Click Events
buttonA.addEventListener('click', function(event) {
    event.stopPropagation();
    let correctChoice = "";
    correctChoice = questionsAnswers[i].answer;
    if (i < questionsAnswers.length -1) {
        i++
    }
    if (event.target.textContent === correctChoice) {  
        printQuestionsAnswers();
        score++;
        correct();    
    } else {
        printQuestionsAnswers();
        secondsLeft -= 5;
        incorrect();
    }
});

buttonB.addEventListener('click', function(event) {
    event.stopPropagation();
    let correctChoice = "";
    correctChoice = questionsAnswers[i].answer;
    if (i < questionsAnswers.length -1) {
        i++
    }
    if (event.target.textContent === correctChoice) { 
        printQuestionsAnswers();
        score++;
        correct();
    } else {
        printQuestionsAnswers();
        secondsLeft -= 5;
        incorrect();
    }
});

buttonC.addEventListener('click', function(event) {
    event.stopPropagation();
    let correctChoice = "";
    correctChoice = questionsAnswers[i].answer;
    if (i < questionsAnswers.length -1) {
        i++
    }
    if (event.target.textContent === correctChoice) { 
        printQuestionsAnswers();
        score++;
        correct();
    } else {
        printQuestionsAnswers();
        secondsLeft -= 5;
        incorrect();
    }
});

buttonD.addEventListener('click', function(event) {
    event.stopPropagation();
    let correctChoice = "";
    correctChoice = questionsAnswers[i].answer;
    if (i < questionsAnswers.length -1) {
        i++
    }
    if (event.target.textContent === correctChoice) { 
        printQuestionsAnswers(); 
        score++;
        correct();
    } else {
        printQuestionsAnswers();
        secondsLeft -= 5;
        incorrect();
    }
});

//Final Score input
let finalScore = "";
let highScoreInput = document.getElementById("high-score-input");
let yourScore = document.getElementById("your-score");

function lastQuestion() {
    finalScore = secondsLeft + score; 
    questionBlock.className = "d-none";
    scoresPage.className = "d-none";
    startPage.className = "d-none";
    highScoreInput.className = "container text-center mt-5";
    yourScore.innerHTML = `Your score is ${finalScore}!`;
}

//Variables for Scores Page
let scoresPage = document.getElementById("scores-page");
let addName = document.getElementById("button-addon2");

//Add name and high scores end of quiz section
let newLi;
let ul = document.getElementById("final-ul");
//Event listener for Add Name Button
addName.addEventListener("click", function() {
    let yourName = document.getElementById("your-name").value;
    localStorage.setItem("score", finalScore);
    localStorage.setItem("name", yourName);
    highScoreInput.className = "d-none";
    scoresPage.className = "container text-center mt-5";
    newLi = document.createElement("li");
    localStorage.getItem(finalScore);
    localStorage.getItem(yourName);
    newLi.className = "bg-primary text-white"
    newLi.innerHTML = `${yourName} ${finalScore}`;
    ul.appendChild(newLi);
});

//Go Back Function
let goBack = document.getElementById('button-go-back');
goBack.addEventListener('click', function() {
    scoresPage.className= "d-none"
    startPage.className = "container text-center mt-5";
    timerClock.innerHTML = "Timer:"
    secondsLeft = 75;
    resetQA();
})

//Clear High Score
let clearHighScore = document.getElementById('button-clear-highscore');
clearHighScore.addEventListener("click", function() {
    newLi.remove();
})

//Reset Questions and Answers
function resetQA() {
    questionH1.textContent = '';
    buttonA.textContent = '';
    buttonB.textContent = '';
    buttonC.textContent = '';
    buttonD.textContent = '';
}


