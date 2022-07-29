import { createSlice } from "@reduxjs/toolkit";

const subjectSlice = createSlice({
    name: 'subjects',
    initialState: {
        subjects: [],
    },
    reducers: {
        setSubjectsArray(state, action) {
            state.subjects = action.payload;
        },
    }
});

export const {setSubjectsArray} = subjectSlice.actions;

export default subjectSlice.reducer;