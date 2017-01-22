/**
 * Implements a tooltip, which does not contain the text it is about to show, but instead generates from a function, on mouse
 * hover time. This is useful for cases where one doesn't want the tooltip's content to be easily accessible to crawlers.
 */

'use strict';

import React from 'react';

class SecretTooltip extends React.Component {

    constructor(props) {
        super(props);

        this.state = {};
    }

    onMouseEnter() {
        this.state.tooltipText = this.props.fnTooltip();
        this.setState(this.state);
    }

    onMouseLeave() {
        delete this.state.tooltipText;
        this.setState(this.state);
    }

    render() {
        return (
            <span className="tooltip"
                  onMouseEnter={this.onMouseEnter.bind(this)}
                  onMouseLeave={this.onMouseLeave.bind(this)}>
                {this.props.children}
                <span className="tooltiptext">{this.state.tooltipText}</span>
            </span>
        );
    }
}

export default SecretTooltip;
