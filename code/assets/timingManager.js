/**
 * callback function that is invoked to simulate a new timestep. it is passed the size 'dt' of the time step.
 * @callback callback_simulateOneStep
 * @param {Number} dt size of the time step
 */
/**
 * callback function that is invoked to render a new frame.
 * @callback callback_renderFrame
 */

/**
 * The 'renderLoop' function manages everything concerning timing.
 * 
 * Its core loop uses 'window.requestAnimationFrame', which has a target
 * frequency of 60Hz. In each core loop iteration, a certain number of
 * time steps is simulated (with fixed/constant 'dt'), and thereafter a
 * canvas re-render is issued.
 * 
 * Both actions (simulation time step and re-render) are remotely
 * triggered via respective callback functions.
 * 
 * 'window.requestAnimationFrame' automatically throttles down the
 * invocation frequency if the page has too much computational load.
 * In this case, our simulation/animation would simply slow down,
 * because the time step size 'dt' remains constant all the time,
 * and the frequency of performing the time steps (and the frequency
 * of rendering new frames) would decrease.
 * See docs about 'window.requestAnimationFrame' here: 
 * https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame
 * 
 * 
 * @param {Object} options
 * @param {callback_simulateOneStep} options.callback_simulateOneStep callback function that is invoked to simulate a new timestep. it is passed the size 'dt' of the time step.
 * @param {callback_renderFrame} options.callback_renderFrame callback function that is invoked to render a new frame.
 * @param {Number} options.dt_perFrame the size of this is kind of arbitrary, it just has to be in right proportion to the other units (like velocities and accelerations)
 * @param {Number} [options.subSteps_perFrame] the number of substeps each frame is divided in
 * @param {Number} [options.speedFactor] multiplies playback speed, without changing simulation accuracy
 * @returns {Function} the deconstructor function
 */

function configureTimingManager({
    callback_simulateOneStep,
    callback_renderFrame,
    subSteps_perFrame = 1,
    speedFactor = 1,
}) {

    const dt_perStep = 1 / subSteps_perFrame;
    subSteps_perFrame *= speedFactor;  // we apply 'speedFactor' to the number of steps (instead of to 'dt_perStep'), because if we changed the dt of the steps the accuracy of the simulation would change; we don't want to mess with that
    subSteps_perFrame = Math.max(subSteps_perFrame, 1); // '0.9' for example would lead to no updates at all, we want to prevent that

    let terminated = false;

    function coreLoop() {

        if (terminated) {
            return; // prevents any further code from executing, including the recursive call to 'window.requestAnimationFrame'
        }

        for (let i = 1; i <= subSteps_perFrame; i++) {
            callback_simulateOneStep(dt_perStep);
        }
        callback_renderFrame();

        // schedule next invocation of 'frameLoop'
        window.requestAnimationFrame(coreLoop);
    }

    // first invocation of 'coreLoop', from there on it recursively invokes itself
    coreLoop();

    return function deconstruct() {
        terminated = true;
    };

}
