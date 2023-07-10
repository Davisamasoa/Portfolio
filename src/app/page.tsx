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

let lang_ = "";

export type langDataType = {
	home: {
		greeting: string;
		profission: string;
		downloadButton: string;
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
	};

	contact: {
		title: string;
		lang: string;
		labelName: string;
		placeHolderName: string;
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
	const [langName, setLangName] = useState<string>();
	const [langData, setLangData] = useState<langDataType>();
	const langSwitch = async () => {
		const data = lang_ == "pt-br" ? pt_brData : engData;
		setLangData(data);
	};

	useEffect(() => {
		const lang = localStorage.getItem("lang");
		if ((lang && lang == "en") || lang == "pt-br") {
			document.documentElement.setAttribute("lang", lang);
			setLangName(lang);
			lang_ = lang;
		} else {
			setLangName("pt-br");
			lang_ = "pt-br";
		}

		langSwitch();
	}, [langName]);

	return (
		<div className="px-6 font-montserrat z-50">
			{langData ? (
				<>
					<Nav />
					<IconsAside />
					<Home home={langData?.home}>
						<div className="mb-5 flex justify-end gap-2 items-center w-[300px] mx-auto">
							<img
								onClick={() => {
									langName == "pt-br" ? undefined : setLangName("pt-br");

									localStorage.setItem("lang", "pt-br");
								}}
								className={` cursor-pointer ${langName == "pt-br" ? undefined : "grayscale"}`}
								width={30}
								height={20}
								src="./assets/icon/brazil.png"
								alt="Brazil Flag"
							/>

							<img
								onClick={() => {
									langName == "en" ? undefined : setLangName("en");
									localStorage.setItem("lang", "en");
								}}
								className={`cursor-pointer ${langName == "en" ? undefined : "grayscale"}`}
								width={30}
								height={20}
								src="./assets/icon/usa.png"
								alt="Usa Flag"
							/>
						</div>
					</Home>
					<About about={langData?.about} />
					<Skills skills={langData?.skills} />
					<Projects projects={langData?.projects} />
					<Contact contact={langData?.contact} />
					<Footer footer={langData?.footer} />
				</>
			) : undefined}
		</div>
	);
}
