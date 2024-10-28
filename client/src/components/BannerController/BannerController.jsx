import React from 'react';
import './bannerController.scss';
import { useDispatch, useSelector } from 'react-redux';
import { addBanner } from '../../redux/action/dashboard';
import { useState } from 'react';
import { useEffect } from 'react';

const BannerController = () => {

    const dispatch = useDispatch();
    const { banners } = useSelector(state => state.product);

    const [bNo, setBNo] = useState();
    const [bannerText, setBannerText] = useState();
    const [image, setImage] = useState([]);

    const [bannerArray, setBannerArray] = useState([]);

    const sumitHandler = (e) => {
        e.preventDefault();

        addBanner(dispatch, bNo, bannerText, image);

        e.target.reset();

    };

    useEffect(() => {
        setBannerArray(banners.data);
        console.log(bannerArray);
    }, [banners]);

    return (
        <div className='BannerController'>


            <div className="sliderBox">

                <div className="heading">
                    <h3>1 Banner Popup Image</h3>
                </div>
                <div className="sliderImg">
                    <label htmlFor="uploadBtn">
                        {
                            bannerArray[0] &&
                            <img htmlFor="uploadBtn" src={bannerArray[0].image.url} alt="" />
                        }

                    </label>
                </div>

                <form action="" encType="multipart/form-data" onSubmit={sumitHandler}>
                    <input id='uploadBtn' hidden type="file" onChange={(e) => setImage(e.target.files)} />
                    <input type="text" required placeholder='Enter the Text' onChange={(e) => setBannerText(e.target.value)} />
                    <button onClick={() => setBNo("1f")}>Upload</button>
                </form>

            </div>



            <div className="sliderBox">

                <div className="heading">
                    <h3>1 Banner Cover Image</h3>
                </div>
                <div className="sliderImg">
                    <label htmlFor="uploadBtn">
                        {
                            bannerArray[1] &&
                            <img htmlFor="uploadBtn" src={bannerArray[1].image.url} alt="" />
                        }
                    </label>
                </div>

                <form action="" encType="multipart/form-data" onSubmit={sumitHandler}>
                    <input id='uploadBtn' hidden type="file" onChange={(e) => setImage(e.target.files)} />
                    <input type="text" required placeholder='Enter the Text' onChange={(e) => setBannerText(e.target.value)} />
                    <button onClick={() => setBNo("1c")}>Upload</button>
                </form>

            </div>


            <div className="sliderBox">

                <div className="heading">
                    <h3>2 Banner Popup Image</h3>
                </div>
                <div className="sliderImg">
                    <label htmlFor="uploadBtn">
                        {
                            bannerArray[2] &&
                            <img htmlFor="uploadBtn" src={bannerArray[2].image.url} alt="" />
                        }
                    </label>
                </div>

                <form action="" encType="multipart/form-data" onSubmit={sumitHandler}>
                    <input id='uploadBtn' hidden type="file" onChange={(e) => setImage(e.target.files)} />
                    <input type="text" required placeholder='Enter the Text' onChange={(e) => setBannerText(e.target.value)} />
                    <button onClick={() => setBNo("2f")}>Upload</button>
                </form>

            </div>


            <div className="sliderBox">

                <div className="heading">
                    <h3>2 Banner Cover Image</h3>
                </div>
                <div className="sliderImg">
                    <label htmlFor="uploadBtn">
                        {
                            bannerArray[3] &&
                            <img htmlFor="uploadBtn" src={bannerArray[3].image.url} alt="" />
                        }
                    </label>
                </div>

                <form action="" encType="multipart/form-data" onSubmit={sumitHandler}>
                    <input id='uploadBtn' hidden type="file" onChange={(e) => setImage(e.target.files)} />
                    <input type="text" required placeholder='Enter the Text' onChange={(e) => setBannerText(e.target.value)} />
                    <button onClick={() => setBNo("2c")}>Upload</button>
                </form>

            </div>

        </div>
    );
};

export default BannerController;