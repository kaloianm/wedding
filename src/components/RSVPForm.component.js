/**
 * Implements the reservation form wizard and interaction with the server.
 */

'use strict';

import APIClient from '../api/api-client';
import Col from 'react-bootstrap/lib/Col';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import Grid from 'react-bootstrap/lib/Grid';
import React from 'react';
import Row from 'react-bootstrap/lib/Row';

/**
 * Implements the RSVP form.
 */
class RSVPForm extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            guestInfo: Object.seal({
                name: "",
                meal: null,
            }),
            guestPlusOneInfo: null,
            
            submitMessage: null,
        };
    }

    render() {
        const guestPlusOneInfo = this.state.guestPlusOneInfo;

        return (
            <div className="wizard-form">
                <Grid>
                    {this.renderGuestRSVPForm(this.state.guestInfo)}
                    <Row>
                        <Col className="twelve columns">
                            &nbsp;
                            <div>
                                <input type="checkbox"
                                    checked={guestPlusOneInfo !== null}
                                    onChange={this.onToggleGuestPlusOne.bind(this)} />
                                Are you bringing a plus one?
                            </div>
                        </Col>
                    </Row>
                    {guestPlusOneInfo &&
                        this.renderGuestRSVPForm(this.state.guestPlusOneInfo)}
                    <Row>
                        <Col className="twelve columns">
                            &nbsp;
                            {this.state.submitMessage &&
                                <div>
                                    {this.state.submitMessage}
                                </div>}
                            &nbsp;
                            <button onClick={this.submitRSVP.bind(this)}>Submit</button>
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }

    /**
     * Invoked when the guest's plus one checkbox is clicked. Shows or hides the guest plus one box.
     */
    onToggleGuestPlusOne() {
        if (this.state.guestPlusOneInfo === null) {
            this.state.guestPlusOneInfo = Object.seal({
                name: "",
                meal: null,
            });
        } else {
            this.state.guestPlusOneInfo = null;
        }

        this.setState(this.state);
    }

    /**
     * Renders the RSVP form for a single guest.
     */
    renderGuestRSVPForm(rsvpState) {
        const self = this;
        const name = rsvpState.name;
        const meal = rsvpState.meal;

        // Handles the changes to the guest's name
        function onChangeName(event) {
            rsvpState.name = event.target.value;
            self.setState(self.state);
        }

        // Handles the changes to the guest's dietary restrictions
        function onChangeMeal(event) {
            rsvpState.meal = event.target.value;
            self.setState(self.state);
        }

        return (
            <div className="guest-rsvp">
                <Row>
                    <Col className="twelve columns">
                        <ControlLabel>What is the guest name?</ControlLabel>
                    </Col>
                </Row>
                <Row>
                    <Col className="twelve columns">
                        <input type="text"
                            value={name}
                            onChange={onChangeName} />
                    </Col>
                </Row>
                &nbsp;
                <Row>
                    <Col className="twelve columns">
                        <ControlLabel>Any dietary restrictions?</ControlLabel>
                    </Col>
                </Row>
                <Row>
                    <Col className="one-half column">
                        <div>
                            <input type="radio"
                                value="vegetarian"
                                checked={meal === "vegetarian"}
                                onChange={onChangeMeal} />
                            Vegetarian
                        </div>
                    </Col>
                    <Col className="one-half column">
                        <div>
                            <input type="radio"
                                value="kosher"
                                checked={meal === "kosher"}
                                onChange={onChangeMeal} />
                            Kosher
                        </div>
                    </Col>
                </Row>
            </div>
        );
    }

    getAPIClient() {
        return new APIClient(document.location.protocol + '//' + document.location.host + '/api/rsvp');
    }

    /**
     * Takes the collected wizard input across all forms and submits it to the database.
     */
    submitRSVP() {
        const self = this;
        const state = this.state;

        this.getAPIClient().rsvp(state.guestInfo, state.guestPlusOneInfo, function (errorMsg, successMsg) {
            if (errorMsg) {
                self.state.submitMessage = errorMsg;
                self.setState(self.state);
            } else {
                self.state.submitMessage = "Yay, we can't wait to see you!";
                self.setState(self.state);
            }
        });
    }
}

export default RSVPForm;
