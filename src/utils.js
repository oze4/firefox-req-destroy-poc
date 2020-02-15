const { yellow, magenta } = require('chalk');

function newGuid() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
        const r = (Math.random() * 16) | 0;
        const v = c === 'x' ? r : (r & 0x3) | 0x8;
        return v.toString(16);
    });
};

class FriendlyDate extends Date {
    toFriendlyDateTime = () => {
        return `${this.toLocaleDateString()} ${this.toLocaleTimeString()}`;
    }
}

function destroyRequest(req, res) {
    console.log(`${yellow(`Destroying Request ${magenta(req.__reqId)}`)}\r\n`);
    req.destroy();
}

function routeNotFound(req, res) {
    res.status(404).send('<h1>Unable to find that</h1>');
}

function helloWorld(req, res) {
    res.status(200).send('<h1 style="color: green">Hello, World!</h1>')
}

module.exports = {
    destroyRequest,
    routeNotFound,
    helloWorld,
    FriendlyDate,
    newGuid,
}