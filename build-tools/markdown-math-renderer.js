/**
 * This script replaces all '$$' and '$' math formulas in the markdown files with html '<img />' tags, appending the original formula in a html comment.
 */


const path = require('path');
const fs = require('fs');


const dirPath = path.join(__dirname, '..');
const markdownFiles = fs.readdirSync(dirPath).filter(fname => fname.match(/\.md$/));

for (let fname of markdownFiles) {
    const filePath = path.join(dirPath, fname);

    let fileContent = fs.readFileSync(filePath, { encoding: 'utf-8' });

    const multiLineFormulas = fileContent.match(/\$\$(?!-->)[^\$]*\$\$/g) || [];  // matches $$ formulas
    const singleLineFormulas = fileContent.match(/(?<!\$)\$[^\$]+\$(?!\$)/g) || [];  // matches $ formulas

    multiLineFormulas.forEach(multiLineFormula => {
        const formulaBody = multiLineFormula.match(/^\$\$([^\$]*)\$\$$/)[1];
        fileContent = fileContent.replace(multiLineFormula, `<div align="center"><img src="https://latex.codecogs.com/svg.latex?${encodeURIComponent(formulaBody)}" /></div><!--${formulaBody}--><br>`);
    });

    singleLineFormulas.forEach(singleLineFormula => {
        const formulaBody = singleLineFormula.match(/^\$([^\$]*)\$$/)[1];
        fileContent = fileContent.replace(singleLineFormula, `<img src="https://latex.codecogs.com/svg.latex?${encodeURIComponent(formulaBody)}" /><!--${formulaBody}-->`);
    });

    // overwrite file
    fs.writeFileSync(filePath, fileContent);
}
