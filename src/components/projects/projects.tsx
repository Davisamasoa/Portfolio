import { ProjectItem } from "./projectItem";
import { projectData } from "./projectData";

type langDataType = {
	projects: {
		title: string;
		lang: string;
		viewProjectLabel: string;
	};
};

export const Projects = ({ projects }: langDataType) => {
	return (
		<section id="project" className="mx-auto mt-16 max-w-5xl pt-24 sm:mt-28">
			<span className="section-eyebrow block text-center">03</span>
			<h2 className="section-title text-center">{projects.title}</h2>

			<div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
				{projectData.map((project, index) => (
					<ProjectItem
						key={index}
						projectName={projects.lang === "pt-br" ? project.name.pt_br : project.name.eng}
						projectImg={project.imgPath}
						projectSite={project.website}
						tecnologies={project.tecnologies}
						viewProjectLabel={projects.viewProjectLabel}
					/>
				))}
			</div>
		</section>
	);
};
