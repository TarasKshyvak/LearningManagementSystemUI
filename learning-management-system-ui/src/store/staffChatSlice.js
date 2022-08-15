import { createSlice } from "@reduxjs/toolkit";

const staffChatSlice = createSlice({
    name: 'staffChat',
    initialState: {
        messages: [],
        user: {},
        userId: null,
        isConnected: false,
    },
    reducers: {
        addMessage(state, action) {
            state.messages = [action.payload.message, ...state.messages];
        },

        setMessages(state, action) {
            state.messages = action.payload.messages.reverse();
        },

        setUser(state, action) {
            state.user = action.payload.user;
        },

        setUserId(state, action) {
            state.userId = action.payload.userId;
        },

        setConnected(state, action) {
            state.isConnected = action.payload.isConnected;
        },
    },
});

export const {addMessage,
              setMessages,
              setUser,
              setUserId,
              setConnected,} = staffChatSlice.actions;

export default staffChatSlice.reducer;