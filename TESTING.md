# The Name Game - Testing 

[README.md](https://github.com/AledPeart/MS1-Aled-Garfield-Photography/blob/master/README.md)

I have tested my site to ensure that it achieves the intended aims of the owner and the expectations of the users by meeting the user stories detailed in the [README.md](https://github.com/AledPeart/…………./README.md). I have also manually tested my site across a number of different devices and browsers to ensure that the design, layout and functionality respond as intended. In addition the validity of my HTML, CSS and Javascript have been checked using the [W3C Markup](https://validator.w3.org/) , [CSS Validation Service](https://jigsaw.w3.org/css-validator/) and (***INSERT JS TESTING HERE). Finally I have used [Lighthouse](https://developers.google.com/web/tools/lighthouse) in Chrome DevTools to test the accessibility and performance of my site. The specific tests and results are detailed below:

## User/Patient Stories

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
- 	‘Start’ and ‘End’ screens to logically frame and contextualize the game for the user 


### **As a user I want the web application to use icons and colors to help my understanding of what is required**.  

![supporting screenshot](https://github.com/AledPeart/theNameGame/blob/master/assets/images/screen-shot-2-icons-colors.png) 

-	Strong colors used to emphasize buttons
-	Use of icons to reinforce meaning and to reduce unnecessary ‘clutter’ on screen
-	Use of appropriate colours (red & green) to re-enforce context and meaning 

### **As a user I want to be shown a number of clear well presented images for me to identify**.  

![supporting screenshot](https://github.com/AledPeart/theNameGame/blob/master/assets/images/screen-shot-3-image.png) 

-	Images are clear and unambiguous
-	Everyday ‘high frequency’ objects are used 
-	Objects shown in isolation, against plain backgrounds to avoid unnecessary distraction
- 	Objects are varied

### **As a user I want to be able to input my answer using the computer keyboard**.  

- Answer input fields support the user to enter the answer using a keyboard
-	Users are able to submit the answer by either clicking on the ‘Enter’ button or by hitting the ‘Enter’ button on their keyboard

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


## Owner/Therapist Stories


### **As the owner I want to test the users word retrieval**.  


-	Fully functioning game with a clear layout and purpose
-	Users interact with the game by trying to name the pictures they see on screen
-	Users input an answer and the result of their answer is recorded


### **As the owner I want the user to be shown a series of ‘high frequency nouns’**.  

-	Everyday ‘high frequency’ nouns are used 
- Common and objects specifically chosen for the game 


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
__Result__– The result was as expected.

* __Test__– Does the cursor external link work correctly and open in a new window?   
__Result__– The result was as expected.

* __Test__– Does the cursor automatically appear in the name field?   
__Result__– The result was as expected.

* __Test__– Does the name field allow the user to enter their name?   
__Result__– The result was as expected.

* __Test__– Does the input field require the user to enter their name?   
__Result__– The result was not as expected.

* __Test__– Is the submit button disabled until the user has entered something in the name field?   
__Result__– The result was as expected.

* __Test__– Does the ‘Enter’ key on the keyboard replicate a click of the ‘Start Game’ button?   
__Result__– The result was as expected.

* __Test__– Is the user required to only enter letters  in the name field?   
__Result__– The result was as expected.

* __Test__– If the user enters something other than letters in the name field, are shown the alert box?   
__Result__– The result was as expected.

* __Test__– When clicked, does the ‘Start Game’ button launch the main game?   
__Result__– The result was as expected.


### Main Game Screen

#### Does the main game screen load and appear as expected?

* __Test__- Does the game screen appear when the web page is loaded, and is the layout as expected?   
__Result__– The result was as expected.


#### Does the game logo and the 3 navigation items appear and perform as expected?

* __Test__– Does the game logo appear at the top of the screen above the game box?   
__Result__– The result was as expected.

* __Test__– Do the 3 navigation items appear at the top of the screen above the game box?   
__Result__– The result was as expected.

* __Test__– When clicked does the volume icon mute all sound on the site (apart from the audio clue)?   
__Result__– The result was as expected.

* __Test__– When clicked does the volume icon fade and display an ‘x’ to indicate the volume is muted?   
__Result__– The result was as expected.

* __Test__– When clicked again does the volume icon un-mute all sound on the site (apart from the audio clue)?   
__Result__– The result was as expected.

* __Test__– When clicked again does the volume icon return to its original state?   
__Result__– The result was as expected.

* __Test__– When clicked does the information icon launch the game instructions modal?   
__Result__– The result was as expected.

* __Test__– When clicked does the ‘close’ button close the modal?   
__Result__– The result was as expected.

* __Test__– When clicked does the ‘refresh’ icon refresh the page and return the user to the start screen?   
__Result__– The result was as expected.

#### Does the game box appear and perform as expected?

* __Test__– Does the game box appear as expected, the picture box is located on the left hand side of the page and the question box on the right hand side?   
__Result__– The result was as expected.

* __Test__– Does the picture box appear as expected and contain the initial image of a cat?   
__Result__– The result was as expected.

* __Test__– Does the question area contain the question text, the answer field and the ‘Enter’ button?   
__Result__– The result was as expected.

* __Test__– Does the cursor automatically appear in the answer field?   
__Result__– The result was as expected.	

* __Test__– Does the ‘Enter’ button function with a click of the mouse and when the ‘Enter button is pressed on the keyboard?   
__Result__– The result was as expected.

* __Test__– Is the user able to type an answer into the answer field?   
__Result__– The result was as expected.

#### Does the next question and the associated functionality perform as expected when the user submits an incorrect answer?

* __Test__– If the user enters an incorrect or a blank answer into the answer field, on clicking the ‘Enter’ button does the ‘incorrect’ icon appear?   
__Result__– The result was as expected.

* __Test__– If the user enters an incorrect or a blank answer into the answer field, and the sound icon is un-muted, on clicking the ‘Enter’ button does the ‘incorrect’ sound play?   
__Result__– The result was as expected.

* __Test__– After the ‘incorrect’ icon appears does it disappear and the next question text load correctly?   
__Result__– The result was as expected.

* __Test__– After the ‘incorrect’ icon appears does it disappear and the next question image load correctly?   
__Result__– The result was as expected.

#### Does the next question and the associated functionality perform as expected when the user submits a correct answer?

* __Test__– If the user enters a correct answer into the answer field, on clicking the ‘Enter’ button does the ‘correct’ icon appear?   
__Result__– The result was as expected.

* __Test__– If the user enters an answer in uppercase and lowercase text, the ‘correct’ icon should appear regardless?   
__Result__– The result was as expected.

* __Test__– If the user enters a correct answer into the answer field, and the sound icon is un-muted, on clicking the ‘Enter’ button does the ‘correct’ sound play?   
__Result__– The result was as expected.

* __Test__– After the ‘correct’ icon appears does it disappear and the next question text load correctly?   
__Result__– The result was as expected.

* __Test__– After the ‘correct’ icon appears does it disappear and the next question image load correctly?   
__Result__– The result was as expected.

#### Does the ‘Help’ section, appear and function as expected?

* __Test__– Does the ‘Help’ box appear as expected, in the correct order with the correct icons?   
__Result__– The result was as expected.

* __Test__– On clicking the ‘Visual’ clue button is the correct clue revealed beneath?   
__Result__– The result was as expected.

* __Test__– On clicking the ‘Audio’ clue button is the audio player revealed beneath, and is the correct audio played to describe each picture?   
__Result__– The results were as expected.

* __Test__– Does the audio player display the correct controls (play/pause, scroll and mute)?   
__Result__– The result was as expected.

* __Test__– On clicking the ‘Choice’ clue button are the three relevant answers revealed beneath?   
__Result__– The result was as expected.

* __Test__– Following the initial click, are the buttons disabled, and the clues remain visible?   
__Result__– The result was as expected.

* __Test__– Does the cursor automatically return to the answer field, after a clue has been revealed?   
__Result__– The result was as expected.

* __Test__– Do the clues reset when the user submits an answer and does a new set of clues load for each question?   
__Result__– The result was as expected.

* __Test__– Does the cursor automatically appear in the name field?   
__Result__– The result was as expected.

#### Does the ‘Scoreboard’ section, appear and function as expected?

* __Test__– Does the username entered in the start screen populate the scoreboard in the correct place?   
__Result__– The result was as expected.

* __Test__– Does the scoreboard appear as expected with the username above the correct and incorrect answers respectively?   
__Result__– The result was as expected.

* __Test__– Are the correct and incorrect scores set to 0 when the page initially loads?   
__Result__– The result was as expected.

* __Test__– Does the correct score display in green and the incorrect score display in red?   
__Result__– The result was as expected.

* __Test__– Does the correct score increment by one point each time the user submits a correct answer?   
__Result__– The result was as expected.

* __Test__– Does the incorrect score increment by one point each time the user submits an incorrect answer?   
__Result__– The result was as expected.

### Game End Screen

#### Does the game end section, appear and function as expected?

* __Test__- Does the end game screen screen appear when the user has been shown 10 questions?    
__Result__– The result was as expected.

* __Test__– Does the end game screen as expected, contain the game logo and contain a message informing the user that that is the end of the game?   
__Result__– The result was as expected.

* __Test__– Does the end game screen display the user’s score correctly out of 10?   
__Result__– The result was as expected.

* __Test__– If the user scores 2 points or under does the message say “Better luck next time” ?   
__Result__– The result was as expected.

* __Test__– If the user scores between 3 and 5 points does the message say “Good effort” ?   
__Result__– The result was as expected.

* __Test__– If the user scores between 3 and 5 points does the message say “Congratulations” ?   
__Result__– The result was as expected.

* __Test__– Does the ‘Play Again’ button display and when clicked does it send the user to the start game screen?   
__Result__– The result was as expected.


## Responsiveness 

I have tested my site across 5 screen widths in order to best replicate the breadth of modern viewing devices, in order to ensure that the site responds and performs as expected. For the purpose of testing in this document I have written results relating to 3 screen widths. This is to avoid unnecessary repetition, and is also in line with the Bootstrap ‘breakpoints’ I adhered to when building the website:

* Small		<768px  
* Medium	768-992px  
* Large		>992px  

These tests were carried out using Chrome DevTools to adjust the screen size and view the website at the designated screen widths.


### Small

#### Start Game Screen

* __Test__– The game logo should appear at the top of the screen above the ‘Enter Name’ field and the ‘Start Game’ button.    
__Result__– The result was as expected.

* __Test__– The text boxes should be stacked appropriately and adhere to the intended design   
__Result__– The result was as expected.

#### Main Game Screen

* __Test__– The layout appears as expected; each of the columns stack appropriately on top of each other with adequate spacing.     
__Result__– The result was as expected.

* __Test__– The question text does not change and is positioned below the question image   
__Result__– The result was as expected.

* __Test__– The ‘Enter’ button is positioned underneath the answer field, and the correct and incorrect icons are both displayed and are positioned to the right of the ‘Enter’ button.   
__Result__– The result was as expected.

* __Test__– All images render correctly and maintain their original ratio with no distortion     
__Result__– The result was as expected.

* __Test__– The ‘Help’ box is positioned underneath the ‘Game’ section and the buttons are stacked in a single column.   
__Result__– The result was as expected.

* __Test__– When clicked the clues are revealed underneath each button and the containing box expands appropriately.   
__Result__– The result was as expected.

* __Test__– The ‘Score’ box is positioned underneath the ‘Help’ box and the player, correct and incorrect fields are stacked in a single column.   
__Result__– The result was as expected.


#### End Game Screen

* __Test__– The game logo should appear at the top of the screen above the congratulations message and the ‘Play Again’ button.    
__Result__– The result was as expected.

* __Test__– The text boxes should be stacked appropriately and adhere to the intended design   
__Result__– The result was as expected.


### Medium	

#### Start Game Screen

* __Test__– The game logo should appear at the top of the screen above the ‘Enter Name’ field and the ‘Start Game’ button.    
__Result__– The result was as expected.

* __Test__– The text boxes should be stacked appropriately into 3 columns and adhere to the intended design   
__Result__– The result was as expected.

#### Main Game Screen

* __Test__– The layout appears as expected; and each of the columns stack appropriately on top of each other with adequate spacing.     
__Result__– The result was as expected.

* __Test__– The question text does change with each image but is still positioned below the question image.   
__Result__– The result was as expected.

* __Test__– The ‘Enter’ button is positioned underneath the answer field, and the correct and incorrect icons are both displayed and are positioned to the right of the ‘Enter’ button.   
__Result__– The result was as expected.

* __Test__– All images render correctly and maintain their original ratio with no distortion     
__Result__– The result was as expected.

* __Test__– The ‘Help’ box is positioned underneath the ‘Game’ section and the buttons are stacked in a single column.   
__Result__– The result was as expected.

* __Test__– When clicked the clues are revealed underneath each button and the containing box expands appropriately.   
__Result__– The result was as expected.

* __Test__– The ‘Score’ box is positioned underneath the ‘Help’ box and the player, correct and incorrect fields are stacked in a single column.   
__Result__– The result was as expected.


#### End Game Screen

* __Test__– The game logo should appear at the top of the screen above the congratulations message and the ‘Play Again’ button.    
__Result__– The result was as expected.

* __Test__– The text boxes should be stacked appropriately in 3 columns and adhere to the intended design   
__Result__– The result was as expected.


### Large	

#### Start Game Screen

* __Test__– The game logo should appear at the top of the screen above the ‘Enter Name’ field and the ‘Start Game’ button.    
__Result__– The result was as expected.

* __Test__– The text boxes should be stacked appropriately into 3 columns and adhere to the intended design   
__Result__– The result was as expected.

#### Main Game Screen

* __Test__– The layout adheres to the intended design; the question image is positioned on the left hand side, and the question box is on the right hand side   
__Result__– The result was as expected.

* __Test__– The question text does changes with each image and is positioned above the answer field.   
__Result__– The result was as expected.

* __Test__– The ‘Enter’ button is positioned underneath the answer field.   
__Result__– The result was as expected.

* __Test__– The correct and incorrect icons are not displayed until the user enters an answer. They then appear for a short time in-between the picture box and the question box.   
__Result__– The result was as expected.

* __Test__– All images render correctly and maintain their original ratio with no distortion     
__Result__– The result was as expected.

* __Test__– The ‘Help’ box is positioned underneath the ‘Game’ section to the left hand side and occupies 2/3 of the width of the main game container.   
__Result__– The result was as expected.

* __Test__– The help buttons are positioned in a row and are equally spaced within the help box.   
__Result__– The result was as expected.

* __Test__– When clicked the clues are revealed underneath each button, but do not overflow the containing box.   
__Result__– The result was as expected.

* __Test__– The ‘Score’ box is positioned to the right of the ‘Help’ box and occupies 2/3 of the width of the main game container.   
 __Result__– The result was as expected.

* __Test__– The player, correct and incorrect fields are stacked in a single column.   
 __Result__– The result was as expected.

 
#### End Game Screen

* __Test__– The game logo should appear at the top of the screen above the congratulations message and the ‘Play Again’ button.    
__Result__– The result was as expected.

* __Test__– The text boxes should be stacked appropriately in 3 columns and adhere to the intended design   
__Result__– The result was as expected.


## Cross-Browser Testing

I have tested this web application across different browsers at different device sizes. The other browsers I have tested are Safari and Firefox, which combined with Chrome, account for almost 90% of browser usage (source: (www.browserstack.com) I tested the site on these browsers, and on the physical devices, which I have access to, namely:

*	A large screen desktop
*	Laptop
*	Tablet
*	Mobile device

I followed the same testing criteria that I used for my Manual Testing, but I have not detailed the results of the tests in full here as I feel it would prove too lengthy for it’s intended purpose. I have however summarized the results and the issues encountered below:

### Large Screen Desktop

__Firefox__ – No issues found   
__Safari__ – No issues found 

### Laptop

__Firefox__ – No issues found    
__Safari__ – No issues found

### Tablet 

__Firefox__ – No issues found   
__Safari__ No issues found

### Mobile 

__Firefox__ – No issues found  
__Safari__ – No issues found  


## HTML, CSS and JavascriptValidation

While developing I have regularly validated my HTML and CSS using [W3C Markup](https://validator.w3.org/), [CSS Validation Service](https://jigsaw.w3.org/css-validator/) and [JSHint]( https://jshint.com/).  
Errors and Warnings that were highlighted to me that I addressed during the project were:
* Missing closing </div> tags
* __section__ tags that did not have an __h1__ or an __h2__ as a direct child
* Incorrect use of __type__ attribute for audio files
*Missing __alt__ tag on an image
* Missing __:__ and __}__ in my __style.css__ file
* Missing and unnecessary semicolons in my __script.js__ file
* An unused, and an undefined variable in my __script.js__ file

I also tested my JSON file using [JSONLint] (https://jsonlint.com/) which confirmed it to be valid JSON.

At the time of submission the results are showing no errors (see screenshots below)

![index.html](…)  
![style.css](…)   
![script.js](…)  
![questions.json](…)   
![404.html](…)

## Lighthouse Testing

I have used [Lighthouse](https://developers.google.com/web/tools/lighthouse) in Chrome DevTools to test the accessibility and performance of my site. The initial test gave me the following results:   

![Lighthouse screenshot](…)   

I implemented the following recommendations made in the report:
1. Increased the contrast and visibilty of external links by darkening the colour and underlining them
2. Adding __rel="noopener"__ to external links in order to reduce the site's  vulnerabilit
Following these changes I re-ran the Lighthouse tests and the improved scores can be seen below   

![Lighthouse screenshot](…)

## Test Results and Bugs



