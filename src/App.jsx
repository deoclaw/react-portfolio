import { useState } from "react";
import "./App.css";

function App() {
	return (
		<>
			<div className="window" style={{ width: "300px" }}>
				<div className="title-bar">
					<div className="title-bar-text">A Window With Stuff In It</div>
					<div className="title-bar-controls">
						<button aria-label="Minimize"></button>
						<button aria-label="Maximize"></button>
						<button aria-label="Close"></button>
					</div>
				</div>
				<div className="window-body">
					<p>There's so much room for activities!</p>
				</div>
			</div>
		</>
	);
}

export default App;
