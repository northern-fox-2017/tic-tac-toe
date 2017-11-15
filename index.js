function getRandom(min, max) {
  	return Math.round(Math.random() * (max - min) + min);
}
function ticTacToe(){
	let ticTac = 'XO';
	let papan = 3;
	let result = [];
	let countX = 0;
	let countO = 0;
	debugger
	for(let i = 0; i < papan; i++){
		result.push([]);
		for(let j = 0; j < papan; j++){
			let random = getRandom(0, ticTac.length - 1);
			if(random === 0){
				countX += 1;
				if(countX === 5){
					result[i].push(ticTac[1]);
				}else{
					result[i].push(ticTac[0]);
				}
			}else{
				countO += 1;				
				if(countO === 5){
					result[i].push(ticTac[0]);
				}else{
					result[i].push(ticTac[1]);
				}
			}
		}
	}
	return result;

}

console.log(ticTacToe());