function tictac() {

  let numX = 0;
  let numO = 0;
    let arr = [];
      for (let i = 0; i < 3; i++) {
          arr.push([])
            for (let j = 0; j < 3; j++) {
              let random = Math.floor(Math.random() * 2)
                if (random == 0) {
                  if (numO < 5) {
                    arr[i].push('o')
                    numO++
                  } else {
                    arr[i].push('x')
                    numX++
                  }
                } else {
                  if (numX < 5) {
                arr[i].push('x')
                numX++
              } else {
                arr[i].push('o')
                numO++
              }
            }
          }
        }
    return arr
}

console.log(tictac());
