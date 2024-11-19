<script src="https://cdn.onesignal.com/sdks/web/v16/OneSignalSDK.page.js" defer></script>
<script>
  window.OneSignalDeferred = window.OneSignalDeferred || [];
  OneSignalDeferred.push(async function(OneSignal) {
    await OneSignal.init({
      appId: "399b10b0-3fa1-4d86-b3c8-654b5f417037",
    });
  });
</script>
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
// script.js
fetch('/.netlify/functions/hello')
    .then(response => response.json())
    .then(data => {
        console.log(data.message); // Outputs: Hello from Netlify Functions!
    })
    .catch(error => console.error('Error:', error));
self.addEventListener('push', function(event) {
  const data = event.data.json();

  const options = {
    body: data.body,
    icon: '/icon.png',
    badge: '/badge.png'
  };

  event.waitUntil(
    self.registration.showNotification(data.title, options)
  );
});

self.addEventListener('notificationclick', function(event) {
  event.notification.close();
  event.waitUntil(clients.openWindow('/'));
});
document.getElementById('contact-form').addEventListener('submit', async (event) => {
    event.preventDefault(); // Prevent the default form submission

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());

    try {
        const response = await fetch('/.netlify/functions/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        const result = await response.json();
        alert(result.message); // Show success message
    } catch (error) {
        console.error('Error:', error);
    }
    document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Gather form data
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Send data to the Netlify function
    fetch('/.netlify/functions/contact', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, message }),
    })
    .then(response => {
        if (response.ok) {
            alert("Message sent successfully!");
            // Optionally, reset the form
            document.getElementById("contact-form").reset();
        } else {
            alert("Failed to send message.");
        }
    })
    .catch(error => {
        console.error("Error:", error);
        alert("An error occurred. Please try again.");
    });
});
import React, { useState } from 'react';

const PizzaOrderForm = () => {
  const [order, setOrder] = useState('');

  const handleChange = (event) => {
    setOrder(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you can handle form submission logic (like sending the data to your backend or logging it)
    console.log("Order submitted:", order);
  };

  return (
    <form
      data-netlify="true"
      name="pizzaOrder"
      method="post"
      onSubmit={handleSubmit}
    >
      <input type="hidden" name="form-name" value="pizzaOrder" />
      <label>
        What order did the pizza give to the pineapple?
        <input name="order" type="text" value={order} onChange={handleChange} />
      </label>
      <input type="submit" />
    </form>
  );
};

export default PizzaOrderForm;
import React from 'react';
import PizzaOrderForm from './PizzaOrderForm'; // Adjust the path as necessary

const App = () => {
  return (
    <div>
      <h1>Welcome to Our Pizza Shop!</h1>
      <PizzaOrderForm />
    </div>
  );
};

export default App;
// server.mjs
import { createServer } from 'node:http';

const server = createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello World!\n');
});

// starts a simple http server locally on port 3000
server.listen(3000, '127.0.0.1', () => {
  console.log('Listening on 127.0.0.1:3000');
});

// run with `node server.mjs`
OneSignal.push(function() {
  OneSignal.showSlidedownPrompt(); // Prompts users to subscribe
});
const db = firebase.firestore();
db.collection('blogs').add({
  title: "Sample Blog Title",
  content: "Your blog content here...",
  author: "Author Name",
  date: new Date()
});
db.collection('blogs').onSnapshot(snapshot => {
  snapshot.docs.forEach(doc => {
    console.log(doc.data()); // Display data or update UI
  });
});
const responses = {
  // Existing responses...
  "new question": "This is the response to the new question.",
  "another question": "This is another custom response.",
  "default": "I'm here to help. Can you clarify your question?"
};
