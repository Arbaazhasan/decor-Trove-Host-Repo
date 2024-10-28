import axios from "axios";
import { server } from "../store";
import { getAllUserOrdersSuccess, getAllUserOrdersRequest, getAllUserOrdersFail, userCODOrderRequest, useCODORderSuccess, userCODORderFail, userPaidOrderRequest, usePaidOrderSuccess, userPaidOrderFail, getAllNewOrdersRequest, getAllNewOrdersSuccess, getAllNewOrdersFail, orderStatusUpdateRequest, orderStatusUpdateSuccess, orderStatusUpdateFail, getDeliveredOrderSuccess, getDeliveredOrdersRequest, getDeliveredOrdersFail, removeDeliveredOrderRequest, removeDeliveredOrderSuccess, removeDeliveredOrderFail, cancelOrderRequest, cancelOrderSuccess, cancelOrderFail } from "../Reducer/orderReducer";
import toast from "react-hot-toast";

export const orderhandler = async (dispatch, amount, name, phoneNo, username, address) => {
    try {

        dispatch(userPaidOrderRequest());

        const logoImageUrl = "https://res-console.cloudinary.com/ddixq9qyw/media_explorer_thumbnails/291a5e1dbabe3dea1bdfccd85be4d430/detailed";

        const { data: { key } } = await axios.get(`${server}/paymets/getkey`);

        const { data: { order } } = await axios.post(`${server}/paymets/checkout`, {
            amount
        });

        const options = {
            key, // Enter the Key ID generated from the Dashboard
            "amount": order.amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
            "currency": "INR",
            "name": "Decor Trove",
            "description": "Order Payment Geteway",
            "image": logoImageUrl,
            "order_id": order.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
            "callback_url": `${server}/paymets/paymentverification`,
            "prefill": {
                "name": name,
                "email": username,
                "contact": phoneNo
            },
            "notes": {
                "address": address
            },
            "theme": {
                "color": "#3399cc"
            }
        };

        const razor = new window.Razorpay(options);
        dispatch(usePaidOrderSuccess());

        razor.open();



    } catch (error) {

        console.log(error);
        dispatch(userPaidOrderFail(error));

    }

};

export const userOrderDetails = async (
    _id,
    userName,
    phoneNo1,
    phoneNo2,
    userAddress,
    landMark,
    city,
    state,
    country,
    productArray) => {

    const { data } = await axios.post(`${server}/order/userorderdetails`, {
        _id,
        userName,
        phoneNo1,
        phoneNo2,
        userAddress,
        landMark,
        city,
        state,
        country,
        productArray

    }, {
        headers: {
            "Content-Type": "application/json"
        },
        withCredentials: true,
    });

    console.log(data);

};


export const getAllUserOrders = async (dispatch) => {

    try {
        dispatch(getAllUserOrdersRequest());

        const { data } = await axios.post(`${server}/order/getallorders`, {}, {
            headers: {
                "Contetnt-Type": "application/json"
            },
            withCredentials: true
        });

        dispatch(getAllUserOrdersSuccess(data.orderProducts));
        // console.log(data.orderProducts);

    } catch (error) {

        dispatch(getAllUserOrdersFail(error));
        console.log(error);


    }

};


export const CodOrder = async (dispatch) => {


    try {
        dispatch(userCODOrderRequest());

        const { data } = await axios.post(`${server}/paymets/codorder`, {}, {
            headers: {
                "Content-Type": "application/json"
            },
            withCredentials: true
        });

        dispatch(useCODORderSuccess());
        console.log(data);

    } catch (error) {

        dispatch(userCODORderFail(error));
        console.log(error);


    }

};



export const cancelOrder = async (dispatch, _id) => {


    try {
        dispatch(cancelOrderRequest());

        const { data } = await axios.post(`${server}/order/cancelorder`, {
            _id
        }, {
            headers: {
                "Content-Type": "application/json"
            },
            withCredentials: true
        });

        dispatch(cancelOrderSuccess());
        getAllUserOrders(dispatch);
        toast.success(data.message);

    } catch (error) {

        dispatch(cancelOrderFail(error.message));
        console.log(error);

    }

};



// Admin Dashboard APIs

export const getAllNewUserOrders = async (dispatch) => {

    try {
        dispatch(getAllNewOrdersRequest());

        const { data } = await axios.post(`${server}/order/getallneworders`, {}, {

            headers: {
                "Content-Type": "application/json"
            },
            withCredentials: true
        });

        dispatch(getAllNewOrdersSuccess(data.orders));
        // console.log(data.orders);

    } catch (error) {

        dispatch(getAllNewOrdersFail(error));
        console.log(error);

    }

};

export const orderStatusUpdate = async (dispatch, _id, orderStatus) => {

    try {
        dispatch(orderStatusUpdateRequest());

        const { data } = await axios.post(`${server}/order/updateorderstatus`, {
            _id,
            status: orderStatus

        }, {
            headers: {
                "Content-Type": "application/json",

            },
            withCredentials: true
        });

        dispatch(orderStatusUpdateSuccess());
        getAllNewUserOrders(dispatch);

        toast.success(data.message);

    } catch (error) {

        dispatch(orderStatusUpdateFail(error.messsage));
        console.log(error);

    }

};



export const orderTrackingIdUpdate = async (dispatch, _id, trackingId) => {

    try {
        dispatch(orderStatusUpdateRequest());

        const { data } = await axios.post(`${server}/order/updateordertrackingid`, {
            _id,
            trackingId

        }, {
            headers: {
                "Content-Type": "application/json",

            },
            withCredentials: true
        });

        dispatch(orderStatusUpdateSuccess());
        getAllNewUserOrders(dispatch);

        toast.success(data.message);

    } catch (error) {

        dispatch(orderStatusUpdateFail(error.messsage));
        console.log(error);

    }

};


export const allDeliveredOrders = async (dispatch) => {

    try {

        dispatch(getDeliveredOrdersRequest());

        const { data } = await axios.post(`${server}/order/getdeleiveredorders`, {}, {
            headers: {
                "Content-Type": "application/json"
            },
            withCredentials: true
        });
        // console.log(data);
        dispatch(getDeliveredOrderSuccess(data.deliveredOrders));

    } catch (error) {

        dispatch(getDeliveredOrdersFail(error.message));
        console.log(error);

    }

};


export const removeDeliveredOrder = async (dispatch, _id) => {


    try {

        dispatch(removeDeliveredOrderRequest());

        const { data } = await axios.post(`${server}/order/removedeleveredorder`, {
            _id
        }, {
            headers: {
                "Content-Type": "application/json"
            },
            withCredentials: true
        });

        dispatch(removeDeliveredOrderSuccess());

        // console.log(data);
        allDeliveredOrders(dispatch);
        toast.success(data.message);

    } catch (error) {

        dispatch(removeDeliveredOrderFail(error.message));
        console.log(error);

    }

};
