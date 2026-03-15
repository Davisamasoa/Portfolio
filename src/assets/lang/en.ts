import { calcularIdade } from "@/components/calcAge";

export const eng = {
	home: {
		greeting: "Hello, my pleasure!",
		profission: "Full-Stack developer Jr",
		downloadButton: "View CV",
		letsWorkButton: "Lets Work Together",
	},

	about: {
		title: "About me",
		text: `Hi! I’m Davi Machado, I'm ${calcularIdade()} years old, and I live in Ouro Preto, where I’m a student of Computer Science at the Federal University of Ouro Preto.
		
I’ve been programming since 2021, and over these past 3+ years, I’ve been working on full-cycle application development—handling everything from design to deployment. I’m passionate about well-structured projects, with a strong focus on performance, organization, and, above all, delivering a great user experience.

Here in my portfolio, you’ll find some of the work I’ve developed along the way. Each project reflects what I’ve learned and how I’m evolving now, bridging my practical experience with my academic foundation at the university. I’m always looking for new challenges and building solutions that truly make sense.`,
	},

	skills: {
		title: "Skills",
	},

	projects: {
		title: "My Projects",
		lang: "eng",
	},

	contact: {
		title: "Contact",
		lang: "eng",
		labelName: "Name and surname:",
		placeHolderName: "Davi Machado",
		placeHolderEmail: "example@gmail.com",
		labelMessage: "Message:",
		placeHolderMessage: "Write your message here...",
		sendButton: "Send",
	},
	footer: {
		credits: "Developed by Davi Machado",
	},
};
