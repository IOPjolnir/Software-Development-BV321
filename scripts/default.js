const headerLetters = document.getElementsByClassName('logo-letter');

for (let i = 0; i < headerLetters.length; i++)
	headerLetters[i].setAttribute('style', 'fill:#1E1F1D;fill-opacity:1;fill-rule:nonzero;stroke:none');

const backBtn = document.getElementById('back-btn');

window.addEventListener('scroll', () => {
	backBtn.style.bottom = scrollY > 10 ? '10px' : '-60px';
});

const burgerBtn = document.getElementById('burger-logo');
const sideNav = document.getElementById('side-nav');
const closeBtn = document.getElementById('side-close');

burgerBtn.addEventListener('click', () => {
	sideNav.style.right = '0';
});

closeBtn.addEventListener('click', () => {
	sideNav.style.right = '-500px';
});