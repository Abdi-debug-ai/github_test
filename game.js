// Initialize EmailJS with your user ID
(function() {
    emailjs.init("abdihalimnasir@gmail.com"); // Replace YOUR_USER_ID with your actual EmailJS User ID
})();

// JavaScript for Contact Form Submission
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Send the email using EmailJS
    emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", {
        from_name: name,
        from_email: email,
        message: message
    })
    .then(function(response) {
        alert("Thank you for your message, " + name + "! We'll get back to you soon.");
        document.getElementById("contactForm").reset();
    }, function(error) {
        alert('There was a problem with your submission. Please try again later.');
        console.error('Error:', error);
    });
});
    const quizData = [
        {
            question: "What year did the war in Ukraine begin?",
            answers: [
                { text: "2014", correct: true },
                { text: "2020", correct: false },
                { text: "2018", correct: false },
                { text: "2016", correct: false },
            ]
        },
        {
            question: "Which organization imposed sanctions on Russia due to the annexation of Crimea?",
            answers: [
                { text: "NATO", correct: false },
                { text: "United Nations", correct: false },
                { text: "European Union", correct: true },
                { text: "G7", correct: false },
            ]
        },
        {
            question: "What is the main focus of the Paris Agreement?",
            answers: [
                { text: "Climate Change", correct: true },
                { text: "Trade Agreements", correct: false },
                { text: "Human Rights", correct: false },
                { text: "Military Alliances", correct: false },
            ]
        }
    ];

    let currentQuestionIndex = 0;
    let score = 0;

    function startQuiz() {
        currentQuestionIndex = 0;
        score = 0;
        nextButton.style.display = 'none';
        scoreContainer.style.display = 'none';
        quizContainer.style.display = 'block';
        showQuestion(quizData[currentQuestionIndex]);
    }

    function showQuestion(questionData) {
        questionElement.innerText = questionData.question;
        answerButtons.innerHTML = '';
        questionData.answers.forEach(answer => {
            const button = document.createElement('li');
            button.innerText = answer.text;
            button.classList.add('answer-button');
            button.addEventListener('click', () => selectAnswer(answer));
            answerButtons.appendChild(button);
        });
    }

    function selectAnswer(answer) {
        if (answer.correct) {
            score++;
        }
        nextButton.style.display = 'block';
    }

    function showScore() {
        quizContainer.style.display = 'none';
        scoreContainer.style.display = 'block';
        scoreDisplay.innerText = `${score} out of ${quizData.length}`;
    }

    nextButton.addEventListener('click', () => {
        currentQuestionIndex++;
        if (currentQuestionIndex < quizData.length) {
            showQuestion(quizData[currentQuestionIndex]);
        } else {
            showScore();
        }
    });

    restartButton.addEventListener('click', startQuiz);

    // Start the quiz when the page loads
    startQuiz();
</script>
const quizData = [
    {
        question: "Which country recently experienced protests over economic issues and government corruption?",
        answers: [
            { text: "Iran", correct: true },
            { text: "Russia", correct: false },
            { text: "China", correct: false },
            { text: "Brazil", correct: false },
        ]
    },
    {
        question: "What is the current status of the Israel-Palestine conflict?",
        answers: [
            { text: "Ceasefire", correct: false },
            { text: "Active conflict", correct: true },
            { text: "Resolved", correct: false },
            { text: "Under negotiation", correct: false },
        ]
    },
    {
        question: "Who is the current Secretary-General of the United Nations?",
        answers: [
            { text: "António Guterres", correct: true },
            { text: "Ban Ki-moon", correct: false },
            { text: "Kofi Annan", correct: false },
            { text: "Boris Johnson", correct: false },
        ]
    },
    {
        question: "What event is often cited as the beginning of the Syrian Civil War?",
        answers: [
            { text: "Arab Spring", correct: true },
            { text: "Invasion of Iraq", correct: false },
            { text: "ISIS emergence", correct: false },
            { text: "Kurdish uprising", correct: false },
        ]
    },
    {
        question: "Which country recently withdrew from the Open Skies Treaty?",
        answers: [
            { text: "United States", correct: true },
            { text: "China", correct: false },
            { text: "Russia", correct: false },
            { text: "India", correct: false },
        ]
    },
    {
        question: "What was the purpose of the 2020 Belarusian protests?",
        answers: [
            { text: "Election fairness", correct: true },
            { text: "Environmental issues", correct: false },
            { text: "Economic reform", correct: false },
            { text: "Foreign policy", correct: false },
        ]
    },
    {
        question: "What is the most recent country to join the United Nations?",
        answers: [
            { text: "South Sudan", correct: true },
            { text: "Kosovo", correct: false },
            { text: "East Timor", correct: false },
            { text: "Palestine", correct: false },
        ]
    },
    {
        question: "What conflict has been referred to as Africa's World War?",
        answers: [
            { text: "Rwandan Genocide", correct: false },
            { text: "Second Congo War", correct: true },
            { text: "Somali Civil War", correct: false },
            { text: "Libyan Civil War", correct: false },
        ]
    },
    {
        question: "Which international agreement aims to tackle climate change?",
        answers: [
            { text: "Kyoto Protocol", correct: false },
            { text: "Paris Agreement", correct: true },
            { text: "Montreal Protocol", correct: false },
            { text: "Copenhagen Accord", correct: false },
        ]
    },
    {
        question: "Which country is experiencing a humanitarian crisis due to an ongoing civil war?",
        answers: [
            { text: "Yemen", correct: true },
            { text: "Afghanistan", correct: false },
            { text: "Sudan", correct: false },
            { text: "Syria", correct: false },
        ]
    },
];
document.addEventListener('DOMContentLoaded', function() {
    // Check if the user has already seen the popup
    if (!localStorage.getItem('breakingNewsShown')) {
        const popup = document.getElementById('breaking-news-popup');
        const closePopupButton = document.getElementById('close-popup');
        
        // Show the popup
        popup.style.display = 'block';

        // Add event listener for closing the popup
        closePopupButton.addEventListener('click', function() {
            popup.style.display = 'none';
            // Store in localStorage that the popup has been shown
            localStorage.setItem('breakingNewsShown', 'true');
        });
    }
});
