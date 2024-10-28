import { addProduct, getCartProductTotal, getOrderGrandTotal, removeProduct, updateCartProudctQty } from "../Reducer/cartReducer";
import { getCartArraySuccess } from "../Reducer/productReducer";

export const addProductCart = (dispatch, product, cart) => {

    let isProduct = false;


    cart && cart.map((i) => {
        if (i._id === product._id) {
            isProduct = true;
            return;
        }
    });

    isProduct ?
        dispatch(removeProduct(product))
        :
        dispatch(addProduct(product));

};


export const updateCartProductQty = (dispatch, productArray, product, operation, cart) => {

    productArray = productArray.map((item) => {

        if (item._id === product._id) {
            return {
                ...item,
                qty: operation === "plus" ? item.qty + 1 : item.qty - 1 === 0 ? 1 : item.qty - 1
            };
        }
        return item;
    });

    dispatch(getCartArraySuccess(productArray));

    cart = cart && cart.map((item) => {

        if (item._id === product._id) {
            return {
                ...item,
                qty: operation === "plus" ? item.qty + 1 : item.qty - 1 === 0 ? 1 : item.qty - 1
            };
        }

        return item;
    });

    dispatch(updateCartProudctQty(cart));

};


export const cartProductTotal = (dispatch, cart) => {
    let x = 0;

    const localStorageData = JSON.parse(localStorage.getItem('localStorageCartArray'));

    localStorageData && localStorageData.map((i) => {
        x += i.qty * i.price;
    });

    dispatch(getCartProductTotal(x));
};

// Order Page Product Manulation Funtions

export const updateProductQty = (dispatch, productArray, operation, product) => {

    productArray = productArray.map((item) => {

        if (item._id === product._id) {
            return {
                ...item,
                qty: operation === "plus" ? item.qty + 1 : item.qty - 1 === 0 ? 1 : item.qty - 1
            };
        }
        return item;

    });

    dispatch(updateCartProudctQty(productArray));

};


export const removeProductOrderList = (dispatch, product, productArray) => {

    if (productArray.length > 1)
        dispatch(updateCartProudctQty(productArray.filter(i => i._id !== product._id)));

};

export const getGrandTotal = (dispatch, cart) => {

    let x = 0;

    cart && cart.map((i) => {
        x += i.qty * i.price;
    });

    dispatch(getOrderGrandTotal(x));


};