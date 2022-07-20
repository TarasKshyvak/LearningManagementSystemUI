import {createSlice} from '@reduxjs/toolkit';

const chatSlice = createSlice({
    name: 'chat',
    initialState: {
        messages: [],
    },
    reducers: {
        addMessage(state, action) {
            state.messages = [...state.messages, action.payload.message];
            console.log(state.messages)
        },

        addMessages(state, action){
            state.messages = action.payload.messages;
        }
    },
});

export const {addMessage, addMessages} = chatSlice.actions;

export default chatSlice.reducer;