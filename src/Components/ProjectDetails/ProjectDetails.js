import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import ImageSlider from './ImageSlider';
import visitIcon from "../../Assets/external-link.png"
import circleIcon from "../../Assets/dry-clean.png"

const ProjectDetails = () => {
    const [myProject, setMyProject] = useState({});

    const { _id } = useParams();

    useEffect(() => {
        fetch(`https://my-portfolio-server-orpin.vercel.app/my-project/${_id}`)
            .then(res => res.json())
            .then(data => setMyProject(data))
    }, [_id]);


    console.log(myProject);

    const { name, description, FEATURES, Technologies, NPM, liveWebsite, clientSiteCode, serverSiteCode, image
    } = myProject;

    console.log(Technologies);
    return (
        <div className='lg:w-[75%] mx-auto my-10'>
            <h2 className='text-white text-3xl text-center mb-4' style={{ fontFamily: "'Kanit', sans-serif" }}>{name}</h2>
            <div className=''>
                <ImageSlider image={image}></ImageSlider>
            </div>
            <div className='mt-16'>
                <p className='text-white text-center text-lg font-semibold'>{description}</p>
            </div>
            <div className='mt-4'>
                <a href={liveWebsite} target="_blank" className='flex font-bold gap-x-2 bg-gradient-to-r from-purple-600 to-pink-600 w-44 px-2 py-1 hover:text-gray-400 mx-auto'>
                    <img className='w-6' src={visitIcon} alt="" />
                    VISIT WEBSITE
                </a>
            </div>
            <div className='lg:flex justify-center mt-8'>
                <div className='flex gap-x-10'>
                    <a href={clientSiteCode} target="_blank" className='flex font-bold gap-x-2 bg-gradient-to-r from-pink-600 to-purple-600 w-48 px-2 py-1 hover:text-gray-400 mx-auto'>
                        <img className='w-6' src={visitIcon} alt="" />
                        FRONT END CODE
                    </a>
                    <a href={serverSiteCode} target="_blank" className='flex font-bold gap-x-2 bg-gradient-to-r from-pink-600 to-purple-600 w-48 px-2 py-1 hover:text-gray-400 mx-auto'>
                        <img className='w-6' src={visitIcon} alt="" />
                        BACK END CODE
                    </a>
                </div>
            </div>
            <div className='lg:flex justify-center mt-16'>
                <div>
                    <div>
                        <h4 className='text-white text-xl mb-4' style={{ fontFamily: "'Kanit', sans-serif" }}>FEATURES</h4>
                        <div>
                            {
                                FEATURES?.map((feature, i) =>
                                    <div key={i} className="flex items-center text-white gap-x-2">
                                        <img src={circleIcon} className="w-4" alt="" />
                                        <p>{feature}</p>
                                    </div>
                                )
                            }
                        </div>
                    </div>
                    <div className='lg:flex lg:gap-x-36 mt-10'>
                        <div>
                            <h4 className='text-white text-xl mb-4' style={{ fontFamily: "'Kanit', sans-serif" }}>TECHNOLOGIES</h4>
                            <div>
                                {
                                    Technologies?.map((feature, i) =>
                                        <div key={i} className="flex items-center text-white gap-x-2">
                                            <img src={circleIcon} className="w-4" alt="" />
                                            <p>{feature}</p>
                                        </div>
                                    )
                                }
                            </div>
                        </div>
                        <div>
                            <h4 className='text-white text-xl mb-4' style={{ fontFamily: "'Kanit', sans-serif" }}>NPM</h4>
                            <div>
                                {
                                    NPM?.map((feature, i) =>
                                        <div key={i} className="flex items-center text-white gap-x-2">
                                            <img src={circleIcon} className="w-4" alt="" />
                                            <p>{feature}</p>
                                        </div>
                                    )
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectDetails;