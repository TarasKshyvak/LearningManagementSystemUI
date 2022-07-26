import { configureStore } from '@reduxjs/toolkit';
import chatReducer from './chatSlice';
import groupsReducer from './groupSlice';
import userReducer from './userSlice';

export default configureStore({
    reducer: {
        users: userReducer,
        chat: chatReducer,
        groups: groupsReducer,
    }
});