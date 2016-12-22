/**
 * Implements the reservation form wizard and interaction with the server.
 */

'use strict';

import Col from 'react-bootstrap/lib/Col';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import Grid from 'react-bootstrap/lib/Grid';
import React from 'react';
import Row from 'react-bootstrap/lib/Row';

class FindNameForm extends React.Component {
    render() {
        const name = this.props.wizardState.name;
        const onChange = this.props.wizardState.onChangeName;

        return (
            <span>
                <Row>
                    <Col className="twelve columns">
                        <ControlLabel>Please enter the name from your invitation:</ControlLabel>
                    </Col>
                </Row>
                <Row>
                    <Col className="twelve columns">
                        <input type="text" value={name} onChange={onChange} />
                    </Col>
                </Row>
            </span>
        );
    }
}

class PlusOneForm extends React.Component {
    render() {
        const guest = this.props.wizardState.guest;
        const onChange = this.props.wizardState.onChangeGuest;

        return (
            <span>
                <Row>
                    <Col className="twelve columns">
                        <ControlLabel>Are you bringing a guest?</ControlLabel>
                    </Col>
                </Row>
                <Row>
                    <Col className="twelve columns">
                        <input type="text" value={guest} onChange={onChange} />
                    </Col>
                </Row>
            </span>
        );
    }
}

class SelectMealForm extends React.Component {
    render() {
        const meal = this.props.wizardState.meal;
        const onChange = this.props.wizardState.onChangeMeal;

        return (
            <span>
                <Row>
                    <Col className="twelve columns">
                        <ControlLabel>What kind of main course would you like?</ControlLabel>
                    </Col>
                </Row>
                <Row>
                    <Col className="one-half column">
                        <div>
                            <label>
                                <input type="radio"
                                       name="meal"
                                       value="meat"
                                       checked={meal === "meat"}
                                       onChange={onChange} />
                                Meat
                            </label>
                        </div>
                    </Col>
                    <Col className="one-half column">
                        <div>
                            <label>
                                <input type="radio"
                                       name="meal"
                                       value="vegetarian"
                                       checked={meal === "vegetarian"}
                                       onChange={onChange} />
                                Vegetarian
                            </label>
                        </div>
                    </Col>
                </Row>
            </span>
        );
    }
}

// Constants for the wizard direction of movement
const PREV = -1;
const NEXT = +1;

/**
 * The main RSVP wizard form implementation.
 */
class RSVPForm extends React.Component {

    constructor(props) {
        super(props);

        // The set of wizard forms
        this.wizardForms = Object.freeze([
            FindNameForm,
            PlusOneForm,
            SelectMealForm,
        ]);

        this.state = {
            currentPageIdx: 0,
            wizardState: Object.seal({
                name: "",
                guest: "",
                meal: null,

                onChangeName: this.onChangeWizardState.bind(this, "name"),
                onChangeGuest: this.onChangeWizardState.bind(this, "guest"),
                onChangeMeal: this.onChangeWizardState.bind(this, "meal"),
            }),
        };
    }

    render() {
        return (
            <div>{this.renderCurrentWizardForm()}</div>
        );
    }

    /**
     * Returns a boolean indicating whether the wizard is currently at its first form.
     */
    isAtFirstForm() {
        return this.state.currentPageIdx == 0;
    }

    /**
     * Returns a boolean indicating whether the wizard is currently at its last form.
     */
    isAtLastForm() {
        return this.state.currentPageIdx == this.wizardForms.length - 1;
    }

    /**
     * Changes the current wizard form to next or previous. If the wizard is at the first form
     * already, PREV will have no effect and similarly NEXT will have no effect if the wizard is at
     * the last form.
     * 
     * @param direction A value of -1/+1 indicating whether to go to the previous or the next form.
     *                  Use the PREV or NEXT constants for better readability.
     */
    changeForm(direction) {
        if (direction < 0 && this.isAtFirstForm())
            return;

        if (direction > 0 && this.isAtLastForm())
            return;

        var newState = this.state;
        newState.currentPageIdx += direction;
        this.setState(newState);
    }

    /**
     * Takes the collected wizard input across all forms and submits it to the database.
     */
    submitWizard() {
        alert(JSON.stringify(this.state.wizardState));
    }

    /**
     * Callback to be invoked whenever one of the wizard's forms change any of the properties.
     */
    onChangeWizardState(prop, e) {
        const newState = this.state;
        newState.wizardState[prop] = e.target.value;
        this.setState(newState);
    }

    /**
     * Uses the current state to decide which form from the wizard to render.
     */
    renderCurrentWizardForm() {
        const state = this.state;
        const wizardState = state.wizardState;

        var visibleForms = [];
        for (var i = 0; i < state.currentPageIdx + 1; i++) {
            const WizardForm = this.wizardForms[i];
            visibleForms.push(
                <div key={i}>
                    <WizardForm wizardState={wizardState} />
                    &nbsp;
                </div>
            );
        }

        return (
            <div className="wizard-form">
                &nbsp;
                <Grid>
                    {visibleForms}
                    <Row>
                        <Col className="one-half column">
                            &nbsp;
                            {
                                <button type="button" disabled={this.isAtFirstForm()} onClick={this.changeForm.bind(this, PREV)}>
                                    &larr;
                                </button>
                            }
                        </Col>
                        <Col className="one-half column">
                            &nbsp;
                            {this.isAtLastForm() ?
                                <button type="button" onClick={this.submitWizard.bind(this)}>
                                    DONE
                                </button>
                                :
                                <button type="button"  onClick={this.changeForm.bind(this, NEXT)}>
                                    &rarr;
                                </button>
                            }
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}

export default RSVPForm;
