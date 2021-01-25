/**
 * @callback renderLoop_callback
 * @param {Number} dt time step in milliseconds
 */

/**
 * This function invokes the given 'callback' function in regular intervals, in sync if browsers render cycle.
 * The target frequency is 60fps, but frequency is automatically throttled under load.
 * See https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame for more details.
 * @param {renderLoop_callback} callback
 * @param {Object} [options]
 * @param {Number} [options.dt_perFrame] the size of this is kind of arbitrary, it just has to be in right proportion to the other units
 * @param {Number} [options.subSteps] the number of time-sub-divisions within each frame
 * @param {Number} [options.speedFactor] multiplies playback speed, without changing simulation accuracy
 */
function renderLoop(
    {
        dt_perFrame = 1000 / 60,  // the size of this is kind of arbitrary, it just has to be in right proportion to the other units!  // we choose '1000/60' because then the time elapsed will resemble the time elapsed in reality in milliseconds (which is not relevant, but hey! xD)
        subSteps_perFrame = 20,
        speedFactor = 1,
    },
    callback
) {

    const dt_perStep = dt_perFrame / subSteps_perFrame;
    subSteps_perFrame *= speedFactor;  // we apply 'speedFactor' to the number of steps (instead of to the dt of the steps), because if we changed the dt of the steps the accuracy of the simulation would be change

    _loop();
    function _loop() {
        for (let i = 1; i <= subSteps_perFrame; i++) {
            callback(dt_perStep);
        }
        requestAnimationFrame(_loop);
    }

}
