import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
    name: "user",
    initialState: {},
    reducers: {
        add: (state, action) => {
            return { ...action.payload }
        }
    }
});

const { actions, reducer } = userSlice;

export const { add } = actions;

export const selectUser = state => state.user;

export default reducer;