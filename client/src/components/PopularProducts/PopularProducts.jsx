import React, { useEffect } from 'react';
import './popularProducts.scss';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

const PopularProducts = () => {

    const { popularProudct } = useSelector(state => state.product);

    useEffect(() => {

        // console.log(popularProudct);

    }, [popularProudct]);

    return (
        <div>
            <div className="popularProduct">
                <h1>POPULAR PRODUCT</h1>
                <div className="arrivalsProducts">

                    {
                        popularProudct && Array.from(popularProudct.map((i, index) => (
                            <Link to={`/productdetails/${i._id}`} className="arrivalProduct" key={index}>
                                <div className="productPhoto" style={{ backgroundImage: `url('${i.images[0] && i.images[0].url}')` }}>

                                    {/* <img src="Ap.jpg" alt="img" /> */}
                                    <div className="ItemTag">New</div>
                                    <div className="addToCart">
                                        ADD TO CART
                                    </div>

                                </div>
                                <div className="nameANdPrice">
                                    <p>{i.name}</p>
                                    <span>₹{i.price}</span>
                                </div>
                            </Link>

                        )))

                    }

                </div>
            </div>
        </div>
    );
};

export default PopularProducts;