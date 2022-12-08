import React from 'react';
import developerSvg from "../../Assets/mf-avatar.svg"
import Particle from '../Particle/Particle';

const Advertise = () => {
    return (
        <div className='mt-36'>
            <div className='text-white text-center'>
                <h3 className='lg:text-5xl text-2xl' style={{ fontFamily: "'Kanit', sans-serif" }}>Designer, Frontend Developer, React Developer</h3>
                <p className='lg:text-xl mt-2'>I design and develope beautiful web-application, and I love what I do.</p>
            </div>
            <div className='flex justify-center mt-10'>
                <img src={developerSvg} alt="" />
            </div>
            {/* <Particle></Particle> */}
        </div >
    );
};

export default Advertise;