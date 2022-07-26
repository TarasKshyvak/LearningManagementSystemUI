import { createSlice } from "@reduxjs/toolkit";

const groupSlice = createSlice({
    name: 'groups',
    initialState: {
        groups: [],
    },
    reducers: {
        setGroupsArray(state, action) {
            state.groups.push(...action.payload);
        }
    },
});

export const { setGroupsArray } = groupSlice.actions;

export default groupSlice.reducer;