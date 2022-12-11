import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const MyProjects = () => {
    const [myProjects, setMyProjects] = useState([]);

    useEffect(() => {
        fetch("https://my-portfolio-server-orpin.vercel.app/my-projects")
            .then(res => res.json())
            .then(data => setMyProjects(data))
    }, [])



    return (
        <div className='bg-[#002233] py-14 my-40'>
            <h1 className="divider text-white text-3xl font-bold mb-6" style={{ fontFamily: "'Kanit', sans-serif" }}>My Projects
            </h1>
            <p className='lg:text-xl text-white text-center mb-10'>Here are a few past design projects I've worked on. </p>
            <div className='lg:grid grid-cols-3 lg:gap-x-2 lg:gap-y-8 px-4'>
                {
                    myProjects?.map(project =>
                        <div key={project._id}>
                            <div aria-label='View Item'>
                                <div className='rounded-none relative overflow-hidden border rounded hover:rounded hover:scale-y-110 transition duration-200 transform shadow-lg hover:shadow-2xl'>
                                    <img
                                        className='object-cover w-full h-56'
                                        src={project.image[0]}
                                        alt=''
                                    />
                                    <div className='absolute inset-0 px-6 py-4 transition-opacity duration-500 bg-gradient-to-r from-purple-600 to-pink-500 bg-opacity-90 opacity-0 hover:opacity-100 flex justify-center items-center'>
                                        <div className='text-center'>
                                            <h3 className='mb-4 text-2xl font-bold text-gray-100' style={{ fontFamily: "'Kanit', sans-serif" }}>{project.name}</h3>
                                            <p>
                                                {project.description}
                                            </p>
                                            <button className='btn btn-sm btn-outline rounded-3xl px-8'>
                                                <Link to={`/project-details/${project._id}`}>See Details</Link>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default MyProjects;