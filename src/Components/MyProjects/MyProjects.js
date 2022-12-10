import React from 'react';
import { Link } from 'react-router-dom';
import dealsImage from "../../Assets/deals.jpg"
import bookingBD from "../../Assets/booking.jpg"
import kitchen from "../../Assets/kitchen.jpg"

const MyProjects = () => {
    return (
        <div className='bg-[#002233] py-14 mt-40'>
            <h1 className="divider text-white text-3xl font-bold mb-6" style={{ fontFamily: "'Kanit', sans-serif" }}>My Projects
            </h1>
            <p className='lg:text-xl text-white text-center mb-10'>Here are a few past design projects I've worked on. </p>
            <div className='lg:grid grid-cols-3 px-4'>

                <div>
                    <div aria-label='View Item'>
                        <div className='rounded-none relative overflow-hidden rounded-l border hover:rounded hover:scale-y-110 transition duration-200 transform shadow-lg hover:shadow-2xl'>
                            <img
                                className='object-cover w-full h-56 md:h-64 xl:h-80'
                                src={bookingBD}
                                alt=''
                            />
                            <div className='absolute inset-0 px-6 py-4 transition-opacity duration-500 bg-pink-600 bg-opacity-90 opacity-0 hover:opacity-100 flex justify-center items-center'>
                                <div className='text-center'>
                                    <h3 className='mb-4 text-2xl font-bold text-gray-100' style={{ fontFamily: "'Kanit', sans-serif" }}>Booking BD</h3>
                                    <p>Hotel booking agency website. Where traveler can book their desire suite in their favourite hotel.
                                    </p>
                                    <button className='btn btn-sm btn-outline rounded-3xl px-8'>
                                        <a href='https://bookingbd-com.web.app/' target="_blank">See Details</a>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div aria-label='View Item'>
                        <div className='rounded-none relative border overflow-hidden hover:rounded hover:scale-y-110 transition duration-200 transform shadow-lg hover:shadow-2xl'>
                            <img
                                className='object-cover w-full h-56 md:h-64 xl:h-80'
                                src={dealsImage}
                                alt=''
                            />
                            <div className='absolute inset-0 px-6 py-4 transition-opacity duration-500 bg-pink-600 bg-opacity-90 opacity-0 hover:opacity-100 flex justify-center items-center'>
                                <div className='text-center'>
                                    <h3 className='mb-4 text-2xl font-bold text-gray-100' style={{ fontFamily: "'Kanit', sans-serif" }}>Deals Of The Day</h3>
                                    <p>Website for used product sell where seller can sell used product and buyer can buy it.</p>
                                    <button className='btn btn-sm btn-outline rounded-3xl px-8'>
                                        <a href='https://deals-of-the-day-61353.web.app/' target="_blank">See Details</a>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div aria-label='View Item'>
                        <div className='rounded-none relative border overflow-hidden hover:rounded hover:scale-y-110 rounded-r transition duration-200 transform shadow-lg hover:shadow-2xl'>
                            <img
                                className='object-cover w-full h-56 md:h-64 xl:h-80'
                                src={kitchen}
                                alt=''
                            />
                            <div className='absolute inset-0 px-6 py-4 transition-opacity duration-500 bg-pink-600 bg-opacity-90 opacity-0 hover:opacity-100 flex justify-center items-center'>
                                <div className='text-center'>
                                    <h3 className='mb-4 text-2xl font-bold text-gray-100' style={{ fontFamily: "'Kanit', sans-serif" }}>Personal Catering Service</h3>
                                    <p>A chefs personal catering service where food lover can order food. And also can give review which is visible for others.</p>
                                    <button className='btn btn-sm btn-outline rounded-3xl px-8'>
                                        <a href="https://shakibs-kitchen.web.app/" target="_blank">See Details</a>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyProjects;