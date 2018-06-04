import React, { Component } from 'react';


import QuizQuestion from './QuizQuestion';

let data = require('./quiz_data.json');

class Quiz extends Component {
    constructor (props) {
        super(props);

        this.state = {
            quiz_position: 1
        };
    }

    render () {
        return (
            <div>
                <div className="QuizQuestion">
                    <QuizQuestion quizQuestion={ data.quiz_questions[this.state.quiz_position - 1] }/>
                </div>
            </div>
        );
    }
}

export default Quiz;