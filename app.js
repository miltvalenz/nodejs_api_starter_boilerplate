const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const dotenv = require('dotenv');

const api = require('./src/api');
const app = express();

/**
 * Ititializations
 */
dotenv.config();
require('./src/db/database');

/**
 * Middlewares
 */
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

/**
 * Routes
 */
app.use('/api/v1', api());

module.exports = app;
