import projects from "../data/projects.json";
import Window from "../components/Window";

export default function Portfolio() {
	return (
		<>
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
				/>
			))}
		</>
	);
}
