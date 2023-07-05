import { SkillItem } from "./skillItem";
import { tecnologies } from "../projects/projectData";
import { LazyMotion, domAnimation, m } from "framer-motion";

export type langDataType = {
	skills: {
		title: string;
	};
};

export const Skills = ({ skills }: langDataType) => {
	return (
		<section
			className="sm:pt-32 pt-16 mt-56 flex flex-col justify-center items-center text-textColor"
			id="skills"
		>
			<LazyMotion features={domAnimation}>
				<m.h1
					initial={{ y: -100, opacity: 0 }}
					whileInView={{ y: 0, opacity: 1 }}
					transition={{ duration: 0.3, delay: 0 }}
					className="text-5xl font-bold"
				>
					{skills.title}
				</m.h1>
			</LazyMotion>
			<ul className="pt-14 sm:gap-8 gap-8 grid grid-cols-3  sm:grid-cols-4">
				{Object.keys(tecnologies).map((skill, index) => {
					return (
						<SkillItem
							tecLink={tecnologies[`${skill}`].oficialWebsite}
							tecImg={tecnologies[`${skill}`].imgPath}
							key={index}
							tecImgAlt={tecnologies[`${skill}`].imgAlt}
						/>
					);
				})}
			</ul>
		</section>
	);
};
