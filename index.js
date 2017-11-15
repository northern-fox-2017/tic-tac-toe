function tic_tac_toe(jumlahRow, jumlahCol) {
  let randomXO = 'xo';
  let randomX = Math.floor((jumlahRow * jumlahCol) /2);
  let randomO = (jumlahRow * jumlahCol) - randomX;
  let totalResult = [];
  let result = '';

  for (var i = 0; i < jumlahRow; i++) {
    totalResult.push([]);
    for (var j = 0; j < jumlahCol; j++) {
      result = randomXO[Math.floor(Math.random() * randomXO.length)];
      if(randomX === 0 && result === 'x'){
        result = 'o';
      }
      totalResult[i].push(result);
      if (result ==='x'){
        randomX--;
      }else{
        randomO--;
      }
    }
  }return totalResult;
}
console.log(tic_tac_toe(3, 3))
