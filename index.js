/*
function tic_tac_toe(){
	var arr = []
	for(var i = 0; i < 3; i++){
		arr.push([])
		for(var j = 0; j < 3; j++){
			arr[i].push(XO())
		}
	}
	return arr
}

console.log(tic_tac_toe())

function XO(){
  var tampung = '';
  var xo = 'xo'
  for(var i = 0; i < 1; i++){
    tampung += xo.charAt(Math.round(Math.random()))
  }
  return tampung
}

console.log(XO())
*/

function tic_tac_toe(){
	var arr = [];
	var hurufXO = 'xo';
    //console.log(hurufXO[0])
	var counterX = 0;
	var counterO = 0;
	//var random = Math.round(Math.random())
	//console.log(hurufXO[random])
	for(var i = 0; i < 3; i++){
		arr.push([])
		for(var j = 0; j < 3; j++){
			var random = Math.round(Math.random())
			//arr[i].push(hurufXO[random])
			if(hurufXO[random] === 'x'){
				counterX++
				//console.log(counterX)
				if(counterX > 5){
					arr[i].push('o')
				} else {
					arr[i].push('x')
				} 
			} else if(hurufXO[random] === 'o'){
				counterO++
				if(counterO > 5){
					arr[i].push('x')
				} else {
					arr[i].push('o')
				}
			}
 		}  
	}
	return arr
}


console.log(tic_tac_toe())




























