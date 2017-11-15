var tic_tac_toe = () => {
  let letters = 'XO'
  let countX = 0;
  let countO = 0;
  let arr = [];

  for (let i = 0; i < 3; i++) {
    arr.push([]);
    for(let j = 0; j < 3; j++) {
      arr[i].push(letters.charAt(Math.random() * letters.length));
      if(arr[i][j] === 'X') {
        countX++;
      } else {
        countO++;
      }
      if(countX > 4) {
        arr[i][j] = 'O';
      } else if(countO > 4) {
        arr[i][j] = 'X';
      }
    }
  }
  return arr;
}

console.log(tic_tac_toe());
