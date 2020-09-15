// pulling all the elements from html
let highscoreDiv = document.querySelector("#highscore");
let gameTimerEl = document.querySelector("#gameTimer");
let quesTimerEl = document.querySelector("#quesTimer");
let mainEl = document.querySelector("#details");
let timerTab = document.querySelector("#timers");


// globla variables
var test = false;
var score = 0;
var quiz = {};
var quizType = "";

var gameDuration = 0;
var gameSecElapsed = 0;
var gameInterval;

var questionDuration = 15;
var questionSecElapsed = 0;
var questionInterval;


init();



// instructions
function init() {
  clearDetails();
  reset();
  // creates Heading element for main page
  let heading = document.createElement("p");
  heading.setAttribute("id", "main-heading");
  heading.textContent = "Play the game but wacth the timer!!";

  // creates elements with the instructions
  let instructions = document.createElement("p");
  instructions.setAttribute("id", "instructions");
  instructions.textContent = "In this game you need to be FAST! You only have 5 seconds per questions and every time you get a question wrong your timer will decreased by 10 seconds!."; 

  // creates button to start the game
  let startMarvelQuiz = document.createElement("button");
  startMarvelQuiz.setAttribute("id", "startMarvelQuiz");
  startMarvelQuiz.setAttribute("class", "btn btn-secondary");
  startMarvelQuiz.textContent= "Start MCU Quiz";

  //add buttons to page

  mainEl.appendChild(heading);
  mainEl.appendChild(instructions);
  mainEl.appendChild(startMarvelQuiz);
  

  startMarvelQuiz.addEventListener("click", function () {
    quizType = "MCU";
    playQuiz(MarvelQuestions);
  });

 
}

// to clear all elements
function clearDetails() {
  mainEl.innerHTML = "";
}

function reset() {
  quizType = "";
  score = 0;

  gameDuration = 0;
  gameSecElapsed = 0;
  gameInterval;

  questionDuration = 15;
  questionSecElapsed = 0;
  questionInterval;
}

//Lest Go!!!!
function playQuiz(questionSet) {
  if (test) { console.log("--- playQuiz ---"); }
  // select Random question
  
  quiz = setUpQuestions(questionSet);

  // displays timers
  timerTab.setAttribute("style", "visibility: visible;");

  // Start timer
  gameDuration = quiz.length * 15;
  if (test) { console.log("duration g,q:",gameDuration,questionDuration); }

  startGameTimer();
  renderTime();

  //go to first question
  presentQuestion();
}

// function to get random question out of array
function setUpQuestions(array) {
  if (test) {console.log("--- setUpQuestions ---");}

  let ranQuest = [];

  for (let i=0; i<array.length; i++) {
    ranQuest.push(array[i]);
  }
  return ranQuest;
}

// function to show new question 
function presentQuestion() {
  if (test) {console.log("--- presentQuestion ---");}
 
  questionSecElapsed = 0;

  // checks for no more questions and exits
  if ( quiz.length === 0 ) {
    endOfGame();
    return;
  }


  
  currentQuestion = quiz.pop();

  //clears html to select questions
  clearDetails();
   
 
  let question = document.createElement("h1");
  // adds data value
  question.setAttribute("question", currentQuestion.title);
  question.textContent = currentQuestion.title;
  mainEl.appendChild(question)

  // create list as container to listen for answers
  let choiceBox = document.createElement("ul");
  choiceBox.setAttribute("id","choiceBox");
  mainEl.appendChild(choiceBox);

  //adds answers to screen
  for( let i=0; i < currentQuestion.choices.length; i++ ) {
    // creates variable for each choice item
    let listChoice = document.createElement("li");
    // adds data value
    listChoice.setAttribute("choice-value", currentQuestion.choices[i]);
    listChoice.setAttribute("id","questionNum-"+i);
    listChoice.textContent = currentQuestion.choices[i];
    //add choice to page
    choiceBox.appendChild(listChoice)
  }

  if (test) { console.log("cur", currentQuestion);}


  // using the anymous function delays the invocation of the scoreAnswer
  choiceBox.addEventListener("click", function (){
    scoreAnswer(currentQuestion);
  });
  // calls for the next questions
}

function scoreAnswer(cur) {
  if (test) { console.log("--- scoreAnswer ---");}
 // ensure that the event on the li
  var e = event.target;
  if ( e.matches("li")) {
    let selectedItem = e.textContent;
    
    if (test) { console.log("selectedItem quiz " + selectedItem); }
   
    if ( selectedItem === cur.answer ) {
    
      score += questionDuration - questionSecElapsed;
    
    } else {
      if (test) { console.log("wrong answer");}
   
      // wrong answer
   
      gameDuration -= 10;
    }
  if (test) { console.log("selected ",selectedItem);}
    showAnswers(cur);
   
  }
}


function showAnswers(cur) {
  if (test) { console.log("--- showAnswer ---"); }
  
  if (test) { console.log("wakanda",cur);}
  if (test) { console.log("selected ",selectedItem);}


  for (let i=0; i<cur.choices.length; i++) {
    if (test) { console.log("wakanda for ",i);}

    let questid = "#questionNum-" + i;
    
    let questrow = document.querySelector(questid);


    if (test) { console.log("wakanda selected" + selectedItem + "<");}
    if (test) { console.log("wakanda color test >" +  cur.choices[i] +"<");}

    if ( cur.choices[i] !== cur.answer ) {
      if (test) { console.log("color test flase");}
      questrow.setAttribute("style","background-color: red");
    } else {
      if (test) { console.log("color test true");}
      questrow.setAttribute("style","background-color: green");
    }
  }
  // pause so user can see results
  setTimeout(presentQuestion,500);
}

