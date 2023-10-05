const questions = [
    {
        question: "What is the capital of France?",
        options: ["Paris", "Berlin", "Madrid", "London"],
        correctAnswer: "Paris"
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Venus", "Mars", "Jupiter", "Saturn"],
        correctAnswer: "Mars"
    },
    {
        question: "What is 2 + 2?",
        options: ["3", "4", "5", "6"],
        correctAnswer: "4"
    }
];


let currentQuestionIndex = 0;
let score = 0;

const questionElement = document.getElementById('question');
const optionsElement = document.getElementById('options');
const resultElement = document.getElementById('result');

function showQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
    optionsElement.innerHTML = '';

    currentQuestion.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.type = 'submit';
        button.name = 'answer';
        button.id = `option${index}`;
        button.value = option;
        button.textContent = option;
        // const label = document.createElement('label');
        // label.textContent = option;
        // label.setAttribute('for', `option${index}`);

        optionsElement.appendChild(button);
        button.addEventListener('click', checkAnswer);
        // optionsElement.appendChild(label);
    });
}

function checkAnswer() {
    const selectedOption = document.querySelector('button[name="answer"]:checked');

    if (!selectedOption) {
        alert('Please select an option.');
        return;
    }

    const userAnswer = selectedOption.value;
    const currentQuestion = questions[currentQuestionIndex];

    if (userAnswer === currentQuestion.correctAnswer) {
        score++;
    }

    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    questionElement.style.display = 'none';
    optionsElement.style.display = 'none';
    document.getElementById('next-button').style.display = 'none';
    resultElement.textContent = `You got ${score} out of ${questions.length} questions correct!`;
}

document.getElementById('next-button').addEventListener('click', checkAnswer);

showQuestion();

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add('correct');
    }
    else{
        selectedBtn.classList.add('incorrect');
    }
}