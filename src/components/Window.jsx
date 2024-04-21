export default function Window({
	id,
	title,
	image,
	desc,
	codeURL,
	liveURL,
	lang,
}) {
	return (
		<>
			<div className="window" style={{ maxWidth: "700px" }}>
				<div className="title-bar">
					<div className="title-bar-text">{title}</div>
					<div className="title-bar-controls">
						<button aria-label="Minimize"></button>
						<button aria-label="Maximize"></button>
						<button aria-label="Close" style={{ cursor: "pointer" }}></button>
						{/* will make close button have onclick event */}
					</div>
				</div>
				<div className="window-body">
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
						<p className="status-bar-field">Slide 1</p>
						<p className="status-bar-field">CPU Usage: 14%</p>
					</div>
				</div>
			</div>
		</>
	);
}
