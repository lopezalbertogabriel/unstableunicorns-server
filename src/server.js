const server = require('socket.io')();
const GameContext = require('./game/game-context');
let gameContext = new GameContext();

server.on('connection', (socket) => {
    console.log(`New connection: ${socket.id}`);

    // When a player starts a new game
    socket.on('clickStart', (playerInput) => {
        console.log("Input from player: ");
        console.log(playerInput);
        gameContext.newPlayer(playerInput, socket);
    });

    // Player disconnects
    socket.on('disconnect', () => {
        gameContext.playerDisconnect(socket.id);
    })
});

//setInterval(()=>{gameContext.sanityCheck()}, 10000)

const port = 3002;
server.listen(port);
console.log(`Listening on port ${port}`);
