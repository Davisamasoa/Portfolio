import { motion } from "framer-motion";
import Image from "next/image";

type projectItemType = {
	projectName: string;

	projectImg: string;
	projectSite: string;
	projectGit: string;
	display: boolean;
	tecnologies: {
		oficialWebsite: string;
		imgPath: string;
		imgAlt: string;
	}[];
};

export const ProjectItem = (props: projectItemType) => {
	const display = props.display ? "" : "hidden";
	return (
		<motion.div
			initial={{ opacity: 0 }}
			transition={{ duration: 0.3 }}
			whileInView={{ opacity: 1 }}
			className={`${display} lg:w-80 md:w-72 w-full  flex justify-center gap-5  rounded-2xl items-center flex-col`}
		>
			<figure className="w-full rounded-2xl">
				<Image
					width={294}
					height={143}
					loading="lazy"
					src={props.projectImg}
					className="rounded-xl w-full md:w-auto"
					alt=""
				/>
			</figure>
			<div className="flex justify-start w-full gap-1">
				{props.tecnologies.map((Tecnology, index) => {
					return (
						<motion.a
							initial={{ opacity: 0, x: -20 }}
							whileInView={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.3 }}
							href={Tecnology.oficialWebsite}
							key={index}
							target="_blank"
							className={`bg-secondaryColor rounded-md p-1 min-w-[31px]  flex justify-center items-center`}
						>
							<Image
								loading="lazy"
								className={` ${
									Tecnology.imgPath == "/_next/static/media/prisma.effd950f.svg" ? "w-[18px]" : "w-6"
								} brightness-0 invert grayscale-0`}
								src={Tecnology.imgPath}
								alt={Tecnology.imgAlt}
								width={10}
								height={10}
							/>
						</motion.a>
					);
				})}
			</div>
			<p className="w-full text-center font-bold">{props.projectName}</p>
			<div className="flex flex-row gap-5">
				<a
					className="lg:text-base md:text-[12px]  lg:w-full md:w-28 text-center bg-transparent text-textColor border-primaryColor border-2 px-4 py-2 rounded-md sm:hover:bg-primaryColor sm:hover:text-bgColor duration-300 transition"
					target="_blank"
					href={props.projectSite}
				>
					Ver Projeto
				</a>
				<a
					className="flex items-center justify-center w-fit text-center bg-primaryColor text-bgColor border-primaryColor border-2 px-4  rounded-md sm:hover:bg-transparent sm:hover:text-textColor duration-300 transition"
					target="_blank"
					href={props.projectGit}
				>
					<i className="bi bi-github text-3xl"></i>
				</a>
			</div>
		</motion.div>
	);
};
