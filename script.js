 var timerEl = document.getElementById('countdown');
 var timeInterval;
 var btnStart = document.getElementById("btn-start");
 var welcome = document.getElementById("welcome");
 var questionPosition= 0;

var divEl = document.querySelector("#container");




 function displayQuestion(){


    

  var curruntQuestion = questions[questionPosition] 

  
  var body = document.body

  var pEl = document.createElement("p")
  pEl.textContent = curruntQuestion.name
  body.appendChild(pEl)
 divEl.appendChild(pEl)

 
   var buttonEl = document.createElement("button");
   buttonEl.textContent = curruntQuestion.answers[0];
  body.appendChild(divEl)
   divEl.appendChild(buttonEl)
   var buttonEl = document.createElement("button");
   buttonEl.textContent = curruntQuestion.answers[1];
   body.appendChild(divEl)
   divEl.appendChild(buttonEl)
   var buttonEl = document.createElement("button");
   buttonEl.textContent = curruntQuestion.correct;
   body.appendChild(divEl)
   divEl.appendChild(buttonEl)
  btnStart.style.visibility = "hidden";
    welcome.style.visibility = "hidden";
   
 }

 divEl.addEventListener( "click" ,  function(event){
   var element = event.target;
if((element.matches("button"))){ 
nextQuestion();
}
 });


 function nextQuestion(){
    divEl.textContent = ""
    questionPosition++;
    //  questions.shift()
     displayQuestion();
   
 }

function showNextQuestion(){
     var  chosenAnswers = "";

 }

 function endGame(){
     // calls clear interval 
     // names the var  timeinterval
 }




   




 
 
  







    




  




 

 

 


 




 


















  
 



  


 

 var questions =[
     {
         name: "what is the biggest body of water in the world?",
          answers: ["Atlantic",
           "Arctic"],
         correct:"Pacific"
     },
     {
         name: "what is the biggest mountin in the world?",
          answers:["Mount Rainier",
          "Mount Kibo"],

         correct:"Mount Everest"
     },
     {
         name: "what is the capital of Washington State?",
         answers:["Seattle", "Olympia", "Tacoma"],
         correct: "Olympia"
     }
  ];




 
     

 



  
 
 
 



    
    
    

 
 
 
    
 

//  Timer that counts down from 75
  function countdown() {
    var timeLeft = 75;
displayQuestion();
// //    Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
     timeInterval = setInterval(function () {
// //     // As long as the `timeLeft` is greater than 1
      if (timeLeft > 1) {
       // Set the `textContent` of `timerEl` to show the remaining seconds
        timerEl.textContent = timeLeft + ' seconds remaining';
// //       // Decrement `timeLeft` by 1
        
//      } else if (timeLeft === 1) {
// //       // When `timeLeft` is equal to 1, rename to 'second' instead of 'seconds'
        timerEl.textContent = timeLeft + ' second remaining';
        timeLeft--;
      } else {
// //       // Once `timeLeft` gets to 0, set `timerEl` to an empty string
      timerEl.textContent = '';
// //       // Use `clearInterval()` to stop the timer
        clearInterval(timeInterval);
//     //  call the endGame function
//          endGame();
     }
    }, 1000);
  }

 btnStart.addEventListener("click" ,  countdown);
