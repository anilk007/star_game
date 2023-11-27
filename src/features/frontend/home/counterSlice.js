import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
    name: "counter",
    initialState: { value: 0 },
    reducers: {
        increment: (state, action) => {
            state.value = state.value + 1;
        },
        decrement: (state, action) => {
            state.value = state.value - 1;
        },
        reset: (state, action) => {
            state.value = 0;
        }
    }
});

const { actions, reducer } = counterSlice;

const { increment, decrement, reset } = actions;

export { increment, decrement, reset };

export const selectCounter = state => state.counter.value;

export default reducer;

