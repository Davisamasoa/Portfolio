import React from "react";
import { useEffect } from "react";
import ProjectItem from "./miniComponents/projectItem";

export function Projects() {
	useEffect(() => {
		hiddenProjects();
	}, []);

	return (
		<section className="myProjects" id="project" data-aos="fade-down" data-aos-duration="1000">
			<h1 className="h1-projects text-[40px] font-bold">Meus Projetos</h1>
			<div className="project-container">
				<ProjectItem
					projectName="Movie app"
					projectImg="./assets/img/movie.png"
					projectSite="https://movieapp.davisamasoa.vercel.app/"
					projectGit="https://github.com/Davisamasoa/movie-app"
					display={true}
				/>

				<ProjectItem
					projectName="Urna Eletrônica"
					projectImg="./assets/img/urna.png"
					projectSite="https://eleicao2022.davisamasoa.vercel.app/"
					projectGit="https://github.com/Davisamasoa/urnaEleitoral"
					display={true}
				/>

				<ProjectItem
					projectName="Player de música"
					projectImg="./assets/img/musicPlayer.png"
					projectSite="https://music-player-react.davisamasoa.vercel.app/"
					projectGit="https://github.com/Davisamasoa/musicPlayer-React"
					id="anchor"
					display={true}
				/>

				<ProjectItem
					projectName="Player de música"
					projectImg="./assets/img/musicPlayer.png"
					projectSite="https://music-player-react.davisamasoa.vercel.app/"
					projectGit="https://github.com/Davisamasoa/musicPlayer-React"
					id="anchor"
					display={false}
				/>

				<ProjectItem
					projectName="Calculadora"
					projectImg="./assets/img/calculadora.png"
					projectSite="https://calculatorjs.davisamasoa.vercel.app/"
					projectGit="https://github.com/Davisamasoa/CalculadoraJS"
					display={false}
				/>
				<ProjectItem
					projectName="Pomodoro Timer"
					projectImg="./assets/img/pomo.png"
					projectSite="https://pomodoro.davisamasoa.vercel.app/"
					projectGit="https://github.com/Davisamasoa/pomodoro"
					display={false}
				/>

				<ProjectItem
					projectName="Conversor Dolar/Real"
					projectImg="./assets/img/conversor.png"
					projectSite="https://conversor-dolar-real.davisamasoa.vercel.app/"
					projectGit="https://github.com/Davisamasoa/ConversorDolar"
					display={false}
				/>

				<ProjectItem
					projectName="Mario Bross"
					projectImg="./assets/img/Mario.png"
					projectSite="https://supermario.davisamasoa.vercel.app"
					projectGit="https://github.com/Davisamasoa/JogoSuperMario"
					display={false}
				/>

				<ProjectItem
					projectName="Jogo da Velha"
					projectImg="./assets/img/ticTacToe.png"
					projectSite="https://tictactoe.davisamasoa.vercel.app/"
					projectGit="https://github.com/Davisamasoa/ticTacToe"
					display={false}
				/>

				<ProjectItem
					projectName="Lista de Tarefas"
					projectImg="./assets/img/taskList.png"
					projectSite="https://tasklist-react.davisamasoa.vercel.app/"
					projectGit="https://github.com/Davisamasoa/taskList"
					display={false}
				/>

				<ProjectItem
					projectName="Gerador de senha"
					projectImg="./assets/img/passwordGenerator.png"
					projectSite="https://passwordgenerator.davisamasoa.vercel.app/"
					projectGit="https://github.com/Davisamasoa/passwordGenerator"
					display={false}
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
