import React from 'react';
import './userOrder.scss';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { cancelOrder } from '../../redux/action/order';

const UserOrders = () => {

    const { userAllOrders } = useSelector(state => state.orders);

    const dispatch = useDispatch();


    const paragraphHandler = () => {

        const string = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed itaque velit, qui unde repudiandae consectetur eum commodi! Aperiam dignissimos magni architecto optio eaque quidem voluptas, quibusdam eveniet quisquam debitis quasi!";

        const StringArray = string.split(" ");
        let newString = '';

        for (let i = 0; i < 100; i++) {
            newString += string[i];

        }
        console.log(newString);



    };



    const orderStatusHandler = (status) => {

        // const status = "Package Dispatch";
        let statusArray = [true, false, false, false, false];

        switch (status) {

            case "order Confirmed": {
                statusArray.map((i, index) => {

                    statusArray[index] = index >= 1;


                });


                break;
            }

            case "Package Dispatch": {
                statusArray.map((i, index) => {

                    statusArray[index] = index >= 2;


                });
                break;

            }

            case "In Transmit": {
                statusArray.map((i, index) => {

                    statusArray[index] = index >= 3;


                });

                break;

            }

            case "Delivered": {
                statusArray.map((i, index) => {

                    statusArray[index] = index >= 4;


                });

                break;

            }


            case "Canceled": {
                statusArray.map((i, index) => {

                    statusArray[index] = index !== 4;


                });

                break;

            }

            default: {
                toast.error("Server Error");
                break;
            }

        }

        return statusArray;

    };

    const orderCancerlHanlder = (_id) => {
        cancelOrder(dispatch, _id);
    };



    useEffect(() => {

        // console.log(userAllOrders);
        // paragraphHandler();

    }, [userAllOrders]);


    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-based
        const year = date.getFullYear();
        return `${day}/${month}/${year}`;
    };


    return (

        <div className='UserOrders'>

            {
                userAllOrders && userAllOrders.map((order, index) => (

                    <div className="orderItems" key={index}>

                        <div className="orderDetails">

                            <div className="orderId">

                                <div>
                                    <span>#order_date : </span>
                                    <span>{formatDate(order.orderDate)}</span>
                                </div>

                                <div>
                                    <span>#order_id : </span>
                                    <span>{order.orderId}</span>
                                </div>

                                <div>
                                    <span>#order-Type : </span>
                                    <span >{order.orderType}</span>
                                </div>

                            </div>


                            {
                                order.pId.length > 1 ?

                                    <div className="orderProducts">

                                        {

                                            order.pId.map((item, sno) => (

                                                <div className="product" key={sno}>

                                                    <Link to={`/productdetails/${item._id}`} className="orderImage">
                                                        <img src={item.images.url} alt="" />
                                                    </Link>

                                                    <div className="productDetails">
                                                        <h2>{item.name}</h2>
                                                        <p>{item.desc}</p>

                                                        <div className="orderAmount">
                                                            <table>
                                                                <tbody>

                                                                    <tr>
                                                                        <td><span>shipping</span></td>
                                                                        <td><span>₹200</span></td>
                                                                    </tr>



                                                                    <tr>
                                                                        <td><span>price</span></td>
                                                                        <td><span>₹{item.price}</span></td>
                                                                    </tr>

                                                                </tbody>
                                                            </table>
                                                            <div>

                                                                <h3>Total = ₹{item.price}</h3>
                                                            </div>


                                                        </div>
                                                    </div>
                                                </div>



                                            ))


                                        }


                                    </div>


                                    :


                                    <div className="orderProduct">

                                        {
                                            order.pId.map((item, sno) => (

                                                <div className="product" key={sno}>

                                                    <Link to={`/productdetails/${item._id}`} className="orderImage">
                                                        <img src={item.images.url} alt="" />
                                                    </Link>

                                                    <div className="productDetails">
                                                        <h1>{item.name}</h1>
                                                        <p>{item.desc}</p>

                                                        <div className="orderAmount">
                                                            <table>
                                                                <tbody>

                                                                    <tr>
                                                                        <td><span>shipping</span></td>
                                                                        <td><span>₹200</span></td>
                                                                    </tr>

                                                                    <tr>
                                                                        <td><span>price</span></td>
                                                                        <td><span>₹{item.price}</span></td>
                                                                    </tr>

                                                                    <tr>
                                                                        <td><h2>Order Total = </h2></td>
                                                                        <td><h2> ₹{order.price}</h2></td>
                                                                    </tr>

                                                                </tbody>
                                                            </table>


                                                        </div>
                                                    </div>
                                                </div>



                                            ))
                                        }


                                    </div>


                            }



                        </div>


                        <div className="shippingDetails">
                            <h4>Shipping Details </h4>
                            <table>
                                <tbody>

                                    <tr>
                                        <td><span>Name</span></td>
                                        <td><span>{order.shippingDetails.userName}</span></td>
                                    </tr>

                                    <tr>
                                        <td><span>Phone No. </span></td>
                                        <td><span>{order.shippingDetails.phoneNo1}</span></td>
                                    </tr>

                                    <tr>
                                        <td><span>Altenate Phone No.</span></td>
                                        <td><span>{order.shippingDetails.phoneNo2}</span></td>
                                    </tr>

                                    <tr>
                                        <td><span>Address </span></td>
                                        <td><span>
                                            {order.shippingDetails.userAddress}
                                        </span></td>
                                    </tr>

                                    <tr>
                                        <td><span>Land Mark</span></td>
                                        <td><span>{order.shippingDetails.landMark}</span></td>
                                    </tr>

                                    <tr>
                                        <td><span>City</span></td>
                                        <td><span>{order.shippingDetails.city}</span></td>
                                    </tr>

                                    <tr>
                                        <td><span>State </span></td>
                                        <td><span>{order.shippingDetails.state}</span></td>
                                    </tr>

                                    <tr>
                                        <td><span>Country</span></td>
                                        <td><span>{order.shippingDetails.country}</span></td>
                                    </tr>


                                </tbody>
                            </table>


                            {
                                order.pId.length > 1 ?


                                    <div className="orderTotal">
                                        <h2>Order Total = ₹{order.price}</h2>
                                    </div>
                                    :
                                    ""

                            }



                        </div>

                        <div className="orderStatus">
                            <h4>Order Status</h4>

                            <table>
                                <tbody>

                                    {
                                        orderStatusHandler(order.status)
                                    }


                                    <tr>
                                        <td>
                                            <ul>
                                                <li style={{ color: orderStatusHandler(order.status)[0] !== true ? "orangered" : "gray" }}>Order Confirmed</li>
                                            </ul>
                                        </td>
                                    </tr>


                                    <tr>
                                        <td>
                                            <ul>
                                                <li style={{ color: orderStatusHandler(order.status)[1] !== true ? "orangered" : "gray" }}>Package Dispatch</li>
                                            </ul>
                                        </td>
                                    </tr>


                                    <tr>
                                        <td>
                                            <ul>
                                                <li style={{ color: orderStatusHandler(order.status)[2] !== true ? "orangered" : "gray" }}>In Transmit</li>
                                            </ul>
                                        </td>
                                    </tr>


                                    <tr>
                                        <td>
                                            <ul>
                                                <li style={{ color: orderStatusHandler(order.status)[3] !== true ? "orangered" : "gray" }}>Deliverd</li>
                                            </ul>
                                        </td>
                                    </tr>



                                    {
                                        order.status === "Canceled" && <tr>
                                            <td>
                                                <ul>
                                                    <li style={{ color: orderStatusHandler(order.status)[4] !== true ? "orangered" : "gray" }}>Canceled</li>

                                                </ul>
                                            </td>
                                        </tr>
                                    }


                                </tbody>
                            </table>

                            {
                                order.status === "Canceled" || order.status === "Delivered" ? " "
                                    :
                                    <button onClick={() => orderCancerlHanlder(order._id)}>Cancel Order</button>
                            }

                        </div>
                    </div>


                ))
            }


        </div>

    );
};

export default UserOrders;