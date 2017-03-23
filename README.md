The Psychometrics Centre
========================
Task to complete for front-end developer in the recruitment process. 

By pushing your changes here you retain all the rights to it, in other words we won't use  your design/code for any 
of our products without your knowledge.

If you have any technical questions - please use the issue tracker here.

Preparations
------------

1. Fork and clone this repository locally
2. Create a branch with your name or initials i.e. `jsmith`
 
Next, choose to complete **one** of the tasks below, pick one that better suits your expertise.
 
Task #1
-------
Requirements:
1. Design a static web page using HTML5, CSS3 (SASS allowed), UI library of choice, that:
 - shows a question (could be html with an image) and possible answers (could be html with an image, no more than 5)
 - has ability to click an answer or skip the question
 - has some sort of progress indicator
 - allows to visually identify it with The Psychometrics Centre brand, creative take on the subject is encouraged
 - is mobile and ultra-wide friendly
2. Put your work in `tpc-frontend-task-static` module.
3. Use NPM to manage 3rd party dependencies and to automate the process of creating output artifacts, if applicable.
4. Create a `README.md` and describe how to run it
5. Create a pull request with your changes to this repository

Evaluation criteria:
* **Aesthetics** - do a random sample of office mates say it's pleasing,
* **HTML5** - does it conform to the specs and chosen UI library best practices, is the markup used meaningful and 
necessary, can other human being understand and further work with it,
* **CSS** - does it conform to the specs, are the rules meaningful and necessary, can other human being understand 
and further work with it,
* **Output** - is there a set process to automatically generate it, does it load fast, are the resources minified, 
does it work on current version of mainstream browsers,
* **GIT** - is commit history meaningful, do the commits contain only source code and none of 3rd party dependencies, 
output artifacts or IDE-specific files. 

Example of questions:

      '<p>Is my hovercraft full of eels?</p>'
      '<p>I deserve special treatment from others</p>'
      '<p>I find it difficult to approach others</p>'
      '<p>I pay attention to details</p>'
      '<p>I find rabbits confusing</p>'
    
Possible answers:    
    
      ['Strongly agree', 'Agree', 'Neither agree nor disagree', 'Disagree', 'Strongly disagree']
      ['Never', 'Rarely', 'Sometimes', 'Often', 'Always']
      ['Yes', 'No']
      ['Not at all probable', 'Slightly probable', 'Moderately probable', 'Very probable', 'Completely probable']
      ['Very confusing', 'Not confusing', 'Prefer not to say']

Task #2
-------
There is a `tpc-frontend-task-service` module which is a standard ExpressJS app. When started, each request to 
`http://localhost:3000/questions/next`  serves random question as JSON. 

1. Read Task#1 requirements but instead of static web page the goal is to create an Angular 2 app with SASS and UI 
library of your choice, that:
 - connects to the backing service, reads and shows a question with possible answers
 - has ability to click an answer or skip the question
 - has some sort of progress indicator
 - after 20 questions it shows a thank you page and logs `[question number, answer number]` pairs to the console
 - allows to visually identify it with The Psychometrics Centre brand, creative take on the subject is encouraged
 - is mobile and ultra-wide friendly
2. Put your work in `tpc-frontend-task-ng` module that you need to create.
3. You can use either NPM or NPM with `@angular/cli` to manage the process of generating output artifacts.
4. Create a `README.md` and describe how to run it
5. Create a pull request with your changes to this repository

Evaluation criteria:
* **Aesthetics** - do a random sample of office mates say it's pleasing,
* **Angular/JavaScript/Typescript** - does it follow Angular's code convention, how the code is organized, are the 
components meaningful and does the design allow to further develop the app, 
what happens if the backing service is not available.
* **HTML5** - does it conform to the specs and chosen UI library best practices, is the markup used meaningful and 
necessary, can other human being understand and further work with it,
* **CSS** - does it conform to the specs, are the rules meaningful and necessary, can other human being understand 
and further work with it,
* **Output artifact** - is there a set process to automatically generate it, does it load fast, are the resources minified, 
does it work on current version of mainstream browsers,
* **GIT** - is commit history meaningful, do the commits contain only source code and none of 3rd party dependencies, 
output artifacts or IDE-specific files.
