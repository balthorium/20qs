
// create a "global" question variable (set it to null initially)
var question = null;

// initialize the javascript code - this is called once, when the page loads
function initialize() {
    question = new Question("Is Led Zepplin the greatest rock band ever?", true);
    document.getElementById("response").innerHTML = question.qtext;
}

// define a new "Question" object class
function Question(qtext, answer) {
    this.qtext = qtext;
    this.answer = answer;
}

// define a "respondTo" method on the "Question" object class
Question.prototype.respondTo = function (answer) {
  var responseText;
  if (this.answer == answer) {
      responseText = "correct!";
  }
  else {
      responseText = "wrong!";
  }
  document.getElementById("response").innerHTML = responseText;
};
