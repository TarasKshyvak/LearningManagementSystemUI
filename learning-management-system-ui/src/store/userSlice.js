import {createSlice} from '@reduxjs/toolkit';

const userSlice = createSlice({
    name: 'users',
    initialState: {
        users: [],
    },
    reducers: {
        addUser(state, action) {
            state.users = [action.payload.user, ...state.users];
        },

        addUsers(state, action){
            state.users = action.payload;
        },

        updateUser(state, action) {
            const itemIndex = state.users.findIndex(p => p.id === action.payload.user.id);
            const changedArr = [...state.users];
            changedArr[itemIndex] = action.payload.user;
            state.users = changedArr;
        }
    },
});

export const {addUser, updateUser, addUsers} = userSlice.actions;

export default userSlice.reducer;