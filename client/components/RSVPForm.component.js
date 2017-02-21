/**
 * Implements the reservation form wizard and interaction with the server.
 * 
 * id (string): Identifier for the element
 */

'use strict';

import APIClient from '../api/api-client';
import isEmail from 'validator/lib/isEmail';
import React from 'react';

// For compatibility with older Internet Explorer browsers
require('es6-object-assign').polyfill();

/**
 * Implements the RSVP form.
 */
class RSVPForm extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            guestInfo: {},
            guestPlusOneInfo: {},

            submitStatus: null,
        };
    }

    render() {
        var self = this;

        const guestInfo = this.state.guestInfo;
        const guestPlusOneInfo = this.state.guestPlusOneInfo;

        return (
            <div id={this.props.id} className="wizard-form">
                <p>Please complete the form below to let us know if you will be joining us in Hvar and to inform us of your dietary restrictions
                   if any.
                </p>
                <br />

                <p>Fields marked with * are mandatory.</p>
                <br />

                {this.renderTextInput('name', 'Name*:', guestInfo)}
                {this.renderTextInput('email', 'Email*:', guestInfo)}
                <br />

                {this.renderRadioInput(
                    'attendance',
                    'Attendance*:',
                    [
                        { label: 'I WILL BE ATTENDING', value: 'yes' },
                        { label: 'I WILL NOT BE ATTENDING', value: 'no' }
                    ],
                    guestInfo)
                }
                <br />

                {guestInfo.attendance === 'yes' &&
                    <div>
                        {this.renderRadioInput(
                            'meal',
                            'Entreé preference*:',
                            [
                                { label: 'I EAT MEAT', value: 'meat' },
                                { label: 'I DO NOT EAT MEAT', value: 'vegetarian' }
                            ],
                            guestInfo)}
                        <br />
                        {this.renderTextInput(
                            'dietaryRestrictions',
                            'Other dietary restrictions?',
                            guestInfo)}
                        <br />
                        {this.renderRadioInput(
                            'attendance',
                            'Attendance*:',
                            [
                                { label: 'I WILL BE BRINGING A PLUS ONE', value: 'yes' },
                                { label: 'I WILL NOT BE BRINGING A PLUS ONE', value: 'no' }
                            ],
                            guestPlusOneInfo)}
                    </div>
                }
                <br />

                {guestInfo.attendance === 'yes' && guestPlusOneInfo.attendance === 'yes' &&
                    <div>
                        {this.renderTextInput('name', 'Name:', guestPlusOneInfo)}
                        <br />
                        {this.renderRadioInput(
                            'meal',
                            'Entreé preference*:',
                            [
                                { label: 'I EAT MEAT', value: 'meat' },
                                { label: 'I DO NOT EAT MEAT', value: 'vegetarian' }
                            ],
                            guestPlusOneInfo)}
                        <br />
                        {this.renderTextInput(
                            'dietaryRestrictions',
                            'Other dietary restrictions?',
                            guestPlusOneInfo)}
                    </div>
                }
                <br />

                {this.state.submitStatus &&
                    <div className={this.state.submitStatus.isError ? 'alert-error' : 'alert-success'}>
                        <span className="alert-closebtn"
                            onClick={() => { self.state.submitStatus = null; self.setState(self.state); }}>&times;</span>
                        {this.state.submitStatus.message}
                    </div>
                }
                <br />

                <button onClick={this.submitRSVP.bind(this)}>Submit</button>
            </div>
        );
    }

    /**
     * Validates that the form can be submitted and returns null on success or a string message with
     * the validation error otherwise.
     */
    validate() {
        function validateGuest(info) {
            if (!info.name || info.name.trim().empty)
                return 'Name cannot be left empty';
            if (!info.email || info.email.trim().empty)
                return 'Email cannot be left empty';
            if (!isEmail(info.email))
                return 'Email format is not valid'
            if (!info.attendance)
                return 'Please specify whether you or your guest will be joining us';
            if (info.attendance === 'yes' && !info.meal)
                return "Please let us know of your or your guest's meal preference";
            return null;
        }

        const guestInfo = this.state.guestInfo;
        if (validateGuest(guestInfo))
            return validateGuest(guestInfo);

        const guestPlusOneInfo = this.state.guestPlusOneInfo;
        if (guestPlusOneInfo.attendance === 'yes') {
            if (validateGuest(guestPlusOneInfo))
                return validateGuest(guestPlusOneInfo);
        }

        return null;
    }

    /**
     * Renders a text input with a label. Gets its state and updates the specified @stateObj.
     */
    renderTextInput(name, label, stateObj) {
        const self = this;
        const value = stateObj[name];

        function onChange(event) {
            stateObj[name] = event.target.value;
            self.setState(self.state);
        }

        return (
            <div className="rsvp-section">
                <label>{label}</label>
                <input type="text"
                    name={name}
                    value={value}
                    onChange={onChange} />
            </div>
        );
    }

    /**
     * Renders a text input with a label and the specified set of options. Gets its state and
     * updates the specified @stateObj.
     * 
     * The format of the options is an array of JSON objects with the following properties:
     *  label - Label of the option
     *  value - Value of the option to be set on the @stateObj
     */
    renderRadioInput(name, label, options, stateObj) {
        const self = this;
        const value = stateObj[name];

        function onChange(event) {
            stateObj[name] = event.target.value;
            self.setState(self.state);
        }

        return (
            <div className="rsvp-section">
                <label>{label}</label>
                {
                    options.map(function (option) {
                        return (
                            <div key={option.value}>
                                <input type="radio"
                                    value={option.value}
                                    checked={value === option.value}
                                    onChange={onChange} />
                                <label>{option.label}</label>
                            </div>
                        );
                    })
                }
            </div>
        );
    }

    /**
     * Retrieves the client for the web service API.
     */
    getAPIClient() {
        return new APIClient(document.location.protocol + '//' + document.location.host + '/api/rsvp');
    }

    /**
     * Takes the collected wizard input across all forms and submits it to the database.
     */
    submitRSVP() {
        const self = this;
        const state = this.state;

        if (this.validate()) {
            self.state.submitStatus = { isError: true, message: this.validate() };
            self.setState(self.state);
            return;
        }

        var guestInfo = Object.assign({}, state.guestInfo);
        var guestPlusOneInfo = Object.assign({}, state.guestPlusOneInfo);

        // TODO: This is a hack, find a way to properly construct the request
        const willAttend = guestInfo.attendance === 'yes';
        delete guestInfo['attendance'];

        if (guestPlusOneInfo.attendance === 'yes') {
            delete guestPlusOneInfo['attendance'];
        }
        else {
            guestPlusOneInfo = undefined;
        }

        this.getAPIClient().rsvp(guestInfo, willAttend, guestPlusOneInfo, function (errorMsg, successMsg) {
            if (errorMsg) {
                self.state.submitStatus = { isError: true, message: errorMsg };
                self.setState(self.state);
            } else {
                self.state.submitStatus = {
                    isError: false, message: 'Your response was recorded successfully. Thank you!'
                };
                self.setState(self.state);
            }
        });
    }
}

export default RSVPForm;
