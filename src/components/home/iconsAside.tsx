import { motion } from "framer-motion";

export const IconsAside = () => {
	return (
		<motion.aside
			initial={{ y: -100, opacity: 0 }}
			whileInView={{ y: 0, opacity: 1 }}
			className="z-50  position absolute sm:top-[500px] top-[430px] left-4 flex flex-col gap-3 sm:text-3xl text-2xl lg:left-1/4 md:left-32  text-primaryColor"
			data-aos="fade-right"
			data-aos-duration="1500"
		>
			<a
				className="hover:scale-110 transition duration-300"
				href="https://github.com/Davisamasoa"
				target="_blank"
			>
				<i className="bi bi-github"></i>
			</a>

			<a
				className="hover:scale-110 transition duration-300"
				href="https://www.linkedin.com/in/davisamasoa/"
				target="_blank"
			>
				<i className="bi bi-linkedin"></i>
			</a>

			<a className="hover:scale-110 transition duration-300" href="mailto:davisamasoa@gmail.com">
				<i className="bi bi-envelope"></i>
			</a>
		</motion.aside>
	);
};
