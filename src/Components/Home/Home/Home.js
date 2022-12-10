import React from 'react';
import Advertise from '../../Advertise/Advertise';
import MyProjects from '../../MyProjects/MyProjects';
import Skills from '../../Skills/Skills';
import TopBanner from '../TopBanner/TopBanner';

const Home = () => {
    return (
        <div className='lg:w-[80%] mx-auto'>
            <TopBanner />
            <Advertise />
            <Skills />
            <MyProjects />
        </div>
    );
};

export default Home;