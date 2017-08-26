module.exports = BasicCard;

function BasicCard( front, back ) {
  this.front = front;
  this.back = back;
  this.card = function() {

  var question = {
      front: this.front,
      back: this.back,
  };

  // add card to log.txt
  fs.appendFile("basic.json", JSON.stringify(question) + ';', "utf8", function(error) {
      // if there is an error, log the error
      if (error) {
          console.log(error);
      }
  });

  };
}