/**
 * Implements a menu. Accepts the following properties:
 *
 * id (string): Identifier for the element
 * items: [ { label: string,            // The text to show on the menu
 *            href: string, }, ... ]    // Href to use for the entry
 */

'use strict';

import React from 'react';
import Scroll from 'react-scroll';

var Link = Scroll.Link;

class Menu extends React.Component {

    render() {
        var key = 0;

        return (
            <nav id={this.props.id} className="menu">
                <ul>
                    {
                        this.props.items.map(function (element) {
                            key++;
                            return (
                                <li key={key}>
                                    <Link to={element.href} style={{ cursor: 'pointer' }} spy={true} smooth={true} duration={500}>
                                        {element.label}
                                    </Link>
                                </li>
                            );
                        })
                    }
                </ul>
            </nav>
        );
    }

}

export default Menu
