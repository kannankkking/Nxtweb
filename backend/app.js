const express = require('express');
const http = require('http');
const WebSocket = require('ws');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const cors = require('cors');
const { matchPlayers } = require('./services/matchmaking');
const { authenticateToken } = require('./routes');
const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });
const bodyParser = require('body-parser');
const players = {};  // Store player WebSocket connections
const activeGames = {};  // Store active games

app.use(cors());
app.use(bodyParser.json());
app.use('/api', require('./routes'));  // API routes for player authentication

wss.on('connection', (ws) => {
    console.log('New player connected.');

    ws.on('message', (message) => {
        const data = JSON.parse(message);

        if (data.type === 'join') {
            const { token } = data;
            jwt.verify(token, 'secretkey', (err, player) => {
                if (err) return ws.send(JSON.stringify({ error: 'Authentication failed' }));

                players[player.username] = ws;
                const match = matchPlayers(player.username);

                if (match) {
                    activeGames[match.gameId] = { player1: match.player1, player2: match.player2 };

                    // Notify both players they are matched
                    players[match.player1].send(JSON.stringify({ type: 'matched', opponent: match.player2 }));
                    players[match.player2].send(JSON.stringify({ type: 'matched', opponent: match.player1 }));
                }
            });
        }

        if (data.type === 'gameMove') {
            const { gameId, move } = data;
            const game = activeGames[gameId];
            const opponent = game.player1 === data.player ? game.player2 : game.player1;
            players[opponent].send(JSON.stringify({ type: 'opponentMove', move }));
        }
    });

    ws.on('close', () => {
        console.log('Player disconnected');
    });
});

server.listen(3001, () => {
    console.log('Server running on port 5174');
});