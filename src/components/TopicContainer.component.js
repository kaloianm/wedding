/**
 * Implements a topic box. Accepts the following properties:
 *
 * title (string): Title for the topic
 * content (string): The content of the topic
 */

'use strict';

import PageHeader from 'react-bootstrap/lib/PageHeader';
import Panel from 'react-bootstrap/lib/Panel';
import React from 'react';

class TopicContainer extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <section id={this.props.id}>
                <PageHeader>{this.props.title}</PageHeader>
                <Panel>{this.props.children}</Panel>
            </section>
        );
    }
}

export default TopicContainer;
