// Quiz Questions Database
const questionsDatabase = {
    general: [
        {
            question: "What is the capital of France?",
            options: ["London", "Berlin", "Paris", "Madrid"],
            answer: "Paris",
            explanation: "Paris has been the capital of France since the 5th century."
        },
        {
            question: "Which planet is known as the Red Planet?",
            options: ["Venus", "Mars", "Jupiter", "Saturn"],
            answer: "Mars",
            explanation: "Mars appears red due to iron oxide (rust) on its surface."
        },
        {
            question: "Who painted the Mona Lisa?",
            options: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Michelangelo"],
            answer: "Leonardo da Vinci",
            explanation: "Leonardo da Vinci painted the Mona Lisa between 1503 and 1506."
        },
        {
            question: "What is the largest ocean on Earth?",
            options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
            answer: "Pacific Ocean",
            explanation: "The Pacific Ocean covers about 63 million square miles."
        },
        {
            question: "Which element has the chemical symbol 'O'?",
            options: ["Gold", "Oxygen", "Osmium", "Oganesson"],
            answer: "Oxygen",
            explanation: "Oxygen is essential for respiration and has atomic number 8."
        }
    ],
    science: [
        {
            question: "What is the chemical formula for water?",
            options: ["H2O", "CO2", "NaCl", "O2"],
            answer: "H2O",
            explanation: "Water consists of two hydrogen atoms and one oxygen atom."
        },
        {
            question: "What is the hardest natural substance on Earth?",
            options: ["Gold", "Iron", "Diamond", "Quartz"],
            answer: "Diamond",
            explanation: "Diamond scores 10 on the Mohs scale of mineral hardness."
        },
        {
            question: "Which gas do plants absorb from the atmosphere?",
            options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"],
            answer: "Carbon Dioxide",
            explanation: "Plants use CO2 for photosynthesis, releasing oxygen as a byproduct."
        },
        {
            question: "What is the speed of light in a vacuum?",
            options: ["300,000 km/s", "150,000 km/s", "1 million km/s", "30 km/s"],
            answer: "300,000 km/s",
            explanation: "The exact value is 299,792 km/s, often rounded to 300,000 km/s."
        },
        {
            question: "Which scientist developed the theory of relativity?",
            options: ["Isaac Newton", "Albert Einstein", "Galileo Galilei", "Stephen Hawking"],
            answer: "Albert Einstein",
            explanation: "Einstein published his special theory of relativity in 1905."
        }
    ],
    history: [
        {
            question: "In which year did World War II end?",
            options: ["1943", "1945", "1947", "1950"],
            answer: "1945",
            explanation: "WWII ended on September 2, 1945, with Japan's formal surrender."
        },
        {
            question: "Who was the first president of the United States?",
            options: ["Thomas Jefferson", "John Adams", "George Washington", "Abraham Lincoln"],
            answer: "George Washington",
            explanation: "Washington served from 1789 to 1797 as the first U.S. president."
        },
        {
            question: "Which ancient civilization built the pyramids?",
            options: ["Greeks", "Romans", "Egyptians", "Mayans"],
            answer: "Egyptians",
            explanation: "The Great Pyramid of Giza was built around 2560 BCE."
        },
        {
            question: "When was the Declaration of Independence signed?",
            options: ["1776", "1789", "1801", "1812"],
            answer: "1776",
            explanation: "The Declaration was adopted on July 4, 1776."
        },
        {
            question: "Who discovered America in 1492?",
            options: ["Vasco da Gama", "Christopher Columbus", "Ferdinand Magellan", "James Cook"],
            answer: "Christopher Columbus",
            explanation: "Columbus made four voyages across the Atlantic Ocean."
        }
    ],
    geography: [
        {
            question: "Which is the longest river in the world?",
            options: ["Amazon", "Nile", "Yangtze", "Mississippi"],
            answer: "Nile",
            explanation: "The Nile is approximately 6,650 km (4,130 miles) long."
        },
        {
            question: "What is the largest country by area?",
            options: ["China", "United States", "Canada", "Russia"],
            answer: "Russia",
            explanation: "Russia covers about 17.1 million square kilometers."
        },
        {
            question: "Which desert is the largest in the world?",
            options: ["Sahara", "Arabian", "Gobi", "Kalahari"],
            answer: "Sahara",
            explanation: "The Sahara covers about 9.2 million square kilometers."
        },
        {
            question: "Which continent is the most populous?",
            options: ["Africa", "Europe", "Asia", "North America"],
            answer: "Asia",
            explanation: "Asia has over 4.6 billion people (about 60% of world population)."
        },
        {
            question: "What is the capital of Japan?",
            options: ["Beijing", "Seoul", "Tokyo", "Bangkok"],
            answer: "Tokyo",
            explanation: "Tokyo has been Japan's capital since 1868."
        }
    ],
    entertainment: [
        {
            question: "Who played Jack Dawson in Titanic?",
            options: ["Brad Pitt", "Johnny Depp", "Leonardo DiCaprio", "Matt Damon"],
            answer: "Leonardo DiCaprio",
            explanation: "DiCaprio starred opposite Kate Winslet in the 1997 film."
        },
        {
            question: "Which band sang 'Bohemian Rhapsody'?",
            options: ["The Beatles", "Queen", "Led Zeppelin", "Pink Floyd"],
            answer: "Queen",
            explanation: "Released in 1975 on the album 'A Night at the Opera'."
        },
        {
            question: "What is the name of the wizard school in Harry Potter?",
            options: ["Hogwarts", "Beauxbatons", "Durmstrang", "Ilvermorny"],
            answer: "Hogwarts",
            explanation: "Hogwarts School of Witchcraft and Wizardry is in Scotland."
        },
        {
            question: "Who created the Marvel Cinematic Universe?",
            options: ["Stan Lee", "Kevin Feige", "Disney", "Jack Kirby"],
            answer: "Kevin Feige",
            explanation: "Feige has been president of Marvel Studios since 2007."
        },
        {
            question: "Which video game features a character named Mario?",
            options: ["Sonic the Hedgehog", "Super Mario Bros", "The Legend of Zelda", "Donkey Kong"],
            answer: "Super Mario Bros",
            explanation: "Mario first appeared in the 1981 arcade game Donkey Kong."
        }
    ],
    sports: [
        {
            question: "Which country won the 2018 FIFA World Cup?",
            options: ["Germany", "Brazil", "France", "Croatia"],
            answer: "France",
            explanation: "France defeated Croatia 4-2 in the final."
        },
        {
            question: "How many players are on a baseball team's fielding side?",
            options: ["9", "10", "11", "12"],
            answer: "9",
            explanation: "Positions include pitcher, catcher, infielders, and outfielders."
        },
        {
            question: "Which athlete has the most Olympic gold medals?",
            options: ["Usain Bolt", "Michael Phelps", "Carl Lewis", "Larisa Latynina"],
            answer: "Michael Phelps",
            explanation: "Phelps won 23 gold medals in swimming."
        },
        {
            question: "In tennis, what is a zero score called?",
            options: ["Nil", "Zero", "Love", "Null"],
            answer: "Love",
            explanation: "The origin is uncertain but may come from French 'l'oeuf' (the egg)."
        },
        {
            question: "Which sport uses a shuttlecock?",
            options: ["Tennis", "Badminton", "Squash", "Table Tennis"],
            answer: "Badminton",
            explanation: "Also called a birdie, it's hit with a racket over a net."
        }
    ]
};

