import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const navLink = <>
        <li className='hover:bg-yellow-500'><NavLink to="/">HOME</NavLink></li>
        <li className='hover:bg-yellow-500'><NavLink to="/all-products">Resume</NavLink></li>
        <li className='hover:bg-yellow-500'><NavLink to="/dashboard">Photography</NavLink></li>
        <li className='hover:bg-yellow-500'><NavLink to="/about-us">Contact</NavLink></li>
    </>
    return (
        <div className="navbar bg-transparent lg:px-36 text-white py-6">
            <div className="form-control hidden lg:block">
                <p className='lg:text-lg font-bold text-white'>KHUBAIBUL ISLAM SHAKIB</p>
            </div>
            <div className="navbar-start p-0">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-[#183661] w-52">
                        {navLink}
                    </ul>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {navLink}
                </ul>
            </div>
            <div className="form-control lg:hidden">
                <p className='lg:text-lg font-bold text-white'>KHUBAIBUL ISLAM SHAKIB</p>
            </div>
        </div>
    );
};

export default Navbar;