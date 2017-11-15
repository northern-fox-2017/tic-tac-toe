const XO = 'XO';
var nestedArray = (square) => {
    let random = 0, array = [], randomCountO = 0, randomCountX = 0;
    for (let i = 0; i < square; i++) {
        array.push([]);
        for (j = 0; j < square; j++) {
            random = Math.floor(Math.random() * XO.length);
            random === 0 ? randomCountX++ : randomCountO++;
            if (randomCountX > 5) {
                random = 1;
            }
            if (randomCountO > 4) {
                random = 0;
            }
            array[i].push(XO[random]);
        }
    }
    return array;
};

console.log(nestedArray(3))