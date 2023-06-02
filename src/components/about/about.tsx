import { motion } from "framer-motion";
import Image from "next/image";
type langDataType = {
	about: {
		title: string;
		text: string;
	};
};

export const About = ({ about }: langDataType) => {
	return (
		<section className="sm:pt-32 pt-16 mt-56   text-textColor" id="aboutMe">
			<motion.h1
				initial={{ y: -100, opacity: 0 }}
				whileInView={{ y: 0, opacity: 1 }}
				transition={{ delay: 0.1 }}
				className="text-center text-5xl font-bold"
			>
				{about.title}
			</motion.h1>

			<div className="pt-14 gap-10 flex lg:flex-row flex-col items-center w-full justify-center">
				<motion.div
					initial={{ y: -100, opacity: 0 }}
					whileInView={{ y: 0, opacity: 1 }}
					transition={{ delay: 0.2, duration: 0.3 }}
				>
					<img
						className="sm:w-80 w-full rounded-2xl"
						src="/assets/img/fotoAboutMe.png"
						alt="Foto de Davi Samuel"
					/>
				</motion.div>
				<motion.div
					initial={{ y: -100, opacity: 0 }}
					whileInView={{ y: 0, opacity: 1 }}
					transition={{ delay: 0.2, duration: 0.3 }}
					className="flex items-center"
				>
					<p className="sm:w-96 w-full md:px-6">{about.text}</p>
				</motion.div>
			</div>
		</section>
	);
};
