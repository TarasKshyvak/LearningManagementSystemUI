import {configureStore} from '@reduxjs/toolkit';
import userReducer from './userSlice';
import chatReducer from './chatSlice';

export default configureStore({
    reducer: {
        users: userReducer,
        chat: chatReducer
    }
});