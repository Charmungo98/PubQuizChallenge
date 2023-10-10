const questions = [
    {
        question: "What is 2 + 2?",
        options: ["3", "4", "5", "6"],
        correctAnswer: "4"
    },
    {
        question: "What is the capital of France?",
        options: ["Berlin", "London", "Madrid", "Paris"],
        correctAnswer: "Paris"
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Earth", "Mars", "Venus", "Jupiter"],
        correctAnswer: "Mars"
    }
];


let currentQuestionIndex = 0;
let score = 0;
let timer;
const quizDuration = 30; // Set the duration of each question to 30 seconds
let timeLeft = quizDuration;


const questionText = document.getElementById('question-text');
const optionsList = document.getElementById('options');
const resultText = document.getElementById('result-text');
const restartBtn = document.getElementById('restart-btn');
const scoreTracker = document.getElementById('score-tracker');
const timerDisplay = document.getElementById('timer');

function loadQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionText.innerText = currentQuestion.question;
    optionsList.innerHTML = '';


    startTimer(); // Start the timer for the new question


    currentQuestion.options.forEach(option => {
        const li = document.createElement('li');
        const button = document.createElement('button');
        button.classList.add('option');
        button.innerText = option;
        button.addEventListener('click', checkAnswer);
        li.appendChild(button);
        optionsList.appendChild(li);
    });
}
function checkAnswer(event) {
    const selectedOption = event.target.innerText;
    const currentQuestion = questions[currentQuestionIndex];


    if (selectedOption === currentQuestion.correctAnswer) {
        score++;
        scoreTracker.innerText = `Score: ${score}`; // Update the score display
    }


    currentQuestionIndex++;


    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        showResult();
    }
}

const celebrationImage = document.getElementById('celebration-image');
const totalQuestionsDisplay = document.getElementById('total-questions');


function showResult() {
    questionText.style.display = 'none';
    optionsList.style.display = 'none';
    resultText.style.display = 'block';
    totalQuestionsDisplay.innerText = questions.length;
    scoreTracker.innerText = score;


    if (score === questions.length) {
        celebrationImage.style.display = 'block'; // Show the celebration image
    }


    restartBtn.style.display = 'block';
    clearInterval(timer); // Stop the timer
}
