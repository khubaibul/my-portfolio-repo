import React from 'react';
import Typewriter from 'typewriter-effect';
import topBannerImage from "../../../Assets/@ki_shakib.png";
import gradientBg from "../../../Assets/wave-haikei.svg"

const TopBanner = () => {
    return (
        <div className='lg:flex md:flex h-full justify-between p-4 rounded z-50'
            style={{ backgroundImage: `url(${gradientBg})` }}
        >
            <div className='text-base-100 flex flex-col justify-center'>
                <h1 className='lg:text-3xl text-pink-600 font-bold text-center mb-5 sm:mb-5 md:mb-5 lg:mb-0'>
                    <Typewriter
                        onInit={(typewriter) => {
                            typewriter.typeString("HI! I'M KHUBAIBUL ISLAM SHAKIB...")
                                .callFunction(() => {
                                    console.log('String typed out!');
                                })
                                .start(true)
                                .pauseFor(2500)
                                .callFunction(() => {
                                    console.log('All strings were deleted');
                                })
                                .start();
                        }}
                    />
                </h1>
            </div>
            <div>
                <img className='rounded-lg md:w-64 sm:w-48 w-48 lg:w-full mx-auto' src={topBannerImage} alt="" />
            </div>
        </div>
    );
};

export default TopBanner;