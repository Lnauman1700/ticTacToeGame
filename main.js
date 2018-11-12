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

//function that places the x or o down in a grid.
//based on the boolean value of who's turn it is.
const placeShape = (grid) => {
  let symbol;
  grid.removeEventListener("click", () => {
    placeShape(grid);
  });
  if(isXturn) {
    symbol = document.createTextNode("X");
  }
  else {
    symbol = document.createTextNode("O");
  }
  grid.appendChild(symbol);

  //before we flip the boolean, call checkEnd();
  checkEnd(grid);
};

//function that checks whether someone won or lost
//determines the end of the game
const checkEnd = (grid) => {
  if(searchForVictory(grid)){
    console.log("You won!");
  } else if (checkFull()) {
    console.log("everybody loses!")
  } else {
    isXturn = !isXturn;
  }
};

const searchForVictory = (grid) => {
  for(let innerArr of tableArr) {
    if(innerArr.includes(grid)){
      let first = innerArr[0].textContent;
      let second = innerArr[1].textContent;
      let third = innerArr[2].textContent;

      if(first === second && second === third) {
        return true;
      }
    }
  }
  return false;
};

const checkFull = () => {
  for(let entry of fullTable) {
    if(entry.textContent === "") {
      return false;
    }
  }
  return true;
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

let a1Event = a1.addEventListener("click", () => {
  placeShape(a1);
});
let a2Event = a2.addEventListener("click", () => {
  placeShape(a2);
});
let a3Event = a3.addEventListener("click", () => {
  placeShape(a3);
});
let b1Event = b1.addEventListener("click", () => {
  placeShape(b1);
});
let b2Event = b2.addEventListener("click", () => {
  placeShape(b2);
});
let b3Event = b3.addEventListener("click", () => {
  placeShape(b3);
});
let c1Event = c1.addEventListener("click", () => {
  placeShape(c1);
});
let c2Event = c2.addEventListener("click", () => {
  placeShape(c2);
});
let c3Event = c3.addEventListener("click", () => {
  placeShape(c3);
});
