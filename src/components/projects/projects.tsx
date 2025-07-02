import { useState } from "react";
import { ProjectItem } from "./projectItem";
import { projectData } from "./projectData";

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
		<section
			className="sm:pt-32 pt-16 max-w-5xl mx-auto mt-16  text-textColor dark:text-darktextColor"
			id="project"
		>
			<h1 className="text-center text-5xl font-bold">{projects.title}</h1>

			<div className="pt-14 grid lg:grid-cols-3 sm:grid-cols-2 place-items-center gap-10 w-full mx-auto">
				{projectData.map((project, index) => {
					return (
						<ProjectItem
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
			{/* <div className="flex text-primaryColor dark:text-darkprimaryColor justify-center mt-16">
				<button onClick={handleShowProjects} aria-label="Mostrar mais ou mostrar menos projetos">
					<i className={`${moreLessClassName} text-2xl`}></i>
				</button>
			</div> */}
		</section>
	);
};
