module.exports = BasicCard;

// Variables Required Fields
var basicJson = require('./basic.json');
var fs = require('fs');

// BasicCard Constructor
function BasicCard( front, back ) {

  // Allows Constructor te be called without new
  if (!(this instanceof BasicCard)){
    return new BasicCard( front, back );
  }

  this.front = front;
  this.back = back;
  this.card = function() {

    // Setup variable
    var question = {
      front: this.front,
      back: this.back,
      cardType: 'basic'
    };

    // Push question to array
    basicJson.push(question);

    // add question variable to basic.json file
    fs.writeFile('basic.json', JSON.stringify( basicJson, null, 2 ), function(error) {
      // if there is an error, log the error
      if (error) {
        console.log(error);
      }
    });

  };
}