function reverseNumber() {
	let reverse = prompt("Enter a number or text");
	let n = reverse + "";
	return n.split("").reverse().join("");
}

window.alert(reverseNumber());
