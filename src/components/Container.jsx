import React from "react";

// {children} as a prop lets us nest OTHER jsx components in our Card
// it's kind of like slot in astro?
export default function Container({ id, children }) {
	return <div id={id}>{children}</div>;
}
