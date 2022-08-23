import React from 'react';
import { useSelector } from 'react-redux';
import Timer from '../../utils/Timer';
import classes from './Testing.module.css';
import TestQuestion from './TestQuestion';
import TestResult from './TestResult';

const TestContent = ({ testId }) => {
    const result = useSelector(state => state.testing.result);
    const durationInMinutes = useSelector(state => state.testing.durationInMinutes);

    return (
        <div className={classes.test_content}>
            {
                result
                    ? <TestResult result={result} />
                    : (<div>
                        <Timer durationInMinutes={durationInMinutes} />
                        <TestQuestion testId={testId} />
                       </div>
                      )
            }
        </div>
    );
};

export default TestContent;