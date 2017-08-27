module.exports = ClozeCard;

// Variables Required Fields
var clozeJson = require('./cloze.json');
var fs = require('fs');

// ClozeCard Constructor
function ClozeCard(text, cloze) {
    // Checks cloze to see if it is contained in text
    if (text.indexOf(cloze) === -1) {
        return console.log(cloze + ' Doesn\'t appear in ' + text);
    }

    // Create properties
    this.fullText = text;
    this.cloze = cloze;
    this.partial = this.fullText.replace(this.cloze, '...');
    this.card = function () {

        // Setup variable
        var question = {
            partial: this.partial,
            cloze: this.cloze
        };

        // Push question to array
        clozeJson.push(question);

        // add question variable to basic.json filse
        fs.writeFile('cloze.json', JSON.stringify(clozeJson, null, 2), function (error) {
            // if there is an error, log the error
            if (error) {
                console.log(error);
            }
        });

    };
}