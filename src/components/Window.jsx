export default function Window({
	id,
	title,
	image,
	desc,
	codeURL,
	liveURL,
	lang,
}) {
	function hideWindow(id) {
		const win = document.getElementById(`proj${id}`);
		win.style.display = "none";
	}

	return (
		<>
			<div
				className="window"
				style={{ maxWidth: "700px", overflow: "hidden" }}
				id={`proj${id}`}
			>
				<div className="title-bar" style={{ zIndex: "1" }}>
					<div className="title-bar-text">{title}</div>
					<div className="title-bar-controls">
						<button disabled aria-label="Minimize"></button>
						<button disabled aria-label="Maximize"></button>
						<button
							onClick={() => hideWindow(id)}
							aria-label="Close"
							style={{ cursor: "pointer" }}
						></button>
					</div>
				</div>
				<div
					className="window-body"
					style={{ maxHeight: "700px", overflowY: "auto" }}
				>
					<div className="window-wrapper">
						<h4>{title}</h4>

						<p>{desc}</p>

						<section className="field-row" style={{ justifyContent: "center" }}>
							{codeURL === null ? (
								<button disabled={true}>Code</button>
							) : (
								<button>Code</button>
							)}
							{liveURL === null ? (
								<button disabled={true}>Preview</button>
							) : (
								<button>Preview</button>
							)}
						</section>
						<div className="status-bar">
							<p className="status-bar-field">Press F1 for help</p>
							<p className="status-bar-field">Language: {lang}</p>
							<p className="status-bar-field">
								CPU Usage: {Math.ceil(Math.random() * id * 10)}%
							</p>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
