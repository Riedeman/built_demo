const express = require('express');
const smarts = require('./smarts.js');

let apiRoutes = express.Router();

apiRoutes.get('/users', smarts.getUsers);

exports.router = apiRoutes;
