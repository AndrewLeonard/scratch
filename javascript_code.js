// JavaScript Document

var quantityQuestionsAsked = 3;                     //define variable
var scoreCorect = 0;                                //define variable
var scoreIncorrect = 0;                             //define variable
var questionsLeft =  quantityQuestionsAsked;        //define variable

while (questionsLeft > 0){                          //loop stops when questionsLeft equals zero
    var number1 =  Math.random(10);                 //define variable
    var number2 =  Math.random(10);                 //define variable
    var answerCorrect = number1 * number2;          //define variable
    var answer=prompt("What is ". number1 . "*". number2."?");          //displays question on the screen and answer is assigned to the variable answer
        if (answer == answerCorrect){               //if statement checks if the two variables are equal then it is TRUE
          scoreCorrect +1;                          //as the above if statement is TRUE then add 1 to the value of the variable
        }
        else{                                       // catch if the if statement is FALSE (if the answer given is incorrect)
          scoreIncorrect +1;                        //add 1 to incorrect score
        }
questionsLeft -1;                                   //delete 1 from the questionsLeft
}                                                   //end of loop
    document.Write "You got ". scoreCorrect . " answers right.";    //output how many answers were correct
    
    
    
    