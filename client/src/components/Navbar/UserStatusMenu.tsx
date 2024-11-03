import { useEffect, useRef, useState } from 'react';
import { FaSignInAlt } from 'react-icons/fa';
import { FaUser } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import { Account } from '../../context/AuthContext';


interface UserStatusProps {
    logout: () => void
    isLoggedIn: boolean
    account: Account | null
}


const UserStatus = ({ logout, isLoggedIn, account }: UserStatusProps) => {


    const [dropdownOpenUser, setDropdownOpenUser] = useState(false);
    const dropdownRefUser = useRef<HTMLDivElement>(null);

    const handleClickOutsideUser = (event: MouseEvent) => {
        if (dropdownRefUser.current && !dropdownRefUser.current.contains(event.target as Node)) {
            setDropdownOpenUser(false);
        }
    };

    const toggleDropdownUser = () => {
        setDropdownOpenUser(!dropdownOpenUser);
    };

    const handleLogout = async () => {
        try {
            await logout();// Redirect to login page after logout
        } catch (err) {
            console.error('Logout failed', err);
        }
    };

    useEffect(() => {
        if (dropdownOpenUser) {
            document.addEventListener("mousedown", handleClickOutsideUser);
        } else {
            document.removeEventListener("mousedown", handleClickOutsideUser);
        }
        return () => {
            document.removeEventListener("mousedown", handleClickOutsideUser);
        };
    }, [dropdownOpenUser]);

    return (
        <>
            {isLoggedIn ? (
                <div className="relative" ref={dropdownRefUser}>
                    <button onClick={toggleDropdownUser} className="text-white hover:bg-white/70 hover:text-black rounded-lg p-2 flex justify-center items-center gap-1">
                        <FaUser />
                    </button>
                    {dropdownOpenUser && (
                        <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50">
                            <Link to="/" className="block px-4 py-2 text-gray-700 hover:bg-gray-300">{account?.username}</Link>
                            {account?.role === "admin" && <Link to="/" className="block px-4 py-2 text-gray-700 hover:bg-gray-300">{account?.role} panel</Link>}
                            <button onClick={handleLogout} className="w-full px-4 py-2 text-gray-700 hover:bg-gray-300 flex justify-start items-center gap-3">
                                Logout <FaSignInAlt />
                            </button>
                        </div>
                    )}
                </div>
            ) : (
                <Link to="/login" className="text-white hover:bg-white hover:text-black rounded-lg p-2 flex justify-center items-center gap-1">
                    <FaSignInAlt />Login
                </Link>
            )}
        </>
    );
};

export default UserStatus;
