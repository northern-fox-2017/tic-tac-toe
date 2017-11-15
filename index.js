function ticTacToe() {
    var result = [];
    var countX = 0;
    var countO = 0;

    for (var i = 0; i < 3; i++) { // Create rows
        result.push([]);
    }

    for (var j = 0; j < result.length; j++) { // Create columns and fill them up with X or O
        for (var k = 0; k < result.length; k++) {
            var zeroOrOne = Math.floor(Math.random() * 2); // Generate between 0 and 1
            if (zeroOrOne === 0 && countX < 5) {
                result[j].push('"X"');
                countX++;
            } else if (zeroOrOne === 0 && countX === 5) {
                result[j].push('"O"');
                countO++;
            } 
            else if (zeroOrOne === 1 && countO < 5) {
                result[j].push('"O"');
                countO++;
            } else if (zeroOrOne === 1 && countO === 5) {
                result[j].push('"X"');
                countX++;
            }
        }
    }
    
    return result;
}

console.log(ticTacToe());