// Difficulty modifiers
const difficultySettings = {
    easy: { timePerQuestion: 30, scoreMultiplier: 1 },
    medium: { timePerQuestion: 20, scoreMultiplier: 1.5 },
    hard: { timePerQuestion: 15, scoreMultiplier: 2 }
};

// DOM Elements
const startScreen = document.getElementById('start-screen');
const quizScreen = document.getElementById('quiz-screen');
const resultsScreen = document.getElementById('results-screen');
const startBtn = document.getElementById('start-btn');
const nextBtn = document.getElementById('next-btn');
const quitBtn = document.getElementById('quit-btn');
const restartBtn = document.getElementById('restart-btn');
const newCategoriesBtn = document.getElementById('new-categories-btn');
const questionText = document.getElementById('question-text');
const optionsContainer = document.querySelector('.options-container');
const questionNumber = document.getElementById('question-number');
const questionCategory = document.getElementById('question-category');
const scoreDisplay = document.getElementById('score-display');
const timerDisplay = document.getElementById('timer-display');
const finalScore = document.getElementById('final-score');
const correctAnswers = document.getElementById('correct-answers');
const timeTaken = document.getElementById('time-taken');
const reviewContainer = document.getElementById('review-container');

// Quiz Variables
let currentQuestions = [];
let currentQuestionIndex = 0;
let score = 0;
let correctCount = 0;
let timer;
let timeLeft;
let selectedCategories = [];
let selectedDifficulty = 'easy';
let quizStartTime;
let userAnswers = [];

