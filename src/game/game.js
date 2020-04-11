const GameSettings = require('./game-settings');

class Game {
    constructor(gameSettings) {
        this.gameSettings = new GameSettings(gameSettings);
        this.players = [];
        this.dateCreated = Date.now();
        this.turnCounter = 0;
        this.deck = [];
    }

    configMatches(config){
        return this.gameSettings.isEqual(config)
    }

    hasPlayer(playerId){
        return this.players.filter(p => p.playerId === playerId).length > 0;
    }

    addPlayer(player) {
        this.players.push(player);
    }

    hasEnoughPlayers(){
        return this.gameSettings.players === this.players.length;
    }

    start(){

    }
}

module.exports = Game;
