const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { playersDB } = require('./models/players');
const router = express.Router();

// Register new player
router.post('/register', async (req, res) => {
    const { username, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    playersDB[username] = { username, password: hashedPassword, stats: { wins: 0, losses: 0 } };
    res.status(201).send('User registered');
});

// Login player
router.post('/login', async (req, res) => {
    const { username, password } = req.body;
    const player = playersDB[username];

    if (player && await bcrypt.compare(password, player.password)) {
        const token = jwt.sign({ username: player.username }, 'secretkey');
        res.json({ token });
    } else {
        res.status(401).send('Invalid credentials');
    }
});

// Middleware to authenticate token
function authenticateToken(req, res, next) {
    const token = req.headers['authorization'];
    if (!token) return res.status(403).send('A token is required');
    
    jwt.verify(token, 'secretkey', (err, player) => {
        if (err) return res.status(401).send('Invalid Token');
        req.player = player;
        next();
    });
}

module.exports = router;
module.exports.authenticateToken = authenticateToken;