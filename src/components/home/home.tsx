import { motion } from "framer-motion";
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
		<motion.section className="text-center pt-10 text-textColor" id="Home">
			{children}
			<motion.p initial={{ y: -50, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }}>
				{home.greeting}
			</motion.p>
			<motion.h1
				initial={{ y: -100, opacity: 0 }}
				whileInView={{ y: 0, opacity: 1 }}
				transition={{ delay: 0.05 }}
				className="font-bold text-5xl mt-0"
			>
				Davi Samuel
			</motion.h1>
			<motion.p
				initial={{ y: -100, opacity: 0 }}
				whileInView={{ y: 0, opacity: 1 }}
				transition={{ delay: 0.1 }}
				className="font-thin mt-3"
			>
				{home.profission}
			</motion.p>
			<motion.div
				initial={{ y: -100, opacity: 0 }}
				whileInView={{ y: 0, opacity: 1 }}
				transition={{
					delay: 0.15,
				}}
				className="flex justify-center gap-6 mt-8 w-full"
			>
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
			</motion.div>
			<motion.div
				initial={{ y: -100, opacity: 0 }}
				whileInView={{ y: 0, opacity: 1 }}
				transition={{ delay: 0.2 }}
				className="sm:w-[400px] w-[80%] mx-auto mt-24"
			>
				<Image
					width="400"
					height="400"
					className="rounded-t-full rounded-b-[1000px]"
					src="/assets/img/eu.png"
					alt="foto de Davi Samuel"
				/>
			</motion.div>
		</motion.section>
	);
};
