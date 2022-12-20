//initial references to the values of buttons
let board = document.querySelector(".board");
let farmButton = document.getElementById("new-farm");
let clearFarmButton = document.getElementById("clear-farm");
let eraseBtn = document.getElementById("erase-btn");
let redBtn = document.getElementById("red");
let blueBtn = document.getElementById("blue");
let color;

//event object that only holds events for mouse (potential for addition of other devices)
let events = {
  mouse: {
    down: "mousedown",
    move: "mousemove",
    up: "mouseup",
  },
};
