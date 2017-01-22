/**
 * Main entry point for the express server.
 */

'use strict';

import winston from 'winston';
import express from 'express';

// Use debug logging
winston.level = 'debug';

import serverAPI from './api-server';

const webApp = express();

webApp.use('/api', serverAPI);
webApp.use('/rsvp', function(req, res) {
    res.redirect('/#rsvp');
});
webApp.use('/', express.static('public'));

var server = webApp.listen(process.env.PORT || 8000);
