import {createSlice} from '@reduxjs/toolkit';

const chatSlice = createSlice({
    name: 'chat',
    initialState: {
        messages: [],
        group: {}
    },
    reducers: {
        addMessage(state, action) {
            state.messages.push(action.payload.message);
        },

        addMessages(state, action){
            state.messages = action.payload.messages;
        },
        setGroup(action, state){

        }
    },
});

export const {addMessage, addMessages} = chatSlice.actions;

export default chatSlice.reducer;