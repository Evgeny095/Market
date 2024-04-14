import { configureStore } from '@reduxjs/toolkit';


import cartReducer from './cartSlice';
import favoriteReducer from './favoriteSlice'
import productSlice from './productSlice';

export default configureStore(
    {
        reducer: {
            cart: cartReducer,
            favorite: favoriteReducer,
            product: productSlice,
        }
    }
)