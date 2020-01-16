const { Router } = require('express');
const DevRoutes = require('./routes/Dev.routes');

const routes = Router();

DevRoutes(routes);

module.exports = routes;
