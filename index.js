function ticTacToeGenerator(){
  //Function yang akan membuat nested array 3x3 yang isisnya x dan o
  // jumlah x dan o seimbang 4-5 atau 5-4
  let arrTicTacToe = [];
  let rowSize = 3;
  let colSize = 3;

  let arrXO = ['x', 'o'];
  let xLeft = 5; 
  let oLeft = 5;

  for (let i = 0; i < rowSize; i++){
    arrTicTacToe.push([]);
    for (let j = 0; j < colSize; j++){
      
      let pushXO = '' ;

      if ( (xLeft > 0) && (oLeft > 0) ){
        pushXO = arrXO[ Math.round( (Math.random())) ]
        if (pushXO === 'o'){
          oLeft--
        } else{
          xLeft--
        }
      } else if (xLeft === 0 && oLeft > 0){
        pushXO = 'o'
      } else{
        pushXO = 'x'
      }
      //arrXO.splice( Math.floor( (Math.random() * (arrXO.length) ) ) , 1);

      arrTicTacToe[i].push(pushXO);
    }
  }
  return arrTicTacToe
}

// DRIVER
console.log(ticTacToeGenerator());