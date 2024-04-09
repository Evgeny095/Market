import { createSlice } from '@reduxjs/toolkit';

const favoriteSlice = createSlice({
    //сам объект
    name: 'favorite',

    // изначальное состояние
    initialState: {
        favorite: [],
        onFavorite: []
    },
    // набор методов для дальнейшего использования
    reducers: {
        // необхадимые мне, мои методы
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

// дескретезируем автомотически созданиые собыитя по всем методам
export const { addfavorite, removefavorite } = favoriteSlice.actions;

// набор методов
export default favoriteSlice.reducer;