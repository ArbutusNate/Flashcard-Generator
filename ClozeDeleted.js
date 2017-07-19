// module.exports = clozeDeleted;
var inquirer = require("inquirer");

var partial = "";
var arg1 = process.argv[2];
var arg2 = process.argv[3];

function ClozeDeleted(x, y, z){
  this.fullText = x,
  this.cloze = y,
  this.partialText = z
}


// function start(){
//   var newCard = new ClozeDeleted(arg1, arg2);
// }.then(function(data){
//   console.log("fulltext: " + newCard.fullText);
//   console.log("cloze: " + newcard.cloze);
//   console.log("partial text: " + newCard.partialText);
// });

inquirer.prompt([
    {
      name: "fulltextInput",
      message: "Full text of flashcard:"
    }, {
      name: "deletionInput",
      message: "Text to be cloze-deleted"
    }
  ]).then(function(answers){
    var testFull = answers.fulltextInput;
    var testDelete = answers.deletionInput;
    var fullArray = testFull.split(" ");
    var deleteArray = testDelete.split(" ");
    for(i = 0; i < fullArray.length; i++){
      if(deleteArray.includes(fullArray[i])){
        fullArray[i] = "...";
      }
      partial.concat(fullArray[i]);
    }
    console.log(partial)
    var newCard = new ClozeDeleted(answers.fulltextInput, answers.deletionInput, partial);
    console.log(newCard.fullText);
    console.log(newCard.cloze);
    console.log(newCard.partialText);
  })
