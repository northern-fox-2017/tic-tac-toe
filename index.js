function ticTacToe () {
  // your code here
  let hitungX = 0;
  let hitungO = 0;
  let arr = [];

  for ( let i = 0; i < 3; i++) {
    let newArr = [];
    for (let j = 0; j < 3; j++) {

      //generate bilangan random
      let acak = Math.random()

      //menentukan kondisi ketika X = 5 atau O = 5
      if (hitungX < 5 && acak < 0.5) {
        hitungX++
        newArr.push('X')
        // console.log(newArr);
      } else if (hitungO < 5) {
        hitungO++
        newArr.push('O')
        // console.log(newArr);
      } else {
        newArr.push('X' || 'O')
        // console.log(newArr);
      }
    }
    // return newArr
    arr.push(newArr)
  }
  return arr
}

console.log(ticTacToe())
