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
	html_code.value = localStorage.html_code || "
		<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
</body>
</html>
		";
	css_code.value = localStorage.css_code || "
			*{margin: 0;
			  padding: 0;
	                box-sizing: border-box;
				}
			  html, body{
	height: 100%;
	width: 100%;
			  }
			";
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
