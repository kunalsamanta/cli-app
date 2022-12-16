var readlineSync = require("readline-sync");//for take input
var score = 0;
var userNmane = readlineSync.question("what is your name? ");
console.log("welcome " + userNmane + " to know kunal");
//highest score data
var highScore = [{
  name: "kunal",
  score: 10
},
{
  name: "ma",
  score: 9
}
]


//function for question ans
function play(question, answer) {
  var userAnswer = readlineSync.question(question);
  if (userAnswer === answer) {
    console.log("right");
    score = score + 1;
  }
  else {
    console.log("wrong");
  }
}
//console.log("your current score is: " + score);
//console.log("........");
// create an arry of object

var questions = [{
  question: "where do i live?",
  answer: "kolkata"
},
{
  question: "where do i work?",
  answer: "sun knowledge"
},
{
  question: "what is my favrit color?",
  answer: "blue"
},
{
  question:"what is my birthday?",
  answer:"23rd"
},
{
   question:"what is my father name?",
  answer:"kalyan"
}
  
                ];
// take the value from arry

for (var i = 0; i < questions.length; i++) {
  var currentQuestion = questions[i];
  //console.log(currentQuestion);
  play(currentQuestion.question, currentQuestion.answer);
}
console.log("your current score is: " + score);

// print the highst score
/*for(var i=0; i<highScore.length;i++ ){
  var highst=highScore[i];
  function max
}*/