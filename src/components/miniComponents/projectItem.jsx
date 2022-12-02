import React from "react";

export default function ProjectItem(props) {
	const hoverProject = "hover:scale-105";

	return (
		<div
			className={!props.display ? `project none ${hoverProject}` : `project ${hoverProject}`}
			id={props.id}
		>
			<a target={"_blank"} href={props.projectSite}>
				<figure className="figure-project">
					<img src={props.projectImg} className="img-project" alt="" />
				</figure>
				<p className="text-project w-full text-center">{props.projectName}</p>
				<div className="div-botao-project">
					<a className="botao-project verProjeto" target="_blank" href={props.projectSite}>
						Ver Projeto
					</a>
					<a className="botao-project gith" target="_blank" href={props.projectGit}>
						<i className="bi bi-github"></i>
					</a>
				</div>
			</a>
		</div>
	);
}
