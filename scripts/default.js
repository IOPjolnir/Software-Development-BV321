window.onload = () => {
	let theme = localStorage.getItem('theme');
	if (theme === null)
		localStorage.setItem('theme', 'light');
	else
		if (theme == 'dark') {
			setDarkTheme();
		}
	loading.style.display = 'none';
};



const backBtn = document.getElementById('back-btn');
const burgerBtn = document.getElementById('burger-logo');
const sideNav = document.getElementById('side-nav');
const closeBtn = document.getElementById('side-close');
const themeBtn = document.getElementById('toogle-theme');

const variables = [
	'--font',
	'--bg'
];
const colors = [
	{ // --font
		light: '#000',
		dark: '#FFF'
	},
	{ // --bg
		light: '#FFF',
		dark: '#2D2D2D'
	}
];


window.addEventListener('scroll', () => {
	backBtn.style.bottom = scrollY > 50 ? '10px' : '-60px';
});

burgerBtn.addEventListener('click', () => {
	sideNav.style.right = '0';
});

closeBtn.addEventListener('click', () => {
	sideNav.style.right = '-500px';
});

themeBtn.addEventListener('click', () => {
	let theme = localStorage.getItem('theme');
	if (theme === null) {
		console.log('Syserror #13');
		return;
	}
	if (theme == 'dark') {
		localStorage.setItem('theme', 'light');
		setLightTheme();
	}
	else {
		localStorage.setItem('theme', 'dark');
		setDarkTheme();
	}
});



// FUNCTIONS
function setDarkTheme(){
	let docRoot = document.querySelector(':root');
	let logoImg = document.getElementById('head-logo-img');
	logoImg.setAttribute('src', 'images/top_logo_white.png')
	for (let i = 0; i < variables.length; i++)
		docRoot.style.setProperty(variables[i], colors[i].dark);
	document.querySelector('#burger-logo path').setAttribute('stroke', colors[0].dark);
	console.log('Dark theme set');
}
function setLightTheme(){
	let docRoot = document.querySelector(':root');
	let logoImg = document.getElementById('head-logo-img');
	logoImg.setAttribute('src', 'images/top_logo_black.png')
	for (let i = 0; i < variables.length; i++)
		docRoot.style.setProperty(variables[i], colors[i].light);
	document.querySelector('#burger-logo path').setAttribute('stroke', colors[0].light);
	console.log('Light theme set');
}