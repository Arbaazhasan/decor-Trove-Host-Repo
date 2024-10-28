import React, { useState, useEffect } from 'react';
import './orderDashBoard.scss';
import { useDispatch, useSelector } from 'react-redux';
import { orderStatusUpdate, orderTrackingIdUpdate, removeDeliveredOrder } from '../../redux/action/order';

const OrderDashBoard = ({ isDeliver, allOrders }) => {

    const dispatch = useDispatch();

    const [orderStatusMenu, setOrderStatusMenu] = useState(allOrders.map(() => false));

    const [orderTrackId, setOrderTrackId] = useState(allOrders.map(() => false));


    const dateTimeHandler = (mongoStamp) => {
        const date = new Date(mongoStamp);
        const year = date.getFullYear();
        const month = date.getMonth() + 1;
        const day = date.getDate();
        const hours = date.getHours();
        const minutes = date.getMinutes();
        const seconds = date.getSeconds();
        const formattedDate = `${year}-${month < 10 ? '0' + month : month}-${day < 10 ? '0' + day : day} / ${hours}:${minutes < 10 ? '0' + minutes : minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
        return formattedDate;
    };

    const toggleStatusMenu = (index) => {
        const newOrderStatusMenu = [...orderStatusMenu];
        newOrderStatusMenu[index] = !newOrderStatusMenu[index];
        setOrderStatusMenu(newOrderStatusMenu);
    };
    const toggleTrackId = (index) => {
        const newOrderTrackId = [...orderTrackId];
        newOrderTrackId[index] = !newOrderTrackId[index];
        setOrderTrackId(newOrderTrackId);
    };

    const [orderStatus, setOrderStatus] = useState();
    const [orderTrackingId, setOrderTrackingId] = useState();
    const [removeOrder, setRemoveOrder] = useState();


    const orderStatusHandler = (e, _id) => {
        e.preventDefault();

        orderStatusUpdate(dispatch, _id, orderStatus);


    };

    const orderTracingIdHandler = (e, _id) => {
        e.preventDefault();

        orderTrackingIdUpdate(dispatch, _id, orderTrackingId);
    };


    const deliveredOrderHandler = (e, _id) => {

        e.preventDefault();
        console.log("done");
        console.log(removeOrder);

        if (removeOrder)
            removeDeliveredOrder(dispatch, _id);
    };

    useEffect(() => {

    }, [isDeliver, allOrders]);


    return (
        <div className='OrderDashBoard'>

            {/* 
            <div className="isOrderDeliverd">

                <div className="isDeliver">

                    <div className="header">
                        <span>X</span>
                    </div>
                    <div className="content">
                        <p>Are your sure Order is Deliverd</p>
                    </div>

                    <div className="btn">
                        <button>Yes</button>
                        <button>No</button>
                    </div>

                </div>

            </div>
 */}



            <div className="ordersHeader">
                <p>#</p>
                <p>Order_id</p>
                <p>p_no</p>
                <p>P_name</p>
                <p>Address</p>
                <p>Date</p>
                <p>Price</p>
                <p>Status</p>
                <p>Tracking Id</p>
            </div>

            <div className="allOrdersDetails">
                {allOrders && allOrders.map((order, index) => (
                    <div className="orderDetails" key={index}>
                        <p>{index + 1}</p>
                        <p>{order.orderId}</p>
                        <p>{order.pNo}</p>
                        <p>{order.pName}</p>
                        <p>{Object.values(order.shippingDetails).join(', ')}</p>
                        <p>{dateTimeHandler(order.orderDate)}</p>
                        <p>{order.price}</p>

                        <form className='orderStatus' onSubmit={(e) => { isDeliver ? deliveredOrderHandler(e, order._id) : orderStatusHandler(e, order._id); }}>

                            <p style={{ color: order.status === "Delivered" ? "green" : "red" }}>{order.status}</p>

                            {

                                orderStatusMenu[index] &&

                                <select name="" id="" onClick={(e) => { isDeliver ? setRemoveOrder(e.target.value) : setOrderStatus(e.target.value); }}>
                                    <option value={order.status}></option>
                                    {
                                        !isDeliver
                                            ?
                                            <>
                                                <option value="Order Confirm" >Order Confirm</option>
                                                <option value="Package Dispatch">Package Dispatch</option>
                                                <option value="In Transmit" >In Transmit</option>
                                                <option value="Delivered" >Delivered</option>
                                            </>

                                            :

                                            <option value="Not Delivered">Not Delivered</option>
                                    }
                                </select>

                            }

                            <button
                                onClick={() => toggleStatusMenu(index)}
                                type={orderStatusMenu[index] ? "button" : "submit"}
                                style={{
                                    color: order.status === "Delivered" ? "green" : "red",
                                    border: `2px solid ${order.status === "Delivered" ? "green" : "red"}`,
                                }}
                                onMouseEnter={(e) => {
                                    e.target.style.backgroundColor = order.status === "Delivered" ? "green" : "red";
                                    e.target.style.color = "white";
                                }}
                                onMouseLeave={(e) => {
                                    e.target.style.backgroundColor = "transparent";
                                    e.target.style.color = order.status === "Delivered" ? "green" : "red";
                                }}
                            >
                                {orderStatusMenu[index] ? "Submit" : "Edit"}
                            </button>
                        </form>

                        <form className='orderStatus' onSubmit={(e) => orderTracingIdHandler(e, order._id)}>
                            <p>{order.trackingId}</p>
                            {orderTrackId[index] &&
                                <input type="text" onChange={(e) => setOrderTrackingId(e.target.value)} />
                            }

                            {
                                !isDeliver && <button onClick={() => toggleTrackId(index)} type={orderTrackId[index] ? "button" : "submit"}>
                                    {orderTrackId[index] ? "Update" : "Edit"}
                                </button>
                            }

                            {/* <button type='button'>Shippign Slip</button> */}
                        </form>
                    </div>
                ))}
            </div>
        </div >
    );
};

export default OrderDashBoard;
