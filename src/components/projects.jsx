import React from "react";
import { useEffect } from "react";
import ProjectItem from "./miniComponents/projectItem";

export function Projects() {
	useEffect(() => {
		hiddenProjects();
	}, []);

	return (
		<section className="myProjects" id="project" data-aos="fade-down" data-aos-duration="1000">
			<h1 className="h1-projects">Meus Projetos</h1>
			<div className="project-container">
				<ProjectItem
					projectName="Urna Eletrônica"
					projectImg="./public/assets/img/urna.png"
					projectSite="https://eleicao2022.davisamasoa.vercel.app/"
					projectGit="https://github.com/Davisamasoa/urnaEleitoral"
				/>

				<ProjectItem
					projectName="Calculadora"
					projectImg="./public/assets/img/calculadora.png"
					projectSite="https://calculatorjs.davisamasoa.vercel.app/"
					projectGit="https://github.com/Davisamasoa/CalculadoraJS"
				/>
				<ProjectItem
					projectName="Player de música"
					projectImg="./public/assets/img/musicPlayer.png"
					projectSite="https://music-player-react.davisamasoa.vercel.app/"
					projectGit="https://github.com/Davisamasoa/musicPlayer-React"
					id="anchor"
				/>

				<ProjectItem
					projectName="Pomodoro Timer"
					projectImg="./public/assets/img/pomo.png"
					projectSite="https://pomodoro.davisamasoa.vercel.app/"
					projectGit="https://github.com/Davisamasoa/pomodoro"
				/>

				<ProjectItem
					projectName="Conversor Dolar/Real"
					projectImg="./public/assets/img/conversor.png"
					projectSite="https://conversor-dolar-real.davisamasoa.vercel.app/"
					projectGit="https://github.com/Davisamasoa/ConversorDolar"
				/>

				<ProjectItem
					projectName="Mario Bross"
					projectImg="./public/assets/img/Mario.png"
					projectSite="https://supermario.davisamasoa.vercel.app"
					projectGit="https://github.com/Davisamasoa/JogoSuperMario"
				/>

				<ProjectItem
					projectName="Jogo da Velha"
					projectImg="./public/assets/img/ticTacToe.png"
					projectSite="https://tictactoe.davisamasoa.vercel.app/"
					projectGit="https://github.com/Davisamasoa/ticTacToe"
				/>

				<ProjectItem
					projectName="Lista de Tarefas"
					projectImg="./public/assets/img/taskList.png"
					projectSite="https://tasklist.davisamasoa.vercel.app/"
					projectGit="https://github.com/Davisamasoa/taskList"
				/>

				<ProjectItem
					projectName="Gerador de senha"
					projectImg="./public/assets/img/passwordGenerator.png"
					projectSite="https://passwordgenerator.davisamasoa.vercel.app/"
					projectGit="https://github.com/Davisamasoa/passwordGenerator"
				/>
			</div>
			<div className="div-verMais">
				<button className="verMais" onClick={seeMoreOrLess}>
					<i className="bi bi-caret-down-fill"></i>
				</button>
			</div>
		</section>
	);
}

function hiddenProjects() {
	const projects = document.querySelectorAll(".project");

	for (let i = 3; i < projects.length; i++) {
		projects[i].style.display = "none";
	}
}

const seeMoreOrLess = (e) => {
	const btnVerMais = document.querySelector(".verMais");
	const projects = document.querySelectorAll(".project");
	console.log(projects);

	if (projects[3].style.display == "none") {
		for (let i = 0; i < projects.length; i++) {
			projects[i].style.display = "flex";
		}
		btnVerMais.innerHTML = '<i class="bi bi-caret-up-fill"></i>';
		window.location.href = "#anchor";
	} else {
		for (let i = 3; i < projects.length; i++) {
			projects[i].style.display = "none";
		}
		btnVerMais.innerHTML = '<i class="bi bi-caret-down-fill"></i>';
		window.location.href = "#project";
	}

	console.log("oi");
};
