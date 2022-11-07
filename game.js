function main() {
    const canvas = document.getElementById("glCanvas");
    const gl = canvas.getContext('webgl2');
    if (!gl) {
        console.error("Your browser does not support webgl2");
        return;
    }
    gl.clearColor(0.0, 0.8, 0.0, 1.0);
    gl.clear(gl.COLOR_BUFFER_BIT);
}
window.onload = main;
//# sourceMappingURL=game.js.map