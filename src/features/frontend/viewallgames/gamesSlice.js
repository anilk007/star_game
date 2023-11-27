import { createSlice } from '@reduxjs/toolkit';

const gamesSlice = createSlice({
    name: "fetchedGames",
    initialState: { value: [] },
    reducers: {
        storeGames: (state, action) => {
            state.value = state.value + 1;
        },
        getStoreGames: (state, action) => {
            state.value = state.value + 1;
        }
    }
});

const { actions, reducer } = gamesSlice;

const { storeGames, getStoreGames } = actions;

export { storeGames, getStoreGames };

export default reducer;

