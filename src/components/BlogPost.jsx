import React from "react";
import { NavLink, useParams } from "react-router-dom";
import Container from "./Container";
import blogposts from "../data/blogposts.json";

export default function BlogPost() {
	const { slug } = useParams(); //need this to access the :slug in the url
	console.log(slug);
	console.log(blogposts);
	const newPost = blogposts.filter((post) => post.slug === slug);
	console.log(newPost);

	return (
		<Container>
			<div
				className="window"
				style={{
					maxWidth: "100%",
					height: "100vh",
					marginTop: "0",
					backgroundColor: "white",
					overflow: "hidden",
				}}
				key={newPost[0].slug}
			>
				<div className="title-bar">
					<div className="title-bar-text">{newPost[0].title}</div>
					<div className="title-bar-controls">
						<button aria-label="Minimize"></button>
						<button aria-label="Maximize"></button>
						<NavLink to="/blog">
							<button aria-label="Close" style={{ cursor: "pointer" }}></button>
						</NavLink>
					</div>
				</div>
				<div
					className="window-body"
					id="blogBody"
					style={{ maxHeight: "85vh", overflowY: "auto" }}
				>
					<div style={{ margin: "1rem" }} className="blogPostBody">
						{
							//found this on stack overflow: https://stackoverflow.com/questions/35351706/how-to-render-a-multi-line-text-string-in-react
							newPost[0].body.split("\n").map((i, key) => {
								return (
									<p key={key} className="blogPara">
										{i}
									</p>
								);
							})
						}
					</div>
					<div id="icon-container"></div>
				</div>
			</div>
			;
		</Container>
	);
}
