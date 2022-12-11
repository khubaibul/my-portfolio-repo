import React from 'react';

const About = () => {
    return (
        <div class="container bg-neutral mx-auto w-full h-full">
            <div class="relative wrap overflow-hidden p-10 h-full">
                <div class="border-2-2 absolute border-opacity-20 border-purple-300 h-full border" style={{ left: "50%" }}></div>
                <div class="mb-8 flex justify-between items-center w-full right-timeline">
                    <div class="order-1 w-5/12 bg-purple-800"></div>
                    <div class="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
                        <h1 class="mx-auto font-semibold text-lg text-white">1</h1>
                    </div>
                    <div class="order-1 bg-[#002233] rounded-lg shadow-xl w-5/12 px-6 py-4 text-white">
                        <h3 class="mb-3 font-bold lg:text-xl" style={{ fontFamily: "'Kanit', sans-serif" }}>EDUCATION</h3>
                        <p class="text-sm leading-snug tracking-wide text-opacity-100">Now I am studying in Department of Psychology in Bangladesh National University. Before this, I passed HSC from Bangladesh Air Force Shaheen College. Before that I passed SSC from Pekua Govt Model GMC Institution.
                        </p>
                    </div>
                </div>

                <div class="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                    <div class="order-1 w-5/12"></div>
                    <div class="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
                        <h1 class="mx-auto text-white font-semibold text-lg">2</h1>
                    </div>
                    <div class="order-1 bg-gradient-to-tr from-purple-600 to-pink-600 rounded-lg shadow-xl w-5/12 px-6 py-4">
                        <h3 class="mb-3 font-bold lg:text-xl text-white" style={{ fontFamily: "'Kanit', sans-serif" }}>PROFESSION</h3>
                        <p class="text-sm font-medium leading-snug tracking-wide text-white text-opacity-100">I have been working on Web Development for the past one year. Working with various technologies of web development. And I want to make my career in this industry</p>
                    </div>
                </div>

                <div class="mb-8 flex justify-between items-center w-full right-timeline">
                    <div class="order-1 w-5/12"></div>
                    <div class="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
                        <h1 class="mx-auto font-semibold text-lg text-white">3</h1>
                    </div>
                    <div class="order-1 bg-[#002233] rounded-lg shadow-xl w-5/12 px-6 py-4 text-white">
                        <h3 class="mb-3 font-bold lg:text-xl" style={{ fontFamily: "'Kanit', sans-serif" }}>MY HOBBIES</h3>
                        <p class="text-sm leading-snug tracking-wide text-opacity-100">
                            Apart from Web Development I like to play online video games. I have passion in photography. I read books in my spare time. I like to travel on vacation.
                        </p>
                    </div>
                </div>

                <div class="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                    <div class="order-1 w-5/12"></div>
                    <div class="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
                        <h1 class="mx-auto text-white font-semibold text-lg">4</h1>
                    </div>
                    <div class="order-1 bg-gradient-to-tr from-purple-600 to-pink-600 rounded-lg shadow-xl w-5/12 px-6 py-4">
                        <h3 class="mb-3 font-bold lg:text-xl text-white" style={{ fontFamily: "'Kanit', sans-serif" }}>MY VISION</h3>
                        <p class="text-sm font-medium leading-snug tracking-wide text-white text-opacity-100">
                            Now I am working as a Front-End Developer. My ultimate goal is to be a Full-Stack Developer. And I'm working hard to be succeed.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;