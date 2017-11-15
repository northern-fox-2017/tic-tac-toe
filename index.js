function randomXo() {
  let huruf = 'xo';
  let random = (Math.floor(Math.random() * huruf.length))
  return huruf[random];
}

function ticTacToe(baris, kolom) {
  let arr = [];
  let x = 0;
  let o = 0;

  for(let i = 0 ; i < baris ; i++) {
    arr.push([]);
      for(let j = 0 ; j < kolom ;j++) {
        let acak = randomXo();
          if(acak === 'x') {
            if(x < 5) {
              arr[i].push(acak);
              x++;
            } else {
              arr[i].push('o');
              o++;
            }
          } else if(acak === 'o') {
              if(o < 5) {
                arr[i].push(acak);
                o++;
            } else {
              arr[i].push('x');
              x++;
            }
          }
      }
    }
    return arr;
}

console.log(ticTacToe(3,3));
