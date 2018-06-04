import React, { Component } from 'react';
import PropTypes from 'prop-types';

import QuizQuestionButton from './QuizQuestionButton';

class QuizQuestion extends Component {
    constructor(props) {
        super(props);

        this.state = {
            incorrectAnswer: false
        };
    }

    handleClick(buttonText) {
        if (buttonText === this.props.quiz_question.answer) {
            this.props.showNextQuestionHandler();
            this.setState(() => { return { incorrectAnswer: false } });
        } else {
            this.setState(() => { return { incorrectAnswer: true } });
        }
    }

    render() {
        const answer = this.props.quiz_question.answer_options.map((answer_option, index) => {
            return <QuizQuestionButton key={index} clickHandler={this.handleClick.bind(this)} button_text={answer_option} />
        });

        const incorrectAnswer = this.state.incorrectAnswer ? (<p className="error">Sorry, that's not right</p>) : null;

        return (
            <main>
                <section>
                    <p>{this.props.quiz_question.instruction_text}</p>
                </section>
                <section className='buttons'>
                    <ul>
                        { answer }
                    </ul>
                </section>
                { incorrectAnswer }
            </main>
        );
    }
}
QuizQuestion.propTypes = {
    quiz_question: PropTypes.object,
    showNextQuestionHandler: PropTypes.func
};

export default QuizQuestion;
