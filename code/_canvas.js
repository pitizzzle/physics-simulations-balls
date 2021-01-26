
const canvas = {

    /** the actual <canvas> DOM element */
    el: document.querySelector('canvas'),

    /** the width of the canvas, in CSS pixels */
    w: undefined,

    /** the height of the the canvas, in CSS pixels */
    h: undefined,

};


// === canvas resolution and CSS width+height ===
resizeCanvas();
window.addEventListener('resize', resizeCanvas);
function resizeCanvas() {
    canvas.el.style.width = `${w = window.innerWidth}px`;   // the canvas size as an Element on the page (uses CSS pixels of course)
    canvas.el.style.height = `${h = window.innerHeight}px`; //
    canvas.el.width = w * window.devicePixelRatio;   // the pixel resolution of the canvas
    canvas.el.height = h * window.devicePixelRatio;  //
}


// === canvas utility methods ===

canvas.ctx = canvas.el.getContext('2d');


/**
 * @param {Object} [options]
 * @param {boolean} [options.translucent] preserve old frames with lower opacity
 */
canvas.clear = function ({ translucent = false } = {}) {
    if (translucent) {
        canvas.ctx.fillStyle = 'rgba(255,255,255,0.01)';
        canvas.ctx.fillRect(0, 0, canvas.el.width, canvas.el.height);
    }
    else {
        canvas.ctx.clearRect(0, 0, canvas.el.width, canvas.el.height);
    }
};


/**
 * @param {number} x circle center x in CSS pixels
 * @param {number} y circle center y in CSS pixels
 * @param {number} radius circle radius in CSS pixels
 * @param {string} fillStyle
 */
canvas.fillCircle = function (x, y, radius, fillStyle) {
    [x, y, radius] = [x, y, radius].map(v => v * window.devicePixelRatio); // convert CSS pixels -> canvas pixels
    canvas.ctx.beginPath();
    canvas.ctx.ellipse(x, y, radius, radius, 0, 0, 2 * Math.PI);  // [  ctx.ellipse(x, y, radiusX, radiusY, rotation, startAngle, endAngle [, anticlockwise]);  ]
    canvas.ctx.fillStyle = fillStyle;
    canvas.ctx.fill();
};




