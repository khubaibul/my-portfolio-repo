import React from 'react';

const ComingSoon = () => {
    return (
        <div>
            <div className='lg:flex hidden justify-center items-center h-screen text-purple-600'>
                <p className='text-6xl font-bold'>C</p>
                <div className='w-9 h-9 border-8 border-dashed rounded-full animate-spin mt-3 border-indigo-600'></div>
                <p className='text-6xl font-bold'>ming S</p>
                <div className='w-9 h-9 border-8 border-dashed rounded-full animate-spin mt-3 border-pink-600'></div>
                <div className='w-9 h-9 border-8 border-dashed rounded-full animate-spin mt-3 border-pink-700'></div>
                <p className='text-6xl font-bold'>n</p>
                <div className='mt-4 flex gap-x-4'>
                    <div className='w-4 h-4 rounded-full bg-pink-700 animate-ping'></div>
                    <div className='w-4 h-4 rounded-full bg-pink-700 animate-ping'></div>
                    <div className='w-4 h-4 rounded-full bg-pink-700 animate-ping'></div>
                </div>
            </div>

            <div className='lg:hidden'>
                <h4 className='text-purple-800 text-center text-xl font-bold'>Coming Soon...</h4>
                <div className=' h-screen flex justify-center items-center'>
                    <div className='mt-4 flex gap-x-4'>
                        <div className='w-4 h-4 rounded-full bg-pink-700 animate-ping'></div>
                        <div className='w-4 h-4 rounded-full bg-pink-700 animate-ping'></div>
                        <div className='w-4 h-4 rounded-full bg-pink-700 animate-ping'></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ComingSoon;