// Event Listeners
startBtn.addEventListener('click', startQuiz);
nextBtn.addEventListener('click', nextQuestion);
quitBtn.addEventListener('click', endQuiz);
restartBtn.addEventListener('click', restartQuiz);
newCategoriesBtn.addEventListener('click', showStartScreen);

// Initialize the app
function init() {
    updateScoreDisplay();
    // Set default selected categories
    document.querySelectorAll('input[name="category"]:checked').forEach(checkbox => {
        selectedCategories.push(checkbox.value);
    });
    
    // Listen for category changes
    document.querySelectorAll('input[name="category"]').forEach(checkbox => {
        checkbox.addEventListener('change', updateSelectedCategories);
    });
    
    // Listen for difficulty changes
    document.querySelectorAll('input[name="difficulty"]').forEach(radio => {
        radio.addEventListener('change', (e) => {
            selectedDifficulty = e.target.value;
        });
    });
}

// Update selected categories
function updateSelectedCategories() {
    selectedCategories = [];
    document.querySelectorAll('input[name="category"]:checked').forEach(checkbox => {
        selectedCategories.push(checkbox.value);
    });
}

// Start the quiz
function startQuiz() {
    if (selectedCategories.length === 0) {
        alert('Please select at least one category!');
        return;
    }
    
    // Prepare questions
    currentQuestions = [];
    selectedCategories.forEach(category => {
        const categoryQuestions = [...questionsDatabase[category]];
        currentQuestions = currentQuestions.concat(categoryQuestions);
    });
    
    // Shuffle questions
    currentQuestions = shuffleArray(currentQuestions).slice(0, 10); // Limit to 10 questions
    
    if (currentQuestions.length === 0) {
        alert('No questions available for selected categories!');
        return;
    }
    
    // Reset quiz variables
    currentQuestionIndex = 0;
    score = 0;
    correctCount = 0;
    userAnswers = [];
    updateScoreDisplay();
    
    // Set timer based on difficulty
    const { timePerQuestion } = difficultySettings[selectedDifficulty];
    timeLeft = currentQuestions.length * timePerQuestion;
    updateTimerDisplay();
    
    // Record start time
    quizStartTime = new Date();
    
    // Start timer
    timer = setInterval(() => {
        timeLeft--;
        updateTimerDisplay();
        
        if (timeLeft <= 0) {
            clearInterval(timer);
            endQuiz();
        }
    }, 1000);
    
    // Show quiz screen
    startScreen.classList.remove('active');
    quizScreen.classList.add('active');
    
    // Display first question
    showQuestion();
}

// Display current question
function showQuestion() {
    const question = currentQuestions[currentQuestionIndex];
    questionText.textContent = question.question;
    
    // Update question number display
    questionNumber.textContent = `Question ${currentQuestionIndex + 1}/${currentQuestions.length}`;
    
    // Update category display
    const categoryName = getCategoryName(question);
    questionCategory.textContent = categoryName;
    
    // Clear previous options
    optionsContainer.innerHTML = '';
    
    // Shuffle options
    const shuffledOptions = shuffleArray([...question.options]);
    
    // Create option buttons
    shuffledOptions.forEach(option => {
        const button = document.createElement('button');
        button.textContent = option;
        button.classList.add('option-btn');
        button.addEventListener('click', () => selectOption(option));
        optionsContainer.appendChild(button);
    });
    
    // Reset next button
    nextBtn.disabled = true;
}

