import React from 'react';
import './updateProductController.scss';
import { getSearchProduct, updateProduct } from '../../redux/action/dashboard';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { useEffect } from 'react';

const UpdateProductController = () => {

    const dispatch = useDispatch();
    const { product } = useSelector(state => state.dashboard);


    const [pNo, setPno] = useState('');
    const [name, setName] = useState('');
    const [desc, setDesc] = useState('');
    const [color, setColor] = useState('');
    const [price, setPrice] = useState('');
    const [category, setCategory] = useState('');
    const [available, setAvailable] = useState('');



    const [searchItem, setSearchItem] = useState();
    const [imageArray, setImageArray] = useState([]);
    const [deleteImages, setDeleteImages] = useState([]);
    const [productImages, setProductImages] = useState([]);
    const [newImagesArray, setNewImagesArray] = useState([]);



    const submitHandler = (e) => {
        e.preventDefault();
        getSearchProduct(dispatch, searchItem);
    };


    const updateHandler = (e) => {
        e.preventDefault();
        updateProduct(dispatch,
            searchItem,
            pNo,
            name,
            desc,
            color,
            price,
            category,
            available,
            imageArray,
            newImagesArray,
            deleteImages
        );

        setImageArray([]);
        setProductImages([]);
        setDeleteImages([]);
        e.target.reset();

    };



    // Delete From server
    const getImagePId = (id, index) => {
        setDeleteImages(pre => [...pre, id]);

        const newArray = [...imageArray];
        newArray.splice(index, 1);
        setImageArray(newArray);

    };



    const onImageChange = (e) => {

        if (e.target.files && e.target.files.length > 0) {
            setNewImagesArray(e.target.files);
            const imageUrls = Array.from(e.target.files).map((file) => URL.createObjectURL(file));
            setProductImages(imageUrls);
        }

    };


    const removeAddedImages = (index) => {
        console.log(index);
        const newArray = [...newImagesArray];
        newArray.splice(index, 1);
        const url = newArray.map((file) => URL.createObjectURL(file));
        setNewImagesArray(newArray); // Update the state with the modified newImagesArray
        setProductImages(url);
    };



    useEffect(() => {

        product && setImageArray(product.images);

        // console.log(productImages);
        // console.log(newImagesArray);
        // console.log(deleteImages);

    }, [product, newImagesArray, productImages]);




    return (
        <div>

            <div className="addProduct" onSubmit={submitHandler}>

                <div>

                    <form action="" className='updateProductSearchBar' >
                        <input type="text" placeholder='Enter the item No.' required onChange={(e) => setSearchItem(e.target.value)} />
                        <button>Search</button>
                    </form>
                </div>


                <form action="" encType="multipart/form-data" onSubmit={updateHandler}>
                    <div >

                        <div>
                            <p>Item No.</p>
                            <input type="text" placeholder={product.pNo} onChange={(e) => setPno(e.target.value)} />
                        </div>



                        <div>
                            <p>Name</p>
                            <input type="text" placeholder={product.name} onChange={(e) => setName(e.target.value)} />
                        </div>


                        <div>
                            <p>Desciption</p>
                            <input type="text" placeholder={product.desc} onChange={(e) => setDesc(e.target.value)} />
                        </div>




                        <div>
                            <p>Color</p>
                            <input type="text" placeholder={product.color} onChange={(e) => setColor(e.target.value)} />
                        </div>




                        <div>
                            <p>Price</p>
                            <input type="text" placeholder={product.price} onChange={(e) => setPrice(e.target.value)} />
                        </div>




                        <div>
                            <p>Category</p>
                            <input type="text" placeholder={product.category} onChange={(e) => setCategory(e.target.value)} />
                        </div>




                        <div>
                            <p>Available</p>
                            <input type="text" placeholder={product.available} onChange={(e) => setAvailable(e.target.value)} />
                        </div>

                        <div>
                            <p>Image</p>
                            <input type="file" multiple onChange={(e) => { onImageChange(e); }} />

                        </div>



                    </div>

                    <div className="productPhotos" style={{ height: "11rem" }}>

                        <div>
                            {
                                imageArray && imageArray.map((i, index) => (
                                    <div key={index}>
                                        <span className='deleteBtn' onClick={() => getImagePId(i.public_id, index)}>X</span>
                                        <div>
                                            <img src={i.url} alt="Image" />
                                        </div>
                                    </div>
                                ))
                            }


                            {
                                productImages.map((i, index) => (

                                    <div key={index}>
                                        <span className='deleteBtn' onClick={() => removeAddedImages(index)}>{index}</span>
                                        <div>
                                            <img src={i} alt="Image" />
                                        </div>
                                    </div>

                                ))
                            }




                        </div>


                    </div>



                    <button>Update</button>

                </form>


            </div>




        </div>
    );
};

export default UpdateProductController;