function ticTacToe(column,row){

  // panggil function lagi (recursive?)

  let board = []
  let countO = 0
  let countX = 0
  for(let i = 0; i < row; i++){
    board.push([]);
    for(let j = 0; j < column; j++){
      let playerTurn = Math.floor(Math.random() * 2) + 1;
      if(playerTurn == 1){
        board[i].push('x')
        countX++
      }
      else{
        board[i].push('o')
        countO++
      }
    }
  }
  if(countO == 4 && countX == 5){
      return board
  }
  else if (countO == 5 && countX == 4) {
      return board
  }
  else{
    return ticTacToe(3,3)
  }

  // pake while


}


console.log(ticTacToe(3,3))
