const express = require('express');
const chalk = require('chalk');

const { logger, addIdToRequest } = require('./middleware');
const { destroyRequest, routeNotFound, helloWorld } = require('./utils');

const initializeExpress = () => {
    const app = express();
    app.set('port', 3000);

    app.use(addIdToRequest);
    app.use(logger);

    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));

    app.get('/', destroyRequest);
    app.get('/hello', helloWorld);

    app.use(routeNotFound);

    const server = app.listen(app.get('port'), () => {
        console.log(chalk.green(`Server listening on port ${app.get('port')}`));
    });

    return server;
};

const server = initializeExpress();

module.exports = { server };