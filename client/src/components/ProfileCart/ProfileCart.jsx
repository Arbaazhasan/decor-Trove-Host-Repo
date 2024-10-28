import React from 'react';
import "./profileCart.scss";

import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { addProductWishlist, getCartArray, removeProductCart } from '../../redux/action/product';
import { useState } from 'react';
import { addProductCart, cartProductTotal, updateCartProductQty } from '../../redux/action/cart';


const ProfileCart = () => {

    const dispatch = useDispatch();

    const { cart, cartTotal } = useSelector(state => state.cart);
    const { cartArray, pageRefresh } = useSelector(state => state.product);

    let [productArray, setProductArray] = useState([]);
    const [localCartArray, setLocalCartArray] = useState([]);


    const wishListHandler = (id) => {

        addProductWishlist(dispatch, id, !pageRefresh);
        getCartArray(dispatch);

    };


    const productRemoveHandler = (id) => {

        removeProductCart(dispatch, id);

    };

    const addProductCartHandler = (product) => {

        addProductCart(dispatch, product, localCartArray);

    };


    const qtyUpdateHandler = (product, operation) => {

        updateCartProductQty(dispatch, productArray, product, operation, localCartArray);

    };


    useEffect(() => {

        const storageData = localStorage.getItem('localStorageCartArray');
        const retrivedData = JSON.parse(storageData);
        // console.log(retrivedData);

        setLocalCartArray(retrivedData);

        setProductArray(Array.from(cartArray));

        cartProductTotal(dispatch, localCartArray);

        // console.log(cart);


    }, [cartArray, cart]);

    return (
        <div className="profileCart" >
            <div className="cartList">

                {

                    cartArray && cartArray.map((i) => (
                        <div to={`/productdetails/${i._id}`} className="cartItem" key={i._id}>
                            <Link to={`/productdetails/`} className="photo">
                                <img src={i.img[0].url} alt="" />
                            </Link>


                            <div className="itemDetails">
                                <Link to={`/productdetails/${i._id}`}>

                                    <div>
                                        <p>{i.name}</p>
                                        <span>${i.price}</span>
                                        <p>{i.desc}</p>
                                    </div>

                                </Link>

                                <div className='addAndremoveBtn'>


                                    {
                                        i.isInclude ? "" : <button onClick={() => { wishListHandler(i._id); }}>Add to Wishlist</button>
                                    }

                                    <button onClick={() => { productRemoveHandler(i._id); }}>Remove</button>
                                </div>

                            </div>

                            <div className="cartItemQty">
                                <div className="productQty">

                                    <button onClick={() => qtyUpdateHandler(i, "minus")}>&lt;</button>

                                    <span>{i.qty}</span>

                                    <button onClick={() => qtyUpdateHandler(i, "plus")}>&gt;</button>
                                </div>
                            </div>

                            <div className="isOrder">
                                <input type="checkbox" onClick={() => addProductCartHandler(i)} />
                            </div>
                        </div>

                    ))
                }


            </div>

            <div className="orderNow">
                <div className="totalAmmount">
                    <p>₹{cartTotal}</p>
                    <span>Total</span>
                </div>

                <Link to='/order' className="orderBtn">
                    <button>Buy</button>
                </Link>
            </div>



        </div >
    );
};

export default ProfileCart;