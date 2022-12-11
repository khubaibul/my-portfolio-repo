import React from 'react';
import Lottie from 'lottie-react'
import contactAnimation from "../../Assets/95145-contact.json"
import message from "../../Assets/message.png"
import useDynamicTitle from '../Shared/Hooks/DynamicTitle/useDynamicTitle';

const Contact = () => {
    useDynamicTitle("Contact");

    return (
        <div className='lg:flex lg:gap-x-4 lg:w-[80%] lg:mx-auto my-10'>
            <div className='lg:w-2/5 flex justify-center items-center'>
                <Lottie animationData={contactAnimation} loop={true} />
            </div>
            <div className='lg:w-3/5'>
                <div className="bg-gradient-to-tr from-purple-600 to-pink-600 shadow-3xl">
                    <div className='flex justify-center'>
                        <div className="bg-gray-800 rounded-full p-4 md:p-8">
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="#FFF">
                                <path d="M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-9.458l4.623 3.746zm-4.141-5.929h19.035l-9.517 7.713-9.518-7.713zm5.694 7.188l3.824 3.099 3.83-3.104 5.612 6.817h-18.779l5.513-6.812zm9.208-1.264l4.616-3.741v9.348l-4.616-5.607z" />
                            </svg>
                        </div>
                    </div>
                    <form
                        className="p-12 md:p-24"
                        action="https://formsubmit.co/16086da8a8947123754a37a7a679e261" method="POST"
                    >
                        <div className="flex items-center text-lg mb-6 md:mb-8">
                            <svg className="absolute ml-3" width="24" viewBox="0 0 24 24">
                                <path d="M20.822 18.096c-3.439-.794-6.64-1.49-5.09-4.418 4.72-8.912 1.251-13.678-3.732-13.678-5.082 0-8.464 4.949-3.732 13.678 1.597 2.945-1.725 3.641-5.09 4.418-3.073.71-3.188 2.236-3.178 4.904l.004 1h23.99l.004-.969c.012-2.688-.092-4.222-3.176-4.935z" />
                            </svg>
                            <input type="text" id="username" name='name' className="bg-gray-200 pl-12 py-2 md:py-4 focus:outline-none w-full" placeholder="Your Name" required />
                        </div>
                        <div className="flex items-center text-lg mb-6 md:mb-8">
                            <svg className="absolute ml-3" width="24" viewBox="0 0 24 24">
                                <path d="M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-9.458l4.623 3.746zm-4.141-5.929h19.035l-9.517 7.713-9.518-7.713zm5.694 7.188l3.824 3.099 3.83-3.104 5.612 6.817h-18.779l5.513-6.812zm9.208-1.264l4.616-3.741v9.348l-4.616-5.607z" />
                            </svg>
                            <input type="text" id="username" name='email' className="bg-gray-200 pl-12 py-2 md:py-4 focus:outline-none w-full" placeholder="Your Email" required />
                        </div>
                        <div className="flex items-center text-lg mb-6 md:mb-8">
                            <img src={message} className="absolute ml-3" width="24" viewBox="0 0 24 24" />
                            <textarea type="text" id="username" name='message' className="bg-gray-200 pl-12 py-2 md:py-4 focus:outline-none w-full" placeholder="Your Message" />
                        </div>
                        <button className="bg-gradient-to-b from-gray-700 to-gray-900 font-medium p-2 md:p-4 text-white uppercase w-full">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;