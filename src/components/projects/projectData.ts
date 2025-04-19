import prisma from "../../assets/prisma.svg";

type tecnologyType = {
	oficialWebsite: string;
	imgPath: string;
	imgAlt: string;
};

type tecnologiesType = {
	NextJs: tecnologyType;
	React: tecnologyType;
	Angular: tecnologyType;
	TypeScript: tecnologyType;
	Js: tecnologyType;
	HTML: tecnologyType;
	CSS: tecnologyType;
	SASS: tecnologyType;
	Bootstrap: tecnologyType;
	Tailwind: tecnologyType;
	Babel: tecnologyType;
	NodeJs: tecnologyType;
	Express: tecnologyType;
	Mongodb: tecnologyType;
	PostgreSQL: tecnologyType;
	Prisma: tecnologyType;
	Figma: tecnologyType;
} & { [key: string]: tecnologyType };

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
			pt_br: "Sabbatai",
			eng: "Sabbatai",
		},
		imgPath: "/assets/img/sabbatai.jpg",
		website: "https://sabbatai.in",
		gitRepository: "https://github.com/Davisamasoa/sabbatai",
		display: true,
		tecnologies: [tecnologies.NextJs, tecnologies.TypeScript, tecnologies.Tailwind],
	},{
		name: {
			pt_br: "Agência Passus",
			eng: "Passus Agency",
		},
		imgPath: "/assets/img/Passus.webp",
		website: "https://passus.in",
		gitRepository: "https://github.com/Davisamasoa/passus-site",
		display: true,
		tecnologies: [tecnologies.NextJs, tecnologies.TypeScript, tecnologies.Tailwind],
	},
	{
		name: {
			pt_br: "FinancePlan",
			eng: "FinancePlan",
		},
		imgPath: "/assets/img/finance.png",
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
		display: false,
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
		display: false,
		tecnologies: [tecnologies.NextJs, tecnologies.React, tecnologies.Js, tecnologies.Tailwind],
	},
	{
		name: {
			pt_br: "Blog Angular",
			eng: "Blog Angular",
		},
		imgPath: "/assets/img/blog-angular.webp",
		website: "https://blog-angular.davisamasoa.vercel.app/",
		gitRepository: "https://github.com/Davisamasoa/blog-angular",
		display: false,
		tecnologies: [tecnologies.Angular, tecnologies.HTML, tecnologies.Tailwind],
		id: "anchor",
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
			pt_br: "Conversor dólar/real",
			eng: "Converter dollar/real",
		},
		imgPath: "/assets/img/conversor.webp",
		website: "https://conversor-dolar-real.davisamasoa.vercel.app/",
		gitRepository: "https://github.com/Davisamasoa/ConversorDolar",
		display: false,
		tecnologies: [tecnologies.HTML, tecnologies.CSS, tecnologies.Js],
	},
	
	
];
