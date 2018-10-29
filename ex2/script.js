const test = 'asd'

function reverse(str) {
	let reverseStr = ''
	const arr = str.split('')
		for (let i = arr.length-1; i >=0; i--){
			reverseStr += arr.pop()
	}
	return reverseStr;
}
console.log(reverse(test))

function revers(string) {
	return string.split('').reduceRight((acc, elem) => acc.concat(elem), []).join('')
}

console.log(revers(test));