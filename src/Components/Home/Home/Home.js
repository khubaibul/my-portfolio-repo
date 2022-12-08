import React from 'react';
import Advertise from '../../Advertise/Advertise';
import TopBanner from '../TopBanner/TopBanner';

const Home = () => {
    return (
        <div className='w-[80%] mx-auto'>
            <TopBanner></TopBanner>
            <Advertise></Advertise>
        </div>
    );
};

export default Home;