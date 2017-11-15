function ticTacToe(x,o) {
  let arr= []
  let jumO = 0
  let jumX = 0

  for (let i = 0; i < 3; i++) {
    arr.push([])
    for (var j = 0; j < 3; j++) {
      let acak = Math.floor(Math.random() * 2);
      if (acak == 0) {
        jumO += 1
        if (jumO <= 5) {
          arr[i].push(o)
        }else {
          arr[i].push(x)
        }
      }else {
        jumX += 1
        if (jumX <= 5) {
          arr[i].push(x)
        }else {
          arr[i].push(o)
        }
      }
    }
  }
  return arr;
}

console.log(ticTacToe('x','o'));
