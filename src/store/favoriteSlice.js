import { createSlice } from '@reduxjs/toolkit';

const favoriteSlice = createSlice({
    name: 'favorite',

    initialState: {
        favorite: [],
        onFavorite: []
    },

    reducers: {

        addfavorite(state, action) {
            if (state.favorite.id == action.payload.id)
                return;
            state.favorite.push(
                { ...action.payload }
            )
            state.onFavorite.push(action.payload.id)
        },
        removefavorite(state, action) {
            state.favorite = state.favorite.filter(item => item.id != action.payload)
            state.onFavorite = state.onFavorite.filter(item => item != action.payload)
        },
    },
})


export const { addfavorite, removefavorite } = favoriteSlice.actions;


export default favoriteSlice.reducer;