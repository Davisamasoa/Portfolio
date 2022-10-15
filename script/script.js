let btnVerMais = document.querySelector(".verMais");
let hiddenProjects = document.querySelectorAll(".none");

btnVerMais.addEventListener("click", () => {
	if (hiddenProjects[0].style.display == "none") {
		for (let i = 0; i < hiddenProjects.length; i++) {
			hiddenProjects[i].style.display = "flex";
		}

		btnVerMais.innerHTML = '<i class="bi bi-caret-up-fill"></i>';
		window.location.href = "#anchor";
	} else {
		for (let i = 0; i < hiddenProjects.length; i++) {
			hiddenProjects[i].style.display = "none";
		}

		btnVerMais.innerHTML = '<i class="bi bi-caret-down-fill"></i>';
		window.location.href = "#project";
	}
});
