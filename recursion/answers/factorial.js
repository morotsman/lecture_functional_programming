"use strict";
/*
const factorial = number => {
	if(number === 0) return 1;
	return  number * factorial(number - 1);
}
*/

const factorial = number => {
	const go = (number,acc) => {
		if(number === 0) return acc;
		return go(number - 1, number*acc);
	} 
	
	return go(number,1);
}

 