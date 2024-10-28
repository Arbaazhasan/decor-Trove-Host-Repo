import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    status: 'idel',
    loading: false,
    imageViewerWindow: false,
    itemNo: 'idel',
    name: 'idel',
    description: 'idel',
    color: 'idel',
    price: 'idel',
    category: 'idel',
    available: 'idel',
    images: {},
    allProducts: [],
    product: [],
    categoryArray: [],
    imageViewerArray: [],
    error: {}
};

const dashboardReducer = createSlice({
    name: "DashboradReducer",
    initialState,

    reducers: {

        imageViewerCloser: (state, action) => {
            state.imageViewerWindow = action.payload;
        },


        imageViewerRequest: (state) => {
            state.loading = true;
        },

        imageViewerSuccess: (state, action) => {
            state.loading = false;
            state.imageViewerWindow = action.payload.door;
            state.imageViewerArray = action.payload.array;
        },
        imageViewerFail: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },


        // Get Search Product 

        getSearchProductRequest: (state) => {
            state.loading = true;
        },
        getSearchProductSuccess: (state, action) => {
            state.loading = false;
            state.product = action.payload;
        },
        getSearchProductFail: (state, action) => {
            state.loading = false;
            state.product = [];
            state.error = action.error;
        },

        // Add Product

        addProductRequest: (state) => {
            state.loading = true;
        },
        addProductSuccess: (state, action) => {
            state.status = true;
            state.loading = false;
            state.images = action.payload;
        },
        addProductFail: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },

        // Updata Product
        updateProductRequest: (state) => {
            state.loading = true;
        },
        updateProductSuccess: (state, action) => {
            state.status = true;
            state.loading = false;
        },
        updateProductFail: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },

        // Delete Product 
        deleteProductRequest: (state) => {
            state.loading = true;
        },
        deleteProductSuccess: (state, action) => {
            state.loading = false;
            state.product = [];
        },
        deleteProductFail: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },

        // Get All Products 
        getAllProductsRequest: (state) => {
            state.loading = true;
        },

        getAllProductsSuccess: (state, action) => {
            state.loading = false;
            state.allProducts = action.payload;
        },

        getAllProductsFail: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },


        // Add Popular Products 
        addPopularProductRequest: (state) => {
            state.loading = true;
        },
        addPopularProductSuccess: (state, action) => {
            state.loading = false;
        },
        addPopularProductFail: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },


        // Add New Arrivals Products 
        addNewArrivalsProductRequest: (state, action) => {
            state.loading = true;
        },
        addNewArrivalsProductSuccess: (state, action) => {
            state.loading = false;
        },
        addNewArrivalsProductsFail: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },

        updateArrivalCategoryRequest: (state) => {
            state.loading = true;
        },
        updateArrivalCategorySuccess: (state) => {
            state.loading = false;
        },
        updateArrivalCategoryFail: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },

        getArrivalCategoryRequest: (state) => {
            state.loading = true;
        },
        getArrivalCategorySuccess: (state, action) => {
            state.loading = false;
            state.categoryArray = action.payload;
        },
        getArrivalCategoryFail: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },

        addBannerRequest: (state) => {
            state.loading = true;
        },

        addBannerSuccess: (state, action) => {
            state.loading = false;
        },
        addBannerFail: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },

        addSlideRequest: (state) => {
            state.loading = true;
        },
        addSlideSuccess: (state, action) => {
            state.loading = false;
        },
        addSlideFail: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },


        deleteSlideRequest: (state) => {
            state.loading = true;
        },
        deleteSlideSuccess: (state) => {
            state.loading = false;
        },
        deleteSlideFail: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        }


    }
});


export const {
    getAllProductsRequest, getAllProductsSuccess, getAllProductsFail,
    addProductRequest, addProductSuccess, addProductFail,
    getSearchProductRequest, getSearchProductSuccess, getSearchProductFail,
    deleteProductRequest, deleteProductSuccess, deleteProductFail,
    addPopularProductRequest, addPopularProductSuccess, addPopularProductFail,
    addNewArrivalsProductRequest, addNewArrivalsProductSuccess, addNewArrivalsProductsFail,
    updateArrivalCategoryRequest, updateArrivalCategorySuccess, updateArrivalCategoryFail,
    getArrivalCategoryRequest, getArrivalCategorySuccess, getArrivalCategoryFail,
    addBannerRequest, addBannerSuccess, addBannerFail,
    addSlideRequest, addSlideSuccess, addSlideFail,
    deleteSlideRequest, deleteSlideSuccess, deleteSlideFail,
    updateProductRequest, updateProductSuccess, updateProductFail,
    imageViewerRequest, imageViewerSuccess, imageViewerFail,
    imageViewerCloser
} = dashboardReducer.actions;

export default dashboardReducer.reducer;