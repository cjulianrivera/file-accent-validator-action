'use strict'

const core = require('@actions/core')
const { promises: fs } = require('fs')

const main = async () => {
    const path = core.getInput('path');
    console.log(`path:${path}`);
    const encoding = core.getInput('encoding');
    console.log(`encodig:${encoding}`);
    const regex = core.getInput('regex');
    console.log(`regex:${regex}`);

    if (encoding == undefined)
        encoding = 'utf8';
    if (regex == undefined)
        regex = '[áéíóúÁÉÍÓÚñÑ]';

    let content = await fs.readFile(path, encoding);
    let re = new RegExp(regex);
    console.log(`content:${content}`);
    let valid = re.test(content);
    core.setOutput('valid', valid);
    if (!valid)
        core.setFailed(`The file ${path} contains invalid characters`);

};

main().catch(err => {
    core.setFailed(err.message)
});
