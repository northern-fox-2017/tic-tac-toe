let TicTacToe = () => {
  let xo = ['x', 'o'];
  let result = [];
  let counterX = 0;
  let counterO = 0;
  for (let i = 0; i < 3; i++) {
    result.push([]);
    for (let j = 0; j < 3; j++) {
      let random = Math.round(Math.random());
      debugger;
      if (random == 1) {
        counterO++;
      }
      else if (random == 0) {
        counterX++;
      }
      if (counterX>5) {
        random = 1;
      }
      if (counterO>5) {
        random = 0;
      }
      result[i].push(xo[random]);
    }
  }
  return result;
}

console.log(TicTacToe());
