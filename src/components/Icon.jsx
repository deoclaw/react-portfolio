export default function Icon({ id, title, icon, url = null }) {
	function showWindow(id) {
		const win = document.getElementById(`proj${id}`);
		win.style.display = "block";
	}

	return (
		<figure className="winicon" style={{ maxWidth: "128px" }}>
			{url === null ? (
				<img
					src={icon}
					onClick={() => showWindow(id)}
					style={{ maxWidth: "72px", cursor: "pointer" }}
				/>
			) : (
				<a href={url}>
					<img src={icon} style={{ maxWidth: "72px" }} />
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
