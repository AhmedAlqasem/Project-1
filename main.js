/*====================Hıstory Quastıons=================




*/


//Sports
let answerNumber = 0;
let sportsQuestions = [
    {
        question: "Queen's berry rules ' is the name given to the rules in?",
        answers: [
            { answer: "Boxing", isCorect: true },
            { answer: "Cricket", isCorect: false },
            { answer: "Tennis", isCorect: false },
            { answer: "Hockey", isCorect: false }
        ],

    },
    {
        question: " Which of the following International Tennis Tournaments is held on grass court?",
        answers: [
            { answer: "US open", isCorect: false },
            { answer: "French Open", isCorect: false },
            { answer: "Australian Open", isCorect: false },
            { answer: " Wimbledon", isCorect: true }
        ],

    },
    {
        question: "Confederation Cup is associated with which of the following game?",
        answers: [
            { answer: "Football", isCorect: false },
            { answer: "Cricket", isCorect: false },
            { answer: "Badminton", isCorect: true },
            { answer: "Chess", isCorect: false }
        ],

    },
    {
        question: "Which country has won maximum number of World cup titles in football?",
        answers: [
            { answer: "Argentina", isCorect: false },
            { answer: "Brazil", isCorect: true },
            { answer: "Italy", isCorect: false },
            { answer: "Jordan", isCorect: false }
        ],

    },];
//History

let historyQuestions = [
    {
        question: "What was Jordan called, immediately prior to the establishment of the present day Hashemite Kingdom of Jordan?",
        answers: [
            { answer: "Transjordan", isCorect: true },
            { answer: "Levant", isCorect: false },
            { answer: "Arabia", isCorect: false },
            { answer: "Mesopotamia", isCorect: false }
        ],

    },
    {
        question: "When did Claudius become emperor of Rome?",
        answers: [
            { answer: "26 Julay 14 BC", isCorect: false },
            { answer: "10 May 37 AD", isCorect: false },
            { answer: "25 January 41 AD", isCorect: true },
            { answer: "18 December 84 BC", isCorect: false }
        ],

    },
    {
        question: "Ibn-eBattuta was a famous Arab historian and geographers. He belonged to?",
        answers: [
            { answer: "Turkey", isCorect: false },
            { answer: "Saudi Arabia", isCorect: false },
            { answer: "Morocco", isCorect: true },
            { answer: "Egypt", isCorect: false }
        ],

    },
    {
        question: " When was the Battle of the Yarmuk River?",
        answers: [
            { answer: "8 February 410", isCorect: false },
            { answer: "20 August 636", isCorect: true },
            { answer: "10 May 325", isCorect: false },
            { answer: "2 November 526", isCorect: false }
        ],

    },];

//MATH

let mathQuestions = [
    {
        question: "Which of these numbers is lower: -6 -12 -8 or -4?",
        answers: [
            { answer: " -6 ", isCorect: false },
            { answer: "-12", isCorect: false },
            { answer: "-8", isCorect: false },
            { answer: "-4", isCorect: true }
        ],

    },
    {
        question: "What is the square root of 49?",
        answers: [
            { answer: "16", isCorect: false },
            { answer: "12", isCorect: false },
            { answer: "10", isCorect: false },
            { answer: " 7", isCorect: true }
        ],

    },
    {
        question: "What happens to the area of a rectangle when you double the legth of both sides?",
        answers: [
            { answer: "Area is 2x", isCorect: false },
            { answer: "Area is 6x ", isCorect: false },
            { answer: "Area is 4x", isCorect: true },
            { answer: "Area is 8x", isCorect: false }
        ],

    },
    {
        question: "If you are selling 15 c-ds to 3 costomers how many c-d does each customer have?",
        answers: [
            { answer: "4", isCorect: false },
            { answer: "5", isCorect: true },
            { answer: "13", isCorect: false },
            { answer: "6", isCorect: false }
        ],

    },];
const examType = (type) => {
    if (type === "Sports") {
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
    if (type === "History") {
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
    if (type === "Math") {
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
const nextPage = () => {

    window.location = 'x.html';
}
let counter = 0;


const nextQuestion = (btn, type) => {
    if (answerNumber < 4) {
        if (btn.value) {
            if (btn.value === 'true') {
                counter++;


            }

            examType(type);
        }
    }
    else {
        nextPage();






        // }else{  }


    }
}

        //   if(answerNumber === 4)
        //   {
        //     document.location.href="Win.html";
        //   }
        //     examType(type);

        //   else{
        //     document.location.href="Lose/lose.html";
        //   }}






















