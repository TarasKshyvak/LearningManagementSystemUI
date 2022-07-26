import { createSlice } from "@reduxjs/toolkit";

const groupSlice = createSlice({
    name: 'groups',
    initialState: {
        groups: [],
    },
    reducers: {
        setGroupsArray(state, action) {
            state.groups.push(...action.payload);
        },
        updateGroupState(state, action) {
            const itemIndex = state.groups.findIndex(g => g.id === action.payload.group.id);
            state.groups[itemIndex].isActive = !(state.groups[itemIndex].isActive);
        }
    },
});

export const { setGroupsArray, updateGroupState } = groupSlice.actions;

export default groupSlice.reducer;