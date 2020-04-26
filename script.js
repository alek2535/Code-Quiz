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
let secondsLeft = 30;
let score = 0;
let i = 0;
let highScoreInput = document.getElementById("high-score-input");
let yourName = document.getElementById("your-name");
let yourScore = document.getElementById("your-score");
let highScoresPage = document.getElementById("highscores-page");

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
];

// Highscores page 
highScoresPage.addEventListener("click", function() {
    startPage.className = 'd-none';
    questionBlock.className = "d-none";
    scoresPage.className = "container text-center mt-5";
})

//Timer
function setTimer() {
    let countdown = setInterval(() => {
        secondsLeft--;
        timerClock.innerHTML = `Timer: ${secondsLeft}`;

        if (secondsLeft === 0) {
            clearInterval(countdown);
            lastQuestion();
        }
    }, 1000);
};

//StartButton
startButton.addEventListener('click', function() {
    startPage.className = 'd-none';
    questionBlock.className = 'container text-center mt-5';
    printQuestionsAnswers();
    setTimer();
});

function printQuestionsAnswers() {
    questionH1.textContent = questionsAnswers[i].question;
    buttonA.textContent = questionsAnswers[i].choices[0];
    buttonB.textContent = questionsAnswers[i].choices[1];
    buttonC.textContent = questionsAnswers[i].choices[2];
    buttonD.textContent = questionsAnswers[i].choices[3];
};

// Buttons Click Events
buttonA.addEventListener('click', function(event) {
    event.stopPropagation();
    let correctChoice = "";
    correctChoice = questionsAnswers[i].answer;
    console.log(correctChoice);
    if (i < questionsAnswers.length -1) {
        i++
    }
    if (event.target.textContent === correctChoice) {  
        printQuestionsAnswers();
        score++;
        let newP = document.createElement("p");
        newP.textContent = "Correct!";
        questionBlock.appendChild(newP);
    } else {
        printQuestionsAnswers();
        secondsLeft -= 5;
        let newP = document.createElement("p");
        newP.textContent = "Incorrect!";
        questionBlock.appendChild(newP);
    }
    console.log(score);
    
});

buttonB.addEventListener('click', function(event) {
    event.stopPropagation();
    let correctChoice = "";
    correctChoice = questionsAnswers[i].answer;
    console.log(correctChoice);
    if (i < questionsAnswers.length -1) {
        i++
    }
    if (event.target.textContent === correctChoice) { 
        printQuestionsAnswers();
        score++;
        let newP = document.createElement("p");
        newP.textContent = "Correct!";
        questionBlock.appendChild(newP);
    } else {
        printQuestionsAnswers();
        secondsLeft -= 5;
        let newP = document.createElement("p");
        newP.textContent = "Incorrect!";
        questionBlock.appendChild(newP);
    }
    console.log(score);
});

buttonC.addEventListener('click', function(event) {
    event.stopPropagation();
    let correctChoice = "";
    correctChoice = questionsAnswers[i].answer;
    console.log(correctChoice);
    if (i < questionsAnswers.length -1) {
        i++
    }
    if (event.target.textContent === correctChoice) { 
        printQuestionsAnswers();
        score++;
        let newP = document.createElement("p");
        newP.textContent = "Correct!";
        questionBlock.appendChild(newP);
    } else {
        printQuestionsAnswers();
        secondsLeft -= 5;
        let newP = document.createElement("p");
        newP.textContent = "Incorrect!";
        questionBlock.appendChild(newP);
    }
    console.log(score);
});

buttonD.addEventListener('click', function(event) {
    event.stopPropagation();
    let correctChoice = "";
    correctChoice = questionsAnswers[i].answer;
    console.log(correctChoice);
    if (i < questionsAnswers.length -1) {
        i++
    }
    if (event.target.textContent === correctChoice) { 
        printQuestionsAnswers(); 
        score++;
        let newP = document.createElement("p");
        newP.textContent = "Correct!";
        questionBlock.appendChild(newP);
    } else {
        printQuestionsAnswers();
        secondsLeft -= 5;
        let newP = document.createElement("p");
        newP.textContent = "Incorrect!";
        questionBlock.appendChild(newP);
    }
    console.log(score); 
});

//Final Score input
let finalScore = "";

function lastQuestion() {
    if (secondsLeft === 0 || i === questionsAnswers[5].answer) { 
    finalScore = secondsLeft + score; 
    questionBlock.className = "d-none";
    highScoreInput.className = "container text-center mt-5";
    yourScore.innerHTML = `Your score is ${finalScore}!`;
    }
}

let scoresPage = document.getElementById("scores-page");
let addName = document.getElementById("button-addon2");

addName.addEventListener("click", pageScores());

localStorage.setItem("score",JSON.stringify(finalScore));
localStorage.setItem("name", JSON.stringify(yourName));
function pageScores() {
    highScoreInput.className = "d-none";
    scoresPage.className = "container text-center mt-5";
    let newLi = document.createElement("li");
    JSON.parse(localStorage.getItem(finalScore));
    JSON.parse(localStorage.getItem(yourName));
    newLi.className = "bg-primary text-white"
    newLi.innerHTML = yourName + finalScore;
    let ul = document.getElementById("final-ul");
    ul.appendChild(newLi);
}

