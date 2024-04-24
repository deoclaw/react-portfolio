import React from "react";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import "./App.css";
import Portfolio from "./pages/Portfolio";
import { WindowContextProvider } from "./context/WindowContext";

function App() {
	return (
		<WindowContextProvider>
			<Routes>
				<Route path="/" element={<Portfolio />} />
			</Routes>
		</WindowContextProvider>
	);
}

export default App;
