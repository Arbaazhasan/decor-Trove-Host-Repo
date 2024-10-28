import React from 'react';
import './addproduct.scss';
import { useDispatch } from 'react-redux';
import { addProduct } from '../../redux/action/dashboard';
import { useState } from 'react';

const AddProduct = () => {

    const dispatch = useDispatch();

    const [pNo, setPno] = useState('');
    const [name, setName] = useState('');
    const [desc, setDesc] = useState('');
    const [color, setColor] = useState('');
    const [price, setPrice] = useState('');
    const [category, setCategory] = useState('');
    const [available, setAvailable] = useState('');
    const [images, setImages] = useState([]);
    const [productImages, setProductImages] = useState([]);


    // Show Selected Images by user
    const onImageChange = (e) => {

        if (e.target.files && e.target.files.length > 0) {
            const imageUrls = Array.from(e.target.files).map((file) => URL.createObjectURL(file));
            setProductImages(imageUrls);
        }

    };

    const addProductData = (e) => {

        e.preventDefault();

        addProduct(dispatch,
            pNo,
            name,
            desc,
            color,
            price,
            category,
            available,
            images,
        );

        setProductImages([]);

        // Rest Form All Data
        e.target.reset();

    };



    return (
        <div>

            <div className="addProduct">
                <form action="" encType="multipart/form-data" onSubmit={addProductData}>
                    <div>

                        <div>
                            <p>Item No.</p>
                            <input type="text" required onChange={(e) => setPno(e.target.value)} />
                        </div>



                        <div>
                            <p>Name</p>
                            <input type="text" required onChange={(e) => setName(e.target.value)} />
                        </div>


                        <div>
                            <p>Desciption</p>
                            <input type="text" required onChange={(e) => setDesc(e.target.value)} />
                        </div>




                        <div>
                            <p>Color</p>
                            <input type="text" required onChange={(e) => setColor(e.target.value)} />
                        </div>




                        <div>
                            <p>Price</p>
                            <input
                                type="text"
                                pattern="[0-9]*"
                                title="Please enter only numeric characters."
                                required
                                onChange={(e) => setPrice(e.target.value)}

                            />
                        </div>




                        <div>
                            <p>Category</p>
                            <input type="text" required onChange={(e) => setCategory(e.target.value)} />
                        </div>



                        <div>
                            <p>Available</p>
                            <input type="text" pattern="[0-9]*" title="Please enter only numeric characters." required onChange={(e) => setAvailable(e.target.value)} />
                        </div>

                        <div>
                            <p>Image</p>
                            <input type="file" required multiple onChange={(e) => { setImages(e.target.files); onImageChange(e); }} />
                        </div>



                    </div>

                    <div className="productPhotos">

                        <div>


                            {
                                productImages && productImages.map((i) => (

                                    <div key={i}>

                                        <div>
                                            <img src={i || "slide1.jpg"} alt="" />

                                        </div>
                                    </div>
                                ))
                            }

                        </div>


                    </div>



                    <button>Add</button>

                </form>


            </div>


        </div>
    );
};

export default AddProduct;