'use strict';

const _package = require(__dirname + '/../package.json');

module.exports = {
    getVersion : () => _package.version
}
