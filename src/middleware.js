const { newGuid, FriendlyDate } = require('./utils');
const { cyan, magenta, green } = require('chalk');

function logger(req, res, next) {
    const { log } = console;
    const fdt = new FriendlyDate(FriendlyDate.now()).toFriendlyDateTime();
    log(`\r\n${green('*'.repeat(50))}`);
    log(cyan(`${fdt} Request '${magenta(req.__reqId)}' received - ${req.headers['user-agent']}`));
    log(green('*'.repeat(50)));
    next();
}

function addIdToRequest(req, res, next) {
    req.__reqId = newGuid();
    next();
}

module.exports = {
    logger,
    addIdToRequest,
}