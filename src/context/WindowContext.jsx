// this will control if a window is open or not
// ideally, we can....stop? a window? from being open
// so essentially i can just swap the windows
// i'd like to get to where i could have all the icons gridded to the screen
// and maybe the windows open a la a modal?

import { createContext, useContext, useState } from "react";

const WindowContext = createContext();

//create own hook
export function useWindow() {
	return useContext(WindowContext);
}

export function WindowContextProvider({ children }) {
	const [winItem, setWinItem] = useState([]);
	const [isWindowOpen, setWindowOpen] = useState(false); //is our window open

	//if a window is to be shown we want to generate on the fly
	//so we need to also set and reset the state? hold an obj?

	function hideWindow(id) {
		if (isWindowOpen) {
			const win = document.getElementById(`proj${id}`);
			win.style.display = "none";
			setWindowOpen(false);
		}
	}

	function showWindow(project) {
		console.log(project);
		setWinItem([project]); //why did this work?!? why not project instead of [project] ?!?!
		console.log(winItem);
		setWindowOpen(true);
	}

	// function sendMessage() {
	// 	const wintitle = document.getElementById("contact-title-bar");
	// 	wintitle.innerText = "Sent! You may now close the window.";
	// }

	return (
		<WindowContext.Provider
			value={{ hideWindow, showWindow, isWindowOpen, winItem }}
		>
			{children}
		</WindowContext.Provider>
	);
}

export default WindowContext;
