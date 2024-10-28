import React, { useEffect, useState } from 'react';
import './slider.scss';
import { useDispatch, useSelector } from 'react-redux';
import { getSliderSlides } from '../../redux/action/product';

const Slider = () => {

    const dispatch = useDispatch();
    const { sliderSlides } = useSelector(state => state.product);


    // Slider
    const bgArray = ["slide1.jpg", "slide2.jpg"];
    // const bgArray = [];
    const [count, setCount] = useState(0);
    const [imageUrl, setImageUrl] = useState();
    const [slideText, setSlideText] = useState();


    // Back Slide
    const backSLide = () => {
        setCount(count + 1);
        if (count === sliderSlides.message.length - 1) {
            return setCount(0);
        }
    };

    // Forwad Slide
    const forwadSlide = () => {

        setCount(count - 1);
        if (count === 0) {
            return setCount(sliderSlides.message.length - 1);
        }
    };


    useEffect(() => {

        sliderSlides.message && setImageUrl(sliderSlides.message[count].slideImage[0].url);
        sliderSlides.message && setSlideText(sliderSlides.message[count].slideText);

    }, [sliderSlides, count, imageUrl]);


    return (
        <div>
            <div className="slider" style={{ backgroundImage: `url('${imageUrl}')` }}>

                <div className="leftSlider" onClick={backSLide}><span> &lt; </span></div>
                <div className="sliderContetn">
                    <span>Decor Trove</span>
                    <h1>{slideText}</h1>
                    <button>shop Now</button>
                </div>
                <div className="rightSlider" onClick={forwadSlide}> &gt;</div>

            </div>
        </div>
    );
};

export default Slider;