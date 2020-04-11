class Player {
    constructor(playerInput, socket) {
        this.socket = socket;
        this.playerName = playerInput.playerName;
        this.playerId = socket.id;

    }
}

module.exports = Player;