// function to set time for game timer
function setGameTime() {
  if (test) { console.log("--- setGameTime ---"); }
  if (test) { console.log("gameDuration " + gameDuration); }
  clearInterval(gameInterval);
  gameSeconds = gameDuration;
}


function renderTime() {
  
  gameTimerEl.textContent = gameDuration - gameSecElapsed;
  quesTimerEl.textContent = questionDuration - questionSecElapsed;

  if ( (questionDuration - questionSecElapsed) < 1 ) {
    // game penelty for letting timer run out
    gameDuration -= 10;
    if (test) { console.log("too slow"); }
    presentQuestion();
  } 

  if ( (gameDuration - gameSecElapsed) < 1 ) {
   endOfGame();
  }
}

function startGameTimer () {
  if (test) { console.log("--- startGameTimer ---"); }
  setGameTime();

  gameInterval = setInterval(function() {
    gameSecElapsed++; 
    questionSecElapsed++; 
    renderTime();
  }, 1000);
}

function stopTime() {
  if (test) { console.log("--- stopTime --- ");}
  gameSeconds = 0;
  questionSeconds = 0;
  clearInterval(gameInterval);
}

// function of end of game
function endOfGame() {
  if (test) { console.log("--- endOfGame ---"); }
  stopTime();
  clearDetails();

  timerTab.setAttribute("style", "visibility: hidden;");

  let heading = document.createElement("p");
  heading.setAttribute("id", "main-heading");
  heading.textContent = "GAME OVER - Wakanda Forever";

  // creates elements with the instructions for the game
  let instructions = document.createElement("p");
  instructions.setAttribute("id", "instructions");
  instructions.textContent = " Your score is " + score; 

  // creates button to start the game
  let playAgain = document.createElement("button");
  playAgain.setAttribute("id", "playAgain");
  playAgain.setAttribute("class", "btn btn-secondary");
  playAgain.textContent = "Play again";

  // creates input for user to add initials
  let par = document.createElement("p");

  let initialsLabel = document.createElement("label");
  initialsLabel.setAttribute("for","userInitials");
  initialsLabel.textContent = "Enter Your SuperHeroe Initials: ";

  let initialsInput = document.createElement("input");
  initialsInput.setAttribute("id","userInitials");
  initialsInput.setAttribute("name","userInitials");
  initialsInput.setAttribute("minlength","3");
  initialsInput.setAttribute("maxlength","3");
  initialsInput.setAttribute("size","3");


  mainEl.appendChild(heading);
  mainEl.appendChild(instructions);
  mainEl.appendChild(initialsLabel);
  mainEl.appendChild(initialsInput);
  mainEl.appendChild(par);
  mainEl.appendChild(playAgain);

  playAgain.addEventListener("click", init);

  initialsInput.addEventListener("input", function() {
    initialsInput.value = initialsInput.value.toUpperCase();
    if ( initialsInput.value.length === 3 ) { 

      //create object for this score
      let thisScore = [ { type: quizType, name: initialsInput.value, score: score } ]; 

      //get highscores from local storage
      let storedScores = JSON.parse(localStorage.getItem("highScores")); 
      if (test) { console.log("storedScore",storedScores); }

      if (storedScores !== null) { 
        storedScores.push(thisScore[0]); 
      } else {
        storedScores = thisScore;
      }

      localStorage.setItem("highScores", JSON.stringify(storedScores));
      highScores();
    }
  });
}

function highScores() {
  stopTime();
  clearDetails();

  timerTab.setAttribute("style", "visibility: hidden;");

  //get scores from local storage
  let storedScores = JSON.parse(localStorage.getItem("highScores")); 

  // draw heading
  let heading = document.createElement("h2");
  heading.setAttribute("id", "main-heading");
  heading.textContent = "The Avengers Score Hall of Fame";

  mainEl.appendChild(heading);


  if ( storedScores !== null ) {
    // sort scores
    storedScores.sort((a,b) => (a.score < b.score) ? 1: -1);

    // sets the number of scores to display to 5 
    let numScores2Display = 5;
    if ( storedScores.length < 5 ) { 
      numScores2Display = storedScores.length; 
    }

    for (var i = 0; i < numScores2Display; i++) {
      var s = storedScores[i];

      var p = document.createElement("p");
      p.textContent = s.name + " " + s.score + " ( " + s.type + " )";
      mainEl.appendChild(p);
    }
  } else {
    var p = document.createElement("p");
    p.textContent =  "Your SuperHeroe Initials Here!"
    mainEl.appendChild(p);
  }


  // creates button to start the game again
  let playAgain = document.createElement("button");
  playAgain.setAttribute("id", "playAgain");
  playAgain.setAttribute("class", "btn btn-secondary");
  playAgain.textContent = "Play!";

  mainEl.appendChild(playAgain);

  playAgain.addEventListener("click", init);
}

highscoreDiv.addEventListener("click", highScores);