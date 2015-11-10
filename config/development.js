'use strict';

const path = require('path');

const root = path.resolve(__dirname ,'../');

module.exports = {
    name: 'Acacia example',
    port : 4661,
    path : {
        services : root + '/services',
        resources : root + '/resources'
    }
}