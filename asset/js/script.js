window.onload = function() {
    const body = document.body;
    const moonDark = document.getElementById("moon-dark");
    const sunLight = document.getElementById("sun-light");
    
    const handleThemeChange = (e) => {
		const isDarkMode = e.matches;
        const logoText = document.getElementsByClassName("logo-text");
        const labelText = document.getElementsByClassName("div-label");
        const textareas = document.querySelectorAll("textarea");
        const selects = document.querySelectorAll("select");

		body.classList.remove(isDarkMode ? "light-mode" : "dark-mode");
        body.classList.add(isDarkMode ? "dark-mode" : "light-mode");
		sunLight.style.display = isDarkMode ? "block" : "none";
		moonDark.style.display = isDarkMode ? "none" : "block";

		Array.from(logoText).forEach(text => {
			text.style.color = isDarkMode ? "#38bdf8" : "#0284c7";
		});

		if (isDarkMode) {
			sunLight.addEventListener("mouseenter", () => sunLight.style.color = "#0ea5e9");
			sunLight.addEventListener("mouseleave", () => sunLight.style.color = "#38bdf8");
		}
		
		//	Helper function to apply styles to border/color
		function applyStyles(elements, hasBackground = false){
			elements.forEach(element => {
				element.style.border = isDarkMode ? ".1rem solid #5f6368" : ".1rem solid #d1d5db";
				element.style.color = isDarkMode ? "white" : "black";
				if(hasBackground){
					element.style.backgroundColor = isDarkMode ? "#292a2d" : "#f2f2f2";
				}
			});
		}
		
		applyStyles(Array.from(labelText));
		applyStyles(textareas, true);
		applyStyles(selects, true);

    };

    // Check initial theme
    const darkMode = window.matchMedia('(prefers-color-scheme: dark)');
    handleThemeChange(darkMode);

    // Listen for theme changes
    darkMode.addEventListener('change', handleThemeChange);
};

function toggleDarkLightMode() {
    const body = document.body;
    const moonDark = document.getElementById("moon-dark");
    const sunLight = document.getElementById("sun-light");
    
    const logoText = document.getElementsByClassName("logo-text");
    const labelText = document.getElementsByClassName("div-label");
    const textareas = document.querySelectorAll("textarea");
    const selects = document.querySelectorAll("select");

	const isDarkMode = body.classList.contains("dark-mode");

	body.classList.remove(isDarkMode ? "dark-mode" : "light-mode");
	body.classList.add(isDarkMode ? "light-mode" : "dark-mode");
	sunLight.style.display = isDarkMode ? "none" : "block";
	moonDark.style.display = isDarkMode ? "block" : "none";

	Array.from(logoText).forEach(element => {
		element.style.color = isDarkMode ? "#0284c7" : "#38bdf8";
	});

	function applyStyles(elements, isDark){
		elements.forEach(element => {
			element.style.border = isDark ? ".1rem solid #5f6368" : ".1rem solid #d1d5db";
			element.style.color = isDark ? "white" : "black";
			element.style.backgroundColor = isDark ? "#292a2d" : "#f2f2f2";
		});
	}


	// Check if we are toggling to dark mode and manage event listeners accordingly
	if (isDarkMode) {
        sunLight.removeEventListener("mouseenter", () => sunLight.style.color = "#0ea5e9");
        sunLight.removeEventListener("mouseleave", () => sunLight.style.color = "#38bdf8");
    } else {
        sunLight.addEventListener("mouseenter", () => sunLight.style.color = "#0ea5e9");
        sunLight.addEventListener("mouseleave", () => sunLight.style.color = "#38bdf8");
    }

	applyStyles(Array.from(labelText), !isDarkMode);
	applyStyles(textareas, !isDarkMode);
	applyStyles(selects, !isDarkMode);
}