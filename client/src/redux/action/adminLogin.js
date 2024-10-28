import axios from "axios";
import { server } from "../store";
import { adminLoadinSuccess, adminLoginFail, adminLoginRequest, adminLogoutFail, adminLogoutRequest, adminLogoutSuccess, adminSignInFail, adminSignInRequest, adminSignInSuccess, getAdminProfileFail, getAdminProfileRequest, getAdminProfileSuccess, refreshPage } from "../Reducer/adminReducer";
import toast from "react-hot-toast";


export const adminLogin = async (dispatch, username, password) => {

    try {
        dispatch(adminLoginRequest());

        const { data } = await axios.post(`${server}/admin/adminlogin`, {
            username, password

        }, {
            headers: {
                "Content-Type": "application/json"
            },
            withCredentials: true
        });

        dispatch(adminLoadinSuccess({ user: data.data }));

        toast.success(`${data.message}`);

    } catch (error) {

        dispatch(adminLoginFail({ error: error.response.data.message }));
        toast.error(error.response.data.message);

    }
};



export const adminSignIn = async (dispatch, name, username, password) => {



    try {
        dispatch(adminSignInRequest());

        const { data } = await axios.post(`${server}/admin/registeradmin`, {
            name, username, password

        }, {
            headers: {
                "Content-Type": "application/json"
            },
            withCredentials: true
        });

        dispatch(adminSignInSuccess({ user: data.data }));

        toast.success(`${data.message}`);

    } catch (error) {

        dispatch(adminSignInFail({ error: error.response.data.message }));
        toast.error(error.response.data.message);

    }
};


export const adminLogout = async (dispatch) => {

    try {

        dispatch(adminLogoutRequest());

        const { data } = await axios.post(`${server}/admin/adminlogout`, {

        },
            {
                headers: {
                    "Content-Type": "application/json"
                },
                withCredentials: true
            }
        );

        dispatch(adminLogoutSuccess());
        toast.success(data.message);

    } catch (error) {

        dispatch(adminLogoutFail({ error: error.data.message }));
        console.log(error.data.message);

    }

};


export const getAdminProfile = async (dispatch) => {

    try {
        dispatch(getAdminProfileRequest());

        const { data } = await axios.get(`${server}/admin/getAdmin`, {
            headers: {
                "Content-Type": "application/json"
            },
            withCredentials: true
        });

        dispatch(getAdminProfileSuccess(data.userData));


    } catch (error) {

        dispatch(getAdminProfileFail(error.message));
        // console.log(error.message);

    }
};
