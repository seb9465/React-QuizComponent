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
QuizQuestionButton.propTypes = {
    button_text: PropTypes.string
}

export default QuizQuestionButton;
