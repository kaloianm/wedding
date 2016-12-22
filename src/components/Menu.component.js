/**
 * Implements a menu. Accepts the following properties:
 *
 * id (string): Identifier for the element
 * items: [ { label: string,            // The text to show on the menu
 *            href: string, }, ... ]    // Href to use for the entry
 */

'use strict';

import Nav from 'react-bootstrap/lib/Nav';
import Navbar from 'react-bootstrap/lib/Navbar';
import React from 'react';
import Scroll from 'react-scroll';

var Link = Scroll.Link;

const styles = {
    inlineMenu: {
        display: 'inline',
    },
    pointer: {
        cursor: 'pointer',
    }
};

class Menu extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        var key = 0;

        return (
            <Navbar id={this.props.id}>
                <ul className="nav navbar-nav">
                {
                    this.props.items.map(function(element) {
                        key++;
                        return (
                            <li key={key}>
                                <Link to={element.href} style={styles.pointer} spy={true} smooth={true} duration={500}>
                                    {element.label}
                                </Link>
                            </li>
                        );
                    })
                }
                </ul>
            </Navbar>
        );
    }

}

Menu.propTypes = {
    id: React.PropTypes.string.isRequired,
    items: React.PropTypes.array.isRequired,
};

export default Menu
