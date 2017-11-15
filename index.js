let tic_tac_toe = () => {
  let XO = 'XO'
  let board = []
  let counterX = 0
  let counterO = 0
  for(let i = 0; i < 3; i++){
    board.push([])
    for(let j = 0; j < 3; j++){
      let randomXO = XO[Math.round(Math.random())]
      if(randomXO == 'X' && counterX < 5){
        board[i].push(randomXO)
        counterX++
      }else if(randomXO == 'O' && counterO < 5){
        board[i].push(randomXO)
        counterO++
      }else if (randomXO == 'O' && counterO == 5) {
        randomXO = 'X'
        board[i].push(randomXO)
        counterX++
      }else if(randomXO == 'X' && counterO == 5){
        randomXO = 'O'
        board[i].push(randomXO)
        counterO++
      }
    }
  }
  console.log(board);
}

tic_tac_toe()
