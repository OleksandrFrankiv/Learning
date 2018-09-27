function factorial(num){

	var fact = 1

	if( num <= 0) return false;
	for( var i = 1; i <= num; i++){
		 fact *= i
	}
	return fact
}
	console.log(factorial(+prompt()))