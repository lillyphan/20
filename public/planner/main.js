//initial references to value of buttons
let board = document.querySelector(".board");
let farmButton = document.getElementById("new-farm");
let clearFarmButton = document.getElementById("clear-farm");
let eraseBtn = document.getElementById("erase-btn");
let redBtn = document.getElementById("red");
let blueBtn = document.getElementById("blue");
document.getElementById("test").innerHTML = "click!";
let color;
let fill;
let firstSq;
let filled;

//events object, only contains events for mouse right now but has the potential for other devices..
let events = {
  mouse: {
    down: "mousedown",
    up: "mouseup",
    move: "mousemove",
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
  let count = -1;
  //loop for creating rows
  for (let i = 0; i < 35; i++) {
    //increments count by 2 to be proportional, with every row, another column is being added (2+)
    count += 1;
    //create new div element to hold rows
    let div = document.createElement("div");
    div.classList.add("row");
    //columns are added using nested for loop
    for (let j = 0; j < 90; j++) {
      count += 1;
      let col = document.createElement("div"); //create a new div element
      col.classList.add("col"); //add columns!
//      col.setAttribute("id", `${count}`); //assign each column an id
      col.setAttribute("id", `${i} ${j}`); //assign each column an id

      col.addEventListener(events[deviceType].down, () => {
        //user starts drawing
        document.getElementById("test").innerHTML = col.getAttribute("id");
        draw = true;
        //if erase = true then background = transparent else color
        if (fill){
            firstSq = col.getAttribute("id").split(" ");
        }
        if (erase) {
          col.style.backgroundColor = "transparent";
        } else {
          col.style.backgroundColor = color;
        }
      }
      );

      // when mouse moves, update the square that the mouse is touching,
      // find the element with the matching id and color!
      col.addEventListener(events[deviceType].move, (e) => {
        /* find the element that mouse is touching */
        let elementId = document.elementFromPoint(e.clientX, e.clientY).id;
        //find the matching square
        find(elementId, -99999, -99999);
      });

      //when mouse is up, drawing is false
      col.addEventListener(events[deviceType].up, () => {
           if (fill){
                let lastSq = col.getAttribute("id").split(" ");
                let range = math.abs(parseInt(firstSq[0])-parseInt(lastSq[0]));
                let domain = math.abs(parseInt(firstSq[1])-parseInt(lastSq[1]));
//                col.style.backgroundColor = color;
           }
        draw = false;
      });
      //append columns from the loop
      div.appendChild(col);
    }
    //append grid to board
    board.appendChild(div);
  }
});

//loop through all boxes and when one matches the id of the element touching the mouse, color it
function find(elementId, range, domain) {
  let farmColumns = document.querySelectorAll(".col");
  //loop through all boxes
  farmColumns.forEach((element) => {
    if (range != -99999) {
    //if id matches then color
        if (elementId == element.id) {
          if (draw && !erase) {
            element.style.backgroundColor = color;
          } else if (draw && erase) {
            element.style.backgroundColor = "transparent";
          }
        }
    } else {
        if (parseInt(element.id.split(" ")[0]) <= range && parseInt(element.id.split(" ")[1]) <= domain){
            element.style.backgroundColor = color;
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
redBtn.addEventListener("click", () => {
  erase = false;
  color = "#ff0000"
  fill = true;
});

//when red button is clicked, set color value to blue
blueBtn.addEventListener("click", () => {
  erase = false;
  color = "#001aff"
});
