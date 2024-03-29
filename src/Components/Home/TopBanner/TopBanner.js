import React from 'react';
import Typewriter from 'typewriter-effect';
import topBannerImage from "../../../Assets/@ki_shakib.png";
import gradientBg from "../../../Assets/wave-haikei.svg"

const TopBanner = () => {

    const name = <h1 style={{ fontFamily: "'Satisfy', sans-serif" }}>Khubaibul Islam Shakib</h1>


    return (
        <div className='lg:flex md:flex h-full justify-between p-4 rounded mt-16'
            style={{ backgroundImage: `url(${gradientBg})` }}
        >
            <div className='text-base-100 flex flex-col justify-center'>
                <h1 className='lg:text-3xl text-pink-600 font-bold text-center mb-5 sm:mb-5 md:mb-5 lg:mb-0'>
                    <Typewriter
                        onInit={(typewriter) => {
                            typewriter.typeString(`Hi! I'm <strong>Khubaibul Islam Shakib</strong>`)
                                .callFunction(() => {
                                    console.log('String typed out!');
                                })
                                .start(true)
                                .pauseFor(1200)
                                .deleteChars(22)
                                .typeString("<strong>A Web Developer...</strong>")
                                .callFunction(() => {
                                    console.log('All strings were deleted');
                                })
                                .start(true)
                                .pauseFor(1200)
                                .deleteChars(18)
                                .typeString("<strong>Khubaibul Islam Shakib</strong>")
                                .callFunction(() => {
                                    console.log('All strings were deleted');
                                })
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