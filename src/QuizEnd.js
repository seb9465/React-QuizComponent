import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

class QuizEnd extends Component {
    constructor (props) {
        super(props);
        this.state = { };
    }

    render () {
        return(
            <div>
                <p>Thanks for playing!</p>
                <a href="">Reset Quiz</a>
            </div>
        );
    }
}
QuizEnd.PropTypes = {

}

export default QuizEnd;
