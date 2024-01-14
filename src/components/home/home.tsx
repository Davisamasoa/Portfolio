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
		<section className="text-center pt-10 text-textColor dark:text-darktextColor" id="Home">
			{children}
			<p>{home.greeting}</p>
			<h1 className="font-bold text-5xl mt-0">Davi Machado</h1>
			<p className="font-thin mt-3">{home.profission}</p>
			<div className="flex justify-center gap-6 mt-8 w-full">
				<a
					download
					href="./assets/Currículo  Davi Samuel.pdf"
					className="sm:text-base text-[13px]  bg-transparent text-textColor dark:text-darktextColor border-primaryColor dark:border-darkprimaryColor border-2 px-4 py-2 rounded-md sm:hover:bg-primaryColor dark:sm:hover:bg-darkprimaryColor sm:hover:text-bgColor dark:sm:hover:text-darkbgColor duration-300 transition"
				>
					{home.downloadButton}
				</a>
				<a
					href="#contact"
					className="sm:text-base text-[13px] bg-primaryColor dark:bg-darkprimaryColor text-bgColor dark:text-darkbgColor border-primaryColor dark:border-darkprimaryColor border-2 px-4 py-2 rounded-md sm:hover:bg-transparent sm:hover:text-textColor dark:sm:hover:text-darktextColor duration-300 transition"
				>
					{home.letsWorkButton}
				</a>
			</div>
			<div className="sm:w-[400px] w-[80%] mx-auto mt-24">
				<img
					width="400"
					height="400"
					className="rounded-t-full bg-secondaryColor dark:bg-darksecondaryColor rounded-b-[1000px]"
					src="/assets/img/eu1.webp"
					alt="foto de Davi Samuel"
				/>
			</div>
		</section>
	);
};
