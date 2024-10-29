<script src="https://cdn.onesignal.com/sdks/web/v16/OneSignalSDK.page.js" defer></script>
<script>
  window.OneSignalDeferred = window.OneSignalDeferred || [];
  OneSignalDeferred.push(async function(OneSignal) {
    await OneSignal.init({
      appId: "399b10b0-3fa1-4d86-b3c8-654b5f417037",
    });
  });
</script>
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
const express = require('express');
const mongoose = require('mongoose');
const multer = require('multer');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 5000;

// Connect to MongoDB (replace with your connection string)
mongoose.connect('mongodb://localhost:27017/yourDB', { useNewUrlParser: true, useUnifiedTopology: true });

// Define Blog Post Schema
const postSchema = new mongoose.Schema({
    title: String,
    author: String,
    content: String,
    image: String
});

const Post = mongoose.model('Post', postSchema);

// Set up storage for uploaded files
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/'); // Make sure this directory exists
    },
    filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, uniqueSuffix + path.extname(file.originalname)); // Save with unique name
    }
});

const upload = multer({ storage: storage });

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/uploads', express.static('uploads')); // Serve images

// API to handle blog post submission
app.post('/api/posts', upload.single('image'), (req, res) => {
    const newPost = new Post({
        title: req.body.title,
        author: req.body.author,
        content: req.body.content,
        image: req.file.path // Store the path of the uploaded image
    });

    newPost.save()
        .then(post => res.status(201).json(post))
        .catch(err => res.status(400).json(err));
});

// API to get all blog posts
app.get('/api/posts', (req, res) => {
    Post.find()
        .then(posts => res.json(posts))
        .catch(err => res.status(400).json(err));
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
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
