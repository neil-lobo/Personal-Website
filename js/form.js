document.getElementById("contact-form").addEventListener("submit", (e) => {
	e.preventDefault();

	let name = document.getElementById("form-name").value;
	let email = document.getElementById("form-email").value;
	let message = document.getElementById("form-message").value;

	const formData = new FormData();
	formData.append("name", name);
	formData.append("email", email);
	formData.append("message", message);

	document.getElementById("form-name").value = "";
	document.getElementById("form-email").value = "";
	document.getElementById("form-message").value = "";

	fetch("https://getform.io/f/88c329ce-387f-4633-8587-dc28db5a425a", {
		method: "POST",
		body: formData,
	})
		.then((res) => {
			// name.value = "";
			// email.value = "";
			// message.value = "";
			console.log(res);
		})
		.catch((err) => {
			console.error(err);
		});
});
