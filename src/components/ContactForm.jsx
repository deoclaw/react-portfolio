import React from "react";
import { useState } from "react";
import { useWindow } from "../context/WindowContext";
import {
	collection,
	addDoc,
	serverTimestamp,
} from "https://www.gstatic.com/firebasejs/10.11.1/firebase-firestore.js";
import {
	getAuth,
	signInAnonymously,
	onAuthStateChanged,
} from "https://www.gstatic.com/firebasejs/10.11.1/firebase-auth.js";

import { db } from "../firestore";

export default function ContactForm({
	id,
	title,

	display,
}) {
	let uid = null;
	const auth = getAuth();
	signInAnonymously(auth)
		.then(() => {
			// Signed in..
			const userDoc = addDoc(collection(db, "users"), {
				uid: auth.user.uid,
			});
			console.log("Logged in: ", userDoc.uid);
		})
		.catch((error) => {
			const errorCode = error.code;
			const errorMessage = error.message;
			// ...
		});
	onAuthStateChanged(auth, (user) => {
		if (user) {
			// User is signed in, see docs for a list of available properties
			// https://firebase.google.com/docs/reference/js/auth.user
			uid = user.uid;
			// ...
		} else {
			// User is signed out
			// ...
		}
	});

	const { hideWindow } = useWindow();
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [msg, setMsg] = useState("");
	const re = /^[a-zA-Z0-9 '.,@]*$/g; //regex for alphanumerics and space button

	//fxn capture userinput of form
	function handleChange(e) {
		const val = e.target.value;

		if (val.match(re)) {
			if (e.target.name === "formname") {
				setName(e.target.value);
			} else if (e.target.name === "formemail") {
				setEmail(e.target.value);
			} else if (e.target.name === "formmsg") {
				setMsg(e.target.value);
			}
		}
	}

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (name === "" || email === "" || msg === "") {
			alert("Must not be empty!");
		} else {
			setName("");
			setEmail("");
			setMsg("");
			const wintitle = document.getElementById("contact-title-bar");
			wintitle.innerText = "Sent! You may now close the window.";
		}
		try {
			const docRef = await addDoc(collection(db, "contacts"), {
				contactName: name,
				contactEmail: email,
				contactMsg: msg,
				user: uid,
				timestamp: serverTimestamp(),
			});
			console.log("Contact logged with ID: ", docRef.id);
		} catch (e) {
			console.error("Error adding document: ", e);
		}
	};

	return (
		<>
			<div
				className="window"
				style={{ maxWidth: "700px", overflow: "hidden", display: "block" }}
				id={`proj${id}`}
			>
				<div className="title-bar" style={{ zIndex: "1" }}>
					<div className="title-bar-text" id="contact-title-bar">
						{title}
					</div>
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
						<form onSubmit={handleSubmit}>
							<section
								className="field-row"
								style={{ display: "block", margin: "1rem" }}
							>
								<div className="field-row-stacked" style={{ width: "200px" }}>
									<label htmlFor="formname">Name</label>
									<input
										id="formname"
										type="text"
										name="formname"
										onChange={handleChange}
										value={name}
									/>
								</div>

								<div
									className="field-row-stacked"
									style={{ width: "200px", marginLeft: "0" }}
								>
									<label htmlFor="formemail">Email</label>
									<input
										id="formemail"
										type="text"
										name="formemail"
										onChange={handleChange}
										value={email}
									/>
								</div>
								<div
									className="field-row-stacked"
									style={{ width: "95%", marginLeft: "0" }}
								>
									<label htmlFor="formmsg">Message</label>
									<textarea
										id="formmsg"
										rows="8"
										name="formmsg"
										onChange={handleChange}
										value={msg}
									></textarea>
								</div>
								<button type="submit">Send Message</button>
							</section>
						</form>
					</div>
				</div>
			</div>
		</>
	);
}
