import React from 'react';
import Advertise from '../../Advertise/Advertise';
import MyProjects from '../../MyProjects/MyProjects';
import useDynamicTitle from '../../Shared/Hooks/DynamicTitle/useDynamicTitle';
import ToggleTheme from '../../Shared/ToggleTheme/ToggleTheme';
import Skills from '../../Skills/Skills';
import TopBanner from '../TopBanner/TopBanner';

const Home = () => {
    useDynamicTitle("Home");
    return (
        <div className='lg:w-[80%] mx-auto'>
            {/* <ToggleTheme /> */}
            <TopBanner />
            <Advertise />
            <Skills />
            <MyProjects />
        </div>
    );
};

export default Home;