import React from 'react';
import './profileWishlist.scss';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getProudct, getUserWishlistArray, removeProductWishlist } from '../../redux/action/product';

const ProfileWishlist = () => {

    const dispatch = useDispatch();

    const { wishlistArray, pageRefresh } = useSelector(state => state.product);

    const clickHandler = (pNo) => {
        getProudct(dispatch, pNo);
    };

    const removeProudctHandler = (id) => {
        removeProductWishlist(dispatch, id, !pageRefresh);
    };



    useEffect(() => {

        // console.log(wishlistArray);
        // console.log(pageRefresh);

    }, [wishlistArray, pageRefresh]);



    return (
        <div className="profileWishlistWindow">

            <div className="ProfileWishlistWindow">


                {
                    wishlistArray && wishlistArray.map((i, index) => (
                        <div className="productDetails" key={index} onClick={() => clickHandler(i.pNo)}>

                            <Link to={`/productdetails/${i._id}`}>
                                <img src={i.images[0].url} alt="" />
                            </Link>

                            <div>
                                <p>{i.name}</p>
                            </div>

                            <div>
                                <span onClick={() => removeProudctHandler(i._id)}>Remove</span>
                            </div>

                            <div>
                                <button>Add to cart</button>
                            </div>

                        </div>
                    ))
                }

            </div>



        </div>
    );
};

export default ProfileWishlist;