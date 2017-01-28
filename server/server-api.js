/**
 * Implements the server API.
 */

'use strict';

import bodyParser from 'body-parser';
import express from 'express';
import mongoose from 'mongoose';
import uuidV1 from 'uuid/v1';
import winston from 'winston';

import RSVP from './models/RSVP';

// Setup the web server handlers
const ServerAPI = express();

// Ensure we can parse JSON-encoded requests
ServerAPI.use(bodyParser.json());

// Help for the web service
ServerAPI.all('/', function (req, res) {
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
ServerAPI.post('/rsvp', function (req, res) {
    const requestId = uuidV1();
    winston.log('debug', 'rsvp request', requestId, req.body);

    var guestRSVPDocument = {
        rsvpId: requestId,
        guest: req.body.guest,
        willAttend: req.body.willAttend,
    };

    if (req.body.guestPlusOne) {
        guestRSVPDocument.guestPlusOne = req.body.guestPlusOne;
    }

    new RSVP(guestRSVPDocument).save(function (err) {
        var code = 200;
        var responseJson = {
            requestId: requestId,
        }

        if (err) {
            winston.log('info', 'mongodb write failed', requestId, req.body, err);
            code = 500;
            responseJson.error = 'Failed to persist reservation to database';
        }

        res.status(code).json(responseJson);

        winston.log('debug', 'rsvp response', requestId, responseJson);
    });
});

export default ServerAPI;
