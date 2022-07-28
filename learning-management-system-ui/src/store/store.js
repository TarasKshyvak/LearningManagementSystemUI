import { configureStore } from '@reduxjs/toolkit';
import chatReducer from './chatSlice';
import groupsReducer from './groupSlice';
import userReducer from './userSlice';
import subjectsReducer from './subjectSlice';

export default configureStore({
    reducer: {
        users: userReducer,
        chat: chatReducer,
        groups: groupsReducer,
        subjects: subjectsReducer,
    }
});