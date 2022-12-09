import React from 'react';
import Advertise from '../../Advertise/Advertise';
import Skills from '../../Skills/Skills';
import TopBanner from '../TopBanner/TopBanner';

const Home = () => {
    return (
        <div className='lg:w-[80%] mx-auto'>
            <TopBanner></TopBanner>
            <Advertise></Advertise>
            <Skills></Skills>
        </div>
    );
};

export default Home;