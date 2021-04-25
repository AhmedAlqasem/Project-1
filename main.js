/*====================Hıstory Quastıons=================




*/


//Sports
let answerNumber=0;
let sportsQuestions = [
    {
      question: "Queen's berry rules ' is the name given to the rules in?",
      answers:[
        {answer:"Boxing",isCorect:true},
         {answer:"Cricket",isCorect:false},
          {answer:"Tennis",isCorect:false},
         { answer:"Hockey",isCorect:false}
    ],
      
    },
    {
        question: " Which of the following International Tennis Tournaments is held on grass court?",
        answers:[
          {answer:"US open",isCorect:false},
           {answer:"French Open",isCorect:false},
            {answer:"Australian Open",isCorect:false},
           { answer:" Wimbledon",isCorect:true}
      ],
        
      },
      {
        question: "Confederation Cup is associated with which of the following game?",
        answers:[
          {answer:"Football",isCorect:false},
           {answer:"Cricket",isCorect:false},
            {answer:"Badminton",isCorect:true},
           { answer:"Chess",isCorect:false}
      ],
        
      },
      {
        question: "Which country has won maximum number of World cup titles in football?",
        answers:[
          {answer:"Argentina",isCorect:false},
           {answer:"Brazil",isCorect:true},
            {answer:"Italy",isCorect:false},
           { answer:"Jordan",isCorect:false}
      ],
        
      },];
      //History
      
      let historyQuestions = [
        {
          question: "Queen's berry rules ' is the name given to the rules in?hhhhhhhhhhhhh",
          answers:[
            {answer:"Boxing",isCorect:true},
             {answer:"Cricket",isCorect:false},
              {answer:"Tennis",isCorect:false},
             { answer:"Hockey",isCorect:false}
        ],
          
        },
        {
            question: " Which of the following International Tennis Tournaments is held on grass court?",
            answers:[
              {answer:"US open",isCorect:false},
               {answer:"French Open",isCorect:false},
                {answer:"Australian Open",isCorect:false},
               { answer:" Wimbledon",isCorect:true}
          ],
            
          },
          {
            question: "Confederation Cup is associated with which of the following game?",
            answers:[
              {answer:"Football",isCorect:false},
               {answer:"Cricket",isCorect:false},
                {answer:"Badminton",isCorect:true},
               { answer:"Chess",isCorect:false}
          ],
            
          },
          {
            question: "Which country has won maximum number of World cup titles in football?",
            answers:[
              {answer:"Argentina",isCorect:false},
               {answer:"Brazil",isCorect:true},
                {answer:"Italy",isCorect:false},
               { answer:"Jordan",isCorect:false}
          ],
            
          },];

          //MATH

          let mathQuestions = [
            {
              question: "Queen's berry rules ' is the name given to the rules in?ffffffffffffffff",
              answers:[
                {answer:"Boxing",isCorect:true},
                 {answer:"Cricket",isCorect:false},
                  {answer:"Tennis",isCorect:false},
                 { answer:"Hockey",isCorect:false}
            ],
              
            },
            {
                question: " Which of the following International Tennis Tournaments is held on grass court?",
                answers:[
                  {answer:"US open",isCorect:false},
                   {answer:"French Open",isCorect:false},
                    {answer:"Australian Open",isCorect:false},
                   { answer:" Wimbledon",isCorect:true}
              ],
                
              },
              {
                question: "Confederation Cup is associated with which of the following game?",
                answers:[
                  {answer:"Football",isCorect:false},
                   {answer:"Cricket",isCorect:false},
                    {answer:"Badminton",isCorect:true},
                   { answer:"Chess",isCorect:false}
              ],
                
              },
              {
                question: "Which country has won maximum number of World cup titles in football?",
                answers:[
                  {answer:"Argentina",isCorect:false},
                   {answer:"Brazil",isCorect:true},
                    {answer:"Italy",isCorect:false},
                   { answer:"Jordan",isCorect:false}
              ],
                
              },];
      const  examType = (type) => {
        if(type==="Sports"){
         document.getElementById("questionTitle").innerHTML = sportsQuestions[answerNumber].question;
         document.getElementById("answer1").textContent = sportsQuestions[answerNumber].answers[0].answer;
         document.getElementById("answer1").value = sportsQuestions[answerNumber].answers[0].isCorect;
         document.getElementById("answer2").textContent = sportsQuestions[answerNumber].answers[1].answer;
         document.getElementById("answer2").value = sportsQuestions[answerNumber].answers[1].isCorect;
         document.getElementById("answer3").textContent = sportsQuestions[answerNumber].answers[2].answer;
         document.getElementById("answer3").value = sportsQuestions[answerNumber].answers[2].isCorect;
         document.getElementById("answer4").textContent = sportsQuestions[answerNumber].answers[3].answer;
         document.getElementById("answer4").value = sportsQuestions[answerNumber].answers[3].isCorect;
         

        
         answerNumber++;
        }
        if(type==="History"){
            document.getElementById("questionTitle").innerHTML = historyQuestions[answerNumber].question;
            document.getElementById("answer1").textContent = historyQuestions[answerNumber].answers[0].answer;
            document.getElementById("answer1").value = historyQuestions[answerNumber].answers[0].isCorect;
            document.getElementById("answer2").textContent = historyQuestions[answerNumber].answers[1].answer;
            document.getElementById("answer2").value = historyQuestions[answerNumber].answers[1].isCorect;
            document.getElementById("answer3").textContent = historyQuestions[answerNumber].answers[2].answer;
            document.getElementById("answer3").value = historyQuestions[answerNumber].answers[2].isCorect;
            document.getElementById("answer4").textContent = historyQuestions[answerNumber].answers[3].answer;
            document.getElementById("answer4").value = historyQuestions[answerNumber].answers[3].isCorect;
            
   
          
            answerNumber++;
        }
        if(type==="Math"){
            document.getElementById("questionTitle").innerHTML = mathQuestions[answerNumber].question;
            document.getElementById("answer1").textContent = mathQuestions[answerNumber].answers[0].answer;
            document.getElementById("answer1").value = mathQuestions[answerNumber].answers[0].isCorect;
            document.getElementById("answer2").textContent = mathQuestions[answerNumber].answers[1].answer;
            document.getElementById("answer2").value = mathQuestions[answerNumber].answers[1].isCorect;
            document.getElementById("answer3").textContent = mathQuestions[answerNumber].answers[2].answer;
            document.getElementById("answer3").value = mathQuestions[answerNumber].answers[2].isCorect;
            document.getElementById("answer4").textContent = mathQuestions[answerNumber].answers[3].answer;
            document.getElementById("answer4").value = mathQuestions[answerNumber].answers[3].isCorect;
            
            
            answerNumber++;
        }
      }
      
      const nextQuestion = (btn,type) => {debugger;
        if(btn.value === 'true'){
          if(answerNumber === 4)
          {
            document.location.href="Win.html";
          }
            examType(type);
          }
          else{
            document.location.href="Lose/lose.html";
          }
      }


















