
// Складіть програму, яка приймає з клавіатури 
// ціле число і виводить на екран два нових числа
// (кожне в окремому рядку)
// : число, більше введеного з клавіатури на 7, 
// і число менше введеного з клавіатури на 9.

let num = prompt('Дай ціле число');
num = Number(num);
if(isNaN(num)){
	console.log('ти тупе, ЦИФРИ треба писати, довбень');
} else{
	console.log(num - 7);
console.log(num + 9);
}

