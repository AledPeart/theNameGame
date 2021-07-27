
//***START PAGE BOX***

window.onload = function() {
  document.getElementById("enter-name-box").focus(); // Puts the cursor in the answer field
};


//defining variables to use to load startBox/gameBox/endBox ***DO I NEED THESE OR SHOULD I USE THEM?***
let startBtn = document.getElementById("start-btn");
let endBtn = document.getElementById("end-btn");
let startBox = document.getElementById("start-box").innerHTML;
let gameBox = document.getElementById("game-box").innerHTML;
let endBox = document.getElementById("end-box").innerHTML;
// let userNameBtn = document.getElementById("enter-name-btn");


//global counter variable that can be passed in to other functions as needed
let globalCounter = 0;


//Start Btn onclick 
startBtn.onclick = function() {
  checkForInput();
  clickSound.play();
  startGame();
  displayUserName ();
};


// to center the site logo an smaller screens ***CODE taken from https://stackoverflow.com/questions/39557244/run-code-if-screen-has-certain-width***

window.addEventListener('resize', resize);
function resize() {
  if (screen.width <= 992){
    document.getElementById("site-logo").classList.add("mx-auto");
  }else{
      document.getElementById("site-logo").classList.remove("mx-auto");
   }
};

// ***Check for input Function***

function checkForInput() {

  if (document.getElementById("enter-name-box").value == "") {
    startBtn.disabled = true;
}
else {
    startBtn.disabled = false;
}
};



   

  

//***Start Game Function***

function startGame() {
    document.getElementById("logo-box").classList.remove("box-cover"); //removes the box-cover class from the logo-box
    document.getElementById("game-box").classList.remove("box-hide"); //removes the box-hide class from the game-box
    document.getElementById("start-box").className = "box-hide"; //adds the the box-hide class to the start-box
    document.getElementById("answer-field").focus(); // Puts the cursor in the answer field
}

let submitButton = document.getElementById("submit-button");

//Onclick event listener for the submit button
submitButton.onclick = function() {
    checkAnswer();
    setTimeout(function() { //delays the counter and increment functions until the correct/incorrect animations have run
        incrementCounter(); 
        setNextQuestion(); 
    }, 1000); 

    visualHelpButton.disabled = false; //resets the help buttons for the next question
    audioHelpButton.disabled = false;
    multiHelpButton.disabled = false;  
};

//function to increment global counter by +1
function incrementCounter() {
    globalCounter++;
 }

// to display user's name in the score box
function displayUserName () {
    let userName = document.getElementById("enter-name-box").value;
    document.getElementById("user-name").innerText = userName;
}


//***CHECK ANSWER***

