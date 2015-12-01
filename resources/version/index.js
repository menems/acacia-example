'use strict';

const Router = require('koa-66');
const router = module.exports = new Router();

router.get('/', ctx => ctx.body = ctx.services.get('version').getVersion());
