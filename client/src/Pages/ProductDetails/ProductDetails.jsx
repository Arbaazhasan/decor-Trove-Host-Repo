import React, { useState } from 'react';
import './productDetails.scss';
import { AiFillHeart } from "react-icons/ai";
import { CiHeart } from "react-icons/ci";
import Header from '../../components/Header/Header';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { addProductInCart, addProductWishlist, getProudct, isProductInWishlist, removeProductWishlist } from '../../redux/action/product';
import { useParams } from 'react-router-dom';

const ProductDetails = () => {

    const params = useParams();

    const dispatch = useDispatch();
    const { productDetails, inWishlist, pageRefresh } = useSelector(state => state.product);

    const [productLargerPhoto, setProductLargerPhoto] = useState(0);
    const [imageArray, setImageArray] = useState();

    const [tabs, setTabs] = useState([true, false, false]);




    const setTrue = (index) => {
        setTabs((pre) => { return pre.map((tab, i) => (i == index ? true : false)); });

    };


    const [orderQty, setOrderQty] = useState(1);

    const countPlus = () => {
        setOrderQty(orderQty + 1);
    };


    const countMinus = () => {
        if (orderQty === 1) {
            return setOrderQty(1);

        }
        setOrderQty(orderQty - 1);
    };


    const addProductHandler = (id) => {
        addProductWishlist(dispatch, id, !pageRefresh);
    };


    const removeProudctHandler = (id) => {
        removeProductWishlist(dispatch, id, !pageRefresh);
    };


    const cartAddProductHandler = (id) => {
        addProductInCart(dispatch, id, orderQty);
    };



    useEffect(() => {

        productDetails && setImageArray(productDetails.images);
        // imageArray && console.log(imageArray);

        isProductInWishlist(dispatch, productDetails._id);


        if (params.id && params.id !== productDetails?._id) {
            getProudct(dispatch, params.id);
        }


    }, [productDetails, imageArray,
        inWishlist,
        pageRefresh,
        params.id
    ]);


    return (
        <>
            <Header />

            <div className='ProductDetailsWindow'>
                <div className="ProductDetails">
                    <div className="left">

                        <div className="procutsPhotos">
                            <div className="productPhoto">

                                <div>
                                    <img src={imageArray && imageArray[productLargerPhoto].url} alt="photo" />
                                </div>

                            </div>

                        </div>


                        <div className="photoArrayBar">
                            <div className="photosArray">

                                {
                                    imageArray && imageArray.map((i, index) => {
                                        return <div className="arrayPhoto" key={index} onClick={() => setProductLargerPhoto(index)} >
                                            <img src={imageArray && imageArray[index].url} alt="photo" />

                                        </div>;
                                    })

                                }


                            </div>
                        </div>

                    </div>


                    <div className="right">


                        <div className="productName">
                            <p>{productDetails.name}</p>
                        </div>

                        <div className="isStock">
                            <span>{productDetails.available >= 0 ? "In Stock" : "Out of Stock"}</span>
                        </div>

                        <div className="productPrice">
                            <span>₹{productDetails.price}</span>
                        </div>

                        <div className="productDetails">
                            {/* <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis, aliquam ut. Eos soluta dolores fugiat molestias ut ipsam harum consequuntur corporis suscipit, quia obcaecati enim facilis earum sint fuga at asperiores officia blanditiis saepe explicabo quo quam esse commodi amet? Obcaecati, officiis maxime nostrum cupiditate veritatis fuga mollitia dolore natus consectetur alias dolorum accusamus debitis minus quibusdam ullam iure dolorem suscipit.</p> */}
                            <p>{productDetails.desc}</p>
                        </div>

                        <div className="QtyAndATB">
                            <div className="productQty">
                                <button onClick={countMinus}>&lt;</button>
                                <span>{orderQty}</span>
                                <button onClick={countPlus}>&gt;</button>
                            </div>

                            <div className="AddtoBag">
                                <button onClick={() => { cartAddProductHandler(productDetails._id); }}>ADD TO BAG</button>
                            </div>
                        </div>

                        {

                            inWishlist ?

                                <div className="AddtoWishList" onClick={() => removeProudctHandler(productDetails._id)}>

                                    <span><AiFillHeart /></span>

                                    <p>REMOVE FROM WISH LIST</p>


                                </div>

                                :

                                <div className="AddtoWishList" onClick={() => addProductHandler(productDetails._id)}>

                                    <span><CiHeart /></span>

                                    <p>ADD TO WISH LIST</p>

                                </div>



                        }




                        <div className="paymentMethods">
                            <img src="/PM.png" alt="" />
                        </div>

                        <div className="AboutProduct">

                            <div>
                                <span>pNo:</span>
                                <span>Category:</span>
                                <span>Tags:</span>
                            </div>

                            <div>
                                <p>{productDetails.pNo}</p>
                                <p style={{ color: ' rgb(109, 109, 109)' }}>{productDetails.category}</p>
                                <p >simple </p>
                            </div>

                        </div>



                    </div>
                </div>


                {/* Bottom Part of Product WIndow */}
                <div className="productInformation">
                    <div className="productInfoBar">
                        <p onClick={() => setTrue(0)}>Details</p>
                        <p onClick={() => setTrue(1)}>More Information</p>
                        {/* <p onClick={() => setTrue(2)}>Reviews</p> */}
                    </div>


                    {/* Details  */}

                    {
                        tabs[0] && <div className="productFullDetails">
                            {productDetails.desc}
                        </div>
                    }


                    {/* More Informaiton  */}

                    {
                        tabs[1] && <div className="MoreInforamtionInfo">

                            <div className="MoreInforamtionInfoHeading">

                                <div>
                                    <p> pNo</p>
                                    <p> {productDetails.pNo}</p>
                                </div>

                                <div>
                                    <p> name </p>
                                    <p> {productDetails.name}</p>
                                </div>

                                <div>
                                    <p> desc</p>
                                    <p> {productDetails.desc}</p>
                                </div>

                                <div>
                                    <p> color</p>
                                    <p> {productDetails.color}</p>
                                </div>

                                <div>
                                    <p> price</p>
                                    <p> {productDetails.price}</p>
                                </div>

                                <div>
                                    <p> available</p>
                                    <p> {productDetails.available}</p>
                                </div>

                                <div>
                                    <p> category</p>
                                    <p> {productDetails.category}</p>
                                </div>

                            </div>


                        </div>
                    }


                    {/* Reviews */}


                    {
                        tabs[2] && <div className="productReviewsForm">
                            <div>
                                <h1>You're reviewing</h1>
                                <p>Dummy Product 15</p>
                            </div>

                            <form action="">
                                <div>

                                    <p>Nickname</p>
                                    <input type="text" />

                                </div>


                                <div>

                                    <p>Summary</p>
                                    <input type="text" name="" id="" />

                                </div>

                                <div>
                                    <p>Review</p>
                                    <textarea name="" id="" cols="40" rows="6"></textarea>
                                </div>

                                <button type='submit'>SUBMIT REVIEW</button>

                            </form>
                        </div>
                    }




                </div>

            </div>
        </>

    );
};

export default ProductDetails;