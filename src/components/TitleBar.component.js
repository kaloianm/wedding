/**
 * Implements the title bar with the bride and groom names and the wedding date.
 */

'use strict';

import React from 'react';

class TitleBar extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <header>
                    <div className="titlebar">
                        <span className="bride-name">Jocelyn</span>
                        <span className="groom-name">&nbsp;
                            <span>&amp;</span> Kal
                        </span>
                        <div className="wedding-date">31<sup>st</sup> AUGUST, 2017</div>
                    </div>
                </header>
            </div>
        );
    }
}

export default TitleBar;
