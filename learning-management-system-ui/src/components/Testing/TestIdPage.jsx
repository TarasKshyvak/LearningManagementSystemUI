import { Box, CircularProgress } from '@mui/material';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useFetching } from '../../hooks/useFetching';
import TestingService from '../../services/TestingService';
import { setQuestionsAndDuration } from '../../store/testingSlice';
import TestContent from './TestContent';

const TestIdPage = () => {
    const params = useParams();
    const dispatch = useDispatch();
    const questions = useSelector(state => state.testing.questions);

    const [fetchQuestionsByTestId, isLoading, error] = useFetching(async (id) => {
        const response = await TestingService.getQuestionsForPassing(id);
        dispatch(setQuestionsAndDuration({ questions: response.data.questions,
                                           durationInMinutes: response.data.durationInMinutes }));
    });

    useEffect(() => {
        fetchQuestionsByTestId(params.id);
    }, []);

    return (
        <div>
            {
                isLoading
                    ? (<Box
                            sx={{
                                display: "flex",
                                height: "60vh",
                                width: "100%",
                                alignItems: "center",
                                justifyContent: "center",
                            }}
                        >
                            <CircularProgress size={50} />
                        </Box>
                      )
                    : (
                        questions.length === 0
                            ? <div>This test has no questions yet</div>
                            : <TestContent testId={params.id} />
                      )
            }

        </div>
    );
};

export default TestIdPage;