import { createSlice } from "@reduxjs/toolkit";
import { FaTheRedYeti } from "react-icons/fa";

const initialState = {
    loading: false,
    sliderSlides: [],
    banners: [],
    arrivalCategory: [],
    arrivalProduct: [],
    popularProudct: [],
    productDetails: {},
    allProducts: [],
    productCategory: [],
    wishlistArray: [],
    cartArray: [],
    searchProductArray: [],
    pageRefresh: false,
    inWishlist: false,
    error: 'ideal'
};

export const productReducer = createSlice({
    name: "product Details",
    initialState,

    reducers: {

        sliderSlidesRequest: (state, action) => {
            state.loading = true;
        },
        sliderSlidesSuccess: (state, action) => {
            state.loading = false;
            state.sliderSlides = action.payload;
        },
        sliderSlidesFail: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },

        bannersRequest: (state, action) => {
            state.loading = true;
        },
        bannersSuccess: (state, action) => {
            state.loading = false;
            state.banners = action.payload;
        },
        bannerFail: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },


        getArrivalCategoryRequest: (state, action) => {
            state.loading = true;
        },
        getArrivalCategorySuccess: (state, action) => {
            state.loading = false;
            state.arrivalCategory = action.payload;
        },
        getArrivalCategoryFail: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },

        getArrivalProudctRequest: (state, action) => {
            state.loading = true;
        },

        getArrivalProudctSuccess: (state, action) => {
            state.loading = false;
            state.arrivalProduct = action.payload;
        },
        getArrivalProductFail: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },


        // Single Request and Response
        getPopularProductSuccess: (state, action) => {
            state.popularProudct = action.payload;
        },



        getProudctRequest: (state, action) => {
            state.loading = true;
        },
        getProudctSuccess: (state, action) => {
            state.loading = false;
            state.productDetails = action.payload;
        },
        getProudctFail: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },


        getAllProductRequest: (state, action) => {
            state.loading = true;
        },
        getAllProductSuccess: (state, action) => {
            state.loading = false;
            state.allProducts = action.payload;
        },
        getAllProudctFail: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },



        getProductCategoryRequest: (state) => {
            state.loading = true;
        },
        getProductCategorySuccess: (state, action) => {
            state.loading = false;
            state.productCategory = action.payload;
        },
        getProductCategoryFail: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },


        getWishlistArrayRequest: (state, action) => {
            state.loading = true;
        },
        getWishlistArraySuccess: (state, action) => {
            state.loading = false;
            state.wishlistArray = action.payload;
        },
        getWishlistArrayFail: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },


        addProductWishlistRequest: (state, action) => {
            state.loading = true;
        },
        addProductWishlistSucces: (state, action) => {
            state.loading = false;
            state.pageRefresh = action.payload;
        },
        addProductWishlistFail: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },


        removeWishlistProductRequest: (state, action) => {
            state.loading = true;
        },
        removeWishlistProductSuccess: (state, action) => {
            state.loading = false;
            state.pageRefresh = action.payload;
        },
        removeWishlistProductFail: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },

        isProudctinWishlist: (state, action) => {
            state.inWishlist = action.payload;
        },


        getCartArrayRequest: (state, action) => {
            state.loading = true;
        },
        getCartArraySuccess: (state, action) => {
            state.loading = false;
            state.cartArray = action.payload;


        },
        getCartArrayFail: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },



        addProductCartRequest: (state, action) => {
            state.loading = true;
        },
        addProductCartSuccess: (state, action) => {
            state.loading = false;
        },
        addProducCarttFail: (state, action) => {
            state.loading = false;
        },

        removeProductCartRequest: (state, action) => {
            state.loading = true;
        },
        removeProductCartSuccess: (state, action) => {
            state.loading = false;

        },
        removeProductCartFail: (state, action) => {
            state.loading = false;
        },

        searchProductRequest: (state, action) => {
            state.loading = true;
        },
        searchProductSuccess: (state, action) => {
            state.loading = false;
            state.searchProductArray = action.payload;
        },
        searchProductFail: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },


    }
});

export const { sliderSlidesRequest, sliderSlidesSuccess, sliderSlidesFail,
    bannersRequest, bannersSuccess, bannerFail,
    getArrivalCategoryRequest, getArrivalCategorySuccess, getArrivalCategoryFail,
    getArrivalProudctRequest, getArrivalProudctSuccess, getArrivalProductFail,
    getPopularProductSuccess,
    getProudctRequest, getProudctSuccess, getProudctFail,
    getAllProductRequest, getAllProductSuccess, getAllProudctFail,
    getProductCategoryRequest, getProductCategorySuccess, getProductCategoryFail,

    getWishlistArrayRequest, getWishlistArraySuccess, getWishlistArrayFail,
    addProductWishlistRequest, addProductWishlistSucces, addProductWishlistFail,
    removeWishlistProductRequest, removeWishlistProductSuccess, removeWishlistProductFail,
    isProudctinWishlist,

    getCartArrayRequest, getCartArraySuccess, getCartArrayFail,

    addProductCartRequest, addProductCartSuccess, addProducCarttFail,
    removeProductCartRequest, removeProductCartSuccess, removeProductCartFail,

    searchProductRequest, searchProductSuccess, searchProductFail,


} = productReducer.actions;


export default productReducer.reducer;