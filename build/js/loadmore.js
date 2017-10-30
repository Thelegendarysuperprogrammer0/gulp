paragraphsec = document.getElementById(paragraphsec);
morebutton = document.getElementById(morebutton);
lessbutton = document.getElementById(lessbutton);

function loadMore() {
	if(this.morebutton) {
		this.paragraphsec.style.display="block";
		this.lessbutton.style.display="block";
		this.morebutton.style.display="none";
	}
}

function loadLess() {
	if(this.lessbutton) {
		this.paragraphsec.style.display="none";
		this.lessbutton.style.display="none";
		this.morebutton.style.display="block";
	}
}