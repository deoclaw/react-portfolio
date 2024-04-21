import projects from "../data/projects.json";
import Window from "../components/Window";
import Icon from "../components/Icon";

export default function Portfolio() {
	return (
		<div id="portfolio-container">
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
					/>
				))}
			</div>
			<div id="proj-window-container">
				{projects.map((project) => (
					<Window
						key={project.id}
						id={project.id}
						title={project.title}
						image={project.image}
						desc={project.desc}
						codeURL={project.codeURL}
						liveURL={project.liveURL}
						lang={project.lang}
						display="none"
					/>
				))}
			</div>
		</div>
	);
}
