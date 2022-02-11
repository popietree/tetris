'use strict';

const prompt = require('prompt-sync')();

const getInput = () => {
  return prompt('your move: ');
};

const moveDown = () => {
  let newBoard = [['□', '□', '□', '□', 'N']];
  for (let i = 0; i < 7; i++) {
    newBoard.push(board[i]);
  }
  console.log(newBoard, 'newBoard');
  return newBoard;
};

let board = [
  ['□', '■', '□', '□', 0],
  ['□', '■', '■', '□', 1],
  ['□', '■', '□', '□', 2],
  ['□', '□', '□', '□', 3],
  ['□', '□', '□', '□', 4],
  ['□', '□', '□', '□', 5],
  ['□', '□', '□', '□', 6],
];

let userInput = '';

const printBoard = () => {
  const typeInput = getInput();
  if (typeInput === '') {
    console.log('its is enter');

    board = moveDown();
  }

  console.log(board, 'in print');
};

for (let i = 0; i < 5; i++) {
  printBoard();
}

const clearLine = () => {};

const rotate = () => {};

const respawn = (piece) => {};
