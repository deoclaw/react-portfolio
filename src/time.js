// creates clock

let clock = document.querySelector(".clock");
clock.textContent = new Intl.DateTimeFormat("en-US", {
	hour: "numeric",
	minute: "numeric",
	hour12: true,
}).format(new Date());

export const setTime = setInterval(() => {
	clock.textContent = new Intl.DateTimeFormat("en-US", {
		hour: "numeric",
		minute: "numeric",
		hour12: true,
	}).format(new Date());
}, 60000);
