//global counter variable that can be passed in to other functions as needed
let globalCounter = 0;

let submitButton = document.getElementById("submit-button");

//Onclick event listener for the submit button
submitButton.onclick = function() {
    checkAnswer(); 
    incrementCounter(); 
    setNextQuestion();
};

//function to increment global counter by +1
function incrementCounter() {
    globalCounter++;
    console.log(globalCounter);   
}

//function to set the next question by loading the image relative to the global counter

function setNextQuestion() {
    
    document.getElementById("answer-field").value = ""; // Erases the last typed answer
    document.getElementById("answer-field").focus(); // Puts the cursor in the answer box

    if (globalCounter < 3) {
        document.getElementById("question-image").src=questions[globalCounter].question; 
        console.log("game continues");
      } else {
        console.log("game has ended");
      }
        
      };

//<img id="question-image" class="question-image img-fluid" src="assets/images/cat.jpg" alt="image of a cat"></img>
//question bank stored as an array
var questions = [
    {      
          question: "assets/images/cat.jpg",
         answer: "cat"
    },
    {
        question: "assets/images/car.jpg",
          answer: "car"
    },
    {
        question: "assets/images/ball.jpg",
         answer: "ball"
    }
];

//function to check the users input answer

function checkAnswer() {

let userAnswer = document.getElementById("answer-field").value;

//answer is the correct answer - corresponding to the variable 'globalCounter' from the questions array
let answer = questions[globalCounter].answer;

let correctAnswer = userAnswer === answer;


if (correctAnswer) {
        addCorrectScore();
}

else {
    addIncorrectScore();
}

//function to add correct score

function addCorrectScore() {
    let oldScore = document.getElementById("correct").innerText;
    document.getElementById("correct").innerText = ++oldScore;
}

//function to add incorrect score

function addIncorrectScore() {
    let oldScore = document.getElementById("incorrect").innerText;
    document.getElementById("incorrect").innerText = ++oldScore;
}
}