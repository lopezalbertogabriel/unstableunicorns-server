const Game = require('./game');
const Player = require('./player');
const GameSettings = require('./game-settings');

class GameContext {
    constructor() {
        this.games = [];
    }

    newPlayer(playerInput, socket) {
        let player = new Player(playerInput, socket);
        let game = getOldestMatchingGame(this.games, playerInput.gameSettings);

        if (game === null || game === undefined) {
            this.newGame(playerInput.gameSettings);
            game = getOldestMatchingGame(this.games, playerInput.gameSettings);
        }
        game.addPlayer(player);
        if(game.hasEnoughPlayers()){
            game.start();
        }
    }

    newGame(gameSettings) {
        this.games.push(new Game(gameSettings));
    }

    playerDisconnect(playerId){
        let player = retrievePlayerById(this.games, playerId);
        //TODO
    }

    sanityCheck(){
        console.log("------------------------------------------------");
        console.log(Date().toLocaleString());
        console.log(`Ongoing games: ${this.games.length}`);
        console.log(`Online players: ${this.games.map(g => g.players).length}`);
    }

}

function retrievePlayerById(games, playerId){
    return games.filter(g => g.hasPlayer(playerId))[0];
}

function getOldestMatchingGame(games, gameSettings) {
    return games
        .filter(game => game.configMatches(new GameSettings(gameSettings)))
        .sort((a, b) => b.dateCreated - a.dateCreated)
        .pop();
}

module.exports = GameContext;
