import React from 'react';
import phone from "../../Assets/phone-call.png";
import email from "../../Assets/email.png";
import address from "../../Assets/gps.png";
import github from "../../Assets/github.png";
import Linkedin from "../../Assets/linkedin-logo.png";
import useDynamicTitle from '../Shared/Hooks/DynamicTitle/useDynamicTitle';

const Resume = () => {
    useDynamicTitle("Resume");
    return (
        <div className=''>
            <h1 className='text-4xl text-center text-purple-600 mt-5' style={{ fontFamily: "'Kanit', sans-serif" }}>My Resume</h1>
            <div className='bg-white lg:w-[80%] mx-auto shadow-2xl my-14'>
                <div className='bg-[#EDEDED] lg:px-10 text-center py-5'>
                    <h1 className='text-4xl' style={{ fontFamily: "'Kanit', sans-serif" }}>KHUBAIBUL ISLAM SHAKIB</h1>
                    <p className='font-semibold'>WEB DEVELOPER</p>
                </div>
                <div className='my-8'>
                    <h5 className='text-center font-bold'>I have been training and working as a Web Developer for one year. Now I'm a
                        Front-End Web Developer. <br /> My vision is to be a Full Stack Developer.</h5>
                </div>
                <div className='lg:grid grid-cols-5 gap-x-8 lg:px-28 px-4 pb-10'>

                    {/* Contact Section */}
                    <div className='col-span-2 mb-10'>
                        <div>
                            <h3 className='text-xl font-bold'>CONTACT INFO</h3>
                            <hr className='bg-[#EDEDED] mr-56' />
                            <div className='flex items-center gap-x-2 mt-4'>
                                <div>
                                    <img className='w-6' src={phone} alt="" />
                                </div>
                                <div className='font-semibold'>
                                    <p className='-my-2 p-0'>Phone</p>
                                    <p className='m-0 p-0'>+8801832302170</p>
                                </div>
                            </div>
                            <div className='flex items-center gap-x-2 mt-4'>
                                <div>
                                    <img className='w-6' src={email} alt="" />
                                </div>
                                <div className='font-semibold'>
                                    <p className='-my-2 p-0'>Email</p>
                                    <p className='m-0 p-0'>khubaibulislam2001@gmail.com</p>
                                </div>
                            </div>
                            <div className='flex items-center gap-x-2 mt-4'>
                                <div>
                                    <img className='w-6' src={address} alt="" />
                                </div>
                                <div className='font-semibold'>
                                    <p className='-my-2 p-0'>Address</p>
                                    <p className='m-0 p-0'>Mymensingh, Bangladesh</p>
                                </div>
                            </div>
                            <div className='flex items-center gap-x-2 mt-4'>
                                <div>
                                    <img className='w-6' src={github} alt="" />
                                </div>
                                <div className='font-semibold'>
                                    <a href='https://github.com/KIShakib' target="_blank" className='-my-2 p-0 text-blue-700'>GitHub</a>
                                </div>
                            </div>
                            <div className='flex items-center gap-x-2 mt-4'>
                                <div>
                                    <img className='w-6' src={Linkedin} alt="" />
                                </div>
                                <div className='font-semibold'>
                                    <a href='https://github.com/KIShakib' target="_blank" className='-my-2 p-0 text-blue-700'>Linkedin</a>
                                </div>
                            </div>
                        </div>
                        {/* Skill Section */}
                        <div className='mt-8'>
                            <h3 className='text-xl font-bold'>MY SKILLS</h3>
                            <hr className='bg-[#EDEDED] mr-56' />
                            <div className='font-semibold flex gap-x-10'>
                                <div>
                                    <p>HTML5</p>
                                    <p>BOOTSTRAP</p>
                                    <p>JAVASCRIPT</p>
                                    <p>TYPESCRIPT</p>
                                    <p>NODE.JS</p>
                                    <p>MONGODB</p>
                                </div>
                                <div>
                                    <p>CSS3</p>
                                    <p>TAILWIND</p>
                                    <p>MATERIAL UI</p>
                                    <p>REACT</p>
                                    <p>EXPRESS.JS</p>
                                    <p>FIREBASE</p>
                                </div>
                            </div>
                        </div>
                        {/* Extra Skills */}
                        <div className='mt-8'>
                            <h3 className='text-xl font-bold'>EXTRA SKILLS</h3>
                            <hr className='bg-[#EDEDED] mr-56' />
                            <div className='font-semibold'>
                                <div>
                                    <p>GRAPHIC DESIGN</p>
                                    <p>UI/UX DESIGN</p>
                                </div>
                            </div>
                        </div>
                        {/* Tools */}
                        <div className='mt-8'>
                            <h3 className='text-xl font-bold'>TOOLS</h3>
                            <hr className='bg-[#EDEDED] mr-56' />
                            <div className='font-semibold flex gap-x-10'>
                                <div>
                                    <p>VS CODE</p>
                                    <p>GITHUB</p>
                                </div>
                                <div>
                                    <p>NETLIFY</p>
                                    <p>VERCEL</p>
                                </div>
                            </div>
                        </div>
                        {/* Education */}
                        <div className='mt-8'>
                            <h3 className='text-xl font-bold'>EDUCATION</h3>
                            <hr className='bg-[#EDEDED] mr-56' />
                            <div className='font-semibold'>
                                <div>
                                    <p>BSC. IN PSYCHOLOGY <br />
                                        NATIONAL UNIVERSITY OF
                                        BANGLADESH <br />
                                        2019-2023</p>
                                </div>
                            </div>
                        </div>
                        {/* Language */}
                        <div className='mt-8'>
                            <h3 className='text-xl font-bold'>LANGUAGE</h3>
                            <hr className='bg-[#EDEDED] mr-56' />
                            <div className='font-semibold'>
                                <div>
                                    <p>BENGALI : NATIVE</p>
                                    <p>ENGLISH : COMFORTABLE</p>
                                </div>
                            </div>
                        </div>
                    </div>

























                    <div className='col-span-3'>
                        <h3 className='text-xl font-bold'>MY PROJECTS</h3>
                        <hr className='bg-[#EDEDED] mr-56' />

                        {/* Projects */}

                        {/* Projects 1 */}
                        <div className='mt-6'>
                            <h1 className='text-lg font-semibold'>CYCLE SELLING WEBSITE</h1>
                            <p className='pl-6'>Cycle selling website, where sellers can give sell posts
                                for their used cycle. And the buyer can buy used cycle.
                                Difference dashboards for users, sellers and admin.
                            </p>
                            <div className='grid grid-cols-2 my-4 pl-6'>
                                <a href="https://deals-of-the-day-61353.web.app/" className='text-blue-700' target="_blank"><span className='text-xs'>⚫</span> Live Website</a>
                                <a href="https://github.com/KIShakib/deals-of-the-day-client-site-repo" className='text-blue-700' target="_blank"><span className='text-xs'>⚫</span> Client Site Code</a>
                                <a href="https://github.com/KIShakib/deals-of-the-day-server-site-repo" className='text-blue-700' target="_blank"><span className='text-xs'>⚫</span> Server Site Code</a>
                            </div>
                            <div>
                                <h4 className='font-semibold'>FEATURES</h4>
                                <div className='pl-6'>
                                    <p><span className='text-xs'>⚫</span> Seller can buy used product which is posted by seller.
                                    </p>
                                    <p><span className='text-xs'>⚫</span> Seller can post their post and also can advertise.
                                    </p>
                                    <p><span className='text-xs'>⚫</span> Payment system implement.
                                    </p>
                                </div>
                            </div>
                            <div className='my-4'>
                                <h4 className='font-semibold'>TECHNOLOGIES</h4>
                                <p className='pl-6'><span className='text-xs'>⚫</span> REACT, TAILWIND, NODE, EXPRESS, FIREBASE, MONGODB, STRIPE</p>
                            </div>
                        </div>
                        {/* Projects 2 */}
                        <div className='mt-10'>
                            <h1 className='text-lg font-semibold'>HOTEL BOOKING WEBSITE</h1>
                            <p className='pl-6'>A website for booking hotel suites by location. Where a
                                user can book a hotel suite of his choice.
                            </p>
                            <div className='grid grid-cols-2 my-4 pl-6'>
                                <a href="https://bookingbd-com.web.app/" className='text-blue-700' target="_blank"><span className='text-xs'>⚫</span> Live Website</a>
                                <a href="https://github.com/KIShakib/booking-bd" className='text-blue-700' target="_blank"><span className='text-xs'>⚫</span> Client Site Code</a>
                                <a href="https://github.com/KIShakib/bookingbd-server" className='text-blue-700' target="_blank"><span className='text-xs'>⚫</span> Server Site Code</a>
                            </div>
                            <div>
                                <h4 className='font-semibold'>FEATURES</h4>
                                <div className='pl-6'>
                                    <p><span className='text-xs'>⚫</span> User can book their desire hotel based on location.
                                    </p>
                                    <p><span className='text-xs'>⚫</span> Details are give by using many functionalities about every hotel.
                                    </p>
                                    <p><span className='text-xs'>⚫</span> After booking their suite, there is a payment page with total price.
                                    </p>
                                </div>
                            </div>
                            <div className='my-4'>
                                <h4 className='font-semibold'>TECHNOLOGIES</h4>
                                <p className='pl-6'><span className='text-xs'>⚫</span> REACT, TAILWIND, NODE, EXPRESS, FIREBASE</p>
                            </div>
                        </div>
                        {/* Projects 2 */}
                        <div className='mt-10'>
                            <h1 className='text-lg font-semibold'>FOOD E-COMMERCE</h1>
                            <p className='pl-6'>Food e-commerce website. Where food lover can buy
                                their desire food based on category. Also admin can
                                add food from dashboard.
                            </p>
                            <div className='grid grid-cols-2 my-4 pl-6'>
                                <a href="https://shakibs-kitchen.web.app/" className='text-blue-700' target="_blank"><span className='text-xs'>⚫</span> Live Website</a>
                                <a href="https://github.com/KIShakib/e-commerce-site-client" className='text-blue-700' target="_blank"><span className='text-xs'>⚫</span> Client Site Code</a>
                                <a href="https://github.com/KIShakib/e-commerce-site-server" className='text-blue-700' target="_blank"><span className='text-xs'>⚫</span> Server Site Code</a>
                            </div>
                            <div>
                                <h4 className='font-semibold'>FEATURES</h4>
                                <div className='pl-6'>
                                    <p><span className='text-xs'>⚫</span> Food selling based e-commerce website.
                                    </p>
                                    <p><span className='text-xs'>⚫</span> User can interact by giving their real time review.
                                    </p>
                                    <p><span className='text-xs'>⚫</span> There is an admin dashboard from where admin can add food.
                                    </p>
                                </div>
                            </div>
                            <div className='my-4'>
                                <h4 className='font-semibold'>TECHNOLOGIES</h4>
                                <p className='pl-6'><span className='text-xs'>⚫</span> REACT, TAILWIND, NODE, EXPRESS, FIREBASE, MONGODB</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='flex justify-center mb-8'>
                <button className='btn btn-outline rounded-none btn-accent'><a href="../../Assets/Khubaibul-Islam-Shakib-Web-Developer-Resume.pdf" download="">Download Resume</a></button>
            </div>
        </div>
    );
};

export default Resume;