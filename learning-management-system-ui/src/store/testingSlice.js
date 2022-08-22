import { createSlice } from "@reduxjs/toolkit";

const testingSlice = createSlice({
    name: 'testing',
    initialState: {
        questions: [],
        durationInMinutes: 10,
        studentAnswers: [],
        result: null,
    },
    reducers: {
        setQuestionsAndDuration(state, action) {
            state.questions = action.payload.questions.sort(() => Math.random() - 0.5);
            state.durationInMinutes = action.payload.durationInMinutes;
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

export const { setQuestionsAndDuration, addAnswer, resetAnswers, setResult } = testingSlice.actions;

export default testingSlice.reducer;