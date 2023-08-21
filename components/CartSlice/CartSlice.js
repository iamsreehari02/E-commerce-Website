import { createSlice } from "@reduxjs/toolkit";
import { useEffect, useState } from "react";
import { auth } from "../../firebase";




    const CartSlice = createSlice({

    name: 'cart',
    initialState: {
        cart:[],
    },
    reducers: {
        addItem: (state, action) => {
            state.cart.push(action.payload);
        },
        removeItem: (state, action) => {
            state.cart = state.cart.filter((data => data.id != action.payload.id))
        },
        clearCart: (state, action) => {
            state.cart = []
        }
    },
})

export const { addItem , removeItem , clearCart } = CartSlice.actions;
export default CartSlice.reducer;