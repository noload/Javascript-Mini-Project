const questions=[
    {
        question:"Ajax Stands For :",
        answer:[
            {
                text:"Asynchronous JavaScript Notation",correct:true
            },
            {
                text:"Anonymous object",correct:false
            },
            {
                text:"Asynchronous Java Object",correct:false
            },
            {
                text:"Asynchronous JSON Object",correct:false
            }]
},{
    question:"What is ES",
    answer:[
        {
            text:"Elaborate Standred",correct:false
        },
        {
            text:"Equation Statement",correct:false
        },
        {
            text:"Equilibrium State",correct:false
        },
        {
            text:"Echma Script",correct:true
        }

    ]
},
{
    question:"What is ES",
    answer:[
        {
            text:"Elaborate Standred",correct:false
        },
        {
            text:"Equation Statement",correct:false
        },
        {
            text:"Equilibrium State",correct:false
        },
        {
            text:"Echma Script",correct:true
        }

    ]
},
{
    question:"What is ES",
    answer:[
        {
            text:"Elaborate Standred",correct:false
        },
        {
            text:"Equation Statement",correct:false
        },
        {
            text:"Equilibrium State",correct:false
        },
        {
            text:"Echma Script",correct:true
        }

    ]
}
    
];

const questionEle=document.getElementById("question");
const answerEle=document.getElementById("answer");
const nextButton=document.getElementById("next-btn");
let currentQuestionIndex = 0;
let score=0;

function startQuiz(){
    currentQuestionIndex = 0;
     score=0;
     nextButton.innerHTML="Next";
     showQuestion();

}

function showQuestion(){
    resetState();
    let currentQuestion=questions[currentQuestionIndex];
    let queNo=currentQuestionIndex +1;
    questionEle.innerHTML=queNo +". "+currentQuestion.question;
   
    currentQuestion.answer.forEach(answer=>{
        const button=document.createElement('button');
        button.classList.add('btn');
        button.innerHTML=answer.text;
        answerEle.appendChild(button);
        if(answer.correct){
            button.dataset.correct=answer.correct;

        }

        button.addEventListener("click",selectedAnswer)
    })

}

function resetState(){
    nextButton.style.display="none";
    while (answerEle.firstChild) {
        answerEle.removeChild(answerEle.firstChild);
    }
}


function selectedAnswer(e){
    const selectedButton =e.target;
    const isCorrect=selectedButton.dataset.correct === "true";
    if(isCorrect){
        selectedButton.classList.add("correct");
        score++;
    }else{
        selectedButton.classList.add("incorrect");
    }

    Array.from(answerEle.children).forEach(button=>{
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled=true;
        
    });
    nextButton.style.display="block";


}

function showScore(){
    resetState();
    questionEle.innerHTML=`Your Score is ${score} out of ${questions.length}`
    nextButton.innerHTML="Play Again";
    nextButton.style.display="block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion(currentQuestionIndex);

    }else{
        showScore();
    }
}


nextButton.addEventListener("click",()=>{
    if (currentQuestionIndex <  questions.length) {
        handleNextButton();
    }else{
        startQuiz();
    }

})


startQuiz()