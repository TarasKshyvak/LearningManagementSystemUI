import { createSlice } from "@reduxjs/toolkit";

const testingSlice = createSlice({
    name: 'testing',
    initialState: {
        questions: [],
        studentAnswers: [],
        result: null,
    },
    reducers: {
        setQuestions(state, action) {
            state.questions = action.payload.questions;
        },
        addAnswer(state, action) {
            state.studentAnswers.push(action.payload.answer);
        },
        resetAnswers(state) {
            state.studentAnswers = [];
        },
        setResult(state, action) {
            state.result = action.payload.result;
        }
    },
});

export const { setQuestions, addAnswer, resetAnswers, setResult } = testingSlice.actions;

export default testingSlice.reducer;