import core from '@actions/core';
const { promises: fs } = require('fs');

try {
    const path = core.getInput('path');
    const encoding = core.getInput('encoding');
    const regex = core.getInput('regex');

    if (encoding == undefined)
        encoding = 'utf8';
    if (regex == undefined)
        regex = '[áéíóúÁÉÍÓÚñÑ]';

    let content = await fs.readFile(path, encoding);
    let re = new RegExp(regex);
    core.setOutput('valid', re.test(content));
} catch (error) {
    core.setFailed(error.message);
}
