let ticTacToe = (jumlahCol,jumlahRow) =>{
  let arr = []
  let counterX = 0,counterO =0
  for (var i = 0; i < jumlahCol; i++) {
    arr.push([])
    for (var j = 0; j < jumlahRow; j++) {
      let newRandom = random()
      if (newRandom === 0 ){
        if (counterX === 5){
          arr[i].push('O')
        }
        else {
          counterX++
          arr[i].push('X')
        }
      }
      else if (newRandom === 1) {
        if (counterO === 5){
          arr[i].push('X')
        }
        else {
          counterO++
          arr[i].push('O')
        }
      }
    }
  }
  return arr
}

let random = () => {
  let random = Math.round(Math.random())
  return random
}

// let board = (jumlahCol,jumlahRow) => {
//   let arr = []
//   for (var i = 0; i < jumlahCol; i++) {
//     arr.push([])
//   }
//
//   return arr
// }


console.log(ticTacToe(3,3));
