function questions() {
	let name = prompt("Enter your name");
	let lastName = prompt("Enter your lastname");
	let age = prompt("Enter your age");
	let result = [name, lastName, toInteger(age)];

	if(result === null || result === "") {
		document.getElementById("textresult").innerHTML = "Geen gegevens ingevuld.";
		return false;
	} else if(result[0] === "" || result[1] === "" || result[2] === "") {
		document.getElementById("textresult").innerHTML = "Vul alle gegevens in aub.";
		return false;
	} else if(isNaN(age)) {
		document.getElementById("textresult").innerHTML = "Vul een getal in bij leeftijd.";
		return false;
	} else {
		document.getElementById("textresult").innerHTML = "Name: " + name + " Lastname: " + lastName + " Age: " + age;
	}
}

