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
const express = require('express');
const app = express();

app.use((req, res, next) => {
    res.setHeader("Content-Security-Policy", "default-src 'self'; script-src 'self' https://www.tiktok.com; img-src 'self' https://picsum.photos https://www.tiktok.com; frame-src https://www.tiktok.com; style-src 'self' 'unsafe-inline';");
    next();
});

// Your other routes and middleware
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
otpauth://totp/GitHub:Abdi-debug-ai?secret=ESVVJYQZGRWHHF6P&issuer=GitHub
<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8630338396467715"
     crossorigin="anonymous"></script>
     const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost/commentsDB', { useNewUrlParser: true, useUnifiedTopology: true });

const commentSchema = new mongoose.Schema({
    username: String,
    comment: String,
    timestamp: { type: Date, default: Date.now }
});

const Comment = mongoose.model('Comment', commentSchema);

// Get all comments
app.get('/comments', async (req, res) => {
    const comments = await Comment.find();
    res.json(comments);
});

// Post a new comment
app.post('/comments', async (req, res) => {
    const newComment = new Comment(req.body);
    await newComment.save();
    res.status(201).json(newComment);
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
app.use(bodyParser.json());
mongoose.connect('mongodb://localhost:27017/politicast', { useNewUrlParser: true, useUnifiedTopology: true });

const submissionSchema = new mongoose.Schema({
    title: String,
    content: String,
    videoLink: String,
});

const Submission = mongoose.model('Submission', submissionSchema);

// Endpoint to handle submissions
app.post('/submit', (req, res) => {
    const newSubmission = new Submission(req.body);
    newSubmission.save().then(() => {
        res.status(201).send('Submission received!');
    }).catch((error) => {
        res.status(400).send('Error: ' + error.message);
    });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
// Fetch user submissions from the server
fetch('/submissions')
    .then(response => response.json())
    .then(data => {
        const displayArea = document.getElementById('content-display');
        displayArea.innerHTML = ''; // Clear previous content

        data.forEach(submission => {
            const article = document.createElement('div');
            article.classList.add('submission');
            article.innerHTML = `
                <h3>${submission.title}</h3>
                <p>${submission.content}</p>
                ${submission.videoLink ? `<iframe width="560" height="315" src="${submission.videoLink}" frameborder="0" allowfullscreen></iframe>` : ''}
            `;
            displayArea.appendChild(article);
        });
    })
    .catch(error => console.error('Error fetching submissions:', error));
// Endpoint to get all submissions
app.get('/submissions', (req, res) => {
    Submission.find().then(submissions => {
        res.json(submissions);
    }).catch(error => {
        res.status(500).send('Error fetching submissions: ' + error.message);
    });
});
const express = require('express');
const mongoose = require('mongoose');

const app = express();
app.use(express.json()); // To parse JSON data

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/politicast', { useNewUrlParser: true, useUnifiedTopology: true });

// Define a Submission schema
const SubmissionSchema = new mongoose.Schema({
    title: String,
    content: String,
    videoLink: String,
    status: { type: String, default: 'approved' } // Automatically approved
});
const Submission = mongoose.model('Submission', SubmissionSchema);

// Endpoint to handle submissions
app.post('/submit', (req, res) => {
    const { title, content, videoLink } = req.body;

    // Validate input
    if (!title || !content) {
        return res.status(400).json({ message: 'Title and content are required.' });
    }

    // Create a new submission with status as 'approved'
    const newSubmission = new Submission({ title, content, videoLink, status: 'approved' });
    newSubmission.save()
        .then(() => res.status(201).json({ message: 'Submission received and automatically approved.' }))
        .catch(error => res.status(500).json({ message: 'Error saving submission:', error }));
});
// Endpoint for reporting a submission
app.post('/report/:id', (req, res) => {
    const submissionId = req.params.id;

    // Logic to handle reporting, such as incrementing a report count
    // and potentially marking the submission for review
    Submission.findById(submissionId)
        .then(submission => {
            // Increment report count or handle the reporting logic
            res.json({ message: 'Submission reported.' });
        })
        .catch(error => res.status(500).json({ message: 'Error reporting submission:', error }));
});
