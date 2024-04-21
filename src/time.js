// creates clock

let time = document.querySelector(".time");
time.textContent = new Intl.DateTimeFormat("en-US", {
	hour: "numeric",
	minute: "numeric",
	hour12: true,
}).format(new Date());

const setTime = setInterval(() => {
	time.textContent = new Intl.DateTimeFormat("en-US", {
		hour: "numeric",
		minute: "numeric",
		hour12: true,
	}).format(new Date());
}, 60000);
