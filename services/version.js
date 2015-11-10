const package = require(__dirname + '/../package.json');

module.exports = {
    getVersion : () => package.version
}
