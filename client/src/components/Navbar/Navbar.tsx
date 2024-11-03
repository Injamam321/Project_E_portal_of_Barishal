import React, { useState } from 'react';
import { FaBars, FaHome } from 'react-icons/fa';
import { FaBookmark, FaXmark } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import logo from '../../assets/image.png';
import ServicesMenu from './ServicesMenu';
import UserStatus from './UserStatusMenu';
import { useAuth } from '../../context/AuthContext'; // Adjust the path as necessary

const Navbar: React.FC = () => {
    const [click, setClick] = useState(false);
    const { logout, isLoggedIn, account } = useAuth();

    const toggleNav = () => {
        setClick(!click);
    };

    return (
        <nav className="bg-[#8a173f] sticky top-0 z-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <div className="flex-shrink-0">
                            <Link to="/" className="flex justify-center items-center gap-2">
                                <img className="w-[7rem]" src={logo} alt="Logo" />
                            </Link>
                        </div>
                    </div>
                    <div className="hidden md:block">
                        <div className="ml-4 flex items-center space-x-4 font-semibold">
                            <Link to="/" className="text-white hover:bg-white/70 hover:text-black rounded-lg p-2 flex justify-center items-center gap-1">
                                <FaHome />Home
                            </Link>
                            <Link to="#" className="text-white hover:bg-white/70 hover:text-black rounded-lg p-2 flex justify-center items-center gap-1">
                                <FaBookmark />Favorites
                            </Link>
                            <ServicesMenu />
                            <UserStatus logout={logout} account={account} isLoggedIn={isLoggedIn} />
                        </div>
                    </div>
                    <div className="md:hidden flex items-center">
                        <button className="text-white inline-flex justify-center items-center p-2 rounded-md hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white text-xl" onClick={toggleNav}>
                            {click ? <FaXmark /> : <FaBars />}
                        </button>
                    </div>
                </div>
            </div>
            {click && (
                <div className="md:hidden">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 font-semibold">
                        <Link to="/" className="text-white hover:bg-white hover:text-black rounded-lg p-2 flex justify-start items-center gap-1">
                            <FaHome />Home
                        </Link>
                        <Link to="#" className="text-white hover:bg-white hover:text-black rounded-lg p-2 flex justify-start items-center gap-1">
                            <FaBookmark />Favorites
                        </Link>
                        <ServicesMenu />
                        <UserStatus logout={logout} account={account} isLoggedIn={isLoggedIn} />
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
