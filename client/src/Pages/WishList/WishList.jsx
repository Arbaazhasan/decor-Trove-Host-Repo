import React from 'react';
import './wishList.scss';

import { AiFillStar } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { addProductInCart, removeProductWishlist } from '../../redux/action/product';

const WishList = () => {

    const dispatch = useDispatch();
    const { wishlistArray, pageRefresh } = useSelector(state => state.product);

    const wishListProductRemover = (id) => {
        removeProductWishlist(dispatch, id, !pageRefresh);
    };

    const cartProductAdder = (id) => {
        addProductInCart(dispatch, id, 1);
    };


    useEffect(() => {

        console.log(wishlistArray);

    }, [wishlistArray, pageRefresh]);


    return (
        <div>
            <div className="wishList">
                <div className="wishListHeader">
                    <h2>Wish List</h2>
                </div>


                <div className="itemsList">


                    {

                        wishlistArray && wishlistArray.map((i, index) => (

                            <div className="listItem" key={index}>

                                <Link to={`/productdetails/${i._id}`} className="itemPhoto">
                                    <img src={i.images[0].url} alt="" />
                                </Link>

                                <Link className="ItemDetails" to={`/productdetails/${i._id}`}>

                                    <p>{i.name}</p>

                                    <div className="rateing">
                                        <span><AiFillStar /></span>
                                        <span><AiFillStar /></span>
                                        <span><AiFillStar /></span>
                                        <span><AiFillStar /></span>
                                        <span><AiFillStar /></span>
                                    </div>


                                    <div className="itemPrice">
                                        <p>₹{i.price}</p>
                                    </div>

                                    <div className="itemInformation">
                                        <p>{i.desc}</p>
                                    </div>
                                </Link>

                                <div className="tocartBtn">
                                    <p onClick={() => wishListProductRemover(i._id)}><span>x</span></p>

                                    <button onClick={() => cartProductAdder(i._id)}>ADD TO CART</button>


                                </div>

                            </div>


                        ))


                    }

                </div>
            </div>
        </div>
    );
};

export default WishList;;;