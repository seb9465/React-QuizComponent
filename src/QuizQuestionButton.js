import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

class QuizQuestionButton extends Component {
    constructor (props) {
        super(props);
        this.state = { }
    }

    handleClick() {
        this.props.clickHandler(this.props.button_text);
    }

    render () {
        return (
            <li>
                <button onClick={this.handleClick.bind(this)}>{this.props.button_text}</button>
            </li>
        );
    }
}
QuizQuestionButton.propTypes = {
    button_text: PropTypes.string,
    clickHandler: PropTypes.func
};

export default QuizQuestionButton;
