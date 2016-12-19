/**
 * Main entry point for the express server.
 */

'use strict';

import express from 'express';

const webApp = express();

webApp.use('/', express.static('public'));

var server = webApp.listen(process.env.PORT || 8000);
