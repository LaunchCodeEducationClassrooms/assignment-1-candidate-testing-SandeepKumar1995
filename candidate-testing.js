const input = require('readline-sync');
// TODO 2: modify your quiz app to ask 5 questions //
// TODO 1.1a: Define candidateName //
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
var question;
var correctAnswer;
var candidateAnswer;
var candidateName =" ";
var questions = [[ 'Who was the first American woman in space?'], ['True or false: 5000 meters = 5 kilometers.'], ['Given the array [8, Orbit, Trajectory, 45], what entry is at index 2?'], ['(5 + 3)/2 * 10 = ?'], ['What is the minimum crew size for the ISS?'] ];
var correctAnswers = [['sally ride'],['true'],['trajectory'], ['40'], ['3']];
var candidateAnswers = [];
var gradeQuiz = 0;

// TODO 1.1b: Ask for candidate's name //
function askForName() {
  var candidateName = input.question("Please enter your Name ", "candidateName");
  console.log(" ");
  console.log("Welcome to the test ", candidateName);
}
//function askQuestion() {
// TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
console.log("Welcome to part 2 and 3: Multiple Questions");
console.log(" ");

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
  var i=0;
  while (i < questions.length){ 
    candidateAnswers.push(input.question(i+1 + ")  " + questions[i]));
    if((correctAnswers[i]) == (candidateAnswers[i]).toLowerCase()){
      gradeQuiz+=1;
    }
    console.log("Candidate Answer  " + candidateAnswers[i])
    console.log("Correct Answer " + correctAnswers[i])
    console.log(" ");
    i++; 
  }
}

function runProgram() {
  // TODO 1.1c: Ask for candidate's name //
  askForName();
  console.log(" ");
  askQuestion();
  //gradeQuiz(this.candidateAnswers);
if (gradeQuiz >= 2){
  console.log(">>> Status: Pass <<< ");
}
else {
  console.log(">>> Status: FAILED <<<");
}
console.log(">>> Overall Grade: " + ((gradeQuiz/questions.length )*100) + "%  " + (gradeQuiz) + " of " + (questions.length) + " responses correct <<<");
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
 runProgram: runProgram
};
