function ticTactoe(row, col) {
  let arr = []
  let xo = 'XO'
  let countO = 0
  let countX = 0

  for(let i = 0; i < row; i++){
    arr.push([])
    for(let j = 0; j < col; j++){
      let random = xo[Math.floor(Math.random()*xo.length)]

      if (random === 'O') {
        countO++
        console.log(countO);
        if(countO > 5){
          random = 'X'
        }
      }
      else if(random === 'X'){
        countX++
        if(countX > 5){
          random = 'O'
        }
      }
      arr[i].push(random)
    }
  }
  return arr
}
console.log(ticTactoe(3, 3));
