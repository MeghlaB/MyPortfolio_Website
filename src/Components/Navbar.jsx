import React, { useContext } from 'react'
import { Link, NavLink } from 'react-router-dom'
import logo from '../assets/icons/logo1.png'

export default function Navbar() {
  
     
    const navLinks = <>
        <li><NavLink  to={'/'}>Home</NavLink></li>
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
                            className="menu menu-sm dropdown-content bg-hoverprimary rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {navLinks}
                        </ul>
                    </div>
                    <img src={logo} alt=""  className='w-12 h-12 rounded-lg'/>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 gap-4">
                        {navLinks}
                    </ul>
                </div>
                <div className="navbar-end">
                   
                    <Link to={'/contact'} className="btn border-none outline-none bg-hoverprimary hover:bg-hoverprimary text-white/75">Contact Us </Link>
                </div>
            </div>
        </div>
    )
}
