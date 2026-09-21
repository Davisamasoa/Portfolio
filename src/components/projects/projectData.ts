import prisma from "../../assets/prisma.svg";
import nextjsIcon from "../../assets/skills/nextjs-colored.svg";
import reactIcon from "../../assets/skills/react-colored.svg";
import angularIcon from "../../assets/skills/angularjs-colored.svg";
import typescriptIcon from "../../assets/skills/typescript-colored.svg";
import javascriptIcon from "../../assets/skills/javascript-colored.svg";
import html5Icon from "../../assets/skills/html5-colored.svg";
import css3Icon from "../../assets/skills/css3-colored.svg";
import sassIcon from "../../assets/skills/sass-colored.svg";
import bootstrapIcon from "../../assets/skills/bootstrap-colored.svg";
import tailwindcssIcon from "../../assets/skills/tailwindcss-colored.svg";
import babelIcon from "../../assets/skills/babel-colored.svg";
import nodejsIcon from "../../assets/skills/nodejs-colored.svg";
import expressIcon from "../../assets/skills/express-colored.svg";
import mongodbIcon from "../../assets/skills/mongodb-colored.svg";
import postgresqlIcon from "../../assets/skills/postgresql-colored.svg";
import figmaIcon from "../../assets/skills/figma-colored.svg";

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
		imgPath: nextjsIcon.src,
		imgAlt: "NextJS",
	},
	React: {
		oficialWebsite: "https://reactjs.org/",
		imgPath: reactIcon.src,
		imgAlt: "React",
	},
	Angular: {
		oficialWebsite: "https://angular.io/",
		imgPath: angularIcon.src,
		imgAlt: "Angular",
	},
	TypeScript: {
		oficialWebsite: "https://www.typescriptlang.org/",
		imgPath: typescriptIcon.src,
		imgAlt: "TypeScript",
	},
	Js: {
		oficialWebsite: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
		imgPath: javascriptIcon.src,
		imgAlt: "JavaScript",
	},
	HTML: {
		oficialWebsite: "https://developer.mozilla.org/en-US/docs/Glossary/HTML5",
		imgPath: html5Icon.src,
		imgAlt: "HTML5",
	},
	CSS: {
		oficialWebsite: "https://www.w3.org/TR/CSS/#css",
		imgPath: css3Icon.src,
		imgAlt: "CSS3",
	},
	SASS: {
		oficialWebsite: "https://sass-lang.com/",
		imgPath: sassIcon.src,
		imgAlt: "Sass",
	},
	Bootstrap: {
		oficialWebsite: "https://getbootstrap.com/",
		imgPath: bootstrapIcon.src,
		imgAlt: "Bootstrap",
	},
	Tailwind: {
		oficialWebsite: "https://tailwindcss.com/",
		imgPath: tailwindcssIcon.src,
		imgAlt: "TailwindCSS",
	},
	Babel: {
		oficialWebsite: "https://babeljs.io/",
		imgPath: babelIcon.src,
		imgAlt: "Babel",
	},
	NodeJs: {
		oficialWebsite: "https://nodejs.org/en/",
		imgPath: nodejsIcon.src,
		imgAlt: "NodeJS",
	},
	Express: {
		oficialWebsite: "https://expressjs.com/",
		imgPath: expressIcon.src,
		imgAlt: "ExpressJS",
	},
	Mongodb: {
		oficialWebsite: "https://www.mongodb.com/",
		imgPath: mongodbIcon.src,
		imgAlt: "MongoDB",
	},
	PostgreSQL: {
		oficialWebsite: "https://www.postgresql.org/",
		imgPath: postgresqlIcon.src,
		imgAlt: "PostgreSQL",
	},
	Prisma: {
		oficialWebsite: "https://www.prisma.io/",
		imgPath: `${prisma.src}`,
		imgAlt: "Prisma",
	},
	Figma: {
		oficialWebsite: "https://www.figma.com/",
		imgPath: figmaIcon.src,
		imgAlt: "Figma",
	},
};

export const projectData = [
	{
		name: {
			pt_br: "Sabbatai",
			eng: "Sabbatai",
		},
		imgPath: "/assets/img/sabbatai.png",
		website: "https://sabbatai.in",
		gitRepository: "https://github.com/Davisamasoa/sabbatai",
		display: true,
		tecnologies: [tecnologies.NextJs, tecnologies.TypeScript, tecnologies.Tailwind],
	},
	{
		name: {
			pt_br: "Agência Passus",
			eng: "Passus Agency",
		},
		imgPath: "/assets/img/passus.png",
		website: "https://passus.in",
		gitRepository: "https://github.com/Davisamasoa/passus-site",
		display: true,
		tecnologies: [tecnologies.NextJs, tecnologies.TypeScript, tecnologies.Tailwind],
	},
	{
		name: {
			pt_br: "18 do Forte",
			eng: "18 do Forte",
		},
		imgPath: "/assets/img/18doforte.png",
		website: "https://18doforte.vercel.app/",
		gitRepository: "https://github.com/Davisamasoa/18doForte",
		display: true,
		tecnologies: [tecnologies.NextJs, tecnologies.TypeScript, tecnologies.Tailwind],
	},
];
