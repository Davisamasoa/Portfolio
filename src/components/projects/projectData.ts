import { DiHtml5, DiPostgresql } from "react-icons/di";
import { DiCss3 } from "react-icons/di";
import { DiJavascript1 } from "react-icons/di";
import { DiReact } from "react-icons/di";
import { DiBootstrap } from "react-icons/di";
import { DiSass } from "react-icons/di";
import { DiNodejsSmall } from "react-icons/di";
import { DiMongodb } from "react-icons/di";
import prisma from "../../assets/prisma.svg";

type tecnologyType = {
	oficialWebsite: string;
	imgPath: string;
	imgAlt: string;
};

type tecnologiesType = {
	[key: string]: tecnologyType;
};

type projectDataType = {
	name: {
		pt_br: string;
		eng: string;
	};
	imgPath: string;
	website: string;
	gitRepository: string;
	display: boolean;
	tecnologies: tecnologyType;
};

export const tecnologies: tecnologiesType = {
	NextJs: {
		oficialWebsite: "https://nextjs.org/docs",
		imgPath:
			"https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/nextjs-colored.svg",
		imgAlt: "NextJS",
	},
	React: {
		oficialWebsite: "https://reactjs.org/",
		imgPath:
			"https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/react-colored.svg",
		imgAlt: "React",
	},
	Angular: {
		oficialWebsite: "https://angular.io/",
		imgPath:
			"https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/angularjs-colored.svg",
		imgAlt: "Angular",
	},
	TypeScript: {
		oficialWebsite: "https://www.typescriptlang.org/",
		imgPath:
			"https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/typescript-colored.svg",
		imgAlt: "TypeScript",
	},
	Js: {
		oficialWebsite: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
		imgPath:
			"https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/javascript-colored.svg",
		imgAlt: "JavaScript",
	},
	HTML: {
		oficialWebsite: "https://developer.mozilla.org/en-US/docs/Glossary/HTML5",
		imgPath:
			"https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/html5-colored.svg",
		imgAlt: "HTML5",
	},
	CSS: {
		oficialWebsite: "https://www.w3.org/TR/CSS/#css",
		imgPath:
			"https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/css3-colored.svg",
		imgAlt: "CSS3",
	},
	SASS: {
		oficialWebsite: "https://sass-lang.com/",
		imgPath:
			"https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/sass-colored.svg",
		imgAlt: "Sass",
	},
	Bootstrap: {
		oficialWebsite: "https://getbootstrap.com/",
		imgPath:
			"https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/bootstrap-colored.svg",
		imgAlt: "Bootstrap",
	},
	Tailwind: {
		oficialWebsite: "https://tailwindcss.com/",
		imgPath:
			"https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/tailwindcss-colored.svg",
		imgAlt: "TailwindCSS",
	},
	Babel: {
		oficialWebsite: "https://babeljs.io/",
		imgPath:
			"https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/babel-colored.svg",
		imgAlt: "Babel",
	},
	NodeJs: {
		oficialWebsite: "https://nodejs.org/en/",
		imgPath:
			"https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/nodejs-colored.svg",
		imgAlt: "NodeJS",
	},
	Express: {
		oficialWebsite: "https://expressjs.com/",
		imgPath:
			"https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/express-colored.svg",
		imgAlt: "ExpressJS",
	},
	Mongodb: {
		oficialWebsite: "https://www.mongodb.com/",
		imgPath:
			"https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/mongodb-colored.svg",
		imgAlt: "MongoDB",
	},
	PostgreSQL: {
		oficialWebsite: "https://www.postgresql.org/",
		imgPath:
			"https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/postgresql-colored.svg",
		imgAlt: "PostgreSQL",
	},
	Prisma: {
		oficialWebsite: "https://www.prisma.io/",
		imgPath: `${prisma.src}`,
		imgAlt: "Prisma",
	},
	Figma: {
		oficialWebsite: "https://www.figma.com/",
		imgPath:
			"https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/figma-colored.svg",
		imgAlt: "Figma",
	},
};

