function ticTac(row , colom) {
  let board = [];
  let counterX = 0;
  let counterO = 0;

  for(let i=0; i<row ;i++) {
    board.push([]);
    for(let j=0; j<colom; j++) {
      var acak = random();
      if(acak == 'X'){
        counterX ++
        if(counterX > 5){
          board[i].push('O')
        } else {
          board[i].push('X')
        }
      } else {
        if(acak == 'O'){
          counterO ++
          if(counterO > 5){
            board[i].push('X')
          } else {
            board[i].push('O')
            }
          }
        }
      }
    }
  return board
 }

function random() {
  var word = 'XO'
  var word = word[Math.floor(Math.random() * word.length)]

  return word
}
console.log(ticTac(3,3));
