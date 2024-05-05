import React from "react";
import { NavLink } from "react-router-dom";
import Container from "./Container";

export default function BlogPost() {
	return (
		<Container>
			<div
				className="window"
				style={{
					maxWidth: "100%",
					height: "75vh",
					marginTop: "0",
					backgroundColor: "white",
				}}
			>
				<div className="title-bar">
					<div className="title-bar-text">Blog</div>
					<div className="title-bar-controls">
						<button aria-label="Minimize"></button>
						<button aria-label="Maximize"></button>
						<NavLink to="/">
							<button aria-label="Close" style={{ cursor: "pointer" }}></button>
						</NavLink>
					</div>
				</div>
				<div className="window-body">
					<p style={{ textAlign: "center", margin: "1rem" }}>
						Click on a blog post to read more (or click X to go back!)
					</p>
					<div id="icon-container"></div>
				</div>
			</div>
		</Container>
	);
}
