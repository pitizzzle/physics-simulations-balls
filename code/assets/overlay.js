
/**
 * @typedef Program
 * @property {string} buttonLabel
 * @property {boolean} isDefaultProgram
 * @property {Function} callback_setup
 * @property {Function} callback_deconstruct
 */

/**
 * @param {Array<Program>} programs
 */

function configureOverlay(programs) {

    let activeProgram;

    function launchProgram(program) {
        if (activeProgram) {  // deconstruct currently still running program
            activeProgram.callback_deconstruct();
        }
        activeProgram = program;
        activeProgram.callback_setup();
    }

    // launch the default program (if specified)
    let defaultProgram = programs.filter(p => p.isDefaultProgram)[0];
    if (defaultProgram) {
        launchProgram(defaultProgram);
    }
    else {
        console.log(`warning: you have not specified a default program`);
    }

    // inject overlay into the page, including the buttons
    const overlay = document.createElement('div');
    overlay.id = 'overlay';  // needed for css stylesheet selector 'div#overlay'
    for (let p of programs) {
        const programButton = document.createElement('button');
        programButton.innerHTML = p.isDefaultProgram ? `⭐ ${p.buttonLabel} ⭐` : p.buttonLabel;
        programButton.addEventListener('click', () => {
            launchProgram(p);
        });
        overlay.appendChild(programButton);
    }
    document.body.appendChild(overlay);
}
