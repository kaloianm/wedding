/**
 * Implements the server API.
 */

'use strict';

import express from 'express';

const impl = express();

// Help for the web service
impl.all('/', function (req, res) {
    res.status(400).json({ 
        name: 'Kal and Jocelyn\'s wedding website API',
        version: process.env.npm_package_version,
        availableAPIs: {
            rsvp: {
                help: 'Log an RSVP for a couple',
            },
        },
    });
});

// The 'rsvp' command
impl.post('/rsvp', function (req, res) {
    res.status(400).json({});
});

export default impl;
