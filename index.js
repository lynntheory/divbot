//external imports
const minimist = require('minimist');

//internal imports
const config = require('./config/config.json');
const error = require('./utils/error');

//module
module.exports = function () {
    const args = minimist(process.argv.slice(2));
    let cmd = args._[0] || 'help';

    //overides
    if (args.version || args.v) {
        cmd = 'version';
    }
    if (args.help || args.h) {
        cmd = 'help';
    }

    //command switchboard
    switch (cmd) {

        //utilities
        case 'version':
            require('./utils/version')(args);
            break;
        case 'help':
            require('./utils/help')(args);
            break;
        case 'about':
            require('./utils/about')(args);
            break;

        //divination commands
        case 'pull':
            require('./apps/pull')(args);
            break;

        //default - if none found
        default:
            error(`"${cmd}" is not a valid command. use help if you need a list of valid commands`, true);
            break;
    }
}