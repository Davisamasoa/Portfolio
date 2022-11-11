import React from "react";

export function SkillItem(props) {
	return (
		<li className="skillItem">
			<a href={props.tecLink} target="_blank" rel="noreferrer">
				<img src={props.tecImg} alt={props.imgAlt} />
			</a>
		</li>
	);
}
