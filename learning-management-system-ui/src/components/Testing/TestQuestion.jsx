import { Button, FormControlLabel, Radio, RadioGroup } from '@mui/material';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TestingService from '../../services/TestingService';
import { addAnswer, resetAnswers, setResult } from '../../store/testingSlice';
import classes from './Testing.module.css';

const TestQuestion = ({testId}) => {    
    const dispatch = useDispatch();
    const questions = useSelector(state => state.testing.questions);
    const studentAnswers = useSelector(state => state.testing.studentAnswers);
    const isExpired = useSelector(state => state.testing.isExpired);
    
    const [chosenAnswer, setChosenAnswer] = useState('');
    const lastQuestionIndex = questions.length - 1;
    const [questionNumber, setQuestionNumber] = useState(0);

    //while no authentication/authorization
    const studentId = "f947b107-4c67-44ef-2051-08da5a705629";

    let buttonText = 'Next';
    if (questionNumber === lastQuestionIndex) {
        buttonText = 'Submit';
    }

    const handleButtonClick = async () => {
        dispatch(addAnswer({
            answer: {
                testId: testId,
                studentId: studentId,
                questionId: questions[questionNumber].id,
                answerId: chosenAnswer,
            }
        }));
        if (buttonText === 'Next') {
            setQuestionNumber(questionNumber + 1);
        }
    }

    if (studentAnswers.length === questions.length || isExpired) {
        (async () => {
            const response = await TestingService.passTest(studentAnswers);
            dispatch(setResult({result: response.data}));
            dispatch(resetAnswers());
        })();
    }

    return (
        <div>
            <h3>
                <span className={classes.number_circle}>
                    {questionNumber + 1}
                </span>
                <span>
                    {questions[questionNumber].name}
                </span>
            </h3>
            <div>
                {questions[questionNumber].description}:
            </div>
            <RadioGroup
                value={chosenAnswer}
                onChange={event => setChosenAnswer(event.target.value)}
            >
                {questions[questionNumber].answers.map(answer =>
                    <FormControlLabel
                        key={answer.id}
                        value={answer.id}
                        control={<Radio/>}
                        label={answer.text}
                        className={classes.radio_input}
                    />
                )}
            </RadioGroup>
            <Button
                variant="contained"
                onClick={handleButtonClick}
                sx={{
                    display: 'block',
                    mt: '15px',
                    ml: 'auto',
                    borderRadius: '6px',
                }}
            >
                {buttonText}
            </Button>
        </div>
    );
};

export default TestQuestion;