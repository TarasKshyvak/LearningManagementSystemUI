import React from 'react';
import { useSelector } from 'react-redux';
import classes from './Testing.module.css';
import TestQuestion from './TestQuestion';
import TestResult from './TestResult';

const TestContent = ({ testId }) => {   
    const result = useSelector(state => state.testing.result);

    return (
        <div className={classes.test_content}>
            {
                result
                ? <TestResult
                      result={result}
                  />
                : <TestQuestion
                      testId={testId}
                  />
            }
        </div>
    );
};

export default TestContent;