let btnVerMais = document.querySelector(".verMais");
let hiddenProjects = document.querySelector(".none");

btnVerMais.addEventListener("click", () => {
	if (hiddenProjects.style.display == "none") {
		hiddenProjects.style.display = "flex";
		btnVerMais.textContent = "Ver menos ▲";
	} else {
		hiddenProjects.style.display = "none";
		btnVerMais.textContent = "Ver mais ▼";
	}

	window.location.href = "#project";
});
