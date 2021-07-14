
//defining variables to use to load startBox/gameBox/endBox ***DO I NEED THESE OR SHULD I USE THEM?***
let startBtn = document.getElementById("start-btn");
let endBtn = document.getElementById("end-btn");
let startBox = document.getElementById("start-box").innerHTML;
let gameBox = document.getElementById("game-box").innerHTML;
let endBox = document.getElementById("end-box").innerHTML;
let userNameBtn = document.getElementById("enter-name-btn");


//startPage function set to fire onclick of start button
startBtn.onclick = function() {
    startGame();
    displayUserName ();

};

//FUNCTION TO RESET THE GAME BUT NOT WORKING??
endBtn.onclick = function() {
    startGame();
    window.location.reload();
};



function startGame() {
    document.getElementById("logo-box").classList.remove("box-cover"); //removes the box-cover class from the logo-box
    document.getElementById("game-box").classList.remove("box-hide"); //removes the box-hide class from the game-box
    document.getElementById("start-box").className = "box-hide"; //adds the the box-hide class to the start-box
    document.getElementById("answer-field").focus(); // Puts the cursor in the answer field
    
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


// to display user's name in the score box
function displayUserName () {
    let userName = document.getElementById("enter-name").value;
    document.getElementById("user-name").innerText = userName;
}


//function to set the next question by loading the image relative to the global counter

function setNextQuestion() {
    
    document.getElementById("answer-field").value = ""; // Erases the last typed answer
    document.getElementById("answer-field").focus(); // Puts the cursor in the answer field
    

    if (globalCounter < 10) {
        document.getElementById("question-image").src=questions[globalCounter].image; 
        document.getElementById("question-box").innerHTML=questions[globalCounter].question;
        document.getElementById("clue").innerHTML="";
        
        
      } else {
            endGame ();
      }
        
      };

      //function to reveal a clue onclick of the Help Btn
      let helpButton = document.getElementById("help-button");

      helpButton.onclick = function() {
        showClue();
    };

      function showClue() {
        document.getElementById("clue").innerHTML=questions[globalCounter].clue;
        document.getElementById("answer-field").focus();// returns the cursor to the answer field
      }



      //function to load end-box on completion of quiz and display the scores
      function endGame () {
        document.getElementById("logo-box").className = "box-cover"; //adds the the box-cover class to the logo-box
        document.getElementById("end-box").classList.remove("box-hide"); //removes the box-hide class from the end-box
        document.getElementById("game-box").className = "box-hide"; //adds the the box-hide class to the game-box

        let correctAnswers = document.getElementById("correct").innerText;
        let numOfQuestions = questions.length;
        let userName = document.getElementById("enter-name").value;

        document.getElementById("player-name").innerText= userName;
        document.getElementById("correct-answers").innerText= correctAnswers;
        document.getElementById("num-of-questions").innerText= numOfQuestions;
      };



// question bank stored as an array ***DELETE ONCE JSON FILE IS WORKING***
var questions = [
    {      
          question: "Can you name this animal?",
          image: "assets/images/cat.jpg",
         answer: "cat",
         clue: "C _ _"
    },
    {
        question: "What do you see in the picture?",
        image: "assets/images/car.jpg",
        answer: "car",
        clue: "C _ _"
    },
    {
        question: "Can you name this object?",
        image: "assets/images/ball.jpg",
         answer: "ball",
         clue: "B _ _ _"
    },
    {      
        question: "Can you name this fruit?",
        image: "assets/images/orange.png",
       answer: "orange",
       clue: "O _ _ _ _ _"
  },
  {      
    question: "What do you see in the picture?",
    image: "assets/images/flower.jpg",
   answer: "flower",
   clue: "F _ _ _ _ _"
},
{
    question: "Can you name this object?",
    image: "assets/images/train.jpg",
     answer: "train",
     clue: "T _ _ _ _"
},
{      
    question: "What do you see in the picture?",
    image: "assets/images/moon.jpg",
   answer: "moon",
   clue: "M _ _ _"
},
{      
    question: "Can you name this animal?",
    image: "assets/images/rabbit.jpg",
   answer: "rabbit",
   clue: "R _ _ _ _ _"
},
{      
    question: "What do you see in the picture?",
    image: "assets/images/hat.jpg",
   answer: "hat",
   clue: "H _ _"
},
{
    question: "Can you name this object?",
    image: "assets/images/pencil.jpg",
     answer: "pencil",
     clue: "P _ _ _ _ _"
}
]

//function to check the users input answer

function checkAnswer() {

let userAnswer = document.getElementById("answer-field").value.toLowerCase(); //ensures the users answer is correct if includes uppercase

//answer is the correct answer - corresponding to the variable 'globalCounter' from the questions array
let answer = questions[globalCounter].answer;

let correctAnswer = userAnswer === answer;

// let answerBox = document.getElementById("answer-box"); To Be Deleted?

if (correctAnswer) {
    //change border to green
    // answerBox.classList.remove("answer-box");
    // answerBox.classList.add("answer-box-correct");


        addCorrectScore();
        
}

else {
//change border to red
    // answerBox.classList.remove("answer-box");
    // answerBox.classList.add("answer-box-incorrect");

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

//following code enables the user to submit the answer using the enter button on the keyboard ***CREDIT***W3Schools**
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


//***jQuery***

// $('.click').click(function() {
//     $('.div2').replaceWith($('.div1'));        
// });

// $("#test-button").click(function(){
//     $(".div").animate({
//       left: '250px',
//       opacity: '0.5',
//       height: '150px',
//       width: '150px'
//     });
//   }); 