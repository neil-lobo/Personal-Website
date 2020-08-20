setInterval(() => {
	let name = document.getElementById("name").innerText;
	document.getElementById("name").innerText =
		name[name.length - 1] == "_" ? "Neil Lobo" : "Neil Lobo_";
}, 600);
