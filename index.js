function tictactoe(){
  let kotak = 3
  var arr = [];
  var countO = 0;
  var countX = 0;
  for (var i = 0; i < kotak; i++) {
    arr.push([]);
    for(var j = 0; j < kotak; j++){
      var randomNumber = Math.floor(Math.random()*2);
      if(countO>4){
        randomNumber = 1;
      } else if (countX>4){
        randomNumber = 0;
      }

      if(randomNumber == 0){
        arr[i].push('O');
        countO++;
      } else {
        arr[i].push('X');
        countX++;
      }
    }
  }
  return arr;
}

console.log(tictactoe());
