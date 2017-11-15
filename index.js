function createBoard(){
  function xo(){
    let tictac = 'xo'
    let random = tictac[Math.floor(Math.random()*2)]
    return random
  }
  let board = []
  let xCount = 0
  let oCount = 0
  for (let i = 0; i < 3; i++) {
    board.push([])
    for (let j = 0; j < 3; j++) {
      if(xCount > 4){
        board[i].push('o')
      } else if (oCount > 4) {
        board[i].push('x')
      } else {
        board[i].push(xo())
        if(board[i][j] == 'x'){
          xCount += 1
        } else if (board[i][j] == 'o') {
          oCount += 1
        }
      }
    }
  }
  return board
}

console.log(createBoard());