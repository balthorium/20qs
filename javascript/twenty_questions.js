
var rootQuestion = null;
var currentQuestion = null;

function Question(qtext, yes, no) {
    this.qtext = qtext;
    this.yes = yes;
    this.no = no;
}

Question.prototype.ask = function () {
    currentQuestion = this;
    document.getElementById("question").innerHTML = currentQuestion.qtext;
};

Question.prototype.declareVictory = function () {
    document.getElementById("question").innerHTML = "Yay, I won!";
};

Question.prototype.declareDefeat = function () {
    document.getElementById("question").innerHTML = "Rats, I lost.";
    document.getElementById("learnForm").removeAttribute("hidden");
};

Question.prototype.respondToYes = function () {
    (this.yes != null) ? this.yes.ask() : this.declareVictory();
};

Question.prototype.respondToNo = function () {
    (this.no != null) ? this.no.ask() : this.declareDefeat();
};

Question.prototype.learn = function () {
    this.no = new Question(this.qtext, this.yes, this.no);
    this.yes = new Question("Is it a " + document.getElementById("learnThing").value + "?", null, null);
    this.qtext = document.getElementById("learnQuestion").value;
    document.getElementById("learnForm").setAttribute("hidden", "true");
    rootQuestion.ask();
};

function initialize() {
    rootQuestion = new Question("Is it a monkey?", null, null);
    document.getElementById("questionForm").removeAttribute("hidden");
    rootQuestion.ask();
};

