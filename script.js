const questions = [
    {
        question: "Which company developed the Android operating system?",
        answers: [
            {text: "Microsoft", correct: false},
            {text: "Google", correct: true},
            {text: "Samsung", correct: false},
            {text: "Apple", correct: false},
        ]
    },
    {
        question: "Who is the founder of Microsoft Corporation?",
        answers: [
            {text: "Steve Jobs and Steve Wozniak", correct: false},
            {text: "Bill Gates and Paul Allen", correct: true},
            {text: "Larry Page and Sergey Brin", correct: false},
            {text: "Jeff Bezos and Andy Jassy", correct: false},
        ]
    },
    {
        question: "Which company is known for the creation of the first microprocessor?",
        answers: [
            {text: "Intel", correct: true},
            {text: "AMD", correct: false},
            {text: "NVIDIA", correct: false},
            {text: "IBM", correct: false},
        ]
    },
    {
        question: "Who is the CEO of Amazon as of 2024?",
        answers: [
            {text: "Jeff Bezos", correct: false},
            {text: "Tim Cook", correct: false},
            {text: "Sundar Pichai", correct: false},
            {text: "Andy Jassy", correct: true},
        ]
    },
    {
        question: "What is the name of Facebook’s parent company?",
        answers: [
            {text: "Alphabet Inc.", correct: false},
            {text: "Twitter Inc.", correct: false},
            {text: "Meta Platforms, Inc", correct: true},
            {text: "Snap Inc.", correct: false},
        ]
    },
    {
        question: "Which company acquired LinkedIn in 2016?",
        answers: [
            {text: "Microsoft", correct: true},
            {text: "Apple", correct: false},
            {text: "Facebook", correct: false},
            {text: "Google", correct: false},
        ]
    },
    {
    question: "What is the result of typeof null in JavaScript?",
    answers:[
           {text:"null",correct:false},
           {text:"object",correct:true},
           {text:"undefined",correct:false},
           {text:"number",correct:false},
        ]
    },
    {
    question: "What does the === operator do in JavaScript?",
    answers:[
          {text:"Checks for equality without type coercion",correct:true},
          {text:"Checks for equality with type coercion",correct:false},
          {text:"Assigns a value to a variable",correct:false},
          {text:"None of the above",correct:false},
    ]
    },
    {
    question: "Which built-in method reverses the order of elements in an array in JavaScript?",
    answers:[
          {text:"reverse()",correct:true},
          {text:"sort()",correct: false},
          {text:"join()",correct:false},
          {text:"slice()",correct:false},
    ] 
    },

{
    question: "What is the correct way to write a JavaScript comment?",
    answers:[
          {text:"// This is a comment",correct:true},
          {text:"<!-- This is a commtnt -->",correct:false},
          {text:"/* This is a comment */",correct:false},
          {text:"-- This is a comment --",correct:false},
]
},{
    question: "How do you declare a constant variable in JavaScript?",
    answers:[
        {text:"var",correct:false},
        {text:"let",correct:false},
        {text:"const",correct:true},
        {text:"const var",correct:false},

    ]
},
{

    question: "What is the output of 1 + '1' in JavaScript?",
    answers:[
        {text:" 2 " ,correct:false},
        {text: "11",correct:true},
        {text:"2" ,correct:false},
        {text:"NaN",correct:false},

    ]
},
{
    question:"Which method is used to add new elements to the end of an array?",
    answers:[
        {text:"push()",correct:true},
        {text:"append()",correct:false},
        {text:"addToEnd()",correct:false},
        {text:"insertLast()",correct:false},

    ]
},

{
    question:"What is the purpose of the setTimeout() function in JavaScript?",
    answers:[
        {text:"To execute a function after a specified delay",correct:true},
        {text:" To stop the execution of a function",correct:false},
        {text:" To repeat a function at regular intervals",correct:false},
        {text:" To execute a function immediately",correct:false},

    ]
},

{
    question:"What is the purpose of the try...catch statement in JavaScript?",

    answers:[
        {text:"To handle exceptions and errors",correct:true},
        {text:"To execute a block of code repeatedly",correct:false},
        {text:"To compare two values",correct:false},
        {text:"To declare a function",correct:false},

    ]
},

{
    question:"What does the Array.isArray() method check for?",
    answers:[
        {text:"If an array is empty",correct:false},
        {text:" If a variable is an array",correct:true},
        {text:" If an array has a specific length",correct:false},
        {text:" If a variable is undefined",correct:false},

    ]
},

{
    question:"Which keyword is used to exit a loop in JavaScript?",
    answers:[
        {text:"break",correct:true},
        {text:"exit",correct:false},
        {text:"stop",correct:false},
        {text:"end",correct:false},

    ]
},

{
    question:"How do you convert a string to an integer in JavaScript",
    answers:[
        {text:"parseInt()",correct:true},
        {text:" toInteger()",correct:false},
        {text:" String.toInt()",correct:false},
        {text:" castToInt()",correct:false},

    ]
},

{
    question:"What is the result of typeof undefined in JavaScript?",
    answers:[
        {text:"undefined",correct:true},
        {text:"null",correct:false},
        {text:"object",correct:false},
        {text:"number",correct:false},

    ]
},


{
    question:"What is the purpose of the Object.keys() method in JavaScript?",
    answers:[
        {text:"To return an array of an object's enumerable property names",correct:true},
        {text:" To check if an object has a specific property",correct:false},
        {text:" To retrieve the values of an object's properties",correct:false},
        {text:" To return the number of properties in an object",correct:false},

    ]
}

];
//fetching the data from html
const questionElement = document.getElementById("Question");
const answerButtons = document.getElementById("Answer-buttons");
const nextButton = document.getElementById("Next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState() {
    nextButton.style.display = "none";
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    } else {
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore() {
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
}

nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length) {
        handleNextButton();
    } else {
        startQuiz();
    }
});

startQuiz();
