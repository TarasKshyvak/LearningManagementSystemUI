import {createSlice} from '@reduxjs/toolkit';

const userSlice = createSlice({
    name: 'users',
    initialState: {
        users: []
    },
    reducers: {
        addUser(state, action) {
            console.log(state);
            console.log(action);

            state.users.push(action.payload.user);
        },
        removeUser(state, action) {

        },
        changeUser(state, action) {

        }
    },
});

