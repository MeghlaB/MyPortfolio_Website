import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'


export default function Navbar() {
  
     
    const navLinks = <>
        <li><NavLink to={'/'}>Home</NavLink></li>
        <li><NavLink to={'/about'}>About</NavLink></li>
        <li><NavLink to={'/skils'}>Skils</NavLink></li>
        <li><NavLink to={'/projects'}>Projects</NavLink></li>
    </>

    return (
        <div>
            <div className="navbar text-white fixed top-0 left-0 w-full bg-opacity-70 backdrop-blur-xl z-50 shadow-lg ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {navLinks}
                        </ul>
                    </div>
                    <a className=" font-fontfamily text-xl">MEghla</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 gap-4">
                        {navLinks}
                    </ul>
                </div>
                <div className="navbar-end">
                   
                    <a className="btn bg-btnprimary hover:bg-hoverprimary text-white/75">Button</a>
                </div>
            </div>
        </div>
    )
}
