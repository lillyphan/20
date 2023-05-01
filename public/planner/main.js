//  * main.js
//  * Author: Lilly Phan
//  * Created: 12/12/2022
//  * Last edited: 12/20/2022
//  * main.js contains the script to work the planner

//initial references to value of buttons
let board = document.querySelector(".board");
let farmButton = document.getElementById("new-farm");
let clearFarmButton = document.getElementById("clear-farm");
let eraseBtn = document.getElementById("erase-btn");
let pathBtn = document.getElementById("path");
let flowerBtn = document.getElementById("flower");
let fruitBtn = document.getElementById("fruit");
let fenceBtn = document.getElementById("fence");
let color;
let img;

//events object, only contains events for mouse right now but has the potential for other devices..
let events = {
  mouse: {
    down: "mousedown",
    move: "mousemove",
    up: "mouseup",
  },
};

let deviceType = "mouse";;

//booleans draw and erase keep track of state of user, initially draw and erase are false
let draw = false;
let erase = false;

//create board or new farm
farmButton.addEventListener("click", () => {
  //initially clear old farms
  board.innerHTML = "";
  //count for unique ids, each square needs a unique id to be colored
  let count = 0;
  //loop for creating rows
  for (let i = 0; i < 35; i++) {
    //increments count by 2 to be proportional, with every row, another column is being added (2+)
    count += 2;
    //create new div element to hold rows
    let div = document.createElement("div");
    div.classList.add("row");
    //columns are added using nested for loop
    for (let j = 0; j < 90; j++) {
      count += 2;
      let col = document.createElement("div"); //create a new div element
      col.classList.add("col"); //add columns!
      col.setAttribute("id", `col${count}`); //assign each column an id

      //
      col.addEventListener(events[deviceType].down, () => {
        //user starts drawing
        draw = true;
        //if erase = true then background = transparent else color
        if (erase) {
          col.style.backgroundColor = "transparent";
        } else {
          col.style.backgroundColor = color;
        }
      });

      // when mouse moves, update the square that the mouse is touching,
      // find the element with the matching id and color!
      col.addEventListener(events[deviceType].move, (e) => {
        /* find the element that mouse is touching */
        let elementId = document.elementFromPoint(e.clientX, e.clientY).id;
        //find the matching square
        find(elementId);
      });

      //when mouse is up, drawing is false
      col.addEventListener(events[deviceType].up, () => {
        draw = false;
      });
      //append columns from the loop
      div.appendChild(col);
    }
    //append grid to board
    board.appendChild(div);
  }
});

function find(elementId) {
  let farmColumns = document.querySelectorAll(".col");
  //loop through all boxes
  farmColumns.forEach((element) => {
    //if id matches then color
    if (elementId == element.id) {
      if (draw && !erase) {
//        element.style.backgroundColor = color;
          element.style.backgroundImage = img;
      } else if (draw && erase) {
        element.style.backgroundColor = "transparent";
      }
    }
  });
}

//when clear button is clicked, empty the contents of the board
clearFarmButton.addEventListener("click", () => {
  board.innerHTML = "";
});
//when erase button is clicked, set erase to true
eraseBtn.addEventListener("click", () => {
  erase = true;
});

//when red button is clicked, set color value to red
pathBtn.addEventListener("click", () => {
  erase = false;
  img = "url('css/pathsmall.png')";
});

//when blue button is clicked, set color value to blue
flowerBtn.addEventListener("click", () => {
  erase = false;
  img = "url('css/tulip.png')"
});

fenceBtn.addEventListener("click", () => {
  erase = false;
  img = "url('css/fence.png')"
});

fruitBtn.addEventListener("click", () => {
  erase = false;
  img = "url('css/melon.png')"
});