import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    status: 'idel',
    loading: false,
    userAllOrders: [],
    allOrders: [],
    deliveredOrders: [],
    error: {}
};

export const orderReducer = createSlice({
    name: "Order Reducer",
    initialState,
    reducers: {

        // DashBoard API
        getAllNewOrdersRequest: (state, action) => {
            state.loading = true;
        },
        getAllNewOrdersSuccess: (state, action) => {
            state.loading = false;
            state.allOrders = action.payload;
        },
        getAllNewOrdersFail: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },


        orderStatusUpdateRequest: (state, action) => {
            state.loading = true;
        },
        orderStatusUpdateSuccess: (state, action) => {
            state.loading = false;
        },
        orderStatusUpdateFail: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },

        orderTrackingIdUpdateRequest: (state, action) => {
            state.loading = true;
        },
        orderTrackingIdUpdateSuccess: (state, action) => {
            state.loading = false;
        },
        orderTrackingIdUpdateFail: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },

        getDeliveredOrdersRequest: (state, action) => {
            state.loading = true;
        },
        getDeliveredOrderSuccess: (state, action) => {
            state.loading = false;
            state.deliveredOrders = action.payload;
        },
        getDeliveredOrdersFail: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },

        removeDeliveredOrderRequest: (state, action) => {
            state.loading = true;
        },
        removeDeliveredOrderSuccess: (state, action) => {
            state.loading = false;
        },
        removeDeliveredOrderFail: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },



        //User API

        getAllUserOrdersRequest: (state, action) => {
            state.loading = true;
        },

        getAllUserOrdersSuccess: (state, action) => {
            state.loading = false;
            state.userAllOrders = action.payload;

        },
        getAllUserOrdersFail: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },

        userPaidOrderRequest: (state, action) => {
            state.loading = true;
        },

        usePaidOrderSuccess: (state, action) => {
            state.loading = false;
        },
        userPaidOrderFail: (state, action) => {
            state.loading = false;
            state, error = action.payload;
        },


        userCODOrderRequest: (state, action) => {
            state.loading = true;
        },
        useCODORderSuccess: (state, action) => {
            state.loading = false;

        },
        userCODORderFail: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },

        cancelOrderRequest: (state, action) => {
            state.loading = true;
        },
        cancelOrderSuccess: (state, action) => {
            state.loading = false;
        },
        cancelOrderFail: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },

    }
});

export const { getAllUserOrdersRequest, getAllUserOrdersSuccess, getAllUserOrdersFail,
    userCODOrderRequest, useCODORderSuccess, userCODORderFail,
    userPaidOrderRequest, usePaidOrderSuccess, userPaidOrderFail,
    getAllNewOrdersRequest, getAllNewOrdersSuccess, getAllNewOrdersFail,
    orderStatusUpdateRequest, orderStatusUpdateSuccess, orderStatusUpdateFail,
    orderTrackingIdUpdateRequest, orderTrackingIdUpdateSuccess, orderTrackingIdUpdateFail,
    getDeliveredOrdersRequest, getDeliveredOrderSuccess, getDeliveredOrdersFail,
    removeDeliveredOrderRequest, removeDeliveredOrderSuccess, removeDeliveredOrderFail,
    cancelOrderRequest, cancelOrderSuccess, cancelOrderFail
    , } = orderReducer.actions;

export default orderReducer.reducer;