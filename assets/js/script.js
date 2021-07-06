
//question bank stored as an array
var questions = [
    {
          question: `assets/images/car.jpg`,
          answer: "car"
    },
    {
        question: `assets/images/cat.jpg`,
         answer: "cat"
    },
    {
        question: `assets/images/ball.jpg`,
         answer: "ball"
    }
];

//for loop to iterate through the questions array

for (var i = 0; i < questions.length; i++) {
    
    console.log(questions[i]);


   
}

//function to check the users input answer

function checkAnswer() {

let userAnswer = document.getElementsByClassName("answer-field").value;
let answer = //the returned answer to the first question in the for loop -- questions.answer[0]?

correctAnswer = userAnswer === answer;
}

if (correctAnswer) {
        addCorrectScore();
}

else {
    addIncorrectScore();
}

//function to add correct score

function addCorrectScore() {
    let oldScore = document.getElementsByClassName("correct").innerText;
    document.getElementsByClassName("correct").innerText = ++oldScore;
}

//function to add incorrect score

function addIncorrectScore() {
    let oldScore = document.getElementsByClassName("incorrect").innerText;
    document.getElementsByClassName("incorrect").innerText = ++oldScore;
}
