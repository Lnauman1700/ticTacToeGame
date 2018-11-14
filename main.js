//generate random starting player
const getFirstPlayer = () => {
  let rando = Math.floor(Math.random() * 2) + 1;
  if(rando == 1) {
    return true;
  }
  else {
    return false;
  }
};



let isXturn = getFirstPlayer();
let isGameFinished = false;
let whoseTurn = document.createElement("p");
document.body.appendChild(whoseTurn);
let turnText;

const changeTurnText = () => {
  if(whoseTurn.hasChildNodes()) {
    whoseTurn.removeChild(turnText);
  }
  if(isXturn) {
    turnText = document.createTextNode("It is X's turn");
    whoseTurn.appendChild(turnText);
  }
  else {
    turnText = document.createTextNode("It is O's turn");
    whoseTurn.appendChild(turnText);
  }
};

changeTurnText();

//function that places the x or o down in a grid.
//based on the boolean value of who's turn it is.
const placeShape = (grid) => {

  //keeps the player from placing a time down where a slot already exists
  //also does the same thing with all tiles if the game is finished
  if(grid.textContent === "X" || grid.textContent === "O" || isGameFinished === true) {

  }
  else {
    //create the symbol, append it to the grid you clicked
    let symbol;
    if(isXturn) {
      symbol = document.createTextNode("X");
    }
    else {
      symbol = document.createTextNode("O");
    }
    grid.appendChild(symbol);

    //check to see if the game is over
    checkEnd(grid);
  }
};

//function that checks whether someone won or lost
//determines the end of the game
const checkEnd = (grid) => {
  //we want to check to see if each node within a row/column/diagonal is all one symbol
  if(searchForVictory(grid)) {
    let winner;
    if(isXturn) {
      winner = "X";
    }
    else {
      winner = "O";
    }
    //this stuff just appends a paragraph which shows who won
    let winP = document.createElement("p");
    let winText = document.createTextNode("The winner is " + winner);
    winP.appendChild(winText);
    document.body.appendChild(winP);
    //now, let's create a reset button and say the game is finished
    createResetButton();
    isGameFinished = true;
  }
  //if this isn't the case, we want to check to see if the board is completely full
  else if(checkFull()) {
    //append a paragraph saying that nobody wins
    let loseP = document.createElement("p");
    let loseText = document.createTextNode("nobody wins");
    loseP.appendChild(loseText);
    document.body.appendChild(loseP);
    //create that reset button
    createResetButton();
  }
  //otherwise, things continue and we flip the isXturn boolean
  else {
    isXturn = !isXturn;
    //changes the paragraph which shows whose turn it is
    changeTurnText();
  }
};

//checks to see if a victory is achieved
const searchForVictory = (grid) => {
  //loops through every single possible win position, and returns true if a victory is achieved
  for(let innerArr of tableArr) {
    if(innerArr.includes(grid)) {
      let first = innerArr[0].textContent;
      let second = innerArr[1].textContent;
      let third = innerArr[2].textContent;
      if(first == second && second == third) {
        return true;
      }
    }
  }
  return false;
};

//checks to see if the grids are all full
const checkFull = () => {
  //loops through every grid, if any of them don't have a value, return false
  for(let entry of fullTable) {
    if(entry.textContent === "") {
      return false;
    }
  }
  return true;
};

//appends a reset button which refreshes the pag on click
const createResetButton = () => {
  let button = document.createElement("button");
  let text = document.createTextNode("reset");
  button.setAttribute("onclick", "window.location.reload();")
  button.appendChild(text);
  document.body.appendChild(button);
};

let a1 = document.querySelector(".rowA > .column1");
let a2 = document.querySelector(".rowA > .column2");
let a3 = document.querySelector(".rowA > .column3");
let b1 = document.querySelector(".rowB > .column1");
let b2 = document.querySelector(".rowB > .column2");
let b3 = document.querySelector(".rowB > .column3");
let c1 = document.querySelector(".rowC > .column1");
let c2 = document.querySelector(".rowC > .column2");
let c3 = document.querySelector(".rowC > .column3");

let tableArr = [[a1, a2, a3], [b1, b2, b3], [c1, c2, c3], [a1, b1, c1], [a2, b2, c2], [a3, b3, c3], [a1, b2, c3], [a3, b2, c1]];
let fullTable = [a1, a2, a3, b1, b2, b3, c1, c2, c3];

//assigns each grid a eventListener that looks for clicks
for(let entry of document.querySelectorAll("div > div")) {
  entry.addEventListener("click", () => {
    placeShape(entry);
  });
}

//use the numpad as an input as well
document.addEventListener("keydown", () => {
  if(event.key == "1") {
    placeShape(c1);
  }
});
document.addEventListener("keydown", () => {
  if(event.key == "2") {
    placeShape(c2);
  }
});
document.addEventListener("keydown", () => {
  if(event.key == "3") {
    placeShape(c3);
  }
});
document.addEventListener("keydown", () => {
  if(event.key == "4") {
    placeShape(b1);
  }
});
document.addEventListener("keydown", () => {
  if(event.key == "5") {
    placeShape(b2);
  }
});
document.addEventListener("keydown", () => {
  if(event.key == "6") {
    placeShape(b3);
  }
});
document.addEventListener("keydown", () => {
  if(event.key == "7") {
    placeShape(a1);
  }
});
document.addEventListener("keydown", () => {
  if(event.key == "8") {
    placeShape(a2);
  }
});
document.addEventListener("keydown", () => {
  if(event.key == "9") {
    placeShape(a3);
  }
});
