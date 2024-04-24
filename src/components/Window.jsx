export default function Window({
	id,
	title,
	image,
	desc,
	codeURL,
	liveURL,
	lang,
	display,
}) {
	function hideWindow(id) {
		const win = document.getElementById(`proj${id}`);
		win.style.display = "none";
	}

	// could this become a context? [isShown, setShow] and then...get the id of whatever we're clicking on? and then call it here AND in my icons -- which i need to make...and maybe store icon data in the json? or do a check -- if lang is x show y else...or i can shove in the json

	return (
		<>
			<div
				className="window"
				style={{ maxWidth: "700px", overflow: "hidden", display: display }}
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
						{image !== null ? (
							<img
								src={image}
								alt={title}
								style={{
									maxWidth: "50%",
									margin: "1rem auto",
									display: "block",
									border: "1px solid grey",
									borderRadius: "7px",
									boxShadow: "offset 0 1px 2px grey",
								}}
							/>
						) : (
							<p></p>
						)}

						<section className="field-row" style={{ justifyContent: "center" }}>
							{codeURL === null ? (
								<button disabled={true}>Code</button>
							) : (
								<a href={codeURL}>
									<button>Code</button>
								</a>
							)}
							{liveURL === null ? (
								<button disabled={true}>Preview</button>
							) : (
								<a href={liveURL}>
									<button>Preview</button>
								</a>
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
