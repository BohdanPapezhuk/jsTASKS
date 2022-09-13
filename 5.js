// Складіть програму, яка приймає з клавіатури
// два цілі числа і виводить на екран наступні значення 
// (кожне в окремому рядку): суму введених чисел,
// їх добуток, різницю між першим і другим, 
// різницю між другим і першим.

let num = prompt('Дай ціле число');
num = Number(num);
let num2 = prompt('Дай ціле');
num = Number(num);
if(isNaN(num )){
	console.log('ти тупе, ЦИФРИ треба писати, довбень');
} else{
	console.log(num + num2);
	console.log(num * num2);
	console.log(num - num2);
	console.log(num2 - num);
}
