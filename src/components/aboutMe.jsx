import React from "react";
import { SkillItem } from "./miniComponents/skillItem";

export function AboutMe() {
	return (
		<section id="aboutMe" className="aboutMe" data-aos="fade-down" data-aos-duration="1000">
			<h1 className="h1AboutMe text-[40px] font-bold">Sobre mim</h1>
			<div className="divAbout">
				<div className="divImgAbout">
					<img src="./assets/img/fotoAboutMe.jpeg" alt="" />
				</div>
				<div className="txtAndSkills">
					{" "}
					<p>
						Olá, tudo bem? Me chamo Davi Samuel, tenho 19 anos e nasci em Olinda - PE, mas moro em Belo
						Horizonte - MG desde os meus 2 anos de idade. <br />
						As pessoas sempre me diziam que eu tinha uma certa facilidade com coisas relacionadas à
						tecnologia, desde mexer em um celular ou qualquer outro dispostivo eletrônico. Bom, uma coisa
						levou a outra e a minha paixão pela tecnologia foi se expandindo, desde então nunca me enxerguei
						trabalhando em outra área. E quando conheci a programação ela simplesmente caiu como uma luva nos
						meus interesses para a vida. Espero que possamos trabalhar juntos em breve!
					</p>
				</div>
			</div>

			<div className="skills" id="skills" data-aos="fade-down" data-aos-duration="1000">
				<p className="mySkills">Habilidades</p>
				<ul className="skillList">
					<SkillItem
						tecLink="https://reactjs.org/"
						tecImg="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/react-colored.svg"
						tecImgAlt="React"
					/>

					<SkillItem
						tecLink="https://nextjs.org/docs"
						tecImg="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/nextjs-colored.svg"
						tecImgAlt="NextJs"
					/>
					<SkillItem
						tecLink="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
						tecImg="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/javascript-colored.svg"
						tecImgAlt="JavaScript"
					/>
					<SkillItem
						tecLink="https://developer.mozilla.org/en-US/docs/Glossary/HTML5"
						tecImg="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/html5-colored.svg"
						tecImgAlt="HTML5"
					/>
					<SkillItem
						tecLink="https://www.w3.org/TR/CSS/#css"
						tecImg="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/css3-colored.svg"
						tecImgAlt="CSS3"
					/>
					<SkillItem
						tecLink="https://sass-lang.com/"
						tecImg="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/sass-colored.svg"
						tecImgAlt="Sass"
					/>
					<SkillItem
						tecLink="https://getbootstrap.com/"
						tecImg="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/bootstrap-colored.svg"
						tecImgAlt="Bootstrap"
					/>
					<SkillItem
						tecLink="https://babeljs.io/"
						tecImg="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/babel-colored.svg"
						tecImgAlt="Babel"
					/>
				</ul>
			</div>
		</section>
	);
}
