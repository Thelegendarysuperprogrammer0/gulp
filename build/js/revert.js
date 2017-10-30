function reverseNumber(n)
{
	n = n + "";
	return n.split("").reverse().join("");
}

window.alert(reverseNumber(25683));
