import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    let activeStyle = {
        backgroundColor: "#002233",
        color: "white"
    };
    let activeClassName = "underline";
    const navLink = <>
        <li className='hover:bg-pink-600'><NavLink style={({ isActive }) =>
            isActive ? activeStyle : activeClassName
        } to="/">HOME</NavLink></li>
        <li className='hover:bg-pink-600'><NavLink className={({ isActive }) =>
            isActive ? activeClassName : undefined
        } to="/resume">Resume</NavLink></li>
        <li className='hover:bg-pink-600'><NavLink className={({ isActive }) =>
            isActive ? activeClassName : undefined
        } to="/photography">Photography</NavLink></li>
        <li className='hover:bg-pink-600'><NavLink className={({ isActive }) =>
            isActive ? activeClassName : undefined
        } to="/contact">Contact</NavLink></li>
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
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow w-52">
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