var logo = document.querySelector('.logo');

logo.addEventListener('mouseover', function(event) {
	logo.firstElementChild.style.display = 'none';
	logo.lastElementChild.style.display = 'inline-block';
});

logo.addEventListener('mouseout', function(event) {
	logo.firstElementChild.style.display = 'inline-block';
	logo.lastElementChild.style.display = 'none';
});