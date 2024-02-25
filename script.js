const html_code = document.querySelector(".html-code textarea");
const css_code = document.querySelector(".css-code textarea");
const js_code = document.querySelector(".js-code textarea");
const result = document.querySelector("#result");

// Storing data in Local Storage
function run() {
	localStorage.setItem("html_code", html_code.value);
	localStorage.setItem("css_code", css_code.value);
	localStorage.setItem("js_code", js_code.value);
	// Executing HTML, CSS & JS code
	result.contentDocument.body.innerHTML =
		`<style>${localStorage.css_code}</style>` + localStorage.html_code;
	result.contentWindow.eval(localStorage.js_code);
}

// Checking if user is typing anything in input field
html_code.onkeyup = () => run();
css_code.onkeyup = () => run();
js_code.onkeyup = () => run();

// Accessing data stored in Local Storage.
// TODO: check if data stored in Local Storage.
document.addEventListener("DOMContentLoaded", function () {
	html_code.value = localStorage.html_code || "<a href="https://piyush-choudhary.netlify.app">HTML Code Here</a> 
";
	css_code.value = localStorage.css_code || "/* CSS Code Here */";
	js_code.value = localStorage.js_code || "JS Code Here";
});

(function showLocalStorageSize() {
	function stringSizeBytes(str) {
		return str.length * 2;
	}
	function toMB(bytes) {
		return bytes / 1024 / 1024;
	}
	function toSize(key) {
		return {
			name: key,
			size: stringSizeBytes(localStorage[key])
		};
	}
	function toSizeMB(info) {
		info.size = toMB(info.size).toFixed(2) + " MB";
		return info;
	}
	var sizes = Object.keys(localStorage).map(toSize).map(toSizeMB);
	console.table(sizes);
})();
