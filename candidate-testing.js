/ TODO 2: modify your quiz app to ask 5 questions //
// TODO 1.1a: Define candidateName //
console.log("Welcome to part 1: Minimum Viable Quiz");
console.log(" ");
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
var question;
var correctAnswer;
var candidateAnswer;
var questions;
var correctAnswers;
var candidateAnswers;
 //function askForName() {
  // TODO 1.1b: Ask for candidate's name //
var candidateName = (prompt("Please enter your Name", "candidateName"));
console.log(" ");
console.log("Welcome to the test ", candidateName);
//}
//function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
  console.log(" ");
var candidateAnswer = (prompt("Who was the first American woman in space?", "candidateAnswer"));
  correctAnswer = candidateAnswer;
while(true)
{
  if (correctAnswer ==="Sally Ride")
  {
    console.log(" ");
  console.log("Congratulations your answer " + correctAnswer + " is correct");
  break;
  }
  else
  {
    correctAnswer = (prompt("Please check your answer and attempt again", "correctAnswer"));
  }
}
console.log(" ");
console.log("End of Part one");
console.log(" ");
console.log(" ");
//}
console.log("Welcome to part 2 and 3: Multiple Questions");
console.log(" ");

// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
var questions = [[ 'Who was the first American woman in space?'], 
['True or false: 5000 meters = 5 kilometers.'], 
["Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2?"],
['(5 + 3)/2 * 10 = ?'], 
['What is the minimum crew size for the ISS?'] ];
var correctAnswers = [['Sally Ride'],['true'],['Trajectory'], ['40'], ['3']];
var candidateAnswers = [];
var gradeQuiz = 0;
function askForName() {
// TODO 1.1b: Ask for candidate's name //
var candidateName = (prompt("Please enter your Name", "candidateName"));
console.log(" ");
console.log("Welcome to the test ", candidateName);
}
askForName();

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
  var i=0;
    while (i < questions.length){ 
   
      candidateAnswers.push((prompt(i+1 + ")  " + questions[i])));
      if(correctAnswers[i] == candidateAnswers[i]){
        gradeQuiz+=1;
      }
       console.log("Candidate Answer  " + candidateAnswers[i])
      console.log("Correct Answer " + correctAnswer[i])
      console.log(" ");
         i++; 

}
}
askQuestion();
console.log(">>> Overall Grade: " + ((gradeQuiz/questions.length )*100) + "%  " + (gradeQuiz) + " of " + (questions.length) + " responses correct <<<");
if (gradeQuiz >= 2){
  console.log(">>> Status: Pass <<< ");
}
else {
  console.log(">>> Status: FAILED <<<");
}
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
//  runProgram: runProgram
};
