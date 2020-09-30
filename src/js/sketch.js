function main() {
	const canvas = document.querySelector("canvas.webgl");
	const gl = canvas.getContext("webgl");

	if (gl === null) {
		alert("Your browser doesn't have WebGL. Update it, or switch to a newer one.");
		return
	}

	gl.clearColor(0.0, 0.0, 0.0, 1.0);
	gl.clear(gl.COLOR_BUFFER_BIT);
}

window.onload = main;
