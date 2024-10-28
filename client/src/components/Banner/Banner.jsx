import React, { useEffect, useState } from 'react';
import './banner.scss';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Banner = () => {

    const { banners } = useSelector(state => state.product);

    const [bannerImage, setBannerImage] = useState();
    const [bannerText, setBannerText] = useState();

    useEffect(() => {
        banners.data && setBannerImage(banners.data[0].image.url);
        banners.data && setBannerText(banners.data[0].bannerText);
        // banners.data && console.log(banners.data);
    }, [banners]);


    return (
        <div>
            <div className="bannerWindow">

                <div className="bannerLine">
                    <div>
                        <img src="worldwide.png" alt="img" />
                        <p>WORLDWIDE SHIPPING</p>
                    </div>

                    <div>
                        <img src="quality.png" alt="img" />
                        <p>QUALITY INSPECTIONS</p>
                    </div>

                    <div>
                        <img src="feedback.png" alt="img" />
                        <p>99% POSITIVE FEEDBACKS</p>
                    </div>

                </div>

                <div className="bannerAdds">

                    <div className="bannerAdd" style={{ backgroundImage: `url(${banners.data && banners.data[1].image.url})` }}>
                        <div className="bannerImg">
                            <img src={banners.data && banners.data[0].image.url} alt="" />
                        </div>

                        <div className="bannerContent">
                            <p>Sale of 50%</p>
                            {/* <p>{banners.data && banners.data[2].bannerText}</p> */}

                            <Link to={'/productes'}>
                                <span>Show Now</span>
                            </Link>
                        </div>
                    </div>




                    <div className="bannerAdd" style={{ backgroundImage: `url(${banners.data && banners.data[3].image.url})` }}>
                        <div className="bannerImg">

                            <img src={banners.data && banners.data[2].image.url} alt="" />

                        </div>

                        <div className="bannerContent">
                            {/* <p>{banners.data && banners.data[2].bannerText}</p> */}
                            <p>Sale of 50%</p>


                            <Link to={'/productes'}>
                                <span>Show Now</span>
                            </Link>
                        </div>
                    </div>



                </div>
            </div>

        </div >
    );
};

export default Banner;