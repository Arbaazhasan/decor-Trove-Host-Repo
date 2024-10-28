import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getAllProduct, imageViewerLoader } from '../../redux/action/dashboard';


const AllProducts = () => {

    const { allProducts } = useSelector(state => state.dashboard);
    const dispatch = useDispatch();


    const imageViewerHandler = (i) => {
        imageViewerLoader(dispatch, { imageArray: i.images });
    };


    useEffect(() => {
        getAllProduct(dispatch);
    }, []);

    return (
        <div>

            <div className="searchProductWindow">


                <div className="searchedItemList"  >
                    <div className="searchedItemHeader">
                        <p>index</p>
                        <p>item No.</p>
                        <p>Name</p>
                        <p>Desciption</p>
                        <p>Color</p>
                        <p>price</p>
                        <p>Category</p>
                        <p>Available</p>
                        <p>Image</p>
                    </div>

                    <div className="searchedItem" style={{ maxHeight: "85vh" }}>


                        {
                            allProducts &&
                            allProducts.map((i, index) => (
                                <div key={i._id}>
                                    <p><span>{index + 1}</span></p>
                                    <p><span>{i.pNo}</span></p>
                                    <p><span>{i.name}</span></p>
                                    <p><span>{i.desc}</span></p>
                                    <p><span>{i.color}</span></p>
                                    <p><span>{i.price}</span></p>
                                    <p><span>{i.category}</span></p>
                                    <p><span>{i.available}</span></p>
                                    <p onClick={() => imageViewerHandler(i)}>
                                        {i.images.length > 0 ? (
                                            <img src={i.images[0].url} alt="error" />
                                        ) : (
                                            <span>No Image</span>
                                        )}
                                    </p>
                                </div>
                            ))

                        }


                    </div>

                </div>
            </div>

        </div >
    );
};

export default AllProducts;