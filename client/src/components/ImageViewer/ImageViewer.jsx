import React from 'react';
import './imageViewer.scss';
import { FaGreaterThan, FaLessThan } from "react-icons/fa";
import { IoMdCloseCircle } from "react-icons/io";
import { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { imageViewerCloser } from '../../redux/Reducer/dashboard';

const ImageViewer = () => {

    const dispatch = useDispatch();
    const { imageViewerWindow, imageViewerArray } = useSelector(state => state.dashboard);


    const [imageArray, setImageArray] = useState([imageViewerArray]);
    const [image, setImage] = useState(imageArray[0]);
    const [arrayIndex, setArrayIndex] = useState(0);

    const clickHandler = (url, index) => {
        setImage(url);
        setArrayIndex(index);
    };


    const leftShift = () => {
        arrayIndex == 0 ? setArrayIndex(imageArray.length - 1) : setArrayIndex(pre => pre - 1);
        setImage(imageArray[arrayIndex]);
    };


    const rightShift = () => {
        arrayIndex == imageArray.length - 1 ? setArrayIndex(0) : setArrayIndex(pre => pre + 1);
        setImage(imageArray[arrayIndex]);
    };

    const imageViewerCloseHandler = () => {

        dispatch(imageViewerCloser(!imageViewerWindow));

    };


    useEffect(() => {

        imageViewerArray.length > 0 && setImage(imageArray[arrayIndex].url);
        imageViewerArray && setImageArray(imageViewerArray);

    }, [image, arrayIndex, imageViewerWindow]);

    return (
        <div>

            <div className="imageViewer">

                <div className="closeViewer" onClick={imageViewerCloseHandler}>
                    <IoMdCloseCircle />
                </div>

                <div className="imageView">

                    <div className="left" onClick={() => leftShift()}>
                        <button>
                            <FaLessThan />
                        </button>
                    </div>

                    <div className="center">
                        <div className="image">
                            <img src={image} alt="" />
                        </div>
                    </div>

                    <div className="right" onClick={rightShift}>
                        <button>
                            <FaGreaterThan />
                        </button>
                    </div>

                </div>


                <div className="viewerImageBar">

                    <div className="imagesArray">

                        <div className="images">


                            {
                                imageArray && imageArray.map((url, index) => (
                                    <div className="image" onClick={() => clickHandler(url.url, index)} key={index}>
                                        <img src={url.url} alt="" />
                                    </div>
                                ))
                            }


                        </div>


                    </div>
                </div>

            </div>

        </div>
    );
};

export default ImageViewer;