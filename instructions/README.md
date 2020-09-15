# 04 Web APIs: Code Quiz

As you proceed in your career as a web developer, you will probably be asked to complete a coding assessment, which is typically a combination of multiple-choice questions and interactive challenges. Build a timed code quiz with multiple-choice questions. This app will run in the browser and feature dynamically updated HTML and CSS powered by your JavaScript code. It will also feature a clean and polished user interface and be responsive, ensuring that it adapts to multiple screen sizes.

## User Story

```
AS A coding bootcamp student
I WANT to take a timed quiz on JavaScript fundamentals that stores high scores
SO THAT I can gauge my progress compared to my peers
```

## Acceptance Criteria

```
GIVEN I am taking a code quiz
WHEN I click the start button
THEN a timer starts and I am presented with a question
WHEN I answer a question
THEN I am presented with another question
WHEN I answer a question incorrectly
THEN time is subtracted from the clock
WHEN all questions are answered or the timer reaches 0
THEN the game is over
WHEN the game is over
THEN I can save my initials and score
```

## Mock-Up

The following image shows the web application's appearance and functionality:

![code quiz](./assets/04-web-apis-homework-demo.gif)

<br>

## Grading Requirements

This homework is graded based on the following criteria: 

### Technical Acceptance Criteria: 40%

* Satisfies all of the above acceptance criteria plus the following:

  * The homework should not produce any errors in the console when you inspect it using Chrome DevTools.

### Deployment: 32%

* Application deployed at live URL.

* Application loads with no errors.

* Application GitHub URL submitted.

* GitHub repository that contains application code.

### Application Quality: 15%

* Application user experience is intuitive and easy to navigate.

* Application user interface style is clean and polished.

* Application resembles the mock-up functionality provided in the homework instructions.

### Repository Quality: 13%

* Repository has a unique name.

* Repository follows best practices for file structure and naming conventions.

* Repository follows best practices for class/id naming conventions, indentation, quality comments, etc.

* Repository contains multiple descriptive commit messages.

* Repository contains quality README file with description, screenshot, and link to deployed application.

<br>

## You should set your questions as an object like this example:

```js
var questions = [
  {
    title: "Example Question 1:",
    choices: ["Choice 1", "Choice 2", "Choice 3", "Choice 4"],
    answer: "answer from choices"
  },
  {
    title: "Example Question 2:",
    choices: ["Choice 1", "Choice 2", "Choice 3", "Choice 4"],
    answer: "answer from choices"
  }
];
```

## Check list
```
✓ The first view of the application displays a button used to start the quiz.
✓ Clicking the 'Start Quiz' button displays a series of questions.
✓ Once the quiz begins, a countdown timer starts.
✓ If a question is answered incorrectly, additional time is subtracted from the timer.
✓ The timer ends when all questions have been answered or the timer reaches 0.
✓ After the game ends, the user can save their initials and score to a highscores view using local storage.
✓ Repository contains quality README with description, screenshot, link to deployed application.
```

## Submission
```
You are required to submit the following for review:

1. The URL of the deployed application.

2. The URL of the GitHub repository. Give the repository a unique name and include a README describing the project.

Total of two (2) links.
```

- - -
© 2019 Trilogy Education Services, a 2U, Inc. brand. All Rights Reserved.
