import React from 'react';
import './sliderController.scss';
import { useDispatch, useSelector } from 'react-redux';
import { addSlider, deleteSlide } from '../../redux/action/dashboard';
import { useEffect } from 'react';
import { useState } from 'react';

const SliderController = () => {

    const dispatch = useDispatch();
    const { sliderSlides } = useSelector(state => state.product);

    const [slideNo, setSlideNo] = useState();
    const [slideText, setSlideText] = useState();
    const [slideImage, setSlideImage] = useState([]);
    const [sliderSlideArray, setSliderSlideArray] = useState([]);


    const submitHandler = (e) => {

        e.preventDefault();

        addSlider(dispatch, slideNo, slideText, slideImage);

        e.target.reset();

    };

    const deleteHandler = async (no) => {

        deleteSlide(dispatch, no);

    };


    useEffect(() => {
        setSliderSlideArray(sliderSlides.message);
        console.log(sliderSlideArray);

    }, [sliderSlides]);



    return (
        <div>

            <div className="sliderWindow">

                <div className="sliderBox">

                    <div className="sliderImg">
                        <label htmlFor="uploadBtn">
                            {
                                sliderSlideArray[0] ?
                                    <img htmlFor="uploadBtn" src={sliderSlideArray[0].slideImage[0].url} alt="" />
                                    :
                                    <img htmlFor="uploadBtn" src="noImage.jpg" alt="" />
                            }


                        </label>
                    </div>

                    <form action="" onSubmit={submitHandler}>
                        <input id='uploadBtn' hidden type="file" onChange={(e) => setSlideImage(e.target.files)} />
                        <input type="text" required placeholder='Enter the Text' onChange={(e) => setSlideText(e.target.value)} />

                        <div>
                            <button onClick={() => setSlideNo(1)}>Upload</button>
                            <button onClick={() => deleteHandler(1)} >Delete</button>
                        </div>
                    </form>

                </div>



                <div className="sliderBox">

                    <div className="sliderImg">
                        <label htmlFor="uploadBtn">
                            {
                                sliderSlideArray[1] ?
                                    <img htmlFor="uploadBtn" src={sliderSlideArray[1].slideImage[0].url} alt="" />
                                    :
                                    <img htmlFor="uploadBtn" src="noImage.jpg" alt="" />
                            }



                        </label>
                    </div>

                    <form action="" onSubmit={submitHandler}>
                        <input id='uploadBtn' hidden type="file" onChange={(e) => setSlideImage(e.target.files)} />
                        <input type="text" required placeholder='Enter the Text' onChange={(e) => setSlideText(e.target.value)} />
                        <div>
                            <button onClick={() => setSlideNo(2)}>Upload</button>
                            <button onClick={() => deleteHandler(2)} >Delete</button>
                        </div>
                    </form>

                </div>


                <div className="sliderBox">

                    <div className="sliderImg">
                        <label htmlFor="uploadBtn">
                            {
                                sliderSlideArray[2] ?
                                    <img htmlFor="uploadBtn" src={sliderSlideArray[2].slideImage[0].url} alt="" />
                                    :
                                    <img htmlFor="uploadBtn" src="noImage.jpg" alt="" />
                            }
                        </label>
                    </div>

                    <form action="" onSubmit={submitHandler}>
                        <input id='uploadBtn' hidden type="file" onChange={(e) => setSlideImage(e.target.files)} />
                        <input type="text" required placeholder='Enter the Text' onChange={(e) => setSlideText(e.target.value)} />
                        <div>
                            <button onClick={() => setSlideNo(3)}>Upload</button>
                            <button onClick={() => deleteHandler(3)} >Delete</button>
                        </div>

                    </form>

                </div>




                <div className="sliderBox">

                    <div className="sliderImg">
                        <label htmlFor="uploadBtn">
                            {
                                sliderSlideArray[3] ?
                                    <img htmlFor="uploadBtn" src={sliderSlideArray[3].slideImage[0].url} alt="" />
                                    :
                                    <img htmlFor="uploadBtn" src="noImage.jpg" alt="" />
                            }
                        </label>
                    </div>

                    <form action="" onSubmit={submitHandler}>
                        <input id='uploadBtn' hidden type="file" onChange={(e) => setSlideImage(e.target.files)} />
                        <input type="text" required placeholder='Enter the Text' onChange={(e) => setSlideText(e.target.value)} />
                        <div>
                            <button onClick={() => setSlideNo(4)}>Upload</button>
                            <button onClick={() => deleteHandler(4)} >Delete</button>
                        </div>
                    </form>

                </div>





                <div className="sliderBox">

                    <div className="sliderImg">
                        <label htmlFor="uploadBtn">
                            {
                                sliderSlideArray[4] ?
                                    <img htmlFor="uploadBtn" src={sliderSlideArray[4].slideImage[0].url} alt="" />
                                    :
                                    <img htmlFor="uploadBtn" src="noImage.jpg" alt="" />
                            }
                        </label>
                    </div>

                    <form action="" onSubmit={submitHandler}>
                        <input id='uploadBtn' hidden type="file" onChange={(e) => setSlideImage(e.target.files)} />
                        <input type="text" required placeholder='Enter the Text' onChange={(e) => setSlideText(e.target.value)} />
                        <div>
                            <button onClick={() => setSlideNo(5)}>Upload</button>
                            <button onClick={() => deleteHandler(5)} >Delete</button>
                        </div>

                    </form>

                </div>





                <div className="sliderBox">

                    <div className="sliderImg">
                        <label htmlFor="uploadBtn">
                            {
                                sliderSlideArray[5] ?
                                    <img htmlFor="uploadBtn" src={sliderSlideArray[5].slideImage[0].url} alt="" />
                                    :
                                    <img htmlFor="uploadBtn" src="noImage.jpg" alt="" />
                            }
                        </label>
                    </div>

                    <form action="" onSubmit={submitHandler}>
                        <input id='uploadBtn' hidden type="file" onChange={(e) => setSlideImage(e.target.files)} />
                        <input type="text" required placeholder='Enter the Text' onChange={(e) => setSlideText(e.target.value)} />
                        <div>
                            <button onClick={() => setSlideNo(6)}>Upload</button>
                            <button onClick={() => deleteHandler(6)} >Delete</button>
                        </div>

                    </form>

                </div>


            </div>


        </div>
    );
};

export default SliderController;