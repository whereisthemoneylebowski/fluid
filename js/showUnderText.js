var textButton = document.querySelector('.showmore');
var showingMaterial = textButton.nextElementSibling;

textButton.addEventListener('click', function(event) {
	event.preventDefault();
	showingMaterial.classList.toggle('showmore-showed');
	textButton.classList.toggle('hidetextbutton');
});