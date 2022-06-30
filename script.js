 var timerEl = document.getElementById('countdown');
 var timeLeft = 75;
 var timeInterval;
 var btnStart = document.getElementById("btn-start");
 var welcome = document.getElementById("welcome");
 var questionPosition= 0;
 var btnA = document.querySelector("#AnswerA");
 var btnB = document.querySelector("#AnswerB") ;
 var btnC = document.querySelector("#AnswerC");
 var firstQuestion = document.querySelector("#firstQuestion");
 var divEl = document.querySelector("#container");
 var scoreEl = document.querySelector("#scores");
//  var score = 0;
 
var chosenAnswer;
var form = document.querySelector("#record");


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
  },
  {
    name: "what animal has the longest life span?",
    answers:["Turtle", "Elephant", "Greenwood Shark"],
    correct: "Olympia"
}
];



//  var divEl = document.querySelector("#container");
// divEl.addEventListener("click" , function (){

 

 function displayQuestion(){
 
   var curruntQuestion = questions[questionPosition]; 
 

 


    

 

  
 

 
 firstQuestion.textContent = curruntQuestion.name
   
  
   btnA.textContent = curruntQuestion.answers[0];
 
   
   btnB.textContent = curruntQuestion.answers[1];
  
  
   btnC.textContent = curruntQuestion.correct; 
  
  
  btnStart.style.visibility = "hidden";
    welcome.style.visibility = "hidden";
  divEl.style.visibility = "visible";
  btnA.addEventListener("click" , function() {
    timeLeft -=10;
  })
     
    btnB.addEventListener("click" , function(){

   
     
        timeLeft -=10;

       
  
       });

       var score = 0;

       btnC.addEventListener("click" , function(){
        score++;
       });

      
  
 }
  

  divEl.addEventListener( "click" ,  function(event){
   var element = event.target;
 if((element.matches("button"))){
 nextQuestion();
 }
 });






 function nextQuestion(){

 
   
   
 
     questionPosition++;
     displayQuestion();
 } 

 

  
   
  // btnB.addEventListener("click" , function(){
  //   questionPosition++;

  // })

  // function checkAnswer(){
  //   btnA.addEventListener("click" , function() {
     
     
  //     timeLeft -=10;
     

  //   })
  // }

  
   


 
   
  
   

  
  // btnA.addEventListener("click" , checkAnswer);

  
 
 

 

  
   
  
   //  divEl.textContent = "";
  
   //  checkAnswer();
  

 
  function endGame(){
   divEl.textContent = "";
   form.style.visibility = "visible";
  
  }
  
 
 

  

 



  
    
   
    
  
  
    
  


  
  
 




  //      questionPosition++;
    
      //  questions.shift()
     
     //  endGame();
    
 
     
  
    
     
   
 





 
 
 
  
 
     // calls clear interval 
     // names the var  timeinterval
 




   




 
 
  







    




  




 

 

 


 




 


















  
 



  


 

 


 
     

 



  
 
 
 



    
    
    

 
 
 
    
 

//  Timer that counts down from 75
  function countdown() {
    // var timeLeft = 75;
displayQuestion();
// //    Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
     timeInterval = setInterval(function () {
// //     // As long as the `timeLeft` is greater than 1
      if (timeLeft > 1) {
       // Set the `textContent` of `timerEl` to show the remaining seconds
        timerEl.textContent = timeLeft + ' seconds remaining';
// //       // Decrement `timeLeft` by 1
        
    //  } else if (timeLeft === 1) {
// //       // When `timeLeft` is equal to 1, rename to 'second' instead of 'seconds'
        timerEl.textContent = timeLeft + ' second remaining';
        timeLeft--;
      } else {
// //       // Once `timeLeft` gets to 0, set `timerEl` to an empty string

       timerEl.textContent = '';
// //       // Use `clearInterval()` to stop the timer
        clearInterval(timeInterval);
//     //  call the endGame function
        endGame();
     }
    }, 1000);
  }

 btnStart.addEventListener("click" ,  countdown)
