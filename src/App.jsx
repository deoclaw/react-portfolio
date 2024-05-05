import React from "react";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import "./App.css";
import Portfolio from "./pages/Portfolio";
import Blog from "./pages/Blog";

import { WindowContextProvider } from "./context/WindowContext";
import BlogPost from "./components/BlogPost";

function App() {
	return (
		<WindowContextProvider>
			<Routes>
				<Route path="/" element={<Portfolio />} />
				<Route path="/blog" element={<Blog />} />
				<Route path="/posts/:slug" element={<BlogPost />} />
			</Routes>
		</WindowContextProvider>
	);
}

export default App;
