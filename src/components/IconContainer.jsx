import React from "react";
import projects from "../data/projects.json";
import Icon from "../components/Icon";

export default function IconContainer() {
	const showEmail = () => {};
	return (
		<div id="icon-container">
			<Icon
				id="homeicon"
				title="My Computer"
				icon="/gnome-fs-client.png"
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
				title="Blog Posts"
				icon="/folder_home.png"
				url="/blog"
			/>
		</div>
	);
}
