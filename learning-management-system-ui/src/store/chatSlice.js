import {createSlice} from '@reduxjs/toolkit';

const chatSlice = createSlice({
    name: 'chat',
    initialState: {
        messages: [{sender: 'harik', text: 'hello'},
            {sender: 'sirius', text: 'I am sirius'},
            {sender: 'henry', text: 'Nice weather'}],
    },
    reducers: {
        addMessage(state, action) {
            state.messages.push(action.payload.message);
        },

        addMessages(state, action){
            state.messages = action.payload.messages;
        }
    },
});

export const {addMessage, addMessages} = chatSlice.actions;

export default chatSlice.reducer;