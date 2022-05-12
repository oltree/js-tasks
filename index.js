
const showMessage = function(value) {
	if (value > 10) return "error, number can not be grater than 10";
	if (value == 5) return "It's middle";
	if (value == 1) return "Lower middle";
	if (value == 6) return "Upper middle";
	if (value == 10) return "The biggest";
}
console.log(showMessage(1));