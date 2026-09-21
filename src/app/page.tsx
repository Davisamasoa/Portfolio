"use client";

import { useEffect, useState } from "react";
import { About } from "@/components/about/about";
import { Contact } from "@/components/contact/contact";
import { Footer } from "@/components/footer";
import { Home } from "@/components/home/home";
import { IconsAside } from "@/components/home/iconsAside";
import { Nav } from "@/components/navBar";
import { Projects } from "@/components/projects/projects";
import { Skills } from "@/components/skills/skills";
import { eng as engData } from "../assets/lang/en";
import { pt_br as pt_brData } from "../assets/lang/pt-br";
import Darkmode from "@/components/darkmode";

let lang_ = "";

export type langDataType = {
	home: {
		greeting: string;
		profission: string;
		downloadButton: string;
		cvLink: string;
		letsWorkButton: string;
	};

	about: {
		title: string;
		text: string;
	};

	skills: {
		title: string;
	};

	projects: {
		title: string;
		lang: string;
		viewProjectLabel: string;
	};

	contact: {
		title: string;
		lang: string;
		labelName: string;
		placeHolderName: string;
		emailLabel: string;
		placeHolderEmail: string;
		labelMessage: string;
		placeHolderMessage: string;
		sendButton: string;
	};
	footer: {
		credits: string;
	};
};

export default function App() {
	const [langName, setLangName] = useState<"pt-br" | "en">();
	const [langData, setLangData] = useState<langDataType>();

	useEffect(() => {
		const stored = localStorage.getItem("lang");
		const resolved = stored === "en" || stored === "pt-br" ? stored : "pt-br";

		document.documentElement.setAttribute("lang", resolved);
		lang_ = resolved;
		setLangName(resolved);
		setLangData(resolved === "pt-br" ? pt_brData : engData);
	}, []);

	const changeLang = (lang: "pt-br" | "en") => {
		if (langName === lang) return;

		document.documentElement.setAttribute("lang", lang);
		localStorage.setItem("lang", lang);
		lang_ = lang;
		setLangName(lang);
		setLangData(lang === "pt-br" ? pt_brData : engData);
	};

	if (!langData) return null;

	return (
		<div className="relative z-10 px-4 sm:px-6">
			<div className="pointer-events-none fixed inset-x-0 top-0 z-40 flex h-[100dvh] items-start justify-center pt-[calc(1.5rem+env(safe-area-inset-top))] transform-gpu">
				<div className="glass-pill pointer-events-auto flex items-center gap-1 p-1.5">
					<Darkmode />
					<span className="mx-1 h-5 w-px bg-white/40 dark:bg-white/10" />
					<button
						title="Português"
						onClick={() => changeLang("pt-br")}
						className={`overflow-hidden rounded-full transition duration-300 ${
							langName === "pt-br" ? "" : "opacity-40 grayscale hover:opacity-70"
						}`}
					>
						<img width={28} height={20} className="block h-5 w-7 object-cover" src="/assets/icon/brazil.png" alt="Português" />
					</button>
					<button
						title="English"
						onClick={() => changeLang("en")}
						className={`overflow-hidden rounded-full transition duration-300 ${
							langName === "en" ? "" : "opacity-40 grayscale hover:opacity-70"
						}`}
					>
						<img width={28} height={20} className="block h-5 w-7 object-cover" src="/assets/icon/usa.png" alt="English" />
					</button>
				</div>
			</div>

			<Nav />
			<IconsAside />
			<Home home={langData.home} />
			<About about={langData.about} />
			<Skills skills={langData.skills} />
			<Projects projects={langData.projects} />
			<Contact contact={langData.contact} />
			<Footer footer={langData.footer} />
		</div>
	);
}
