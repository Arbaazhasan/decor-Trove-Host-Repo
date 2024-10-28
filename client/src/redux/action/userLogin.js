import axios from "axios";
import { getUserProfileDataFail, getUserProfileDataRequest, getUserProfileDataSuccess, getUserProfileFail, getUserProfileRequest, getUserProfileSuccess, isCartWindowClose, isCartWindowOpen, updateUserDataFail, updateUserDataRequest, updateUserDataSuccess, userLoginFail, userLoginRequest, userLoginSuccess, userLogoutFail, userLogoutRequest, userLogoutSuccess, userSignInFail, userSignInRequest, userSignInSuccess } from "../Reducer/userReducer";
import { server } from "../store";
import toast from "react-hot-toast";
import { getCartArray } from "./product";

export const userLogin = async (dispatch, username, password) => {

    try {

        dispatch(userLoginRequest());

        const { data } = await axios.post(`${server}/user/login`, {
            username, password
        }, {
            headers: {
                "Content-Type": "application/json",
            },
            withCredentials: true
        });

        dispatch(userLoginSuccess());

        toast.success(data.message);

    } catch (error) {
        dispatch(userLoginFail(error.message));
        toast.error(error.response.data.message);
        // console.log(error.response.data.message);


    }

};


export const userSignIn = async (dispatch, name, username, password) => {


    try {

        dispatch(userSignInRequest());

        const { data } = await axios.post(`${server}/user/register`, {
            name, username, password
        }, {
            headers: {
                "Content-Type": "application/json",
            },
            withCredentials: true
        });

        dispatch(userSignInSuccess());

        toast.success(data.message);

    } catch (error) {
        dispatch(userSignInFail(error.message));
        toast.error(error.response.data.message);
        // console.log(error.response.data.message);


    }


};

export const userLogout = async (dispatch) => {

    try {
        dispatch(userLogoutRequest());

        const { data } = await axios.get(`${server}/user/logout`, {
            headers: {
                "Content-Type": "application/json",
            },
            withCredentials: true
        });

        dispatch(userLogoutSuccess());
        toast.success(data.message);

    } catch (error) {

        console.log(error.message);
        dispatch(userLogoutFail(error.response.data.message));
        toast.error(error.response.data.message);

    }

};


export const getUserProfile = async (dispatch) => {

    try {
        dispatch(getUserProfileRequest());

        const { data } = await axios.post(`${server}/user/getuser`, {

        }, {
            headers: {
                "Content-Type": "application/json"
            },
            withCredentials: true
        });

        dispatch(getUserProfileSuccess(data.data));

    } catch (error) {

        dispatch(getUserProfileFail(error.message));
        console.log(error);

    }
};



export const getUserData = async (dispatch) => {

    try {
        dispatch(getUserProfileDataRequest());

        const { data } = await axios.post(`${server}/user/getuser`, {

        }, {
            headers: {
                "Content-Type": "application/json"
            },
            withCredentials: true
        });

        dispatch(getUserProfileDataSuccess(data.data));
        // console.log(data);

    } catch (error) {

        dispatch(getUserProfileDataFail(error.message));
        console.log(error);

    }
};


export const updateUserData = async (dispatch,
    name,
    email,
    phoneNo1,
    phoneNo2,
    address,
    address2,
    landMark,
    city,
    state,
    country,
) => {

    try {
        dispatch(updateUserDataRequest());

        const { data } = await axios.post(`${server}/user/updateuserdata`, {
            name,
            email,
            phoneNo1,
            phoneNo2,
            address,
            address2,
            landMark,
            city,
            state,
            country,

        }, {
            headers: {
                "Content_type": "application/json"
            },
            withCredentials: true
        });

        dispatch(updateUserDataSuccess());

        getUserData(dispatch);

        toast.success(data.message);



    } catch (error) {

        dispatch(updateUserDataFail(error));
        console.log(error);

    }



};



export const isCartMainWindow = (dispatch, val) => {

    dispatch(isCartWindowOpen(val));
    getCartArray(dispatch);

    // console.log(val);

};


export const isCartMainWindowClose = (dispatch, val) => {

    dispatch(isCartWindowClose(val));

};