export const projectData = [
	{
		name: {
			pt_br: "FinancePlan",
			eng: "FinancePlan",
		},
		imgPath: "/assets/img/financePlan.webp",
		website: "https://finance-plan.davisamasoa.vercel.app/",
		gitRepository: "https://github.com/Davisamasoa/financePlan-frontend",
		display: true,
		tecnologies: [
			tecnologies.NextJs,
			tecnologies.TypeScript,
			tecnologies.Tailwind,
			tecnologies.NodeJs,
			tecnologies.Express,
			tecnologies.Prisma,
			tecnologies.PostgreSQL,
		],
	},

	{
		name: {
			pt_br: "Lista de Tarefas",
			eng: "Task List",
		},
		imgPath: "/assets/img/taskList.webp",
		website: "https://tasklist-fullstack.vercel.app/",
		gitRepository: "https://github.com/Davisamasoa/tasklist-fullstack",
		display: true,
		tecnologies: [tecnologies.NextJs, tecnologies.Tailwind, tecnologies.NodeJs, tecnologies.Express],
	},

	{
		name: {
			pt_br: "Site de Filmes",
			eng: "Movie Site",
		},
		imgPath: "/assets/img/movie.webp",
		website: "https://movieapp.davisamasoa.vercel.app/",
		gitRepository: "https://github.com/Davisamasoa/movie-app-next",
		display: true,
		tecnologies: [tecnologies.NextJs, tecnologies.React, tecnologies.Js, tecnologies.Tailwind],
	},
	{
		name: {
			pt_br: "Urna eletrônica",
			eng: "Electronic urn",
		},
		imgPath: "/assets/img/urna.webp",
		website: "https://eleicao2022.davisamasoa.vercel.app/",
		gitRepository: "https://github.com/Davisamasoa/urnaEleitoral",
		display: false,
		tecnologies: [tecnologies.HTML, tecnologies.CSS, tecnologies.Js],
		id: "anchor",
	},
	{
		name: {
			pt_br: "Blog",
			eng: "Blog",
		},
		imgPath: "/assets/img/blog.webp",
		website: "https://blog.davisamasoa.vercel.app/",
		gitRepository: "https://github.com/Davisamasoa/blog-next",
		display: false,
		id: "anchor",
		tecnologies: [tecnologies.NextJs, tecnologies.React, tecnologies.Js, tecnologies.Tailwind],
	},
	{
		name: {
			pt_br: "Tocador de música",
			eng: "Music Player",
		},
		imgPath: "/assets/img/musicPlayer.webp",
		website: "https://music-player-react.davisamasoa.vercel.app/",
		gitRepository: "https://github.com/Davisamasoa/musicPlayer-React",
		display: false,
		tecnologies: [tecnologies.React, tecnologies.Js, tecnologies.CSS],
	},
	{
		name: {
			pt_br: "Calculadora",
			eng: "Calculator",
		},
		imgPath: "/assets/img/calculadora.webp",
		website: "https://calculatorjs.davisamasoa.vercel.app/",
		gitRepository: "https://github.com/Davisamasoa/CalculadoraJS",
		display: false,
		tecnologies: [tecnologies.HTML, tecnologies.CSS, tecnologies.Js],
	},
	{
		name: {
			pt_br: "Temporizador Pomodoro",
			eng: "Pomodoro Timer",
		},
		imgPath: "/assets/img/pomo.webp",
		website: "https://pomodoro.davisamasoa.vercel.app/",
		gitRepository: "https://github.com/Davisamasoa/pomodoro",
		display: false,
		tecnologies: [tecnologies.HTML, tecnologies.CSS, tecnologies.Js],
	},
	{
		name: {
			pt_br: "Conversor dólar/real",
			eng: "Converter dollar/real",
		},
		imgPath: "/assets/img/conversor.webp",
		website: "https://conversor-dolar-real.davisamasoa.vercel.app/",
		gitRepository: "https://github.com/Davisamasoa/ConversorDolar",
		display: false,
		tecnologies: [tecnologies.HTML, tecnologies.CSS, tecnologies.Js],
	},
	{
		name: {
			pt_br: "Mario Bross",
			eng: "Mario Bross",
		},
		imgPath: "/assets/img/Mario.webp",
		website: "https://supermario.davisamasoa.vercel.app",
		gitRepository: "https://github.com/Davisamasoa/JogoSuperMario",
		display: false,
		tecnologies: [tecnologies.HTML, tecnologies.CSS, tecnologies.Js],
	},
	{
		name: {
			pt_br: "Jogo da velha",
			eng: "Tic Tac Toe",
		},
		imgPath: "/assets/img/ticTacToe.webp",
		website: "https://tictactoe.davisamasoa.vercel.app",
		gitRepository: "https://github.com/Davisamasoa/ticTacToe",
		display: false,
		tecnologies: [tecnologies.HTML, tecnologies.CSS, tecnologies.Js],
	},
	{
		name: {
			pt_br: "Gerador de senha",
			eng: "Password Generator",
		},
		imgPath: "/assets/img/passwordGenerator.webp",
		website: "https://passwordgenerator.davisamasoa.vercel.app/",
		gitRepository: "https://github.com/Davisamasoa/passwordGenerator",
		display: false,
		tecnologies: [tecnologies.HTML, tecnologies.CSS, tecnologies.Js],
	},
];
