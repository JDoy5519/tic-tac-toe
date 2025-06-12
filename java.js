//get random number function for assigning noughts or crosses
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

//function to prevent default settings on form
const form = document.getElementById("myForm");
function handleForm(event) { event.preventDefault(); } 
form.addEventListener('submit', handleForm);


//factory function to create the Gameboard for tic tac toe
function Gameboard() {
    const grid = [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0]
    ];

    return grid;
}

//function to generate the gameboard
function generateDivs() {
    const size = 3;
    const containerDiv = document.createElement("div");
    containerDiv.classList.add("grid-container");
    document.body.appendChild(containerDiv);

    let allCells = [];

    for (let row = 0; row < size; row++) {
        for (let col = 0; col < size; col++) {
            const cell = document.createElement("div");
            cell.classList.add("grid-cell");
            cell.setAttribute("data-row", row);
            cell.setAttribute("data-col", col);
            cell.setAttribute("id", `cell-${row}-${col}`);
            containerDiv.appendChild(cell);
            allCells.push(cell);
        }
    }

    return allCells;
}

//function to map 2D array onto the grid

function boardMap(cells, board) {
    cells.forEach(cell => {
        const row = parseInt(cell.getAttribute("data-row"));
        const col = parseInt(cell.getAttribute("data-col"));
        cell.innerHTML = board[row][col];
    });
}

//function to remove divs to make space to append the player names
function removeDivs() {
    const playerOneInput = document.getElementById("player-one-input");
    const playerOneLabel = document.getElementById("player-one-label");
    const playerTwoInput = document.getElementById("player-two-input");
    const playerTwoLabel = document.getElementById("player-two-label");
    const submitButton = document.getElementById("mySubmit");
    playerOneInput.remove();
    playerOneLabel.remove();
    playerTwoInput.remove();
    playerTwoLabel.remove();
    submitButton.remove();
}





//submit user input function
function submitUserInput() {
    let playerOne = document.getElementById("player-one-input").value;
    let playerTwo = document.getElementById("player-two-input").value;
    const username1 = playerOne;
    const username2 = playerTwo;
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
    console.log(player1array);
    console.log(player2array);
    if (player1array.order === 1) {
        const newDiv = document.createElement('div');
        newDiv.innerHTML += 
        `<div>Player1: ${player1array.username} it is your turn! You are: ${player1array.symbol}</div>
        <div>Player2: ${player2array.username} You are: ${player2array.symbol}</div>`
        document.body.appendChild(newDiv);
    } else {
        const newDiv = document.createElement('div');
        newDiv.innerHTML += 
        `<div>Player1: ${player1array.username} You are: ${player1array.symbol}</div>
        <div>Player2: ${player2array.username} it is your turn! You are: ${player2array.symbol}</div>`
        document.body.appendChild(newDiv);
    }
    removeDivs();
    const board = Gameboard();
    const cells = generateDivs();
    boardMap(cells, board);
    return {player1array, player2array};
}

//factory function to alter gameboard using symbol
function placeSymbol(column, row, symbol, grid) {
    const newGrid = grid.map(row => [...row]);
    newGrid[column][row] = symbol;
    return newGrid;
}

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
    } else  if (
        grid[0][0] === 'O' &&
        grid[1][1] === 'O' &&
        grid[2][2] === 'O' || 
        grid[2][2] === 'O' &&
        grid[1][1] === 'O' &&
        grid[0][2] === 'O' ||
        grid[0][0] === 'O' &&
        grid[0][1] === 'O' &&
        grid[0][2] === 'O' ||
        grid[1][0] === 'O' &&
        grid[1][1] === 'O' &&
        grid[1][2] === 'O' ||
        grid[2][0] === 'O' &&
        grid[2][1] === 'O' &&
        grid[2][2] === 'O' ||
        grid[0][0] === 'O' &&
        grid[1][0] === 'O' &&
        grid[2][0] === 'O' ||
        grid[0][1] === 'O' &&
        grid[1][1] === 'O' &&
        grid[2][1] === 'O' ||
        grid[0][2] === 'O' &&
        grid[1][2] === 'O' &&
        grid[2][2] === 'O')
        {
        console.log("You are the winner!");
    } else if (
        grid[0][0] === 'O' || grid[0][0] === 'X' &&
        grid[1][0] === 'O' || grid[1][0] === 'X' &&
        grid[2][0] === 'O' || grid[2][0] === 'X' &&
        grid[0][1] === 'O' || grid[0][1] === 'X' &&
        grid[0][2] === 'O' || grid[0][2] === 'X' &&
        grid[1][1] === 'O' || grid[1][1] === 'X' &&
        grid[2][1] === 'O' || grid[2][1] === 'X' &&
        grid[1][2] === 'O' || grid[1][2] === 'X' &&
        grid[2][2] === 'O' || grid[2][2] === 'X' 
    ) {

    }
    else {
        console.log('Play your next move!')
    }
};

//function to play the game

function playGame() {
    let player1 = "Josh";
    let player2 = "Jess";
    let playerArray = createTwoPlayers(player1, player2);
    let board = Gameboard();
    let firstPlayer = [];
    let secondPlayer = [];
    if (playerArray.player1array.order === 1) {
        firstPlayer = playerArray.player1array
        secondPlayer = playerArray.player2array
    } else {
        secondPlayer = playerArray.player1array
        firstPlayer = playerArray.player2array
    }
    const firstRound = placeSymbol(0,0,firstPlayer.symbol,board);
    console.log(firstRound);
    declareWinner(firstRound);
    const secondRound = placeSymbol(1,1,secondPlayer.symbol,firstRound);
    console.log(secondRound);
    declareWinner(secondRound);
    const thirdRound = placeSymbol(1,0,firstPlayer.symbol,secondRound);
    console.log(thirdRound);
    declareWinner(thirdRound);
    const fourthRound = placeSymbol(0,1,secondPlayer.symbol, thirdRound);
    console.log(fourthRound);
    declareWinner(fourthRound);
    const fifthRound = placeSymbol(2,0,firstPlayer.symbol,fourthRound);
    console.log(fifthRound);
    declareWinner(fifthRound);
}

playGame();