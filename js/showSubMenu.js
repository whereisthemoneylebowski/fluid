var subMenu = document.querySelector('.submenu');
var navigationHref = document.querySelectorAll('.panel-navigation .submenu ~ a');
var iconDropDown = document.querySelector('.icon-dropdown');

subMenu.addEventListener('click', function(event) {
	event.preventDefault();
	subMenu.classList.toggle('reddy');
	iconDropDown.classList.toggle('hide');
	iconDropDown.classList.toggle('icon-dropdown-close');
	for (var i = 0; i < navigationHref.length; i++) {
		navigationHref[i].classList.toggle('showwy');
	}
});