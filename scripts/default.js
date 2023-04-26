const headerLetters = document.getElementsByClassName('logo-letter');

for (let i = 0; i < headerLetters.length; i++)
	headerLetters[i].setAttribute('style', 'fill:#1E1F1D;fill-opacity:1;fill-rule:nonzero;stroke:none');

const backBtn = document.getElementById("back-btn");

window.addEventListener('scroll', () => {
	backBtn.style.bottom = scrollY > 10 ? '10px' : '-60px';
});