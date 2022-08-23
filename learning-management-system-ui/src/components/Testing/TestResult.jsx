import React from 'react';

const TestResult = ({result}) => {
    const date = result.passingDate.toString();

    return (
        <div 
            style={{
                backgroundColor: 'lightgray',
                padding: '20px'
            }}
        >
            <h3>
                Congratulations on passing {result.name}
            </h3>
            <div>
                You answered {result.totalAnswers} of {result.totalQuestions} questions.
                <br/>
                Number of correct answers: {result.correctAnswers}.
                <br/>
                Passing date: {date
                                   .slice(0, 16)
                                   .replace(/-/g, "/")
                                   .replace("T", " ")}.
            </div>
        </div>
    );
};

export default TestResult;