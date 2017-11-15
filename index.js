// col = kebawah
// row = kesamping 
function ticTacToe (jumlahCol,jumlahRow){
    let newArr = []
    let countX = 0
    let countO = 0    
    let XO = ['X','O']          

    for(var i=0; i<jumlahCol; i++){
        newArr.push([])

        for(var j=0; j<jumlahRow; j++){
            let random = Math.floor((Math.random() * XO.length));                    
            let randomXO = XO[random]

            if(randomXO == 'X'){
                if(countX < 5){                
                    newArr[i].push('X')
                    countX++
                }
                else{
                    newArr[i].push('O')
                    countO++
                }
            }

            else{
                if(countO < 5){                
                    newArr[i].push('O')
                    countO++
                }
                else{
                    newArr[i].push('X')
                    countX++
                }
            }            
        }        
    }
    return newArr
}

console.log(ticTacToe(3,3))
