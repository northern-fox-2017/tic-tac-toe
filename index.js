const randomXO = () => {
  const xo = ['X', 'O'];
  const random = Math.floor(Math.random() * 2);
  return xo[random];
}

const generateXO = () => {
  let xo = '';

  while (xo.replace(/[^X]/g, "").length < 4 || xo.replace(/[^O]/g, "").length < 4) {
    xo = '';
    for (let i = 0; i < 9; i++) {
      xo += randomXO();
    }
  }

  return xo;
}

const generateTicTacToe = () => {
  const arrayResult = [];
  const xo = generateXO();
  let index = 0;

  for (let i = 0; i < 3; i++) {
    arrayResult.push([]);
    const substr = xo.slice(index, index + 3);
    index += 3;
    arrayResult[i].push(substr);
  }
  return arrayResult;
}

console.log(generateTicTacToe());