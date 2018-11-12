/*let a1 = querySelector("#a1");
let a2 = querySelector("#a2");
let a3 = querySelector("#a3");
let b1 = querySelector("#b1");
let b2 = querySelector("#b2");
let b3 = querySelector("#b3");
let c1 = querySelector("#c1");
let c2 = querySelector("#c2");
let c3 = querySelector("#c3");*/
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

let slots = querySelectorAll(".slot");

for(let i = 0; i < slots.length; i++) {
  slots[i].addEventListener("click", placeShape(slots[i]));
}

//function that places the x or o down in a grid.
//based on the boolean value of who's turn it is.
const placeShape = (grid) => {
  //before we flip the boolean, call checkEnd();
};

//function that checks whether someone won or lost
//determines the end of the game
const checkEnd = () => {

};
