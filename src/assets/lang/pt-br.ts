import { calcularIdade } from "@/components/calcAge";

export const pt_br = {
	home: {
		greeting: "Olá, seja bem-vindo(a)",
		profission: "Desenvolvedor Full-Stack Júnior",
		downloadButton: "Baixar CV",
		cvLink: "cv - ptbr.pdf",
		letsWorkButton: "Vamos conversar",
	},

	about: {
		title: "Sobre mim",
		text: `Oi! Eu sou o Davi Machado, tenho ${calcularIdade()} anos e moro em Ouro Preto, onde curso Ciência da Computação na Universidade Federal de Ouro Preto.

Programo desde 2021 e, nesses mais de 3 anos de estrada, venho atuando no desenvolvimento completo de aplicações — do design ao deploy. Gosto de projetos bem estruturados, com foco em performance, organização e, principalmente, em entregar uma boa experiência para quem usa.

Aqui no portfólio você encontra alguns dos trabalhos que desenvolvi ao longo dessa jornada. Cada projeto reflete o que aprendi e o que continuo evoluindo, unindo a prática do dia a dia com a base construída na universidade. Estou sempre em busca de novos desafios e de soluções que façam sentido de verdade.`,
	},

	skills: {
		title: "Habilidades",
	},

	projects: {
		title: "Projetos",
		lang: "pt-br",
		viewProjectLabel: "Ver projeto",
	},

	contact: {
		title: "Contato",
		lang: "pt-br",
		labelName: "Nome completo",
		placeHolderName: "Davi Machado",
		emailLabel: "E-mail",
		placeHolderEmail: "exemplo@gmail.com",
		labelMessage: "Mensagem",
		placeHolderMessage: "Escreva sua mensagem aqui...",
		sendButton: "Enviar mensagem",
	},
	footer: {
		credits: "Feito com café e código por Davi Machado",
	},
};
