const waitingPlayers = [];

function matchPlayers(username) {
    if (waitingPlayers.length > 0) {
        const opponent = waitingPlayers.pop();
        const gameId = `game_${Date.now
            ()}`;
        return { player1: username, player2: opponent, gameId };
    } 
    else {
        waitingPlayers.push(username);
        return null;
    }
}

module.exports = { matchPlayers };
