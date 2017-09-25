//loop through
console.log('helloworld');

//select rows and boxes and define playerOne
var boxes = document.querySelectorAll('.row .box');
var playerOne = 'X';
var moves = 0;

//Winning game logic
function winnerWinnerChickenDinner() {
  var botRowAcross = win(boxes[6], boxes[7], boxes[8]);
  var midRowAcross = win(boxes[3], boxes[4], boxes[5]);
  var topRowAcross = win(boxes[0], boxes[1], boxes[2]);
  var leftTop = win(boxes[0], boxes[3], boxes[6]);
  var midTop = win(boxes[1], boxes[4], boxes[7]);
  var rightTop = win(boxes[2], boxes[5], boxes[8]);
  var leftDiag = win(boxes[0], boxes[4], boxes[8]);
  var rightDiag = win(boxes[2], boxes[4], boxes[6]);

  return topRowAcross || midRowAcross || botRowAcross || leftTop || midTop || rightTop || leftDiag || rightDiag;
};
//win condition
function getWin() {
  return winnerWinnerChickenDinner();
}

//define boxes and make win rule
function win(box0, box1, box2) {
  return box0.textContent &&
         (box0.textContent === box1.textContent) &&
         (box1.textContent === box2.textContent);
};

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
