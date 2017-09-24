//loop through
console.log('helloworld');

var getBox = document.querySelectorAll('.row .box');
var playerOne = 'O';
var moves = 0;

function threeInRow(firstBox, secondBox, thirdBox) {
  firstBox = firstBox.textContent;
  secondBox = secondBox.textContent;
  thirdBox = thirdBox.textContent;

if ((firstBox === secondBox) && (secondBox === thirdBox))
  if (firstBox === 'X') {
    return 'X';
  } else if (firstBox === 'O') {
    return 'O';
  }
}
  return null;
};

function acrossWin() {
  var botRow = threeInRow(getBox[6], getBox[7], getBox[8]);
  var midRow = threeInRow(getBox[3], getBox[4], getBox[5]);
  var topRow = threeInRow(getBox[0], getBox[1], getBox[2]);

  return topRow || (midRow || botRow);
};

function verticalWin() {
  var left = threeInRow(getBox[0], getBox[3], getBox[6]);
  var mid = threeInRow(getBox[1], getBox[4], getBox[7]);
  var right = threeInRow(getBox[2], getBox[5], getBox[8]);

  return left || (mid || right);
};

function diagWin() {
  var leftDown = threeInRow(getBox[0], getBox[4], getBox[8]);
  var rightDown = threeInRow(getBox[2], getBox[4], getBox[6]);

  return leftdown || rightDown;
};
