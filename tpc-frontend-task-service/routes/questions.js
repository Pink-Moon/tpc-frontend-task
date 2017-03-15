var express = require('express');
var router = express.Router();

var questions = [
  '<p>Is my hovercraft full of eels?</p>',
  '<p>I deserve special treatment from others</p>',
  '<p>I find it difficult to approach others</p>',
  '<p>I pay attention to details</p>',
  '<p>I find rabbits confusing</p>'
];

var answers = [
  ['Strongly agree', 'Agree', 'Neither agree nor disagree', 'Disagree', 'Strongly disagree'],
  ['Never', 'Rarely', 'Sometimes', 'Often', 'Always'],
  ['Yes', 'No'],
  ['Not at all probable', 'Slightly probable', 'Moderately probable', 'Very probable', 'Completely probable'],
  ['Very confusing', 'Not confusing', 'Prefer not to say']
];

router.get('/next', function (req, res) {
  res.send({
    question: questions[getRandomInt(0, questions.length)],
    answers: answers[getRandomInt(0, answers.length)]
  });
});

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

module.exports = router;
