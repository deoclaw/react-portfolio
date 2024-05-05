import React from "react";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import "./App.css";
import Portfolio from "./pages/Portfolio";
import Blog from "./pages/Blog";
import { WindowContextProvider } from "./context/WindowContext";

function App() {
	return (
		<WindowContextProvider>
			<Routes>
				<Route path="/" element={<Portfolio />} />
				<Route path="/blog" element={<Blog />} />
			</Routes>
		</WindowContextProvider>
	);
}

export default App;
