/**
 * Implements the title bar with the bride and groom names and the wedding date.
 */

'use strict';

import React from 'react';

const styles = {
    bride: {
        fontFamily: 'EdwardianScrAltITCTT',
        fontSize: '11em',
        lineHeight: '100%',
    },
    groom: {
        fontFamily: 'FuturaLTBook',
        fontSize: '5em',
        lineHeight: '100%',  
    },
    weddingDate: {
        fontFamily: 'FuturaLTBook',
        fontSize: '2.5em',
        marginTop: '15px',
        marginBottom: '20px',
    },
};

class TitleBar extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <header>
                    <div className="titlebar">
                        <span style={styles.bride}>Jocelyn</span>
                        <span style={styles.groom}>&nbsp;
                            <span style={styles.ampersand}>&amp;</span> Kal
                        </span>
                        <div style={styles.weddingDate}>31<sup>st</sup> AUGUST, 2017</div>
                    </div>
                </header>
            </div>
        );
    }
}

export default TitleBar;
