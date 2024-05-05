import React from "react";
import projects from "../data/projects.json";
import Icon from "../components/Icon";
import { useNavigate } from "react-router-dom";

export default function IconContainer() {
	let navigate = useNavigate();
	const blogRoute = () => {
		let path = `/blog`;
		navigate(`/blog`);
	};
	return (
		<div id="icon-container">
			<Icon
				id="homeicon"
				title="My Computer"
				icon="/folder_home.png"
				url="https://github.com/deoclaw/"
			/>
			{projects.map((project) => (
				<Icon
					key={project.id}
					id={project.id}
					title={project.title}
					icon={project.icon}
					project={project} //lets me use this data elsewhere
				/>
			))}
			<Icon
				id="blogicon"
				title="My Computer"
				icon="/folder_home.png"
				event={blogRoute}
			/>
		</div>
	);
}
