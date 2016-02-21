import pickle

#
# The "Question" Class
#

class Question:

    def __init__(self, what_to_ask, yes_question, no_question):
        self.what_to_ask = what_to_ask
        self.yes = yes_question
        self.no = no_question

    def ask(self):
        answer = raw_input(self.what_to_ask + " (y/n) ");
        if (answer == "y"):
            if self.yes != None:
                self.yes.ask()
            else:
                print("\nYay, I win!!")
        if (answer == "n"):
            if self.no != None:
                self.no.ask()
            else:
                print("\nYou win, nice job :).")
                self.learn()

    def learn(self):
        thing = raw_input("\nWhat were you thinking of? ")
        print("\nWhat question could be asked about a " + thing + 
                " for which the answer would be \"yes\"?")
        what_to_ask = raw_input("\nPlease type a question: ")
        self.yes = Question("Is it a " + thing + "?", None, None);
        self.no = Question(self.what_to_ask, None, None);
        self.what_to_ask = what_to_ask
        print("\nThanks, I'll try to remember that!")

    def remember(self):
        file = open("twenty_questions.txt", "w")
        pickle.dump(self, file)
        file.close()        

#    
# MAIN PROGRAM
#

try:
    file = open("twenty_questions.txt", "r")
    first_question = pickle.load(file)
    file.close()
except:
    dog = Question("Is it a dog?", None, None);
    cat = Question("Is it a cat?", None, None);
    bark = Question("Does it bark?", dog, cat);
    first_question = bark

while True:
    print("\nThink of an animal...\n")
    first_question.ask()
    first_question.remember()
    print("\nLet's play again!");


