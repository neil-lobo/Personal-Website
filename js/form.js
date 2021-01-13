let submitting = false;

document.getElementById("contact-form").addEventListener("submit", (e) => {
	e.preventDefault();

	if (submitting) return;
	submitting = true;

	let name = document.getElementById("form-name");
	let email = document.getElementById("form-email");
	let message = document.getElementById("form-message");

	document.getElementById("loader").style.display = "block";

	const formData = new FormData();
	formData.append("name", name.value);
	formData.append("email", email.value);
	formData.append("message", message.value);

	fetch("https://getform.io/f/88c329ce-387f-4633-8587-dc28db5a425a", {
		method: "POST",
		body: formData,
	})
		.then((res) => {
			name.value = "";
			email.value = "";
			message.value = "";
			submitting = false;
			document.getElementById("loader").style.display = "none";
			document.getElementById("success").style.opacity = "1";
			document.getElementById("success").style.display = "flex";
			setTimeout(() => {
				document.getElementById("success").style.opacity = "0";
				setTimeout(() => {
					document.getElementById("success").style.display = "none";
				}, 500);
			}, 5000);
			console.log(res);
		})
		.catch((err) => {
			console.error(err);
		});
});
