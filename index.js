function ticTacToe(){
    var xo = "XO";
    var x = 0;
    var o = 0;
    var kotakLuar = [];
    for(var i=0; i<3; i++){
        var kotakDalam = [];
        for(var j=0; j<3; j++){
            var isi = xo.charAt(Math.floor(Math.random()*xo.length))
            console.log(isi, "1");
            if(isi === "X" && x<5){
                console.log(isi, "2");
                kotakDalam.push(isi);
                x++;
            }else if(isi === "O" && o<5){
                kotakDalam.push(isi);
                o++;
            }else if(o>5){
                kotakDalam.push("X")
            }else if(x>5){
                kotakDalam.push("O")
            }
        }
        kotakLuar.push(kotakDalam);
    }
    return kotakLuar;
}

console.log(ticTacToe());