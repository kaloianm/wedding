/**
 * Implements the server API.
 */

'use strict';

import bodyParser from 'body-parser';
import express from 'express';
import mongoose from 'mongoose';
import uuidV1 from 'uuid/v1';
import winston from 'winston';

// Setup mongodb connection and schema
const mongodbUri = process.env.MONGODB_URI || 'mongodb://localhost:27017/jociandkalwedding';

mongoose.connect(mongodbUri, function (err, res) {
    if (err) {
        winston.log('error', 'Failed to connect to mongodb', mongodbUri, err);
    } else {
        winston.log('debug', 'Successfully connected to mongodb', mongodbUri, res);
    }
});

const guestSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: String,
    meal: { type: String, required: true },
    dietaryRestrictions: String,
});

const rsvpSchema = new mongoose.Schema({
    rsvpId: { type: String, required: true },
    date: { type: Date, default: () => Date.now() },
    guest: { type: guestSchema, required: true },
    willAttend: { type: Boolean, required: true },
    guestPlusOne: guestSchema,
});

const RSVP = mongoose.model('rsvp', rsvpSchema);

// Setup the web server handlers
const impl = express();

// Ensure we can parse JSON-encoded requests
impl.use(bodyParser.json());

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

export default impl;
