/**
 * Exports a client for the API exposed by the server.
 */

'use strict';

require('es6-promise').polyfill();
require('isomorphic-fetch');

class APIClient {

    constructor(apiUrl) {
        this._apiUrl = apiUrl;
    }

    /**
     * Submits a new RSVP request to the server. Does not require any authentication.
     * 
     * @param guest (required) - JSON
     * @param willAttend (required) - boolean
     * @param guestPlusOne (optional) - JSON object
     * @param @callbackFn - Function to invoke with the outcome from the RSVP operation with the
     *  following arguments:
     *      errorMsg - Message string with information about the error which occurred or undefined
     *      response - Response string on success or undefined if an error
     */
    rsvp(guest, willAttend, guestPlusOne, callbackFn) {
        const requestBody = {
            guest: guest,
            willAttend: willAttend,
        };

        if (guestPlusOne) {
            requestBody.guestPlusOne = guestPlusOne;
        }

        fetch(this._apiUrl, {
            method: 'POST',
            body: JSON.stringify(requestBody),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
            .catch(function (err) {
                callbackFn('Boo, looks like your internizzle is acting up, but there might also be a bug :( Call us?');
            })
            .then(function (res) {
                if (!res.ok) {
                    callbackFn('Boo, something went wrong, most likely a bug :( Call us?');
                }
                else {
                    callbackFn(undefined, res);
                }
            });
    }
}

export default APIClient;
