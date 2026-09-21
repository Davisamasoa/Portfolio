import { SkillItem } from "./skillItem";
import { tecnologies } from "../projects/projectData";

export type langDataType = {
	skills: {
		title: string;
	};
};

export const Skills = ({ skills }: langDataType) => {
	return (
		<section id="skills" className="mx-auto mt-16 max-w-5xl pt-24 sm:mt-28">
			<span className="section-eyebrow block text-center">02</span>
			<h2 className="section-title text-center">{skills.title}</h2>

			<ul className="mt-14 grid grid-cols-3 gap-3 sm:grid-cols-6 sm:gap-4">
				{Object.keys(tecnologies).map((skill, index) => (
					<SkillItem
						key={index}
						tecLink={tecnologies[skill].oficialWebsite}
						tecImg={tecnologies[skill].imgPath}
						tecImgAlt={tecnologies[skill].imgAlt}
					/>
				))}
			</ul>
		</section>
	);
};
