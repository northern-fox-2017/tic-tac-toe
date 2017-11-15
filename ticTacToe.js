'use strict';

function ticTacToe(jumlahRow, jumlahCol) {
    let result = [];
    let xO = ['X', 'O'];
    let idxXO = -1;
    let content = "";

    for (let i = 0; i < jumlahRow; i++) {
        result.push([]);
    }  
   
    let empatLima = [4,5];
    let idx45 = Math.floor(Math.random() * 2);
    let randomCounter = empatLima[idx45];
        
    let randomRow = -1; 
    idxXO = Math.floor(Math.random() * 2);
    content = xO[idxXO];

    for (let j = 0; j < randomCounter; j++) {      
        randomRow = Math.floor(Math.random() * 3);
        if (result[0].length < (jumlahCol + 1) || result[1].length < (jumlahCol + 1) || result[2].length < (jumlahCol + 1) ) {
            result[randomRow].push(content);
        }
    }
    
    if (content === 'X') {
        content = 'O';
    }   else {
        content = 'X';
    }

    for (let k = 0; k < jumlahRow; k++) {
        while (result[k].length !== 3) {
            result[k].push(content);
        } 
    }
    console.log(result);
}


ticTacToe(3, 3);