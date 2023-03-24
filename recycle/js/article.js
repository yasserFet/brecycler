const element = document.querySelector(".menu-bar");

element.addEventListener("click", () => {
	document.querySelector(".mobile-links").classList.toggle("show")
});