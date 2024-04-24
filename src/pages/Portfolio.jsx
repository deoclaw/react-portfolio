import projects from "../data/projects.json";
import Window from "../components/Window";
import Icon from "../components/Icon";
import { useWindow } from "../context/WindowContext";

export default function Portfolio() {
	const { winItem } = useWindow();

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
						project={project} //lets me use this data elsewhere
					/>
				))}
			</div>
			<div id="proj-window-container">
				{/* had to make it an array and then map thru?!?! */}
				{winItem.map((project) => (
					<Window
						key={project.id}
						id={project.id}
						title={project.title}
						image={project.image}
						desc={project.desc}
						codeURL={project.codeURL}
						liveURL={project.liveURL}
						lang={project.lang}
						// display="none"
					/>
				))}
			</div>
		</div>
	);
}
