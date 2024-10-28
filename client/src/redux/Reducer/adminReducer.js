import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    status: 'idel',
    adminAuthenticated: false,
    loading: false,
    admin: {},
    error: "ideal",
    refresh: false

};

export const adminReducer = createSlice({
    name: "DecorTrove",
    initialState,

    reducers: {

        // Register Admin

        adminRegisterRequest: (state) => {
            state.loading = true;
        },

        adminRegisterSuccess: (state, action) => {
            state.loading = false;
            state.adminAuthenticated = true;
            state.admin = action.payload;
        },

        adminRegisterFail: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },



        // login Admin 

        adminLoginRequest: (state) => {
            state.loading = true;
        },
        adminLoadinSuccess: (state, action) => {
            state.loading = false;
            state.adminAuthenticated = true;
        },
        adminLoginFail: (state, action) => {
            state.loading = false;
            state.adminAuthenticated = false;
            state.error = action.payload;
        },

        // Admin Sign In

        adminSignInRequest: (state) => {
            state.loading = true;
        },
        adminSignInSuccess: (state, action) => {
            state.loading = false;
            state.adminAuthenticated = true;
        },
        adminSignInFail: (state, action) => {
            state.loading = false;
            state.adminAuthenticated = false;
            state.error = action.payload;
        },




        // Logout Admin

        adminLogoutRequest: (state, action) => {
            state.loading = true;
        },
        adminLogoutSuccess: (state, action) => {
            state.loading = false;
            state.adminAuthenticated = false;
        },
        adminLogoutFail: (state, action) => {
            state.loading = false;
            state.error = action.payload;

        },


        // Get Admin Profile Data 

        getAdminProfileRequest: (state, action) => {
            state.loading = true;
        },
        getAdminProfileSuccess: (state, action) => {
            state.loading = false;
            state.adminAuthenticated = true;
            state.admin = action.payload;
        },
        getAdminProfileFail: (state, action) => {
            state.loading = false;
            state.error = action.payload;

        },






        refreshPage: (state, action) => {
            state.refresh = !action.payload.val;
        },

    }

});

export const {
    adminLoginRequest,
    adminLoadinSuccess,
    adminLoginFail,

    adminSignInRequest,
    adminSignInSuccess,
    adminSignInFail,


    adminLogoutRequest,
    adminLogoutSuccess,
    adminLogoutFail,


    getAdminProfileRequest,
    getAdminProfileSuccess,
    getAdminProfileFail,


    refreshPage,

} = adminReducer.actions;

export default adminReducer.reducer;