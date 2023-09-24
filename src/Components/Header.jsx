import React, { useState } from 'react'
import logo from '../assets/logo.png'
import { Link, NavLink } from 'react-router-dom'

const Header = () => {

    return (
        <>
            <header className=' bg-slate-300 w-full py-1 flex justify-around items-center'>
                <Link to="/">
                    <img className=' h-16 invert' src={logo} alt="Logo" />
                </Link>
                <nav>
                    <ul className='flex gap-7 font-semibold text-lg'>
                        <li>
                            <NavLink to="/" className={({ isActive }) => `${isActive ? "text-orange-700" : "text-gray-700"}`}>
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/about" className={({ isActive }) => `${isActive ? "text-orange-700" : "text-gray-700"}`}>
                                About
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/contact" className={({ isActive }) => `${isActive ? "text-orange-700" : "text-gray-700"}`}>
                                Contact
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/services" className={({ isActive }) => `${isActive ? "text-orange-700" : "text-gray-700"}`}>
                                Services
                            </NavLink>
                        </li>
                    </ul>
                </nav>
                <div className='flex gap-3'>
                    <button className=' bg-sky-600 px-5 py-1.5 rounded-md font-medium
        text-lg text-white'>
                        Login</button>
                    <button className=' bg-sky-600 px-5 py-1.5 rounded-md font-medium
        text-lg text-white'>
                        Sign Up</button>
                </div>
            </header>
        </>
    )
}

export default Header
