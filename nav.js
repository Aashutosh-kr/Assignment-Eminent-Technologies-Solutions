const ham = document.querySelector(".ham");
const nav = document.querySelector("nav");
const navLinks = document.querySelectorAll("nav a");
const backdrop = document.querySelector(".backdrop");

ham.addEventListener("click", () => {
	nav.classList.add("show");
	backdrop.classList.add("show");
	ham.removeEventListener("click", () => {});
});

backdrop.addEventListener("click", (e) => {
	if (nav.classList.contains("show")) {
		nav.classList.remove("show");
		backdrop.classList.remove("show");
	}
	backdrop.removeEventListener("click", () => {});
});

navLinks.forEach((link) => {
	link.addEventListener("click", () => {
		nav.classList.remove("show");
		backdrop.classList.remove("show");
	});
});
