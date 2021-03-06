# The Name Game - Testing 

[View deployed site here](https://aledpeart.github.io/theNameGame/index.html)
[README.md](https://github.com/AledPeart/theNameGame/blob/master/README.md)

I have tested my deployed site to ensure that it achieves the intended aims of the owner and the expectations of the users by meeting the user stories detailed in the [README.md](https://github.com/AledPeart/theNameGame/blob/master/README.md). I have also manually tested the deployed site across a number of different devices and browsers to ensure that the design, layout and functionality respond as intended. In addition the validity of my HTML, CSS and Javascript have been checked using the [W3C Markup](https://validator.w3.org/) , [CSS Validation Service](https://jigsaw.w3.org/css-validator/) and [JSONLint](https://jsonlint.com/). Finally I have used [Lighthouse](https://developers.google.com/web/tools/lighthouse) in Chrome DevTools to test the accessibility and performance of my site. The specific tests and results are detailed below:

## __Table of Contents__
1. [User Stories](#user-stories)
2. [Owner Stories](#owner-stories)
3. [Manual Functionality Testing](#manual-functionality-testing)
4. [Responsiveness](#responsiveness)
5. [Cross Browser Testing](#cross-browser-testing)
6. [Code Validation](#code-validation)
7. [Lighthouse Testing](#lighthouse-testing)
8. [Testing Results and Bugs](#testing-results-and-bugs)
   - [Resolved Bugs](#resolved-bugs)
   - [Unresolved Bugs](#unresolved-bugs)



## User Stories

 ### **As a user I want to access a fully functioning web application that enables me to practice and improve my word finding strategies**.  
 
 ![supporting screenshot](https://github.com/AledPeart/theNameGame/blob/master/assets/images/screen-shot-1-game.png) 
 
-	Fully functioning game with a clear layout and purpose
-	Users interact with the game by trying to name the pictures they see on screen
-	Users given instant feedback on whether the question is correct or incorrect
-	Multiple hints offered to users to prompt and guide them towards the answer
-	Hints offered in different forms to target different neural pathways
-	Images are clear and unambiguous

### **As a user I want the web application to be clear and uncluttered and present information to me in a cohesive manner**.  

-	Layout is uncluttered and visually pleasing
-	Clearly defined areas, which are distinct and separated visually from each other
-	Game responds in a logical way when viewed on smaller devices.
-	Some features removed or scaled appropriately when viewing on smaller devices
- 	???Start??? and ???End??? screens to logically frame and contextualize the game for the user 


### **As a user I want the web application to use icons and colors to help my understanding of what is required**.  

![supporting screenshot](https://github.com/AledPeart/theNameGame/blob/master/assets/images/screen-shot-2-icons-colors.png) 

-	Strong colors used to emphasize buttons
-	Use of icons to reinforce meaning and to reduce unnecessary ???clutter??? on screen
-	Use of appropriate colours (red & green) to re-enforce context and meaning 

### **As a user I want to be shown a number of clear well presented images for me to identify**.  

![supporting screenshot](https://github.com/AledPeart/theNameGame/blob/master/assets/images/screen-shot-3-image.png) 

-	Images are clear and unambiguous
-	Everyday ???high frequency??? objects are used 
-	Objects shown in isolation, against plain backgrounds to avoid unnecessary distraction
- 	Objects are varied

### **As a user I want to be able to input my answer using the computer keyboard**.  

- Answer input fields support the user to enter the answer using a keyboard
-	Users are able to submit the answer by either clicking on the ???Enter??? button or by hitting the ???Enter??? button on their keyboard

### **As a user I want to be offered some additional prompts if I am struggling to name an object**.  

![supporting screenshot](https://github.com/AledPeart/theNameGame/blob/master/assets/images/screen-shot-7-clues.png) 

-	Multiple hints offered to users to prompt and guide them towards the answer
-	Hints offered in different forms to aid the different neural pathways that the user maybe having difficulty with

### **As a user I want to receive clear confirmation if my answer is correct or incorrect and see my score as I progress through the game**.  

![supporting screenshot](https://github.com/AledPeart/theNameGame/blob/master/assets/images/screen-shot-4-Score.png) 

-	Users given clear instant feedback on whether the question is correct or incorrect
-	Users shown a running total of their score as the game progresses
-	Users given a summary of their score at the end of the game
-	Additional feedback given to the users by appropriate use of color to convey meaning

### **As a user I want to receive clear instructions on how the game works**.  

![supporting screenshot](https://github.com/AledPeart/theNameGame/blob/master/assets/images/screen-shot-9-instructions.png) 

-	Users can click the information icon to see comprehensive game instructions.
-	Users can close the modal box easily and re-visit it at any point in the game

### **As a user I want to be able to refresh the game and start again**.  

![supporting screenshot](https://github.com/AledPeart/theNameGame/blob/master/assets/images/screen-shot-5-mute-refresh.png) 

-	Users can click the refresh icon button and restart the game at any point

### **As a user I want to be able to 'mute' the sound during the game**.  

-	Users can click on the mute icon in order to mute the game sounds at any point.
-	Users can click the icon again to un-mute the game sounds
-	The icon changes to give users visual feedback as to whether the game is muted or not


## Owner Stories


### **As the owner I want to test the users word retrieval**.  


-	Fully functioning game with a clear layout and purpose
-	Users interact with the game by trying to name the pictures they see on screen
-	Users input an answer and the result of their answer is recorded


### **As the owner I want the user to be shown a series of ???high frequency nouns???**.  

-	Everyday ???high frequency??? nouns are used 
- Common evryday objects specifically chosen for the game 


### **As the owner I want the user to be offered some additional prompts if they are unable to name an object.**.  

-	Multiple hints offered to users to prompt and guide them towards the answer


### **As the owner I want the additional prompts offered to the user to be both visual and auditory**.  

![supporting screenshot](https://github.com/AledPeart/theNameGame/blob/master/assets/images/screen-shot-7-clues.png)

-	Visual and auditory hints have been used 
-	Hints offered in different forms to aid the different neural pathways that the user maybe having difficulty with


### **As the owner I want a breakdown of the users correct and incorrect answers**.  

![supporting screenshot](https://github.com/AledPeart/theNameGame/blob/master/assets/images/screen-shot-6-end-screen.png) 

-	End game screen shows a breakdown of the correct and incorrect answers


### **As the owner I want to receive the users overall score on completing the game**.  

-	End game screen shows the users overall score


### **As the owner I want a breakdown of the additional prompts given to the user in order to assess which neural pathways the user was having difficulty with**.  

-	It is intended that the functionality to store this data and provide therapists with a breakdown of which prompts the users needed, and the corresponding neural pathways that may be affected will be part of a future update.



## Manual Functionality Testing

### Start Screen

#### Does the start screen load and perform as expected?

* __Test__- Does the start screen appear when the web page is loaded, and is the layout as expected?   
__Result__??? The result was as expected.

* __Test__??? Does the cursor external link work correctly and open in a new window?   
__Result__??? The result was as expected.

* __Test__??? Does the cursor automatically appear in the name field?   
__Result__??? The result was as expected.

* __Test__??? Does the name field allow the user to enter their name?   
__Result__??? The result was as expected.

* __Test__??? Does the input field require the user to enter their name?   
__Result__??? The result was not as expected.

* __Test__??? Is the submit button disabled until the user has entered something in the name field?   
__Result__??? The result was as expected.

* __Test__??? Does the ???Enter??? key on the keyboard replicate a click of the ???Start Game??? button?   
__Result__??? The result was as expected.

* __Test__??? Is the user required to not only enter blank spaces in the name field?   
__Result__??? The result was as expected.

* __Test__??? If the user enters only blank spaces, are they shown the alert box?   
__Result__??? The result was as expected.

* __Test__??? When clicked, does the ???Start Game??? button launch the main game?   
__Result__??? The result was as expected.


### Main Game Screen

#### Does the main game screen load and appear as expected?

* __Test__- Does the game screen appear when the web page is loaded, and is the layout as expected?   
__Result__??? The result was as expected.


#### Does the game logo and the 3 navigation items appear and perform as expected?

* __Test__??? Does the game logo appear at the top of the screen above the game box?   
__Result__??? The result was as expected.

* __Test__??? Do the 3 navigation items appear at the top of the screen above the game box?   
__Result__??? The result was as expected.

* __Test__??? When clicked does the volume icon mute all sound on the site (apart from the audio clue)?   
__Result__??? The result was as expected.

* __Test__??? When clicked does the volume icon fade and display an ???x??? to indicate the volume is muted?   
__Result__??? The result was as expected.

* __Test__??? When clicked again does the volume icon un-mute all sound on the site (apart from the audio clue)?   
__Result__??? The result was as expected.

* __Test__??? When clicked again does the volume icon return to its original state?   
__Result__??? The result was as expected.

* __Test__??? When clicked does the information icon launch the game instructions modal?   
__Result__??? The result was as expected.

* __Test__??? When clicked does the ???close??? button close the modal?   
__Result__??? The result was as expected.

* __Test__??? When clicked does the ???refresh??? icon refresh the page and return the user to the start screen?   
__Result__??? The result was as expected.

#### Does the game box appear and perform as expected?

* __Test__??? Does the game box appear as expected, the picture box is located on the left hand side of the page and the question box on the right hand side?   
__Result__??? The result was as expected.

* __Test__??? Does the picture box appear as expected and contain the initial image of a cat?   
__Result__??? The result was as expected.

* __Test__??? Does the question area contain the question text, the answer field and the ???Enter??? button?   
__Result__??? The result was as expected.

* __Test__??? Does the cursor automatically appear in the answer field?   
__Result__??? The result was as expected.	

* __Test__??? Does the ???Enter??? button function with a click of the mouse and when the ???Enter button is pressed on the keyboard?   
__Result__??? The result was as expected.

* __Test__??? Is the user able to type an answer into the answer field?   
__Result__??? The result was as expected.

#### Does the next question and the associated functionality perform as expected when the user submits an incorrect answer?

* __Test__??? If the user enters an incorrect or a blank answer into the answer field, on clicking the ???Enter??? button does the ???incorrect??? icon appear?   
__Result__??? The result was as expected.

* __Test__??? If the user enters an incorrect or a blank answer into the answer field, and the sound icon is un-muted, on clicking the ???Enter??? button does the ???incorrect??? sound play?   
__Result__??? The result was as expected.

* __Test__??? After the ???incorrect??? icon appears does it disappear and the next question text load correctly?   
__Result__??? The result was as expected.

* __Test__??? After the ???incorrect??? icon appears does it disappear and the next question image load correctly?   
__Result__??? The result was as expected.

#### Does the next question and the associated functionality perform as expected when the user submits a correct answer?

* __Test__??? If the user enters a correct answer into the answer field, on clicking the ???Enter??? button does the ???correct??? icon appear?   
__Result__??? The result was as expected.

* __Test__??? If the user enters an answer in uppercase and lowercase text, the ???correct??? icon should appear regardless?   
__Result__??? The result was as expected.

* __Test__??? If the user enters a correct answer into the answer field, and the sound icon is un-muted, on clicking the ???Enter??? button does the ???correct??? sound play?   
__Result__??? The result was as expected.

* __Test__??? After the ???correct??? icon appears does it disappear and the next question text load correctly?   
__Result__??? The result was as expected.

* __Test__??? After the ???correct??? icon appears does it disappear and the next question image load correctly?   
__Result__??? The result was as expected.

#### Does the ???Help??? section, appear and function as expected?

* __Test__??? Does the ???Help??? box appear as expected, in the correct order with the correct icons?   
__Result__??? The result was as expected.

* __Test__??? On clicking the ???Visual??? clue button is the correct clue revealed beneath?   
__Result__??? The result was as expected.

* __Test__??? On clicking the ???Audio??? clue button is the audio player revealed beneath, and is the correct audio played to describe each picture?   
__Result__??? The results were as expected.

* __Test__??? Does the audio player display the correct controls (play/pause, scroll and mute)?   
__Result__??? The result was as expected.

* __Test__??? On clicking the ???Choice??? clue button are the three relevant answers revealed beneath?   
__Result__??? The result was as expected.

* __Test__??? Following the initial click, are the buttons disabled, and the clues remain visible?   
__Result__??? The result was as expected.

* __Test__??? Does the cursor automatically return to the answer field, after a clue has been revealed?   
__Result__??? The result was as expected.

* __Test__??? Do the clues reset when the user submits an answer and does a new set of clues load for each question?   
__Result__??? The result was as expected.

* __Test__??? Does the cursor automatically appear in the name field?   
__Result__??? The result was as expected.

#### Does the ???Scoreboard??? section, appear and function as expected?

* __Test__??? Does the username entered in the start screen populate the scoreboard in the correct place?   
__Result__??? The result was as expected.

* __Test__??? Does the scoreboard appear as expected with the username above the correct and incorrect answers respectively?   
__Result__??? The result was as expected.

* __Test__??? Are the correct and incorrect scores set to 0 when the page initially loads?   
__Result__??? The result was as expected.

* __Test__??? Does the correct score display in green and the incorrect score display in red?   
__Result__??? The result was as expected.

* __Test__??? Does the correct score increment by one point each time the user submits a correct answer?   
__Result__??? The result was as expected.

* __Test__??? Does the incorrect score increment by one point each time the user submits an incorrect answer?   
__Result__??? The result was as expected.

### Game End Screen

#### Does the game end section, appear and function as expected?

* __Test__- Does the end game screen screen appear when the user has been shown 10 questions?    
__Result__??? The result was as expected.

* __Test__??? Does the end game screen as expected, contain the game logo and contain a message informing the user that that is the end of the game?   
__Result__??? The result was as expected.

* __Test__??? Does the end game screen display the user???s score correctly out of 10?   
__Result__??? The result was as expected.

* __Test__??? If the user scores 2 points or under does the message say ???Better luck next time??? ?   
__Result__??? The result was as expected.

* __Test__??? If the user scores between 3 and 5 points does the message say ???Good effort??? ?   
__Result__??? The result was as expected.

* __Test__??? If the user scores between 3 and 5 points does the message say ???Congratulations??? ?   
__Result__??? The result was as expected.

* __Test__??? Does the ???Play Again??? button display and when clicked does it send the user to the start game screen?   
__Result__??? The result was as expected.

### 404 Page

#### Does the 404 page load and perform as expected?

* __Test__- Does the 404 page appear when user is directed to a non existant page, and is the layout as expected?      
__Result__??? The result was as expected.

* __Test__- Does the link provided send the user back to the start screen?       
__Result__??? The result was as expected.



## Responsiveness 

I have tested my site across various screen widths in order to best replicate the breadth of modern viewing devices, in order to ensure that the site responds and performs as expected. For the purpose of testing in this document I have written results relating to 3 screen widths. This is to avoid unnecessary repetition, and is also in line with the Bootstrap ???breakpoints??? I adhered to when building the website:

* Small		<768px  
* Medium	768-992px  
* Large		>992px  

These tests were carried out using Chrome DevTools to adjust the screen size and view the website at the designated screen widths.


### Small

#### Start Game Screen

* __Test__??? The game logo should appear at the top of the screen above the ???Enter Name??? field and the ???Start Game??? button.    
__Result__??? The result was as expected.

* __Test__??? The text boxes should be stacked appropriately and adhere to the intended design   
__Result__??? The result was as expected.

#### Main Game Screen

* __Test__??? The layout appears as expected; each of the columns stack appropriately on top of each other with adequate spacing.     
__Result__??? The result was as expected.

* __Test__??? The question text does not change and is positioned below the question image   
__Result__??? The result was as expected.

* __Test__??? The ???Enter??? button is positioned underneath the answer field, and the correct and incorrect icons are both displayed and are positioned to the right of the ???Enter??? button.   
__Result__??? The result was as expected.

* __Test__??? All images render correctly and maintain their original ratio with no distortion     
__Result__??? The result was as expected.

* __Test__??? The ???Help??? box is positioned underneath the ???Game??? section and the buttons are stacked in a single column.   
__Result__??? The result was as expected.

* __Test__??? When clicked the clues are revealed underneath each button and the containing box expands appropriately.   
__Result__??? The result was as expected.

* __Test__??? The ???Score??? box is positioned underneath the ???Help??? box and the player, correct and incorrect fields are stacked in a single column.   
__Result__??? The result was as expected.


#### End Game Screen

* __Test__??? The game logo should appear at the top of the screen above the congratulations message and the ???Play Again??? button.    
__Result__??? The result was as expected.

* __Test__??? The text boxes should be stacked appropriately and adhere to the intended design   
__Result__??? The result was as expected.

#### 404 Page

* __Test__- The game logo should appear at the top of the screen above the 'page not found' message and the re-direct button. The text should reduce in size and be in proportion to the screen.     
__Result__??? The result was as expected.


### Medium	

#### Start Game Screen

* __Test__??? The game logo should appear at the top of the screen above the ???Enter Name??? field and the ???Start Game??? button.    
__Result__??? The result was as expected.

* __Test__??? The text boxes should be stacked appropriately into 3 columns and adhere to the intended design   
__Result__??? The result was as expected.

#### Main Game Screen

* __Test__??? The layout appears as expected; and each of the columns stack appropriately on top of each other with adequate spacing.     
__Result__??? The result was as expected.

* __Test__??? The question text does change with each image but is still positioned below the question image.   
__Result__??? The result was as expected.

* __Test__??? The ???Enter??? button is positioned underneath the answer field, and the correct and incorrect icons are both displayed and are positioned to the right of the ???Enter??? button.   
__Result__??? The result was as expected.

* __Test__??? All images render correctly and maintain their original ratio with no distortion     
__Result__??? The result was as expected.

* __Test__??? The ???Help??? box is positioned underneath the ???Game??? section and the buttons are stacked in a single column.   
__Result__??? The result was as expected.

* __Test__??? When clicked the clues are revealed underneath each button and the containing box expands appropriately.   
__Result__??? The result was as expected.

* __Test__??? The ???Score??? box is positioned underneath the ???Help??? box and the player, correct and incorrect fields are stacked in a single column.   
__Result__??? The result was as expected.


#### End Game Screen

* __Test__??? The game logo should appear at the top of the screen above the congratulations message and the ???Play Again??? button.    
__Result__??? The result was as expected.

* __Test__??? The text boxes should be stacked appropriately in 3 columns and adhere to the intended design   
__Result__??? The result was as expected.

#### 404 Page

* __Test__- The game logo should appear at the top of the screen above the 'page not found' message and the re-direct button. The text should have increased in size.        
__Result__??? The result was as expected.



### Large	

#### Start Game Screen

* __Test__??? The game logo should appear at the top of the screen above the ???Enter Name??? field and the ???Start Game??? button.    
__Result__??? The result was as expected.

* __Test__??? The text boxes should be stacked appropriately into 3 columns and adhere to the intended design   
__Result__??? The result was as expected.

#### Main Game Screen

* __Test__??? The layout adheres to the intended design; the question image is positioned on the left hand side, and the question box is on the right hand side   
__Result__??? The result was as expected.

* __Test__??? The question text does changes with each image and is positioned above the answer field.   
__Result__??? The result was as expected.

* __Test__??? The ???Enter??? button is positioned underneath the answer field.   
__Result__??? The result was as expected.

* __Test__??? The correct and incorrect icons are not displayed until the user enters an answer. They then appear for a short time in-between the picture box and the question box.   
__Result__??? The result was as expected.

* __Test__??? All images render correctly and maintain their original ratio with no distortion     
__Result__??? The result was as expected.

* __Test__??? The ???Help??? box is positioned underneath the ???Game??? section to the left hand side and occupies 2/3 of the width of the main game container.   
__Result__??? The result was as expected.

* __Test__??? The help buttons are positioned in a row and are equally spaced within the help box.   
__Result__??? The result was as expected.

* __Test__??? When clicked the clues are revealed underneath each button, but do not overflow the containing box.   
__Result__??? The result was as expected.

* __Test__??? The ???Score??? box is positioned to the right of the ???Help??? box and occupies 2/3 of the width of the main game container.   
 __Result__??? The result was as expected.

* __Test__??? The player, correct and incorrect fields are stacked in a single column.   
 __Result__??? The result was as expected.

 
#### End Game Screen

* __Test__??? The game logo should appear at the top of the screen above the congratulations message and the ???Play Again??? button.    
__Result__??? The result was as expected.

* __Test__??? The text boxes should be stacked appropriately in 3 columns and adhere to the intended design   
__Result__??? The result was as expected.

#### 404 Page

* __Test__- The game logo should appear at the top of the screen above the 'page not found' message and the re-direct button.      
__Result__??? The result was as expected.



## Cross-Browser Testing

I have tested this web application across different browsers at different device sizes. The other browsers I have tested are Safari and Firefox, which combined with Chrome, account for almost 90% of browser usage (source: (www.browserstack.com) I tested the site on these browsers, and on the physical devices, which I have access to, namely:

*	A large screen desktop
*	Laptop
*	Tablet
*	Mobile device

I followed the same testing criteria that I used for my Manual Testing, but I have not detailed the results of the tests in full here as I feel it would prove too lengthy for it???s intended purpose. I have however summarized the results and the issues encountered below, in terms of the application's responsiveness and functionality. 

### Responsiveness

#### Large Screen Desktop

__Firefox__ ??? No Issues Found   
__Safari__ ???  No Issues Found   

#### Laptop

__Firefox__ ???  No Issues Found      
__Safari__ ???  No Issues Found   

#### Tablet 

__Firefox__ ???  Correct and Incorrect Icons not displaying at the intersection of the medium/large breakpoint     
__Safari__   Correct and Incorrect Icons not displaying at the intersection of the medium/large breakpoint    

#### Mobile 

__Firefox__ ???  No Issues Found   
__Safari__ ???  No Issues Found     

### Functionality 

__Firefox__ ??? When reloading the game the start screen name field would pre-populate with the user's name from the previous game.

__Safari__ ??? Audio clue files not playing. Audio controls in Safari displaying a 'pause' icon when it should have displayed a play icon.

## Code Validation

While developing I have regularly validated my HTML and CSS using [W3C Markup](https://validator.w3.org/), [CSS Validation Service](https://jigsaw.w3.org/css-validator/) and [JSHint]( https://jshint.com/).  
Errors and Warnings that were highlighted to me that I addressed during the project were:
* Missing closing __</div>__ tags
* __section__ tags that did not have an __h1__ or an __h2__ as a direct child
* Incorrect use of __type__ attribute for audio files
* Missing __alt__ tag on an image
* Missing __:__ and __}__ in my __style.css__ file
* Missing and unnecessary semicolons in my __script.js__ file
* An unused, and an undefined variable in my __script.js__ file

I also tested my JSON file using [JSONLint] (https://jsonlint.com/) which confirmed it to be valid JSON.

At the time of submission the results are showing no errors (see screenshots below)

![index.html](https://github.com/AledPeart/theNameGame/blob/master/assets/images/index.html-screenshot)     



![404.html](https://github.com/AledPeart/theNameGame/blob/master/assets/images/404.html-screenshot)     



![style.css](https://github.com/AledPeart/theNameGame/blob/master/assets/images/css-screenshot)          



![script.js](https://github.com/AledPeart/theNameGame/blob/master/assets/images/screen-shot-11-jshint.png)    



![questions.json](https://github.com/AledPeart/theNameGame/blob/master/assets/images/screen-shot-10-json.png)      



 


## Lighthouse Testing

I have used [Lighthouse](https://developers.google.com/web/tools/lighthouse) in Chrome DevTools to test the accessibility and performance of my site. The initial test gave me the following results:   

![Lighthouse screenshot](https://github.com/AledPeart/theNameGame/blob/master/assets/images/screen-shot-12-lighthouse-before.png)   

I implemented the following recommendations made in the report:
1. Increased the contrast and visibilty of external links by darkening the colour and underlining them
2. Adding __rel="noopener"__ to external links in order to reduce the site's  vulnerabilit
Following these changes I re-ran the Lighthouse tests and the improved scores can be seen below   

![Lighthouse screenshot](https://github.com/AledPeart/theNameGame/blob/master/assets/images/screen-shot-12-lighthouse-after.png)     


## Testing Results and Bugs

I was regularly testing my code during the development process and as such a number of bugs and errors were found and fixed that way. I have detailed the more significant ones here, and those that were found during testing, as well as some that are as yet unresolved.

### Resolved Bugs

#### Multi Choice Clue   
The multiple-choice clue was appearing multiple times when clicked; essentially the on-click function was being run over and over again, causing this to happen. 

![bug screenshot 1](https://github.com/AledPeart/theNameGame/blob/master/assets/images/bug1.png)   

In order to fix this I was able to find a way to disable the button after it had been clicked once (on Stack overflow ??? full credit in the code), by using    

```this.disabled = true;```       

This solution works well as the user has already accessed the clue and the code is reset for the next question.

#### Audio File
I discovered that the audio clue file would not automatically stop when the user had submitted an answer. This is not an issue if the user waits until the audio has finished before submitting an answer but if they submit an answer before the audio has finished, the next question is set and all the while the audio continues to play. I was able to fix this issue by adding writing following function to my code, which was adapted from a similar issue I discovered on Stack Overflow (full credit in the code). 

```
function audioPause() {
  let cluePlayer = document.getElementById("audio-clue").src = questions[globalCounter].audioclue;
  cluePlayer.pause;
}
```

This function has been set to run when the user clicks the button to submit their answer, and effectively pauses the audio before it is reset when the next question loads.

#### Username Validation

The username field on the start game page requires the user to submit an entry otherwise the submit button does not activate. However during testing I discovered that users were able to enter a blank space, and unwittingly bypass those controls. The reason being that the code that controls this: 
```
if ((nameBox).value == "") {
    startBtn.disabled = true;
  ```
    
 recognises a blank space as not equaling _""_. In order to ensure that users were not able to do this I created a new function to verify the users input:
 ```
 function verify() {
  let usersName = document.getElementById("enter-name-box").value;
  if (!/[a-zA-Z]/.test(usersName)) {
    alert("Please try again, but using only letters.");
    document.getElementById("enter-name-box").focus();
  } else {
    clickSound.play();
    startGame();
    displayUserName();
  }
}
```
This function uses an if statement to test that the username entered contains letters between _a-z_ (and recognises uppercase too), and therefore will not allow only blank spaces. If a blank space is entered, the user is alerted that they should try again, else the subsequent functions run, and the user is taken to the main game page (Function amended from a similar one on Stack Overflow, full credit in the code).

#### Image Load Speed

I discovered that the questions and images were loading at differen speeds, and this made for a poor user experience. Fortunately I was able to rectify this quite easily by adjusting the timeout settings in my _script.js_ file. These had been set initially to allow the _correct_ and _incorrect_ graphic icon to display before the next question had been set. By adjusting these settings I was able to achieve the effect I wanted and align the picture and question load speeds. I was satisfied with this outcome but when testing the deployed site on different browsers the results were mixed - this issue remains unresolved and I have given more detail below.

#### Cursor Issue on Mobile devices

When testing on mobile devices I noticed that the following code to place the cursor automatically in the appropriate answer field was not having the desired effect.

```document.getElementById("enter-name-box").focus();```

This is a nice feature when the user is using a keyboard and makes for a pleasant user experience, but on mobile devices this would automatically load the devices screen keyboard which would cover the intended entry field making for a frustrating experience. I decided to disable this feature on mobile devices, as I feel when using a handheld device people are much more accustomed to using the screen and placing the cursor where they want it, and overall it made for a better experience. To achieve this I added the following if statement to the existing code:
```
if (screen.width >= 576) {
    document.getElementById("answer-field").focus(); // returns the cursor to the answer field but not for mobile
  }
```
#### JSHint

When validating my Javascript code in JSHint, I was given a number of warnings regarding 
* using _let_ to define variables 
* issues with global variables being seen as undefined
* the use of expressions within a function

After a general internet search and a look at the experiences of my fellow students on Slack as well as a chat with the tutor team, I settled on adding the following comments to the top of my script.js file to ensure that JSHint was aware that ES6 was being used, and that the _questions_ variable was defined globally as part of my xhr code. An additional line was added which allows the use of an expression within the _audioPause_ function:

```/*jshint esversion: 6 */```  source:[slack forum](https://code-institute-room.slack.com/archives/C0L316Z96/p1621775494226400?thread_ts=1621773144.225600&cid=C0L316Z96)    

```/* global questions:true */```   source:[jshint](https://jshint.com/docs/)   

```/* jshint expr: true */```  source: [stackoverflow](https://stackoverflow.com/questions/8108184/why-does-jshint-not-recognize-an-assignment-as-an-expression)     


#### Correct and Incorrect Answer Icons Not Displaying    
When testing my deployed site on different browsers, I discovered an error in my code that meant the correct and incorrect answer icons, would not display at the large breakpoint. After investigating I realised that the following _if_ statement (intended to display reduced icons on smaller screens) was incorrectly written so that at screen widths of 992 and 993 px, icons would not be displayed:

```
    if (screen.width > 993) {
      crossIcon.classList.remove("box-hide");
    } else if (screen.width < 992) {
      tickIconSm.classList.add("box-cover");
    }
```
By ammending the statement to include a greater than or equal to operator, the issue was resolved:  
     
    
    if (screen.width >= 992) {
      crossIcon.classList.remove("box-hide");
    } else if (screen.width <= 991) {
      tickIconSm.classList.add("box-cover");
    } 
    
#### Audio File Issue - Safari

My audio files were not playing when the site was tested on the _Safari_ browser. I had been using _ogg_ files, but these were not readable by _Safari_, so I converted all the _ogg_ files to the _mp3_ format instead which are readable by all modern browswers.

#### Name Field pre-filled - Firefox
When testing the application using the _Firefox_ browser I discovered that upon refreshing the game the user's name was pre-filled automatically in the _enter name_ field

![firefox bug screenshot](https://github.com/AledPeart/theNameGame/blob/master/assets/images/firefox-bug.png)  

I was able to resolve this by adding the following code to the _window.onload_ function to ensure the field was blank:

```document.getElementById("enter-name-box").value = "";```

### Unresolved Bugs

Limited time meant I had to prioritise the resolution of the larger bugs and issues I found, meaning that some of the smaller issues I discovered, which I felt were not impacting the functionality of the application, or the users experience are as yet unresolved. I have detailed them below and intend to address them as part of future updates.

#### Images and Questions Load Speeds

When testing the deployed site on different browsers I became aware that the questions and images were being loaded at varying speeds on different browsers. On Firefox and Safari for example the image loads fractionally slower that the corresponding question. On chrome the issues is not discenable to my eye. This will require futher investigation in order to resolve.

#### Permissions Policy Issue
The folowing warning message is diplayed in the console when using the _Chrome_ browser     

```Error with Permissions-Policy header: Unrecognized feature: 'interest-cohort'```

Having searched on _Slack_ I found other students with a similar issue and a [forum post](https://github.community/t/i-have-no-idea-what-the-interest-cohort-is/179780) explaining the cause, as a measure _GitHub Pages_ have taken to disable Google's FLoC policy and protect user's privacy. This matter is beyond my control, and at the time of writing the warning was still appearing in the console in Chrome's DevTools.

#### Safari Audio Controls Issue

I detected an issue when using the audio controls in _Safari_. The _audioPause_ function will reset the audio clue if the user enters an answer midway through the clue being played in _Firefox_ and _Chrome_, however in _Safari_ when re-opening the clue on a subsequent question the audio control _pause_ button is initially dislayed instead of the _play_ button. This means the user has to toggle the button to make the clue play. The correct clue does play, but in order to fully resove this issue I will need to investigate it further.




