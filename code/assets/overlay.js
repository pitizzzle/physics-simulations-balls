
/**
 * @typedef Program
 * @property {string} buttonLabel
 * @property {boolean} isDefaultProgram
 * @property {Function} callback_setup
 */

/**
 * @param {Array<Program>} programs
 */

window.configureOverlay = function (programs) {

    // launch the default program (if specified)
    let defaultProgram = programs.filter(p => p.isDefaultProgram)[0];
    if (defaultProgram) {
        console.log(`start default program: "${defaultProgram.buttonLabel}"`);
        defaultProgram.callback_setup();
    }
    else {
        console.log(`warning: you have not specified a default program`);
    }

    // inject overlay into the page, including the buttons
    const overlay = document.createElement('div');
    overlay.id = 'overlay';  // needed for css stylesheet selector 'div#overlay'
    for (let p of programs) {
        const programButton = document.createElement('button');
        programButton.innerHTML = p.isDefaultProgram ? `★ ${p.buttonLabel} ★` : p.buttonLabel;
        programButton.addEventListener('click', () => {
            console.log(`start program: "${p.buttonLabel}"`);
            p.callback_setup();
        });
        overlay.appendChild(programButton);
    }
    document.body.appendChild(overlay);
};
