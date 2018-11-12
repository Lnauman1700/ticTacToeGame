let a1 = document.querySelector(".rowA > .column1");
let a2 = document.querySelector(".rowA > .column2");
let a3 = document.querySelector(".rowA > .column3");
let b1 = document.querySelector(".rowB > .column1");
let b2 = document.querySelector(".rowB > .column2");
let b3 = document.querySelector(".rowB > .column3");
let c1 = document.querySelector(".rowC > .column1");
let c2 = document.querySelector(".rowC > .column2");
let c3 = document.querySelector(".rowC > .column3");
let isXturn;

//generate random starting player
const getFirstPlayer = () => {
  let rando = Math.floor(Math.random() * 2) + 1;
  if(rando == 1) {
    isXturn = true;
  }
  else {
    isXturn = false;
  }
};


//function that places the x or o down in a grid.
//based on the boolean value of who's turn it is.
const placeShape = (grid) => {
  if(isXturn) {
    let x = document.createTextNode("X");
    grid.appendChild(x);
    grid.removeEventListener();
  }
  else {
    let o = document.createTextNode("O");
    grid.appendChild(o);
  }
  //before we flip the boolean, call checkEnd();
  checkEnd();
};

//function that checks whether someone won or lost
//determines the end of the game
const checkEnd = () => {

};
