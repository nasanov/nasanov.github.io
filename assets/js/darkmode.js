window.addEventListener('DOMContentLoaded', () => {
	document.getElementById('darkmode-switch').addEventListener('click', () => {
		console.log('hello world');
		if (window.getComputedStyle(document.documentElement).getPropertyValue('--background-color') === '#fff') {
			document.documentElement.style.setProperty('--background-color', '#333');
			document.documentElement.style.setProperty('--text-color', '#fff');
		} else {
			document.documentElement.style.setProperty('--background-color', '#fff');
			document.documentElement.style.setProperty('--text-color', '#333');
		}
	});
});
