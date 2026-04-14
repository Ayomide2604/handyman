// Header logo switching based on scroll position
document.addEventListener("DOMContentLoaded", function () {
	console.log("Header logo script loaded");

	function checkLogos() {
		const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
		const logoDefault = document.querySelector(".logo-default");
		const logoScrolled = document.querySelector(".logo-scrolled");
		const header = document.querySelector("header");

		console.log("Scroll position:", scrollTop);
		console.log("Logo default found:", !!logoDefault);
		console.log("Logo scrolled found:", !!logoScrolled);
		console.log("Header found:", !!header);

		if (logoDefault && logoScrolled && header) {
			if (scrollTop <= 50) {
				// At the top - show logo-dark.png (default)
				header.classList.remove("scrollHeader");
				header.classList.add("fixedHeader");
				logoDefault.style.display = "block";
				logoScrolled.style.display = "none";
				console.log("Showing default logo");
			} else {
				// Scrolled down - show logo.png
				header.classList.remove("fixedHeader");
				header.classList.add("scrollHeader");
				logoDefault.style.display = "none";
				logoScrolled.style.display = "block";
				console.log("Showing scrolled logo");
			}
		} else {
			console.log("Elements not found yet");
		}
	}

	window.addEventListener("scroll", checkLogos);
	checkLogos(); // Check immediately on load
});
