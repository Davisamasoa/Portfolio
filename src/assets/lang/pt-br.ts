import { calcularIdade } from "@/components/calcAge";

export const pt_br = {
	home: {
		greeting: "Olá, prazer!",
		profission: "Desenvolvedor Full-Stack Júnior",
		downloadButton: "Ver CV",
		letsWorkButton: "Vamos trabalhar juntos",
	},

	about: {
		title: "Sobre mim",
		text: `Oi! Eu sou o Davi Machado, tenho ${calcularIdade()} anos e moro em Ouro Preto, onde sou estudante de Ciência da Computação na Universidade Federal de Ouro Preto.

Programo desde 2021 e, nesses mais de 3 anos de estrada, venho atuando no desenvolvimento completo de aplicações — cuidando de tudo, do design ao deploy. Curto projetos bem estruturados, com foco em performance, organização e, principalmente, em entregar uma boa experiência para o usuário.

Aqui no portfólio você encontra alguns dos trabalhos que desenvolvi ao longo dessa jornada. Cada projeto reflete o que aprendi e o que sigo evoluindo agora, unindo a prática com a base acadêmica da universidade. Estou sempre em busca de novos desafios e de construir soluções que façam sentido de verdade.`,
	},

	skills: {
		title: "Habilidades",
	},

	projects: {
		title: "Meus Projetos",
		lang: "pt-br",
	},

	contact: {
		title: "Contato",
		lang: "pt-br",
		labelName: "Nome e Sobrenome:",
		placeHolderName: "Davi Machado",
		placeHolderEmail: "exemplo@gmail.com",
		labelMessage: "Mensagem:",
		placeHolderMessage: "Escreva sua mensagem aqui...",
		sendButton: "Enviar",
	},
	footer: {
		credits: "Desenvolvido por Davi Machado",
	},
};
