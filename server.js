// server.js
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// Middleware
app.use(bodyParser.json());

// Dummy database
const users = [];

// Registration route
app.post('/register', (req, res) => {
  const { username, email, password } = req.body;
  // Simple validation
  if (!username || !email || !password) {
    return res.status(400).json({ message: 'Please provide all required fields' });
  }
  // Check if user already exists
  if (users.some(user => user.email === email)) {
    return res.status(400).json({ message: 'User already exists' });
  }
  // Add user to database (dummy in this example)
  users.push({ username, email, password });
  res.status(201).json({ message: 'User registered successfully' });
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