//function to check the users input answer
function checkAnswer() {

  let userAnswer = document.getElementById("answer-field").value.toLowerCase(); //ensures the users answer is correct if includes uppercase
  let correctAudio = document.getElementById("audio-correct"); // defines variables for the audio files
  let incorrectAudio = document.getElementById("audio-incorrect");//Audio file from Zapsplat.com
      
  //answer is the correct answer - corresponding to the variable 'globalCounter' from the questions array
  let answer = questions[globalCounter].answer;
  let correctAnswer = userAnswer === answer; 
  
  let tickIcon = document.getElementById("tick-icon"); 
  let crossIcon = document.getElementById("cross-icon"); 
  let tickIconSm = document.getElementById("tick-icon-sm"); 
  let crossIconSm = document.getElementById("cross-icon-sm"); 
  
  if (correctAnswer) {
      //display tick icon if correct
     
      if (screen.width >993) {tickIcon.classList.remove("box-hide");}
        else if (screen.width <992) {crossIconSm.classList.add("box-cover");}
  
      correctAudio.play(); //plays audio file Code Credit - Stack Overflow https://stackoverflow.com/questions/9419263/how-to-play-audio
  
      setTimeout(function(){
          tickIcon.classList.add("box-hide"), crossIconSm.classList.remove("box-cover"); }, 1000);
         
          addCorrectScore();     
  }
  
  else {
  ////display cross icon if incorrect
  if (screen.width >993) {crossIcon.classList.remove("box-hide");}
        else if (screen.width <992) {tickIconSm.classList.add("box-cover");}
      
      incorrectAudio.play();

      setTimeout(function(){
          crossIcon.classList.add("box-hide"), tickIconSm.classList.remove("box-cover"); }, 1000);
  
      addIncorrectScore();
  }
  
  //***ADD SCORES***

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

  //***SET NEXT QUESTION*** */

//function to set the next question by loading the image relative to the global counter

function setNextQuestion() {
    document.getElementById("answer-field").value = ""; // Erases the last typed answer
    document.getElementById("answer-field").focus(); // Puts the cursor in the answer field
    document.getElementById("audio-clue").classList.add("box-hide"); //adds box cover to the audio controls again
    

    if (globalCounter < 10) {
        document.getElementById("question-image").src=questions[globalCounter].image; 
        document.getElementById("question-box").innerHTML=questions[globalCounter].question;
        document.getElementById("visual-clue").innerHTML="";
        document.getElementById("multi-choice-clue").innerHTML="";
        
      } else {
            endGame ();
      }  
      };


      //***HELP BOX***

      //***visual clues***

      //function to reveal a clue onclick of the Visual Help Btn
      let visualHelpButton = document.getElementById("visual-help-button");

      visualHelpButton.onclick = function() {
        showVisualClue();
        clickSound.play();
        this.disabled = true;
    };

      function showVisualClue() {
        document.getElementById("visual-clue").innerHTML=questions[globalCounter].visualclue;
        if (screen.width >= 576) {
          document.getElementById("answer-field").focus();// returns the cursor to the answer field but not for mobile
      }
    };

    //***audio clue***

      //function to reveal a clue onclick of the Audio Help Btn
      let audioHelpButton = document.getElementById("audio-help-button");
      let clickSound = document.getElementById("audio-click");

      audioHelpButton.onclick = function() {
        showAudioClue();
        clickSound.play();
        this.disabled = true;  
    };

      function showAudioClue() {
        document.getElementById("audio-clue").classList.remove("box-hide");
        document.getElementById("audio-clue").src=questions[globalCounter].audioclue;
        if (screen.width >= 576) {
          document.getElementById("answer-field").focus();// returns the cursor to the answer field but not for mobile
      }
      };

//***multi choice clue***

      //function to reveal a clue onclick of the Multi Choice Help Btn
      let multiHelpButton = document.getElementById("multi-help-button");

      multiHelpButton.onclick = function() {
        showMultiClue();
        clickSound.play();
        this.disabled = true; //disables the button after initial click **credit*** https://stackoverflow.com/questions/2323948/disabling-the-button-after-once-click
        //***BUG***** code displaying mutiple times
    };

      function showMultiClue() {
        document.getElementById("multi-choice-clue").classList.remove("box-cover");
        
        // *****attempt to populate the multi choice with a list item*****
        const multiChoice = questions[globalCounter].multichoice;
        for (let i = 0; i < multiChoice.length; i++) {
          const listItem = document.createElement('li');
          listItem.textContent = multiChoice[i];
          document.getElementById("multi-choice-clue").appendChild(listItem);
        }
    
        if (screen.width >= 576) {
          document.getElementById("answer-field").focus();// returns the cursor to the answer field but not for mobile
      }
    };
      

//***END GAME***
      //function to load end-box on completion of quiz and display the scores
      function endGame () {
        document.getElementById("logo-box").className = "box-cover"; //adds the the box-cover class to the logo-box
        document.getElementById("end-box").classList.remove("box-hide"); //removes the box-hide class from the end-box
        document.getElementById("game-box").className = "box-hide"; //adds the the box-hide class to the game-box

        let correctAnswers = document.getElementById("correct").innerText;
        let numOfQuestions = questions.length;
        let userName = document.getElementById("enter-name-box").value;

        //Ammends the end user message depending on score
        if ( correctAnswers <= 2) {
            document.getElementById("congrats-text").innerText= "Better luck next time";
        } else if (correctAnswers <= 5) {
            document.getElementById("congrats-text").innerText= "Good effort";
        } else if (correctAnswers >= 6) {
          document.getElementById("congrats-text").innerText= "Congratulations";
        };
          
        document.getElementById("player-name").innerText= userName;
        document.getElementById("correct-answers").innerText= correctAnswers;
        document.getElementById("num-of-questions").innerText= numOfQuestions;
      };



// question bank stored as an array ***DELETE ONCE JSON FILE IS WORKING***
// var questions = [
//     {      
//           question: "Can you name this animal?",
//           image: "assets/images/cat.jpg",
//          answer: "cat",
//          visualclue: "C _ _",
//          audioclue: "assets/audio/cat-audio.mp3"
//     },
//     {
//         question: "What do you see in the picture?",
//         image: "assets/images/car.jpg",
//         answer: "car",
//         visualclue: "C _ _",
//         audioclue: "assets/audio/file_example_MP3_700KB.mp3"
//     },
//     {
//         question: "Can you name this object?",
//         image: "assets/images/ball.jpg",
//          answer: "ball",
//          visualclue: "B _ _ _"
//     },
//     {      
//         question: "Can you name this fruit?",
//         image: "assets/images/orange.png",
//        answer: "orange",
//        visualclue: "O _ _ _ _ _"
//   },
//   {      
//     question: "What do you see in the picture?",
//     image: "assets/images/flower.jpg",
//    answer: "flower",
//    visualclue: "F _ _ _ _ _"
// },
// {
//     question: "Can you name this object?",
//     image: "assets/images/train.jpg",
//      answer: "train",
//      visualclue: "T _ _ _ _"
// },
// {      
//     question: "What do you see in the picture?",
//     image: "assets/images/moon.jpg",
//    answer: "moon",
//    visualclue: "M _ _ _"
// },
// {      
//     question: "Can you name this animal?",
//     image: "assets/images/rabbit.jpg",
//    answer: "rabbit",
//    visualclue: "R _ _ _ _ _"
// },
// {      
//     question: "What do you see in the picture?",
//     image: "assets/images/hat.jpg",
//    answer: "hat",
//    visualclue: "H _ _"
// },
// {
//     question: "Can you name this object?",
//     image: "assets/images/pencil.jpg",
//      answer: "pencil",
//      visualclue: "P _ _ _ _ _"
// }
// ]


//following code enables the user to submit the answer using the enter button on the keyboard ***CREDIT***W3Schools**

let answerField = document.getElementById("answer-field"); // targets the answer field
answerField.addEventListener("keyup", function(event) {  // Executes a function when the user releases the enter key on the keyboard
  if (event.keyCode === 13) { //default keycode for the enter button
    event.preventDefault();  // prevents the default action from occuring
    document.getElementById("submit-button").click();  // triggers the submit button
  }
});

//same as above but for enter user name on game start ***CREDIT***W3Schools**
let nameField = document.getElementById("enter-name-box");

nameField.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) { 
    event.preventDefault();
    document.getElementById("start-btn").click();
  }
});

