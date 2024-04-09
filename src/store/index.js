import { configureStore } from '@reduxjs/toolkit';

// можем назвать как угодно потому что export defoult
import cartReducer from './cartSlice';
import favoriteReducer from './favoriteSlice'
import productSlice from './productSlice';

export default configureStore(
    {
        reducer: {
            cart: cartReducer,
            favorite: favoriteReducer,
            product:productSlice,
            // favorite, favoriteReducer
            // далее может быть user : userReducer
        }
    }
)