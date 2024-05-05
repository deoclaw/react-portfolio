import React from "react";
import { useWindow } from "../context/WindowContext";

export default function IconInWindow({
	id,
	title,
	icon,
	url = null,
	event = null,
	project,
}) {
	// function showWindow(id) {
	// 	const win = document.getElementById(`proj${id}`);
	// 	win.style.display = "block";
	// }

	const { showWindow } = useWindow();

	//icon gets project parameter so we can use the fxns from the windowcontext and pass it along to Window?

	return (
		<figure className="winicon" style={{ margin: "20px" }}>
			{url === null && event === null ? (
				<img
					src={icon}
					onClick={() => showWindow(project)}
					style={{ cursor: "pointer" }}
				/>
			) : event !== null ? (
				<img src={icon} onClick={event} style={{ cursor: "pointer" }} />
			) : (
				<a href={url}>
					<img src={icon} />
				</a>
			)}
			<figcaption
				style={{
					width: "15ch",
					textOverflow: "ellipsis",
					color: "black",
				}}
			>
				{title}
			</figcaption>
		</figure>
	);
}
