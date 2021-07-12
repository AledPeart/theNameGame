let startBtn = document.getElementById("start-btn");

startBtn.onclick = function() {
    startPage();
};

function startPage() {
    document.getElementById("main-page-box").innerHTML = `<div class="row"> <div class="col"> <h1>Start Game</h1> </div>`;
}

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

    if (globalCounter < 10) {
        document.getElementById("question-image").src=questions[globalCounter].image; 
        document.getElementById("question-box").innerHTML=questions[globalCounter].question;
        console.log("game continues");
      } else {
        console.log("game has ended");
      }
        
      };


// question bank stored as an array ***DELETE ONCE JSON FILE IS WORKING***
var questions = [
    {      
          question: "Can you name this animal?",
          image: "assets/images/cat.jpg",
         answer: "cat"
    },
    {
        question: "What do you see in the picture?",
        image: "assets/images/car.jpg",
        answer: "car"
    },
    {
        question: "Can you name this object?",
        image: "assets/images/ball.jpg",
         answer: "ball"
    },
    {      
        question: "Can you name this fruit?",
        image: "assets/images/orange.png",
       answer: "orange"
  },
  {      
    question: "What do you see in the picture?",
    image: "assets/images/flower.jpg",
   answer: "flower"
},
{
    question: "Can you name this object?",
    image: "assets/images/train.jpg",
     answer: "train"
},
{      
    question: "What do you see in the picture?",
    image: "assets/images/moon.jpg",
   answer: "moon"
},
{      
    question: "Can you name this animal?",
    image: "assets/images/rabbit.jpg",
   answer: "rabbit"
},
{      
    question: "What do you see in the picture?",
    image: "assets/images/hat.jpg",
   answer: "hat"
},
{
    question: "Can you name this object?",
    image: "assets/images/pencil.jpg",
     answer: "pencil"
}
]

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


//following code enables the user to submit the answer using the enter button on the keyboard
// targets the answer field
let answerField = document.getElementById("answer-field");
// Executes a function when the user releases the enter key on the keyboard
answerField.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) { //default keycode for the enter button
    // prevents the default action from occuring
    event.preventDefault();
    // triggers the submit button
    document.getElementById("submit-button").click();
  }
});


// //***JSON API***

// //variable to store location of JSON file
// let requestURL = "assets/js/questions.json";

// //variable to hold the request object (XHR)
// let request = new XMLHttpRequest();

// //in order to open the JSON request
// request.open('GET', requestURL);

// //so that the XHR knows that the data wil be in JSON format
// request.responseType = 'json';

// //send method which sends the request
// request.send();

// //stores the JSON questions data in a variable, and ensures it is available (onload)
// //and is there when it is needed 
// request.onload = function() {
//     let questions = request.response;
//     // const questions = JSON.parse(questionsText);
//   }