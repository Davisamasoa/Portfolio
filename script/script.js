let btnVerMais = document.querySelector(".verMais");
let hiddenProjects = document.querySelector(".none");

btnVerMais.addEventListener("click", () => {
	if (hiddenProjects.style.display == "none") {
		hiddenProjects.style.display = "flex";
		btnVerMais.innerHTML = '<i class="bi bi-caret-up-fill"></i>';
		window.location.href = "#music";
	} else {
		hiddenProjects.style.display = "none";
		btnVerMais.innerHTML = '<i class="bi bi-caret-down-fill"></i>';
		window.location.href = "#project";
	}
});
