import { configureStore, createSlice } from "@reduxjs/toolkit";

const defaultState = {
    cartItems: [],
    numItemsInCart: 0,
    cartTotal: 0,
    shipping: 500,
    tax: 0,
    orderTotal: 0,
};

const cartSlice = createSlice({
    name: 'cart',
    initialState: defaultState,
    reducers: {
        addItem: (state, action) => {
            console.log("Add Item");
        },
        clearItems: (state) => {

        },
        editItem: (state, action) => {

        },
        removeItem: (state, action) => { }
    }
})

export const { addItem, clearItems, editItem, removeItem } = cartSlice.actions
export default cartSlice.reducer