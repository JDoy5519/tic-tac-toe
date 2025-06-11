//get random number function for assigning noughts or crosses
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}


//factory function to create the Gameboard for tic tac toe
function Gameboard() {
    const grid = [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0]
    ];
    return grid;
}

console.log(Gameboard());


//factory function to create the User for tic tac toe
function createTwoPlayers(name1,name2) {
    const username1 = name1;
    const username2 = name2;
    let assignSymbol = getRandomInt(2);
    if (assignSymbol === 0 ) {
        player1symbol = "O";
        player2symbol = "X";
    } else {
        player1symbol = "X";
        player2symbol = "O";
    }
    let order = getRandomInt(2);
    if (order === 0) {
        player1order = 1;
        player2order = 2;
    } else {
        player1order = 2;
        player2order = 1;
    }
    const player1array = {username: username1, symbol: player1symbol, order: player1order};
    const player2array = {username: username2, symbol: player2symbol, order: player2order};
    return {player1array, player2array};
}

console.log(createTwoPlayers("JD", "DJ"));

//factory function to alter gameboard using symbol
function placeSymbol(column, row, symbol, grid) {
    grid[column][row] = symbol;
    return grid;
}

const initialGrid = Gameboard();
const firstRound = placeSymbol(0,0,"X",initialGrid);
const secondRound = placeSymbol(1,0,"X",firstRound);
const thirdRound = placeSymbol(2,0,"X",secondRound);

console.log(firstRound);
console.log(secondRound);
console.log(thirdRound);

//function  to declare the winner
function declareWinner(grid) {
    if (
        grid[0][0] === 'X' &&
        grid[1][1] === 'X' &&
        grid[2][2] === 'X' || 
        grid[2][2] === 'X' &&
        grid[1][1] === 'X' &&
        grid[0][2] === 'X' ||
        grid[0][0] === 'X' &&
        grid[0][1] === 'X' &&
        grid[0][2] === 'X' ||
        grid[1][0] === 'X' &&
        grid[1][1] === 'X' &&
        grid[1][2] === 'X' ||
        grid[2][0] === 'X' &&
        grid[2][1] === 'X' &&
        grid[2][2] === 'X' ||
        grid[0][0] === 'X' &&
        grid[1][0] === 'X' &&
        grid[2][0] === 'X' ||
        grid[0][1] === 'X' &&
        grid[1][1] === 'X' &&
        grid[2][1] === 'X' ||
        grid[0][2] === 'X' &&
        grid[1][2] === 'X' &&
        grid[2][2] === 'X' 
    ) {
        console.log("You are the winner!");
    } else {
        console.log("Play your next move!");
    }
};

declareWinner(thirdRound);

//function to play the game