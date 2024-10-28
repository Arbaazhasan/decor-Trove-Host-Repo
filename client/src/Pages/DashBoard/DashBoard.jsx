import React from 'react';
import './DashBoard.scss';
import { useState } from 'react';
import SliderController from '../../components/SliderController/SliderController';
import BannerController from '../../components/BannerController/BannerController';
import NewArrivalsController from '../../components/NewArrivalsController/NewArrivalsController';
import PopularProductController from '../../components/PopularProductController/PopularProductController';
import SearchProduct from '../../components/SearchProduct/SearchProduct';
import AddProduct from '../../components/AddProduct/AddProduct';
import UpdateProductController from '../../components/UpdateProductController/UpdateProductController';
import DeleteProductController from '../../components/DeleteProductController/DeleteProductController';
import AllProducts from '../../components/AllProducts/AllProducts';
import { useDispatch, useSelector } from 'react-redux';


import { userLogout } from '../../redux/action/userLogin';
import { adminLogout } from '../../redux/action/adminLogin';
import { useEffect } from 'react';
import { getAllProduct } from '../../redux/action/dashboard';
import OrderDashBoard from '../../components/OrdersDashBoard/OrderDashBoard';
import { allDeliveredOrders, getAllNewUserOrders } from '../../redux/action/order';

import { TfiLayoutSlider } from "react-icons/tfi";
import { TfiLayoutSliderAlt } from "react-icons/tfi";
import { MdOutlineAddToQueue } from "react-icons/md";
import { FaRankingStar } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import { IoMdAdd } from "react-icons/io";
import { RxUpdate } from "react-icons/rx";
import { MdOutlineDelete } from "react-icons/md";
import { LuGalleryHorizontalEnd } from "react-icons/lu";
import { MdOutlineWatchLater } from "react-icons/md";
import { MdLibraryAddCheck } from "react-icons/md";
import { FaGreaterThan } from "react-icons/fa6";


const DashBoard = () => {

    // API Calling Function 

    const dispatch = useDispatch();
    const { allOrders, deliveredOrders } = useSelector(state => state.orders);



    const submitHandler = () => {
        getAllProduct(dispatch);

    };


    const [tabs, setTabs] = useState([false, false, false, false, true, false, false, false, false, false, false]);

    const { adminAuthenticated } = useSelector(state => state.admin);


    const setTrue = (index) => {
        setTabs((pre) => { return pre.map((tab, i) => (i == index ? true : false)); });
    };


    const handler = () => {
        adminLogout(dispatch);
        // userLogout(dispatch);
    };

    const newOrdersHandler = () => {
        getAllNewUserOrders(dispatch);
    };

    const deliveredOrderHandler = () => {
        allDeliveredOrders(dispatch);
    };


    useEffect(() => {

    }, [adminAuthenticated]);


    return (
        <div>

            <div className="notSupportDeviceAlert">
                <h1>Please use Laptop/Desktop to access Dashboard</h1>
                <p>The Admin Dashbaord should be use in Laptop/Desktop</p>
            </div>

            <div className="deshBoard">
                <div className="left">
                    <h1>Dash Board</h1>

                    <div>

                        <div>
                            <h2>Page Content </h2>
                            <p onClick={() => setTrue(0)}><span><TfiLayoutSlider /></span> Slider <span><FaGreaterThan /></span> </p>
                            <p onClick={() => setTrue(1)}><span><TfiLayoutSliderAlt /></span> Banner <span><FaGreaterThan /></span> </p>
                            <p onClick={() => setTrue(2)}><span><MdOutlineAddToQueue /></span> New Arrivals <span><FaGreaterThan /></span> </p>
                            <p onClick={() => setTrue(3)}><span><FaRankingStar /></span> Pupular Product <span><FaGreaterThan /></span> </p>
                        </div>

                        <div>
                            <h2>Product Content</h2>
                            <p onClick={() => { setTrue(4); }}> <span><FaSearch /></span>Search Product <span><FaGreaterThan /></span></p>
                            <p onClick={() => { setTrue(5); }}> <span><IoMdAdd /></span>Add Product <span><FaGreaterThan /></span> </p>
                            <p onClick={() => { setTrue(6); }}> <span><RxUpdate /></span>Update Product <span><FaGreaterThan /></span> </p>
                            <p onClick={() => { setTrue(7); }}> <span><MdOutlineDelete /></span>Delete Product <span><FaGreaterThan /></span> </p>
                            <p onClick={() => { setTrue(8); submitHandler(); }}> <span><LuGalleryHorizontalEnd /> </span>All Products <span><FaGreaterThan /></span> </p>
                            <p onClick={() => { setTrue(9); newOrdersHandler(); }}> <span><MdOutlineWatchLater /> </span>New Orders <span><FaGreaterThan /></span> </p>
                            <p onClick={() => { setTrue(10); deliveredOrderHandler(); }}> <span>< MdLibraryAddCheck /> </span>Complete Orders <span><FaGreaterThan /></span> </p>
                        </div>
                    </div>

                </div >


                <div className="right">

                    <div className="top">


                        {

                            tabs[0] && <h1>Slider </h1>

                        }



                        {

                            tabs[1] && <h1>Banner</h1>

                        }


                        {

                            tabs[2] && <h1>New Arrivals </h1>

                        }


                        {

                            tabs[3] && <h1>Popular Product </h1>

                        }


                        {

                            tabs[4] && <h1>Search Product </h1>

                        }


                        {

                            tabs[5] && <h1>Add Product </h1>

                        }


                        {

                            tabs[6] && <h1>Update Product </h1>

                        }


                        {

                            tabs[7] && <h1>Delete Product</h1>

                        }


                        {

                            tabs[8] && <h1>All Product</h1>

                        }


                        {

                            tabs[9] && <h1>New Orders</h1>

                        }


                        {

                            tabs[10] && <h1>Deliverd Orders</h1>

                        }



                        <button onClick={handler}>Logout</button>



                    </div>

                    <div className="bottom">

                        {/* ****Page Content****  */}


                        {
                            // dashBoardTab.Slider ? <SliderController /> : ""
                            // dashBoardTab.Slider && <SliderController />
                            tabs[0] && <SliderController />


                        }

                        {

                            tabs[1] && <BannerController />

                        }

                        {
                            tabs[2] && <NewArrivalsController />

                        }


                        {
                            tabs[3] && <PopularProductController />

                        }



                        {/* ****Product Content****  */}


                        {
                            tabs[4] && <SearchProduct />

                        }

                        {
                            tabs[5] && <AddProduct />

                        }

                        {
                            tabs[6] && <UpdateProductController />

                        }


                        {
                            tabs[7] && <DeleteProductController />

                        }

                        {
                            tabs[8] && <AllProducts />

                        }

                        {
                            tabs[9] && <OrderDashBoard isDeliver={false} allOrders={allOrders} />

                        }

                        {
                            tabs[10] && <OrderDashBoard isDeliver={true} allOrders={deliveredOrders} />

                        }



                    </div>

                </div>




            </div >
        </div >
    );
};

export default DashBoard;