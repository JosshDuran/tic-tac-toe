

var turn = 0;

var gameBoard = document.getElementsByClassName("grid");

var startButton = document.getElementById("reset");

var messages = document.getElementById("msg");

console.log(gameBoard[0]); 


function startListeners() {
	for(var i=0; i<gameBoard.length; i++){
		gameBoard[i].addEventListener('click', showImage)
		console.log(i)
	}
}

function showImage() {
	if(turn%2){
		var imageDog = document.createElement("img");
	imageDog.setAttribute("src","img/dog.jpeg");
	event.srcElement.appendChild(imageDog); 
	turn++;
	checkWinner();
	}
	else {
		var imageDog = document.createElement("img");
	imageDog.setAttribute("src","img/cat.jpeg");
	event.srcElement.appendChild(imageDog);
	turn++;
	checkWinner();
	}
}

	startButton.addEventListener('click', startListeners);


function checkWinner() {

 for (var x = 0; x <= 6; x+= 3) {
   if (checkRow(x)) {
     messages.textContent = "The winner is the " + checkRow(x);
     console.log("winner")
     removeListeners();
     // reset();
   }
 }
 for (var y = 0; y <= 2; y+= 1) {
   if (checkColumn(y)) {
     messages.textContent = "The winner is the " + checkColumn(y);
     removeListeners();
     // reset();
   }
 }
	 if (checkDiagonal1(0)) {
     messages.textContent = "The winner is the " + checkDiagonal1(0);
   	 removeListeners();
   	 // reset();
 }
	 if (checkDiagonal2(2)) {
   	 messages.textContent = "The winner is the " + checkDiagonal2(2);
     removeListeners();
     // reset();
 }

}

function removeListeners() {
	for(var i=0; i<gameBoard.length; i++){
		gameBoard[i].removeEventListener('click', showImage)
		console.log(i)
	}
}

function reset() {
	for(var i=0; i<gameBoard.length;i++){
  	if(!!gameBoard[i].children.length){
    	gameBoard[i].removeChild(gameBoard[i].children[0]);
  	}
	}
}

function checkColum(start) {
 if (gameBoard[start].getElementsByTagName("img").length > 0 &&
   gameBoard[start + 3].getElementsByTagName("img").length > 0 &&
   gameBoard[start + 6].getElementsByTagName("img").length > 0) {
   if (gameBoard[start].getElementsByTagName("img")[0].src === gameBoard[start + 3].getElementsByTagName("img")[0].src &&
     gameBoard[start + 6].getElementsByTagName("img")[0].src === gameBoard[start + 3].getElementsByTagName("img")[0].src) {
     if (gameBoard[start].getElementsByTagName("img")[0].src.includes("perro")) {
       return "perro";
     } else {
       return "gato";
     }
   }
   return 0;
 }
}

function checkRow(start) {
 if (gameBoard[start].getElementsByTagName("img").length > 0 &&
   gameBoard[start + 1].getElementsByTagName("img").length > 0 &&
   gameBoard[start + 2].getElementsByTagName("img").length > 0) {
   if (gameBoard[start].getElementsByTagName("img")[0].src === gameBoard[start + 1].getElementsByTagName("img")[0].src &&
     gameBoard[start + 2].getElementsByTagName("img")[0].src === gameBoard[start + 1].getElementsByTagName("img")[0].src) {
     if (gameBoard[start].getElementsByTagName("img")[0].src.includes("perro")) {
     	console.log("perro");
       return "perro";
     } else {
     	console.log('gato');
       return "gato";
     }
   }
   return 0;
 }
}

function checkDiagonal1(start) {
 if (gameBoard[start].getElementsByTagName("img").length > 0 &&
   gameBoard[start + 4].getElementsByTagName("img").length > 0 &&
   gameBoard[start + 8].getElementsByTagName("img").length > 0) {
   if (gameBoard[start].getElementsByTagName("img")[0].src === gameBoard[start + 4].getElementsByTagName("img")[0].src &&
     gameBoard[start + 8].getElementsByTagName("img")[0].src === gameBoard[start + 4].getElementsByTagName("img")[0].src) {
     if (gameBoard[start].getElementsByTagName("img")[0].src.includes("perro")) {
       return "perro";
     } else {
       return "gato";
     }
   }
   return 0;
 }
}

function checkDiagonal2(start) {
 if (gameBoard[start].getElementsByTagName("img").length > 0 &&
   gameBoard[start + 6].getElementsByTagName("img").length > 0 &&
   gameBoard[start + 2].getElementsByTagName("img").length > 0) {
   if (gameBoard[start].getElementsByTagName("img")[0].src === gameBoard[start + 6].getElementsByTagName("img")[0].src &&
     gameBoard[start + 2].getElementsByTagName("img")[0].src === gameBoard[start + 6].getElementsByTagName("img")[0].src) {
     if (gameBoard[start].getElementsByTagName("img")[0].src.includes("perro")) {
       return "perro";
     } else {
       return "gato";
     }
   }
   return 0;
 }
}


