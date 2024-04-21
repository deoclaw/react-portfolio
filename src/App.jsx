import React from "react";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import Window from "./components/Window";

import "./App.css";
import Portfolio from "./pages/Portfolio";

function App() {
	return (
		<Routes>
			<Route path="/" element={<Portfolio />} />
		</Routes>
	);
}

export default App;
