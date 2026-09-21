import { calcularIdade } from "@/components/calcAge";

export const eng = {
	home: {
		greeting: "Hi there, welcome",
		profission: "Full-Stack Developer Jr",
		downloadButton: "Download CV",
		cvLink: "cv - en.pdf",
		letsWorkButton: "Let's talk",
	},

	about: {
		title: "About me",
		text: `Hi! I'm Davi Machado, ${calcularIdade()} years old, and I live in Ouro Preto, where I'm studying Computer Science at the Federal University of Ouro Preto.

I've been programming since 2021, and over these 3+ years I've worked across the full application cycle — from design to deployment. I enjoy well-structured projects with a strong focus on performance, organization and, above all, a great experience for whoever uses what I build.

Here in my portfolio you'll find some of the work I've built along the way. Each project reflects what I've learned and what I keep evolving, blending hands-on practice with the foundation I'm building at university. I'm always looking for new challenges and solutions that genuinely make sense.`,
	},

	skills: {
		title: "Skills",
	},

	projects: {
		title: "Projects",
		lang: "eng",
		viewProjectLabel: "View project",
	},

	contact: {
		title: "Contact",
		lang: "eng",
		labelName: "Full name",
		placeHolderName: "Davi Machado",
		emailLabel: "Email",
		placeHolderEmail: "example@gmail.com",
		labelMessage: "Message",
		placeHolderMessage: "Write your message here...",
		sendButton: "Send message",
	},
	footer: {
		credits: "Built with coffee and code by Davi Machado",
	},
};
