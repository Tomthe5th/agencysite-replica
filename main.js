/** @format */

import "./main.css";
import "./node_modules/flowbite/dist/flowbite.min.js";
import "./src/products.js";

// dark mode
const body = document.querySelector("html");
const themeToggleBtn = document.querySelector(".theme-toggle-btn");
const themeicon = document.querySelector(".theme-icon");

let theme = 'light'
window.addEventListener("DOMContentLoaded", loadTheme);
function loadTheme() {
	theme = localStorage.getItem("theme");
body.classList.toggle("dark");
themeicon.classList.toggle("text-yellow-300");
	if (theme === "dark") {
		themeicon.classList.remove("fa-moon");
		themeicon.classList.add("fa-sun");
	} else {
		themeicon.classList.remove("fa-sun");
		themeicon.classList.add("fa-moon");
	}
}

themeToggleBtn.addEventListener("click", () => {
	body.classList.toggle("dark");
	themeicon.classList.toggle("text-yellow-300");

	const darkmode = body.classList.contains("dark");
	if (darkmode) {
		themeicon.classList.remove("fa-moon");
		themeicon.classList.add("fa-sun");

		localStorage.setItem("theme", "dark");
	} else {
		themeicon.classList.remove("fa-sun");
		themeicon.classList.add("fa-moon");

		localStorage.setItem("theme", "light");
	}
});
