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
     * @guest (required) / guestPlusOne (optional) - JSON object with the following fields
     *              name (required) - The guest name
     *              meal (required) - The meal for the guest
     * @callbackFn - Function to invoke with the outcome from the RSVP with the following arguments
     *      errorMsg - A message with information about the error which occurred or undefined
     *      response - A response string on success or undefined if an error
     */
    rsvp(guest, guestPlusOne, callbackFn) {
        var requestBody = {
            guest: guest
        };

        if (guestPlusOne) {
            requestBody.guestPlusOne = guestPlusOne;
        }

        console.log(JSON.stringify(requestBody));

        fetch(this._apiUrl, { method: 'POST',  body: requestBody })
            .catch(function (err) {
                callbackFn('Boo, looks like your internizzle is acting up :( Call us?');
            })
            .then(function (res) {
                if (!res.ok) {
                    callbackFn('Boo, something went wrong :( Call us?');
                }
                else {
                    callbackFn(undefined, res);
                }
            });
    }
}

export default APIClient;
