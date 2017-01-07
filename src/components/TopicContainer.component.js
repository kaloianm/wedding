/**
 * Implements a topic box. Accepts the following properties:
 *
 * title (string): Title for the topic
 * content (string): The content of the topic
 */

'use strict';

import React from 'react';

class TopicContainer extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id={this.props.id} className="topic-wrapper">
                <section>
                    <h1>{this.props.title}</h1>
                    <div>{this.props.children}</div>
                </section>
            </div>
        );
    }
}

export default TopicContainer;
