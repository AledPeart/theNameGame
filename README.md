![The Name Game Landing Page-mockup](https://github.com/AledPeart/theNameGame/blob/master/assets/images/screen-shot-13-mockup.png)


[View deployed site here](https://aledpeart.github.io/theNameGame/index.html)



# theNameGame

theNameGame is a picture naming web application, which helps people affected by aphasia to practice and improve their language finding abilities.

## __Table of Contents__

## Aims of the project

The aim of this project is to build a picture naming game, which specifically helps people affected by expressive dysphasia to practice and improve their language finding abilities. The project will consider the needs of the patient/user and of the therapist/owner and their respective desired outcomes. 

The user will be asked to name a series of common objects. If a user is unable to identify the object initially they will be given a series of prompts or clues in order to help them. At the end of the task the user will receive a score showing how many correct and incorrect answers they achieved. The owner will be also be able to access the score, and importantly information showing the prompts required by the user.

## What is Aphasia
Aphasia is a language and communication disorder, which affects the language centers of the brain. The most common cause is a stroke, but it can be also result from a head injury, brain tumor and other neurological illnesses.
Expressive dysphasia is a form of aphasia that affects a person’s ability to express what they want to say. Sufferers will often liken it to having a word on the ‘tip of your tongue’, but being unable to recall it. (www.stroke.org.uk)



## User Experience

Here I will address the aims and goals of the website from both the perspectives of the user/patient and of the owner/therapist. I will also address how user experience is key to the design of the website.

### User stories

* As a user I want to access a fully functioning web application that enables me to practice and improve my word finding strategies

* As a user I want the web application to be clear and uncluttered and present information to me in a cohesive manner.

* As a user I want the web application to use icons and colors to help my understanding of what is required.

* As a user I want to be shown a number of clear well presented images for me to identify.

* As a user I want to be able to input my answer using the computer keyboard.

* As a user I want to be offered some additional prompts if I am struggling to name an object.

* As a user I want to receive clear confirmation if my answer is correct or incorrect and see my score as I progress through the game.

* As a user I want to receive clear instructions on how the game works

* As a user I want to be able to refresh the game and start again

* As a user I want to be able to 'mute' the sound during the game

### Owner stories

* As the owner I want to test the users word retrieval.

* As the owner I want the user to be shown a series of ‘high frequency nouns’

* As the owner I want the user to be offered some additional prompts if they are unable to name an object.

* As the owner I want the additional prompts offered to the user to be both visual and auditory.

* As the owner I want to receive the users overall score on completing the game.

* As the owner I want a breakdown of the users correct and incorrect answers.

* As the owner I want a breakdown of the additional prompts given to the user in order to assess which neural pathways the user was having difficulty with.


### Design Objectives

Consideration is given to the fact that users of the game will have suffered some form of neural damage and may find navigating and distinguishing some items and words within the app especially difficult. With this in mind the design will aim to achieve the following:


* A clear, well thought out design, which is clean intuitive, and uncluttered.

* Has clearly defined areas.

* Uses high contrast colors to aid visual clarity

* Icons and symbols used to reinforce text e.g ✓  and  ✗ 

* Colors used to add meaning, and provide visual feedback to users e.g. green for correct, red for incorrect.

* The selected picture objects are to be high frequency nouns, in other words everyday objects that the user will be familiar with. e.g. cat, tree, car etc. There should be no ambiguity concerning the naming of the object.

* The picture objects to appear in a clearly defined box/frame against a white background to enhance their clarity.

* Any audio files used will be clear and concise.

* Language and instructions to be clear and unambigious.

### UX Design Goals

*	Responsive mobile first design – looks equally good on a mobile and across all devices.

*	Accessibility – content is accessible to as many users as possible – clear text, sufficiently contrasted to the background, ‘alt’ tags and ‘aria’ labels used appropriately.

*	Simple, flowing design, with a clear purpose.

*	Design adheres to current norms and conventions e.g clear navigation icons.

## Design Layout and Features

I made a decision to use as much 'vanilla' Javascript as possible when building this game. I felt that I had a better understanding of JQuery but that I had was not fully comfortable with some of the fundamental syntax and core concepts, so I saw this a great opportunity to re-enforce the learning from the preceding course modules and bolster my understanding. I opted to use Bootstrap as much as possible in order to ensure my design and build were consistent and responsive.

### Start Page
* Upon loading the game the user will be presented with an introductory/start page. This page will display the game logo and will have some text to welcome users to the site. There will also be a short paragraph to explain a little bit about aphasia as well as how the game works and how it can help people who are affected by aphasia. In order to begin the game users will be asked to enter their name, which will be used during the game to display their score on the scoreboard. This input field will be validated and require that a name is entered. It will not accept numbers or only blank spaces, and users will be alerted if they have not met those conditions. When the conditions have been met the user will be taken to the main game page. In an attempt to keep the design as simple and straightforward as possible I wanted to keep this as a one page application and have therefore used Javascript and CSS to display and hide sections of my page as required.

### Main Page
The main game page has 3 distinct areas, the ‘game area’ the ‘help area’ and the ‘scoreboard’. The game logo will be displayed in the top left corner of the screen and in the top right hand corner there are 3 menu buttons. I chose to use icons for these rather than text as I feel it keeps the design clean and more importantly they are intuitive and accessible for the intended audience. The first icon allows users to toggle the game sounds on and off. The second icon launches a modal, which contains more detailed guidance on how to play the game. The third Icon allows users to reset the game, and takes them back to the start page. 

![supporting screenshot](https://github.com/AledPeart/theNameGame/blob/master/assets/images/screen-shot-1-game.png) 

The game area displays an image to the user, and gives them a corresponding question e.g. an image of a cat, and the question “Can you name this animal?” Below the question is a clearly defined input field for the user to type and submit their answer. It is worth noting here that I am aware it is good programming practice to validate or require all user inputs, however on this occasion I deliberately chose not to require the user to submit an answer. In the context of this game, and it’s users, I do think it is beneficial that the users – if they do not know the answer and have not been able to decide upon an answer after viewing the clues, be compelled to submit an answer. I see that as a poor user experience. There is additional functionality that I would like to add here, but unfortunately it was beyond the scope and time constraints of this project. I discuss these in more detail in the ‘Features left to Implement’ section. 

When a user submits their answer, it is first converted into lowercase (so that the use of capitals does not affect the answer) and checked against the correct answer. The user is then given audio and visual feedback on whether the answer was correct. The feedback given is in the form of a brief audio clip, and a green tick symbol/red cross symbol, which appears briefly on the screen. The answer is then logged as correct or incorrect on the scoreboard, and the next question is loaded.

If the user is struggling to name the image they can access up to 3 clues from the ‘help’ area by clicking on the corresponding button, which then reveals the clue underneath. The buttons contain text and a symbol to reinforce their meaning. The 3 clues are quite distinct and correspond to each specific question:

![supporting screenshot](https://github.com/AledPeart/theNameGame/blob/master/assets/images/screen-shot-7-clues.png) 

* Visual Clues - show the user the first letter of the correct answer with the rest of the letters replaced with a dash, similar to a crossword answer.
* Audio Clues - play the user a short audio description of the item in the picture.
* Choice Clues – Show the user 3 possible answers, one of which is the correct answer.

The clues have been specifically designed to stimulate the different neural pathways that aphasia can affect. Knowing which clues the user was reliant upon can help the therapist to identify patterns and indicate which areas a therapy plan should focus on.

### End Page

Once the user has answered 10 questions, the end page is loaded. A message is displayed informing the user that the game has ended, and the user is congratulated and given their score out of 10. The user message is adapted depending on the users score to offer a more individual e=experience to the user. There is also a ‘Play Again’ button displayed that resets the game and takes the user back to the start page.

### Responsiveness

The site is designed to be fully responsive and for the layout to adapt depending on the size of the user’s device to offer the best possible experience. Here I will summarize how the layout described above will adapt on smaller screen sizes.






## Wireframes
These are my wireframes, they were created using [Balsamiq](https://balsamiq.com/) and show the planned layout and how it will differ at different screen widths.   

* [Start Page](https://github.com/AledPeart/theNameGame/blob/master/assets/images/1%20start%20game%20page.png)     
* [Game Page - Mobile](https://github.com/AledPeart/theNameGame/blob/master/assets/images/2%20main%20page%20-%20mobile.png)     
* [Game Page - Medium](https://github.com/AledPeart/theNameGame/blob/master/assets/images/3%20main%20page%20-%20med.png)     
* [Game Page - Large](https://github.com/AledPeart/theNameGame/blob/master/assets/images/4%20main%20page%20-%20large.png)     
* [End Page](https://github.com/AledPeart/theNameGame/blob/master/assets/images/5%20end%20page.png)     

### Layout Design

### Functionality Design


## Features left to implement


## Technologies Used

* HTML 5 – page content and structure
* CSS3 – Styling
* [JQuery](https://jquery.com/) - 
* [Popper.js](https://popper.js.org/) - 
* [Bootstrap](https://getbootstrap.com/) (v4.3.1) – Navigation bar, page layout and responsive design.
* [Git](https://git-scm.com/) - Version control tracking
* [Github](https://github.com/) - Project hosting
* [Gitpod](https://www.gitpod.io/) - Development
* [Balsamiq](https://balsamiq.com/) - Wireframes
* [Google Chrome DevTools](https://developer.chrome.com/docs/devtools/) – for site testing and debugging
* [Google Lighthouse](https://developers.google.com/web/tools/lighthouse) for site testing
* [Google Fonts](https://fonts.google.com/) – Typography
* [Font Awesome](https://fontawesome.com/) – Icons
* [Photoshop](https://www.photoshop.com/en) - Image re-sizing



## Testing
You can view my separate TESTING.md file [here](https://github.com/AledPeart/theNameGame/blob/master/TESTING.md)


## Deployment
This project was developed using [Gitpod](https://www.gitpod.io/) and was committed and pushed to [Github](https://github.com/) using the following terminal commands within Gitpod:

- _git add_ 
- _git commit –m “commit message”_
- _git push_

#### In order to deploy the project to GitHub Pages the following steps were followed:

1. Select the __theNameGame__ repository from within Github.
2. Select the _settings_ tab.
3. Select the _pages_ tab from the options on the left of the screen.
4. Using the dropdown menu change the source from _none_ to _master_ branch.
5. Click _save_.
6. You will now see a message that your site is ready to be published.
7. If you wait a few moments and refresh the browser another message will confirm that your site is published at the provided address

In order to clone and run this project locally, you will need to follow these steps:

1. On the main repository page in __Github__, click the button to download the _Code_ (located at the top above the list of files)
2. Under the _HTTPS_ tab copy the URL for the repository
3. Open the Terminal in your preferred __IDE__.
4. Change the current working directory to the location that you would like the new cloned directory.
5. Type _git clone_ into the terminal and then paste the URL that you copied earlier.
6. Hit _enter_ to create your clone.

Full details of these summarised steps can be found [here](https://docs.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository)
 

## Bugs


## Credits

* This project was created from a [Code Institute](https://codeinstitute.net/) student template
* [Bootstrap](https://getbootstrap.com/) Components used for the navigation bar, form, and the Bootstrap Grid system was used to streamline layouts and responsive design.
* Ideas and knowledge gleamed from 
  * [W3 Schools](https://www.w3schools.com/)
  * [CSS-Tricks](https://css-tricks.com/)
  * [Bootstrap](https://getbootstrap.com/)
  * Duckett, J. 2011. HTML and CSS: Design and Build Websites. John Wiley & Sons Inc.
* Fonts [Google Fonts](https://fonts.google.com/)
* Icons [Font Awesome](https://fontawesome.com/)

## Media and Content





