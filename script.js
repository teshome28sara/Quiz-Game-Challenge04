var timerEl = document.getElementById('countdown');

var btnStart = document.getElementById("btn-start");
var welcome = document.getElementById("welcome");
var questionPosition = 0;

// var next = divEl.querySelector(".next");
 
var count;
var questions =[
    {
        name: "what is the biggest body of water in the world?",
         answers:["Atlantic", "Pacific", "Arctic"],
        correct:"Pacific"
    },
    {
        name: "what is the biggest mountin in the world?",
         answers:["Mount Rainier", "Mount Baker", "Mount Everest"],
        correct:"Mount Everest"
    },
    {
        name: "what is the capital of Washington State?",
         answers:["Seattle", "Olympia", "Tacoma"],
        correct: "true"
    }
 ];
 function startQuiz( ){
  btnStart.style.visibility = "hidden";
  welcome.style.visibility = "hidden";
 countdown();
 
     

 }

 function displayeQuestion(){
  var divEl = document.querySelector(".container");
  var curruntQuestion = questions[questionPosition].name
  for(var i = 0; i < questions.length; i++){
    curruntQuestion  += questions.name[Math.floor(Math.random()*questions.length)];

  }
 }
 
 



    
    
    

 
 
 
    
 

// Timer that counts down from 5
function countdown() {
  var timeLeft = 75;

  // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
  var timeInterval = setInterval(function () {
    // As long as the `timeLeft` is greater than 1
    if (timeLeft > 1) {
      // Set the `textContent` of `timerEl` to show the remaining seconds
      timerEl.textContent = timeLeft + ' seconds remaining';
      // Decrement `timeLeft` by 1
      timeLeft--;
    } else if (timeLeft === 1) {
      // When `timeLeft` is equal to 1, rename to 'second' instead of 'seconds'
      timerEl.textContent = timeLeft + ' second remaining';
      timeLeft--;
    } else {
      // Once `timeLeft` gets to 0, set `timerEl` to an empty string
      timerEl.textContent = '';
      // Use `clearInterval()` to stop the timer
      clearInterval(timeInterval);
      // Call the `displayMessage()` function
    //    displayQuestion();
    }
  }, 1000);
}
btnStart.addEventListener('click', startQuiz);