//same as above but for play again button ***CREDIT***W3Schools** not working

// endBtn.addEventListener("keyup", function(event) {
//   if (event.keyCode === 13) { 
//     event.preventDefault();
//     document.getElementById("end-btn").click();
//   }
// });

// ***TURN ON MUTE BUTTON*** - source https://forums.tumult.com/t/muting-audio-or-video/1705

let muteBtn = document.getElementById("mute-button");
var isMuted = false;


muteBtn.onclick = function() {
muteAudio();
}

 function muteAudio(){

  if (isMuted === false) {
    isMuted=true;
  document.getElementById("audio-correct").muted = true;
  document.getElementById("audio-incorrect").muted = true;
  document.getElementById("audio-click").muted = true;
  document.getElementById("mute-btn-icon").classList.remove("fa-volume-off");
  document.getElementById("mute-btn-icon").classList.add("fa-volume-mute");
  document.getElementById("mute-button").classList.remove("mute-btn");
  document.getElementById("mute-button").classList.add("mute-btn-faded");
  }
  else if (isMuted === true) {
    isMuted=false;
    document.getElementById("audio-correct").muted = false;
    document.getElementById("audio-incorrect").muted = false;
    document.getElementById("audio-click").muted = false;
    document.getElementById("mute-btn-icon").classList.add("fa-volume-off");
    document.getElementById("mute-btn-icon").classList.remove("fa-volume-mute");
    document.getElementById("mute-button").classList.remove("mute-btn-faded");
    document.getElementById("mute-button").classList.add("mute-btn");
    }

    if (screen.width >= 576) {
      document.getElementById("answer-field").focus();// returns the cursor to the answer field but not for mobile
  }
};

//*********REFRESH PAGE BUTTON**********

let refreshBtn = document.getElementById("refresh-button");

refreshBtn.onclick = function() {
  clickSound.play();
  location.reload(); 
  };

//FUNCTION TO RESET THE GAME BUT NOT WORKING- start game removed now working **bug Fix
endBtn.onclick = function() {
  clickSound.play();
  window.location.reload(); 
};
  


//***JSON*** source - Book(J Duckett et al)****/

var xhr = new XMLHttpRequest();
xhr.onload = function() {
    if(xhr.status === 200){
        questions = JSON.parse(xhr.responseText);
    }
};

xhr.open("GET", "assets/js/questions.json", true);
xhr.send(null);