// Get category name for display
function getCategoryName(question) {
    for (const category in questionsDatabase) {
        if (questionsDatabase[category].includes(question)) {
            switch(category) {
                case 'general': return 'General Knowledge';
                case 'science': return 'Science';
                case 'history': return 'History';
                case 'geography': return 'Geography';
                case 'entertainment': return 'Entertainment';
                case 'sports': return 'Sports';
                default: return category;
            }
        }
    }
    return '';
}

// Handle option selection
function selectOption(selectedOption) {
    const question = currentQuestions[currentQuestionIndex];
    const optionButtons = document.querySelectorAll('.option-btn');
    
    // Disable all options
    optionButtons.forEach(button => {
        button.disabled = true;
    });
    
    // Mark correct and incorrect answers
    optionButtons.forEach(button => {
        if (button.textContent === question.answer) {
            button.classList.add('correct');
        } else if (button.textContent === selectedOption && selectedOption !== question.answer) {
            button.classList.add('incorrect');
        }
    });
    
    // Check if answer is correct
    const isCorrect = selectedOption === question.answer;
    if (isCorrect) {
        // Calculate score based on time left and difficulty
        const { scoreMultiplier } = difficultySettings[selectedDifficulty];
        const timeBonus = Math.floor(timeLeft / currentQuestions.length) * 10;
        score += 100 * scoreMultiplier + timeBonus;
        correctCount++;
    }
    
    // Store user answer for review
    userAnswers.push({
        question: question.question,
        userAnswer: selectedOption,
        correctAnswer: question.answer,
        isCorrect,
        explanation: question.explanation
    });
    
    updateScoreDisplay();
    nextBtn.disabled = false;
}

// Move to next question
function nextQuestion() {
    currentQuestionIndex++;
    
    if (currentQuestionIndex < currentQuestions.length) {
        showQuestion();
    } else {
        endQuiz();
    }
}

// End the quiz
function endQuiz() {
    clearInterval(timer);
    
    // Calculate time taken
    const quizEndTime = new Date();
    const timeTakenSeconds = Math.floor((quizEndTime - quizStartTime) / 1000);
    
    // Update results screen
    finalScore.textContent = score;
    correctAnswers.textContent = `${correctCount}/${currentQuestions.length}`;
    timeTaken.textContent = `${timeTakenSeconds}s`;
    
    // Display answer review
    reviewContainer.innerHTML = '';
    userAnswers.forEach((answer, index) => {
        const reviewItem = document.createElement('div');
        reviewItem.classList.add('review-item');
        reviewItem.classList.add(answer.isCorrect ? 'correct' : 'incorrect');
        
        reviewItem.innerHTML = `
            <div class="review-question">${index + 1}. ${answer.question}</div>
            <div class="review-answer">
                <span>Your answer:</span>
                <span>${answer.userAnswer}</span>
            </div>
            ${!answer.isCorrect ? `
            <div class="review-answer">
                <span>Correct answer:</span>
                <span>${answer.correctAnswer}</span>
            </div>` : ''}
            <div class="review-explanation">${answer.explanation}</div>
        `;
        
        reviewContainer.appendChild(reviewItem);
    });
    
    // Show results screen
    quizScreen.classList.remove('active');
    resultsScreen.classList.add('active');
}

// Restart the quiz with same categories
function restartQuiz() {
    resultsScreen.classList.remove('active');
    startQuiz();
}

// Return to start screen to choose new categories
function showStartScreen() {
    resultsScreen.classList.remove('active');
    startScreen.classList.add('active');
}

// Update score display
function updateScoreDisplay() {
    scoreDisplay.textContent = `Score: ${score}`;
}

// Update timer display
function updateTimerDisplay() {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    timerDisplay.textContent = `Time: ${minutes}m ${seconds}s`;
    
    // Change color when time is running low
    if (timeLeft <= 10) {
        timerDisplay.style.color = 'var(--error-color)';
    } else if (timeLeft <= 30) {
        timerDisplay.style.color = 'var(--warning-color)';
    } else {
        timerDisplay.style.color = 'inherit';
    }
}

// Utility function to shuffle array
function shuffleArray(array) {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
}

// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', init);
