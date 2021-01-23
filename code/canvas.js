const canvas = {

    /** the actual <canvas> DOM element */
    el: document.querySelector('canvas'),

    /** the width of the canvas, in CSS pixels */
    w: undefined,

    /** the height of the the canvas, in CSS pixels */
    h: undefined,

};

// canvas element styling
canvas.el.style.position = 'fixed';
canvas.el.style.top = '0';
canvas.el.style.left = '0';
// width+height are set dynamically in the function'resizeCanvas'

// canvas sizing
resizeCanvas();
window.addEventListener('resize', resizeCanvas);
function resizeCanvas() {
    canvas.el.style.width = `${w = window.innerWidth}px`;   // the canvas size as an Element on the page (uses CSS pixels of course)
    canvas.el.style.height = `${h = window.innerHeight}px`; //
    canvas.el.width = w * window.devicePixelRatio;   // the pixel resolution of the canvas
    canvas.el.height = h * window.devicePixelRatio;  //
}
