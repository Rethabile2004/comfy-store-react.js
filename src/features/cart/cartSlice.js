import { configureStore, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

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
            const { product } = action.payload
            const item = state.cartItems.find((i) => i.cartID == product.cartID);
            if (item) {
                item.amount = product.amount;
            } else {
                state.cartItems.push(product)
            }
            state.numItemsInCart += product.amount
            state.cartTotal += product.price * product.amount
            cartSlice.caseReducers.calculateTotals(state)
            toast.success("Item added to cart")
        },
        clearItems: (state) => {
            localStorage.setItem('cart', JSON.stringify(defaultState));
            return defaultState;
        },
        editItem: (state, action) => {
            const { cartID, amount } = action.payload
            const product = state.cartItems.find((i) => i.cartID == cartID)
            state.numItemsInCart += amount - state.amount;
            state.cartTotal += product.price * (amount - product.amount)
            product.amount = amount;
            cartSlice.caseReducers.calculateTotals(state);
            toast.success('Cart updated');
        },
        removeItem: (state, action) => {
            const { cartID } = action.payload;
            const product = state.cartItems.find((i) => i.cartID == cartID);
            state.cartItems.filter((i) => i.cartID !== cartID);
            state.numItemsInCart -= product.amount;
            state.cartTotal -= product.price * product.amount
            cartSlice.caseReducers.calculateTotals(state);
            toast.error('Cart cleared')
        },
        calculateTotals: (state) => {
            state.tax = 0.1 * state.cartTotal;
            state.orderTotal = state.cartTotal + state.shipping + state.tax;
            localStorage.setItem('cart', JSON.stringify(state));
        },
    }
})

export const { addItem, clearItems, editItem, removeItem } = cartSlice.actions
export default cartSlice.reducer