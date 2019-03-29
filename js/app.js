var WIN_CONDITIONS = [
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 4, 8],
  [6, 4, 2],
]
var turn = 0;
var counter = 1; // turn number
var gameBoard = document.getElementsByClassName("grid");
var startButton = document.getElementById("reset");
var messages = document.getElementById("msg");

// Add click listener to start button
startButton.addEventListener('click', reset);


function startListeners() {
  for(var i=0; i< gameBoard.length; i++) {
    gameBoard[i].addEventListener('click', tileClickedEvents)
    console.log(i)
  }
}

function setImageTeamValue() {

  var imagePlayer = document.createElement("img");

  if(turn % 2) {
    imagePlayer.setAttribute("src","img/dog.jpeg");
    event.srcElement.setAttribute("player", "dog");
  }
  else {
    imagePlayer.setAttribute("src","img/cat.jpeg");
    event.srcElement.setAttribute("player", "cat");

  }

  event.srcElement.appendChild(imagePlayer);

}

function eventListenerRemoval(){
  // Stop listening to clicks
  this.removeEventListener('click', tileClickedEvents);
}

function endGame(){
  //include code to endGame
}

function tileClickedEvents() {
  
  eventListenerRemoval();
  
  setImageTeamValue();

  turn++;
  counter++;

  if(checkWinner(turn % 2 ? 'dog' : 'cat')){
      // endGame function?
      endGame();
      // Whatever win condition goes here
  }
  else if(counter >= 9){
    // We tied - do something for a draw condition
  }
}

function checkWinner(player) {
  
  // Loop through WIN_CONDITIONS
    WIN_CONDITIONS.forEach(function(scenario) {
      var win = true
      var catNum = 0
      var dogNum = 0
      scenario.forEach(function(index) {
        if (!gameBoard[index].player) {
          return false
        } 
        else if(gameBoard[index].player === catNum || dogNum) {
          return win
        }
        else if(catNum === 3 || dogNum === 3) {
          return catNum || dogNum
        }
        else {
          win = false
        }
      }) 
    })
      
      // if(player === gameBoard[].getAttribute("player") && player === gameBoard[1].getAttribute('player') && player === gameBoard[2].getAttribute('player')) {
      //   return true;
      // }
      //  else if(player === gameBoard[3].getAttribute("player") && player === gameBoard[4].getAttribute('player') && player === gameBoard[5].getAttribute('player')) {
      //   return true;
      // }
      // else if(player === gameBoard[6].getAttribute("player") && player === gameBoard[7].getAttribute('player') && player === gameBoard[8].getAttribute('player')) {
      //   return true;
      // }
      // else{
      //   console.log("winconditionsnotmet")
      //   return false
      // }










      // scenario.forEach(function(index) {
      //   // console.log(index)
      //   // console.log(gameBoard[index])
      //   // if(gameBoard[i] ){
      //   //   return false
      //   // }
      //   // if(gameBoard == 0){

      //   // }
      //   // else {
      //   //   return false
      //   // }

      // })
      // TODO check truthiness of winner or win
    // })

    // Check whether
      // Square number WIN_CONDITIONS[i][0] == player AND
      // Square number WIN_CONDITIONS[i][1] == player AND
      // Square number WIN_CONDITIONS[i][2] == player

        // return true - there is a winner

    // else return false
}



function removeListeners() {
  for(var i=0; i<gameBoard.length; i++){
    gameBoard[i].removeEventListener('click', tileClickedEvents)
    console.log(i)
  }
}

function reset() {
  for(var i=0; i<gameBoard.length;i++){
    if(!!gameBoard[i].children.length){
      gameBoard[i].removeChild(gameBoard[i].children[0]);
    }
  }
  startListeners();
}

//-------------------------------------------------------------------------------------------

// var turn = 0;

// var gameBoard = document.getElementsByClassName("grid");

// var startButton = document.getElementById("reset");

// var messages = document.getElementById("msg");

// console.log(gameBoard[0]); 


// function startListeners() {
// 	for(var i=0; i<gameBoard.length; i++){
// 		gameBoard[i].addEventListener('click', tileClickedEvents)
// 		console.log(i)
// 	}
// }

// function tileClickedEvents() {
// 	if(turn%2){
// 		var imageDog = document.createElement("img");
//   	imageDog.setAttribute("src","img/dog.jpeg");
//   	event.srcElement.appendChild(imageDog); 
//     // set attribute to container div that indicates the state of the square
//     event.srcElement.setAttribute("clicked", "perro");
//     console.log(event.srcElement.getAttribute("clicked"));
//   	turn++;
//   	checkWinner();
// 	}
// 	else {
// 		var imageDog = document.createElement("img");
// 	  imageDog.setAttribute("src","img/cat.jpeg");
// 	  event.srcElement.appendChild(imageDog);
// 	  turn++;
// 	  checkWinner();
// 	}
// }

