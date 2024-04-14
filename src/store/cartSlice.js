import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({

    name: 'cart',


    initialState: {
        cart: [],
        prices: 0,
        onCart: []
    },

    reducers: {

        addInCart(state, action) {
            if (state.cart.find(el => el.id === action.payload.id))
                return;


            state.cart.push({
                ...action.payload
            });
            state.onCart.push(action.payload.id)
            state.prices = sum(state.cart);
        },
        removeInCart(state, action) {
            state.cart = state.cart.filter(item => item.id != action.payload)
            state.onCart = state.onCart.filter(item => item != action.payload)
            state.prices = sum(state.cart);
        },


        togleCount(state, action) {
            const res = state.cart.find(el => el.id === action.payload.id)
            res.count = action.payload.count;
            state.prices = sum(state.cart);
        }


    },
})


export const { addInCart, removeInCart, togleCount, findInCart } = cartSlice.actions;


export default cartSlice.reducer;


function sum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum = sum + (arr[i].count * arr[i].price)
    }
    return sum;
}