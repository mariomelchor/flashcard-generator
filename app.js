// Variables Required Fields
var basicFlashcard = require('./basic-card.js');
var inquirer = require('inquirer');
var fs = require('fs');

// Initial Question on what to do.
inquirer.prompt([{
  name: 'task',
  message: 'What would you like to do?',
  type: 'list',
  choices: [ { name: 'Add Card' }, { name: 'Show Cards' }]
}]).then(function(answer) {
  if ( answer.task === 'Add Card' ) {
    console.log('Add Card');
    addCard();
  } else if ( answer.task === 'Show Cards' ) {
    console.log('Show Card');
    showCards();
  }
});

// addCard function
function addCard() {
  inquirer.prompt([{
    name: 'front',
    message: 'What is the question?'
  }, {
    name: 'back',
    message: 'What is the answer?'
  }]).then(function(answers) {

    var newQuestion = new basicFlashcard( answers.front,  answers.back );
    newQuestion.card();

    // Run the add Card question again
    addCard();
  });
};

function showCards() {

};