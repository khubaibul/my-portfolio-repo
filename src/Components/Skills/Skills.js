import React from 'react';
import design from "../../Assets/design.png";
import develope from "../../Assets/development.png";
import backEnd from "../../Assets/backend.png";
import html from "../../Assets/html-5.png";
import css from "../../Assets/css-3.png";
import tailwind from "../../Assets/tailwind-css-icon.png";
import bootstrap from "../../Assets/bootstrap.png";
import ai from "../../Assets/illustrator.png";
import figma from "../../Assets/figma.png";
import sketch from "../../Assets/sketch.png";
import js from "../../Assets/js.png";
import typeScript from "../../Assets/typescript.png";
import react from "../../Assets/react.png";
import firebase from "../../Assets/icons8-firebase-480.png";
import vscode from "../../Assets/visual-studio.png";
import netlify from "../../Assets/netlify.png";
import gitHub from "../../Assets/github.png";
import nodejs from "../../Assets/nodejs.png";
import expressjs from "../../Assets/express.png";
import mongodb from "../../Assets/mongodb.png";
import vercel from "../../Assets/vercel-svgrepo-com.svg";

const Skills = () => {
    return (
        <div className='bg-[#002233] py-14'>
            <div className="flex flex-col w-full border-opacity-100 ">
                <div className="divider text-white text-3xl font-bold mb-10" style={{ fontFamily: "'Kanit', sans-serif" }}>My Skills</div>
            </div>
            {/* lg:flex lg:flex-row justify-center px-4 md:flex md:flex-col sm:flex sm:flex-col sm:gap-y-10 */}
            <div className='lg:grid grid-cols-3 px-4'>
                <div>
                    <div className="card w-full bg-white border p-4 rounded-none rounded-l hover:rounded hover:scale-y-110 hover:bg-gradient-to-t from-purple-600 to-pink-500 transition duration-200">
                        <div className="card-body mb-4">
                            <img className='w-24 mx-auto' src={design} alt="design" />
                            <h2 className="text-center text-3xl font-bold" style={{ fontFamily: "'Kanit', sans-serif" }}>Design</h2>
                            <p className='text-center'>I value simple content structure, clean design patterns, and thoughtful interactions.</p>
                        </div>
                        <div className='mb-16'>
                            <h2 className='text-center text-xl font-bold mb-4'>Technology I Used For Design</h2>
                            <div className='flex justify-center gap-x-5'>
                                <img className='w-12' src={html} alt="" />
                                <img className='w-12' src={css} alt="" />
                                <img className='w-12' src={bootstrap} alt="" />
                                <img className='w-12' src={tailwind} alt="" />
                            </div>
                        </div>
                        <div>
                            <h2 className='text-center text-xl font-bold mb-4'>Tools I Used For Design</h2>
                            <div className='flex justify-center gap-x-5'>
                                <img className='w-12' src={ai} alt="" />
                                <img className='w-12' src={figma} alt="" />
                                <img className='w-12' src={sketch} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="card w-full bg-white border rounded-none hover:rounded hover:scale-y-110 p-4 hover:bg-gradient-to-t from-purple-600 to-pink-500 transition duration-200">
                        <div className="card-body mb-4">
                            <img className='w-24 mx-auto' src={develope} alt="design" />
                            <h2 className="text-center text-3xl font-bold" style={{ fontFamily: "'Kanit', sans-serif" }}>Develope</h2>
                            <p className='text-center'>I like to code things from source, and enjoy bringing ideas to life in the browser.</p>
                        </div>
                        <div className='mb-16'>
                            <h2 className='text-center text-xl font-bold mb-4'>Technology I Used For Develope</h2>
                            <div className='flex justify-center gap-x-5'>
                                <img className='w-12' src={js} alt="" />
                                <img className='w-12' src={typeScript} alt="" />
                                <img className='w-12' src={react} alt="" />
                                <img className='w-12' src={firebase} alt="" />
                            </div>
                        </div>
                        <div>
                            <h2 className='text-center text-xl font-bold mb-4'>Tools I Used For Develope</h2>
                            <div className='flex justify-center gap-x-5'>
                                <img className='w-12' src={vscode} alt="" />
                                <img className='w-12' src={gitHub} alt="" />
                                <img className='w-12' src={netlify} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="card w-full bg-white border rounded-none p-4 rounded-r hover:rounded hover:scale-y-110 hover:bg-gradient-to-t from-purple-600 to-pink-500 transition duration-200">
                        <div className="card-body mb-4">
                            <img className='w-24 mx-auto' src={backEnd} alt="design" />
                            <h2 className="text-center text-3xl font-bold" style={{ fontFamily: "'Kanit', sans-serif" }}>Back End</h2>
                            <p className='text-center'>I like to use backend for creating API's, store data, web application logic and secure web-application.</p>
                        </div>
                        <div className='mb-16'>
                            <h2 className='text-center text-xl font-bold mb-4'>Technology I Used For Backend</h2>
                            <div className='flex justify-center gap-x-5'>
                                <img className='w-12' src={nodejs} alt="" />
                                <img className='w-12' src={expressjs} alt="" />
                                <img className='w-12' src={mongodb} alt="" />
                            </div>
                        </div>
                        <div>
                            <h2 className='text-center text-xl font-bold mb-4'>Tools I Used For Backend</h2>
                            <div className='flex justify-center gap-x-5'>
                                <img className='w-12' src={vercel} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;