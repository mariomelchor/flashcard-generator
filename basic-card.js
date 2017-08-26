module.exports = BasicCard;
var fs = require('fs');

function BasicCard( front, back ) {
  this.front = front;
  this.back = back;
  this.card = function() {

    // Setup variable
    var question = {
      front: this.front,
      back: this.back,
    };

    // add question variable to basic.json
    fs.appendFile("basic.json", JSON.stringify( question, null, 2) + ',', "utf8", function(error) {
      // if there is an error, log the error
      if (error) {
        console.log(error);
      }
    });

  };
}