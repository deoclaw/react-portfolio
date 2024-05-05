import React from "react";
import { useNavigate } from "react-router-dom";
import Icon from "./Icon";

export default function BlogWindow() {
	let navigate = useNavigate();
	const routeChange = () => {
		let path = `/`;
		navigate(path);
	};

	//i'd like to fill it with blog icons that when clicked pull the user into the specific blog post windside a similar blog window base (so blog window should be ap arent component with children?)

	//i feel like i'm starting to get ah ang of react but a lot of the states i don't grok

	return (
		<>
			<div
				class="window"
				style={{
					maxWidth: "100%",
					height: "75vh",
					marginTop: "0",
					backgroundColor: "white",
				}}
			>
				<div class="title-bar">
					<div class="title-bar-text">A Window With Stuff In It</div>
					<div class="title-bar-controls">
						<button aria-label="Minimize"></button>
						<button aria-label="Maximize"></button>
						<button
							aria-label="Close"
							onClick={routeChange}
							style={{ cursor: "pointer" }}
						></button>
					</div>
				</div>
				<div class="window-body">
					<Icon title="test" icon="/folder_home.png" />
				</div>
			</div>
		</>
	);
}
