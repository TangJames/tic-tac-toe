//loop through
console.log('helloworld');

//select rows and boxes and define playerOne
var boxes = document.querySelectorAll('.row .box');
var playerOne = 'X';
var moves = 0;

//define boxes and make rule
function threeInRow(box0, box1, box2) {
  return box0.textContent &&
         (box0.textContent === box1.textContent) &&
         (box1.textContent === box2.textContent);
};
//Winning game logic
function acrossWin() {
  var botRow = threeInRow(boxes[6], boxes[7], boxes[8]);
  var midRow = threeInRow(boxes[3], boxes[4], boxes[5]);
  var topRow = threeInRow(boxes[0], boxes[1], boxes[2]);

  return topRow || midRow || botRow;
};

function verticalWin() {
  var left = threeInRow(boxes[0], boxes[3], boxes[6]);
  var mid = threeInRow(boxes[1], boxes[4], boxes[7]);
  var right = threeInRow(boxes[2], boxes[5], boxes[8]);

  return left || mid || right;
};

function diagWin() {
  var leftDown = threeInRow(boxes[0], boxes[4], boxes[8]);
  var rightDown = threeInRow(boxes[2], boxes[4], boxes[6]);

  return leftDown || rightDown;
};
//win condition
function getWin() {
  return diagWin() || verticalWin() || acrossWin();
}

//Switch players back and forth
function switchPlayer() {
  if (playerOne === 'O') {
    playerOne = 'X';
  } else {
    playerOne = 'O';
  }
};

//reset the game
function resetGame() {
  boxes.forEach((e) => {
    e.innerText = '';
  });
  //if (boxes.classList === 'O') {
    //boxes.classList.remove('O');
  //}
  //else if (boxes.classList === 'X') {
    //boxes.classList.remove('X');
  //}
  playerOne = 'X';
  moves = 0;
};

var reset = document.querySelector('.btn');
reset.addEventListener('click', function(e) {
  resetGame();
});

//the game
boxes.forEach(function(element) {
  element.addEventListener('click', function(e) {
    if (this.textContent !== '')
      return;
    this.innerText = playerOne;
    //this.classList.add(playerOne);
    moves += 1;
    if (getWin()) {
      alert(`Player ${playerOne} won!`);
    }
    else if (moves < 9) {
      switchPlayer();
    }
    else {
      alert('TIE GAME');
      switchPlayer();
    }
  });
});
