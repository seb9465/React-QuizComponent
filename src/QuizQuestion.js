import React, { Component } from 'react';
import PropTypes from 'prop-types';

import QuizQuestionButton from './QuizQuestionButton';

class QuizQuestion extends Component {

    render() {
        const answer = this.props.quiz_question.answer_options.map((answer_option, index) => {
            return <QuizQuestionButton key={index} button_text={answer_option} />
        });
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
            </main>
        );
    }
}
QuizQuestion.propTypes = {
    quiz_question: PropTypes.object
};

export default QuizQuestion;
