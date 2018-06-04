import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

class QuizQuestionButton extends Component {
    constructor (props) {
        super(props);
        this.state = { }
    }

    render () {
        return (
            <li>
                <button>{this.props.button_text}</button>
            </li>
        );
    }
}
QuizQuestionButton.PropTypes = {
    button_text: PropTypes.obj
}

export default QuizQuestionButton;
