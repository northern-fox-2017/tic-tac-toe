'use strict'

function ticTacToe(row, col) {
  let arr = [],
      countX = Math.floor((row * col) / 2),
      countO = (row * col) - countX,
      ticTac = 'XO'

  for (let i = 0; i < row; i++) {
    arr.push([])
    for (let j = 0; j < col; j++) {
      var randomTicTac = ticTac[Math.floor(((countX + countO) * Math.random()) % 2)]
      if (countX === 0 && randomTicTac === 'X') {
        randomTicTac = 'O'
      }
      arr[i].push(randomTicTac)
      let unsed = (randomTicTac === 'X') ? countX-- : countO--
    }
    console.log(arr[i]);
  }
}

ticTacToe(3, 3)
