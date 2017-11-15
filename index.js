function random(arr){
    let num=0;
    num = Math.floor(Math.random()*arr.length);
    // console.log(num);
    return arr[num];
}

function tic_tac_toe(){
  let xo='xo'
  let board=[]
  let x=0
  let o=0
  for(let i=0;i<3;i++){
    board.push([])
    for(let j=0;j<3;j++){
      let functionRandom = random(xo)
      // board[i].push(functionRandom)
      if(functionRandom === 'x'){
        if(x<5){
          board[i].push('x')
          x++
        }else{
          board[i].push('o')
          o++
        }
      }else if(functionRandom === 'o'){
        if(o<5){
          board[i].push('o')
          o++
        }else{
          board[i].push('x')
          x++
        }
      }
      // board[i].push(random(xo))
    }
  }
  return board
}
console.log(tic_tac_toe());
