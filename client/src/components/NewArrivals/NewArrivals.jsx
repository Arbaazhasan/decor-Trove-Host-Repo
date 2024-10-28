import React, { useEffect, useState } from 'react';
import './newArrivals.scss';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getArrivalProudcts, getProudct } from '../../redux/action/product';

const NewArrivals = () => {

    const dispatch = useDispatch();

    const { arrivalCategory, arrivalProduct } = useSelector(state => state.product);
    const [categoryArray, setCategoryArray] = useState([]);
    const [callOnce, setCallOnce] = useState(true);

    const productHandler = (_id) => {
        getProudct(dispatch, _id);
    };

    const clickHandler = (category) => {

        getArrivalProudcts(dispatch, category);

    };

    useEffect(() => {

        arrivalCategory && setCategoryArray(arrivalCategory.category);
        // arrivalProduct && console.log(arrivalProduct[0]);
        if (callOnce && categoryArray && categoryArray.length > 0) {
            const category = categoryArray && categoryArray[0];
            // console.log("callOnce", category);
            getArrivalProudcts(dispatch, category);

            setCallOnce(false);
        }



    }, [arrivalCategory, arrivalProduct, categoryArray, arrivalCategory.category]);


    return (
        <div>
            <div className="newArrivalsBar">
                <h1>New Arrivals </h1>

                <div className="newArrivalsProdcutBar">

                    {
                        categoryArray && categoryArray.map((i, index) => (
                            <div key={index} onClick={() => clickHandler(i)}><span >{i}</span> </div>

                        ))
                    }


                </div>


                <div className="arrivalsProducts">


                    {
                        arrivalProduct.length > 0 && arrivalProduct.map((i, index) => (

                            <Link to={`/productdetails/${i._id}`} className="arrivalProduct" key={index} onClick={() => productHandler(i._id)}>
                                <div className="productPhoto" style={{ backgroundImage: `url('${i.images[0] && i.images[0].url}')` }}>
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


                        ))
                    }


                </div>

            </div>
        </div>
    );
};

export default NewArrivals;