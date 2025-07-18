import { SkillItem } from "./skillItem";
import { tecnologies } from "../projects/projectData";

export type langDataType = {
	skills: {
		title: string;
	};
};

export const Skills = ({ skills }: langDataType) => {
	return (
		<section
			className="sm:pt-32  max-w-5xl mx-auto pt-16 mt-16 flex flex-col justify-center items-center text-textColor dark:text-darktextColor"
			id="skills"
		>
			<h1 className="text-5xl font-bold">{skills.title}</h1>

			<ul className="pt-14 sm:gap-4 md:gap-6 gap-3 grid grid-cols-3  sm:grid-cols-6">
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
