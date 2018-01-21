
var rootQuestion = null;
var currentQuestion = null;

function initialize() {
    rootQuestion = new Question("Is it a monkey?", null, null);
    rootQuestion.play();
}

function Question(qtext, yes, no) {
    this.qtext = qtext;
    this.yes = yes;
    this.no = no;
}

Question.prototype.play = function () {
    document.getElementById("playAgain").setAttribute("hidden", "true");
    document.getElementById("yesOrNo").removeAttribute("hidden");
    rootQuestion.ask();
};    

Question.prototype.ask = function () {
    currentQuestion = this;
    document.getElementById("question").innerHTML = currentQuestion.qtext;
};

Question.prototype.respondToYes = function () {
    (this.yes != null) ? this.yes.ask() : this.declareVictory();
};

Question.prototype.respondToNo = function () {
    (this.no != null) ? this.no.ask() : this.declareDefeat();
};

Question.prototype.declareVictory = function () {
    document.getElementById("question").innerHTML = "Yay, I won!";
    document.getElementById("yesOrNo").setAttribute("hidden", "true");
    document.getElementById("playAgain").removeAttribute("hidden");
};

Question.prototype.declareDefeat = function () {
    document.getElementById("question").innerHTML = "I give up, you win.";
    document.getElementById("yesOrNo").setAttribute("hidden", "true");
    document.getElementById("learn").removeAttribute("hidden");
};

Question.prototype.learn = function () {
    this.no = new Question(this.qtext, this.yes, this.no);
    this.yes = new Question("Is it a " + document.getElementById("learnThing").value + "?", null, null);
    this.qtext = document.getElementById("learnQuestion").value;
    document.getElementById("learn").setAttribute("hidden", "true");
    rootQuestion.play();
};

