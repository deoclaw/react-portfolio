import IconContainer from "../components/IconContainer";
import Window from "../components/Window";
import Container from "../components/Container";
import { useWindow } from "../context/WindowContext";
import { useNavigate } from "react-router-dom";
import BlogWindow from "../components/BlogWindow";

export default function Blog() {
	const { winItem } = useWindow();

	const navigate = useNavigate();
	const routeChange = () => {
		let path = `/`;
		navigate(path);
	};

	return (
		<Container>
			<BlogWindow />
		</Container>
	);
}
