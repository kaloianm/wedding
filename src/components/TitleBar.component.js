/**
 * Implements the title bar with the bride and groom names and the wedding date.
 *
 * id (string): Identifier for the element
 */

'use strict';

import React from 'react';

class TitleBar extends React.Component {

    render() {
        return (
            <header id={this.props.id} className="titlebar">
                <span className="bride-name">Jocelyn</span>
                <span className="groom-name">&nbsp;
                    <span>&amp;</span> Kal
                </span>
                <div className="wedding-date">31<sup>st</sup> AUGUST, 2017</div>
            </header>
        );
    }
}

export default TitleBar;