// 	startButton.addEventListener('click', startListeners);


// function checkWinner() {

//  for (var x = 0; x <= 6; x+= 3) {
//    if (checkRow(x)) {
//      messages.textContent = "The winner is the " + checkRow(x);
//      console.log("winner")
//      removeListeners();
//      // reset();
//    }
//  }
//  for (var y = 0; y <= 2; y+= 1) {
//    if (checkColumn(y)) {
//      messages.textContent = "The winner is the " + checkColumn(y);
//      removeListeners();
//      // reset();
//    }
//  }
// 	 if (checkDiagonal1(0)) {
//      messages.textContent = "The winner is the " + checkDiagonal1(0);
//    	 removeListeners();
//    	 // reset();
//  }
// 	 if (checkDiagonal2(2)) {
//    	 messages.textContent = "The winner is the " + checkDiagonal2(2);
//      removeListeners();
//      // reset();
//  }

// }

// function removeListeners() {
// 	for(var i=0; i<gameBoard.length; i++){
// 		gameBoard[i].removeEventListener('click', tileClickedEvents)
// 		console.log(i)
// 	}
// }

// function reset() {
// 	for(var i=0; i<gameBoard.length;i++){
//   	if(!!gameBoard[i].children.length){
//     	gameBoard[i].removeChild(gameBoard[i].children[0]);
//   	}
// 	}
// }

// function checkColum(start) {
//  if (gameBoard[start].getElementsByTagName("img").length > 0 &&
//    gameBoard[start + 3].getElementsByTagName("img").length > 0 &&
//    gameBoard[start + 6].getElementsByTagName("img").length > 0) {
//    if (gameBoard[start].getElementsByTagName("img")[0].src === gameBoard[start + 3].getElementsByTagName("img")[0].src &&
//      gameBoard[start + 6].getElementsByTagName("img")[0].src === gameBoard[start + 3].getElementsByTagName("img")[0].src) {
//      if (gameBoard[start].getElementsByTagName("img")[0].src.includes("perro")) {
//        return "perro";
//      } else {
//        return "gato";
//      }
//    }
//    return 0;
//  }
// }

// function checkRow(start) {
//  if (gameBoard[start].getElementsByTagName("img").length > 0 &&
//    gameBoard[start + 1].getElementsByTagName("img").length > 0 &&
//    gameBoard[start + 2].getElementsByTagName("img").length > 0) {
//    if (gameBoard[start].getElementsByTagName("img")[0].src === gameBoard[start + 1].getElementsByTagName("img")[0].src &&
//      gameBoard[start + 2].getElementsByTagName("img")[0].src === gameBoard[start + 1].getElementsByTagName("img")[0].src) {
//      if (gameBoard[start].getElementsByTagName("img")[0].src.includes("perro")) {
//      	console.log("perro");
//        return "perro";
//      } else {
//      	console.log('gato');
//        return "gato";
//      }
//    }
//    return 0;
//  }
// }

// function checkDiagonal1(start) {
//  if (gameBoard[start].getElementsByTagName("img").length > 0 &&
//    gameBoard[start + 4].getElementsByTagName("img").length > 0 &&
//    gameBoard[start + 8].getElementsByTagName("img").length > 0) {
//    if (gameBoard[start].getElementsByTagName("img")[0].src === gameBoard[start + 4].getElementsByTagName("img")[0].src &&
//      gameBoard[start + 8].getElementsByTagName("img")[0].src === gameBoard[start + 4].getElementsByTagName("img")[0].src) {
//      if (gameBoard[start].getElementsByTagName("img")[0].src.includes("perro")) {
//        return "perro";
//      } else {
//        return "gato";
//      }
//    }
//    return 0;
//  }
// }

// function checkDiagonal2(start) {
//  if (gameBoard[start].getElementsByTagName("img").length > 0 &&
//    gameBoard[start + 6].getElementsByTagName("img").length > 0 &&
//    gameBoard[start + 2].getElementsByTagName("img").length > 0) {
//    if (gameBoard[start].getElementsByTagName("img")[0].src === gameBoard[start + 6].getElementsByTagName("img")[0].src &&
//      gameBoard[start + 2].getElementsByTagName("img")[0].src === gameBoard[start + 6].getElementsByTagName("img")[0].src) {
//      if (gameBoard[start].getElementsByTagName("img")[0].src.includes("perro")) {
//        return "perro";
//      } else {
//        return "gato";
//      }
//    }
//    return 0;
//  }
// }


