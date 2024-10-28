import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cart: [],
    product: "done",
    cartTotal: 0,
    orderGrandTotal: 0,

};

const localStorageHandler = (cart) => {

    localStorage.setItem('localStorageCartArray', JSON.stringify(cart));

    const storedData = localStorage.getItem('localStorageCartArray');

    const retrievedData = JSON.parse(storedData);

    console.log(retrievedData);
};

export const cartReducer = createSlice({
    name: "CartReducer",
    initialState,

    reducers: {

        addProduct: (state, action) => {
            state.cart.push(action.payload);

            localStorageHandler(state.cart);

        },

        removeProduct: (state, action) => {

            state.cart = state.cart.filter(product => product._id !== action.payload._id);

            localStorageHandler(state.cart);
        },

        emptyReducerCartArray: (state, action) => {
            state.cart.splice(0, state.cart.length);
            localStorage.clear();
        },

        updateCartProudctQty: (state, action) => {
            state.cart = action.payload;

            localStorage.setItem('localStorageCartArray', JSON.stringify(state.cart));

        },

        getCartProductTotal: (state, action) => {
            state.cartTotal = action.payload;

        },

        getOrderGrandTotal: (state, action) => {
            state.orderGrandTotal = action.payload;
        }



    }
});

export const { addProduct, removeProduct, emptyReducerCartArray, updateCartProudctQty, getCartProductTotal, getOrderGrandTotal } = cartReducer.actions;


export default cartReducer.reducer;