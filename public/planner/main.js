//initial references to value of buttons
let board = document.querySelector(".board");
let farmButton = document.getElementById("new-farm");
let clearFarmButton = document.getElementById("clear-farm");
let eraseBtn = document.getElementById("erase-btn");
let redBtn = document.getElementById("red");
let blueBtn = document.getElementById("blue");
let color;

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
