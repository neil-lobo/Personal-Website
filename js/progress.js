//document.querySelector("#progress1").querySelector(".progress-fill")
//document.querySelector("#progress2").querySelector(".progress-fill")

//#progress1 height = document.querySelector("#portfolio").offsetTop - document.querySelector("#about").offsetTop

//calculate scoll heights
let progress1Height =
	document.querySelector("#portfolio").offsetTop -
	document.querySelector("#about").offsetTop;
let progress2Height =
	document.querySelector("#contact").offsetTop -
	document.querySelector("#portfolio").offsetTop;

window.onscroll = () => handleScroll();

function handleScroll() {
	//calculate relative postitions
	let relativeAboutPos =
		window.scrollY - document.querySelector("#about").offsetTop;
	let relativePortfolioPos =
		window.scrollY - document.querySelector("#portfolio").offsetTop;
	let relativeContactPos =
		window.scrollY - document.querySelector("#contact").offsetTop;

	//calculate fill percentages
	let fillPercent1 = (relativeAboutPos / progress1Height) * 100;
	if (fillPercent1 < 1) fillPercent1 = 0;
	if (fillPercent1 > 100) fillPercent1 = 100;
	let fillPercent2 = (relativePortfolioPos / progress2Height) * 100;
	if (fillPercent2 < 1) fillPercent2 = 0;
	if (fillPercent2 > 100) fillPercent2 = 100;

	//change percent for progress bars
	document
		.querySelector("#progress1")
		.querySelector(".progress-fill").style.height =
		fillPercent1.toString() + "%";

	document
		.querySelector("#progress2")
		.querySelector(".progress-fill").style.height =
		fillPercent2.toString() + "%";

	//fill in landmarks
	document
		.querySelector("#about-landmark")
		.querySelector("#fill").style.opacity = relativeAboutPos >= 0 ? 1 : 0;
	document
		.querySelector("#portfolio-landmark")
		.querySelector("#fill").style.opacity =
		relativePortfolioPos >= 0 ? 1 : 0;
	document
		.querySelector("#contact-landmark")
		.querySelector("#fill").style.opacity =
		relativeContactPos >= -1 ? 1 : 0;
}
