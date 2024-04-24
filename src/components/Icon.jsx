import React from "react";
import { useWindow } from "../context/WindowContext";

export default function Icon({ id, title, icon, url = null, project }) {
	// function showWindow(id) {
	// 	const win = document.getElementById(`proj${id}`);
	// 	win.style.display = "block";
	// }

	const { showWindow } = useWindow();

	//icon gets project parameter so we can use the fxns from the windowcontext and pass it along to Window?

	return (
		<figure className="winicon">
			{url === null ? (
				<img
					src={icon}
					onClick={() => showWindow(project)}
					style={{ cursor: "pointer" }}
				/>
			) : (
				<a href={url}>
					<img src={icon} />
				</a>
			)}
			<figcaption
				style={{
					width: "15ch",
					textOverflow: "ellipsis",
					color: "white",
				}}
			>
				{title}
			</figcaption>
		</figure>
	);
}
