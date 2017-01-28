/**
 * Main entry point for the express server.
 */

'use strict';

import express from 'express';
import UA from 'universal-analytics';
import winston from 'winston';

// Use debug logging
winston.level = 'debug';

import serverAPI from './api-server';

const webApp = express();

if (process.env.GOOGLE_ANALYTICS_ACCOUNT_ID) {
    winston.log('info', 'Google analytics configuration detected. Enabling analytics.');

    webApp.use(
        '/',
        UA.middleware(process.env.GOOGLE_ANALYTICS_ACCOUNT_ID, { cookieName: '_ga' }),
        function (req, res, next) {
            if (req.path === '/') {
                const visitor = req.visitor;
                const uaData = {
                    ds: 'web',
                    dp: '/',
                    uip: req.ip,
                    ua: req.headers['user-agent'],
                };

                visitor.pageview(uaData, (err) => {
                    if (err) {
                        winston.log('info', 
                            'Failed to post analytics data due to',
                            JSON.stringify(err), visitor, JSON.stringify(uaData));
                    }
                });
            }

            next('route');
        });
}

webApp.use('/api', serverAPI);
webApp.use(express.static('public'));

const webAppPort = process.env.PORT || 8000;

var server = webApp.listen(webAppPort, () => {
    winston.log('info', 'Server listening on port ' + webAppPort);
});
