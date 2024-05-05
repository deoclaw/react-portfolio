import React from "react";
import { useNavigate, NavLink } from "react-router-dom";
import Icon from "./Icon";
import IconInWindow from "./IconInWindow";
import blogposts from "../data/blogposts.json";

export default function BlogWindow() {
	//i'd like to fill it with blog icons that when clicked pull the user into the specific blog post windside a similar blog window base (so blog window should be ap arent component with children?)

	//i feel like i'm starting to get ah ang of react but a lot of the states i don't grok

	return (
		<>
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
					<div id="icon-container">
						{blogposts.map((post) => (
							<IconInWindow
								key={post.slug}
								id={post.slug}
								title={post.title}
								url={`../posts/${post.slug}`}
								icon="/abiword.png"
							/>
						))}
					</div>
				</div>
			</div>
		</>
	);
}
