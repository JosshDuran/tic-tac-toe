var WIN_CONDITIONS = [
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 4, 8],
  [2, 4, 6]
]
var turn = 0;
var counter = 1; // turn number
var gameBoard = document.getElementsByClassName("grid");
var startButton = document.getElementById("reset");
var messages = document.getElementById("msg");
var player

// Add click listener to start button
startButton.addEventListener('click', reset);


function startListeners() {
  for(var i=0; i< gameBoard.length; i++){
    gameBoard[i].addEventListener('click', showImage)
    console.log(i)
  }
}

function showImage(e) {
  // Stop listening to clicks
  this.removeEventListener('click', showImage);




  var imagePlayer = document.createElement("img");

  if(turn%2){
    imagePlayer.setAttribute("src","img/dog.jpeg");
    var classElm = "dog"
  }
  else {
    imagePlayer.setAttribute("src","img/cat.jpeg");
    var classElm = "cat"
  }

  event.srcElement.appendChild(imagePlayer);
  event.srcElement.classList.add(classElm)
  event.srcElement.setAttribute("player", classElm);

  player = turn % 2 ? 'dog' : 'cat'
  turn++;
  counter++; 
  if(checkWinner()){
    //The player in your click function will be the winner if checkWinner() returns true
    console.log("WINNER")
    removeListeners();
    // endGame function?
    // Whatever win condition goes here
  }
  else if(counter >= 9){
    messages.textContent = "It's a tie!";
    removeListeners();
  }
}

function checkWinner() {
  // Loop through WIN_CONDITIONS
  var win
  
  for (var i = 0; i < WIN_CONDITIONS.length; i++) {
    if (!gameBoard[WIN_CONDITIONS[i][0]].getAttribute("player") || !gameBoard[WIN_CONDITIONS[i][1]].getAttribute("player") || !gameBoard[WIN_CONDITIONS[i][2]].getAttribute("player")) {
      win = false
    } else if (gameBoard[WIN_CONDITIONS[i][0]].getAttribute("player") === gameBoard[WIN_CONDITIONS[i][1]].getAttribute("player") &&
        gameBoard[WIN_CONDITIONS[i][1]].getAttribute("player") === gameBoard[WIN_CONDITIONS[i][2]].getAttribute("player")) {
        messages.textContent = "The winner is " + player;
      win = true
    } else {
      win = false
    }
    
    if (win === true) {
    return win
    }
  }

  return win
}

function removeListeners() {
  for(var i=0; i<gameBoard.length; i++){
    gameBoard[i].removeEventListener('click', showImage)
    // element.removeAttribute(attributename)
    gameBoard[i].removeAttribute("player")
    console.log(i)
  }
}

function reset() {
  for(var i=0; i<gameBoard.length;i++){
    if(!!gameBoard[i].children.length){
      gameBoard[i].removeChild(gameBoard[i].children[0]);
      turn = 0;
      counter = 1; // turn number
      messages.textContent = "";
    }
  }
  startListeners();
}


