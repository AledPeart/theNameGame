![The Name Game Landing Page-mockup](https://github.com/AledPeart/theNameGame/blob/master/assets/images/screen-shot-13-mockup.png)


[View deployed site here](https://aledpeart.github.io/theNameGame/index.html)



# theNameGame

theNameGame is a picture naming web application, which helps people affected by aphasia to practice and improve their language finding abilities.

## __Table of Contents__
1. [What is Aphasia?](#what-is-aphasia)
2. [Aims of the project](#aims-of-the-project)
3. [User Experience](#user-experience)
   - [User Stories](#user-stories)
   - [Owner Stories](#owner-stories)
   - [Design Objectives](#design-objectives)
   - [UX Design Goals](#ux-design-goals)
4. [Wireframes](#wireframes)
5. [Design Layout and Features](#design-layout-and-features)
6. [Features left to implement](#features-left-to-implement)
7. [Technologies Used](#technologies-used)
8. [Testing](#testing)
9. [Deployment](#deployment)
10. [Credits](#credits)
11. [Media and Content](#media-and-content)
12. [Acknowledgements](#acknowledgements)

## What is Aphasia?
Aphasia is a language and communication disorder, which affects the language centers of the brain. The most common cause is a stroke, but it can be also result from a head injury, brain tumor and other neurological illnesses.
Aphasia can affect a person’s ability to express what they want to say. Sufferers will often liken it to having a word on the ‘tip of your tongue’, but being unable to recall it.  A common method Speech and Language Therapists use to help people with aphasia find their words is to ask a patient to name a common object. If a patient cannot name the object independantly they are given a series of clues or hints in order to help stimulate the neural pathways in the brain that may be causing the word finding difficulty. Source:(www.stroke.org.uk)

## Aims of the project

The aim of this project is to build a picture naming game, which specifically helps people affected by aphasia to practice and improve their language finding abilities. The project will consider the needs of the patient/user and of the therapist/owner and their respective desired outcomes. 
The user will be asked to name a series of common objects. If a user is unable to identify the object initially they will be given a series of prompts or clues in order to help them. At the end of the task the user will receive a score showing how many correct and incorrect answers they achieved. The game allows the user to practice independently and by doing so they will gradually need fewer and fewer clues to name a given object, and ultimately none at all.


## User Experience

Here I will address the aims and goals of the application from both the perspectives of the user/patient and of the owner/therapist. I will also address how user experience is key to the design of the application.

### User stories

* As a user I want to access a fully functioning web application that enables me to practice and improve my word finding strategies.

* As a user I want the web application to be clear and uncluttered and present information to me in a cohesive manner.

* As a user I want the web application to use icons and colors to help my understanding of what is required.

* As a user I want to be shown a number of clear well presented images for me to identify.

* As a user I want to be able to input my answer using the computer keyboard.

* As a user I want to be offered some additional prompts if I am struggling to name an object.

* As a user I want to receive clear confirmation if my answer is correct or incorrect and see my score as I progress through the game.

* As a user I want to receive clear instructions on how the game works.

* As a user I want to be able to refresh the game and start again.

* As a user I want to be able to 'mute' the sound during the game.

### Owner stories

* As the owner I want to test the users word retrieval.

* As the owner I want the user to be shown a series of ‘high frequency nouns’.

* As the owner I want the user to be offered some additional prompts if they are unable to name an object.

* As the owner I want the additional prompts offered to the user to be both visual and auditory.

* As the owner I want to receive the users overall score on completing the game.

* As the owner I want a breakdown of the users correct and incorrect answers.

* As the owner I want a breakdown of the additional prompts given to the user in order to assess which neural pathways the user was having difficulty with.


### Design Objectives

Consideration is given to the fact that users of the game will have suffered some form of neural damage and may find navigating and distinguishing some items and words within the app especially difficult. With this in mind the design will aim to achieve the following:


* A clear, well thought out design, which is clean intuitive, and uncluttered.

* Clearly defined areas.

* Uses high contrast colors to aid visual clarity.

* Icons and symbols used to reinforce text e.g ✓  and  ✗ .

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

## Wireframes
These are my initial wireframes, they were created using [Balsamiq](https://balsamiq.com/) and show the planned layout and how it will differ at different screen widths.   

* [Start Page](https://github.com/AledPeart/theNameGame/blob/master/assets/images/1%20start%20game%20page.png)     
* [Game Page - Mobile](https://github.com/AledPeart/theNameGame/blob/master/assets/images/2%20main%20page%20-%20mobile.png)     
* [Game Page - Medium](https://github.com/AledPeart/theNameGame/blob/master/assets/images/3%20main%20page%20-%20med.png)     
* [Game Page - Large](https://github.com/AledPeart/theNameGame/blob/master/assets/images/4%20main%20page%20-%20large.png)     
* [End Page](https://github.com/AledPeart/theNameGame/blob/master/assets/images/5%20end%20page.png)     

## Design Layout and Features

I made a decision to use as much 'vanilla' Javascript as possible when building this game. On completing the taught module, I felt that I had a good understanding of JQuery but that I had was not fully comfortable with some of the fundamental syntax and core concepts, so I saw this a great opportunity to re-enforce the learning from the preceding course modules and bolster my understanding. I opted to use Bootstrap as much as possible in order to ensure my design and build were consistent and responsive.

### Start Page
Upon loading the game the user will be presented with an introductory/start page. This page will display the game logo and will have some text to welcome users to the site. There will also be a short paragraph to explain a little bit about aphasia as well as how the game works and how it can help people who are affected by aphasia. In order to begin the game users will be asked to enter their name, which will be used during the game to display their score on the scoreboard. This input field will be validated and require that a name is entered. It will not accept only blank spaces, and users will be alerted if they have not met that condition. When the condition has been met the user will be taken to the main game page. In an attempt to keep the design as simple and straightforward as possible I wanted to keep this as a one page application and have therefore used Javascript and CSS to display and hide sections of my page as required.

![supporting screenshot](https://github.com/AledPeart/theNameGame/blob/master/assets/images/screen-shot-start.png) 

### Main Page
The main game page has 3 distinct areas, the ‘game area’ the ‘help area’ and the ‘scoreboard’. The game logo will be displayed in the top left corner of the screen and in the top right hand corner there are 3 menu buttons. I chose to use icons for these rather than text as I feel it keeps the design clean and more importantly they are intuitive and accessible for the intended audience. The first icon allows users to toggle the game sounds on and off. The second icon launches a modal, which contains more detailed guidance on how to play the game. The third Icon allows users to reset the game, and takes them back to the start page. 

![supporting screenshot](https://github.com/AledPeart/theNameGame/blob/master/assets/images/screen-shot-1-game.png) 

The game area displays an image to the user, and gives them a corresponding question e.g. an image of a cat, and the question “Can you name this animal?” Below the question is a clearly defined input field for the user to type and submit their answer. It is worth noting here that I am aware it is good programming practice to validate or require all user inputs, however on this occasion I deliberately chose not to require the user to submit an answer. In the context of this game, and it’s users, I do think it is beneficial that the users – if they do not know the answer and have not been able to decide upon an answer after viewing the clues, be compelled to submit an answer. I imagine that would be frustrating, and I see that as a poor user experience. There is additional functionality that I would like to add here, but unfortunately it was beyond the scope and time constraints of this project. I discuss these in more detail in the [Features left to implement](#features-left-to-implement) section. 

When a user submits their answer, it is first converted into lowercase (so that the use of capitals does not affect the answer) and checked against the correct answer. The user is then given audio and visual feedback on whether the answer was correct. The feedback given is in the form of a brief audio clip, and a green tick symbol/red cross symbol, which appears briefly on the screen. The answer is then logged as correct or incorrect on the scoreboard, and the next question is loaded.

If the user is struggling to name the image they can access up to 3 clues from the ‘help’ area by clicking on the corresponding button, which then reveals the clue underneath. The buttons contain text and a symbol to reinforce their meaning. The 3 clues are quite distinct and correspond to each specific question:

![supporting screenshot](https://github.com/AledPeart/theNameGame/blob/master/assets/images/screen-shot-7-clues.png) 

* Visual Clues - show the user the first letter of the correct answer with the rest of the letters replaced with a dash, similar to a crossword answer. In therapy terms this would be an example of an orthographic cue
* Audio Clues - play the user a short audio description of the item in the picture. This would also be an example of an semantic cue.
* Choice Clues – Show the user 3 possible answers, one of which is the correct answer. This would also be an example of an orthographic cue. Source: (https://tactustherapy.com/)

The clues have been specifically designed to stimulate the different neural pathways that aphasia can affect. Knowing which clues the user was reliant upon can help the therapist to identify patterns and indicate which areas a therapy plan should focus on.

### End Page

Once the user has answered 10 questions, the end page is loaded. A message is displayed informing the user that the game has ended, and the user is congratulated and given their score out of 10. The user message is adapted depending on the users score to offer a more individual experience to the user. There is also a ‘Play Again’ button displayed that resets the game and takes the user back to the start page.

### Responsiveness

The site is designed to be fully responsive and for the layout to adapt depending on the size of the user’s device to offer the best possible experience. Utilizing the bootstrap classes, the layout of the site adapts to smaller screens by progressively stacking the content into single columns as the screen size decreases. This is most prevalent on the main game page when the screen width drops below 992px wide. At this point the logo and the icons stack on top of each other in a single columns, as do the picture box and the question section. At the bottom of the layout the help section is stacked on top of the scoreboard.    

![supporting screenshot](https://github.com/AledPeart/theNameGame/blob/master/assets/images/screen-shot-14-responsive.png) 

There are also some design changes that happen at this breakpoint. The correct and incorrect graphic icons are significantly reduced in size, and are both initially displayed. When the user submits their answer the appropriate icon is removed and then revealed again when the next question loads. This change was made in order to keep as much of the screen visible on a mobile device as possible and to prevent boxes from jumping about, which made for a poor user experience. A further design change takes place when the screen width is below 576px, the picture reduces in size and the question text is also reduced. The question text, rather than changing with each picture, remains static - “What can you see? Type your answer below” – again this is to keep as much of the screen visible on a mobile device as possible to make for a better user experience.

### Functionality Design

A great piece of advice from my mentor Can Sucullu, was to really plan out how I would approach building this game. Being a Javascript novice it was difficult to know here to begin, but Can advised that like most things I would need a beginning, middle and an end. Then, to really think about what the game needed to do and how I would use Javascript to achieve this, and to break everything down in to steps. Using Balsamiq I created the flow chart below, and it proved an invaluable blueprint for building the game. Focusing on small ‘chunks’ at a time allowed me to slowly piece together my code without becoming overwhelmed.

![Functional Design Diagram](https://github.com/AledPeart/theNameGame/blob/master/assets/images/functional%20game%20design.png)

The steps laid out in the diagram are tied closely to the layout and design as I have detailed above so I will not repeat that here. From a functional perspective, I opted to use a global counter, which is set to 0 initially and then increments by +1 each time the user submits an answer. The global counter is used to reference and load the questions, images, clues and answers, which I have stored locally in a JSON file. I chose to use a JSON as opposed to an array in my Javascript file as it is deemed to be more stable and scalable in the future.
An ‘event-listener’ has been to set for each click of the submit answer button, which triggers a function to check the users answer, and to set the next question. The answer is checked against the corresponding answer in the JSON file using the global counter as a reference. An ‘if ‘statement has been set and if the user answer is correct, a series of functions are triggered to display the correct answer icon, play the correct answer audio clip and to increment the correct score total on the scoreboard. Alternatively if the user answer is not correct a series of functions are triggered to display the incorrect answer icon, play the incorrect answer audio clip and to increment the incorrect score total on the scoreboard. A timeout function has been set here to allow the answer to be checked before the next question function is run. Within this function another ‘if’ statement checks that the global counter is less than 10, if it is then the above cycle is repeated. When the counter reaches 10 the game has ended and the user is taken to the end game screen, and the end of game message is displayed.
The content of the clues in the help section have also been linked to the global counter, and they are revealed to the user on clicking the relevant help buttons.



## Features left to implement

There are a number of features that I would like to add to the project. It is really exciting that there is so much scope to develop and improve this project.

* Currently there are only 10 questions stored in the JSON file. I would like to expand this; furthermore I would like to develop categories of questions e.g. animals, weather, colors, foods etc.

* I would also like to set difficulty levels so that there is a progression for users to work through, there is also the scope for the quiz to dynamically increase or decease the difficulty of the questions based on the users previous answers.

* I would like users to be able to create an account, which stores information such as scores and the number and types of clues they needed in a database. This could then, with permission, be accessed and used by a therapist to help formulate a therapy plan for the user.

* Expand the help section. I would like there to be more clues and hints available, and also for users to access a second clue of a certain type if they need to. This could also be written so that progressively easier clues are offered if the user needs them. As an example the visual clue could reveal an additional letter of the answer with each click of a button.

* I mentioned in the design and layout section that at this time I decided to allow the users to submit a blank answer if they so chose, and my reasons for doing so. It is intended that future functionality will direct users who do not submit an answer to try a clue in the help section initially, and if they have already done so, that this is recorded for the therapist. To take this further I intend for the visual (crossword style) clues described above to appear in the answer field, if needed, to aid users further.

* There is scope to offer the game in a number of different languages to cater to as many users as possible.

* I would like to include more information, articles, videos etc, and provide more external links to useful sites and resources to help people who are afflicted by aphasia. 



## Technologies Used

* HTML 5 – Page content and structure
* CSS3 – Styling
* Javascript - Interative programming
* [JQuery](https://jquery.com/) - DOM manipulation
* [Popper.js](https://popper.js.org/) - Dynamic positioning (Bootstrap)
* [Bootstrap](https://getbootstrap.com/) (v4.3.1) – page layout and responsive design.
* [Git](https://git-scm.com/) - Version control tracking
* [Github](https://github.com/) - Project hosting
* [Gitpod](https://www.gitpod.io/) - Development
* [Balsamiq](https://balsamiq.com/) - Wireframes
* [Google Chrome DevTools](https://developer.chrome.com/docs/devtools/) – for site testing and debugging
* [Google Lighthouse](https://developers.google.com/web/tools/lighthouse) for site testing
* [Google Fonts](https://fonts.google.com/) – Typography
* [Font Awesome](https://fontawesome.com/) – Icons
* [Photoshop](https://www.photoshop.com/en) - Image re-sizing
* [W3C](https://validator.w3.org/) - HTML Code validation
* [w3C](https://jigsaw.w3.org/css-validator/) - CSS Code validation
* [JSHint](https://jshint.com/)- JS Code validation
* [JSONLint](https://jsonlint.com/)- JSON Code validation
* [AutoPrefixer](https://autoprefixer.github.io/) - To ensure correct and current CSS prefixes are used.
* [CloudConvert](https://cloudconvert.com) - converting audio files.

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
4. Change the current working directory to the location that you would like for the new cloned directory.
5. Type _git clone_ into the terminal and then paste in the URL that you copied earlier.
6. Hit _enter_ to create your clone.

Full details of these summarised steps can be found [here](https://docs.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository)

It is worth noting here that during one of our sessions my mentor highlited to me that my early commit messages for this project lacked a consistent structure and detail. I have since improved this ensuring that my commit messages adhere to a consistent structure and are sufficiently detailed, so that the development process is clear to other developers.  

## Credits

* This project was created from a [Code Institute](https://codeinstitute.net/) student template
* [Bootstrap](https://getbootstrap.com/) Modal, buttons, and the Bootstrap Grid system was used to streamline layouts and responsive design.
* Ideas and knowledge gleamed from: 
  * [W3 Schools](https://www.w3schools.com/)
  * [CSS-Tricks](https://css-tricks.com/)
  * [Bootstrap](https://getbootstrap.com/)
  * [Stack Overflow](https://stackoverflow.com/) - (specific credits have been added as comment in the code)
  * [MDN](https://developer.mozilla.org/en-US/)
  * Duckett, J. 2011. HTML and CSS: Design and Build Websites. John Wiley & Sons Inc.
  * Duckett, J. 2014. Javascript & JQuery. John Wiley & Sons Inc.
  * [Stroke Association](https://www.stroke.org.uk) - Information regarding aphasia.
  * [Tactus Therapy](https://tactustherapy.com/)


## Media and Content

* Fonts [Google Fonts](https://fonts.google.com/)
* Icons [Font Awesome](https://fontawesome.com/)
* Images [Pixy](https://pixy.org/)
* Images [Freepik](https://www.freepik.com/)
* Logo [Looka](https://looka.com/)
* Logo [Flaticon](https://www.flaticon.com/)
* Audio [Zapsplat](https://www.zapsplat.com/)
* Color choice [Colorhunt](https://colorhunt.co/)

## Acknowledgements

* My mentor, Can Sucullu - for his knowledge, patience and guidance.
* My wife Catrin, for the original idea, recording the descriptive audio files and for her input as a Speech Therapist.
* Code institute tutors, for their help and guidance (at all hours of the day/night).





