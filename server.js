const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

// Initialize express app
const app = express();
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('your-mongodb-connection-string', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log("Connected to MongoDB"))
    .catch(err => console.log(err));

// Define the Blog Post model
const PostSchema = new mongoose.Schema({
    title: String,
    author: String,
    content: String,
    createdAt: { type: Date, default: Date.now }
});

const Post = mongoose.model('Post', PostSchema);

// API to create a new blog post
app.post('/api/posts', (req, res) => {
    const newPost = new Post(req.body);

    newPost.save()
        .then(post => res.status(201).json(post))
        .catch(err => res.status(400).json(err));
});

// API to get all blog posts
app.get('/api/posts', (req, res) => {
    Post.find()
        .then(posts => res.json(posts))
        .catch(err => res.status(500).json(err));
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
