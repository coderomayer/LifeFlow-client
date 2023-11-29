import React, { useContext, useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import logo from "../assets/life-flow.png"
import { userAuth } from '../Provider/AuthProvider';
import { AiOutlineUser } from "react-icons/ai";


const Navbar = () => {

    const [openNav, setOpenNav] = useState(false);
    const [openAvatarDropdown, setOpenAvatarDropdown] = useState(false);
    const { logOut, user } = useContext(userAuth)
    const navigate = useNavigate()


    const toggleNav = () => {
        setOpenNav(!openNav);
        setOpenAvatarDropdown(false); // Close avatar dropdown
    };

    const toggleAvatarDropdown = () => {
        setOpenAvatarDropdown(!openAvatarDropdown);
    };


    const navList = () => {
        return (
            <>
                <NavLink
                    to="/"
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "text-blue-900" : ""
                    }
                >
                    Home
                </NavLink>
                <NavLink
                    to="/donation-requests"  // Replace with the correct path for the "Event" link
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "text-blue-900" : ""
                    }
                >
                    Donation Requests
                </NavLink>
                <NavLink
                    to="/blog"  // Replace with the correct path for the "Services" link
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "text-blue-900" : ""
                    }
                >
                    Blog
                </NavLink>

            </>
        );
    };



    const handleLogout = () => {
        logOut()
            .then(() => {
                navigate('/')
            })
            .catch()
    }


    return (

        <header className="bg-slate-200 border-b-2 border-gray-200 font-DM ">

            <div className="container mx-auto py-4 px-4 flex items-center justify-between">

                <div>
                    <a href="/" className="text-2xl font-semibold text-gray-800">
                        <img className='w-16' src={logo} alt="Logo" />
                    </a>
                </div>



                {/* Desktop Menu */}
                <nav className="hidden md:flex space-x-4">
                    {navList()}

                </nav>


                {/* Mobile Menu */}
                <div>

                    {/* Avatar */}

                    <div onClick={toggleAvatarDropdown} className="relative ">

                        <h3 className="cursor-pointer border border-black rounded-full p-2">

                            { user ? <img src={user?.photoURL} alt="" /> :
                                <AiOutlineUser></AiOutlineUser>
                                
                                }
                            </h3>

                        <div className={`absolute right-4  ${openAvatarDropdown ? '' : 'hidden'} bg-slate-300 rounded shadow-md mt-2 space-y-2 w-48 `}>
                            {user ? (
                                <div className='p-8 rounded flex flex-col gap-4 '>
                                    <h3>{user?.email}</h3>
                                    <div className='flex flex-col gap-2 md:hidden '>
                                        {navList()}
                                    </div>
                                    <button onClick={handleLogout} className='bg-red-600 px-4 py-2 rounded text-white text-xs'>Logout</button>
                                </div>
                            ) : (
                                <div className='p-8 rounded space-y-4'>
                                    <div className='flex flex-col gap-1 md:hidden'>
                                        {navList()}
                                    </div>
                                    <div className='flex flex-col gap-2'>
                                        <Link to="/registration">
                                            <h2 className='text-xs border border-red-600 rounded-lg px-6 py-2 block'>Sign Up</h2>
                                        </Link>
                                        <Link className='text-xs border border-red-600 rounded-lg px-6 py-2' to="/login">Sign In</Link>
                                    </div>
                                </div>
                            )}
                        </div>


                    </div>
                </div>


                <div className='hidden md:visible'>
                    {
                        user ?
                            <>

                                <button onClick={handleLogout} className='bg-red-600 px-4 py-2 rounded text-white text-xs'>Logout</button>

                            </>

                            :

                            <>

                                <Link className='text-xs border border-red-600 rounded px-6 py-2' to="/registration">Registration</Link>

                            </>
                    }
                </div>




            </div>
        </header>
    );
};

export default Navbar;
