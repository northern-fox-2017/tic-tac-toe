let  TicTacToe = ()=>{
    let karakter = 'XO'
    let temp = []
    let countX = 0;
    let countO = 0;
     
    

    for(let i = 0;i<3;i++){
        temp.push([])
        for (let  j = 0; j<3;j++){
        let input = karakter.charAt(Math.random()*karakter.length)
            if(input ==='X'){
                countX++
            }else if(input==='O') {
                countO++
            }

            if(countX>=5){
                temp[i].push('O')
            }else if (countO>=5){
                temp[i].push('X')
            }else {
                temp[i].push(input)
            }

        }
    }


   

    return  temp;

} 

console.log(TicTacToe())