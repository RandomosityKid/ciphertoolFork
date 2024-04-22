"use strict";

window.onload = function () {
  var body = document.body;
  var moonDark = document.getElementById("moon-dark");
  var sunLight = document.getElementById("sun-light");

  var handleThemeChange = function handleThemeChange(e) {
    var logoText = document.getElementsByClassName("logo-text");
    var labelText = document.getElementsByClassName("div-label");
    var textareas = document.querySelectorAll("textarea");
    var selects = document.querySelectorAll("select");

    if (e.matches) {
      body.classList.remove("light-mode");
      body.classList.add("dark-mode");
      sunLight.style.display = "block";
      moonDark.style.display = "none"; // For logo text

      for (var i = 0; i < logoText.length; i++) {
        logoText[i].style.color = "#38bdf8";
      } // For sunlight icon


      sunLight.addEventListener("mouseenter", function () {
        sunLight.style.color = "#0ea5e9";
      });
      sunLight.addEventListener("mouseleave", function () {
        sunLight.style.color = "#38bdf8";
      }); // For label div

      for (var _i = 0; _i < labelText.length; _i++) {
        labelText[_i].style.border = ".1rem solid #5f6368";
        labelText[_i].style.color = "white";
      } // For textarea    


      textareas.forEach(function (textarea) {
        textarea.style.backgroundColor = "#292a2d";
        textarea.style.color = "white";
        textarea.style.border = ".1rem solid #5f6368";
      }); // For select

      selects.forEach(function (select) {
        select.style.backgroundColor = "#292a2d";
        select.style.color = "white";
        select.style.border = ".1rem solid #5f6368";
      });
    } else {
      body.classList.remove("dark-mode");
      body.classList.add("light-mode");
      sunLight.style.display = "none";
      moonDark.style.display = "block"; // For logo text

      for (var _i2 = 0; _i2 < logoText.length; _i2++) {
        logoText[_i2].style.color = "#0284c7";
      } // For label div


      for (var _i3 = 0; _i3 < labelText.length; _i3++) {
        labelText[_i3].style.border = ".1rem solid #d1d5db";
        labelText[_i3].style.color = "black";
      } // For textarea


      textareas.forEach(function (textarea) {
        textarea.style.backgroundColor = "#f2f2f2";
        textarea.style.color = "black";
        textarea.style.border = ".1rem solid #d1d5db";
      }); // For select

      selects.forEach(function (select) {
        select.style.backgroundColor = "#f2f2f2";
        select.style.color = "black";
        select.style.border = ".1rem solid #d1d5db";
      });
    }
  }; // Check initial theme


  var darkMode = window.matchMedia('(prefers-color-scheme: dark)');
  handleThemeChange(darkMode); // Listen for theme changes

  darkMode.addEventListener('change', handleThemeChange);
};

function toggleDarkLightMode() {
  var body = document.body;
  var moonDark = document.getElementById("moon-dark");
  var sunLight = document.getElementById("sun-light");
  var logoText = document.getElementsByClassName("logo-text");
  var labelText = document.getElementsByClassName("div-label");
  var textareas = document.querySelectorAll("textarea");
  var selects = document.querySelectorAll("select");

  if (body.classList.contains("dark-mode")) {
    body.classList.remove("dark-mode");
    body.classList.add("light-mode");
    sunLight.style.display = "none";
    moonDark.style.display = "block"; // For logo text

    for (var i = 0; i < logoText.length; i++) {
      logoText[i].style.color = "#0284c7";
    } // For label div


    for (var _i4 = 0; _i4 < labelText.length; _i4++) {
      labelText[_i4].style.border = ".1rem solid #d1d5db";
      labelText[_i4].style.color = "black";
    } // For textarea


    textareas.forEach(function (textarea) {
      textarea.style.backgroundColor = "#f2f2f2";
      textarea.style.color = "black";
      textarea.style.border = ".1rem solid #d1d5db";
    }); // For select

    selects.forEach(function (select) {
      select.style.backgroundColor = "#f2f2f2";
      select.style.color = "black";
      select.style.border = ".1rem solid #d1d5db";
    });
  } else {
    body.classList.remove("light-mode");
    body.classList.add("dark-mode");
    sunLight.style.display = "block";
    moonDark.style.display = "none"; // For logo text

    for (var _i5 = 0; _i5 < logoText.length; _i5++) {
      logoText[_i5].style.color = "#38bdf8";
    } // For sunlight icon


    sunLight.addEventListener("mouseenter", function () {
      sunLight.style.color = "#0ea5e9";
    });
    sunLight.addEventListener("mouseleave", function () {
      sunLight.style.color = "#38bdf8";
    }); // For label div

    for (var _i6 = 0; _i6 < labelText.length; _i6++) {
      labelText[_i6].style.border = ".1rem solid #5f6368";
      labelText[_i6].style.color = "white";
    } // For textarea


    textareas.forEach(function (textarea) {
      textarea.style.backgroundColor = "#292a2d";
      textarea.style.color = "white";
      textarea.style.border = ".1rem solid #5f6368";
    }); // For selection

    selects.forEach(function (select) {
      select.style.backgroundColor = "#292a2d";
      select.style.color = "white";
      select.style.border = ".1rem solid #5f6368";
    });
  }
}