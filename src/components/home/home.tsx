import React from "react";
import Image from "next/image";
type langDataType = {
	home: {
		greeting: string;
		profission: string;
		downloadButton: string;
		letsWorkButton: string;
	};
	children: React.ReactNode;
};

export const Home = ({ children, home }: langDataType) => {
	return (
		<section className="text-center pt-10 text-textColor" id="Home">
			{children}
			<p>{home.greeting}</p>
			<h1 className="font-bold text-5xl mt-0">Davi Samuel</h1>
			<p className="font-thin mt-3">{home.profission}</p>
			<div className="flex justify-center gap-6 mt-8 w-full">
				<a
					download
					href="./assets/Currículo  Davi Samuel.pdf"
					className="sm:text-base text-[13px]  bg-transparent text-textColor border-primaryColor border-2 px-4 py-2 rounded-md sm:hover:bg-primaryColor sm:hover:text-bgColor duration-300 transition"
				>
					{home.downloadButton}
				</a>
				<a
					href="#contact"
					className="sm:text-base text-[13px] bg-primaryColor text-bgColor border-primaryColor border-2 px-4 py-2 rounded-md sm:hover:bg-transparent sm:hover:text-textColor duration-300 transition"
				>
					{home.letsWorkButton}
				</a>
			</div>
			<div className="sm:w-[400px] w-[80%] mx-auto mt-24">
				<img
					loading="lazy"
					width="400"
					height="400"
					className="rounded-t-full bg-secondaryColor rounded-b-[1000px]"
					src="https://github.com/Davisamasoa/Davisamasoa/assets/107278331/346df2bf-bdf2-46d9-828f-0dd59361550b"
					alt="foto de Davi Samuel"
				/>
			</div>
		</section>
	);
};
