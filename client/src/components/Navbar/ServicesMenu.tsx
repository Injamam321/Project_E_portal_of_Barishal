import React, { useEffect, useRef, useState } from 'react'
import { FaGears } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const ServicesMenu = () => {


    const [dropdownOpenServices, setDropdownOpenServices] = useState(false);
    const dropdownRefServices = useRef<HTMLDivElement>(null);

    const toggleDropdownServices = () => {
        setDropdownOpenServices(!dropdownOpenServices);
    };

    const handleClickOutsideServices = (event: MouseEvent) => {
        if (dropdownRefServices.current && !dropdownRefServices.current.contains(event.target as Node)) {
            setDropdownOpenServices(false);
        }
    };

    useEffect(() => {
        if (dropdownOpenServices) {
            document.addEventListener("mousedown", handleClickOutsideServices);
        } else {
            document.removeEventListener("mousedown", handleClickOutsideServices);
        }
        return () => {
            document.removeEventListener("mousedown", handleClickOutsideServices);
        };
    }, [dropdownOpenServices]);


    return (
        <>
            <div className="relative" ref={dropdownRefServices}>
                <button onClick={toggleDropdownServices} className="text-white hover:bg-white hover:text-black rounded-lg p-2 flex justify-start items-center gap-1">
                    <FaGears />Services
                </button>
                {dropdownOpenServices && (
                    <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50">
                        <Link to="/" className="block px-4 py-2 text-gray-700 hover:bg-gray-300">Education</Link>
                        <Link to="/" className="block px-4 py-2 text-gray-700 hover:bg-gray-300">Jobs</Link>
                        <Link to="/" className="block px-4 py-2 text-gray-700 hover:bg-gray-300">Travel and Tourism</Link>
                        <Link to="/" className="block px-4 py-2 text-gray-700 hover:bg-gray-300">Entertainment</Link>
                        <Link to="/" className="block px-4 py-2 text-gray-700 hover:bg-gray-300">Health</Link>
                        <Link to="/" className="block px-4 py-2 text-gray-700 hover:bg-gray-300">Others</Link>
                    </div>
                )}
            </div>

        </>
    )
}

export default ServicesMenu
