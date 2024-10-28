import React from 'react';
import './newArrivalsController.scss';
import { useDispatch, useSelector } from 'react-redux';
import { addNewArrivalsProduct, getArrivalCategory, updateArrivalCategory } from '../../redux/action/dashboard';
import { useState } from 'react';
import { useEffect } from 'react';

const NewArrivalsController = () => {

  const dispatch = useDispatch();
  const { categoryArray } = useSelector(state => state.dashboard);

  const [tabNo, setTabNo] = useState();
  const [pNo, setPNo] = useState();
  const [arrivalCategory, setArrivalCategory] = useState();

  const [oldCat, setOldCat] = useState();
  const [newCat, setNewCat] = useState();


  const submitHandler = (e) => {

    e.preventDefault();

    addNewArrivalsProduct(dispatch, pNo, tabNo, arrivalCategory);

    e.target.reset();

  };


  const updateProductCategory = (e) => {

    e.preventDefault();
    setOldCat(arrivalCategory);

    updateArrivalCategory(dispatch, oldCat, newCat);
    e.target.reset();

  };


  const categoryHandler = () => {

    getArrivalCategory(dispatch);

  };


  return (
    <div>
      <div className="ArrivalController">

        <div className="selectArrival">

          <select name="" id="" onChange={(e) => setArrivalCategory(e.target.value)} onClick={categoryHandler}>

            <option value=""></option>
            {
              categoryArray.map((i, index) => (
                <option value={i} key={index}>{i}</option>

              ))
            }

          </select>

        </div>


        <div className="arrivalName">
          <form action="" onSubmit={updateProductCategory}>
            <p>Update Tag Line</p>
            <input type="text" required placeholder='Enter the text' onChange={(e) => setNewCat(e.target.value)} />
            <button>Update</button>
          </form>
        </div>


        <div className="arrivalProducts">

          <div>
            <form action="" onSubmit={submitHandler}>
              <p>Product 1</p>
              <input type="text" placeholder='Enter the product No:' required onChange={(e) => setPNo(e.target.value)} />
              <button onClick={() => setTabNo(1)}>Upload</button>

            </form>
          </div>




          <div>
            <form action="" onSubmit={submitHandler}>
              <p>Product 2</p>
              <input type="text" placeholder='Enter the product No:' required onChange={(e) => setPNo(e.target.value)} />
              <button onClick={() => setTabNo(2)}>Upload</button>

            </form>
          </div>




          <div>
            <form action="" onSubmit={submitHandler}>
              <p>Product 3</p>
              <input type="text" placeholder='Enter the product No:' required onChange={(e) => setPNo(e.target.value)} />
              <button onClick={() => setTabNo(3)}>Upload</button>

            </form>
          </div>




          <div>
            <form action="" onSubmit={submitHandler}>
              <p>Product 4</p>
              <input type="text" placeholder='Enter the product No:' required onChange={(e) => setPNo(e.target.value)} />
              <button onClick={() => setTabNo(4)}>Upload</button>

            </form>
          </div>




          <div>
            <form action="" onSubmit={submitHandler}>
              <p>Product 5</p>
              <input type="text" placeholder='Enter the product No:' required onChange={(e) => setPNo(e.target.value)} />
              <button onClick={() => setTabNo(5)}>Upload</button>

            </form>
          </div>




          <div>
            <form action="" onSubmit={submitHandler}>
              <p>Product 6</p>
              <input type="text" placeholder='Enter the product No:' required onChange={(e) => setPNo(e.target.value)} />
              <button onClick={() => setTabNo(6)}>Upload</button>

            </form>
          </div>




          <div>
            <form action="" onSubmit={submitHandler}>
              <p>Product 7</p>
              <input type="text" placeholder='Enter the product No:' required onChange={(e) => setPNo(e.target.value)} />
              <button onClick={() => setTabNo(7)}>Upload</button>

            </form>
          </div>




          <div>
            <form action="" onSubmit={submitHandler}>
              <p>Product 8</p>
              <input type="text" placeholder='Enter the product No:' required onChange={(e) => setPNo(e.target.value)} />
              <button onClick={() => setTabNo(8)}>Upload</button>

            </form>
          </div>




        </div>
      </div>
    </div>
  );
};

export default NewArrivalsController;