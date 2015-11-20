'use strict';

const Acacia = require('acacia');

const conf = {
    config: {
        path: 'config/'
    },
    services: {
        path: 'services'
    },
    resources: {
        path: 'resources'
    }
}


const config = require('config-helper')(conf.config);

const app = new Acacia(config);

app
    .services(conf.services)
    .resources(conf.resources)
    .listen();
