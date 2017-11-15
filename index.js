var tictactoe = () => {
  let result = []
  let bucket = [
    ['X', 'X', 'X', 'X', 'X'],
    ['O', 'O', 'O', 'O', 'O'],
  ]
  for (let i = 0; i < 3; i++) {
    let row = []
    for (let j = 0; j < 3; j++) {
      let oneZero = Math.round(Math.random())
      if (bucket[oneZero].length === 0) {
        row.push(bucket[oneZerooneZero === 1 ? 0 : 1][0])
      } else {
        row.push(bucket[oneZero][0])
        bucket[oneZero].pop()
      }      
    }
    result.push(row)
  }
  return result
}

console.log(tictactoe())