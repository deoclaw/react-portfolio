import IconContainer from "../components/IconContainer";
import Window from "../components/Window";
import Container from "../components/Container";
import { useWindow } from "../context/WindowContext";

export default function Portfolio() {
	const { winItem } = useWindow();

	return (
		<Container id="portfolio-container">
			<IconContainer> </IconContainer>
			<Container id="window-container">
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
			</Container>
		</Container>
	);
}
