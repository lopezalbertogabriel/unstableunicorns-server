class GameSettings {
    constructor(gameSettings) {
        if(gameSettings.players > 0){
            this.players = gameSettings.players;
        } else {
            this.players = 4;
        }
        this.expansions = gameSettings.expansions.length > 0 ? gameSettings.expansions : [];
    }

    isEqual(otherSettings) {
        return (
            this.players === otherSettings.players &&
            this.expansions === otherSettings.expansions
        );
    }
}

module.exports = GameSettings;
