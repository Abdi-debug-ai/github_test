const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

const users = []; // In-memory user store. Replace with a database in production

// Secret key for JWT (use a more secure method in production)
const JWT_SECRET = 'your_secret_key';

// User Registration
app.post('/register', async (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).json({ message: 'Username and password are required' });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Save the user (in-memory)
    users.push({ username, password: hashedPassword });

    return res.status(201).json({ message: 'User registered successfully' });
});

// User Login
app.post('/login', async (req, res) => {
    const { username, password } = req.body;

    const user = users.find(user => user.username === username);
    if (!user) {
        return res.status(400).json({ message: 'Invalid username or password' });
    }

    // Compare the password
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
        return res.status(400).json({ message: 'Invalid username or password' });
    }

    // Generate JWT
    const token = jwt.sign({ username: user.username }, JWT_SECRET, { expiresIn: '1h' });

    return res.status(200).json({ token });
});

// Protected Route Example
app.get('/dashboard', (req, res) => {
    const token = req.headers['authorization'];

    if (!token) {
        return res.status(401).json({ message: 'No token provided' });
    }

    try {
        const decoded = jwt.verify(token, JWT_SECRET);
        return res.status(200).json({ message: `Welcome to your dashboard, ${decoded.username}` });
    } catch (err) {
        return res.status(401).json({ message: 'Invalid token' });
    }
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
