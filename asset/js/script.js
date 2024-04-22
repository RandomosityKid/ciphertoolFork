window.onload = function() {
    const body = document.body;
    const moonDark = document.getElementById("moon-dark");
    const sunLight = document.getElementById("sun-light");
    
    const handleThemeChange = (e) => {
        const logoText = document.getElementsByClassName("logo-text");
        const labelText = document.getElementsByClassName("div-label");
        const textareas = document.querySelectorAll("textarea");
        const selects = document.querySelectorAll("select");
        
        if (e.matches) {
            body.classList.remove("light-mode");
            body.classList.add("dark-mode");
            sunLight.style.display = "block";
            moonDark.style.display = "none";
            
            // For logo text
            for (let i = 0; i < logoText.length; i++) {
                logoText[i].style.color = "#38bdf8";
            }
            
            // For sunlight icon
            sunLight.addEventListener("mouseenter", function() {
                sunLight.style.color = "#0ea5e9";
            });
    
            sunLight.addEventListener("mouseleave", function() {
                sunLight.style.color = "#38bdf8";
            });

            // For label div
            for (let i = 0; i < labelText.length; i++) {
                labelText[i].style.border = ".1rem solid #5f6368";
                labelText[i].style.color = "white";
            }
            // For textarea    
            textareas.forEach(textarea => {
                textarea.style.backgroundColor = "#292a2d";
                textarea.style.color = "white";
                textarea.style.border = ".1rem solid #5f6368";
            });
            
            // For select
            selects.forEach(select => {
                select.style.backgroundColor = "#292a2d";
                select.style.color = "white";
                select.style.border = ".1rem solid #5f6368";
            });
            
        } else {
            body.classList.remove("dark-mode");
            body.classList.add("light-mode");
            sunLight.style.display = "none";
            moonDark.style.display = "block";

            // For logo text
            for (let i = 0; i < logoText.length; i++) {
                logoText[i].style.color = "#0284c7";
            }

            // For label div
            for (let i = 0; i < labelText.length; i++) {
                labelText[i].style.border = ".1rem solid #d1d5db";
                labelText[i].style.color = "black";
            }
            
            // For textarea
            textareas.forEach(textarea => {
                textarea.style.backgroundColor = "#f2f2f2";
                textarea.style.color = "black";
                textarea.style.border = ".1rem solid #d1d5db";
            });
            
            // For select
            selects.forEach(select => {
                select.style.backgroundColor = "#f2f2f2";
                select.style.color = "black";
                select.style.border = ".1rem solid #d1d5db";
            });
        }
    }

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
    
    if (body.classList.contains("dark-mode")) {
        body.classList.remove("dark-mode");
        body.classList.add("light-mode");
        sunLight.style.display = "none";
        moonDark.style.display = "block";

        // For logo text
        for (let i = 0; i < logoText.length; i++) {
            logoText[i].style.color = "#0284c7";
        }

        // For label div
        for (let i = 0; i < labelText.length; i++) {
            labelText[i].style.border = ".1rem solid #d1d5db";
            labelText[i].style.color = "black";
        }
        
        // For textarea
        textareas.forEach(textarea => {
            textarea.style.backgroundColor = "#f2f2f2";
            textarea.style.color = "black";
            textarea.style.border = ".1rem solid #d1d5db";
        });
        
        // For select
        selects.forEach(select => {
            select.style.backgroundColor = "#f2f2f2";
            select.style.color = "black";
            select.style.border = ".1rem solid #d1d5db";
        });

    } else {
        body.classList.remove("light-mode");
        body.classList.add("dark-mode");
        sunLight.style.display = "block";
        moonDark.style.display = "none";

        // For logo text
        for (let i = 0; i < logoText.length; i++) {
            logoText[i].style.color = "#38bdf8";
        }
       
        // For sunlight icon
        sunLight.addEventListener("mouseenter", function() {
            sunLight.style.color = "#0ea5e9";
        });

        sunLight.addEventListener("mouseleave", function() {
            sunLight.style.color = "#38bdf8";
        });

        // For label div
        for (let i = 0; i < labelText.length; i++) {
            labelText[i].style.border = ".1rem solid #5f6368";
            labelText[i].style.color = "white";
        }
        
        // For textarea
        textareas.forEach(textarea => {
            textarea.style.backgroundColor = "#292a2d";
            textarea.style.color = "white";
            textarea.style.border = ".1rem solid #5f6368";
        });
        
        // For selection
        selects.forEach(select => {
            select.style.backgroundColor = "#292a2d";
            select.style.color = "white";
            select.style.border = ".1rem solid #5f6368";
        });
    }
}
