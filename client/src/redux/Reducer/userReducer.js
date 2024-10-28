import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    status: "idel",
    userAuthenticated: false,
    loading: false,
    user: {},
    error: {},
    refresh: false,
    isCartWindow: false,
    isProfilWindow: false,
};

export const userReducer = createSlice({
    name: "User Login",
    initialState,

    reducers: {

        // User Login

        userLoginRequest: (state, action) => {
            state.loading = true;
        },

        userLoginSuccess: (state, action) => {
            state.loading = false;
            state.userAuthenticated = true;
            state.user = action.payload;
        },

        userLoginFail: (state, action) => {
            state.status = false;
            state.loading = false;
            state.error = action.payload;
        },


        // User Sign In

        userSignInRequest: (state, action) => {
            state.loading = true;
        },
        userSignInSuccess: (state, action) => {
            state.loading = false;
            state.userAuthenticated = true;
            state.user = action.payload;
        },
        userSignInFail: (state, action) => {
            state.status = false;
            state.loading = false;
            state.error = action.payload;
        },


        // User Logout

        userLogoutRequest: (state, action) => {
            state.loading = true;
        },
        userLogoutSuccess: (state, action) => {
            state.loading = false;
            state.userAuthenticated = false;
        },
        userLogoutFail: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },


        getUserProfileDataRequest: (state, action) => {
            state.loading = true;
        },

        getUserProfileDataSuccess: (state, action) => {
            state.loading = false;
            state.user = action.payload;

        },

        getUserProfileDataFail: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },



        getUserProfileRequest: (state, action) => {
            state.loading = true;
            state.userAuthenticated = false;

        },
        getUserProfileSuccess: (state, action) => {
            state.loading = false;
            state.userAuthenticated = true;
            state.user = action.payload;

        },

        getUserProfileFail: (state, action) => {
            state.loading = false;
            state.userAuthenticated = false;
            state.error = action.payload;
        },

        setUserProfileWindow: (state, action) => {
            state.isProfilWindow = action.payload;
        },


        isCartWindowOpen: (state, action) => {
            state.isCartWindow = action.payload;
        },
        isCartWindowClose: (state, action) => {
            state.isCartWindow = action.payload;
        },

        updateUserDataRequest: (state, action) => {
            state.loading = true;
        },
        updateUserDataSuccess: (state, action) => {
            state.loading = false;
        },
        updateUserDataFail: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        }


    }
});

export const { userLoginRequest, userLoginSuccess, userLoginFail,
    userSignInRequest,
    userSignInSuccess,
    userSignInFail,
    userLogoutRequest, userLogoutSuccess, userLogoutFail,
    getUserProfileRequest, getUserProfileSuccess, getUserProfileFail,
    setUserProfileWindow,
    isCartWindowOpen,
    isCartWindowClose,
    updateUserDataRequest, updateUserDataSuccess, updateUserDataFail,
    getUserProfileDataRequest, getUserProfileDataSuccess, getUserProfileDataFail


} = userReducer.actions;

export default userReducer.reducer;