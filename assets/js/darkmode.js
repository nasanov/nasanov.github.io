window.addEventListener('DOMContentLoaded', () => {
	document.getElementById('darkmode-switch').addEventListener('click', () => {
		if (window.getComputedStyle(document.documentElement).getPropertyValue('--background-color') === '#fff') {
			document.documentElement.style.setProperty('--background-color', '#333');
			document.documentElement.style.setProperty('--background-color-secondary', '#1f2223');
			document.documentElement.style.setProperty('--text-color', '#fff');
			document.documentElement.style.setProperty('--skills-background', '#1f2223');
			document.documentElement.style.setProperty('--section-title', '#fdfdfd');
			document.documentElement.style.setProperty('--about-text-color', '#fdfdfd');
			document.documentElement.style.setProperty('--contact-form-shadow', '#1f2223');
			document.documentElement.style.setProperty('--contact-form-background', '#1f2223');
		} else {
			document.documentElement.style.setProperty('--background-color', '#fff');
			document.documentElement.style.setProperty('--background-color-secondary', '#f2f2f2');
			document.documentElement.style.setProperty('--text-color', '#333');
			document.documentElement.style.setProperty('--skills-background', '#f0f0f0');
			document.documentElement.style.setProperty('--section-title', '#252525');
			document.documentElement.style.setProperty('--about-text-color', '#040404');
			document.documentElement.style.setProperty('--contact-form-shadow', '#ededed');
			document.documentElement.style.setProperty('--contact-form-background', '#fff');
		}
	});
});
