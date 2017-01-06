/**
 * Loader for the ECMA6 server implementation and server configurator
 */

'use strict';

require('babel-register');

var winston = require('winston');
winston.level = 'debug';

require('./server/main');
