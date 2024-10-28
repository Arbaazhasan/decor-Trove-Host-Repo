import React from 'react';
import './Products.scss';
import { AiFillStar } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";

import { Link } from 'react-router-dom';
import Header from '../../components/Header/Header';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getProudct, getSearchProduct } from '../../redux/action/product';
import { useState } from 'react';
import { IoCloseCircleOutline } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaArrowLeft } from "react-icons/fa6";

const Products = () => {

    const { allProducts, productCategory, searchProductArray } = useSelector(state => state.product);
    const [searchString, setSearchString] = useState();
    const [isSearch, setIsSearch] = useState(false);

    const disptach = useDispatch();

    const clickHandler = (id) => {
        getProudct(disptach, id);
    };

    const searchHandler = (e) => {

        e.preventDefault();

        getSearchProduct(disptach, searchString);
        setIsSearch(true);
    };
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 780);


    useEffect(() => {
        // console.log(allProducts);

        // console.log(productCategory[0].Category)g;
        // console.log(searchProductArray);
        const handleResize = () => setIsMobile(window.innerWidth <= 780);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);

    }, [allProducts, productCategory, searchProductArray]);


    const [productCategoryList, setProductCategoryList] = useState(false);


    return (
        <>
            <Header />

            <div>
                <div className="ProductPage">

                    <div className="left" style={{ "display": isMobile ? productCategoryList ? "block" : "none" : "block" }}>

                        <div className="header">
                            <p> Category <span onClick={() => setProductCategoryList((pre) => !pre)} ><FaArrowLeft /></span></p>
                        </div>

                        <div className="productList">

                            {
                                productCategory && productCategory.map((i, index) => (
                                    <dl key={index} >
                                        <dt>+ {i.Category}</dt>
                                        {
                                            i.pNo.map((j, index) => (
                                                <dd key={index}><Link to={`/productdetails/${j._id}`} key={index} onClick={() => clickHandler(j._id)}>{j.name}</Link></dd>

                                            ))
                                        }

                                    </dl>

                                ))
                            }

                            {/* <dl>
                                <dt>+ Door Bell</dt>
                                <dd>Brown</dd>
                                <dd>Iron</dd>
                                <dd>Iron</dd>


                                <dl>
                                    <dt>+ Pairs</dt>
                                    <dd>Two</dd>
                                    <dd>Three</dd>

                                </dl>
                            </dl> */}

                        </div>


                    </div>



                    <div className="right">
                        <div className="header">
                            {
                                isSearch ?
                                    <p><span onClick={() => setProductCategoryList((pre) => !pre)}><RxHamburgerMenu /></span>Search </p>
                                    :
                                    <p><span onClick={() => setProductCategoryList((pre) => !pre)}><RxHamburgerMenu /></span> All Products</p>
                            }


                            <form action="" >
                                <input type="text" placeholder='what are you looking for ?' onChange={(e) => setSearchString(e.target.value)} onClick={() => setIsSearch(true)} />


                                {
                                    isSearch === true ? <span onClick={() => { setIsSearch(false), console.log(isSearch); }}><IoCloseCircleOutline /></span> : ""
                                }
                                <button onClick={(e) => searchHandler(e)}><BsSearch /></button>
                            </form>
                        </div>


                        <div className="products">

                            {

                                isSearch ?
                                    searchProductArray && searchProductArray.length === 0 ?

                                        <div className='pNotFound'>
                                            <h1>Proudct not Found !!!</h1>
                                        </div>

                                        :

                                        searchProductArray && searchProductArray.map((i, index) => (

                                            <Link className="productWindow" to={`/productdetails/${i._id}`} key={index} onClick={() => clickHandler(i._id)}>
                                                <div className="productPhoto">
                                                    <img src={i.images[0] && i.images[0].url} alt="error" />
                                                </div>
                                                <div className="nameAndPrice">
                                                    <p>{i.name}</p>
                                                    <span>₹{i.price}</span>
                                                </div>
                                                <div className="productingRateing">
                                                    <span><AiFillStar /></span>
                                                    <span><AiFillStar /></span>
                                                    <span><AiFillStar /></span>
                                                    <span><AiFillStar /></span>
                                                    <span><AiFillStar /></span>
                                                </div>
                                            </Link>

                                        ))

                                    :


                                    allProducts && allProducts.map((i, index) => (

                                        <Link className="productWindow" to={`/productdetails/${i._id}`} key={index} onClick={() => clickHandler(i._id)}>
                                            <div className="productPhoto">
                                                <img src={i.images[0] && i.images[0].url} alt="error" />
                                            </div>
                                            <div className="nameAndPrice">
                                                <p>{i.name}</p>
                                                <span>₹{i.price}</span>
                                            </div>
                                            {/* <div className="productingRateing">
                                                <span><AiFillStar /></span>
                                                <span><AiFillStar /></span>
                                                <span><AiFillStar /></span>
                                                <span><AiFillStar /></span>
                                                <span><AiFillStar /></span>
                                            </div> */}

                                            <div className="productShortDescription">
                                                <p max={20}>{i.desc.slice(0, 35)}...</p>
                                            </div>


                                        </Link>

                                    ))

                            }


                        </div>

                    </div>
                </div>
            </div>

        </>

    );
};

export default Products;