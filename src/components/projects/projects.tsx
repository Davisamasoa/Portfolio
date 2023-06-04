import { useState } from "react";
import { ProjectItem } from "./projectItem";
import { projectData } from "./projectData";
import { LazyMotion, domAnimation, m } from "framer-motion";

type langDataType = {
	projects: {
		title: string;
		lang: string;
	};
};

export const Projects = ({ projects }: langDataType) => {
	const [showProject, setShowProject] = useState<boolean>(false);
	const [moreLessClassName, setMoreLessClassName] = useState<string>("bi bi-caret-down-fill");

	const handleShowProjects = () => {
		if (moreLessClassName == "bi bi-caret-down-fill") {
			setShowProject(true);
			setMoreLessClassName("bi bi-caret-up-fill");
			window.location.href = "#anchor";
		} else {
			setShowProject(false);
			setMoreLessClassName("bi bi-caret-down-fill");
			window.location.href = "#project";
		}
	};

	return (
		<section className="sm:pt-32 pt-16  mt-48  text-textColor" id="project">
			<LazyMotion features={domAnimation}>
				<m.h1
					initial={{ y: -100, opacity: 0 }}
					whileInView={{ y: 0, opacity: 1 }}
					transition={{ duration: 0.3 }}
					className="text-center text-5xl font-bold"
				>
					{projects.title}
				</m.h1>
			</LazyMotion>
			<div className="pt-14 grid lg:grid-cols-3 md:grid-cols-2 place-items-center lg:w-[1050px] gap-10 w-full mx-auto">
				{projectData.map((project, index) => {
					return (
						<ProjectItem
							id={project.id}
							projectName={projects.lang == "pt-br" ? project.name.pt_br : project.name.eng}
							projectImg={project.imgPath}
							projectSite={project.website}
							projectGit={project.gitRepository}
							display={project.display ? project.display : showProject}
							tecnologies={project.tecnologies}
							key={index}
						/>
					);
				})}
			</div>
			<div className="flex justify-center mt-16">
				<button onClick={handleShowProjects} aria-label="Mostrar mais ou mostrar menos projetos">
					<i className={`${moreLessClassName} text-2xl`}></i>
				</button>
			</div>
		</section>
	);
};
