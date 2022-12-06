import React from "react";

export function SkillItem(props) {
	return (
		<li className="skillItem hover:scale-125">
			<a href={props.tecLink} target="_blank" rel="noreferrer">
				<img src={props.tecImg} alt={props.imgAlt} />
			</a>
		</li>
	);
}
