function loadMore() {
	let displaymore = false;
	let button = document.getElementById(morebutton);

	if(button) {
		displaymore = true;
	} else if(button && displaymore === true) {
		displaymore = false;
	}

	if(displaymore === true) {
		document.getElementById(paragraphload).innerHTML('Word word word word')
	} else {
		document.getElementById(paragraphload).innerHTML('Word word')
	}

}