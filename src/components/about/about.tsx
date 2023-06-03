import { LazyMotion, domAnimation, m } from "framer-motion";
import Image from "next/image";
type langDataType = {
	about: {
		title: string;
		text: string;
	};
};

export const About = ({ about }: langDataType) => {
	return (
		<LazyMotion features={domAnimation}>
			<m.section className="sm:pt-32 pt-16 mt-56   text-textColor" id="aboutMe">
				<m.h1
					initial={{ y: -100, opacity: 0 }}
					whileInView={{ y: 0, opacity: 1 }}
					transition={{ delay: 0.1 }}
					className="text-center text-5xl font-bold"
				>
					{about.title}
				</m.h1>

				<div className="pt-14 gap-10 flex lg:flex-row flex-col items-center w-full justify-center">
					<m.div
						initial={{ scale: 0.6, opacity: 0 }}
						whileInView={{ scale: 1, opacity: 1 }}
						transition={{ delay: 0.1, duration: 0.3 }}
					>
						<img
							className="sm:w-80 w-full rounded-2xl"
							src="/assets/img/fotoAboutMe.webp"
							alt="Foto de Davi Samuel"
							loading="lazy"
						/>
					</m.div>
					<m.div
						initial={{ scale: 0.6, opacity: 0 }}
						whileInView={{ scale: 1, opacity: 1 }}
						transition={{ delay: 0.1, duration: 0.3 }}
						className="flex items-center"
					>
						<p className="sm:w-96 w-full md:px-6">{about.text}</p>
					</m.div>
				</div>
			</m.section>
		</LazyMotion>
	);
};
