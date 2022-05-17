//task №9
/* const getResult = function (string, number) {
	return string.length > number ? 'String is too long!' : string;
};
console.log(getResult(prompt('Введите строку!'), prompt('Введите число!')));  */

/* const getResult = (string, number) => string.length > number ? 'String is too long!' : string;
console.log(getResult(prompt('Введите строку!'), prompt('Введите число!'))); */


//task №8
/* let stringOne = String(prompt('Введит первую строку!'));
let stringTwo = String(prompt('Введите вторую строку!'));
console.log(`${stringOne} ${stringTwo}`); */


//task №7
/* const showMassage = function (letter) {
	return letter === letter.toUpperCase() ? 'Оууу май, большая буква!' : 'Нет уж, маленькие буквы - скучно';
};
console.log(showMassage(prompt('Введите букву!'))); */

/* const showMassage = (letter) => letter === letter.toUpperCase() ? 'Оууу май, большая буква!' : 'Нет уж, маленькие буквы - скучно';
console.log(showMassage(prompt('Введите букву!'))); */


//task №6
/* const newString = function (str) {
	return str[0].toUpperCase() + str.slice(1).toLowerCase();
};
console.log(newString(prompt('Введите строку!'))); */

/* const newString = (str) => str[0].toUpperCase() + str.slice(1).toLowerCase();
console.log(newString(prompt('Введите строку!'))); */


//task №5
/* const deleteChars = function (str) {
	return str.slice(1, -1);
};
console.log(deleteChars(prompt('Введите строку!'))); */

/* const deleteChars = (str) => str.slice(1, -1);
console.log(deleteChars(prompt('Введите строку!'))); */


//task №4
/* const getResult = function (number) {
	return number % 2 === 0;
};
console.log(getResult(prompt('Введите число!'))); */

/* const getResult = (number) => number % 2 === 0;
console.log(getResult(prompt('Введите число!'))); */


//task №3
/* const getMinResult = function (a, b) {
	return a < b ? a : b;
};
console.log(getMinResult(prompt('Введите первое число!'), prompt('Введите второе число!'))); */

/* const getMinResult = (a, b) => a < b ? a : b;
console.log(getMinResult(prompt('Введите первое число!'), prompt('Введите второе число!'))); */


//task №2
/* let numberOne = Number(prompt('Введите сторону треугольника!'));
let numberTwo = Number(prompt('Введите сторону треугольника!'));
console.log(`Длинна гипотенузы: ${Math.pow((Math.pow(numberOne, 2) + Math.pow(numberTwo, 2)), 1 / 2)}`); */


//task №1
/* const showMessage = function (name) {
	const greetingWord = name.toLowerCase() === 'mark' ? 'Hi' : 'Hello';
	return `${greetingWord}, ${name}!`
};
console.log(showMessage(prompt('Введите имя!'))); */

/* const showMessage = (name) => {
	const greetingWord = name.toLowerCase() === 'mark' ? 'Hi' : 'Hello';
	return `${greetingWord}, ${name}!`
};
console.log(showMessage(prompt('Введите имя!'))); */
