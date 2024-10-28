import React, { useState, useEffect } from 'react';
import './profile.scss';
import UserProfile from '../../components/UserProfile/UserProfile';
import ProfileWishlist from '../../components/ProfileWishlist/ProfileWishlist';
import ProfileCart from '../../components/ProfileCart/ProfileCart';
import ContactUs from '../ContactUs/ContactUs';
import { getUserProfile, userLogout } from '../../redux/action/userLogin';
import { useDispatch, useSelector } from 'react-redux';
import { getCartArray, getUserWishlistArray } from '../../redux/action/product';
import { emptyReducerCartArray } from '../../redux/Reducer/cartReducer';
import UserOrders from '../userOrders/UserOrders';
import { getAllUserOrders } from '../../redux/action/order';
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";

const Profile = () => {

    const dispatch = useDispatch();
    const { userAuthenticated } = useSelector(state => state.user);

    const [tabs, setTab] = useState([true, false, false, false, false,]);

    const setTrue = (index) => {

        setTab((pre) => { return pre.map((tab, i) => (i == index ? true : false)); });

    };


    const onCLickHandler = () => {
        userLogout(dispatch);
    };


    const wishlistHandler = () => {
        getUserWishlistArray(dispatch);
    };

    const cartHandler = () => {
        getCartArray(dispatch);
    };

    const localCartHandler = () => {

        // localStorage.setItem('localStorageCartArray',);
        localStorage.clear();

        dispatch(emptyReducerCartArray());

    };

    const userOrdersHandler = () => {
        getAllUserOrders(dispatch);
    };



    const [userProfileMenu, setUserProfileMenu] = useState(false);

    return (
        <div>

            <div className="userProfile">

                <div className="top" style={{ "height": userProfileMenu ? "fit-content" : "70px" }}>

                    <h2>

                        {
                            userProfileMenu ?
                                <span onClick={() => setUserProfileMenu((pre) => !pre)}>
                                    <IoClose /></span>
                                :

                                <span onClick={() => setUserProfileMenu((pre) => !pre)}>
                                    <RxHamburgerMenu /></span>
                        }

                        User Profile
                    </h2>

                    <h2 onClick={() => { setTrue(0); setUserProfileMenu((pre) => !pre); }}>Profile</h2>
                    <h2 onClick={() => { cartHandler(); setTrue(1); localCartHandler(); setUserProfileMenu((pre) => !pre); }}>Cart</h2>
                    {/* <h2 onClick={() => setTrue(2)}>Orders</h2> */}
                    <h2 onClick={() => { setTrue(3); wishlistHandler(); setUserProfileMenu((pre) => !pre); }}>Wishlist</h2>
                    <h2 onClick={() => { setTrue(4); userOrdersHandler(); setUserProfileMenu((pre) => !pre); }}>Orders</h2>

                    <button onClick={onCLickHandler}>Logout</button>

                </div>

                <div className="bottom">

                    {tabs[0] && <UserProfile />}

                    {tabs[1] && <ProfileCart />}

                    {tabs[3] && <ProfileWishlist />}

                    {tabs[4] && <UserOrders />}


                </div>

            </div>

        </div>
    );
};

export default Profile;