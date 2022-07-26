import {createSlice} from '@reduxjs/toolkit';

const chatSlice = createSlice({
    name: 'chat',
    initialState: {
        messages: [],
        user: {},
        group: {},
        userId: null,
        isConnected: false
    },
    reducers: {
        addMessage(state, action) {
            state.messages.push(action.payload.message);
        },

        addMessages(state, action) {
            state.messages = action.payload.messages;
        },

        setGroup(state, action) {
            state.group = action.payload.group;
        },

        setUser(state, action) {
            state.user = action.payload.user;
        },

        setUserId(state, action) {
            state.userId = action.payload.userId;
        },

        setConnectionState(state, action) {
            state.connectionState = action.payload.state;
        },

        setConnected(state, action)
        {
            state.isConnected = action.payload.isConnected;
        }
    },
});

export const {addMessage, addMessages, setGroup, setUser, setUserId, setConnected} = chatSlice.actions;

export default chatSlice.reducer;