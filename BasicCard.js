var inquirer = require("inquirer");
var fs = require("fs");

var arg1 = process.argv[2];
var arg2 = process.argv[3];

function Choices(userInput){
  if (userInput == "basic"){
      inquirer.prompt([
        {
          name: "cardfront",
          message: "Question"
        },
        {
          name: "cardback",
          message: "Answer"
        }
      ]).then((answers) =>{
        var newBasic = new BasicCard(answers.cardfront, answers.cardback);
        fs.appendFile("./basicquiz.txt", JSON.stringify(newBasic), (err) => {
        if(err){
          return console.log(err);
        } else {
          console.log("Recorded in basicquiz.txt")
        }
        });
      });
  };
  if (userInput == "cloze"){
      inquirer.prompt([
      {
        name: "fulltextInput",
        message: "Full text of flashcard:"
      }, {
        name: "clozeInput",
        message: "Text to be cloze-deleted"
      }
    ]).then((answers) => {
      var textFull = answers.fulltextInput;
      var textCloze = answers.deletionInput;
      var textDeleted = textFull.replace(textCloze, "???");
      var newCloze = new ClozeDeleted(textFull, textCloze, textDeleted)
      fs.appendFile("./clozequiz.txt", newCloze, (err) => {
        if(err){
          return console.log(err);
        } else {
          console.log("Recorded in clozequiz.txt")
        }
      });
    })
  };

}
//Basic
  function BasicCard(frontText, backText) {
    this.front = frontText,
    this.back = backText
  };

//ClozeDeleted
  function ClozeDeleted(x, y, z){
    this.fullText = x,
    this.cloze = y,
    this.partialText = z
  }

Choices(arg1);