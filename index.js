function ticTacToeGenerator(){
  //Function yang akan membuat nested array 3x3 yang isisnya x dan o
  // jumlah x dan o seimbang 4-5 atau 5-4
  let arrTicTacToe = [];
  let rowSize = 3;
  let colSize = 3;

  let arrXO = ['x', 'x' , 'x', 'x', 'x' , 'o', 'o', 'o', 'o', 'o'];

  for (let i = 0; i < rowSize; i++){
    arrTicTacToe.push([]);
    for (let j = 0; j < colSize; j++){
      let pushXO = arrXO.splice( Math.floor( (Math.random()* (arrXO.length-1) ) ) , 1);
      arrTicTacToe[i].push(pushXO);
    }
  }
  return arrTicTacToe
}

// DRIVER
console.log(ticTacToeGenerator());