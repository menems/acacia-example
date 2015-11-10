'use strict';

const Acacia = require('acacia');
const config = require('config-helper')();

const app = new Acacia(config);

app
    .initServices()
    .initResources()
    .listen();
