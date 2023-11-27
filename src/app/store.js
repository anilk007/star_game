import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/frontend/home/counterSlice';
import userReducer from '../slices/userSlice'

import toDoSliceReducer from '../features/frontend/todolist/toDoSlice';

import postsSliceReducer from '../features/frontend/viewposts/postsSlice'

const store = configureStore({
    reducer: {
        counter: counterReducer,
        user: userReducer,
        toDoSliceReducer: toDoSliceReducer,
        postsSliceReducer: postsSliceReducer

    }
});


export default store;