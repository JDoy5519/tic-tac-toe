//get random number function for assigning noughts or crosses
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}


//factory function to create the Gameboard for tic tac toe
const Gameboard = function () {
    const grid = [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0]
    ];
    return grid;
}

console.log(Gameboard());


//factory function to create the User for tic tac toe
const createUser = function (name) {
    const username = name;
    let symbol = getRandomInt(2);
    if (symbol === 0 ) {
        symbol = "0";
    } else {
        symbol = "X";
    }
    let order = getRandomInt(2);
    if (order === 0) {
        order = 1;
    } else {
        order = 2;
    }
    return {username, symbol, order};
}

console.log(createUser("JD"));

//factory function to create an assigning of noughts and crosess

const placeSymbol = function(column, row) {
    column = 1;
    row = 1;
    const grid = Gameboard();
    grid[column][row] = "cats";
    console.log(grid);
}

placeSymbol();