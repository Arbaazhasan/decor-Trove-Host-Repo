import React from 'react';
import Header from '../../components/Header/Header';
import Slider from '../../components/Slider/Slider';
import Banner from '../../components/Banner/Banner';
import NewArrivals from '../../components/NewArrivals/NewArrivals';
import PopularProducts from '../../components/PopularProducts/PopularProducts';
import Footer from '../../components/Footer/Footer';

import './home.scss';

const Home = () => {
    return (
        <div>
            <Header />
            <Slider />
            <Banner />
            <NewArrivals />
            <PopularProducts />
            <Footer />
        </div>
    );
};

export default Home;