
function tic_tac_toe (row,column){
  let XO = 'XO';
  let counterX = 0;
  let counterO = 0;
  let arr = [];
  for(let i = 0; i < row; i++){
    arr.push([])
    for(let j = 0; j < column; j++){
      let random = XO[Math.floor(Math.random() * 2)]
      if(random == 'X' && counterX != 5){
        counterX += 1
        arr[i].push(random)
      }
      else if (random == 'O' && counterO != 5) {
        counterO += 1
        arr[i].push(random)
      }
      else if (counterX == 5) {
        arr[i].push('O')
      }
      else if (counterO == 5) {
        arr[i].push('X')
      }
    }
  }
  return arr
}

console.log(tic_tac_toe(3,3));
