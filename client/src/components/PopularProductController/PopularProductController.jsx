import React from 'react';
import { useDispatch } from 'react-redux';
import { addPoppularProduct } from '../../redux/action/dashboard';
import { useState } from 'react';

const PopularProductController = () => {

    const dispatch = useDispatch();
    const [tabNo, setTabNo] = useState();
    const [pNo, setPNo] = useState();


    const submitHandler = (e) => {
        e.preventDefault();

        addPoppularProduct(dispatch, tabNo, pNo);

        e.target.reset();
    };


    return (

        <div className="ArrivalController">

            <div className="arrivalProducts">

                <div>

                    <form action="" onSubmit={submitHandler} >

                        <p>Product 1</p>
                        <input type="text" required placeholder='Enter the product No:' onChange={(e) => setPNo(e.target.value)} />
                        <button onClick={() => { setTabNo(1); }}>Upload</button>

                    </form>
                </div>

                <div>

                    <form action="" onSubmit={submitHandler} >

                        <p>Product 2</p>
                        <input type="text" required placeholder='Enter the product No:' onChange={(e) => setPNo(e.target.value)} />
                        <button onClick={() => { setTabNo(2); }}>Upload</button>

                    </form>
                </div>



                <div>

                    <form action="" onSubmit={submitHandler} >

                        <p>Product 3</p>
                        <input type="text" required placeholder='Enter the product No:' onChange={(e) => setPNo(e.target.value)} />
                        <button onClick={() => { setTabNo(3); }}>Upload</button>

                    </form>
                </div>


                <div>

                    <form action="" onSubmit={submitHandler} >

                        <p>Product 4</p>
                        <input type="text" required placeholder='Enter the product No:' onChange={(e) => setPNo(e.target.value)} />
                        <button onClick={() => { setTabNo(4); }}>Upload</button>

                    </form>
                </div>






            </div>
        </div >
    );
};

export default PopularProductController;