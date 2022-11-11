import React from "react";

export function Home() {
	return (
		<header id="Home" data-aos="fade-down" data-aos-duration="1000">
			<p className="pbold">Olá, prazer!</p>
			<h1>Davi Samuel</h1>
			<p className="myWork">Desenvolvedor Front-End Júnior</p>
			<div className="divButton">
				<a href="./assets/CV-DaviSamuel.pdf" download className="download">
					Download CV
				</a>
				<a href="#contact" className="lets">
					Vamos trabalhar juntos
				</a>
			</div>
			<div className="divImg">
				<img src="./assets/img/eu.png" alt="foto de Davi Samuel" />
			</div>
		</header>
	);
}
