// Variables Required Fields
var basicFlashcard = require('./basic-card.js');
var inquirer = require('inquirer');
var basicJson = require('./basic.json');
var clozeJson = require('./cloze.json');

// Initial Question on what to do.
function start() {
  inquirer.prompt([{
    name: 'task',
    message: 'What would you like to do?',
    type: 'list',
    choices: [ { name: 'Add Card' }, { name: 'Show Cards' }]
  }]).then(function(answer) {
    if ( answer.task === 'Add Card' ) {
      addCard();
    } else if ( answer.task === 'Show Cards' ) {
      showCards();
    }
  });
};
start();

// addCard function
function addCard() {
  // Prompt for what type of Flash Card
  inquirer.prompt([{
    name: 'type',
    message: 'What type of Flash Card?',
    type: 'list',
    choices: [ { name: 'Basic Flash Card' }, { name: 'Cloze Flash Cards' }]
  }]).then(function(answers) {

    // If Basic type is choosen
    if ( answers.type === 'Basic Flash Card' ) {
      inquirer.prompt([{
        name: 'front',
        message: 'What is the question?',
        validate: function(input) { 
          if (input === '') { 
            console.log('Please provide a question'); 
            return false; 
          } else {
            return true;
          }
        }
      }, {
        name: 'back',
        message: 'What is the answer?',
        validate: function(input, answers) { 
         if (input === '') { 
            console.log('Please provide an answer');
            return false; 
          } else if(answers.front.indexOf(input) === -1) {
            console.log('\n Your answer ' + input + ' - Doesn\'t appear in your question - ' + answers.front + ' - Your answer must be part of the question ');
            return false;
          } else {
            return true;
          }
        }
      }]).then(function(answers) {

        // Call the Constructor and write to json file
        var newQuestion = basicFlashcard( answers.front,  answers.back );
        newQuestion.card();

        console.log('\n Basic Flashcard Added. \n');

        // Run start again
        start();
      });
    } 
    
    // If Cloze type is choosen
    else {
      console.log('Cloze Choosen');
    }

  });
};

// set counter for questions
var count = 0;
// Concat json arrays into single array
var questionsArray = basicJson.concat(clozeJson);

// function to show cards in json
function showCards() {

  // loop through the questions array
  if ( count < questionsArray.length ) {
    inquirer.prompt([{
      name: 'answer',
      message: basicJson[count].front
    }]).then(function(answers) {

      if(basicJson[count].back === answers.answer) {
        console.log('That is Correct!');
      } else {
        console.log('That is Incorrect, The correct answer is ' + basicJson[count].back );
      }
      console.log('\n--------------------------------------------------------------------\n');

      // Run start again
      count++;
      showCards();
    });
  } else {
    console.log('All Questions have been answered');
    // Run start again
    start();
  }

};