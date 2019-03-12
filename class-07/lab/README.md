# Assignment Overview: Lab 7

- Your assignment will be to add a quiz to your "About Me" project.

- Note that as we progress through the week, new user stories will be added to the "About Me" project to guide the development of new features.

## Workflow

- Make sure you **merge your previous Pull Request**, **update (`pull`) your local `master`**, and **create a new branch** before starting today's lab.
  - Reminder that assignments may be resubmitted after you have addressed TA feedback. You may either push additional commits to your Pull Request before merging, or merge your Pull Request as submitted and create another branch and Pull Request to address the feedback. In either case, include the appropriate Pull Request link when you resubmit or it will not be graded.

## Requirements

### About User Stories

("MVP" = "Minimum Viable Product" which is the most basic successful functionality of our project. Extensions, added features, and other enhancements fall under the category of "Stretch Goals.")

This is our first assignment with user stories. This is a device commonly used in software development to identify what the functionality and design of a product should be by considering the interests and motivations of people with varied multiple points of view.

User stories typically take the form of, "As X, I want Y, so that Z" but do not necessarily need that structure.

### User Stories (MVP... what you must do as a minimum)

- As a student, I want to create an About Me quiz as a demonstration of my skills with HTML, CSS and JavaScript.
- As an eventual jobseeker, I want to get practice in creating a portfolio page so that I can make myself appealing to potential employers.
- As an eventual jobseeker, I would like for potential employers to quickly learn a few things about me, such as a short bio, my education, an overview of my job experience, and my goals.
- As a fun-loving human being, I want to give the visitors to my About Me page a guessing game that shows how fun-loving and interesting I am, and maybe include things about myself that would not ordinarily appear in a portfolio page.
- As a developer, I want to use markup to structure my HTML pages, so their layout is in the order of assembly I prefer, with effective use of the markup possibilities offered by HTML.
- As a developer, I want to carefully design my scripts, so I can understand how to organize and write my code to achieve my goals in interactivity.
- As a developer, I want to create a `quiz.html` page that uses JavaScript, so that I can use the browser to send a response to the user.
- As a portfolio page visitor, I want to be able to click a navigation link that takes me to the quiz page.
- As a quiz participant, I want to provide my name, so that the program is personalized to my experience.
- As a quiz participant, I want to be asked five questions, so that I can guess the answers and get to know the subject of the portfolio.
- As a quiz participant, I want to be notified after each question if my answer is correct or not, so that I know how well I am doing.
- As a developer, I want to be able to debug my code by using well structured console messages.
- As a developer, I want to manage my code through an online version control system, so I have the ability to work with others, manage my revisions, and keep a thorough record of my progress.

### User Stories (Stretch goals... not required!)

- As a quiz participant, I want to see the questions and my answers within the page instead of as alerts.
  **DO NOT use forms for accepting user input.**
- As a quiz participant, I want to see the layout of the quiz page before I'm asked the first question.
  - _In most browsers, the quiz page itself will not be displayed until all prompts/alerts are complete. Can you figure out how to let the page load before the questions are asked?_

### Technical Requirements

- HTML, CSS, and JavaScript must be cleanly written with correct indentation and syntax. Look at examples online and in your textbook. Note that your JS must pass the rules in the linter that we installed.
- Your JS file contains a 'use strict' declaration at the top. Always.
- Design a guessing game about you that involves **FIVE** yes/no questions. Be creative and fun and whimsical. Or not. It's up to you! It's your project!
- The questions in the guessing game must require a mix of yes/no answers, and user input must accept either y/n or yes/no responses, with either `.toUpperCase()` or `.toLowerCase()` used to validate the user input and accommodate users entering all-caps Y/N or YES/NO answers, too.
- Useful and descriptive `console.log()` messages in the JS are well written and correctly displaying to the browser console for each question of the guessing game.
- Use CSS to style your page as you see fit, to the level of abilities in CSS that you currently have
- Add, Commit, Push process is being followed; it is evident in GitHub that commits are made regularly, and with good commit messages that explain the WHY of the commit.

## Submitting Your Assignment

- Create a Pull Request from today's branch into `master`
- Submit that Pull Request link (e.g. `https://github.com/dahlbyk/about-me/pull/1`) in Canvas
  - We will not accept a link to the repository (e.g. `https://github.com/dahlbyk/about-me`)
  - We will not accept a link to the branch (e.g. `https://github.com/dahlbyk/about-me/tree/mon-questions`)
  - Why? Pull Requests allow us to provide line-by-line feedback.
- Add a comment to this Canvas submission with answers to the following questions:
  - How did this go, overall?
  - What observations or questions do you have about what you've learned so far?
