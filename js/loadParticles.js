/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS.load(
	"particles-js-landing",
	"assets/particles-landing.json",
	function () {
		console.log("callback - particles.js config loaded landing");
	}
);

particlesJS.load(
	"particles-js-main",
	"assets/particles-main.json",
	function () {
		console.log("callback - particles.js config loaded main");
	}
);
